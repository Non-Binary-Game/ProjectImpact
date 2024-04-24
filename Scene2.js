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
   

    },

    create: function () {
        // Add any initialization code for scene2
        this.background = this.add.image(100,100, 'background');
        this.player = this.physics.add.sprite(100, 100, 'player');
        cursors = this.input.keyboard.createCursorKeys();
        

        
        platforms(this, 100, 400)
        platforms(this, 250, 400)
        platforms(this, 350, 300)
        platforms(this, 450, 200)
        platforms(this, 550, 100)
        platforms(this, 660, 0)
        platforms(this, 800, 200)
        
   
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