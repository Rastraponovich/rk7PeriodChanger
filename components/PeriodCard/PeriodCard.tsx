import { useRouter } from "next/router"
import React, { memo, FC } from "react"
import { useStore } from "react-redux"

import { NextThunkDispatch } from "store"
import { getOnePeriodAction } from "store/actions/periodActions"

import { IPeriod } from "@/interfaces/periodType"

import Card from "../UI/Card/Card"
import CardActions from "../UI/Card/CardActions"
import CardTitle from "../UI/Card/CardTitle"
import UIButton from "../UI/Button/UIButton"
import { useCallback } from "react"
import { useConvertDate } from "@/hooks/useConvertDate"
import { useState } from "react"
import PeriodCardStatus from "./PeriodCardStatus"

interface InputProps {
    onClick?: (guid?: string) => void
    period: IPeriod
    loading?: boolean
}

const PeriodCard: FC<InputProps> = ({ onClick, period, loading }) => {
    const { Name, GUIDString, RIChildItems } = period

    const { push } = useRouter()
    const dispatch = useStore().dispatch as NextThunkDispatch

    const handleSelect = useCallback(async () => {
        await dispatch(getOnePeriodAction(GUIDString))
        push(`/period/${GUIDString}`)
    }, [period])

    const [startDate] = useState(
        useConvertDate(RIChildItems[0].TPeriodDetail[0].StartDate)
    )

    const [endDate] = useState(
        useConvertDate(RIChildItems[0].TPeriodDetail[0].EndDate)
    )
    const { UseStartDate, UseEndDate } = RIChildItems[0].TPeriodDetail[0]

    return (
        <Card
            onClick={() => onClick(period.GUIDString)}
            style={{ cursor: "pointer" }}
        >
            <CardTitle title={Name} />
            <PeriodCardStatus
                useStartDate={UseStartDate}
                startDate={startDate}
                endDate={endDate}
                useEndDate={UseEndDate}
            />

            <CardActions>
                <UIButton
                    onClick={handleSelect}
                    title="выбрать"
                    color="success"
                />
            </CardActions>
        </Card>
    )
}

export default memo(PeriodCard)
