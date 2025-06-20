import css from './Header.module.css';
import logo from '../icons/logo.svg';

const Header = () => {
  return (
    <div className={css.header}>
          <a href="" className={css.logo}>
            <img src={logo} alt="Logo" width="100" height="100" />
          </a>
                  <a href="" className={css.link}>Domů</a>

                  <a href="#aboutus" className={css.link}>O nás</a>

                  <a href="#services" className={css.link}>Služby</a>

                  <a href="#gallery" className={css.link}>Galerie</a>

                  <a href="#contacts" className={css.link}>Spojít se s námi</a>

    </div>
  )
}

export default Header