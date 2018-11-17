import { filterRecipes } from '../getters';

describe('Filter recipes', () => {
  it('should include a recipe with all ingredients with valid used by date', () => {
    const recipes = [
      {
        title: 'test',
        ingredients: [
          'Ham',
          'Ketchup'
        ]
      }
    ]
    const ingredients = {
      Ham: {
          "title": "Ham",
          "best-before": "2018-11-25",
          "use-by": "2018-11-30"
      },
      Ketchup: {
        "title": "Ketchup",
        "best-before": "2018-11-25",
        "use-by": "2018-11-30"
      },
    }
    const date = Date.parse('2018-11-20');
    expect(filterRecipes(recipes, ingredients, date)).toEqual(recipes)
  });

  it('should exclude recipes with ingredients with expired used date ', () => {
    const recipes = [
      {
        title: 'test',
        ingredients: [
          'Ham',
          'Ketchup'
        ]
      }
    ]
    const ingredients = {
      Ham: {
          "title": "Ham",
          "best-before": "2018-11-25",
          "use-by": "2018-11-30"
      },
      Ketchup: {
        "title": "Ketchup",
        "best-before": "2018-11-25",
        "use-by": "2018-11-30"
      },
    }
    const date = Date.parse('2018-12-05');
    expect(filterRecipes(recipes, ingredients, date)).toEqual([])
  });

  it('should manage multiple recipes and only return valid ones', () => {
    const recipes = [
      {
        title: 'ham recipe',
        ingredients: [
          'Ham',
        ]
      },
      {
        title: 'ketchup recipe',
        ingredients: [
          'Ketchup'
        ]
      }
    ]
    const ingredients = {
      Ham: {
          "title": "Ham",
          "best-before": "2018-11-25",
          "use-by": "2018-11-25"
      },
      Ketchup: {
        "title": "Ketchup",
        "best-before": "2018-11-25",
        "use-by": "2018-11-30"
      },
    }
    const date = Date.parse('2018-11-26');
    expect(filterRecipes(recipes, ingredients, date)).toEqual([
      {
        title: 'ketchup recipe',
        ingredients: [
          'Ketchup'
        ]
      }
    ])
  });

  it('should treat a not listed ingredient as valid', () => {
    const recipes = [
      {
        title: 'test',
        ingredients: [
          'Ham',
          'Ketchup',
          'not listed'
        ]
      }
    ]
    const ingredients = {
      Ham: {
          "title": "Ham",
          "best-before": "2018-11-25",
          "use-by": "2018-11-30"
      },
      Ketchup: {
        "title": "Ketchup",
        "best-before": "2018-11-25",
        "use-by": "2018-11-30"
      },
    }
    const date = Date.parse('2018-11-20');
    expect(filterRecipes(recipes, ingredients, date)).toEqual(recipes)
  });
})