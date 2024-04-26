var screenShakeModule = (function() {
    var lastShakeTime = 0; // Track the time of the last screen shake
    var cooldownDuration = 5000; // Cooldown duration in milliseconds (5 seconds)
    var shakeChance = 0.1; // 10% chance for screen shake

    // Function to determine if the screen shake can occur based on cooldown and random chance
    function canShakeScreen(scene) {
        // Check if enough time has passed since the last screen shake
        if (scene.time.now - lastShakeTime < cooldownDuration) {
            return false; // Cooldown period still active
        }
        // Random chance for screen shake
        return Math.random() < shakeChance;
    }

    // Function to trigger screen shake if conditions are met
    function triggerScreenShake(scene) {
        // Check if the screen shake can occur based on cooldown and random chance
        if (canShakeScreen(scene)) {
            scene.cameras.main.shake(250, .01); // Trigger screen shake
            lastShakeTime = scene.time.now; // Update the time of the last screen shake
        }
    }

    // Expose triggerScreenShake function
    return {
        triggerScreenShake: triggerScreenShake
    };
})();