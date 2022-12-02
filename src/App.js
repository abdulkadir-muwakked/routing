import React, { Suspense } from 'react'
import { Route, Routes } from "react-router-dom";

const Contact = React.lazy(() => import("./pages/contact/Contact")) ;
const About = React.lazy(() => import( "./pages/about/About"))
const Nav = React.lazy(() => import( "./components/nav/Nav"))
const Post = React.lazy(() => import( "./pages/post/Post"))
const Blog = React.lazy(() => import( "./pages/blog/Blog"))
const SignUp = React.lazy(() => import( "./pages/signUp/SignUp"))
const SignIn = React.lazy(() => import( "./pages/signIn/SignIn"))
const SignOut = React.lazy(() => import( "./pages/signOut/SignOut"))
const Tweets = React.lazy(() => import( "./pages/tweets/Tweets"))
const Profile = React.lazy(() => import( "./pages/profile/Profile"))
const Home = React.lazy(() => import("./pages/home/Home"));

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Suspense><Home /></Suspense>} />
        <Route path="/contact" element={<Suspense><Contact /></Suspense>} />
        <Route path="/about" element={<Suspense><About /></Suspense>} />
        <Route path='/blog/:slug' element={<Suspense><Post /></Suspense>} />
        <Route path='/blog' element={<Suspense><Blog /></Suspense>} />
        <Route path="/tweets" element={<Suspense><Tweets /></Suspense>} />
        <Route path='/signup' element={<Suspense><SignUp /></Suspense>} />
        <Route path='/signin' element={<Suspense><SignIn /></Suspense>} />
        <Route path='/signout' element={<Suspense><SignOut /></Suspense>} />
        <Route path='/profile' element={<Suspense><Profile /></Suspense>} />
        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>
    </>
  );
}

export default App;
