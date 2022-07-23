export const testAC = () => {
    return {
        type: 'TEST/test',
    } as const
}

export type testAT = ReturnType<typeof testAC>


export type actionType = testAT

type InitStateType = {
    test: number
}

export const initState: InitStateType = {
    test: 1230
}

export const taskReducer = (state: InitStateType = initState, action: actionType): InitStateType => {
    switch (action.type) {
        case 'TEST/test': {
            return {...state, test: 2}
        }
        default: {
            return state
        }
    }
}