import React from 'react';
import s from './Space.module.css'
import {Board} from "../02-board/Board";
import {Space} from "antd";
import 'antd/dist/antd.css';

export const MySpace: React.FC = () => {

    return (
        <div className={s.body}>
            Space

            <div className={s.boardsContent}>
                <Space
                    direction="horizontal"
                    size={6}
                    style={{
                        display: 'flex',
                    }}
                >
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                    <Board/>
                </Space>
            </div>
        </div>
    )
}