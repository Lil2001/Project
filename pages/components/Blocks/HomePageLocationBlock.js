import TextBlock from "./TextBlock";
import styles from './LocationBlock.module.scss'
import Image from 'next/image'
import ImageBlockText from "./ImageBlockText";



export default function HomePageLocationBlock() {
    return (
        <div className={styles.locationBlock}>
            <div className={styles.locationBlock__firstDiv}>
                <TextBlock
                    header={'Расположение'}
                    textFirst={'Микрорайон М - это комфортное место для жизни: тут есть зоны спорта и отдыха, детские площадки, видеонаблюдение, строиться школа, детский садик.'}
                    textSecond={'В шаговой доступности всё необходимое для удобного и комфортного проживания: детский сад, школа, гипермаркеты, аптеки, парикмахерские, кафе, пиццерии и прочее.'}
                />
                <div className={styles.locationBlock__firstDiv__imageDiv}>
                    <p>Концепция «город в городе»</p>
                    <Image
                        className={styles.locationBlock__firstDiv__imageDiv_imgfirst}
                        src='/../public/images/img1021.png'
                        width='360px'
                        height='300px'
                        layout='fixed'
                    />

                </div>

            </div>
            <div className={styles.locationBlock__firstDiv}>
                <div className={styles.locationBlock__firstDiv__locationName}>
                    <p>Микрорайон «М»</p>
                    <p>от 1,5 млн ₽</p>
                </div>
                <div className={styles.locationBlock__firstDiv__photoDiv}></div>
                <div className={styles.locationBlock__firstDiv__imageSizesBlock}>
                    <ImageBlockText/>
                    <ImageBlockText/>
                </div>
            </div>
        </div>
    )
}