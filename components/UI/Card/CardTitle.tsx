import React, { memo, FC } from "react"
import { ReactNode } from "react"
import styles from "./card.module.css"
interface InputProps {
    children?: ReactNode
    title: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>
}

const CardTitle: FC<InputProps> = ({ title, onClick }) => {
    return (
        <div className={styles.header}>
            <h3>{title}</h3>
            {onClick ? (
                <button className={styles.button} onClick={onClick}>
                    Обновить
                </button>
            ) : null}
        </div>
    )
}

export default memo(CardTitle)
