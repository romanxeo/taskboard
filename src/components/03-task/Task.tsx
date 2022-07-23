import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";

export const Task: React.FC = () => {

    const task = useSelector<AppRootStateType, number>(state => state.task.test)

    return (
        <div>Task - {task}</div>
    )
}