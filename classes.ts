export class Person {

    constructor(private firstName: string, private lastName: string) {
        
    }
    public getlastName(): string {
        return this.lastName;
    }
    public setlastName(value: string) {
        this.lastName = value;
    }
    public getfirstName(): string {
        return this.firstName;
    }
    public setfirstName(value: string) {
        this.firstName = value;
    }
    getFullName () {
        return this.firstName + this.lastName;
    }
}


class Programmer extends Person {
    
}

