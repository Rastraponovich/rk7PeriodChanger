import { NextPage } from "next"
import React from "react"
import Head from "next/head"
import styles from "@/styles/401.module.css"
import { useTypeSelector } from "@/hooks/useTypeSelector"

const Page401: NextPage = () => {
    const { error, message } = useTypeSelector((store) => store.periodStore)
    return (
        <div className={styles.container}>
            <video
                src="/videoplayback.mp4"
                height="100%"
                width="100%"
                muted
                autoPlay
                loop
            />
            <Head>
                <title>{message}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.content}>
                <h1 className={styles.title}>Ошибка 401</h1>
                <h2 className={styles.subtitle}>{message}</h2>
                <p className={styles.text}>Свяжитесь +79182086821</p>
            </div>
        </div>
    )
}

export default Page401
