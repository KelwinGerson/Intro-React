// typing what do get in how props inside function
interface Users {
    name: string;
    bio: string;
    age: number;
}

function sumAge(users: Users[]) {
    let sum = 0;

    for (const user of users) {
        sum += user.age;
    }
    return sum;
}

sumAge([
    {
        name: 'Kelwin',
        bio: 'Web Development',
        age: 23
    }
])