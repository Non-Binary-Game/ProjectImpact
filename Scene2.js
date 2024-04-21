var Scene2 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Scene2 ()
    {
        Phaser.Scene.call(this, { key: 'Scene2' });
    },

    preload: function ()
    {
        // Load assets needed for scene2
        this.load.image('player', 'assets/player.png');
        this.load.image('terrain', 'assets/terrain.png');
    },

    create: function ()
    {
        // Add any initialization code for scene2

        player = this.physics.add.sprite(100, 450, 'player');
        cursors = this.input.keyboard.createCursorKeys();

        // Create the terrain grid
        terrain = this.physics.add.group({
            key: 'terrain',
            repeat: 79,
            setXY: { x: 0, y: 500, stepX: 10 }
        });

        this.physics.world.setBounds(0, 0, this.cameras.main.width, this.cameras.main.height);

        // Add collision between player and boundaries
        player.setCollideWorldBounds(true);

        // Loop through each cell in the terrain group and set collision with world bounds
        terrain.children.iterate(function (child) {
            child.setCollideWorldBounds(true);
        });


        this.physics.add.collider(player, terrain, destroyCell, null, this);
    },

    update: function ()
    {
        // Add any update logic for scene2
        // Player movement, collision detection, etc.
    }
});