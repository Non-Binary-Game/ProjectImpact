 function handlePlayerMovement(player, cursors) {
    //defines controls
    const { left, right, up } = cursors;

    if (left.isDown) {
        player.setVelocityX(-160);
    } 
    else if (right.isDown) {
        player.setVelocityX(160);
    } 
    
    else if (up.isDown) {
        player.setVelocityY(-160);
    }
    
    else {
        player.setVelocityX(0);
    }

    if (up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}
