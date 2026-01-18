'use client'

import styles from './Services.module.css'

const services = [
  {
    title: 'FIREMNÍ AKCE',
    image: '/firemni.webp',
    description: 'Profesionální catering pro firemní setkání, konference a teambuildingy. Elegantní servis a vynikající gastronomie. Zajišťujeme kompletní gastronomické služby od snídaní po večerní recepce. Flexibilní řešení pro každou firemní akci.',
    textPosition: 'left',
  },
  {
    title: 'SVATBY',
    image: '/svatby.webp',
    description: 'Nezapomenutelné svatební hostiny s individuálním přístupem. Vytvoříme menu na míru vašemu velkému dni. Od intimních obřadů po velkolepé recepce. Elegantní servis a vynikající gastronomie, která oslaví vaši lásku.',
    textPosition: 'right',
  },
  {
    title: 'SOUKROMÉ OSLAVY',
    image: '/oslavy.webp',
    description: 'Rodinné oslavy, narozeniny, výročí. Intimní atmosféra s prvotřídní kuchyní a pozorností k detailu. Vytvoříme nezapomenutelný zážitek pro vás a vaše blízké. Individuální přístup a menu šité na míru.',
    textPosition: 'left',
  },
]

export default function Services() {
  return (
    <section id="sluzby" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sectionLabel}>01 / NAŠE SLUŽBY</div>
        <div className={styles.list}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${styles.serviceItem} ${styles[service.textPosition]}`}
            >
              <div className={styles.serviceText}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
              <div 
                className={styles.serviceImage}
                style={{ '--bg-image': `url(${service.image})` } as React.CSSProperties}
              >
                <div className={styles.cornerTopLeft}></div>
                <div className={styles.cornerBottomRight}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
