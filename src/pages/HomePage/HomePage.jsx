import css from './HomePage.module.css'
    
const HomePage = () => {
  return (
      <div className={css.hero}>
          <h1 className={css.generalTitle}>
              Rychlá a kvalitní práce za nejlepší ceny na trhu.</h1>
          <ul>
              <li>Hrubá stavba RD od 11 999 Kč/m²</li>
              <li>Dům na klíč od 31 999 Kč/m²</li>
          </ul>
          <a className={css.linknabidka} href="http://localhost:5173/services">Získat nezávaznou nabídku</a>
    </div>
  )
}

export default HomePage