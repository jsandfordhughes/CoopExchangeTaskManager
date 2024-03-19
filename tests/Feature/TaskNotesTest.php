<?php

use App\Models\Note;
use App\Models\Task;

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

test('A user can store a note on a task', function () {
    $user = login();

    $task = Task::factory()->create(['user_id' => $user->id]);

    $note = Note::factory()->raw();

    $this->post(route('tasks.notes.store', $task), $note);

    $note['task_id'] = $task->id;

    $this->assertDatabaseHas(Note::class, $note);
    $this->assertDatabaseCount(Note::class, 1);
});

test('A user cannot store a note on a task they do not own', function () {
    $user = login();

    $task = Task::factory()->create();

    $note = Note::factory()->raw();

    $response = $this->post(route('tasks.notes.store', $task), $note);

    $response->assertUnauthorized();

    $this->assertDatabaseCount(Note::class, 0);
});

/*
|--------------------------------------------------------------------------
| Delete
|--------------------------------------------------------------------------
*/

test('A user can delete a note on a task', function () {
    $user = login();

    $task = Task::factory()->create(['user_id' => $user->id]);

    $note = Note::factory()->create(['task_id' => $task->id]);

    $this->delete(route('tasks.notes.destroy', [$task, $note]));

    $this->assertDatabaseMissing(Note::class, $note->toArray());
    $this->assertDatabaseCount(Note::class, 0);
});

test('A user cannot delete a note where the task does not belong to them', function () {
    $user = login();

    $task = Task::factory()->create();

    $note = Note::factory()->create(['task_id' => $task->id]);

    $response = $this->delete(route('tasks.notes.destroy', [$task, $note]));

    $response->assertUnauthorized();

    $this->assertDatabaseCount(Note::class, 1);
});

test('A user cannot delete a note that does not belong to the task', function () {
    $user = login();

    $task = Task::factory()->create(['user_id' => $user->id]);

    $note = Note::factory()->create();

    $response = $this->delete(route('tasks.notes.destroy', [$task, $note]));

    $response->assertNotFound();

    $this->assertDatabaseCount(Note::class, 1);
});
