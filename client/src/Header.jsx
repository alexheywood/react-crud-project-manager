import image from '../public/profile.jpg'
export default function Header() {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light p-4 px-md-5">
            <a className="navbar-brand" href="/">Granicus Checklist</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/create">Create New</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/faq">FAQ</a>
                            <a className="dropdown-item" href="/help">Technical Help</a>
                        </div>
                    </li>
                </ul>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 mx-0" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0 mx-sm-2" type="submit">Search</button>
                </form>

                <div className="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill">
                    <span className="mx-2">Alex Heywood</span><img src={image} height="50px" className="rounded-circle" />
                </div>
            </div>
        </nav>
    )
}