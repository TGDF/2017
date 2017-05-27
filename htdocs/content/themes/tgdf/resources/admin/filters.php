<?php

/**
 * Define WordPress filters for your theme.
 *
 * Based on the WordPress action hooks.
 * https://developer.wordpress.org/reference/hooks/
 *
 */

Filter::add('wp_nav_menu_objects', function($items, $args) {
  foreach($items as $item) {
    if($item->current) {
      array_push($item->classes, 'current');
    }
  }
  return $items;
});

Filter::add('document_title_parts', function($title) {
  global $post;
  if(is_page() || is_singular()) {
    $post = get_post(pll_get_post($post->ID));
    $title['title'] = $post->post_title;
  }
  return $title;
});
