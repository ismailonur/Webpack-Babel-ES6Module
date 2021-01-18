export default class {

    constructor() {
        this.PI = 789899;
    }


    sum(...numbers) {
        return numbers.reduce((number, total) => total + number);
    }

    mult(...numbers) {
        return numbers.reduce((number, total) => total * number);
    }
}

