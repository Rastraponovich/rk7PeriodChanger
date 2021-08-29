export interface IAuth {
    username: string
    password: string
}

export interface IQueryXMLParams {
    RefName: string
    MainParentIdent?: number
}

export interface IStatus {
    ArrivalDateTime?: Date
    NetName?: string
    Processed: number
    XmlVersion?: number
    ServerVersion?: string
    Status?: string
}

export interface InputProps {
    status: IStatus
    commandResult: {}
    host: string
    username: string
}

export interface ICommandResult {
    CMD: string
    SourceCommand: []
    DateTime: Date
    ErrorText: string
    Status: string
    WorkTime: number
}
export interface IQueryResult {
    ServerVersion: string
    XmlVersion: number
    NetName: string
    Status: string
    Processed: number
    ArrivalDateTime: Date
}

export interface IRK7ReferencePeriod {
    DataVersion: number
    ClassName: string
    Name: string
    MinIdent?: number
    MaxIdent?: number
    ViewRight?: number
    UpdateRight?: number
    ChildRight?: number
    DeleteRight?: number
    XMLExport?: boolean
    XMLMask: string
    LeafCollectionCount?: number
}

export interface ParserInputProps {
    (xmlData: string): any
}

export interface IResponse {
    error: boolean
    data: string
    isAxiosError: boolean
    code: null | number | string
}

export interface IStatusResponse {
    error: boolean
    message: string
    queryResult?: IQueryResult
    commandResult?: ICommandResult
    rk7Reference?: any
    items?: any[]
}

export type TButtonType = "getinfo" | "get" | "set" | "err"

export type TButtonColor = "success" | "info" | "error" | "default"

export type TButtonSize = "medium" | "small" | "big"
