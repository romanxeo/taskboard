import React from 'react'
import {Card, Space} from "antd";

const Header: React.FC = () => {


    return (
        <Card
            size="small"
            title={
                <Space>
                    Title
                </Space>
            }
            extra="Extra"
            style={{
                //width: 300,
                background: '#eeeeee',
                height: '40px'
            }}
        >
        </Card>
    )
}

export default Header