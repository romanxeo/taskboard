enum appReducerTypes {
    isAuth = 'app/isAuth'
}

export const setUserAC = (isAuth: boolean) => {
    return {
        type: appReducerTypes.isAuth,
        isAuth
    } as const
}

export type setUserAT = ReturnType<typeof setUserAC>

export type actionType = setUserAT

type InitStateType = {
    isAuth: boolean
}

export const initState: InitStateType = {
    isAuth: false
}

export const appReducer = (state: InitStateType = initState, action: actionType): InitStateType => {
    switch (action.type) {
        case appReducerTypes.isAuth: {
            return {...state, isAuth: action.isAuth}
        }
        default: {
            return state
        }
    }
}