import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_POSTS = 'posts/GET_POSTS'
const GET_SINGLE_POST ='posts/GET_SINGLE_POST'

const initialState = { 
    posts: [],
    currentPost: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
      case GET_POSTS:
        return { ...state, posts: action.payload }
      case GET_SINGLE_POST:
        return { ...state, currentPost: action.payload }
      default:
        return state
    }
}

function getPosts(slug) {
    return dispatch => {
        axios.get('/posts/' + slug).then(resp => {
            dispatch({
                type: GET_POSTS,
                payload: resp.data
            })
        })
    }
}

function getSinglePost(postId) {
    return dispatch => {
        axios.get('/posts/single/' + postId).then(resp => {
            dispatch({
                type: GET_SINGLE_POST,
                payload: resp.data[0]
            })
        })
    }
}

function createPost(slug, name, post, dispatch) {
    return new Promise((resolve, reject) => {
        axios
        .post('/posts', {slug, name, post})
        .then(resp => {
            dispatch(getPosts(slug))
            resolve()
        }).catch(e => {
            reject()
        })
    })
}

export function usePosts(slug) {
    const posts = useSelector(appState => appState.postState.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts(slug))
    },[dispatch, slug])

    return posts
}


export function usePost(postId) {
    const post = useSelector(appState => appState.postState.currentPost)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSinglePost(postId))
    },[dispatch, postId])

    return post
}

export function useCreatePost() {
    const dispatch = useDispatch()
    const create = (slug, name, post) => {
        return createPost(slug, name, post, dispatch)
    }

    return create
}