class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    // Load assets for the menu (e.g., background image, buttons)
    //this.load.image('background', 'menuIcons/background.jpg');
    this.load.image('playButton', 'assets/buttons/playButton.png');
    this.load.image('exitButton', 'assets/buttons/quit.png');
  }

  create() {  

    // Add play button
    const playButton = this.add.image(400, 200, 'playButton').setInteractive();
    playButton.on('pointerdown', () => this.startGame());

    // Add exit button
    const exitButton = this.add.image(400, 400, 'exitButton').setInteractive();
    exitButton.on('pointerdown', () => this.exitGame());
  }

  startGame() {
    // Start the actual game scene
    console.log("Game started.");
    this.scene.start("Scene2");
  }

  exitGame() {
    // Exit the game
    console.log("Exiting game.");
    // Add your exit game logic here
  }
}