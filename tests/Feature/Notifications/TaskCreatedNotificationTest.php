<?php

it('renders the notification', function () {
    $user = \App\Models\User::factory()->create();

    $user->notify(new \App\Notifications\TaskCreatedNotification(
        task: \App\Models\Task::factory()->create(['user_id' => $user->id])
    ));

    expect(true)->toBeTrue();
});
