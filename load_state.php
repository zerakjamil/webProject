<?php
session_start();
header('Content-Type: application/json');

// Debug information
$debug = [
    'session_id' => session_id(),
    'session_status' => session_status(),
    'session_path' => session_save_path()
];

if (isset($_SESSION['game_state']) && is_array($_SESSION['game_state'])) {
    // Validate required fields
    if (!isset($_SESSION['game_state']['current_scene'])) {
        $_SESSION['game_state']['current_scene'] = 'entrance'; // Default scene
    }
    
    echo json_encode([
        'status' => 'success', 
        'game_state' => $_SESSION['game_state'],
        'debug' => $debug
    ]);
} else {
    echo json_encode([
        'status' => 'error', 
        'message' => 'No saved game found',
        'debug' => $debug
    ]);
}
?>