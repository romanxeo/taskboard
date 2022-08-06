import React from 'react';
import s from './App.module.css';
import {Provider, useSelector} from "react-redux";
import {AppRootStateType, store} from "./store/store";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import Header from "./components/04-header/Header";
import {privateRoutes, publicRoutes} from "./pages/routes";


const _App: React.FC = () => {

    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth)

    const routes = isAuth ? privateRoutes : publicRoutes

    return (
        <>
            <Header />
            <Routes>
                {
                    routes.map((item, idx) =>
                        <Route key={idx} path={item.path} element={<item.Component/>}/>
                    )
                }
                <Route path="*" element={<Navigate to={routes[0].path} /> }/>
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
