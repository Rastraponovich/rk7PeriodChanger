import React, { memo, FC } from "react"
import { ReactNode } from "react"
import classes from "./container.module.css"

interface InputProps {
    children: ReactNode
}

const Container: FC<InputProps> = ({ children }) => {
    return <section className={classes.root}>{children}</section>
}

export default memo(Container)
