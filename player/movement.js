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
        //defines controls
        const { left, right, up, down } = cursors;

        // Check if the player can move horizontally
        if (left.isDown) {
            player.setVelocityX(-160);
            if (!player.body.touching.down && down.isDown) {
                player.setVelocityX(-500); // Increase horizontal speed mid-air when charging downwards
            }
                   //flips player then plays the walk animations
                   scene.player.setFlipX(true);
                   scene.player.anims.play('walk', true);
        } 
        else if (right.isDown) {
            player.setVelocityX(160);
            if (!player.body.touching.down && down.isDown) {
                player.setVelocityX(500); // Increase horizontal speed mid-air when charging downwards
            }
                    //resets the flip and plays the walk animations
                    scene.player.setFlip(false, false);
                    scene.player.anims.play('walk', true);
        }
        else {
            player.setVelocityX(0);
            //this stops the animation then reverts to the first frame in the sprite sheet when set true, false just ends it on that frame
            scene.player.anims.stop('walk',true);
        }

        // Check if the player can move vertically
        if (up.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        }
        if (down.isDown && !player.body.touching.down) {
            player.setVelocityY(500); // Charge downwards while in mid-air
        }

        // Check if the player has landed after pressing down in mid-air
        if (player.body.touching.down && scene.playerWasInAir && down.isDown) {
            // Trigger screen shake if conditions are met
            screenShakeModule.triggerScreenShake(scene);
            scene.playerWasInAir = false; // Reset flag
        }

        // Update the flag to track if the player was in the air
        if (!player.body.touching.down) {
            scene.playerWasInAir = true;
        }
    }

    // Expose init and handlePlayerMovement functions
    return {
        init: init,
        handlePlayerMovement: handlePlayerMovement
    };
})();