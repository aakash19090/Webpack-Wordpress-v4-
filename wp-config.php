<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress-webpack' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '|kDg5d5Ph5*Upog??1mTk/-2?,0+dEb<Sl/F1aKFIz~dXFI[3?Ve0g<06D-@2f}$' );
define( 'SECURE_AUTH_KEY',  ';/jWQ~Iywluek6yeRDX96GC8R|Gcq7F *3{<2.b%d;.7uS7%q Z2$ocM@k/rogvG' );
define( 'LOGGED_IN_KEY',    'B#lP-_DBli)C:yFh%80man?6(OKlTDzGZY[d0HlS#<sED+G5-$i=`ttW{`zBo,y ' );
define( 'NONCE_KEY',        ',1LIFUTfDo;Vp]m[@1x,=6<eD]x*/:+f<*L(DiIKcWJ|[f*pB.}nA}]LHmo*2{t8' );
define( 'AUTH_SALT',        '>{|OT>.(8PK0g7U_l|gQ~z>*b{G4@7-u{ZUtXQN-Ads|f@9L!0UAG$BnO ~sg!;W' );
define( 'SECURE_AUTH_SALT', 'Ny+.O.PVjHq36;TeVlH Au_EbCA8ICJP~-4oMas021:V9ae+ABnUB%c#C`l.r})I' );
define( 'LOGGED_IN_SALT',   '3nv:4G6; Lbzh*olvc_*K==-.mL8b{uim8AZ-5Mz>dOh<<(MtH0O[$EIv%cC=0B/' );
define( 'NONCE_SALT',       'h2Dz@=nttKF@ZT7#m/xA.yzVBgLchf|%nAcOZ4CNVvj T@1]=BQn~,%vGwCdSJ6?' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
