import { HeaderMenu } from '@components/Menu';
import { Layout, Row, Col } from 'antd';
import Head from 'next/head';
import { FC } from 'react';
import styled from "styled-components";

type Props = {
    title?: string;
    page?: string;
};

const { Header, Content, Footer } = Layout;

export const CustomLayout = styled(Layout) <Props>`
    .ant-layout-header {
        background: white;
        line-height: 40px;
    }
`

const MasterLayout: FC<Props> = ({
    children,
    title = "LM blog",
    page = "home",
}) => (
        <CustomLayout id="page-container" className="master-layout">
            <Head>
                <title>{title}</title>
            </Head>

            <Header style={{ justifyContent: 'center', display: 'flex' }}>
                <HeaderMenu page={page}></HeaderMenu>
            </Header>
            <Row gutter={[8, 16]} align="middle">
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 16, offset: 4 }}>
                    <Content id="content-wrap" style={{ justifyContent: 'center', display: 'flex' }}>
                        <div>{children}</div>
                    </Content>
                </Col>
            </Row>
            <Footer id="footer" style={{ textAlign: 'center' }}>Loc Mai ©2020</Footer>
        </CustomLayout>
    );

export default MasterLayout