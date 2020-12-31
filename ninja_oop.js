class Ninja{
    constructor(name, health = 1, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        return this;
    }

    sayName(){
        console.log(`This Ninja's name is ${this.name}`);
        return this;
    }

    showStats(){
        console.log(`This Ninja is ${this.name}, and this Ninja's stats are; Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
        return this;
    }

    drinkSake(){
        this.health += 10;
        return this;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName().showStats().drinkSake().showStats();