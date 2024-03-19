<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Models\Task;
use Illuminate\Http\Request;
use Mockery\Matcher\Not;

class NoteController extends Controller
{
    public function store(Request $request, Task $task)
    {
        abort_if($request->user()->cannot('update', $task), 401);

        $validated = $request->validate([
            'note' => ['required', 'string', 'max:255']
        ]);

        $task->notes()->create($validated);

        return redirect_back('Note created');
    }

    public function destroy(Request $request, Task $task, Note $note)
    {
        abort_if($request->user()->cannot('delete', $task), 401);

        $note->delete();

        return redirect_back('Note deleted');
    }
}
