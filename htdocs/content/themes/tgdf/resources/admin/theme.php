<?php

/**
 * Define your theme custom code.
 */

// Assets
Asset::add('dopetrope', 'css/dopetrope.min.css', false, '1.0', 'all');
Asset::add('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', false, '1.0', 'all');
Asset::add('app', 'css/application.min.css', ['dopetrope'], '1.0', 'all');

Asset::add('theme', 'js/theme.min.js', ['jquery'], '1.0', true);
Asset::add('util', 'js/util.min.js', false, '1.0', true);
Asset::add('main', 'js/main.min.js', false, '1.0', true);

// Polylang
pll_register_string(THEME_TEXTDOMAIN, '首頁', 'Navigation');
pll_register_string(THEME_TEXTDOMAIN, '議程表', 'Navigation');
pll_register_string(THEME_TEXTDOMAIN, '講師陣容', 'Navigation');
pll_register_string(THEME_TEXTDOMAIN, '合作夥伴', 'Navigation');
pll_register_string(THEME_TEXTDOMAIN, '立即購票', 'Navigation');
pll_register_string(THEME_TEXTDOMAIN, '商業媒合', 'Navigation');

