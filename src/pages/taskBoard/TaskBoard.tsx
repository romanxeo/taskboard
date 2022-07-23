import React from 'react';
import s from './TaskBoard.module.css'
import {MySpace} from "../../components/01-space/Space";

export const TaskBoard: React.FC = () => {

    return (
        <div className={s.body}>
            <MySpace/>
            <MySpace/>
        </div>
    )
}