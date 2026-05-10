import type { ICity, IPerson } from "../types";

export const persons: IPerson[] = [
    {
        name: "Трифон Артемов",
        birthYear: 1512,
        post: "Переводчик",
        city: "Царицын",
        id: 1,
    },

    {
        name: "Петр Володимиров",
        birthYear: 1534,
        post: "Извозчик",
        city: "Москва",
        id: 2,
    },
];

export const cities: ICity[] = [
    {
        latin_name: "Moscow",
        title: "Москва",
        population: 40000,
        xCoor: 30,
        yCoor: 40,
        id: 1,
    },

    {
        latin_name: "Tsaitsyn",
        title: "Царицын",
        population: 1200,
        xCoor: 44,
        yCoor: 50,
        id: 2,
    },
];
