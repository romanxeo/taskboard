import React from 'react';
import s from './Space.module.css'
import {Board} from "../02-board/Board";
import {Card, Dropdown, Menu, Space} from "antd";
import 'antd/dist/antd.css';
import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined, MenuOutlined,
    StarFilled
} from "@ant-design/icons";
import {Task} from "../03-task/Task";
import {BoardType, RainbowColors, SpaceType, ModeCommon} from "../../types/taskReducerTypes";

export const MySpace: React.FC = () => {

    const space: SpaceType = {
        id: 1,
        title: 'Title space',
        description: 'Some space. Many words. For you. Down use Lorem Ipsum',
        boardsArray: [],
        isMark: false,
        type: ModeCommon.standard,
        color: RainbowColors.gray,
        created_at: Date.now(),
        updated_at: Date.now(),
    }

    const itemsMenu = [
        {
            key: 1,
            label: (<span onClick={() => console.log('Edit task')}>Edit task</span>),
        },
        {
            key: 2,
            label: (<span onClick={() => console.log('Completed task')}>Completed task</span>),
        },
        {
            key: 3,
            label: (<span onClick={() => console.log('Mark task')}>Mark task</span>),
        },
        {
            key: 4,
            danger: true,
            label: (<span onClick={() => console.log('Delete task')}>Delete task</span>),
        },
    ]

    return (

        <Card
            size="small"
            title={
                <Space>
                    <StarFilled style={{ fontSize: '18px', color: '#8136ff' }}/>
                    <CheckCircleOutlined style={{ fontSize: '18px', color: '#07cc00' }}/>
                    <ClockCircleOutlined style={{ fontSize: '18px', color: '#0058cc' }}/>
                    <CloseCircleOutlined style={{ fontSize: '18px', color: '#ff1c1c' }}/>
                    <ExclamationCircleOutlined style={{ fontSize: '18px', color: '#ff951c', lineHeight: '1'}}/>
                    {space.title}
                </Space>
            }
            extra={
                <Dropdown
                    overlay={<Menu items={itemsMenu}/>}
                    placement="bottomRight"
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <MenuOutlined />
                        </Space>
                    </a>
                </Dropdown>
            }
            style={{
                //width: 300,
                background: '#dddddd'
            }}
        >
            <Space
                 direction="horizontal"
                 size={12}
                 style={{
                     display: 'flex',
                 }}
             >
                <Board />
                <Board />
                <Board />
                <Board />
            </Space>
        </Card>


        // <div className={s.body}>
        //     Space
        //
        //     <div className={s.boardsContent}>
        //         <Space
        //             direction="horizontal"
        //             size={6}
        //             style={{
        //                 display: 'flex',
        //             }}
        //         >
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //             <Board/>
        //         </Space>
        //     </div>
        // </div>
    )
}