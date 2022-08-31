import DropDown from "../FiltersHomePageScreen/DropDown";
import styles from './MortgageScreen.module.scss'
import React, { useState } from "react";

export default function MortgageHomePageBlock() {
  const [selectItemSecond, setSelectItemSecond] = useState(null)
  const [selectItemFirst, setSelectItemFirst] = useState(null)
  const onSelectFirst = (item) => {
    setSelectItemFirst(item)
  }

  const onSelectSecond = (item) => {
    setSelectItemSecond(item)
  }

  return (
    <div className={styles.mortgageBlock}>
      <div className={styles.mortgageBlock__firstDiv}>
        <h2>Рассчитайте ипотеку</h2>
        <DropDown
          value={selectItemFirst}
          onSelect={onSelectFirst}
        />
        <DropDown
          value={selectItemSecond}
          onSelect={onSelectSecond}
        />
        <div className={styles.mortgageBlock__firstDiv__rangeDiv} >
          <p>Срок кредита</p>
          <div style={{ position: 'relative' }}>
            <input type="range" id="vol" name="vol" min="0" max="20"></input>
            <span className={styles.mortgageBlock__firstDiv__rangeDiv__textSpan1} >1 год</span>
            <span className={styles.mortgageBlock__firstDiv__rangeDiv__textSpan2}>20 лет</span>
          </div>
          <p className={styles.mortgageBlock__firstDiv__rangeDiv__text}>10 лет</p>
        </div>
        <div className={styles.mortgageBlock__firstDiv__priceDiv}>
          <p>Сумма кредита</p>
          <span>1 140 000 ₽</span>
        </div>
        <button className={styles.mortgageBlock__firstDiv__button}>
          <span>Рассчитать</span>
        </button>
        <div className={styles.mortgageBlock__firstDiv__buttonDiv}>
          <span>*В связи с изменениями кредитной политики банков условия по ипотеке могут быть скорректированы. За подробной информацией просим обращаться в отдел продаж «ИБК» по телефону +7 (3513) 29-88-35.</span>
        </div>
      </div>
      <div className={styles.mortgageBlock__secondDiv}>
        <div className={styles.mortgageBlock__secondDiv__block}>

        </div>
      </div>
    </div>
  )
}