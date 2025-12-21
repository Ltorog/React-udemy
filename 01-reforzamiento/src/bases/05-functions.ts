
function greet(name: string): string {
    return `Hola ${name}`;
}

const greet2 = (name: string): string => {
    return `Hola ${name}`;
}


const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message);
console.log(message2);

function getUser() {
    return {
        uid: 'ABC-123',
        username: 'El_Papi23'
    }
}

interface User {
    uid: string;
    username: string;
}

const getUser2 = (): User => {
    return {
        uid: 'ABC-123',
        username: 'El_Papi23'
    }
}

const user = getUser();
const user2 = getUser2();


const myNumbers: number[] = [1, 2, 3, 4, 5, 6];

myNumbers.forEach(console.log);

console.log("HOLA");