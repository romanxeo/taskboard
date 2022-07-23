import React from 'react';
import s from './Board.module.css'
import {Task} from "../03-task/Task";
import {Space} from "antd";
import 'antd/dist/antd.css';

export const Board: React.FC = () => {

    return (
        <div className={s.body}>
            Space
            <Space
                direction="vertical"
                size={6}
                style={{
                    display: 'flex',
                }}
            >
                <Task />
                <Task />
                <Task />
                <Task />
            </Space>
        </div>
    )
}