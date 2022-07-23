import React from 'react';
import s from './Task.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {RainbowColors, TaskType, TypeCommon} from "../../types/taskReducerTypes";
import 'antd/dist/antd.css';
import {Card} from "antd";

export const Task: React.FC = () => {

    const task: TaskType = {
        id: 1,
        title: 'Title task',
        description: 'Some task. Many words. For you. Down use Lorem Ipsum',
        isCompleted: false,
        isMark: false,
        type: TypeCommon.standard,
        color: RainbowColors.gray,
        created_at: Date.now(),
        updated_at: Date.now(),
    }

    return (
        <Card
            size="small"
            title="Small size card"
            extra={<a href="#">More</a>}
            style={{
                width: 300,
            }}
        >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    )
}