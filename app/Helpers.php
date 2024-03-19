<?php

function redirect_back(?string $text = null, string $type = 'success', int $timeout = 3000): Illuminate\Http\RedirectResponse
{
    if (! $text) {
        return redirect()->back();
    }

    return redirect()->back()->with('notification', ['message' => $text, 'style' => $type, 'timeout' => $timeout]);
}

function redirect_to(string $url, ?string $text = null, string $type = 'success', int $timeout = 3000): Illuminate\Http\RedirectResponse
{
    if (! $text) {
        return redirect($url);
    }

    return redirect($url)->with('notification', ['message' => $text, 'style' => $type, 'timeout' => $timeout]);
}
