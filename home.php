<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Echoes of the Library</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Crimson+Text&display=swap" rel="stylesheet">
    <style>
        :root {
            --highlight-color: #915f33;
            --dark-bg: #0a0a0c;
            --text-color: #e0e0e0;
            --font-gothic: 'Playfair Display', serif;
            --font-text: 'Crimson Text', serif;
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
            background-color: #000;
            font-family: var(--font-text);
            color: var(--text-color);
        }
        
        .title-container {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .title-image {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 1;
            transition: transform 30s ease, opacity 1s ease;
            transform-origin: center center;
        }
        
        /* Slow, subtle zoom effect on the image */
        .title-container:hover .title-image {
            transform: scale(1.05);
        }
        
        /* Vignette overlay to darken edges */
        .vignette {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: inset 0 0 150px rgba(0,0,0,0.9);
            pointer-events: none;
        }
        
        /* Screens system - each will be displayed/hidden as needed */
        .screen {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 0.5s ease;
            z-index: 10;
        }
        
        .screen.hidden {
            opacity: 0;
            pointer-events: none;
        }
        
        .screen-content {
            background-color: rgba(0, 0, 0, 0.8);
            border: 1px solid var(--highlight-color);
            padding: 2rem;
            max-width: 800px;
            width: 90%;
            text-align: center;
            position: relative;
        }
        
        /* Name input form */
        .name-input {
            margin: 2rem auto;
            width: 80%;
            max-width: 400px;
        }
        
        .name-input input {
            background-color: rgba(30, 25, 20, 0.8);
            border: 1px solid var(--highlight-color);
            padding: 10px 15px;
            font-family: var(--font-text);
            font-size: 1.2rem;
            color: var(--text-color);
            width: 100%;
            margin-bottom: 1rem;
        }
        
        .name-input input:focus {
            outline: none;
            border-color: #d0a875;
            box-shadow: 0 0 10px rgba(145, 95, 51, 0.5);
        }
        
        /* Character intro styling */
        .character-intro {
            text-align: left;
            line-height: 1.6;
            margin-bottom: 2rem;
            font-size: 1.1rem;
            max-height: 300px;
            overflow-y: auto;
            padding-right: 10px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.8);
        }
        
        .character-intro p {
            margin-bottom: 1rem;
        }
        
        /* Custom scrollbar */
        .character-intro::-webkit-scrollbar {
            width: 8px;
        }
        
        .character-intro::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.2);
        }
        
        .character-intro::-webkit-scrollbar-thumb {
            background: var(--highlight-color);
        }
        
        /* Button container for positioning */
        .button-container {
            margin-top: 1rem;
            text-align: center;
        }
        
        /* Custom start button styling */
        .start-button {
            font-family: var(--font-gothic);
            background-color: rgba(0, 0, 0, 0.6);
            color: var(--highlight-color);
            border: 1px solid var(--highlight-color);
            padding: 12px 40px;
            font-size: 1.5rem;
            letter-spacing: 2px;
            cursor: pointer;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(145, 95, 51, 0.3);
        }
        
        /* Button hover effects */
        .start-button:hover {
            background-color: rgba(20, 15, 10, 0.8);
            transform: translateY(-3px);
            box-shadow: 0 0 15px rgba(145, 95, 51, 0.5);
            color: #d0a875;
            border-color: #d0a875;
        }
        
        /* Button active/click effect */
        .start-button:active {
            transform: translateY(1px);
        }
        
        /* Decorative elements for the button */
        .start-button::before, .start-button::after {
            content: "";
            position: absolute;
            width: 20px;
            height: 20px;
            border: 1px solid var(--highlight-color);
            opacity: 0.6;
            transition: all 0.4s ease;
        }
        
        .start-button::before {
            top: -5px;
            left: -5px;
            border-right: none;
            border-bottom: none;
        }
        
        .start-button::after {
            bottom: -5px;
            right: -5px;
            border-left: none;
            border-top: none;
        }
        
        .start-button:hover::before, .start-button:hover::after {
            width: 30px;
            height: 30px;
            opacity: 0.8;
            border-color: #d0a875;
        }
        
        /* Animated candlelight flicker effect on button */
        @keyframes flicker {
            0%, 100% { text-shadow: 0 0 5px rgba(255, 215, 0, 0.3); }
            25% { text-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
            50% { text-shadow: 0 0 7px rgba(255, 215, 0, 0.2); }
            75% { text-shadow: 0 0 12px rgba(255, 215, 0, 0.4); }
        }
        
        .start-button {
            animation: flicker 3s infinite alternate;
        }
        
        /* Section headings */
        .screen-title {
            color: var(--highlight-color);
            font-family: var(--font-gothic);
            font-size: 1.8rem;
            margin-bottom: 1rem;
            text-shadow: 0 0 10px rgba(0,0,0,0.5);
        }
        
        /* Loading overlay */
        .loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.8s ease;
        }
        
        .loading.active {
            opacity: 1;
            pointer-events: all;
        }
        
        .loading-text {
            color: var(--highlight-color);
            font-family: var(--font-gothic);
            font-size: 1.8rem;
            letter-spacing: 1px;
            text-align: center;
            max-width: 80%;
        }
        
        /* Floating dust particles effect */
        .dust {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        
        .dust-particle {
            position: absolute;
            width: 3px;
            height: 3px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            animation: float 20s infinite linear;
        }
        
        /* Ghost image styles */
        .ghost-container {
            position: absolute;
            bottom: -100px;
            right: -50px;
            width: 200px;
            height: 200px;
            opacity: 0.4;
            animation: float-ghost 8s infinite ease-in-out;
            pointer-events: none;
            z-index: -1;
        }
        
        .ghost-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        
        @keyframes float-ghost {
            0%, 100% { transform: translateY(0) rotate(-5deg); opacity: 0.4; }
            50% { transform: translateY(-20px) rotate(5deg); opacity: 0.6; }
        }
        
        @keyframes float {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 0.5;
            }
            90% {
                opacity: 0.5;
            }
            100% {
                transform: translateY(-100vh) translateX(20px);
                opacity: 0;
            }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
            .start-button {
                font-size: 1.2rem;
                padding: 10px 30px;
            }
            
            .loading-text {
                font-size: 1.4rem;
            }
            
            .character-intro {
                max-height: 200px;
                font-size: 1rem;
            }
            
            .screen-content {
                padding: 1.5rem;
                width: 95%;
            }
        }
    </style>
</head>
<body>
    <div class="title-container">
        <!-- Title image that fills the screen -->
        <img src="assets/images/characters/page-home.png" alt="Echoes of the Library" class="title-image">
        
        <!-- Vignette overlay -->
        <div class="vignette"></div>
        
        <!-- Animated dust particles -->
        <div class="dust" id="dustContainer"></div>
        
        <!-- Welcome Screen -->
        <div class="screen" id="welcomeScreen">
            <div class="button-container">
                <button id="startButton" class="start-button">START</button>
            </div>
        </div>
        
        <!-- Name Input Screen -->
        <div class="screen hidden" id="nameScreen">
            <div class="screen-content">
                <h2 class="screen-title">What is your name?</h2>
                <div class="name-input">
                    <input type="text" id="playerName" placeholder="Enter your name..." maxlength="20">
                </div>
                <div class="button-container">
                    <button id="nameConfirmButton" class="start-button">CONTINUE</button>
                </div>
                <!-- Creepy ghost image in background -->
                <div class="ghost-container">
                    <img src="assets/images/characters/ghost-girl.png" alt="" class="ghost-img">
                </div>
            </div>
        </div>
        
        <!-- Character Intro Screen -->
        <div class="screen hidden" id="introScreen">
            <div class="screen-content">
                <h2 class="screen-title">Your Story Begins...</h2>
                <div class="character-intro" id="characterIntro">
                    <!-- This will be populated with the story intro and the player's name -->
                </div>
                <div class="button-container">
                    <button id="enterLibraryButton" class="start-button">ENTER THE LIBRARY</button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Loading overlay with atmospheric text -->
    <div id="loading" class="loading">
        <div class="loading-text">
            The library doors creak open slowly...<br>
            <span style="font-size: 0.8em; opacity: 0.8;">The books wait for you in the darkness.</span>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Create dust particle effect
            const dustContainer = document.getElementById('dustContainer');
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('dust-particle');
                
                // Random position
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                
                // Random size
                const size = Math.random() * 3 + 1;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                // Random opacity
                particle.style.opacity = Math.random() * 0.5 + 0.1;
                
                // Random animation duration
                const duration = Math.random() * 20 + 10;
                particle.style.animation = `float ${duration}s infinite linear`;
                
                // Random animation delay
                particle.style.animationDelay = Math.random() * 10 + 's';
                
                dustContainer.appendChild(particle);
            }
            
            // Get screen elements
            const welcomeScreen = document.getElementById('welcomeScreen');
            const nameScreen = document.getElementById('nameScreen');
            const introScreen = document.getElementById('introScreen');
            const characterIntro = document.getElementById('characterIntro');
            const playerNameInput = document.getElementById('playerName');
            
            // Function to switch between screens with fade effect
            function showScreen(screenToShow) {
                [welcomeScreen, nameScreen, introScreen].forEach(screen => {
                    if (screen === screenToShow) {
                        screen.classList.remove('hidden');
                    } else {
                        screen.classList.add('hidden');
                    }
                });
            }
            
            // START button on welcome screen
            document.getElementById('startButton').addEventListener('click', function() {
                showScreen(nameScreen);
                
                // Auto-focus the name input
                setTimeout(() => playerNameInput.focus(), 500);
                
                // Try to play sound effect
                try {
                    const pageSound = new Audio('assets/sounds/page_turn.mp3');
                    pageSound.volume = 0.4;
                    pageSound.play();
                } catch (e) {
                    console.log('Sound not available');
                }
            });
            
            // Name confirmation button
            document.getElementById('nameConfirmButton').addEventListener('click', function() {
                const playerName = playerNameInput.value.trim() || "Alex";
                
                // Generate character intro with the player's name
                const introText = `
                <p>The afternoon lecture on Ancient Linguistics had run longer than expected, and now ${playerName} was paying the price. Rain poured down in sheets as they hurried along the empty streets, their backpack clutched tightly against their chest to protect their laptop and textbooks.</p>
                
                <p>"Just three more blocks to my apartment," ${playerName} muttered, pushing their soaked hair from their eyes.</p>
                
                <p>Lightning flashed, followed almost immediately by a deafening crack of thunder. The storm was directly overhead now.</p>
                
                <p>That's when ${playerName} noticed it – an old brick building set back from the road, partially hidden by overgrown trees. A library. In the four years they'd been walking this route to campus, they'd never noticed it before.</p>
                
                <p>"That's strange," thought ${playerName}, squinting through the rain. "Has that always been there?"</p>
                
                <p>Another flash of lightning illuminated an ornate sign: "Aeternum Library." The windows glowed with warm light, promising shelter...</p>
                `;
                
                // Set the intro text
                characterIntro.innerHTML = introText;
                
                // Show the intro screen
                showScreen(introScreen);
                
                // Try to play sound effect
                try {
                    const pageSound = new Audio('assets/sounds/page_turn.mp3');
                    pageSound.volume = 0.4;
                    pageSound.play();
                } catch (e) {
                    console.log('Sound not available');
                }
            });
            
            // Add enter key handler for name input
            playerNameInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    document.getElementById('nameConfirmButton').click();
                }
            });
            
            // Enter library button
            document.getElementById('enterLibraryButton').addEventListener('click', function() {
                // Show loading screen with fade-in
                document.getElementById('loading').classList.add('active');
                
                // Get the player name for passing to the game
                const playerName = playerNameInput.value.trim() || "Alex";
                
                // Play sound effect for entering library
                try {
                    const doorSound = new Audio('assets/sounds/creaky_door.mp3');
                    doorSound.volume = 0.5;
                    doorSound.play();
                } catch (e) {
                    console.log('Sound not available');
                }
                
                // Redirect to the game after a short delay
                setTimeout(function() {
                    window.location.href = `index.php?skip_splash=true&player_name=${encodeURIComponent(playerName)}`;
                }, 2500);
            });
        });
    </script>
</body>
</html>
```
</copilot-edited-file>
