import { PostProvider } from './components/PostContext'
import CreatePost from './components/CreatePost'
import Header from './components/Header'
import Posts from './components/Posts'
import './App.css'

const APP_NAME = 'Next-gen Social Media'

function App() {
    return (
        <PostProvider>
            <Header appName={APP_NAME} />
            <CreatePost />
            <Posts />
        </PostProvider>
    )
}

export { App }
