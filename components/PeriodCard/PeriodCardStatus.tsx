import React, { memo, FC } from "react"

import styles from "@/styles/PeriodCard.module.css"

interface InputProps {
    useStartDate: boolean
    useEndDate: boolean
    startDate: string
    endDate: string
}

const PeriodCardStatus: FC<InputProps> = ({
    useStartDate,
    startDate,
    endDate,
    useEndDate,
}) => {
    return (
        <>
            {useStartDate && useEndDate ? (
                <div>
                    <h5 className={styles.date}>Начало: {startDate}</h5>

                    <h5 className={styles.date}>Конец: {endDate}</h5>
                </div>
            ) : (
                <h4 className={styles.status}>Текущий</h4>
            )}
        </>
    )
}

export default memo(PeriodCardStatus)
