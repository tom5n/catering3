'use client'

import styles from './Approach.module.css'

export default function Approach() {
  return (
    <section id="nas-pristup" className={styles.approach}>
      <div className={styles.container}>
        <div className={styles.sectionLabel}>02 / FILOZOFIE</div>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <h2 className={styles.mainTitle}>UMĚNÍ DETAILU</h2>
            <p className={styles.introText}>
              Každé jídlo je pro nás umělecké dílo. Věříme, že skutečná gastronomie spočívá v dokonalosti každého detailu – od výběru nejkvalitnějších surovin až po finální prezentaci na talíři. Naše filozofie je založena na vášni pro řemeslo, respektu k tradici a neustálém hledání dokonalosti.
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureHeader}>
                  <span className={styles.featureNumber}>01</span>
                  <h3 className={styles.featureTitle}>VÝBĚR SUROVIN</h3>
                </div>
                <p className={styles.featureDescription}>
                  Od výběru nejkvalitnějších surovin až po finální prezentaci na talíři. Každá surovina je pečlivě vybírána s ohledem na kvalitu a původ.
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureHeader}>
                  <span className={styles.featureNumber}>02</span>
                  <h3 className={styles.featureTitle}>PRECIZNOST</h3>
                </div>
                <p className={styles.featureDescription}>
                  Skutečná gastronomie spočívá v dokonalosti každého detailu. Věříme, že každý detail má svůj význam a přispívá k celkovému zážitku.
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureHeader}>
                  <span className={styles.featureNumber}>03</span>
                  <h3 className={styles.featureTitle}>VÁŠEŇ PRO ŘEMESLO</h3>
                </div>
                <p className={styles.featureDescription}>
                  Naše filozofie je založena na vášni pro řemeslo, respektu k tradici a neustálém hledání dokonalosti. Každé jídlo je pro nás umělecké dílo.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.imageBlock}>
            <div 
              className={styles.detailImage}
              style={{ '--bg-image': 'url(/CATERING2.webp)' } as React.CSSProperties}
            >
              <div className={styles.cornerTopLeft}></div>
              <div className={styles.cornerBottomRight}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
