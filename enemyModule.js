var EnemyModule = (function() {
    var enemy;

    // Function to initialize the enemy
    function initEnemy(scene, x, y, texture) {
        enemy = scene.physics.add.sprite(x, y, texture);
        
        enemy.setScale(0.1);
        return enemy; // Return the initialized enemy object
    }

    // Expose initEnemy function
    return {
        initEnemy: initEnemy
    };
})();