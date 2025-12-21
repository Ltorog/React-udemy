const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ( { key, name, age, rank }: Hero ) => {
    return {
        keyName: key,
        user: {
            name,
            age
        },
        rank
    }
}

const context = useContext(person);

const { rank, keyName, user: { name, age } } = context;

console.log({ rank, keyName, name, age });
