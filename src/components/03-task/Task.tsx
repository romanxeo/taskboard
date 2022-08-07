import React, {useState} from 'react';
import s from './Task.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {RainbowColors, TaskType, ModeCommon} from "../../types/taskReducerTypes";
import 'antd/dist/antd.css';
import {Card, Checkbox, Dropdown, Menu, Space} from "antd";
import {
    CheckCircleOutlined,
    CheckCircleTwoTone,
    ClockCircleOutlined,
    CloseCircleOutlined, ExclamationCircleOutlined,
    MenuOutlined, StarFilled, StarOutlined
} from "@ant-design/icons";

export const Task: React.FC = () => {

    const task: TaskType = {
        id: 1,
        title: 'Title task',
        description: 'Some task. Many words. For you. Down use Lorem Ipsum',
        isCompleted: false,
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
                    {task.title}
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
                width: 300,
            }}
        >
            <p>{task.description}</p>
        </Card>
    )
}