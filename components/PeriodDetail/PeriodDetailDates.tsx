import React, { memo, FC } from "react"
import Box from "../UI/Box/Box"
import styles from "@/styles/PeriodDetail.module.css"

interface InputProps {
    useStartDate?: boolean
    startDate?: string
    setStartDate?: Function
    useEndDate?: boolean
    endDate?: string
    setEndDate?: Function
}

const PeriodDetailDates: FC<InputProps> = ({
    useStartDate,
    startDate,
    setStartDate,
    useEndDate,
    endDate,
    setEndDate,
}) => {
    return (
        <Box disabled={!useStartDate && !useEndDate}>
            <h2 className={styles.title}>Даты</h2>
            <span>Начало</span>
            <input
                className={styles.input}
                disabled={!useStartDate}
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            ></input>
            <span>Конец</span>
            <input
                className={styles.input}
                type="date"
                disabled={!useEndDate}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            ></input>
        </Box>
    )
}

export default memo(PeriodDetailDates)
