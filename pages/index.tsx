import MasterLayout from '@components/Layout'
import { MockArticles } from '@mocks/MockData'
import { Card, Row, Col } from 'antd'

const Articles = () => {

  const cards = []

  const { Meta } = Card;

  MockArticles.forEach((article) => cards.push(<Col xs={12} xl={8}><Card title={article.title} key={article._id}>{article.short_description}</Card> </Col>))
  return (
    <Row gutter={[8, 16]}>
      {cards}
    </Row>
  )
}

function HomePage() {
  return <MasterLayout title="Home"><Articles></Articles></MasterLayout>
}

export default HomePage