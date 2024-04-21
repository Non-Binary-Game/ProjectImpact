var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade', // Enable arcade physics here
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Scene1, Scene2] // Register your scenes here
};

var game = new Phaser.Game(config);