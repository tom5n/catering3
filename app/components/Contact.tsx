'use client'

import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="kontakt" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionLabel}>04 / KONTAKT</div>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p className={styles.description}>
              Máte představu o dokonalé akci? Kontaktujte nás a společně vytvoříme nezapomenutelný gastronomický zážitek na míru vašim představám.
            </p>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <h3 className={styles.infoLabel}>Email</h3>
                <a href="mailto:info@cateringsindelar.cz" className={styles.infoValue}>
                  info@cateringsindelar.cz
                </a>
              </div>
              <div className={styles.infoItem}>
                <h3 className={styles.infoLabel}>Telefon</h3>
                <a href="tel:+420123456789" className={styles.infoValue}>
                  +420 123 456 789
                </a>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Jméno</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Zpráva</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows={5}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Odeslat poptávku
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
