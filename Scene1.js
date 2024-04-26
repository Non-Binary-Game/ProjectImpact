class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    // Load assets for the menu (e.g., background image, buttons)
    //this.load.image('background', 'menuIcons/background.jpg');
    this.load.image('playButton', 'assets/play.png');
    this.load.image('optionsButton', 'assets/play.png');
    this.load.image('exitButton', 'assets/play.png');
  }

  create() {
    // Add background image
    this.add.image(0, 0, 'background').setOrigin(0);
    console.log("Menu scene loaded.");
    // Add menu text
    this.add.text(20, 20, "Main Menu", { fontFamily: 'Arial', fontSize: 48, color: '#ffffff' });

    // Add play button
    const playButton = this.add.image(400, 200, 'playButton').setInteractive();
    playButton.on('pointerdown', () => this.startGame());

    // Add options button
    //const optionsButton = this.add.image(400, 300, 'optionsButton').setInteractive();
    //optionsButton.on('pointerdown', () => this.openOptions());

    // Add exit button
    const exitButton = this.add.image(400, 400, 'exitButton').setInteractive();
    exitButton.on('pointerdown', () => this.exitGame());
  }

  startGame() {
    // Start the actual game scene
    console.log("Game started.");
    this.scene.start("Scene2");
  }

  openOptions() {
    // Open options menu
    console.log("Options menu opened.");
    // Add your options menu logic here
  }

  exitGame() {
    // Exit the game
    console.log("Exiting game.");
    // Add your exit game logic here
  }
}