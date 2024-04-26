//import PauseMenu from './PauseMenu.js';

var Scene2 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function Scene2() {
        Phaser.Scene.call(this, {
            key: 'Scene2'
        });
        this.playerWasInAir = false; // Initialize playerWasInAir flag
        this.player = null; // Initialize player object
    },

    player: null, //player object

    preload: function () {
        //passes in scene data to load assets.
        loadGlobalAssets(this);
        

    },

    create: function () {
        // Add any initialization code for scene2
        this.background = this.add.image(100,100, 'background');
        this.player = playerModule.initPlayer(this);
        cursors = this.input.keyboard.createCursorKeys();

        bgMusic = this.sound.add('bgMusic', { loop: true, volume: 0.3 });
        bgMusic.play();
        
        platforms(this, 100, 400)
        platforms(this, 0, 450)
        platforms(this, 250, 400)
        platforms(this, 350, 300)
        platforms(this, 450, 200)
        platforms(this, 550, 100)
        platforms(this, 660, 0)
        platforms(this, 800, 200)
        
   
        //this.player.setCollideWorldBounds(true);
    
        this.cam = this.cameras.main;
        this.pauseButton = this.add.text(this.player.x - 300, this.player.y - 200, "Pause", { fontFamily: 'Arial', fontSize: 24, color: '#ffffff' }).setInteractive();
        this.pauseButton.on('pointerdown', () => this.pauseGame());
        this.createPauseMenu();
        this.input.keyboard.on('keydown-ESC', () => this.pauseGame());
        
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
    },

    pauseGame() {
        // Pause the game
        this.scene.pause();
        // Show pause menu
        this.pauseMenu.setVisible(true);
      },

      resumeGame() {
        // Hide pause menu
        this.pauseMenu.setVisible(false);
        // Resume the game
        this.scene.resume();
      },

      createPauseMenu() {
        // Create a black overlay as the background for the pause menu
        const overlay = this.add.graphics();
        overlay.fillStyle(0x000000, 0.5); // Set color and transparency
        overlay.fillRect(0, 0, this.game.config.width, this.game.config.height);

        // Create pause menu text
        const pauseText = this.add.text(this.player.x - 100, this.player.y - 50, "Game Paused", { fontFamily: 'Arial', fontSize: 48, color: '#ffffff' });
        pauseText.setOrigin(0.5);

        // Add resume button to the pause menu
        const resumeButton = this.add.text(this.player.x - 100, this.player.y + 50, "Resume", { fontFamily: 'Arial', fontSize: 24, color: '#ffffff' }).setOrigin(0.5).setInteractive();
        resumeButton.on('pointerdown', () => this.resumeGame());

        // Group the elements of the pause menu together
        this.pauseMenu = this.add.group([overlay, pauseText, resumeButton]);
        this.pauseMenu.setVisible(false); // Hide the pause menu initially
    },
    

    update: function () {
        //Handles basic movements functionality
        movementModule.handlePlayerMovement();
        if (this.player && this.player.y > this.cameras.main.height) {
            // Reset the player's position
            playerModule.resetPlayer();
        }
<<<<<<< Updated upstream
=======
        if (this.player) {
            this.pauseButton.setPosition(this.player.x - 300, this.player.y - 200);
            this.pauseMenu.getChildren().forEach(child => {
                if (child !== this.pauseMenu) { // Skip the overlay
                    child.setPosition(this.player.x - 100, this.player.y - 50);
                }
            });
        }   
>>>>>>> Stashed changes
    }
});