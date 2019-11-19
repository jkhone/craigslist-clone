import React from "react"
import { usePosts } from '../hooks'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'

export default props => {
  const posts = usePosts(props.match.params.slug)

  return (
    <div>
      <div>
        <h1>Posts</h1>
        <Link to='/'><Icon icon='home'/></Link>
        <br/>
        <Link to={'/' + props.match.params.slug + '/post'}>Add Post</Link>
      </div>
      {posts.map(post => (
        <Link to={'/post/' + post.id} key={'post' + post.id}><p>{post.name}</p></Link>
      ))}
    </div>
  )
}
