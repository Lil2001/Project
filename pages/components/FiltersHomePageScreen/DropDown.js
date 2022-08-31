import styles from './FiltersHomePageScreen.module.scss'
import React, { useState } from 'react'
let data = [
    {
        id: 1,
        name: 'sdjfiodjfg'
    },
    {
        id: 2,
        name: 'sdjfiodjfgdghtasetf'
    },
    {
        id: 3,
        name: 'dkifidgthsrtjfiodjfg'
    }
]

export default function DropDown({
    value = {},
    onSelect = () => {

    } }) {

    const [change, setChange] = useState(false)
    const onHandleChange = () => {
        setChange(!change)
    }
    const onSelectItem = (val) => {
        setChange(false)
        onSelect(val)
    }

    return (
        <div style={{ width: '300px' }}>
            {
                !!value ?
                    <label
                        for={'rooms'}
                        className={styles.filtersContainer__dropdown}
                        onClick={() => onHandleChange()}
                    >

                        <p>Количество комнат</p>
                        <div className={styles.filtersContainer__dropdown__valueText}>
                            <p>{value?.name}</p>
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L13 1" stroke="#01A743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>

                    </label>
                    :
                    <label
                        for={'rooms'}
                        className={styles.filtersContainer__dropdown}
                        onClick={() => onHandleChange()}
                    >

                        <p>Количество комнат</p>
                        <div className={styles.filtersContainer__dropdown__valueText}>

                            <p>Любая</p>
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L13 1" stroke="#01A743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>

                    </label>
            }

            <div
                className={styles.dropdown}
                style={{ display: change === true ? 'block' : 'none' }}
            >
                <ul>
                    {data.map((val, index) => {
                        return (
                            <li
                                onClick={() => onSelectItem(val)}
                                key={index}
                            >{val.name}</li>
                        )
                    })}



                </ul>

            </div>
        </div>
    )
}