import React, { memo, FC } from "react"
import Box from "../UI/Box/Box"

import styles from "@/styles/PeriodDetail.module.css"
import UICheckBox from "../UI/UICheckBox/UICheckBox"

interface InputProps {
    useDaysOfWeek?: boolean
    setUseDaysOfWeek?: Function
    useEndDate?: boolean
    setUseEndDate?: Function
    useStartDate?: boolean
    setUseStartDate?: Function
    useTime?: boolean
    setUseTime?: Function
}

const PeriodDetailOptions: FC<InputProps> = ({
    useDaysOfWeek,
    setUseDaysOfWeek,
    setUseEndDate,
    setUseStartDate,
    setUseTime,
    children,
    useEndDate,
    useStartDate,
    useTime,
}) => {
    return (
        <Box>
            <h2 className={styles.title}>Опции</h2>
            <UICheckBox
                cb={setUseDaysOfWeek}
                checked={useDaysOfWeek}
                id="useDaysOfWeek"
                title="Дни недели"
            />
            <UICheckBox
                cb={setUseStartDate}
                checked={useStartDate}
                id="useStartDate"
                title="Начальная дата"
            />
            <UICheckBox
                cb={setUseEndDate}
                checked={useEndDate}
                id="useEndDate"
                title="Конечная дата"
            />

            <UICheckBox
                cb={setUseTime}
                checked={useTime}
                id="useTime"
                title="Время"
            />
        </Box>
    )
}

export default memo(PeriodDetailOptions)
