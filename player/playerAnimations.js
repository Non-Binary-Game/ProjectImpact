const playerAnimations =(Scene) =>{
    Scene.anims.create({
        key: 'right',
        frames: Scene.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });


};