<?php

/**
 * Define your routes and which views to display
 * depending of the query.
 *
 * Based on WordPress conditional tags from the WordPress Codex
 * http://codex.wordpress.org/Conditional_Tags
 *
 */

Route::get('home', 'HomeController@index');

Route::get('postTypeArchive', ['speaker', 'uses' => 'SpeakerController@index']);
Route::get('singular', ['speaker', 'uses' => 'SpeakerController@show']);

Route::get('template', ['sessions', 'uses' => 'SessionController@index']);
Route::get('template', ['partners', 'uses' => 'PartnerController@index']);
Route::get('template', ['register', function($page, $query) {
  $id = pll_get_post($page->ID);
  if($id !== false) {
    $page = get_post($id);
  }

  return view('register', [
    'page' => $page
  ]);
}]);
Route::get('template', ['b2b', 'uses' => 'B2BController@index']);
