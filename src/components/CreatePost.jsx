import { useState, useEffect } from "react"
import { usePosts } from "./PostContext"

const INITIAL_POST = {
    title: '',
    content: '',
}

export default function CreatePost() {
    const { posts, setPosts } = usePosts()
    const [post, setPost] = useState(() => {
        const savedPost = localStorage.getItem('wipPost')
        return savedPost ? JSON.parse(savedPost) : INITIAL_POST
    })

    useEffect(() => {
        localStorage.setItem('wipPost', JSON.stringify(post))
    }, [post])

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost({
            ...post,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPosts([...posts, post])
        setPost(INITIAL_POST)
        localStorage.removeItem('wipPost')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={post.title}
                />
            </label>
            <br />
            <label>
                Content:
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={post.content}
                    cols={50}
                    rows={5}
                />
            </label>
            <br />
            <input type="submit" value="Post!" />
        </form>
    )
}
