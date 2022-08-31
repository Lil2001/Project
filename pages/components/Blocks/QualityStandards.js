import TextBlock from "./TextBlock";
import Image from 'next/image'
import styles from './QualityStandard.module.scss'

export default function QualityStandards() {
    return (
        <div className={styles.qualityStandardBlock}>
            <div style={{ width: '40%',marginBottom:'20px' }}  >
                <TextBlock
                    header={'Наши стандарты качества'}
                    textFirst={`Продуманный выбор местоположения
                Высокое качество и скорость строительства 
                    Наличие собственной производственной базы:
                механизмов, оборудования, транспорта, склада.
                Использование высококачественных материалов
                в строительстве
               `}
                    textSecond={` Собственная Управляющая компания
                 Бесшумные лифты Otis
                    Автономное отопление
                    Централизованная система водоснабжения от артезианских скважин поставляет
                    чистую воду по сниженному тарифу
                    Основное и резервное энергоснабжение обеспечивают бесперебойное и независимое
                    электропитание для жителей микрорайона.`}
                />
            </div>
            <div className={styles.qualityStandardBlock__firstDiv}>
                <Image
                    src='/../public/images/Video.png'
                    width='590px'
                    height='300px'
                    layout='fixed'
                />
                <div className={styles.qualityStandardBlock__firstDiv__textBlock}>
                    <div className={styles.qualityStandardBlock__firstDiv__textBlock__green}>
                        <h2>18+</h2>
                        <p>ЛЕТ НА РЫНКЕ</p>
                        <span>Более 18 лет успешной работы на рынке недвижимости.</span>
                    </div>
                    <div className={styles.qualityStandardBlock__firstDiv__textBlock__green}>
                        <h2>5000+</h2>
                        <p>НОВОСЕЛОВ</p>
                        <span>Более 5000 новоселов, живут в своих новых квартирах.</span>
                    </div>
                    <div className={styles.qualityStandardBlock__firstDiv__textBlock__green}>
                        <h2>30+</h2>
                        <p>ЖИЛЫХ ДОМА</p>
                        <span>Мы успешно возвели более 30 обьектов.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}