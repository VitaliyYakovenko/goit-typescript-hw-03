class Key {
    private signature: number;
 
    constructor() {
       this.signature = Math.floor(Math.random() * 10) + 1;
   }

    public getSignature():number {
        return this.signature
    }
};



class Person  {
    private key: Key

    constructor(key: Key) {
        this.key = key;
    }

    public getKey():Key {
        return this.key;
    }
};



abstract class House {
    protected door: boolean = false;
    protected tenants: Person[] = [];
    protected key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    abstract OpenDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log(`Людина  ${person.getKey().getSignature()} зайшла в будинок.`);
        } else {
            console.log("Двері закриті. Людина не може увійти.");
        }
    }
}

class MyHouse extends House {
    OpenDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Двері відчинені.");
        } else {
            console.log("Недійсний ключ. Двері залишаються закритими.");
        }
    }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);


export {};