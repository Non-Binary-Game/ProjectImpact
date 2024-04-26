class enemyType1 extends abstractEnemey{
    constructor(scene, x,y){
        super(scene, x, y,'enemyType1');
    }

    update(){
        console.log('moves');
    }
    isDefeated(){
        console.log('this enemytype1 didnt make the cut.');
    }
}