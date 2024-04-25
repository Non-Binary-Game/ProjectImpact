class platforms {

    constructor(baseObject) {
        this.baseObject = baseObject;
    
    }


    placePlatform(x, y) {
        const parms = {
            key: 'terrain',
            CannotMove: true,
            HasGravity: false
        }
        
        this.baseObject.terrain = this.baseObject.physics.add.image(x, y, parms.key);
        
        this.baseObject.terrain.setImmovable(parms.CannotMove);
        
        this.baseObject.terrain.body.allowGravity = parms.HasGravity;
        
        this.baseObject.physics.add.collider(this.baseObject.player, this.baseObject.terrain);
    
    }
    
    movePlatform(x) {
        const parms = {
            key: 'terrain',
            CannotMove: true,
            HasGravity: false
        }
        
        this.baseObject.terrain = this.baseObject.physics.add.image(x, 400, parms.key);
        this.baseObject.terrain.setImmovable(parms.CannotMove);
        this.baseObject.terrain.body.allowGravity = parms.HasGravity;
        this.baseObject.physics.add.collider(this.baseObject.player, this.baseObject.terrain);
    
    }
    
     

}

