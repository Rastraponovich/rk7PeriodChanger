import { IPeriod, ITPeriodDetail } from "@/interfaces/periodType"
import React, { memo, FC, useState } from "react"
import { useCallback } from "react"
import { useStore } from "react-redux"
import { NextThunkDispatch } from "store"
import PeriodDetail from "../PeriodDetail/PeriodDetail"
import CardContent from "../UI/Card/CardContent"
import CardTitle from "../UI/Card/CardTitle"
import Container from "../UI/Container/Container"

interface InputProps {
    period: IPeriod
}

const Period: FC<InputProps> = ({ period }) => {
    const { Name, RIChildItems } = period

    const [periodDetails, setPeriodDetails] = useState<ITPeriodDetail[]>(
        RIChildItems[0].TPeriodDetail
    )

    const handleChangePeriodDetais = useCallback(
        (data: ITPeriodDetail) => {
            const { GUIDString, ...newData } = data

            const currentPeriod = periodDetails.find(
                (item) => item.GUIDString === GUIDString
            )

            if (currentPeriod) {
                const newDetails = periodDetails.map((item) => {
                    if (item.GUIDString !== GUIDString) {
                        return item
                    } else {
                        return { ...item, ...newData }
                    }
                })

                setPeriodDetails(newDetails)
            }
        },
        [periodDetails]
    )

    return (
        <Container>
            <CardTitle title={Name} />
            <CardContent>
                {periodDetails.map((detail) => (
                    <PeriodDetail
                        periodDetail={detail}
                        key={detail.GUIDString}
                        onChange={handleChangePeriodDetais}
                    />
                ))}
            </CardContent>
        </Container>
    )
}

export default memo(Period)
