import {
    ICommandResult,
    IQueryResult,
    IRK7ReferencePeriod,
    IStatus,
    IStatusResponse,
} from "./types"

export type TDaysOfWeek =
    | "dwMonday"
    | "dwTuesday"
    | "dwWednesday"
    | "dwThursday"
    | "dwFriday"

export type TDateFlags = "dfDayOfWeek" | "dfEndDate" | "dfMonth" | "dfYear"

export interface ITPeriodDetail {
    ItemIdent: number
    SourceIdent: number
    GUIDString: string
    Period: number
    DaysOfWeek: string //TDaysOfWeek[]
    DateFlags: string //TDateFlags[]
    EndDate: number //Date |
    StartDate: number //Date |
    EndTime: Date | number
    StartTime: Date | number
    ConsiderMonth: boolean
    ConsiderYear: boolean
    ExcludingPeriod: boolean
    UseDaysOfWeek: boolean
    UseStartDate: boolean
    UseEndDate: boolean
    UseTime: boolean
    Ident: number
}

export interface IRIChildItemsPeriod {
    TPeriodDetail: ITPeriodDetail[]
}

export interface IPeriod {
    Ident: number
    ItemIdent: number
    SourceIdent: number
    GUIDString: string
    Parent: number
    Name: string
    Code: number
    MainParentIdent: number
    Status: string
    RIChildItems?: IRIChildItemsPeriod[]
}

export interface PeriodState {
    isOpenModal: boolean
    commandResult: ICommandResult
    queryResult: IQueryResult
    error?: boolean
    message?: string
    rk7Reference?: IRK7ReferencePeriod
    items: IPeriod[]
    selectedPeriod: IPeriod
    selectedPeriodId: string
    reload?: boolean
    loading: boolean
    code?: string | null
    status?: { Status?: string }
}
export interface IDays {
    name: string
    value: boolean
    altName: string
}
export enum PeriodActionTypes {
    GET_PERIODS = "GET_PERIODS",
    GET_PERIODS_ERROR = "GET_PERIODS_ERROR",
    SET_PERIOD = "SET_PERIOD",
    SET_PERIOD_ERROR = "SET_PERIOD_ERROR",
    SELECT_PERIOD = "SELECT_PERIOD",
    SET_PERIOD_DETAILS = "SET_PERIOD_DETAILS",
    SET_PERIOD_DETAILS_ERROR = "SET_PERIOD_DETAILS_ERROR",
    CLOSE_MODAL = "CLOSE_MODAL",
    SET_LOADING = "SET_LOADING",
}

interface getPeriodsAction {
    type: PeriodActionTypes.GET_PERIODS
    payload: IStatusResponse
}

interface setPeriodDetailsAction {
    type: PeriodActionTypes.SET_PERIOD_DETAILS
    payload: IStatusResponse
}

interface setLoadingAction {
    type: PeriodActionTypes.SET_LOADING
    payload: boolean
}

interface closePeriodModalAction {
    type: PeriodActionTypes.CLOSE_MODAL
}

interface setPeriodDetailsErrorAction {
    type: PeriodActionTypes.SET_PERIOD_DETAILS_ERROR
    payload: any
}

interface selectPeriodAction {
    type: PeriodActionTypes.SELECT_PERIOD
    payload: IStatusResponse
}

interface getPeriodsErrorAction {
    type: PeriodActionTypes.GET_PERIODS_ERROR
    payload: IResponseError
}

export interface IResponseError {
    error: boolean
    message: string
    status: { Status: string }
    code: string | null
}

interface setPeriodAction {
    type: PeriodActionTypes.SET_PERIOD
    payload?: any
}

interface setPeriodErrorAction {
    type: PeriodActionTypes.SET_PERIOD_ERROR
    payload?: any
}

export type PeriodAction =
    | getPeriodsAction
    | getPeriodsErrorAction
    | setPeriodAction
    | setPeriodErrorAction
    | selectPeriodAction
    | setPeriodDetailsAction
    | setPeriodDetailsErrorAction
    | closePeriodModalAction
    | setLoadingAction
