// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'


const VaccinationByAge = props => {
    const {vaccinationByAge} = props
    const {count} = vaccinationByAge
    return(
        <div className="vaccination-coverage-container">
            <h1 className="text"> Vaccination by age </h1>
        
            <PieChart width={1000} height={300}>
                <Pie
                    data={vaccinationByAge}
                    dataKey="count"
                    cx="50%"
                    cy="40%"
                    outerRadius="70%"
                >
                    <Cell name="18-44" fill="#2d87bb"/>
                    <Cell name="45-60" fill="#a3df9f"/>
                    <Cell name="Above 60" fill="#64c2a6"/>

                </Pie>
                <Legend 
                    iconType="Circle"
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    wrapperStyle={{fontSize: 14, fontFamily: "Roboto"}}
                />

            </PieChart>

        
        </div>
    )
}

export default VaccinationByAge