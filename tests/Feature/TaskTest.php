<?php

use App\Models\Task;
use Illuminate\Support\Facades\Event;
use Inertia\Testing\AssertableInertia as Assert;

/*
|--------------------------------------------------------------------------
| List Tasks
|--------------------------------------------------------------------------
*/

it('shows the task list for the user only', function () {
    $user = login();

    Task::factory()->count(5)->create();
    Task::factory()->count(5)->create(['user_id' => $user->id]);

    $response = $this->get(route('tasks.index'));

    $response->assertStatus(200)
        ->assertInertia(fn (Assert $page) => $page
            ->component('Tasks')
            ->has('tasks.data', 5)
        );
});

/*
|--------------------------------------------------------------------------
| Store Task
|--------------------------------------------------------------------------
*/

it('stores a task', function () {
    Event::fake();

    $user = login();

    $task = Task::factory()->raw();

    $this->post(route('tasks.store'), $task);

    $task['due_date'] = \Carbon\Carbon::make($task['due_date']);
    $task['user_id'] = $user->id;

    $this->assertDatabaseHas(Task::class, $task);
    $this->assertDatabaseCount(Task::class, 1);

    Event::assertDispatched(\App\Events\TaskCreated::class);
});

/*
|--------------------------------------------------------------------------
| Update Task
|--------------------------------------------------------------------------
*/

it('updates a task', function () {
    $user = login();

    $task = Task::factory()->create(['user_id' => $user->id]);

    $data = Task::factory()->raw();

    $response = $this->from(route('tasks.index'))->put(route('tasks.update', $task), $data);

    $response->assertStatus(302)
        ->assertRedirect(route('tasks.index'));

    $data['due_date'] = \Carbon\Carbon::make($data['due_date']);
    $data['user_id'] = $user->id;

    $this->assertDatabaseHas(Task::class, $data);
    $this->assertDatabaseCount(Task::class, 1);
});

it('cannot update another users task', function () {
    $user = login();

    $task = Task::factory()->create();

    $data = Task::factory()->raw();

    $response = $this->put(route('tasks.update', $task), $data);

    $response->assertUnauthorized();
});

/*
|--------------------------------------------------------------------------
| Destroy Task
|--------------------------------------------------------------------------
*/

it('deletes a task', function () {
    $user = login();

    $task = Task::factory()->create(['user_id' => $user->id]);

    $response = $this->from(route('tasks.index'))->delete(route('tasks.destroy', $task));

    $response->assertStatus(302)
        ->assertRedirect(route('tasks.index'));

    $this->assertDatabaseCount(Task::class, 0);
});

it('cannot delete another users task', function () {
    login();

    $task = Task::factory()->create();

    $response = $this->from(route('tasks.index'))->delete(route('tasks.destroy', $task));

    $response->assertUnauthorized();
});
