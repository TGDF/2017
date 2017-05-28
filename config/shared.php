<?php

/*----------------------------------------------------*/
// WordPress database
/*----------------------------------------------------*/
define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATE', 'utf8mb4_unicode_ci');
$table_prefix = getenv('DB_PREFIX') ? getenv('DB_PREFIX') : 'wp_';

/*----------------------------------------------------*/
// Illuminate database
/*----------------------------------------------------*/
$capsule = new Illuminate\Database\Capsule\Manager();
$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => DB_HOST,
    'database'  => DB_NAME,
    'username'  => DB_USER,
    'password'  => DB_PASSWORD,
    'charset'   => DB_CHARSET,
    'collation' => DB_COLLATE,
    'prefix'    => $table_prefix
]);
$capsule->setAsGlobal();
$capsule->bootEloquent();
$GLOBALS['themosis.capsule'] = $capsule;

/*----------------------------------------------------*/
// Authentication unique keys and salts
/*----------------------------------------------------*/
/*
 * @link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service
 */

define('AUTH_KEY',         'p5;o03pj-z7=geX!u;V&yaAW@+4L-xDBgKovs6&+Qb+]3r6}1r F9SSI67`6JVGJ');
define('SECURE_AUTH_KEY',  '/N(Km$w*0h(s2Nx1ihrFN +z={Y+{<|^<t$%qT0b7,nnlmzl6&bc Z{[CL& */RG');
define('LOGGED_IN_KEY',    '6x5fr`^+v*?2DrmuPe4/&/rW`mSZ1:h~-H| xwBOE& Aot$|uFrgI%fwc+ne+].H');
define('NONCE_KEY',        'PL`+z:y#w?ve|.%9x.sn-;HBb(8L4a,7330fJfequPi+;4tQKf|M<B{Z|QY,/|mP');
define('AUTH_SALT',        '[dp#.1%vH.uVWQ7d81VYh)bt9w_jDgKkh6}$p%dwpG2ZpkrDC^48:-@&l)Wj04u+');
define('SECURE_AUTH_SALT', ',$=Z~}7oX3oTTdpnOAt,Ks8u4r&w-;C}*TzTPOV.pbx8g`P-`B=wvDb)VL>bRPZ3');
define('LOGGED_IN_SALT',   '4jq1l|;n89$D~XDbhg0YKmtPxHH|Wj1s`2+Qlk*^3?[n8+$YTq)&4/iFV+.gFl$n');
define('NONCE_SALT',       '7Z8_5uULnVq9mJmF2/^@-,a]wNvFOG!y||nN}As|N]] Y7U8h+(T,G|*tv|A_wDc');

/*----------------------------------------------------*/
// Custom settings
/*----------------------------------------------------*/
define('WP_AUTO_UPDATE_CORE', false);
define('DISALLOW_FILE_EDIT', true);
define('WP_DEFAULT_THEME', 'tgdf');

define('PLL_AJAX_ON_FRONT', true); // Force use "Cookie" to set langauge

/* That's all, stop editing! Happy blogging. */
