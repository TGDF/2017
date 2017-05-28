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

Filter::add('pll_set_language_from_query', function($lang, $query) {
  $query_lang = get_query_var('lang');
  if(empty($query_lang)) {
    set_query_var('lang', $_COOKIE[ PLL_COOKIE ]);
  }
  return $lang;
}, 1, 2);
