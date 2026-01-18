'use client'

import styles from './Footer.module.css'
import Image from 'next/image'
import { useLenis } from '../contexts/LenisContext'

export default function Footer() {
  const lenis = useLenis()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (lenis) {
      const element = document.querySelector(href) as HTMLElement | null
      if (element) {
        lenis.scrollTo(element, {
          offset: -80,
          duration: 1.5,
        })
      }
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <Image
                src="/logo_sindelar_bile.png"
                alt="Logo"
                width={120}
                height={40}
                className={styles.logoImage}
              />
            </div>
            <p className={styles.description}>
              Prvotřídní cateringové služby s důrazem na kvalitu, preciznost a nezapomenutelný gastronomický zážitek.
            </p>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Navigace</h3>
            <nav className={styles.nav}>
              <a 
                href="#sluzby" 
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, '#sluzby')}
              >
                Služby
              </a>
              <a 
                href="#nas-pristup" 
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, '#nas-pristup')}
              >
                Náš přístup
              </a>
              <a 
                href="#galerie" 
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, '#galerie')}
              >
                Galerie
              </a>
              <a 
                href="#kontakt" 
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, '#kontakt')}
              >
                Kontakt
              </a>
            </nav>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Kontakt</h3>
            <div className={styles.contactInfo}>
              <a href="mailto:info@cateringsindelar.cz" className={styles.contactLink}>
                info@cateringsindelar.cz
              </a>
              <a href="tel:+420123456789" className={styles.contactLink}>
                +420 123 456 789
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Catering Vladimír Šindelář. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  )
}
