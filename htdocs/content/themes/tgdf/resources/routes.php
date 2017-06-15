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
Route::get('single', function($post, $query) {
  $id = pll_get_post($post->ID);
  if($id !== false) {
    $post = get_post($id);
  }

  return view('post', [
    'post' => $post
  ]);
});

Route::get('template', ['sessions', 'uses' => 'SessionController@index']);
Route::get('template', ['partners', 'uses' => 'PartnerController@index']);
Route::get('template', ['indie_space', 'uses' => 'IndieSpaceController@index']);
Route::get('template', ['register', function($page, $query) {
  $id = pll_get_post($page->ID);
  if($id !== false) {
    $page = get_post($id);
  }

  return view('register', [
    'page' => $page
  ]);
}]);

Route::get('template', ['b2b', function($page, $query) {
  $id = pll_get_post($page->ID);
  if($id !== false) {
    $page = get_post($id);
  }

  return view('b2b', [
    'page' => $page
  ]);
}]);

Route::get('page', function($page, $query) {
  $id = pll_get_post($page->ID);
  if($id !== false) {
    $page = get_post($id);
  }

  return view('page', [
    'page' => $page
  ]);
});
