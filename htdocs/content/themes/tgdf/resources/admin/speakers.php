<?php

PostType::make('speaker', 'Speakers', 'Speaker')->set([
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
