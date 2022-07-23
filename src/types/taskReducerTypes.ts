export enum TypeCommon {
    standard = 'standard',
    important = 'important'
}

export enum RainbowColors {
    red = '#ee1100',
    orange = '#ff6644',
    yellow = '#feae2d',
    green = '#aacc22',
    blue = '#12bdb9',
    indigo = '#4444dd',
    violet = '#a12ec7',
    gray = '#777777'
}

export type TaskType = {
    id: number
    title: string
    description: string
    isCompleted: boolean
    isMark: boolean
    type: TypeCommon
    color: RainbowColors
    created_at: number
    updated_at: number
}

export type BoardType = {
    id: number
    title: string
    description: string
    tasksArray: TaskType[]
    isMark: boolean
    type: TypeCommon
    color: RainbowColors
    created_at: Date
    updated_at: Date
}

export type SpaceType = {
    id: number
    title: string
    description: string
    boardsArray: BoardType[]
    isMark: boolean
    type: TypeCommon
    color: RainbowColors
    created_at: Date
    updated_at: Date
}