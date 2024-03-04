import logo from '../public/logo.jpg'

export default function Footer() {

    return (
        <footer className="bg-light d-flex py-3 py-4 border-top text-center justify-content-center">
            <p className="">developed by
                <img className="rounded mx-3" alt="Vale of Glamorgan Council" src={logo} height="30px"></img>
                Vale of Glamorgan Council</p>
        </footer>
    )
}