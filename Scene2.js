// const movingBlock = new platforms(this);
// const stillblock = new platforms(this);

var Scene2 = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize: function Scene2() {
        Phaser.Scene.call(this, {
            key: 'Scene2'
        });
        this.playerWasInAir = false; // Initialize playerWasInAir flag
        this.player = null; // Initialize player object
        this.stillblock = null;
        this.stillblock1 = null;
        
    },
    

    player: null, //player object
    preload: function () {
        //passes in scene data to load assets
        loadGlobalAssets(this);

    },
    

    create: function () {
    

        // Add any initialization code for scene2
        this.background = this.add.image(100,100, 'background');
        this.player = playerModule.initPlayer(this);
        cursors = this.input.keyboard.createCursorKeys();
        

        
   
        //this.player.setCollideWorldBounds(true);
    
        this.cam = this.cameras.main;
    
        
        if (this.player) {
            // Start camera follow if the player object is defined
            this.cameras.main.startFollow(this.player);
        } else {
            console.error("Player object is null or undefined.");
        }
        //animation handler, passes in scene to animation handler
        playerAnimations(this);
        // Pass necessary information to movement module
        movementModule.init(this.player, cursors, this);
        
        stillblock.placePlatform(300, 200, false);
  

    },

      
    update: function () {
    
        stillblock1.placePlatform(200, 300, true);


        //Handles basic movements functionality
        movementModule.handlePlayerMovement();
        if (this.player && this.player.y > this.cameras.main.height) {
            // Reset the player's position
            playerModule.resetPlayer();
        }
    }
});