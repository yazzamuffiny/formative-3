import { Link } from 'react-router-dom'
import { BiX } from 'react-icons/bi'

const MobileMenu = ({closeMethod}) => {
  return (
    <>
    <div id="closeNavMenu" onClick={closeMethod}>
        <BiX/>
    </div>
    <ul id="mobileMenu">
        <li>
            <Link to="/" onClick={closeMethod}>Home</Link>
        </li>
        <li>
            <Link to="/about" onClick={closeMethod}>About</Link>
        </li>
    </ul>
</>
  )
}

export default MobileMenu

