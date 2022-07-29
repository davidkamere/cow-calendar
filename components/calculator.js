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
                <>
                    <div>
                        <div className="text-slate-400">First Heat Check:  <span className="text-slate-700 ml-5">{format(checkHeat.firstHeatCheck, 'dd-MMM-yyyy')} <span className="text-slate-400 mx-2">to</span> {format(checkHeat.secondHeatCheck, 'dd-MMM-yyyy')}</span></div>
                        <div className="text-slate-400">Second Heat Check:  <span className="text-slate-700 ml-5">{format(checkHeat.thirdHeatCheck, 'dd-MMM-yyyy')}</span></div>
                    </div>
                
                
                    <div className="mt-5">
                        <div className="text-slate-400">
                            Pregnancy Confirmation:  <span className="text-slate-700 ml-5">{format(confirmPregnancy.firstPregnancyConfirmation, 'dd-MMM-yyyy')}
                            <span className="text-slate-400 mx-2">to</span>
                            <span className="text-slate-700">{format(confirmPregnancy.secondPregnancyConfirmation, 'dd-MMM-yyyy')}</span></span>
                        </div>
                    
                    </div>

                    <div className="mt-5">
                        <div className="text-slate-400">Stop Milking On:  <span className="text-slate-700 ml-5">{format(stopMilkingDate, 'dd-MMM-yyyy')}</span></div>
                    </div>

                    <div className="mt-5">
                        <div className="text-slate-400">Calving Date:  <span className="text-slate-700 ml-5">{format(calvingDate, 'dd-MMM-yyyy')}</span></div>
                    </div>

                    <div className="mt-5">
                        <div className="text-slate-400">End of Rest Period:  <span className="text-slate-700 ml-5">{format(endOfRestPeriod, 'dd-MMM-yyyy')}</span></div>
                    </div>
                </>
            }
        </>
    )
}

export default Calculator