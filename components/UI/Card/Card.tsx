import React, { FC, memo, MouseEventHandler, ReactNode } from "react"
import styles from "./card.module.css"

interface InputProps {
    children: ReactNode
    onClick?: MouseEventHandler<HTMLDivElement>
    style?: any
}

const Card: FC<InputProps> = ({ children, onClick, style }) => {
    return (
        <div className={styles.card} onClick={onClick} style={style}>
            {children}
        </div>
    )
}

export default memo(Card)
