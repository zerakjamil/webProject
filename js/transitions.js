// Visual transitions and effects

const Transitions = {
    fadeIn: function(duration = 1000) {
        console.log('Fade in transition started');
        return new Promise(resolve => {
            document.querySelectorAll('.background-layer, .character-layer, .ui-layer').forEach(element => {
                element.style.transition = `opacity ${duration}ms ease-in`;
                element.style.opacity = '1';
            });
            
            setTimeout(() => {
                console.log('Fade in completed');
                resolve();
            }, duration);
        });
    },
    
    fadeOut: function(duration = 1000) {
        console.log('Fade out transition started');
        return new Promise(resolve => {
            document.querySelectorAll('.background-layer, .character-layer, .ui-layer').forEach(element => {
                element.style.transition = `opacity ${duration}ms ease-out`;
                element.style.opacity = '0';
            });
            
            setTimeout(() => {
                console.log('Fade out completed');
                resolve();
            }, duration);
        });
    },
    
    flickerLights: function(duration = 2000) {
        const effectsLayer = document.getElementById('effects');
        const overlay = document.createElement('div');
        
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        overlay.style.pointerEvents = 'none';
        overlay.classList.add('flicker');
        
        effectsLayer.appendChild(overlay);
        
        setTimeout(() => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                effectsLayer.removeChild(overlay);
            }, 500);
        }, duration);
    },
    
    shakeScreen: function(duration = 1000) {
        const gameContainer = document.querySelector('.game-container');
        gameContainer.classList.add('shake');
        
        setTimeout(() => {
            gameContainer.classList.remove('shake');
        }, duration);
    },
    
    pulseScreen: function(duration = 4000) {
        const effectsLayer = document.getElementById('effects');
        const overlay = document.createElement('div');
        
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        overlay.style.pointerEvents = 'none';
        overlay.classList.add('pulse-effect');
        
        effectsLayer.appendChild(overlay);
        
        console.log('Pulse effect applied');
        
        // If duration is provided as 0, the effect will remain until manually removed
        if (duration > 0) {
            setTimeout(() => {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    if (effectsLayer.contains(overlay)) {
                        effectsLayer.removeChild(overlay);
                    }
                }, 500);
            }, duration);
        }
    },
    
    typeWriterEffect: function(element, text, speed = 30) {
        return new Promise(resolve => {
            element.textContent = '';
            let i = 0;
            
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            }
            
            type();
        });
    },
    
    charactersSwap: function(characterElement, newCharacterId, newEmotion) {
        const currentChar = characterElement.querySelector('img');
        
        if (currentChar) {
            currentChar.style.opacity = '0';
            
            setTimeout(() => {
                const newChar = document.createElement('img');
                newChar.src = `assets/images/characters/${newCharacterId}_${newEmotion}.png`;
                newChar.style.opacity = '0';
                
                characterElement.innerHTML = '';
                characterElement.appendChild(newChar);
                
                setTimeout(() => {
                    newChar.style.transition = 'opacity 0.5s ease-in';
                    newChar.style.opacity = '1';
                }, 50);
            }, 500);
        } else {
            const newChar = document.createElement('img');
            newChar.src = `assets/images/characters/${newCharacterId}_${newEmotion}.png`;
            newChar.style.opacity = '0';
            
            characterElement.appendChild(newChar);
            
            setTimeout(() => {
                newChar.style.transition = 'opacity 0.5s ease-in';
                newChar.style.opacity = '1';
            }, 50);
        }
    }
};

// Add this to confirm the file is loaded
console.log('Transitions module loaded');