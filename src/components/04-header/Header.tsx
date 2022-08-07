import React from 'react'
import s from './Header.module.css'
import {Card, Dropdown, Menu, Space} from "antd";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {logoutAC, userDataType} from "../../store/appReducer";

const Header: React.FC = () => {

    const dispatch = useDispatch()

    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth)
    const userData = useSelector<AppRootStateType, userDataType>(state => state.app.userData)
    const firebaseAuth = useSelector<AppRootStateType, any>(state => state.app.firebase?.firebaseAuth)

    const logout = () => {
        firebaseAuth.signOut()
        dispatch(logoutAC())
    }

    const itemsMenu = [
        {
            key: 1,
            label: (<span>{userData.name}</span>),
        },
        {
            key: 2,
            label: (<span>{userData.email}</span>),
        },
        {
            key: 3,
            danger: true,
            label: (<span onClick={logout}>Logout</span>),
        },
    ]

    return (
        <Card
            size="small"
            title={
                <Space>
                    Title
                </Space>
            }
            extra={
                isAuth
                    ? <Dropdown
                        overlay={<Menu items={itemsMenu}/>}
                        placement="bottomRight"
                    >
                        <img src={userData.picture}
                             onClick={(e) => e.preventDefault()}
                             className={s.avatar}
                             alt="avatar"
                        />
                    </Dropdown>
                    : <Link to="/login" className={s.login}>Login</Link>

            }
            style={{
                background: '#eeeeee',
                height: '50px'
            }}
        >
        </Card>
    )
}

export default Header