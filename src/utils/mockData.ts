enum PassionLevel {
  Low = "Low",
  Medium = "Medium",
  High = "High",
  'Very-High' = "Very-High"
}

export interface IHobbies {
  id: number,
  passionLevel: PassionLevel,
  hobbyName: string,
  year: string,
}

export interface IUser {
  id: number,
  name: string,
  hobbies: IHobbies[],
}

let userIdCounter = 1562;
let hobbyIdCounter = 1762;

export let initialMockData: IUser[] = [
  {
    id: 1,
    name: 'John',
    hobbies: [
      {
        id: 1,
        passionLevel: PassionLevel.Low,
        hobbyName: 'coding',
        year: '2018',
      },
      {
        id: 2,
        passionLevel: PassionLevel.Low,
        hobbyName: 'Reading',
        year: '2018',
      },
    ]
  },
  {
    id: 2,
    name: 'Steve',
    hobbies: [
      {
        id: 1,
        passionLevel: PassionLevel.Low,
        hobbyName: 'Playing',
        year: '2018',
      },
    ],
  },
  {
    id: 3,
    name: 'Peter',
    hobbies: [],
  },
  {
    id: 4,
    name: 'Markus',
    hobbies: [],
  }
];

export const addUser = (userName: string) => {
  const userData = {
    id: userIdCounter++,
    name: userName,
    hobbies: [],
  }
  initialMockData.push(userData)
  return userData
}

export const addHobby = (hobby: any) => {
  const { userId, hobbyData } = hobby
  const newHobby = {
    id: hobbyIdCounter++,
    ...hobbyData
  }
  const user = initialMockData.find(user => user.id === userId)
  if (!user) return
  const updatedHobbyList = [...user.hobbies, newHobby]
  user.hobbies = updatedHobbyList
  return {
    user
  }
}

export const deleteHobby = ( hobby: any ) => {
  return hobby
}
