export interface User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateJoined: string;
    role: string;
}

export const users: User[] = [
    {
        id: 1,
        username: 'james.johnson',
        password: 'pass123',
        firstName: 'James',
        lastName: 'Johnson',
        email: 'james.johnson@example.com',
        phone: '+1234567890',
        dateJoined: '2022-01-15',
        role: 'admin'
    },
    {
        id: 2,
        username: 'sophia.garcia',
        password: 'pass123',
        firstName: 'Sophia',
        lastName: 'Garcia',
        email: 'sophia.garcia@example.com',
        phone: '+0987654321',
        dateJoined: '2021-05-23',
        role: 'manager'
    },
    {
        id: 3,
        username: 'charlotte.lopez',
        password: 'pass123',
        firstName: 'Charlotte',
        lastName: 'Lopez',
        email: 'charlotte.lopez@example.com',
        phone: '+1122334455',
        dateJoined: '2022-02-12',
        role: 'admin'
    },    
];

