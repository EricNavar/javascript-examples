type Address = {
    line1: string;
    city: string;
    state: string;
}

type Profile2 = {
    name: string;
    age: number;
    phone: string | number;
    address: Address;
}

const saul2: Profile2 = {
    name: 'Saul Goodman',
    age: 41,
    phone: '(505) 503-4455',
    address: {
        line1: '9800 Montgomery Blvd NE',
        city: 'Albuquerque',
        state: 'New Mexico',
    }
};

/*
node 5-typeExample2/index.ts
*/