<?php
// Remove session handling - using localStorage instead
// Check if we should skip the splash screen
$skip_splash = isset($_GET['skip_splash']) && $_GET['skip_splash'] === 'true';

// Get player name if provided
$player_name = isset($_GET['player_name']) ? htmlspecialchars($_GET['player_name']) : 'Alex';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Echoes of the Library</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/scene-backgrounds.css">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Crimson+Text&display=swap" rel="stylesheet">
</head>
<body>
    <div class="game-container">
        <!-- Background Layer -->
        <div id="background" class="background-layer"></div>
        
        <!-- Character Layer -->
        <div id="character" class="character-layer"></div>
        
        <!-- Effects Layer (for special visual effects) -->
        <div id="effects" class="effects-layer"></div>
        
        <!-- UI Layer -->
        <div class="ui-layer">
            <!-- Dialog Box -->
            <div id="dialog-box" class="dialog-box">
                <div id="speaker-portrait" class="speaker-portrait"></div>
                <div id="speaker" class="speaker"></div>
                <div id="dialog" class="dialog-text"></div>
                <button id="next-btn" class="next-btn">Next <span class="arrow">►</span></button>
            </div>
            
            <!-- Choices Container -->
            <div id="choices" class="choices-container"></div>
        </div>
        
        <!-- Game Menu -->
        <div class="game-menu">
            <button id="save-btn" class="menu-btn">Save</button>
            <button id="load-btn" class="menu-btn">Load</button>
            <button id="settings-btn" class="menu-btn">Settings</button>
        </div>
    </div>
    
    <!-- Add a debugging element -->
    <div id="debug-console" style="position:fixed; bottom:5px; left:5px; color:white; font-size:10px;"></div>
    
    <!-- Libraries -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    
    <!-- Game Scripts - Ensure correct loading order -->
    <script src="js/audioManager.js"></script>
    <script src="js/transitions.js"></script>
    <script src="js/story.js"></script>
    <script src="js/engine.js"></script>
    
    <!-- Pass the skip_splash parameter to JavaScript -->
    <script>
        // Set global variables
        window.skipSplash = <?php echo $skip_splash ? 'true' : 'false'; ?>;
        window.playerName = "<?php echo $player_name; ?>"; // Make player name available to game
    </script>
    
    <!-- Add error handling -->
    <script>
        window.onerror = function(msg, url, line, col, error) {
            const debugConsole = document.getElementById('debug-console');
            if (debugConsole) {
                debugConsole.innerHTML += `Error: ${msg} at ${url}:${line}:${col}<br>`;
            }
            console.error("Error occurred:", error);
            return false;
        };
    </script>
</body>
</html>