import React from 'react';
import s from './Board.module.css'
import {Task} from "../03-task/Task";
import {Card, Dropdown, Menu, Space} from "antd";
import 'antd/dist/antd.css';
import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined, MenuOutlined,
    StarFilled
} from "@ant-design/icons";
import {BoardType, RainbowColors, TaskType, TypeCommon} from "../../types/taskReducerTypes";

export const Board: React.FC = () => {


    const board: BoardType = {
        id: 1,
        title: 'Title board',
        description: 'Some board. Many words. For you. Down use Lorem Ipsum',
        tasksArray: [],
        isMark: false,
        type: TypeCommon.standard,
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
                    {board.title}
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
                background: '#eeeeee'
            }}
        >
            <Space
                direction="vertical"
                size={8}
                style={{
                    display: 'flex',
                }}
            >
                <Task />
                <Task />
                <Task />
                <Task />
            </Space>
        </Card>
        // <div className={s.body}>
        //     Space
        //     <Space
        //         direction="vertical"
        //         size={6}
        //         style={{
        //             display: 'flex',
        //         }}
        //     >
        //         <Task />
        //         <Task />
        //         <Task />
        //         <Task />
        //     </Space>
        // </div>
    )
}