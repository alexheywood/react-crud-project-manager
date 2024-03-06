import { Link } from "react-router-dom"

export default function NotFound() {


    return (

        <div className="container text-center mt-5">
            <h1 className="display-4">404 - Page Not Found</h1>
            <p className="lead">Oops! The page you're looking for doesn't exist.</p>
            <p>Let's go back to the <Link to="/">home page</Link>.</p>
        </div>
    )
}