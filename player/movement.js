var movementModule = (function() {
    var player;
    var cursors;
    var scene;

    function init(_player, _cursors, _scene) {
        player = _player;
        cursors = _cursors;
        scene = _scene;
    }

    function handlePlayerMovement() {
        // Defines controls
        const { left, right, up, down } = cursors;
    
        // Initialize velocities
        let horizontalVelocity = 0;
        let verticalVelocity = player.body.velocity.y; // Maintain current vertical velocity
    
        // Check if left arrow key is pressed
        if (left.isDown) {
            horizontalVelocity = -160; // Set negative horizontal velocity for left movement
            scene.player.setFlipX(true); // Flip player sprite horizontally
        }
        // Check if right arrow key is pressed
        if (right.isDown) {
            horizontalVelocity = 160; // Set positive horizontal velocity for right movement
            scene.player.setFlipX(false); // Reset player sprite flip
        }
    
        // Check if up arrow key is pressed and player is on the ground
        if (up.isDown && player.body.touching.down) {
            verticalVelocity = -300; // Set negative vertical velocity for jump
        }
    
        // Check if down arrow key is pressed and player is in mid-air
        if (down.isDown && !player.body.touching.down) {
            verticalVelocity = 500; // Set positive vertical velocity for downward charge
        }

        if (player.body.touching.down && scene.playerWasInAir && down.isDown) {
            // Trigger screen shake if conditions are met
            screenShakeModule.triggerScreenShake(scene);
            scene.playerWasInAir = false; // Reset flag
        }
        
        // Update the flag to track if the player was in the air

        // Apply velocities to the player
        player.setVelocityX(horizontalVelocity);
        player.setVelocityY(verticalVelocity);
    
        // Play animations based on player's movement state
        if (horizontalVelocity !== 0 && player.body.touching.down) {
            scene.player.anims.play('walk', true); // Play walk animation if moving horizontally on the ground
        } else if (!player.body.touching.down) {
            scene.playerWasInAir = true;
            scene.player.anims.play('jump', true); // Play jump animation if player is in mid-air
        }
        else {
            scene.player.anims.stop('walk'); // Stop walk animation if not moving horizontally on the ground
        } 
    
        // Check if any arrow key is pressed
        if (left.isDown || right.isDown || up.isDown || down.isDown) {
            // Set playerWasInAir flag to true if player is not touching the ground
            scene.playerWasInAir = !player.body.touching.down;
        }
    }
    // Expose init and handlePlayerMovement functions
    return {
        init: init,
        handlePlayerMovement: handlePlayerMovement
    };
})();