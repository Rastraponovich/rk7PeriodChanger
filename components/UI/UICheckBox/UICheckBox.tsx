import React, { memo, FC, ChangeEvent } from "react"
import styles from "./uicheckbox.module.css"

interface InputProps {
    id: string
    title: string
    cb: Function
    checked: boolean
    value?: string
    disabled?: boolean
}

const UICheckBox: FC<InputProps> = ({
    id,
    title,
    cb,
    checked,
    value,
    disabled,
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (value) {
            cb(e)
        } else {
            cb(!checked)
        }
    }
    const classes = checked
        ? `${styles.text}`
        : `${styles.text} ${styles.textUnselected}`
    return (
        <div className={styles.root}>
            <input
                className={styles.customCheckbox}
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                id={id}
                name={id}
                value={value}
                disabled={disabled}
            />

            <label htmlFor={id}>
                <span className={classes}>{title}</span>
            </label>
        </div>
    )
}

export default memo(UICheckBox)
