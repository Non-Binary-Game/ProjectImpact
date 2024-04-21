var Scene2 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function Scene2() {
        Phaser.Scene.call(this, {
            key: 'Scene2'
        });
    },

    player: null, //player object

    preload: function () {
        //passes in scene data to load assets
        loadGlobalAssets(this);
        this.load.image('terrain', 'assets/terrain.png');
    },

    create: function () {
        // Add any initialization code for scene2

        this.player = this.physics.add.sprite(100, 100, 'player');
        cursors = this.input.keyboard.createCursorKeys();
        this.terrain = this.physics.add.image(250, 400   , 'terrain');
        this.terrain.setImmovable(true);
        this.terrain.body.allowGravity = false;
        // this.terrain.setVelocityX(50);

        this.physics.add.collider(this.player, this.terrain);

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
    },


    update: function () {
        //Handles basic movements functionality
        handlePlayerMovement(this.player, cursors);
    }
});