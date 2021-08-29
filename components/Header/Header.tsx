import React, { FC, memo, useContext } from "react"
import styles from "@/styles/Header.module.css"
import ThingsContext from "../App/ThingsContext"
import { IStatus } from "interfaces/types"
import Link from "next/link"
interface InputProps {
    status: IStatus
    title?: string
}

const Header: FC<InputProps> = ({ status, title }) => {
    const context = useContext(ThingsContext)
    return (
        <header style={context.theme.header}>
            <Link href="/" passHref>
                <span className={styles.title}>
                    {title ? title : "Настройка кассиров"}
                </span>
            </Link>
            <div className="bulk"></div>
            <span>Статус сервера: {status.Status}</span>
        </header>
    )
}

export default memo(Header)
