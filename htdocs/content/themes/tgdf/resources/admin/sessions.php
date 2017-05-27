<?php

PostType::make('session', 'Sessions', 'Session')->set([
  'public' => true,
  'menu_position' => 20,
  'supports' => array(
      'title', 'editor', 'excerpt', 'page-attributes'
  ),
  'has_archive' => true,
  'rewrite' => array('slug' => 'sessions'),
  'show_in_rest' => true,
  'rest_base' => 'sessions'
]);

Taxonomy::make('session_time', 'session', 'Times', 'Time')->set([
  'public' => true,
  'rewrite' => array( 'slug' => 'session_times' ),
  'hierarchical' => true,
  'show_in_rest' => true
]);

Taxonomy::make('session_type', 'session', 'Types', 'Type')->set([
  'public' => true,
  'rewrite' => array( 'slug' => 'session_types' ),
  'show_in_rest' => true
]);

Taxonomy::make('session_room', 'session', 'Rooms', 'Room')->set([
  'public' => true,
  'rewrite' => array( 'slug' => 'session_rooms' ),
  'hierarchical' => true,
  'show_in_rest' => true
]);
