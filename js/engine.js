// Main game engine for Echoes of the Library

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
        this.speakerElement.textContent = dialogueEntry.speaker || '';
        this.isDialogueComplete = false;
        this.currentDialogueText = dialogueEntry.text;
        
        // Check if this is the librarian speaking and show portrait
        if (dialogueEntry.speaker === "Librarian") {
            this.speakerPortraitElement.innerHTML = '<img src="./assets/images/characters/librarian-neutral.png" alt="Librarian">';
            this.speakerPortraitElement.style.display = 'block';
            
            // Ensure dialog box has enough height for the portrait
            this.dialogElement.style.minHeight = '80px';
        } else {
            this.speakerPortraitElement.style.display = 'none';
            this.speakerPortraitElement.innerHTML = '';
            
            // Reset dialog box height
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
            strings: [dialogueEntry.text],
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
                
                // Add magical particles for tome scene
                if (backgroundId === 'scene-ancient-tome') {
                    const particles = document.createElement('div');
                    particles.className = 'magical-particles';
                    newBg.appendChild(particles);
                    console.log('Added magical particles to tome scene');
                }
                
                // Add special elements for detailed library scene
                if (backgroundId === 'scene-library-detailed') {
                    // Add mist layer
                    const mistLayer = document.createElement('div');
                    mistLayer.className = 'mist';
                    newBg.appendChild(mistLayer);
                    
                    // Add rain layer
                    const rainLayer = document.createElement('div');
                    rainLayer.className = 'rain';
                    newBg.appendChild(rainLayer);
                    
                    console.log('Added atmospheric elements to detailed library scene');
                }
            } else if (backgroundId) {
                // Use image-based background
                const imageUrl = `assets/images/backgrounds/${backgroundId}.jpg`;
                console.log(`Setting image background: ${imageUrl}`);
                newBg.style.backgroundImage = `url('${imageUrl}')`;

                // Preload image to check for errors
                const img = new Image();
                img.onload = () => {
                    console.log(`Background image ${imageUrl} loaded successfully.`);
                };
                img.onerror = () => {
                    console.warn(`Background image ${imageUrl} not found or failed to load, using fallback color.`);
                    newBg.style.backgroundImage = '';
                    newBg.style.backgroundColor = '#1a1a24'; // Fallback color
                };
                img.src = imageUrl;
            } else {
                 console.warn(`Background ID "${backgroundId}" is invalid or missing. Using fallback color.`);
                 newBg.style.backgroundColor = '#1a1a24'; // Fallback for missing ID
            }
        } catch(e) {
            console.error("Error setting background:", e);
            newBg.style.backgroundColor = '#1a1a24'; // Fallback color on error
        }

        // Add new background to the DOM, initially transparent
        const container = document.querySelector('.game-container');
        // Insert before the character layer to keep layering correct
        container.insertBefore(newBg, this.characterElement);

        // Fade in the new background
        setTimeout(() => {
            newBg.style.transition = 'opacity 1s ease-in-out';
            newBg.style.opacity = '1';
            console.log('New background faded in.');

            // Remove the *previous* background element after the new one is visible
            if (this.backgroundElement && this.backgroundElement !== newBg) {
                 console.log('Removing old background element.');
                 this.backgroundElement.style.opacity = '0'; // Optional: fade out old one
                 setTimeout(() => {
                    if (this.backgroundElement.parentNode) {
                        this.backgroundElement.parentNode.removeChild(this.backgroundElement);
                    }
                    this.backgroundElement = newBg; // Update reference *after* removal
                 }, 1000); // Match transition duration
            } else {
                 this.backgroundElement = newBg; // Set reference if it's the first background
            }
        }, 50); // Short delay to ensure transition applies
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

    } catch(e) {
        console.error("Fatal Error during DOMContentLoaded setup:", e);
        // Display a fallback error message if splash screen setup fails
        document.body.innerHTML = `<div style="color:red; padding:20px; background:black;">A critical error occurred before the game could start. Please check the browser's developer console for details.</div>`;
    }
});