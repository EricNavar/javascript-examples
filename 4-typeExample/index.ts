type Profile = {
    name: string;
    age: number;
    phone: string | number;
    address?: string;
}

const saul: Profile = {
    name: 'Saul Goodman',
    age: 41,
    phone: '(505) 503-4455',
    address: '9800 Montgomery Blvd NE, Albuquerque',
};

function greeting(person: Profile) {
    console.log(person.name);
}
