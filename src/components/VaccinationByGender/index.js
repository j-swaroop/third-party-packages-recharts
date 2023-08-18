// Write your code here
// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
    const {vaccinationByGender} = props
    const {gender, count} = vaccinationByGender
    
    return(
        <div className="vaccination-coverage-container">
            <h1 className="text"> Vaccination by gender </h1>
            <PieChart width={1000} height={300}>
                <Pie 
                    data={vaccinationByGender}
                    dataKey="count"
                    startAngle={180}
                    endAngle={0}
                    innerRadius="40%"
                    outerRadius="85%"
                    cx="50%"
                    cy="60%"
                >
                <Cell name="Male" fill="#5a8dee" />
                <Cell name="Female" fill="#f54394" />
                <Cell name="Others" fill="#2cc6c6" />
                </Pie>
                <Legend 
                    iconType="Circle"
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    wrapperStyle={{fontSize: 14, fontFamily: "Roboto", }} 
                />
            </PieChart> 
        
        </div>
    )
}

export default VaccinationByGender