import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../contexts/AuthContext'

const Profile = () => {
    const { user, token } = useContext(AuthContext)
    const [userData, setUserData] = useState(user)
    const updateProfile = async (e) => {
        e.preventDefault()
        const newData = new FormData(e.target)
        const response = await fetch(`${process.env.REACT_APP_API}/users/me`, {
            method: 'put',
            body: newData,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <form onSubmit={updateProfile} method="put">
                        <label htmlFor="name" className="mb-1">Name</label>
                        <input
                            id="name"
                            type='text'
                            name="name"
                            className="form-control mb-3"
                            value={userData.name}
                            onChange={(e) => {
                                setUserData({
                                    ...userData,
                                    name: e.target.value
                                })
                            }} />

                        <label htmlFor="email" className="mb-1">Email Address</label>
                        <input
                            id="email"
                            type='text'
                            name="email"
                            className="form-control mb-3"
                            value={userData.email}
                            onChange={(e) => {
                                setUserData({
                                    ...userData,
                                    email: e.target.value
                                })
                            }} />


                        <label htmlFor="password" className="mb-1">Password</label>
                        <input
                            name="password"
                            id="password"
                            type='password'
                            className="form-control mb-3" />

                        <input type='submit' value='Update Information' className='btn btn-primary' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile