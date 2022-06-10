import { Link, routes } from '@redwoodjs/router'
import type { Post } from 'types/graphql'
import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  const { hasRole } = useAuth()
  const moderate = () => {
    if (confirm('Are you sure?')) {
      // TODO
    }
  }
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div>{article.body}</div>
      <div>Posted at: {article.createdAt}</div>
      {hasRole('moderator') && (
        <button type="button" onClick={moderate}>
          Delete
        </button>
      )}
    </article>
  )
}

export default Article
