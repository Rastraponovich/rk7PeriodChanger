import { NextApiRequest, NextApiResponse } from "next"

import { useParser } from "@/hooks/usePareser"
import { sendData } from "@/hooks/useGetData"
import { getPeriods } from "@/schemas/refData.schema"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const result = await sendData(
        getPeriods({
            RefName: "Periods",
            MainParentIdent: Number(process.env.MAINPARENTIDENT),
        })
    )

    if (result.error) {
        let message = "Произошла ошибка"

        if (result.code === "ECONNABORTED") {
            message = "Ошибка подключения"
        }

        return res.status(200).json({
            error: true,
            message,
            status: { Status: message },
            code: result.code || null,
        })
    } else {
        const { CommandResult, ...queryResult } = useParser(
            result.data
        ).RK7QueryResult[0]

        const { RK7Reference, ...commandResult } = CommandResult[0]

        const { Items, ...rk7Reference } = RK7Reference[0]

        res.status(200).json({
            error: false,
            message: "",
            queryResult,
            commandResult,
            rk7Reference,
            items: Items[0].Item,
        })
    }
}
