import { getSkills } from "../skills";

test("Testing get all skills from character", () => {
    const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
          {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'GoodURL',
            description: 'Двойной выстрел наносит двойной урон'
          }, 
          {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'CoolURL'
          }
        ]	
      }

    let result = [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'GoodURL',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'CoolURL',
            description: "Description unavailable"
        },
    ]

    expect(getSkills(character)).toEqual(result)
})