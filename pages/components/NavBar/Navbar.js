import React from "react"
import styles from './NavbarScreen.module.scss'
import Image from 'next/image'
import Link from 'next/link'



export default function NavBarScreen() {
    return (
        <div className={styles.container}>
            <div className={styles.container__navbar}>
                <div
                className={styles.container__navbar__imgDiv}
                >
                    <Image
                        className={styles.container__navbar_img}
                        alt="Picture of the author"
                        width={88}
                        height={30}
                        src='/../public/images/logo.png'
                    />
                    <p

                    >Крупнейший застройщик <br /> на рынке жилья г.Миасс</p>
                </div>

                <div
                className={styles.container__navbar__linksDiv}
                >
                    <Link href=''>
                        <a>Ипотека</a>
                    </Link>
                    <Link href=''>
                        <a>Новости</a>
                    </Link>
                    <Link href=''>
                        <a>О компании</a>
                    </Link>
                    <Link href='/'>
                        <a>Контакты</a>
                    </Link>
                    <Link href=''>
                        <a>Контакты</a>
                    </Link>
                </div>

                <p>+7 (3513) 29-88-35</p>
            </div>
        </div>
    )
}