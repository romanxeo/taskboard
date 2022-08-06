import React from 'react';
import s from './TaskBoard.module.css'
import {MySpace} from "../../components/01-space/Space";
import {Space} from "antd";

export const TaskBoard: React.FC = () => {

    return (
        <Space
            direction="vertical"
            size={16}
            style={{
                display: 'flex',
            }}
        >
            <MySpace/>
            <MySpace/>
            <MySpace/>
            <MySpace/>
        </Space>
    )
}