import React, {useEffect} from 'react';
import s from './App.module.css';
import {Provider, useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "./store/store";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import Header from "./components/04-header/Header";
import {privateRoutes, publicRoutes} from "./pages/routes";
import {createFirebaseAC} from "./store/appReducer";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const _App: React.FC = () => {

    const dispatch = useDispatch()

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const firebaseAuth = firebase.auth();
    const firebaseFirestore = firebase.firestore();

    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth)

    const routes = isAuth ? privateRoutes : publicRoutes

    useEffect(() => {
        dispatch(createFirebaseAC(firebaseApp, firebaseAuth, firebaseFirestore))
    }, [firebaseApp, firebaseAuth, firebaseFirestore])

    return (
        <>
            <Header/>
            <Routes>
                {
                    routes.map((item, idx) =>
                        <Route key={idx} path={item.path} element={<item.Component/>}/>
                    )
                }
                <Route path="*" element={<Navigate to={routes[0].path}/>}/>
            </Routes>
        </>
    )
}

const App: React.FC = () => {
    return (
        <Provider store={store}>
                <BrowserRouter>
                    <_App/>
                </BrowserRouter>
        </Provider>
    );
}

export default App;
