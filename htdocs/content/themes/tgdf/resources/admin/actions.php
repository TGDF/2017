<?php

/**
 * Define WordPress actions for your theme.
 *
 * Based on the WordPress action hooks.
 * https://developer.wordpress.org/reference/hooks/
 *
 */

/**
 * Handle Browser Sync.
 *
 * The framework loads by default the local environment
 * where the constant BS (Browser Sync) is defined to true for development purpose.
 *
 * Note: make sure to update the script statement below based on the terminal/console message
 * when launching the "gulp watch" task.
 */
Action::add('wp_footer', function()
{
    if (defined('BS') && BS):
        ?>
        <script type="text/javascript" id="__bs_script__">
            //<![CDATA[
            document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.18.12'><\/script>".replace("HOST", location.hostname));
            //]]>
        </script>
        <?php
    endif;
});

Action::add('after_setup_theme', function() {
  add_theme_support( 'post-thumbnails' );

  add_image_size( 'post-thumbnail-small', 374, 260, true );
  add_image_size( 'post-thumbnail-large', 580, 272, true );
  add_image_size( 'post-thumbnail-full', 1200, 444, true );

  add_image_size( 'speaker-small', 256, 256, true );
  add_image_size( 'speaker-full', 512, 512, true );
});
