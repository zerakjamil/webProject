class GameEngine {
    constructor() {
        this.currentScene = null;
        this.dialogElement = document.getElementById('dialog');
        this.speakerElement = document.getElementById('speaker');
        this.speakerPortraitElement = document.getElementById('speaker-portrait');
        this.choicesElement = document.getElementById('choices');
        this.backgroundElement = document.getElementById('background');
        this.characterElement = document.getElementById('character');
        this.effectsElement = document.getElementById('effects');
        this.nextButton = document.getElementById('next-btn');
        this.gameState = {
            inventory: [],
            choicesMade: [],
            endingsSeen: []
        };
        
        this.typingSpeed = 30; // ms per character
        this.typingInstance = null;
        
        // Initialize event listeners
        this.initEventListeners();
    }
    
    initEventListeners() {
        // Dialog click to continue
        this.dialogElement.addEventListener('click', () => {
            this.handleDialogueClick();
        });
        
        // Next button click
        this.nextButton.addEventListener('click', () => {
            this.handleDialogueClick();
        });
        
        // Save and load buttons
        document.getElementById('save-btn').addEventListener('click', () => this.saveGame());
        document.getElementById('load-btn').addEventListener('click', () => this.loadGame());
    }
    
    handleDialogueClick() {
        if (this.isDialogueComplete) {
            this.advanceScene();
        } else {
            // Skip typing animation and show full text immediately
            if (this.typingInstance) {
                this.typingInstance.destroy();
            }
            this.dialogElement.innerHTML = this.currentDialogueText;
            this.isDialogueComplete = true;
            this.showNextButton();
        }
    }
    
    startGame() {
        // Load first scene
        this.loadScene('entrance');
        
        // Log to make sure the scene is loading
        console.log('Game started, loading scene:', this.currentScene);
    }
    
    loadScene(sceneId) {
        // Get scene data from story.js
        const sceneData = STORY_DATA[sceneId]; // Use a local variable

        if (!sceneData) {
            console.error(`Scene ${sceneId} not found!`);
            this.dialogElement.textContent = `Error: Scene "${sceneId}" not found. Check story.js.`;
            this.speakerElement.textContent = 'System Error';
            return;
        }

        this.currentScene = sceneData; // Assign to instance variable
        console.log('Loading scene:', sceneId, this.currentScene);

        // Update background
        this.changeBackground(this.currentScene.background);

        // Update character if present
        if (this.currentScene.character) {
            this.showCharacter(this.currentScene.character);
        } else {
            this.hideCharacter();
        }

        // Special visual/audio effects
        if (this.currentScene.effects) {
            this.applyEffects(this.currentScene.effects);
        }

        // Clear existing choices and hide the container
        this.choicesElement.innerHTML = '';
        this.choicesElement.style.display = 'none';

        // Start dialogue
        this.dialogIndex = 0;
        this.showDialogue();

        // Save current scene to session (if needed, or rely on manual save)
        // Consider if auto-saving on every scene load is desired
        // this.saveGameState();
    }
    
    showDialogue() {
        if (this.dialogIndex >= this.currentScene.dialogue.length) {
            // End of dialogue for this scene, show choices if any
            if (this.currentScene.choices) {
                console.log(`End of dialogue reached, showing ${this.currentScene.choices.length} choices for scene ${this.currentScene.id}`);
                this.showChoices();
            } else {
                console.log(`No choices found for scene ${this.currentScene.id} at end of dialogue`);
            }
            return;
        }
        
        const dialogueEntry = this.currentScene.dialogue[this.dialogIndex];
        
        // Handle player name for the speaker
        let speakerName = dialogueEntry.speaker;
        if (speakerName === "You" && window.playerName) {
            speakerName = window.playerName;
        }
        
        this.speakerElement.textContent = speakerName || '';
        this.isDialogueComplete = false;
        
        // Process text to replace "You" with player name if needed
        let dialogText = dialogueEntry.text;
        if (window.playerName && dialogText.includes("You")) {
            dialogText = dialogText.replace(/\bYou\b/g, window.playerName);
        }
        
        this.currentDialogueText = dialogText;
        
        // Portrait mapping system
        const portraitMap = {
            // Kurdish to English mapping 
            "کتێبدار": "librarian",
            "گێڕەرەوە": "narrator", 
            "تۆ": "player",
            "Librarian": "librarian",
            "Narrator": "narrator",
            "You": "player"
        };
        
        // Get character type from the mapping
        const characterType = portraitMap[dialogueEntry.speaker];
        
        // Set appropriate portrait based on character type
        if (characterType) {
            // Get emotion if specified in the scene's character data
            let emotion = "neutral";
            if (this.currentScene.character && this.currentScene.character.emotion) {
                emotion = this.currentScene.character.emotion;
            }
            
            // Set portrait based on character type
            switch(characterType) {
                case "librarian":
                    this.speakerPortraitElement.innerHTML = `<img src="./assets/images/characters/librarian/librarian-${emotion}.png" alt="Librarian">`;
                    this.speakerPortraitElement.style.display = 'block';
                    break;
                case "curator":
                    this.speakerPortraitElement.innerHTML = `<img src="./assets/images/characters/curator/Curator.png" alt="Curator">`;
                    this.speakerPortraitElement.style.display = 'block';
                    break;
                case "ghost":
                    this.speakerPortraitElement.innerHTML = `<img src="./assets/images/characters/ghost/ghost-girl.png" alt="Ghost">`;
                    this.speakerPortraitElement.style.display = 'block';
                    break;
                default:
                    // Hide portrait for other speakers like narrator or player
                    this.speakerPortraitElement.style.display = 'none';
                    this.speakerPortraitElement.innerHTML = '';
                    break;
            }
            
            // Ensure dialog box has enough height when showing a portrait
            if (this.speakerPortraitElement.style.display === 'block') {
                this.dialogElement.style.minHeight = '80px';
            } else {
                this.dialogElement.style.minHeight = '';
            }
        } else {
            // No matching portrait, hide the portrait element
            this.speakerPortraitElement.style.display = 'none';
            this.speakerPortraitElement.innerHTML = '';
            this.dialogElement.style.minHeight = '';
        }
        
        // Hide choices while showing dialogue
        this.choicesElement.style.display = 'none';
        
        // Hide next button while text is typing
        this.hideNextButton();
        
        // Use Typed.js for typewriter effect
        if (this.typingInstance) {
            this.typingInstance.destroy();
        }
        
        this.dialogElement.innerHTML = '';
        this.typingInstance = new Typed('#dialog', {
            strings: [dialogText],
            typeSpeed: this.typingSpeed,
            showCursor: false,
            onComplete: () => {
                this.isDialogueComplete = true;
                this.showNextButton();
            }
        });
    }
    
    advanceScene() {
        this.dialogIndex++;
        this.hideNextButton();
        
        // Check if we've reached the end of dialogue before showing the next one
        if (this.dialogIndex >= this.currentScene.dialogue.length) {
            console.log(`Advanced to end of dialogue (index: ${this.dialogIndex})`);
            this.showDialogue(); // This will trigger showing choices if available
        } else {
            console.log(`Advanced dialogue to index ${this.dialogIndex}`);
            this.showDialogue();
        }
    }
    
    showNextButton() {
        this.nextButton.classList.add('visible');
    }
    
    hideNextButton() {
        this.nextButton.classList.remove('visible');
    }
    
    showChoices() {
        try {
            console.log("Showing choices for scene:", this.currentScene.id);
            
            this.hideNextButton(); // Hide next button when showing choices
            
            // Clear and ensure visibility of choices container
            this.choicesElement.innerHTML = '';
            this.choicesElement.style.display = 'flex';
            
            if (!this.currentScene.choices || this.currentScene.choices.length === 0) {
                console.error("No choices available for this scene");
                return;
            }
            
            this.currentScene.choices.forEach((choice, index) => {
                const choiceButton = document.createElement('button');
                choiceButton.className = 'choice-btn';
                choiceButton.textContent = choice.text;
                
                choiceButton.addEventListener('click', () => {
                    // Record choice
                    this.gameState.choicesMade.push({
                        scene: this.currentScene.id,
                        choice: choice.text,
                        nextScene: choice.nextScene
                    });
                    
                    // Add to inventory if item
                    if (choice.addToInventory) {
                        this.gameState.inventory.push(choice.addToInventory);
                    }
                    
                    console.log(`Choice selected: ${choice.text}, loading scene: ${choice.nextScene}`);
                    
                    // Transition to next scene with fade effect
                    Transitions.fadeOut(500).then(() => {
                        this.loadScene(choice.nextScene);
                        Transitions.fadeIn(800);
                    });
                });
                
                this.choicesElement.appendChild(choiceButton);
                console.log(`Added choice button: ${choice.text}`);
            });
            
            // Animation for choices appearing
            const choices = document.querySelectorAll('.choice-btn');
            choices.forEach((choice, i) => {
                choice.style.opacity = '0';
                choice.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    choice.style.transition = 'all 0.5s ease';
                    choice.style.opacity = '1';
                    choice.style.transform = 'translateY(0)';
                }, 100 * i);
            });
        } catch (error) {
            console.error("Error showing choices:", error);
            // Create a fallback choice to prevent the player from getting stuck
            const fallbackButton = document.createElement('button');
            fallbackButton.className = 'choice-btn';
            fallbackButton.textContent = "Continue...";
            fallbackButton.addEventListener('click', () => {
                console.log("Using fallback choice navigation");
                this.loadScene('main_hall'); // Default safe scene to prevent being stuck
            });
            this.choicesElement.appendChild(fallbackButton);
        }
    }
    
    changeBackground(backgroundId) {
        console.log(`Changing background to: ${backgroundId}`);
        // Create new background div
        const newBg = document.createElement('div');
        newBg.className = 'background-layer';
        newBg.style.opacity = '0'; // Start transparent

        try {
            // Check if it's a CSS-based scene
            if (backgroundId && backgroundId.startsWith('scene-')) {
                newBg.classList.add(backgroundId);
                console.log(`Applied CSS background class: ${backgroundId}`);
                
                // Special handling for reception desk
                if (backgroundId === 'scene-reception-desk') {
                    // Add candle light effect
                    const candleLight = document.createElement('div');
                    candleLight.className = 'candle-light';
                    newBg.appendChild(candleLight);
                    
                    // Add subtle desk movement on hover
                    newBg.addEventListener('mousemove', function(e) {
                        const moveX = (e.clientX - window.innerWidth/2) / 50;
                        const moveY = (e.clientY - window.innerHeight/2) / 50;
                        this.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
                    });
                }
            } else if (backgroundId) {
                // Map scene IDs to actual image files in the scenes folder
                const sceneImageMap = {
                    "reception-desk": "library-desk-scene.jpg",
                    "main-hall": "inside-library.png",
                    "restricted-section": "restricted-section.jpg",
                    "library-exit": "library-exit.jpg",
                    "becoming": "becoming.jpg",
                    "liberation": "liberation.jpg",
                    "ancient-tome": "ancient-tome.jpg",
                    "map": "library-map.jpg"
                    // Add more mappings as needed
                };
                
                // Get actual image file name from the map, or use the ID directly
                const imageFile = sceneImageMap[backgroundId] || `${backgroundId}.jpg`;
                const imageUrl = `assets/images/scenes/${imageFile}`;
                
                console.log(`Setting image background: ${imageUrl}`);
                newBg.style.backgroundImage = `url('${imageUrl}')`;
            }
            
            // Append the new background and fade it in
            this.backgroundElement.appendChild(newBg);
            
            // Force a reflow to ensure the transition works
            void newBg.offsetWidth;
            
            // Fade in the new background
            newBg.style.opacity = '1';
            
            // Remove old backgrounds after transition
            setTimeout(() => {
                // Remove all children except the last one (our new background)
                while (this.backgroundElement.children.length > 1) {
                    this.backgroundElement.removeChild(this.backgroundElement.firstChild);
                }
            }, 1000); // Match this to your transition duration
        } catch(e) {
            console.error('Error changing background:', e);
        }
    }
    
    showCharacter(characterData) {
        const characterImage = document.createElement('img');
        characterImage.src = `assets/images/characters/${characterData.id}_${characterData.emotion}.png`;
        characterImage.alt = characterData.id;
        characterImage.style.opacity = '0';
        
        // Add error handler for missing character images
        characterImage.onerror = () => {
            console.log(`Character image ${characterData.id}_${characterData.emotion}.png not found, using placeholder`);
            characterImage.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="400"><rect width="200" height="400" fill="%23333"/><text x="50%" y="50%" font-size="20" text-anchor="middle" fill="white">' + characterData.id + '</text></svg>';
        };
        
        this.characterElement.innerHTML = '';
        this.characterElement.appendChild(characterImage);
        
        setTimeout(() => {
            characterImage.style.transition = 'opacity 0.8s ease-in';
            characterImage.style.opacity = '1';
        }, 100);
    }
    
    hideCharacter() {
        const character = this.characterElement.querySelector('img');
        if (character) {
            character.style.opacity = '0';
            setTimeout(() => {
                this.characterElement.innerHTML = '';
            }, 800);
        }
    }
    
    applyEffects(effects) {
        try {
            // Clear any existing effects if needed
            const effectsLayer = document.getElementById('effects');
            while (effectsLayer.firstChild) {
                effectsLayer.removeChild(effectsLayer.firstChild);
            }
            
            // Apply visual effects
            if (effects.visual) {
                switch(effects.visual) {
                    case 'shake':
                        Transitions.shakeScreen(1000);
                        break;
                    case 'flicker':
                        Transitions.flickerLights(2000);
                        break;
                    case 'pulse':
                        Transitions.pulseScreen(0); // 0 duration means it stays until scene changes
                        break;
                    // Add more visual effects as needed
                }
            }
        } catch(e) {
            console.log("Effect application error suppressed:", e);
        }
    }
    
    saveGame() {
        console.log('Attempting to save game...');
        if (!this.currentScene || !this.currentScene.id) {
            console.error("Cannot save game: current scene is not properly loaded.");
            // Optionally show an error message to the user
            return;
        }
        const saveData = {
            currentScene: this.currentScene.id,
            gameState: this.gameState,
            timestamp: new Date().toLocaleString()
        };

        localStorage.setItem('echoesLibrarySave', JSON.stringify(saveData));
        console.log('Game state saved to localStorage:', saveData);

        // Show saved indicator
        const savedIndicator = document.createElement('div');
        savedIndicator.className = 'saved-indicator';
        savedIndicator.textContent = 'Game Saved';
        document.body.appendChild(savedIndicator);

        setTimeout(() => {
            savedIndicator.style.opacity = '0';
            setTimeout(() => savedIndicator.remove(), 500);
        }, 1500);
    }
    
    loadGame() {
        console.log('Attempting to load game...');
        const saveData = localStorage.getItem('echoesLibrarySave');
        if (!saveData) {
            console.warn('No save data found in localStorage.');
            // Optionally show a message to the user
            return;
        }

        try {
            const data = JSON.parse(saveData);
            console.log('Save data found:', data);

            if (!data.currentScene || !STORY_DATA[data.currentScene]) {
                 console.error('Invalid save data: Scene ID missing or invalid.', data.currentScene);
                 // Optionally clear the invalid save data
                 // localStorage.removeItem('echoesLibrarySave');
                 return;
            }

            this.gameState = data.gameState || { inventory: [], choicesMade: [], endingsSeen: [] }; // Ensure gameState exists

            console.log('Applying loaded game state and transitioning...');
            Transitions.fadeOut(800).then(() => {
                console.log('Fade out complete, loading scene:', data.currentScene);
                this.loadScene(data.currentScene);
                // Fade in is handled by loadScene's background change now
                // Transitions.fadeIn(800); // Might conflict with background fade
            });
        } catch (e) {
            console.error('Error parsing save data:', e);
            // Optionally inform the user that the save file is corrupt
        }
    }

    // Add these methods inside the GameEngine class

    saveGameToServer() {
        if (!this.currentScene || !this.currentScene.id) {
            alert("Cannot save: No scene loaded.");
            return;
        }
        const saveData = {
            currentScene: this.currentScene.id,
            inventory: this.gameState.inventory,
            choicesMade: this.gameState.choicesMade
        };
        fetch('save_state.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(saveData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                this.showSavedIndicator('Game Saved (Server)');
            } else {
                alert('Server save failed: ' + (data.message || 'Unknown error'));
            }
        })
        .catch(err => {
            alert('Server save error: ' + err);
        });
    }

    loadGameFromServer() {
        fetch('load_state.php')
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success' && data.game_state) {
                const gs = data.game_state;
                // Map PHP/session keys to JS keys
                this.gameState.inventory = gs.inventory || [];
                this.gameState.choicesMade = gs.choices_made || [];
                this.gameState.endingsSeen = gs.endings_seen || [];
                // Use the correct scene property
                const sceneId = gs.current_scene || 'entrance';
                if (!STORY_DATA[sceneId]) {
                    alert('Saved scene not found in story data!');
                    return;
                }
                // Fade out and load scene
                Transitions.fadeOut(800).then(() => {
                    this.loadScene(sceneId);
                    this.showSavedIndicator('Game Loaded (Server)');
                });
            } else {
                alert('No server save found.');
            }
        })
        .catch(err => {
            alert('Server load error: ' + err);
        });
    }

    showSavedIndicator(text = 'Game Saved') {
        const savedIndicator = document.createElement('div');
        savedIndicator.className = 'saved-indicator';
        savedIndicator.textContent = text;
        document.body.appendChild(savedIndicator);
        setTimeout(() => {
            savedIndicator.style.opacity = '0';
            setTimeout(() => savedIndicator.remove(), 500);
        }, 1500);
    }
}

// Create a stub AudioManager to prevent errors
if (typeof AudioManager === 'undefined') {
    window.AudioManager = {
        playSound: () => {},
        playMusic: () => {},
        loadSound: () => {},
        fadeMusicIn: () => {},
        fadeMusicOut: () => {},
        // Suppress error logging from audioManager.js
        logError: () => {}
    };
    // Suppress global console errors from audioManager.js
    if (window.console && typeof window.console.error === 'function') {
        const originalConsoleError = window.console.error;
        window.console.error = function(...args) {
            // Suppress only AudioManager "loadSound is not a function" errors
            if (
                args.length > 0 &&
                typeof args[0] === 'string' &&
                args[0].includes('Error loading sound') &&
                args[0].includes('this.loadSound is not a function')
            ) {
                return;
            }
            originalConsoleError.apply(window.console, args);
        };
    }
}

// Initialize game when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed.');
    try {
        // Check if we should skip the splash screen (from the title page)
        if (window.skipSplash) {
            console.log('Skipping splash screen, initializing Game Engine directly...');
            const game = new GameEngine();
            window.gameEngine = game; // Make it accessible globally
            game.startGame(); // Start the game immediately
        } else {
            // Show splash screen first
            const splashScreen = document.createElement('div');
            splashScreen.className = 'splash-screen';
            splashScreen.innerHTML = `
                <div class="splash-content">
                    <h1>Echoes of the Library</h1>
                    <p>A dark journey through forgotten knowledge</p>
                    <button id="start-game">Enter the Library</button>
                </div>
            `;
            document.body.appendChild(splashScreen);
            console.log('Splash screen added to DOM.');

            const startButton = document.getElementById('start-game');
            if (!startButton) {
                console.error('Start button not found in splash screen!');
                return;
            }

            startButton.addEventListener('click', () => {
                console.log('Start button clicked.');
                splashScreen.style.opacity = '0';
                // Wait for fade out transition before removing and starting game
                setTimeout(() => {
                    splashScreen.remove();
                    console.log('Splash screen removed. Initializing Game Engine...');
                    try {
                        const game = new GameEngine();
                        window.gameEngine = game; // Make it accessible globally
                        console.log('GameEngine initialized.');
                        game.startGame(); // Start the game
                    } catch (gameInitError) {
                         console.error("Error initializing or starting GameEngine:", gameInitError);
                         document.body.innerHTML += `<div style="color:red; padding:20px; background:rgba(0,0,0,0.8); position:fixed; top:10px; left:10px; z-index:1000;">Fatal Error during game initialization. Check console.</div>`;
                    }
                }, 1000); // Match splash screen fade duration
            });
        }

        // Add server save/load buttons to menu
        const menu = document.querySelector('.game-menu');
        if (menu) {
            const saveServerBtn = document.createElement('button');
            saveServerBtn.id = 'save-server-btn';
            saveServerBtn.className = 'menu-btn';
            saveServerBtn.textContent = 'Save (Server)';
            menu.appendChild(saveServerBtn);

            const loadServerBtn = document.createElement('button');
            loadServerBtn.id = 'load-server-btn';
            loadServerBtn.className = 'menu-btn';
            loadServerBtn.textContent = 'Load (Server)';
            menu.appendChild(loadServerBtn);

            saveServerBtn.addEventListener('click', () => {
                if (window.gameEngine) window.gameEngine.saveGameToServer();
            });
            loadServerBtn.addEventListener('click', () => {
                if (window.gameEngine) window.gameEngine.loadGameFromServer();
            });
        }
    } catch(e) {
        console.error("Fatal Error during DOMContentLoaded setup:", e);
        // Display a fallback error message if splash screen setup fails
        document.body.innerHTML = `<div style="color:red; padding:20px; background:black;">A critical error occurred before the game could start. Please check the browser's developer console for details.</div>`;
    }
});