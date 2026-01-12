import { useState } from "react";

import './ItemCounter.css';
import styles from './ItemCounter.module.css';

interface ItemCounterProps {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: ItemCounterProps) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleSubstract = () => {
    if (count > 1) setCount(count - 1)
  }

  const isDisabled = () => {
    return count === 1
  }

  // const handleClick = () => {
  //   console.log(`Click en ${name}`)
  // }

  return (
    <section className={styles.itemRow}>
      <span
        className={styles.itemText}
        style={{
          color: count === 1 ? 'red' : 'black'
        }}
      >
        {name}
      </span>
      <button
        onClick={handleAdd}
      >
        +1
      </button>
      <span data-testid="count">{count}</span>
      <button disabled={isDisabled()}
        onClick={handleSubstract}
      >-1</button>
    </section>
  );
};
