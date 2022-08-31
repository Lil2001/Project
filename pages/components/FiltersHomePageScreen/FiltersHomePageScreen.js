import { useState } from 'react'
import DropDown from './DropDown'
import styles from './FiltersHomePageScreen.module.scss'


export default function FiltersHomePageScreen() {

    const [selectItemFirst, setSelectItemFirst] = useState(null)
    const [selectItemSecond, setSelectItemSecond] = useState(null)
    const [selectItemThrid, setSelectItemThrid] = useState(null)
    const [change, setChange] = useState(false)
    const onHandleChange = () => {
        setChange(!change)
    }

    const onSelectFirst = (item) => {
        setSelectItemFirst(item)
    }

    const onSelectSecond = (item) => {
        setSelectItemSecond(item)
    }
    const onSelectThird = (item) => {
        setSelectItemThrid(item)
    }

    return (
        <div className={styles.filtersContainer} >
            <DropDown
                value={selectItemFirst}
                onSelect={onSelectFirst}
            />
            <DropDown
                value={selectItemSecond}
                onSelect={onSelectSecond}
            />
            <DropDown
                value={selectItemThrid}
                onSelect={onSelectThird}
            />
            <button className={styles.filtersContainer__button}>
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.31824 5.09091C9.31824 8.27273 5.22733 11 5.22733 11C5.22733 11 1.13642 8.27273 1.13642 5.09091C1.13642 4.00593 1.56742 2.96539 2.33462 2.1982C3.10181 1.43101 4.14235 1 5.22733 1C6.3123 1 7.35284 1.43101 8.12004 2.1982C8.88723 2.96539 9.31824 4.00593 9.31824 5.09091Z" stroke="#1A75FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.22751 6.45455C5.98063 6.45455 6.59115 5.84403 6.59115 5.09092C6.59115 4.3378 5.98063 3.72728 5.22751 3.72728C4.4744 3.72728 3.86388 4.3378 3.86388 5.09092C3.86388 5.84403 4.4744 6.45455 5.22751 6.45455Z" stroke="#1A75FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>На карте</span>
            </button>

        </div>
    )
} 