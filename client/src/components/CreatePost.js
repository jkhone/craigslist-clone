import React, { useState} from 'react'
import { useCreatePost } from '../hooks'


export default props => {
    const [name, setName] = useState('')
    const [post, setPost] = useState('')

    const create = useCreatePost()

    function handleSubmit(e) {
        e.preventDefault()

        create(props.match.params.slug, name, post).then(() => {
            props.history.push('/' + props.match.params.slug)
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Submit Post to {props.match.params.slug}</h1>
                <label htmlFor='name' >Post Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <label htmlFor='post'>Post Content</label>
                <textarea 
                    name='post'
                    id='post'
                    value={post}
                    onChange={e => setPost(e.target.value)}
                />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}