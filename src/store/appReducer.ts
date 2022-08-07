enum appReducerTypes {
    setUserData = 'app/setUserData',
    createFirebase = 'app/createFirebase',
    logout = "app/logout"
}

export const setUserDataAC = (email: string, name: string, picture: string) => {
    return {
        type: appReducerTypes.setUserData,
        email,
        name,
        picture,
    } as const
}

export const createFirebaseAC = (firebaseApp: any, firebaseAuth: any, firebaseFirestore: any) => {
    return {
        type: appReducerTypes.createFirebase,
        firebaseApp,
        firebaseAuth,
        firebaseFirestore
    } as const
}

export const logoutAC = () => {
    return {
        type: appReducerTypes.logout
    } as const
}

export type setIsUserAT = ReturnType<typeof setUserDataAC>
export type createFirebaseAT = ReturnType<typeof createFirebaseAC>
export type logoutAT = ReturnType<typeof logoutAC>

export type actionType = setIsUserAT
    | createFirebaseAT
    | logoutAT

export type userDataType = {
    email: string
    name: string
    picture: string
}

export type firebaseType = {
    firebaseApp: any
    firebaseAuth: any
    firebaseFirestore: any
}

type InitStateType = {
    firebase: firebaseType | null
    userData: userDataType
    isAuth: boolean
}

export const initState: InitStateType = {
    firebase: null,
    userData: {
        email: '',
        name: '',
        picture: '',
    },
    isAuth: false,
}

export const appReducer = (state: InitStateType = initState, action: actionType): InitStateType => {
    switch (action.type) {
        case appReducerTypes.setUserData: {
            let copyState = {...state}
            copyState.isAuth = true
            copyState.userData = {
                email: action.email,
                name: action.name,
                picture: action.picture,
            }
            return copyState
        }
        case appReducerTypes.logout: {
            let copyState = {...state}
            copyState.isAuth = false
            copyState.userData = {
                email: "",
                name: "",
                picture: "",
            }
            return copyState
        }
        case appReducerTypes.createFirebase: {
            let copyState = {...state}
            copyState.firebase = {
                ...state,
                firebaseApp: action.firebaseApp,
                firebaseAuth: action.firebaseAuth,
                firebaseFirestore: action.firebaseFirestore
            }
            return copyState
        }
        default: {
            return state
        }
    }
}