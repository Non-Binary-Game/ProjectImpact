function loadGlobalAssets(scene){

   //this.load.image('player', './globalAssets/player.png');
   
   //Load into Scene images
      /*
      scene.load.image('player', 'assets/spaeatepngfiles/player/walk/playerwalk1.png');
      depreciated, sprite sheet is loaded over the image. idle animation not yet implemented to switch too.
      */
 
   scene.load.image('terrain', 'assets/terrain.png');
   scene.load.image('background', 'assets/BG2.png');
   //scene.load.image('player', 'assets/spaeatepngfiles/player/walk/playerwalk1.png');
   scene.load.spritesheet('player', 'assets/playerspriteSheet/playerwalksheet.png', { frameWidth: 32, frameHeight: 32 });
   
   stillblock = new platforms(scene);
   stillblock1 = new platforms(scene);


   //load into scene animations
}