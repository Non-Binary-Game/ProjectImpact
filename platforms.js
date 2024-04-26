function platforms(baseObject, x, y) {
    const parms = {
        key: 'terrain',
        CannotMove: true,
        HasGravity: false
    }
    
    baseObject.terrain = baseObject.physics.add.image(x, y, parms.key);
    
    baseObject.terrain.setImmovable(parms.CannotMove);
    
    baseObject.terrain.body.allowGravity = parms.HasGravity;
    
    baseObject.physics.add.collider(baseObject.player, baseObject.terrain);



}