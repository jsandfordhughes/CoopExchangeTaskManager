<?php

use App\Events\TaskCreated;
use App\Models\Task;
use App\Models\User;
use App\Notifications\TaskCreatedNotification;
use Illuminate\Support\Facades\Notification;

it('sends a notification to the user when a task is created', function () {
    $user = User::factory()->create();
    $task = Task::factory()->create(['user_id' => $user->id]);

    Notification::fake();

    (new \App\Listeners\SendTaskCreatedNotification())->handle(new TaskCreated($task));

    Notification::assertSentTimes(TaskCreatedNotification::class, 1);
    Notification::assertSentTo($user, TaskCreatedNotification::class);
});
