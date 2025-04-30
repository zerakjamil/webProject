// Simple transitions module
const Transitions = {
    fadeOut: function(duration) {
        console.log(`Transitions: fadeOut(${duration}ms) started`);
        return new Promise((resolve) => {
            const overlay = document.createElement('div');
            overlay.id = 'transition-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'black';
            overlay.style.opacity = '0';
            overlay.style.transition = `opacity ${duration/1000}s ease-in-out`;
            overlay.style.zIndex = '9999';
            document.body.appendChild(overlay);
            
            // Trigger reflow
            void overlay.offsetWidth;
            
            overlay.style.opacity = '1';
            
            setTimeout(() => {
                console.log('Transitions: fadeOut complete');
                resolve();
            }, duration);
        });
    },
    
    fadeIn: function(duration) {
        console.log(`Transitions: fadeIn(${duration}ms) started`);
        return new Promise((resolve) => {
            const overlay = document.getElementById('transition-overlay');
            if (!overlay) {
                console.log('Transitions: No overlay found for fadeIn');
                resolve();
                return;
            }
            
            overlay.style.opacity = '0';
            
            setTimeout(() => {
                document.body.removeChild(overlay);
                console.log('Transitions: fadeIn complete');
                resolve();
            }, duration);
        });
    },
    
    flickerLights: function(duration) {
        console.log('Transitions: flickerLights effect');
        document.body.classList.add('flicker');
        setTimeout(() => {
            document.body.classList.remove('flicker');
        }, duration);
    },
    
    shakeScreen: function(duration) {
        console.log('Transitions: shakeScreen effect');
        document.body.classList.add('shake');
        setTimeout(() => {
            document.body.classList.remove('shake');
        }, duration);
    },
    
    pulseScreen: function(duration) {
        console.log('Transitions: pulseScreen effect');
        const element = document.getElementById('effects');
        element.classList.add('pulse-effect');
        if (duration > 0) {
            setTimeout(() => {
                element.classList.remove('pulse-effect');
            }, duration);
        }
    }
};

console.log("Transitions module loaded");