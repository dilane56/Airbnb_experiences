import '../style/Navbar.css'
import logo from '../image/airbnb-logo.png'
export default function Navbar(){
    return(
        <nav>
            <img src={logo} className="nav--logo"/>
        </nav>
        
    )
}