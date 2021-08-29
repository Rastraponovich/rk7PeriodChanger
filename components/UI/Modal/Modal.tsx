import React, { FC, ReactNode, useEffect } from "react"
import styles from "@/styles/Modal.module.css"
import { memo } from "react"
import { useStore } from "react-redux"
import { NextThunkDispatch } from "store"

interface InputProps {
    autoClose?: number
    children: ReactNode
    isOpenModal?: boolean
    onClose?: Function
}

const Modal: FC<InputProps> = ({
    children,
    autoClose,
    isOpenModal,
    onClose,
}) => {
    const dispatch = useStore().dispatch as NextThunkDispatch

    const handleClose = () => {
        onClose()
    }

    useEffect(() => {
        if (autoClose && isOpenModal) {
            setTimeout(() => {
                handleClose()
            }, autoClose)
        }
    }, [isOpenModal])

    return (
        <div
            className={styles.wrapper}
            style={{ display: !isOpenModal ? "none" : "inherit" }}
        >
            <div className={styles.fade} onClick={handleClose}></div>
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export default memo(Modal)
