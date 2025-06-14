import { NavLink } from "react-router-dom";
import css from './Header.module.css';
import logo from '../icons/logo.svg';

const Header = () => {
  return (
    <div className={css.header}>
          <NavLink to='/' className={css.logo}>
            <img src={logo} alt="Logo" width="100" height="100" />
          </NavLink>
      <div>
          <NavLink to='/' className={css.link}>Domů</NavLink>
              <NavLink to='/aboutus' className={css.link}>O nás</NavLink>
              <NavLink to='/contacts' className={css.link}>Služby</NavLink>
              <NavLink to='/gallery' className={css.link}>Galerie</NavLink>
              <NavLink to='/contacts' className={css.link}>Spojít se s námi</NavLink>
      </div>
    </div>
  )
}

export default Header