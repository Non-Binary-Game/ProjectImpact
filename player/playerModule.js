var playerModule = (function() {
    var player;

    // Function to initialize the player
    function initPlayer(scene) {
        player = scene.physics.add.sprite(100, 100, 'player');
        return player;
    }

    // Function to reset the player's position to a specific location
    function resetPlayer() {
        player.setPosition(0, 0);
    }

    // Expose initPlayer and resetPlayer functions
    return {
        initPlayer: initPlayer,
        resetPlayer: resetPlayer
    };
})();