export enum ModeCommon {
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

export type createCommonType = {
    title: string
    description: string
}

export type updateCommonType = createCommonType & {
    isMark: boolean
    mode: ModeCommon
    color: RainbowColors
}

export type dataCommonType = {
    created_at: number
    updated_at: number
}

export type TaskType = updateCommonType & dataCommonType & {
    taskId: string
    isCompleted: boolean
}

export type BoardType = updateCommonType & dataCommonType & {
    boardId: string
    tasksArray: TaskType[]
}

export type SpaceType = updateCommonType & dataCommonType & {
    spaceId: string
    boardsArray: BoardType[]
}