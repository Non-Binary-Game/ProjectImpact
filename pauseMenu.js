class PauseMenu extends Phaser.GameObjects.Container {
    constructor(scene) {
      super(scene);
  
      // Create a black overlay as the background for the pause menu
      const overlay = scene.add.graphics();
      overlay.fillStyle(0x000000, 0.5); // Set color and transparency
      overlay.fillRect(0, 0, scene.game.config.width, scene.game.config.height);
  
      // Create pause menu text
      const pauseText = scene.add.text(scene.game.config.width / 2, scene.game.config.height / 2, "Game Paused", { fontFamily: 'Arial', fontSize: 48, color: '#ffffff' });
      pauseText.setOrigin(0.5);
  
      // Add resume button to the pause menu
      const resumeButton = scene.add.text(scene.game.config.width / 2, scene.game.config.height / 2 + 50, "Resume", { fontFamily: 'Arial', fontSize: 24, color: '#ffffff' }).setOrigin(0.5).setInteractive();
      resumeButton.on('pointerdown', () => this.resumeGame(scene));
  
      // Add elements to the container
      this.add([overlay, pauseText, resumeButton]);
  
      // Hide the pause menu initially
      this.setVisible(false);
    }
  
    pauseGame(scene) {
      // Pause the game
      scene.scene.pause();
      // Show pause menu
      this.setVisible(true);
    }
  
    resumeGame(scene) {
      // Hide pause menu
      this.setVisible(false);
      // Resume the game
      scene.scene.resume();
    }
  }
  
  export default PauseMenu;