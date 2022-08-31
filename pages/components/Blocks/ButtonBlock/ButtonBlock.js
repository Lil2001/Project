import styles from './ButtonBlock.module.scss'

export default function ButtonBlock() {
    return (
        <div className={styles.buttonBlock}>
            <div>
                <span>Очистить фильтр</span>
                <button>Подобрать варианты</button>
            </div>

        </div>
    )
}