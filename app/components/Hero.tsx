'use client'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.cateringText}>CATERING</span>
          <span className={styles.sindelarText}>ŠINDELÁŘ</span>
        </h1>
      </div>
      <div className={styles.verticalTextLeft}>GASTRONOMIE</div>
      <div className={styles.verticalTextRight}>ELEGANCE</div>
    </section>
  )
}
