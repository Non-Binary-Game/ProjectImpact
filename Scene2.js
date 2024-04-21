var Scene2 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Scene2() {
            Phaser.Scene.call(this, {
                key: 'Scene2'
            });
        },

    preload: function () {
        // Load assets needed for scene2

        // this.load.image('terrain', 'assets/terrain.png');
        this.load.image('player', 'assets/player.png');
    },

    create: function () {
        // Add any initialization code for scene2

        player = this.physics.add.sprite(100, 100, 'player');
        cursors = this.input.keyboard.createCursorKeys();

        // Create the terrain grid
        terrain = this.physics.add.group({
            key: 'terrain',
            setXY: {
                x: 0,
                y: 500,
            }
        });

        this.physics.world.setBounds(0, 0, this.cameras.main.width, this.cameras.main.height);

        // Add collision between player and boundaries
        player.setCollideWorldBounds(true);

        // Loop through each cell in the terrain group and set collision with world bounds
        terrain.children.iterate(function (child) {
            child.setCollideWorldBounds(true);
        });


        this.physics.add.collider(player, terrain, null, this);
    },

    /*update: function () {

        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.setVelocityX(-160);

        }
        else if (right.isDown)
        {
            this.player.setVelocityX(160);
        }
        /*
        else
        {
            this.player.setVelocityX(0);

        }*/

        /*if (up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }
    


    }*/

    update: function () {
        const { left, right, up } = cursors; // Use the defined 'cursors'
    
        if (left.isDown) {
            player.setVelocityX(-160); // Use 'player' directly
        }
        
        else if (right.isDown) {
            player.setVelocityX(160); // Use 'player' directly
        }
        
        else if (up.isDown) {
            player.setVelocityY(-160); // Use 'player' directly
        }
        
        else {
            player.setVelocityX(0); // Use 'player' directly
        }
    
        if (up.isDown && player.body.touching.down) { // Use 'player' directly
            player.setVelocityY(-330); // Use 'player' directly
        }
    }
});