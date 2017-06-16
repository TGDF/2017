<?php

/**
 * Define your theme custom code.
 */

// Assets
Asset::add('dopetrope', 'css/dopetrope.min.css', false, '1.0', 'all');
Asset::add('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', false, '1.0', 'all');
Asset::add('app', 'css/application.min.css', ['dopetrope'], '1.0', 'all');
Asset::add('slick-css', '//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css', false, '1.6.0', 'all');

Asset::add('slick-js', '//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js', ['jquery'], '1.6.0', false);
Asset::add('theme', 'js/theme.min.js', ['jquery'], '1.0', true);
Asset::add('util', 'js/util.min.js', ['theme'], '1.0', true);
Asset::add('main', 'js/main.min.js', ['theme'], '1.0', true);

// Polylang
pll_register_string(THEME_TEXTDOMAIN, '首頁', 'Navigation');
pll_register_string(THEME_TEXTDOMAIN, '議程表', 'Navigation');
pll_register_string(THEME_TEXTDOMAIN, '講師陣容', 'Navigation');
pll_register_string(THEME_TEXTDOMAIN, '合作夥伴', 'Navigation');
pll_register_string(THEME_TEXTDOMAIN, '立即購票', 'Navigation');
pll_register_string(THEME_TEXTDOMAIN, '商業媒合', 'Navigation');
pll_register_string(THEME_TEXTDOMAIN, '人才招募', 'Navigation');
pll_register_string(THEME_TEXTDOMAIN, '獨立遊戲', 'Navigation');

pll_register_string(THEME_TEXTDOMAIN, '閱讀更多', 'User Interface');
pll_register_string(THEME_TEXTDOMAIN, '觀看影片', 'User Interface');

pll_register_string(THEME_TEXTDOMAIN, 'BUY_TICKET_LINK', 'Register');
pll_register_string(THEME_TEXTDOMAIN, '一般票', 'Register');
pll_register_string(THEME_TEXTDOMAIN, 'TWD 2,500', 'Register');
pll_register_string(THEME_TEXTDOMAIN, '單人購票方案。', 'Register');
pll_register_string(THEME_TEXTDOMAIN, '團體票', 'Register');
pll_register_string(THEME_TEXTDOMAIN, 'TWD 1, 800', 'Register');
pll_register_string(THEME_TEXTDOMAIN, '兩人或兩人以上團體，可透過此方案購票。', 'Register');
pll_register_string(THEME_TEXTDOMAIN, '學生票', 'Register');
pll_register_string(THEME_TEXTDOMAIN, 'TWD 1,000', 'Register');
pll_register_string(THEME_TEXTDOMAIN, '學生購票方案，報到時須出示學生證。', 'Register');

pll_register_string(THEME_TEXTDOMAIN, 'INTRODUCE', 'Home');
pll_register_string(THEME_TEXTDOMAIN, '最新消息', 'Home');
