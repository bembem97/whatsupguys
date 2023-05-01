type DateResult = {
    year: number | string
    month: string | number
    day: string | number
    numericMonth: number
}

type DateParams = Date | string

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

const useGetDate = (date: DateParams): DateResult => {
    const year = new Date(date).getFullYear()
    const month = MONTHS[new Date(date).getMonth()]
    const day = new Date(date).getDate()
    const numericMonth = new Date(date).getMonth() + 1

    return { year, month, day, numericMonth }
}

export default useGetDate
