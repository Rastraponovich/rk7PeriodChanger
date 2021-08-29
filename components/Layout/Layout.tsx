import Head from "next/head"
import React, { FC, memo, useState } from "react"

import styles from "@/styles/Home.module.css"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import { useTypeSelector } from "@/hooks/useTypeSelector"

interface InputProps {
    children: any
    title?: string
}
const Layout: FC<InputProps> = ({ children, title }) => {
    const { status } = useTypeSelector((store) => store.statusStore)
    const [noFooter] = useState(true)

    return (
        <>
            <Head>
                <title>{title ? title : "WorkerChanger"}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header status={status} title={title} />
            <main className={styles.main}>{children}</main>
            <div className="bulk"></div>
            {noFooter ? null : <Footer status={status} />}
        </>
    )
}

export default memo(Layout)
