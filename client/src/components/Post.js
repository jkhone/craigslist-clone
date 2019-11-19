import React from 'react'
import { usePost } from '../hooks'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'

export default props => {
    const post = usePost(props.match.params.id)

    return (
        <div>
            <Link to='/'><Icon icon='home'/></Link>
            <h1>Title: {post.name}</h1>
            <p>{post.post}</p>
        </div>
    )
}