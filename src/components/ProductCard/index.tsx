import styles from './ProductCard.module.scss'

import sofa from './../../assets/sofa.png'
import sofaAnimation from './../../assets/sofa-animation.gif'
import closeIcon from './../../assets/close.svg'
import rotateIcon from './../../assets/rotate-icon.svg'

import { useState } from 'react'

export function ProductCard() {
  const [interactionMode, setInteractionMode] = useState<boolean>(false)

  function handleInteractionModeToggle() {
    setInteractionMode(!interactionMode)
  }

  return (
    <div className={styles.productWrapper}>
      <div className={styles.cover}>
        {interactionMode ? (
          <img src={sofaAnimation} alt="" />
        ) : (
          <img src={sofa} alt="" />
        )}

        <div
          onClick={handleInteractionModeToggle}
          className={styles.coverActionIcon}
        >
          {interactionMode ? (
            <img width={16} height={16} src={closeIcon} alt="" />
          ) : (
            <img src={rotateIcon} alt="" />
          )}
        </div>
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.detailsWrapper}>
          <span className={styles.productSku}>CÓDIGO: 42404</span>
          <strong>Sofá Margot II - Rosé</strong>
          <span className={styles.price}>R$ 4.000,00</span>
        </div>

        <button>Adicionar à cesta</button>
      </div>
    </div>
  )
}
