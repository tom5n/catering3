'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import { useLenis } from '../contexts/LenisContext'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    if (lenis) {
      const element = document.querySelector(href)
      if (element) {
        lenis.scrollTo(element, {
          offset: -80,
          duration: 1.5,
        })
      }
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header 
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      >
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image
              src="/logo_sindelar_bile.png"
              alt="Logo"
              width={120}
              height={40}
              className={styles.logoImage}
            />
          </div>
          <nav className={styles.nav}>
            <a 
              href="#sluzby" 
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, '#sluzby')}
            >
              SLUŽBY
            </a>
            <a 
              href="#nas-pristup" 
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, '#nas-pristup')}
            >
              NÁŠ PŘÍSTUP
            </a>
            <a 
              href="#galerie" 
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, '#galerie')}
            >
              GALERIE
            </a>
          </nav>
          <a 
            href="#kontakt" 
            className={styles.ctaButton}
            onClick={(e) => handleNavClick(e, '#kontakt')}
          >
            KONTAKT
          </a>
          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </header>
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <a 
            href="#sluzby" 
            className={styles.mobileNavLink}
            onClick={(e) => handleNavClick(e, '#sluzby')}
          >
            SLUŽBY
          </a>
          <a 
            href="#nas-pristup" 
            className={styles.mobileNavLink}
            onClick={(e) => handleNavClick(e, '#nas-pristup')}
          >
            NÁŠ PŘÍSTUP
          </a>
          <a 
            href="#galerie" 
            className={styles.mobileNavLink}
            onClick={(e) => handleNavClick(e, '#galerie')}
          >
            GALERIE
          </a>
          <a 
            href="#kontakt" 
            className={styles.mobileNavLink}
            onClick={(e) => handleNavClick(e, '#kontakt')}
          >
            KONTAKT
          </a>
        </nav>
      </div>
    </>
  )
}
