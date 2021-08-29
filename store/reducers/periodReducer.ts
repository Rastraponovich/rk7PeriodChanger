import {
    IPeriod,
    PeriodAction,
    PeriodActionTypes,
    PeriodState,
} from "@/interfaces/periodType"
import { ICommandResult, IQueryResult, IStatus } from "interfaces/types"

const defaultPeriod: IStatus = {} as IStatus

const initialState: PeriodState = {
    isOpenModal: false,
    message: "",
    commandResult: {} as ICommandResult,
    error: false,
    loading: false,
    items: [],
    queryResult: {} as IQueryResult,
    selectedPeriod: {} as IPeriod,
    selectedPeriodId: "",
    reload: false,
    code: "",
    status: { Status: "" },
}

export const periodReducer = (
    state = initialState,
    action: PeriodAction
): PeriodState => {
    switch (action.type) {
        case PeriodActionTypes.GET_PERIODS:
            return {
                ...state,
                ...action.payload,
                reload: false,
                loading: false,
                error: false,
                code: null,
                message: "",
                status: { Status: "" },
            }

        case PeriodActionTypes.GET_PERIODS_ERROR:
            return {
                ...state,
                error: action.payload.error,
                message: action.payload.message,
                code: action.payload.code,
                status: action.payload.status,
            }

        case PeriodActionTypes.SET_LOADING:
            return {
                ...state,
                loading: true,
            }
        case PeriodActionTypes.SELECT_PERIOD:
            return {
                ...state,
                selectedPeriod: action.payload.items[0],
                selectedPeriodId: action.payload.items[0].GUIDString,
                reload: false,
                loading: false,
            }
        case PeriodActionTypes.SET_PERIOD:
            return {
                ...state,
            }

        case PeriodActionTypes.SET_PERIOD_DETAILS:
            return {
                ...state,
                reload: true,
                isOpenModal: true,
            }
        case PeriodActionTypes.SET_PERIOD_ERROR:
            return {
                ...state,
            }
        case PeriodActionTypes.CLOSE_MODAL:
            return {
                ...state,
                isOpenModal: false,
            }
        default:
            return state
    }
}
