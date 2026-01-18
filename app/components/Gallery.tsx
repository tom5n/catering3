'use client'

import styles from './Gallery.module.css'

const images = [
  '/gallery1.webp',
  '/gallery2.webp',
  '/gallery3.webp',
  '/gallery4.webp',
  '/gallery5.webp',
  '/gallery6.webp',
]

export default function Gallery() {
  return (
    <section id="galerie" className={styles.gallery}>
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>03 / GALERIE</div>
        </div>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.imageItem}
              style={{ '--bg-image': `url(${image})` } as React.CSSProperties}
            >
              <div className={styles.cornerTopLeft}></div>
              <div className={styles.cornerBottomRight}></div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.buttonWrapper}>
            <button className={styles.moreButton}>Zobrazit více</button>
          </div>
        </div>
      </div>
    </section>
  )
}
