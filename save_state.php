<?php
session_start();
require_once 'config.php';

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('HTTP/1.1 405 Method Not Allowed');
    exit('Method not allowed');
}

// Get JSON data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate data
if (!$data || !isset($data['currentScene'])) {
    header('HTTP/1.1 400 Bad Request');
    exit('Invalid data');
}

// Update session with game state
$_SESSION['game_state'] = [
    'current_scene' => $data['currentScene'],
    'inventory' => $data['inventory'] ?? [],
    'choices_made' => $data['choicesMade'] ?? []
];

// Add timestamp
$_SESSION['game_state']['last_saved'] = date('Y-m-d H:i:s');

// Return success
header('Content-Type: application/json');
echo json_encode(['status' => 'success', 'message' => 'Game state saved']);
?>