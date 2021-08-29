import React, { memo, FC, ReactNode } from "react"

import styles from "./box.module.css"

interface InputProps {
    children: ReactNode
    disabled?: boolean
}

const Box: FC<InputProps> = ({ children, disabled = false }) => {
    const classes = disabled
        ? `${styles.root} ${styles.disabled}`
        : `${styles.root}`
    return <div className={classes}>{children}</div>
}

export default memo(Box)
