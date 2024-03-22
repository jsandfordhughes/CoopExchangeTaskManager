<?php

use App\Models\Task;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

it('can store a file for a task', function () {
    $user = login();
    Storage::fake('public');
    $task = Task::factory()->create(['user_id' => $user->id]);

    $response = $this->postJson(route('tasks.media.store', $task), [
        'file' => UploadedFile::fake()->create('document.pdf'),
    ]);

    $response->assertStatus(201);

    Storage::disk('public')->assertExists($task->id.'/document.pdf');
});

it('cannot store a file if the user does not own the task', function () {
    $user = login();
    $task = Task::factory()->create();

    $response = $this->postJson(route('tasks.media.store', $task), [
        'file' => UploadedFile::fake()->create('document.pdf'),
    ]);

    $response->assertUnauthorized();
});

/*
|--------------------------------------------------------------------------
| Delete
|--------------------------------------------------------------------------
*/

it('can delete a file', function () {
    $user = login();
    Storage::fake('public');
    $task = Task::factory()->create(['user_id' => $user->id]);
    $media = $task->addMedia(UploadedFile::fake()->create('document.pdf'))->toMediaCollection();

    $response = $this->deleteJson(route('tasks.media.delete', [$task, $media]));

    $response->assertRedirect();

    expect($task->getMedia()->count())->toBe(0);
});

it('cannot delete a file if the user does not own the task', function () {
    $user = login();
    $task = Task::factory()->create();
    $media = $task->addMedia(UploadedFile::fake()->create('document.pdf'))->toMediaCollection();

    $response = $this->deleteJson(route('tasks.media.delete', [$task, $media]));

    $response->assertUnauthorized();
});

it('cannot delete a file if the file does not belong to the task', function () {
    $user = login();
    $task = Task::factory()->create(['user_id' => $user->id]);
    $media = $task->addMedia(UploadedFile::fake()->create('document.pdf'))->toMediaCollection();
    $anotherTask = Task::factory()->create();

    $response = $this->deleteJson(route('tasks.media.delete', [$anotherTask, $media]));

    $response->assertNotFound();
});
