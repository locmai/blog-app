import { Menu, Space } from "antd";
import { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

type Props = {
  page?: string;
};

const CustomMenu = styled(Menu)<Props>`
  .ant-menu-item {
    padding: 40px 0px 40px 0px;
  }
`;

const BaseMenu: FC<Props> = ({ page }) => {
  return (
    <Space size={"large"}>
      <Menu defaultSelectedKeys={[page]} mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="posts">
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="projects">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link href="/about">
            <a>About</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Space>
  );
};

export const HeaderMenu = styled(BaseMenu)<Props>``;
