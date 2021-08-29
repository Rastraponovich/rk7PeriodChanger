import { IDays } from "@/interfaces/periodType"
import React, { memo, FC, ChangeEventHandler } from "react"
import styles from "@/styles/PeriodDetail.module.css"
import UICheckBox from "../UI/UICheckBox/UICheckBox"
interface InputProps {
    day?: IDays
    useDaysOfWeek?: boolean
    handleChange?: ChangeEventHandler<HTMLInputElement>
}

const PeriodDetailListDay: FC<InputProps> = ({
    day,
    useDaysOfWeek,
    handleChange,
}) => {
    const { altName, name, value } = day
    return (
        <UICheckBox
            checked={value}
            title={day.name}
            cb={handleChange}
            id={altName}
            value={altName}
            disabled={!useDaysOfWeek}
        />
    )
}

export default memo(PeriodDetailListDay)
