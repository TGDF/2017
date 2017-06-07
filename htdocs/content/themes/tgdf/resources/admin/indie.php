<?php

PostType::make('indie_game', 'Indie Games', 'Indie Game')->set([
  'public' => true,
  'exclude_from_search' => true,
  'menu_position' => 20,
  'supports' => array(
      'title', 'thumbnail', 'excerpt'
  ),
  'has_archive' => true,
  'rewrite' => array('slug' => 'indie_games'),
  'show_in_rest' => true,
  'rest_base' => 'indie_games',
]);

Metabox::make('Links', 'indie_game')->set([
  Field::text(
    'indie-game-url',
    ['title' => 'Link']
  ),
  Field::text(
    'indie-game-video',
    ['title' => 'Video']
  )
]);
