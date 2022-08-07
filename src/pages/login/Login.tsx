import React from 'react'
import s from './Login.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import firebase from 'firebase/compat/app';
import {setUserDataAC} from "../../store/appReducer";

const Login: React.FC = () => {

    const dispatch = useDispatch()

    const firebaseAuth = useSelector<AppRootStateType, any>(state => state.app.firebase?.firebaseAuth)

    const login = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider()
            const user = await firebaseAuth.signInWithPopup(provider)
            dispatch(setUserDataAC(
                user.additionalUserInfo.profile.email,
                user.additionalUserInfo.profile.name,
                user.additionalUserInfo.profile.picture
            ))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={s.container}>
            <button onClick={login}>Login with Google</button>
        </div>
    )
}

export default Login