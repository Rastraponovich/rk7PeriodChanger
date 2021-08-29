import { NextApiRequest, NextApiResponse } from "next"

import { useParser } from "@/hooks/usePareser"
import { sendData } from "@/hooks/useGetData"
import { getOnePeriod, setOnePerdiodDetails } from "@/schemas/refData.schema"
import { ITPeriodDetail } from "@/interfaces/periodType"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const period: ITPeriodDetail = req.body

    const result = await sendData(setOnePerdiodDetails(period))

    //PeriodDetails
    if (result.error) {
        return res.status(200).json({
            error: true,
            message: "Произошла ошибка",
            status: { Status: "Произошла ошибка" },
            ...result,
        })
    } else {
        const { CommandResult, ...queryResult } = useParser(
            result.data
        ).RK7QueryResult[0]

        const { ...commandResult } = CommandResult[0]

        res.status(200).json({
            error: false,
            message: "",
            queryResult,
            commandResult,
        })
    }
}
