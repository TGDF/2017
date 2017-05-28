<?php

/**
 * Define your routes and which views to display
 * depending of the query.
 *
 * Based on WordPress conditional tags from the WordPress Codex
 * http://codex.wordpress.org/Conditional_Tags
 *
 */

Route::get('home', function()
{
    return view('home');
});

Route::get('page', ['speakers', 'uses' => 'Speaker@index']);
Route::get('singular', ['speaker', 'uses' => 'Speaker@show']);

Route::get('template', ['sessions', 'uses' => 'Session@index']);
