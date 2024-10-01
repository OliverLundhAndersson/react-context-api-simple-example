import { usePosts } from "./PostContext"

export default function Posts() {
    const { posts } = usePosts()

    return (
        <>
            {posts.map((post, index) => (
                <div className="card" key={index}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </>
    )
}
