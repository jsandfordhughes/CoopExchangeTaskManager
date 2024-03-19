<?php

namespace App\Enums;

enum TaskStatus: string
{
    case Pending = 'pending';
    case Completed = 'completed';
    case InProgress = 'in_progress';
    case Cancelled = 'cancelled';

    public static function labels(): array
    {
        return [
            self::Pending->value => 'Pending',
            self::Completed->value => 'Completed',
            self::InProgress->value => 'In Progress',
            self::Cancelled->value => 'Cancelled',
        ];
    }
}
