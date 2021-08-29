import { IDays, ITPeriodDetail, TDaysOfWeek } from "@/interfaces/periodType"
import React, {
    memo,
    FC,
    useEffect,
    useMemo,
    ChangeEvent,
    useState,
} from "react"

import moment from "moment"
import { useStore } from "react-redux"
import { NextThunkDispatch } from "store"
import { setPeriodDetailAction } from "store/actions/periodActions"
import PeriodDetailOptions from "./PeriodDetailOptions"
import PeriodDetailDates from "./PeriodDetailDates"
import PeriodDetailDays from "./PeriodDetailDays"
import styles from "@/styles/PeriodDetail.module.css"
import UIButton from "../UI/Button/UIButton"
import UIButtonGroup from "../UI/UIButtonGroup/UIButtonGroup"
import { useRouter } from "next/router"
import { useConvertDate } from "@/hooks/useConvertDate"
interface InputProps {
    periodDetail: ITPeriodDetail
    onSave?: any
    onChange?: any
}

const PeriodDetail: FC<InputProps> = ({ onSave, periodDetail, onChange }) => {
    const {
        DaysOfWeek,
        EndDate,
        EndTime,
        StartDate,
        StartTime,
        UseDaysOfWeek,
        UseEndDate,
        UseStartDate,
        UseTime,
    } = periodDetail

    const convertDaysOfWeek = (): any => {
        const result = DaysOfWeek.slice(1, -1)
        return result.split(",")
    }

    const [useDaysOfWeek, setUseDaysOfWeek] = useState(UseDaysOfWeek)
    const [useEndDate, setUseEndDate] = useState(UseEndDate)
    const [useStartDate, setUseStartDate] = useState(UseStartDate)
    const [useTime, setUseTime] = useState(UseTime)
    const [daysOfWeek, setDaysOfWeek] = useState<TDaysOfWeek[]>(
        convertDaysOfWeek()
    )
    const [startDate, setStartDate] = useState(useConvertDate(StartDate))
    const [endDate, setEndDate] = useState(useConvertDate(EndDate))
    const [DOF, setDOF] = useState<string>()

    const { back } = useRouter()

    const dispatch = useStore().dispatch as NextThunkDispatch

    const [days, setDays] = useState<IDays[]>([
        { name: "Понедельник", value: false, altName: "dwMonday" },
        { name: "Вторник", value: false, altName: "dwTuesday" },
        { name: "Среда", value: false, altName: "dwWednesday" },
        { name: "Четверг", value: false, altName: "dwThursday" },
        { name: "Пятница", value: false, altName: "dwFriday" },
        { name: "Суббота", value: false, altName: "dwSaturday" },
        { name: "Воскресенье", value: false, altName: "dwSunday" },
    ])

    const memoDays = useMemo(() => days, [days])

    useEffect(() => {
        const result = days.filter((item) => item.value)
        setDOF(result.map((item) => item.altName).toString())
    }, [days])

    useEffect(() => {
        const newDays = days.map((day) => {
            const searchDay = daysOfWeek.find(
                (item) => item.trim() === day.altName
            )
            if (searchDay) {
                return { ...day, value: true }
            } else {
                return { ...day }
            }
        })
        setDays(newDays)
    }, [daysOfWeek])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, id } = e.target
        const newDays = days.map((day) => {
            if (day.altName === value) {
                return { ...day, value: !day.value }
            } else {
                return day
            }
        })

        setDays(newDays)
    }

    const handleSet = async () => {
        await dispatch(
            await setPeriodDetailAction({
                ...periodDetail,
                UseDaysOfWeek: useDaysOfWeek,
                UseStartDate: useStartDate,
                UseEndDate: useEndDate,
                UseTime: useTime,
                DaysOfWeek: DOF,
                StartDate: Number(
                    moment(startDate).add(70, "years").add(3, "days")
                ),
                EndDate: Number(
                    moment(endDate).add(70, "years").add(3, "days")
                ),
            })
        )
    }
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <PeriodDetailOptions
                    useDaysOfWeek={useDaysOfWeek}
                    useTime={useTime}
                    useEndDate={useEndDate}
                    useStartDate={useStartDate}
                    setUseStartDate={setUseStartDate}
                    setUseDaysOfWeek={setUseDaysOfWeek}
                    setUseEndDate={setUseEndDate}
                    setUseTime={setUseTime}
                />
                <PeriodDetailDates
                    useStartDate={useStartDate}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    useEndDate={useEndDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                />

                <PeriodDetailDays
                    memoDays={memoDays}
                    useDaysOfWeek={useDaysOfWeek}
                    handleChange={handleChange}
                />
            </div>
            <UIButtonGroup justify>
                <UIButton
                    onClick={back}
                    title="Назад"
                    color="error"
                    size="big"
                />
                <UIButton
                    onClick={handleSet}
                    title="Сохранить"
                    color="success"
                    size="big"
                />
            </UIButtonGroup>
        </div>
    )
}

export default memo(PeriodDetail)
