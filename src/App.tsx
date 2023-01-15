import { ProductCard } from './components/ProductCard'

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div className={styles.wrapper}>
      <ProductCard />
    </div>
  )
}
