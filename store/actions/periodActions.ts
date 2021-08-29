import {
    IPeriod,
    ITPeriodDetail,
    PeriodAction,
    PeriodActionTypes,
} from "@/interfaces/periodType"
import { IStatusResponse } from "@/interfaces/types"
import axios, { AxiosResponse } from "axios"
import { Dispatch } from "react"

export const getPeriodsAction = () => {
    return async (dispatch: Dispatch<PeriodAction>) => {
        try {
            const response: AxiosResponse<IStatusResponse> = await axios.get(
                `/api`
            )

            if (response.data.error) {
                dispatch({
                    type: PeriodActionTypes.GET_PERIODS_ERROR,
                    payload: {
                        error: true,
                        message: "Произошла ошибка",
                    },
                })
            } else {
                dispatch({
                    type: PeriodActionTypes.GET_PERIODS,
                    payload: response.data,
                })
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: PeriodActionTypes.GET_PERIODS_ERROR,
                payload: {
                    error: true,
                    message: "Произошла ошибка загрузки пользователей",
                },
            })
        }
    }
}

export const getOnePeriodAction = (guid: string) => {
    return async (dispatch: Dispatch<PeriodAction>) => {
        try {
            const response: AxiosResponse<IStatusResponse> = await axios.post(
                `/api/period`,
                { guid }
            )

            if (response.data.error) {
                dispatch({
                    type: PeriodActionTypes.GET_PERIODS_ERROR,
                    payload: {
                        error: true,
                        message: "Произошла ошибка",
                    },
                })
            } else {
                dispatch({
                    type: PeriodActionTypes.SELECT_PERIOD,
                    payload: response.data,
                })
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: PeriodActionTypes.GET_PERIODS_ERROR,
                payload: {
                    error: true,
                    message: "Произошла ошибка загрузки пользователей",
                },
            })
        }
    }
}

export const setPeriodDetailAction = (period: ITPeriodDetail) => {
    return async (dispatch: Dispatch<PeriodAction>) => {
        try {
            const response: AxiosResponse<IStatusResponse> = await axios.post(
                `/api/period/set`,
                period
            )

            if (response.data.error) {
                dispatch({
                    type: PeriodActionTypes.SET_PERIOD_DETAILS_ERROR,
                    payload: {
                        error: true,
                        message: "Произошла ошибка",
                    },
                })
            } else {
                dispatch({
                    type: PeriodActionTypes.SET_PERIOD_DETAILS,
                    payload: response.data,
                })
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: PeriodActionTypes.SET_PERIOD_DETAILS_ERROR,
                payload: {
                    error: true,
                    message: "Произошла ошибка загрузки пользователей",
                },
            })
        }
    }
}

export const setPeriodAction = (period: IPeriod) => {
    return async (dispatch: Dispatch<PeriodAction>) => {
        try {
            const response: AxiosResponse<IStatusResponse> = await axios.post(
                `/api/period`,
                period
            )

            if (response.data.error) {
                dispatch({
                    type: PeriodActionTypes.SET_PERIOD_ERROR,
                    payload: {
                        error: true,
                        message: "Произошла ошибка",
                    },
                })
            } else {
                dispatch({
                    type: PeriodActionTypes.SET_PERIOD,
                    payload: response.data,
                })
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: PeriodActionTypes.SET_PERIOD_ERROR,
                payload: {
                    error: true,
                    message: "Произошла ошибка загрузки пользователей",
                },
            })
        }
    }
}
export const closePeriodModalAction = (): PeriodAction => ({
    type: PeriodActionTypes.CLOSE_MODAL,
})

export const setLoadingAction = (state: boolean): PeriodAction => ({
    type: PeriodActionTypes.SET_LOADING,
    payload: state,
})
