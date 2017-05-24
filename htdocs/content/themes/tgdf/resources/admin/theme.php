<?php

/**
 * Define your theme custom code.
 */

Asset::add('dopetrope', 'css/dopetrope.min.css', false, '1.0', 'all');
Asset::add('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', false, '1.0', 'all');

Asset::add('theme', 'js/theme.min.js', ['jquery'], '1.0', true);
// Asset::add('skel', 'js/skel.min.js', false, '1.0', true);
// Asset::add('skel-viewport', 'js/skel-viewport.min.js', false, '1.0', true);
Asset::add('util', 'js/util.min.js', false, '1.0', true);
Asset::add('main', 'js/main.min.js', false, '1.0', true);
