import logo from '../assets/images/logo.png'

export default function Logo({onClick}) {
    return (
        <img 
            id="logo" 
            src={logo} 
            className="m-5"
            onClick={onClick}
        />
    )
}