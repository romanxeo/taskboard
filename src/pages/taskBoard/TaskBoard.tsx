import React from 'react';
import s from './TaskBoard.module.css'
import {MySpace} from "../../components/01-space/Space";
import {Space} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {userDataType} from "../../store/appReducer";
import {SpaceType} from "../../types/taskReducerTypes";

export const TaskBoard: React.FC = () => {

    const dispatch = useDispatch()

    const userData = useSelector<AppRootStateType, userDataType>(state => state.app.userData)
    const firebaseAuth = useSelector<AppRootStateType, any>(state => state.app.firebase?.firebaseAuth)
    const firebaseFirestore = useSelector<AppRootStateType, any>(state => state.app.firebase?.firebaseFirestore)

    const spaceArray = useSelector<AppRootStateType, SpaceType[]>(state => state.task.spaceArray)

    const test = firebaseFirestore.collection('space')
    console.log(test, 'test')

    const send = () => {
        firebaseFirestore.collection('space').add({title: 'test'})
    }

    return (
        <Space
            direction="vertical"
            size={16}
            style={{
                display: 'flex',
            }}
        >
            <MySpace/>
            <button onClick={send}>TEST</button>
            <MySpace/>
            <MySpace/>
            <MySpace/>
        </Space>
    )
}