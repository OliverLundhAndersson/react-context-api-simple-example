import { createContext, useContext, useState } from "react"

const PostContext = createContext()

export function PostProvider({ children }) {
    const [posts, setPosts] = useState([
        { title: 'Hello, world!', content: 'React context is great :)' },
        { title: 'But...', content: 'It\'s a little confusing at first!' },
    ])

    return (
        <PostContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostContext.Provider>
    )
}

export function usePosts() {
    return useContext(PostContext)
}
