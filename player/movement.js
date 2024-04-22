function handlePlayerMovement(player, cursors) {
    //defines controls
    const { left, right, up, down } = cursors;

    if (left.isDown) {
        player.setVelocityX(-160);
        if (!player.body.touching.down && down.isDown) {
            player.setVelocityX(-330); // Increase horizontal speed mid-air when charging downwards
        }
    } 
    else if (right.isDown) {
        player.setVelocityX(160);
        if (!player.body.touching.down && down.isDown) {
            player.setVelocityX(330); // Increase horizontal speed mid-air when charging downwards
        }
    }
    else {
        player.setVelocityX(0);
    }

    if (up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }

    if (down.isDown && !player.body.touching.down) {
        player.setVelocityY(330); // Charge downwards while in mid-air
    }    
}