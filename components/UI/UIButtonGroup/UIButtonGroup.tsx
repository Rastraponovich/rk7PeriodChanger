import React, { memo, FC, ReactNode } from "react"
import styles from "./UIButtonGroup.module.css"

interface InputProps {
    children: ReactNode
    justify?: boolean
}

const UIButtonGroup: FC<InputProps> = ({ children, justify = false }) => {
    const classes = justify
        ? `${styles.root} ${styles.justify}`
        : `${styles.root}`

    return <div className={classes}>{children}</div>
}

export default memo(UIButtonGroup)
