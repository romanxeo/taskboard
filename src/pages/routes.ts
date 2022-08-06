import {RoutesEnum} from "../utils/constants";
import Login from "./login/Login";
import {TaskBoard} from "./taskBoard/TaskBoard";

export const publicRoutes = [
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