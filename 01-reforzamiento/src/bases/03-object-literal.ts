
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address
}

interface Address {
    postalCode: string;
    city: string
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 46,
    address: {
        postalCode : 'ABC123',
        city: 'New York'
    }
}

const spiderman: Person = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 22,
    address: {
        postalCode: 'ACB321',
        city: 'San José'
    }
}


console.log(ironman);
console.log(spiderman);