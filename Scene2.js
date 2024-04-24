var Scene2 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function Scene2() {
        Phaser.Scene.call(this, {
            key: 'Scene2'
        });
        this.playerWasInAir = false; // Initialize playerWasInAir flag
    },

    player: null, //player object

    preload: function () {
        //passes in scene data to load assets
        loadGlobalAssets(this);
        this.load.image('terrain', 'assets/terrain.png');
        this.load.image('background', 'assets/BG2.png');
    },

    create: function () {
        // Add any initialization code for scene2
        this.background = this.add.image(100,100, 'background');
        this.player = this.physics.add.sprite(100, 100, 'player');
        cursors = this.input.keyboard.createCursorKeys();
        
    
        this.terrain = this.physics.add.image(250, 400, 'terrain');
        this.terrain1 = this.physics.add.image(100, 400, 'terrain');
        this.terrain2 = this.physics.add.image(350, 300, 'terrain');
        this.terrain3 = this.physics.add.image(450, 200, 'terrain');
        this.terrain4 = this.physics.add.image(550, 100, 'terrain');
        this.terrain5 = this.physics.add.image(660, 0, 'terrain');
        this.terrain6 = this.physics.add.image(800, 200, 'terrain');


        this.terrain.setImmovable(true);
        this.terrain.body.allowGravity = false;
        this.terrain1.setImmovable(true);
        this.terrain1.body.allowGravity = false;
        this.terrain2.setImmovable(true);
        this.terrain2.body.allowGravity = false;
        this.terrain3.setImmovable(true);
        this.terrain3.body.allowGravity = false;
        this.terrain4.setImmovable(true);
        this.terrain4.body.allowGravity = false;
        this.terrain5.setImmovable(true);
        this.terrain5.body.allowGravity = false;
        this.terrain6.setImmovable(true);
        this.terrain6.body.allowGravity = false;
        this.physics.add.collider(this.player, this.terrain);
        this.physics.add.collider(this.player, this.terrain1);
        this.physics.add.collider(this.player, this.terrain2);
        this.physics.add.collider(this.player, this.terrain3);
        this.physics.add.collider(this.player, this.terrain4);
        this.physics.add.collider(this.player, this.terrain5);
        this.physics.add.collider(this.player, this.terrain6);
        //this.player.setCollideWorldBounds(true);
    
        this.cam = this.cameras.main;
    
        // Make the camera follow the player
        this.cam.startFollow(this.player);
    
        // Pass necessary information to movement module
        movementModule.init(this.player, cursors, this);
    },


    update: function () {
        //Handles basic movements functionality
        movementModule.handlePlayerMovement();
    }
});