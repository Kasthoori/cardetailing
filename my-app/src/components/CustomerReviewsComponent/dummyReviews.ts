import {Review} from './Review';

export const dummyReviews:Review[] = [
    {
        id: "1",
        name: "Alice Johnson",
        message: "Fantastic service and very freindly staff, Highly recommended",
        rating: 5,
        createdAt: new Date("2024-03-10T10:00:00Z"),

    },
    {
        id: "2",
        name: "David Lee",
        message: "Quick and professional, Will use the service again",
        rating: 4,
        createdAt: new Date("2024-09-02T13:30:00Z"),
    },
    {
         id: "3",
        name: "Maria Gomez",
        message: "Excellent team!, They fixed everthing within an hour",
        rating: 5,
        createdAt: new Date("2024-11-14T14:00:00Z"),
    },
    {
         id: "4",
        name: "Steve Miller",
        message: "Okay experience, Took a bit long but job was done well",
        rating: 3,
        createdAt: new Date("2024-05-10T09:40:00Z"),
    },
    {
         id: "5",
        name: "Lily Tran",
        message: "Good value for money. Would recommend to friends.",
        rating: 4,
        createdAt: new Date("2024-09-12T15:45:00Z"),
    }
];