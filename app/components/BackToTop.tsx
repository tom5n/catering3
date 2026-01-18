'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './BackToTop.module.css'
import { useLenis } from '../contexts/LenisContext'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.5,
      })
    }
  }

  return (
    <button
      className={`${styles.backToTop} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Zpět nahoru"
    >
      <Image
        src="/backtotop.svg"
        alt="Zpět nahoru"
        width={24}
        height={24}
        className={styles.icon}
      />
    </button>
  )
}
