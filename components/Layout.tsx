import { HeaderMenu } from "@components/Menu";
import { Layout, Row, Col } from "antd";
import Head from "next/head";
import { FC } from "react";
import styled from "styled-components";

type Props = {
  title?: string;
  page?: string;
};

const { Header, Content, Footer } = Layout;

export const CustomLayout = styled(Layout)`
  .ant-layout-header {
    background: white;
    line-height: 40px;
  }
`;

const CustomHeader = styled(Header)`
  background: white;
  line-height: 40px;
`;
const MasterLayout: FC<Props> = ({
  children,
  title = "LM blog",
  page = "home",
}) => (
  <Layout id="page-container" className="master-layout">
    <Head>
      <title>{title}</title>
    </Head>

    <CustomHeader style={{ justifyContent: "center", display: "flex" }}>
      <HeaderMenu page={page}></HeaderMenu>
    </CustomHeader>
    <Row gutter={[8, 16]} align="middle">
      <Col xs={{ span: 20, offset: 2 }} xl={{ span: 16, offset: 4 }}>
        <Content
          id="content-wrap"
          style={{ justifyContent: "center", display: "flex" }}
        >
          {children}
        </Content>
      </Col>
    </Row>
    <Footer id="footer" style={{ textAlign: "center" }}>
      Loc Mai ©2020
    </Footer>
  </Layout>
);

export default MasterLayout;
