// Write your code here
import {Component} from 'react'
import {BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
    const DataFormatter = (number) => {
        if(number > 1000){
            return `${(number / 1000).toString()}k`
        }
        return number.toString()
    }

    const {last7DaysVaccinationdata} = props
    const {vaccineDate, dose2, dose1} = last7DaysVaccinationdata
    
    return(
        <div className="vaccination-coverage-container">
            <h1 className="text"> Vaccination Coverage </h1>
            <BarChart width={1000} height={300}
                data={last7DaysVaccinationdata}
                margin={{
                    top: 5
                }}
            >
                <XAxis
                    dataKey="vaccineDate"
                    tick={{
                        stroke: "gray",
                        strokeWidth: 0.4,
                        fontFamily: "Roboto",
                        fontSize: 14
                    }}
                />
                <YAxis
                    tickFormatter={DataFormatter}
                    tick={{
                        stroke: "gray",
                        strokeWidth: 0.4,
                        fontFamily: "Roboto",
                        fontSize: 14
                    }}
                />
                <Legend
                    wrapperStyle={{
                        fontFamily: "Roboto",
                        fontSize: 14,
                        paddingTop: 20,
                        textAlign: "center"
                    }}
                />
                <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="20%" radius={[10, 10, 0, 0]} />
                <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="20%" radius={[5, 5, 0, 0]}/>
            </BarChart> 
        
        </div>
    )
    
}

export default VaccinationCoverage