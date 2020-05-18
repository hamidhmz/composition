class Monster { 
    constructor(name){
        this.name = name
    }
    attack(){
        console.log(`${this.name} attack`)
    }

    walk(){
        console.log(`${this.name} walk`)
    }
}

class FlyingMonster extends  Monster { 
    fly(){
        console.log(`${this.name} flew`)
    }
}

class SwimmingMonster extends Monster {
    swim(){
        console.log(`${this.name} swam`)
    }
}

const bear = new Monster('bear')
bear.walk()
bear.attack()

const eagle = new FlyingMonster('eagle')
eagle.walk()
eagle.attack()
eagle.fly()

const shark = new SwimmingMonster('shark')
shark.walk()
shark.attack()
shark.swim()

class FlyingSwimmingMonster extends FlyingMonster{

}



function swimmer({name}){
    return { 
        swim : ()=>{ console.log(`${name} swam`)}
    }
}
function flyer({name}){
    return { 
        swim : ()=>{ console.log(`${name} swam`)}
    }
}
function swimmingMonsterCreator(name){
    const monster = {name}
    return {
        ...monster,
        ...swimmer(monster)
    }
}

function flyingSwimmingMonsterCreator(name){
    const monster = {name}
    return {
        ...monster,
        ...swimmer(monster),
        ...FlyingMonster(monster)
    }
}

// const obj = swimmer({name:'eagle'})
const obj = flyingSwimmingMonsterCreator('monster')
obj.swim()
obj.fly()