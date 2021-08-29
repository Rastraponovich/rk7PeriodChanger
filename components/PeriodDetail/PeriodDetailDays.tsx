import { IDays } from "@/interfaces/periodType"
import React, { memo, FC, ChangeEventHandler } from "react"
import Box from "../UI/Box/Box"
import styles from "@/styles/PeriodDetail.module.css"
import PeriodDetailList from "./PeriodDetailList"

interface InputProps {
    memoDays?: IDays[]
    useDaysOfWeek?: boolean
    handleChange?: ChangeEventHandler<HTMLInputElement>
}

const PeriodDetailDays: FC<InputProps> = ({
    memoDays,
    useDaysOfWeek,
    handleChange,
}) => {
    return (
        <Box disabled={!useDaysOfWeek}>
            <h2 className={styles.title}>Дни</h2>
            <PeriodDetailList
                memoDays={memoDays}
                useDaysOfWeek={useDaysOfWeek}
                handleChange={handleChange}
            />
        </Box>
    )
}

export default memo(PeriodDetailDays)
