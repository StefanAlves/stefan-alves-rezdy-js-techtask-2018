import { Ingredient } from '../../types';

export const recipes = [
    {
        title: 'Fry-up',
        ingredients: [
            'Bacon',
            'Eggs',
            'Baked Beans',
            'Mushrooms',
            'Sausage',
            'Bread',
        ],
    },
    {
        title: 'Salad',
        ingredients: [
            'Lettuce',
            'Tomato',
            'Cucumber',
            'Beetroot',
            'Salad Dressing',
        ],
    },
    {
        title: 'Hotdog',
        ingredients: [
            'Hotdog Bun',
            'Sausage',
            'Ketchup',
            'Mustard',
        ],
    },
    {
        title: 'Omelette',
        ingredients: [
            'Eggs',
            'Mushrooms', // typo not sure if it's on purpose
            'Milk',
            'Salt',
            'Pepper',
            'Spinach',
        ],
    },
];

const ingredientsList = [
    {
        'title': 'Ham',
        'best-before': '2018-11-25',
        'use-by': '2018-11-30',
    },
    {
        'title': 'Cheese',
        'best-before': '2018-11-25',
        'use-by': '2018-11-30',
    },
    {
        'title': 'Bread',
        'best-before': '2018-11-25',
        'use-by': '2018-11-30',
    },
    {
        'title': 'Butter',
        'best-before': '2018-11-25',
        'use-by': '2018-11-30',
    },
    {
        'title': 'Bacon',
        'best-before': '2018-11-20',
        'use-by': '2018-11-25',
    },
    {
        'title': 'Eggs',
        'best-before': '2018-11-20',
        'use-by': '2018-11-25',
    },
    {
        'title': 'Mushrooms',
        'best-before': '2018-11-10',
        'use-by': '2018-11-18',
    },
    {
        'title': 'Sausage',
        'best-before': '2018-11-20',
        'use-by': '2018-11-25',
    },
    {
        'title': 'Hotdog Bun',
        'best-before': '2018-11-10',
        'use-by': '2018-11-25',
    },
    {
        'title': 'Ketchup',
        'best-before': '2018-11-25',
        'use-by': '2018-11-30',
    },
    {
        'title': 'Mustard',
        'best-before': '2018-11-25',
        'use-by': '2018-11-30',
    },
    {
        'title': 'Lettuce',
        'best-before': '2018-11-20',
        'use-by': '2018-11-25',
    },
    {
        'title': 'Tomato',
        'best-before': '2018-11-20',
        'use-by': '2018-11-25',
    },
    {
        'title': 'Cucumber',
        'best-before': '2018-11-20',
        'use-by': '2018-11-25',
    },
    {
        'title': 'Beetroot',
        'best-before': '2018-11-20',
        'use-by': '2018-11-25',
    },
    {
        'title': 'Salad Dressing',
        'best-before': '2018-11-10',
        'use-by': '2018-11-13',
    },
];

export const ingredients = ingredientsList.reduce(
    (acc: { [key: string]: Ingredient }, ingredient: Ingredient) => {
        acc[ingredient.title] = ingredient;
        return acc;
    },
    {}, // default state
);
