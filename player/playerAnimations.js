const playerAnimations =(Scene) =>{
    Scene.anims.create({
        key: 'walk',
        frames: Scene.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        frameRate: 9,
        repeat: -1
    });


};
