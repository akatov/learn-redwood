import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Article from '../Article/Article'

interface Props
  extends CellSuccessProps<FindArticleQuery, FindArticleQueryVariables> {
  rand: number
}

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindArticleQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ article, id, rand }: Props) => {
  return (
    <>
      <div>The id is {id}</div>
      <div>The rand is {rand}</div>
      <div>{JSON.stringify(article)}</div>
      <Article key={article.id} article={article} />
    </>
  )
}
