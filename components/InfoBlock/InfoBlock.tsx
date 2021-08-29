import React, { FC, memo } from "react"
import styles from "@/styles/InfoBlock.module.css"

interface InputProps {}
const InfoBlock: FC<InputProps> = () => {
    return (
        <section>
            <ul className={styles.info}>
                <li>Выберите Бизнес ланч</li>
                <li>После выбора установите параметры</li>
                <li>после сохраните, ланч применится</li>
            </ul>
        </section>
    )
}

export default memo(InfoBlock)
