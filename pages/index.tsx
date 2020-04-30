import * as React from "react";
import MasterLayout from "@components/Layout";
import { MockArticles } from "@mocks/MockData";
import { Card } from "antd";
import styled from "styled-components";
import { NextPage } from "next";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  width: 100%;
`;

const Articles: React.FunctionComponent = () => {
  const { Meta } = Card;

  return (
    <Container>
      {MockArticles.map((article) => (
        <Card title={article.title} key={article._id}>
          {article.short_description}
        </Card>
      ))}
    </Container>
  );
};

const HomePage: NextPage = () => {
  return (
    <MasterLayout title="Home">
      <Articles></Articles>
    </MasterLayout>
  );
};

export default HomePage;
