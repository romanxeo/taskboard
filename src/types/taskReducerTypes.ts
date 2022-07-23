export enum TypeTask {
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
}

export type TaskType = {
    id: string
    title: string
    description: string
    isCompleted: boolean
    isMark: boolean
    type: TypeTask
    color: RainbowColors
    created_at: Date
    updated_at: Date
}

export type BoardType = {
    id: string
    title: string
    description: string
}

export type SpaceType = {
    id: string
    title: string
    description: string
}