import moment from "moment"

export const useConvertDate = (value: Date | number) => {
    return moment(value)
        .subtract(70, "years")
        .subtract(2, "days")
        .toISOString()
        .split("T")[0]
}
