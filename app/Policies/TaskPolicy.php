<?php

namespace App\Policies;

use App\Models\Task;
use App\Models\User;

class TaskPolicy
{
    public function update(User $user, Task $task): bool
    {
        if ($task->user_id === $user->id) {
            return true;
        }

        return false;
    }

    public function delete(User $user, Task $task): bool
    {
        if ($task->user_id === $user->id) {
            return true;
        }

        return false;
    }
}
