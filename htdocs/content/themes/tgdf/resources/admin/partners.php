<?php

PostType::make('sponsor', 'Sponsors', 'Sponsor')->set([
  'public' => true,
  'exclude_from_search' => true,
  'menu_position' => 20,
  'supports' => array(
      'title', 'thumbnail', 'excerpt'
  ),
  'has_archive' => true,
  'rewrite' => array('slug' => 'sponsors'),
  'show_in_rest' => true,
  'rest_base' => 'sponsors',
]);

Taxonomy::make('sponsor_level', 'sponsor', 'Levels', 'Level')->set([
  'public' => true,
  'rewrite' => array( 'slug' => 'sponsor_level' ),
  'hierarchical' => true,
  'show_in_rest' => true
]);

Metabox::make('Links', 'sponsor')->set([
  Field::text(
    'sponsor-link',
    ['title' => 'Speakers']
  )
]);
