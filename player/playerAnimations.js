//global asset loader is the location the animation comes from
//player is the sprite it is loaded on or the "target"
const playerAnimations =(Scene) =>{
   
    //passes scene then creates animation with key 'key' then frames is each sqaure, -1 being looping.
  
    Scene.anims.create({
        key: 'walk',
        frames: Scene.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        frameRate: 9,
        repeat: -1
    });
    
    /*
    //other animations go here
    Scene.anims.create({
        key: 'key',
        frames: Scene.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        frameRate: 9,
        repeat: -1
    });
    */

};
