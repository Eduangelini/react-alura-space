import React from 'react'
import styles from './Menu.module.scss'
import home from '../../assets/icones/home-ativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import supreendaMe from '../../assets/icones/surpreenda-me-inativo.png'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt="" />
          <a href="/">Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVistas} alt="" />
          <a href="/">Mais Vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidas} alt="" />
          <a href="/">Mais Curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt="" />
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={supreendaMe} alt="" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}
