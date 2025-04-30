<?php
// Configuration settings for Echoes of the Library game

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

// Path constants
define('ASSET_PATH', 'assets/');
define('IMAGE_PATH', ASSET_PATH . 'images/');
define('SOUND_PATH', ASSET_PATH . 'sounds/');
define('MUSIC_PATH', ASSET_PATH . 'music/');

// Game state constants
define('STATE_NEW_GAME', 0);
define('STATE_IN_PROGRESS', 1);
define('STATE_GAME_OVER', 2);
define('STATE_TRUE_ENDING', 3);
define('STATE_BAD_ENDING', 4);

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