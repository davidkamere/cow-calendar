import { useEffect, useState } from "react"
import { add, format } from "date-fns"

const Calculator = ({ selectedDay }) => {

    const [checkHeat, setCheckHeat] = useState()
    const [confirmPregnancy, setConfirmPregnancy] = useState()
    const [stopMilkingDate, setStopMilkingDate] = useState()
    const [calvingDate, setCalvingDate] = useState()
    const [endOfRestPeriod, setEndOfRestPeriod] = useState()

    useEffect(() => {
        calculateDates()
    }, [selectedDay])


    const calculateDates = () => {
        const firstHeatCheck = add(selectedDay, {days: 21})
        const secondHeatCheck = add(firstHeatCheck, {days: 2})
        const thirdHeatCheck = add(secondHeatCheck , {days: 20})

        const firstPregnancyConfirmation = add(thirdHeatCheck , {days: 17})
        const secondPregnancyConfirmation = add(firstPregnancyConfirmation , {days: 2})

        const stopMilkingDate = add(secondPregnancyConfirmation, {days: 160})

        const calvingDate = add(stopMilkingDate, {days: 60})

        const endOfRestPeriod = add(calvingDate, {days: 58})

        setCheckHeat({
            firstHeatCheck:firstHeatCheck,
            secondHeatCheck:secondHeatCheck,
            thirdHeatCheck:thirdHeatCheck
        })

        setConfirmPregnancy({
            firstPregnancyConfirmation:firstPregnancyConfirmation,
            secondPregnancyConfirmation:secondPregnancyConfirmation
        })

        setStopMilkingDate(
            stopMilkingDate
        )

        setCalvingDate(
            calvingDate
        )

        setEndOfRestPeriod(
           endOfRestPeriod
        )

        

    }

    return (
        <>
            {checkHeat &&
                <div className="flex flex-col gap-4 text-base font-semibold">
                    <div className="w-96 border border-slate-100 bg-white backdrop-blur-lg rounded-md p-4">
                        <div className="flex flex-col">
                            <div className="text-black">First Heat Check:</div>
                            <div className="flex justify-between mb-4">
                                <div className="text-red-900">{format(checkHeat.firstHeatCheck, 'dd-MMM-yyyy')}</div>
                                <div className="text-slate-400">-</div> 
                                <div className="text-red-900">{format(checkHeat.secondHeatCheck, 'dd-MMM-yyyy')}</div>
                            </div>
                            <div className="text-black">Second Heat Check:</div>
                            <div className="text-red-900">{format(checkHeat.thirdHeatCheck, 'dd-MMM-yyyy')}</div>
                        </div>
                    </div>
                
                    <div className="w-96 border border-slate-100 bg-white backdrop-blur-lg rounded-md p-4">
                        <div className="text-black flex flex-col">
                            <div className="mb-1">Pregnancy Confirmation:</div>
                            <div className="flex justify-between">
                                <div className="text-red-900">{format(confirmPregnancy.firstPregnancyConfirmation, 'dd-MMM-yyyy')}</div>
                                <div className="text-slate-400">-</div> 
                                <div className="text-red-900">{format(confirmPregnancy.secondPregnancyConfirmation, 'dd-MMM-yyyy')}</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-96 border border-slate-100 bg-white backdrop-blur-lg rounded-md p-4 flex justify-between">
                        <div className="text-black">Stop Milking On:</div>
                        <div className="text-red-900 ml-5">{format(stopMilkingDate, 'dd-MMM-yyyy')}</div>
                    </div>

                    <div>
                        <div className="flex w-96 h-10 bg-gradient-to-r from-white via-zinc-200 to-white rounded-lg justify-center items-center ">
                            <span className="text-slate-600">Transition Period</span>
                        </div>
                    </div>

                    <div className="w-96 border border-slate-100 bg-white backdrop-blur-lg rounded-md p-4 flex justify-between">
                        <div className="text-black">Expected D.O.B:</div>
                        <div className="text-red-900 ml-5">{format(calvingDate, 'dd-MMM-yyyy')}</div>
                    </div>

                    <div className="w-96 border border-slate-100 bg-white backdrop-blur-lg rounded-md p-4 flex justify-between">
                        <div className="text-black">End of Rest Period:</div>
                        <div className="text-red-900 ml-5">{format(endOfRestPeriod, 'dd-MMM-yyyy')}</div>
                    </div>

                </div>
            }
        </>
    )
}

export default Calculator