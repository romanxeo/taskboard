import {RoutesEnum} from "../utils/constants";
import Login from "./login/Login";
import {TaskBoard} from "./taskBoard/TaskBoard";
import StartPage from "./start/StartPage";

export const publicRoutes = [
    {
        path: RoutesEnum.StartPage,
        Component: StartPage
    },
    {
        path: RoutesEnum.Login,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: RoutesEnum.board,
        Component: TaskBoard
    }
]