import MasterLayout from '@components/Layout'
import { MockArticles } from '@mocks/MockData'

function PostsPage() {
  return <MasterLayout title="Posts" page="posts">
   <p>Something</p>
  </MasterLayout>
}


export function getAllPostIds() {
  return MockArticles.map((article) => {
    return {
      params: {
        id: article._id
      }
    }
  })
}

export function getPostData(id) {
  const article = MockArticles.find((article) => article._id === id)
  console.log(article)
  return article
}

export default PostsPage

