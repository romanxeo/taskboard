import React from 'react';
import s from './App.module.scss';
import {TaskBoard} from "./pages/taskBoard/TaskBoard";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {BrowserRouter} from "react-router-dom";

const _App: React.FC = () => {
    return (
        <TaskBoard/>
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
