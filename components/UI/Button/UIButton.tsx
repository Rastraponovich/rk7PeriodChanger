import { TButtonColor, TButtonSize } from "@/interfaces/types"
import React, { memo, FC } from "react"
import styles from "./UIButton.module.css"
interface InputProps {
    onClick?: () => void
    title: string
    color: TButtonColor
    size?: TButtonSize
}

const UIButton: FC<InputProps> = ({
    onClick,
    title,
    color = "default",
    size = "medium",
}) => {
    return (
        <button
            onClick={onClick}
            className={styles.button + " " + styles[color] + " " + styles[size]}
        >
            <span className={styles.title}>{title}</span>
        </button>
    )
}

export default memo(UIButton)
