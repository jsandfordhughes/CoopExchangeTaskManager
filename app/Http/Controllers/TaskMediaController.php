<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class TaskMediaController extends Controller
{
    public function store(Request $request, Task $task)
    {
        abort_if($request->user()->cannot('update', $task), 401);

        $request->validate([
            'file' => ['required', 'file', 'max:10000'],
        ]);

        $media = $task->addMediaFromRequest('file')->toMediaCollection();

        return response()->json(['url' => $media->getFullUrl(), 'id' => $media->id], 201);
    }

    public function destroy(Request $request, Task $task, Media $media)
    {
        abort_if($request->user()->cannot('delete', $task), 401);

        $media->delete();

        return redirect_back('Attachment deleted successfully.');
    }
}
