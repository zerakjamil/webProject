<?php
// Configuration settings for Echoes of the Library game
session_start();
// Debug mode (set to false for production)
define('DEBUG_MODE', true);

// Game settings
$game_settings = [
    'text_speed' => 30, // ms per character for typing effect
    'auto_save' => true, // automatically save progress
    'default_volume' => [
        'master' => 1.0,
        'music' => 0.7,
        'sfx' => 0.8,
        'voice' => 1.0,
        'ui' => 0.6
    ]
];

// Ensure sessions work properly
ini_set('session.cookie_lifetime', 60*60*24*30); // 30 days
ini_set('session.gc_maxlifetime', 60*60*24*30); // 30 days
session_cache_limiter('private');
session_save_path(__DIR__ . '/tmp'); // Create a tmp directory for session files

// Create the session save directory if it doesn't exist
if (!is_dir(__DIR__ . '/tmp')) {
    mkdir(__DIR__ . '/tmp', 0777, true);
}

// Other configuration settings can go here
date_default_timezone_set('UTC');

// Path constants
define('ASSET_PATH', 'assets/');
define('IMAGE_PATH', ASSET_PATH . 'images/');
define('SOUND_PATH', ASSET_PATH . 'sounds/');
define('MUSIC_PATH', ASSET_PATH . 'music/');
define('IMAGE_CHARACHTERS_PATH', ASSET_PATH . IMAGE_PATH . 'charachters/');
define('IMAGE_SCENE_PATH', ASSET_PATH . IMAGE_PATH . 'scenes/');

// Game state constants
define('STATE_NEW_GAME', 0);
define('STATE_IN_PROGRESS', 1);
define('STATE_GAME_OVER', 2);
define('STATE_TRUE_ENDING', 3);
define('STATE_BAD_ENDING', 4);


error_reporting(E_ALL);
ini_set('display_errors', 1);

// Game configuration
define('GAME_NAME', 'Echoes of the Library');
define('GAME_VERSION', '1.0.0');

// Database connection (if you decide to use a database)
/*
$db_config = [
    'host' => 'localhost',
    'username' => 'game_user',
    'password' => 'password',
    'database' => 'echoes_library'
];
*/

// Remove session lifetime setting
?>