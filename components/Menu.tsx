import { Menu, Space } from 'antd';
import { FC } from 'react';
import styled from "styled-components";

type Props = {
    page?: string;
};

const CustomMenu  = styled(Menu) <Props>`
    .ant-menu-item {
        padding: 40px 0px 40px 0px;
    }
`

const BaseMenu: FC<Props> = ({ page }) => {

    return (
        <Space size={'large'}>
            <Menu defaultSelectedKeys={[page]} mode="horizontal">
                <Menu.Item key="home"><a href="/">
                    Home</a></Menu.Item>
                <Menu.Item key="posts"><a href="/posts">
                    Posts</a></Menu.Item>
                <Menu.Item key="projects"><a href="/projects">
                    Projects</a></Menu.Item>
                <Menu.Item key="about"><a href="/about">
                    About</a></Menu.Item>
            </Menu>
        </Space>
    );
};


export const HeaderMenu = styled(BaseMenu) <Props>`
`