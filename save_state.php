<?php
session_start();
require_once 'config.php';

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('HTTP/1.1 405 Method Not Allowed');
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

// Get JSON data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate data
if (!$data || !isset($data['currentScene'])) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(['status' => 'error', 'message' => 'Invalid data']);
    exit;
}

// Update session with game state
$_SESSION['game_state'] = [
    'current_scene' => $data['currentScene'],
    'inventory' => $data['inventory'] ?? [],
    'choices_made' => $data['choicesMade'] ?? [],
    'endings_seen' => isset($data['gameState']) && isset($data['gameState']['endingsSeen']) 
        ? $data['gameState']['endingsSeen'] : []
];

// Add timestamp
$_SESSION['game_state']['last_saved'] = date('Y-m-d H:i:s');

// Return success with session info for debugging
header('Content-Type: application/json');
echo json_encode([
    'status' => 'success', 
    'message' => 'Game state saved',
    'debug' => [
        'session_id' => session_id(),
        'saved_data' => $_SESSION['game_state']
    ]
]);
?>