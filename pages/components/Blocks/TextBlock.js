import styles from './TextBlock.module.scss'

export default function TextBlock({textFirst, textSecond,header}) {
    return (
        <div className={styles.textBlock}>
            <h2>{header}</h2>
            <p>{textFirst} </p>
            <p>{textSecond}</p>
        </div>
    )
}