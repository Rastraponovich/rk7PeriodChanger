import { ITPeriodDetail } from "@/interfaces/periodType"
import { IQueryXMLParams } from "@/interfaces/types"

export const getRefData = (params: IQueryXMLParams) => {
    const { RefName } = params
    return `<?xml version="1.0" encoding="utf-8"?>
    <RK7Query>
      <RK7Command2 CMD="GetRefData" RefName="${RefName}" >
    </RK7Command2>
    </RK7Query>`
}

export const getPeriods = (params: IQueryXMLParams) => {
    const { RefName, MainParentIdent } = params
    return `<?xml version="1.0" encoding="utf-8"?>
    <RK7Query>
      <RK7Command2 CMD="GetRefData" RefName="${RefName}" WithChildItems="2">
        <PROPFILTERS>
                <PROPFILTER name="MainParentIdent" value="${MainParentIdent}" />     
        </PROPFILTERS>
    </RK7Command2>
    </RK7Query>`
}

export const getOnePeriod = (guid: string) => {
    return `<?xml version="1.0" encoding="utf-8"?>
    <RK7Query>
      <RK7Command2 CMD="GetRefData" RefName="Periods" WithChildItems="2">
        <PROPFILTERS>
                <PROPFILTER name="GUIDString" value="${guid}" />     
        </PROPFILTERS>
    </RK7Command2>
    </RK7Query>`
}

export const getOnePeriodDetais = (
    guid: string = "{E38A71C9-146D-4C12-8191-81520EA59051}"
) => {
    return `<?xml version="1.0" encoding="utf-8"?>
    <RK7Query>
      <RK7Command2 CMD="GetRefData" RefName="PeriodDetails" WithChildItems="2">
        <PROPFILTERS>
                <PROPFILTER name="GUIDString" value="${guid}" />     
        </PROPFILTERS>
    </RK7Command2>
    </RK7Query>`
}

export const setOnePerdiodDetails = (params: ITPeriodDetail): string => {
    const {
        GUIDString,
        DaysOfWeek,
        DateFlags,
        EndDate,
        StartDate,
        UseDaysOfWeek,
        UseStartDate,
        UseEndDate,
        UseTime,
    } = params

    return `<?xml version="1.0" encoding="utf-8"?>
    <RK7Query>
      <RK7Command2 CMD="SetRefData" RefName="PeriodDetails" WithChildItems="2">
      <Items>
        <Item  GUIDString="${GUIDString}"  DaysOfWeek="${DaysOfWeek}" DateFlags="${DateFlags}" EndDate="${EndDate}" StartDate="${StartDate}" EndTime="0" StartTime="0" ExcPeriod="0" ConsiderMonth="true" ConsiderYear="true" ExcludingPeriod="false" UseDaysOfWeek="${UseDaysOfWeek}" UseStartDate="${UseStartDate}" UseEndDate="${UseEndDate}" UseTime="${UseTime}"/>
      </Items>
    </RK7Command2>
    </RK7Query>`
}
