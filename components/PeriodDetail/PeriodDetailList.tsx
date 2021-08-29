import React, { memo, FC, ChangeEventHandler } from "react"
import styles from "@/styles/PeriodDetail.module.css"
import { IDays } from "@/interfaces/periodType"
import PeriodDetailListDay from "./PeriodDetailListDay"

interface InputProps {
    memoDays?: IDays[]
    useDaysOfWeek?: boolean
    handleChange?: ChangeEventHandler<HTMLInputElement>
}

const PeriodDetailList: FC<InputProps> = ({
    memoDays,
    useDaysOfWeek,
    handleChange,
}) => {
    return (
        <ul className={styles.list}>
            {memoDays.map((day) => (
                <PeriodDetailListDay
                    key={day.altName}
                    day={day}
                    useDaysOfWeek={useDaysOfWeek}
                    handleChange={handleChange}
                />
            ))}
        </ul>
    )
}

export default memo(PeriodDetailList)
