<?php

use Theme\Models\Session;

PostType::make('speaker', pll__('講師陣容'), pll__('講師'))->set([
  'public' => true,
  'exclude_from_search' => true,
  'menu_position' => 20,
  'supports' => array(
  'title', 'thumbnail', 'editor', 'excerpt'
  ),
  'has_archive' => true,
  'rewrite' => array('slug' => 'speakers'),
  'show_in_rest' => true,
  'rest_base' => 'speakers'
]);

Metabox::make('Sessions', 'speaker')->set([
  Field::checkbox(
    '_sessions',
    Session::all()->mapWithKeys(function($session) { return [$session->ID => ' ' . $session->post_title]; })->toArray(),
    ['title' => 'Sessions']
  )
]);
