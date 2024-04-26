class abstractEnemey extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture,frame){
        super(scene,x,y,texture,frame);
        
        scene.add.existing(this);

        scene.physics.world.enable(this);
        this.body.setCollideWorldBounds(true);
        
    }
    //must be defined in new class.
    update(){
        throw new Error("Abstract must be emplemented with enemy behavior (enemyBehavior.js)");
    }

    //function for how enemy dies is good here
    isDefeated(){

    }    
}