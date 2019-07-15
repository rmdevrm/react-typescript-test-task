export interface IHobbyState {
    id: number,
    passionLevel: string,
    hobbyName: string,
    year: string,
}

export interface IUserState {
    id: number,
    name: string,
    hobbies: IHobbyState[]
}

export interface IState {
    users: Array<IUserState>,
}
