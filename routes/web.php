<?php

use App\Http\Controllers\NoteController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::redirect('/', '/tasks');
    Route::apiResource('tasks', TaskController::class)->only('index', 'store', 'update', 'destroy');
    Route::post('tasks/{task}/notes', [NoteController::class, 'store'])->name('tasks.notes.store');
    Route::delete('tasks/{task}/notes/{note:id}', [NoteController::class, 'destroy'])->name('tasks.notes.destroy');
});
