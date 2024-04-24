
function playerWalk(frameRate, Iswalking, baseobject, playerObject) {
    const walk = {
        key:"walk",
        frames: baseobject.anims.generateFrameNumbers("player", {frames:[0,1,2,3]}),
        frameRate:frameRate,
        repeat: -1
    }
    
    baseobject.anims.create(walk);
    
    baseobject.baseobject = baseobject.add.sprite(15, 30, 'player');
    
    baseobject.baseobject.play("walk", Iswalking);
    

}


  
function playerjump(frameRate, Isjumping) {
    
    const jump = {
        key:"jump",
        frames: this.anims.generateFrameNumbers("player", {frames:[4,5,6,7,8,9,10,11]}),
        frameRate:frameRate,
        repeat: -1
    }
    
    this.anims.create(jump);
    this.player = this.add.sprite(15, 30, 'player');
    this.player.play("jump", Isjumping);

}

function playerSlam(frameRate, Isslamming) {

    const slam = {
        key:"slam",
        frames: this.anims.generateFrameNumbers("player", {frames:[12,13,14,15,16,17]}),
        frameRate:frameRate,
        repeat: -1
    }
    
    this.anims.create( slam );
    
    this.player = this.add.sprite(15, 30, 'player');
    
    this.player.play("slam", Isslamming);

}

function playerHurt(frameRate, Ishurting) {

    const hurt = {
        key:"hurt",
        frames: this.anims.generateFrameNumbers("player", {frames:[18, 19, 20, 21]}),
        frameRate:frameRate,
        repeat: -1
    }
    
    this.anims.create(hurt);
    
    this.player = this.add.sprite(15, 30, 'player');
    
    this.player.play("hurt", Ishurting);

}