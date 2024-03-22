<?php

use App\Http\Controllers\TaskController;
use App\Http\Controllers\TaskMediaController;
use App\Http\Controllers\TaskNoteController;
use Illuminate\Support\Facades\Route;

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::redirect('/', '/tasks');
    Route::apiResource('tasks', TaskController::class)->only('index', 'store', 'update', 'destroy');

    //Notes
    Route::post('tasks/{task}/notes', [TaskNoteController::class, 'store'])->name('tasks.notes.store');
    Route::delete('tasks/{task}/notes/{note:id}', [TaskNoteController::class, 'destroy'])->name('tasks.notes.destroy');

    //Media
    Route::post('tasks/{task}/media', [TaskMediaController::class, 'store'])->name('tasks.media.store');
    Route::delete('tasks/{task}/media/{media:id}', [TaskMediaController::class, 'destroy'])->name('tasks.media.delete');
});
