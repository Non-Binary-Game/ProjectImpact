class platforms {

    constructor(baseObject) {
        this.baseObject = baseObject;
        
        this.x = null;
        this.y = null;
    
    }
    
   
    

    placePlatform(x, y, movingPlatform) {
        const parms = {
            key: 'terrain',
            CannotMove: false,
            HasGravity: false
        }
        
        this.baseObject.terrain = this.baseObject.physics.add.image(this.x, y, parms.key);
        
        this.baseObject.terrain.setImmovable(parms.CannotMove);
        
        this.baseObject.terrain.body.allowGravity = parms.HasGravity;
        
        this.baseObject.physics.add.collider(this.baseObject.player, this.baseObject.terrain);
    
        if(movingPlatform == true){
            this.movePlatform()
        }
    }
    
    movePlatform() {
        this.x++;
        console.log(this.x);
    }
     

}

