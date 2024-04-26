var EnemyModule = (function() {
    var enemy;

    // Function to initialize the enemy
    function initEnemy(scene, x, y, texture) {
        enemy = scene.physics.add.sprite(x, y, texture);
        return enemy; // Return the initialized enemy object
    }

    // Expose initEnemy function
    return {
        initEnemy: initEnemy
    };
})();