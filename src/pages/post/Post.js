import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostsList from "../../components/postsList/PostsList"

const Post = () => {
    const { slug } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`https://www.wp-course.site/wp-json/youthink/post?slug=${slug}`)
            .then((response) => {
                return response.json().then((json) => {
                    setPost(json.data)
                })
            })
            .catch()
    }, [slug])

    return (
        <div>
            {post.title}
            <img src={post.thumbnail} />
            <h3>You may also want to read</h3>
            <PostsList />
        </div>
    )
}

export default Post