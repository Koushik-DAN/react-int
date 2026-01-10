import { NavLink } from "react-router"

const Header = () => {
return <>
<nav className="navbar">
    <h2>Taxplus Accountants</h2>
    <ul>
      <NavLink to={'/'} className={({isActive})=> isActive ? "active" : ""}><li>Home</li></NavLink>


     <NavLink to={'/todos'}> <li>Todos</li></NavLink>
     <NavLink to={'/increment'}> <li>Increment</li></NavLink>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>

</>
}

export default Header