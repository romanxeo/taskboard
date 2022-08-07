import {
    SpaceType,
    createCommonType,
    updateCommonType,
    ModeCommon,
    RainbowColors
} from "../types/taskReducerTypes";
import { v4 as uuidv4 } from 'uuid';

enum taskReducerTypes {
    clearTaskData = 'task/clearTaskData',
    fetchTaskData = 'task/fetchTaskData',

    createSpace = 'task/createSpace',
    updateSpace = 'task/updateSpace',
    deleteSpace = 'task/updateSpace',

    createBoard = 'task/createBoard',
    updateBoard = 'task/updateBoard',
    deleteBoard = 'task/deleteBoard',

    createTask = 'task/createTask',
    updateTask = 'task/updateTask',
    deleteTask = 'task/deleteTask',
}

export const clearTaskDataAC = () => {
    return {
        type: taskReducerTypes.clearTaskData,
    } as const
}

export const fetchTaskDataAC = (spaceArray: SpaceType[]) => {
    return {
        type: taskReducerTypes.fetchTaskData,
        spaceArray
    } as const
}

export const createSpaceAC = (spaceData: createCommonType) => {
    return {
        type: taskReducerTypes.createSpace,
        spaceData,
    } as const
}

export const updateSpaceAC = (spaceId: string, spaceData: updateCommonType) => {
    return {
        type: taskReducerTypes.updateSpace,
        spaceId,
        spaceData
    } as const
}

export const deleteSpaceAC = (spaceId: string) => {
    return {
        type: taskReducerTypes.deleteSpace,
        spaceId
    } as const
}

export const createBoardAC = (spaceId: string, boardData: createCommonType) => {
    return {
        type: taskReducerTypes.createBoard,
        spaceId,
        boardData,
    } as const
}

export const updateBoardAC = (spaceId: string, boardId: string, boardData: updateCommonType) => {
    return {
        type: taskReducerTypes.updateBoard,
        spaceId,
        boardId,
        boardData,
    } as const
}

export const deleteBoardAC = (spaceId: string, boardId: string) => {
    return {
        type: taskReducerTypes.deleteBoard,
        spaceId,
        boardId
    } as const
}

export const createTaskAC = (spaceId: string, boardId: string, taskData: createCommonType) => {
    return {
        type: taskReducerTypes.createTask,
        spaceId,
        boardId,
        taskData
    } as const
}

export const updateTaskAC = (spaceId: string, boardId: string, taskId: string, taskData: updateCommonType) => {
    return {
        type: taskReducerTypes.updateTask,
        spaceId,
        boardId,
        taskId,
        taskData,
    } as const
}

export const deleteTaskAC = (spaceId: string, boardId: string, taskId: string) => {
    return {
        type: taskReducerTypes.deleteTask,
        spaceId,
        boardId,
        taskId
    } as const
}

export type clearTaskDataAT = ReturnType<typeof clearTaskDataAC>
export type fetchTaskDataAT = ReturnType<typeof fetchTaskDataAC>

export type createSpaceAT = ReturnType<typeof createSpaceAC>
export type updateSpaceAT = ReturnType<typeof updateSpaceAC>
export type deleteSpaceAT = ReturnType<typeof deleteSpaceAC>

export type createBoardAT = ReturnType<typeof createBoardAC>
export type updateBoardAT = ReturnType<typeof updateBoardAC>
export type deleteBoardAT = ReturnType<typeof deleteBoardAC>

export type createTaskAT = ReturnType<typeof createTaskAC>
export type updateTaskAT = ReturnType<typeof updateTaskAC>
export type deleteTaskAT = ReturnType<typeof deleteTaskAC>

export type actionType = clearTaskDataAT
    | fetchTaskDataAT
    | createSpaceAT
    | updateSpaceAT
    | deleteSpaceAT
    | createBoardAT
    | updateBoardAT
    | deleteBoardAT
    | createTaskAT
    | updateTaskAT
    | deleteTaskAT

type InitStateType = {
    spaceArray: SpaceType[]
}

export const initState: InitStateType = {
    spaceArray: []
}

export const taskReducer = (state: InitStateType = initState, action: actionType): InitStateType => {
    switch (action.type) {
        case taskReducerTypes.clearTaskData: {
            let copyState = {...state}
            copyState.spaceArray = []
            return copyState
        }
        case taskReducerTypes.fetchTaskData: {
            let copyState = {...state}
            copyState.spaceArray = action.spaceArray
            return copyState
        }
        case taskReducerTypes.createSpace: {
            let copyState = {...state}

            let newSpace: SpaceType = {
                spaceId: uuidv4(),
                title: action.spaceData.title,
                description: action.spaceData.description,
                boardsArray: [],
                isMark: false,
                mode: ModeCommon.standard,
                color: RainbowColors.gray,
                created_at: Date.now(),
                updated_at: Date.now(),
            }
            copyState.spaceArray = [newSpace, ...copyState.spaceArray]

            return copyState
        }
        case taskReducerTypes.updateSpace: {
            let copyState = {...state}

            console.log(action)


            // let newSpace: SpaceType = {
            //     spaceId: action.spaceId,
            //     title: action.spaceData.title,
            //     description: action.spaceData.description,
            //     boardsArray: [],
            //     isMark: action.spaceData.isMark,
            //     mode: ModeCommon.standard,
            //     color: RainbowColors.gray,
            //     created_at: Date.now(),
            //     updated_at: Date.now(),
            // }
            //
            // copyState.spaceArray = [newSpace, ...copyState.spaceArray]

            return copyState
        }
        default: {
            return state
        }
    }
}