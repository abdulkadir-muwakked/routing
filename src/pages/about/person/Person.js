import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Person = () => {
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
    }, [])

    return (
        <div>
            {post.title}
        </div>
    )
}

export default Person