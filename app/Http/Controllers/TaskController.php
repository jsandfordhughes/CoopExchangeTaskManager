<?php

namespace App\Http\Controllers;

use App\Enums\TaskPriority;
use App\Enums\TaskStatus;
use App\Events\TaskCreated;
use App\Http\Requests\TaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        return Inertia::render('Tasks', [
            'tasks' => TaskResource::collection($request->user()->tasks),
            'allowedStatuses' => TaskStatus::labels(),
            'allowedPriorities' => TaskPriority::labels(),
        ]);
    }

    public function store(TaskRequest $request)
    {
        $data = [...$request->validated(), 'user_id' => auth()->id()];
        $task = Task::create($data);

        TaskCreated::dispatch($task);

        return redirect_to(route('tasks.index', ['newTaskId' => $task]), 'Task created successfully');
    }

    public function update(TaskRequest $request, Task $task)
    {
        abort_if($request->user()->cannot('update', $task), 401);

        $task->update($request->validated());

        return redirect_back('Task updated successfully');
    }

    public function destroy(Request $request, Task $task)
    {
        abort_if($request->user()->cannot('delete', $task), 401);

        $task->delete();

        return redirect_back('Task deleted successfully');
    }
}
