// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BarChart} from 'recharts'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import './index.css'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILUER',
    inProgress: 'IN_PROGRESS'
}

class CowinDashboard extends Component{
    state = {
        last7DaysVaccinationdata: [],
        vaccinationByAge: [],
        vaccinationByGender: [],
        apiStatus: apiStatusConstants.initial
    }

    componentDidMount(){
        this.getDetails()
    }

    getDetails = async () => {
        this.setState({apiStatus: apiStatusConstants.inProgress})

        const url = "https://apis.ccbp.in/covid-vaccination-data"
        const response = await fetch(url) 

        if (response.ok === true){
            const fetchedData = await response.json()
            const last7DaysData = fetchedData.last_7_days_vaccination.map(data => ({
                vaccineDate: data.vaccine_date,
                dose2: data.dose_2,
                dose1: data.dose_1
            }))
            this.setState({
                last7DaysVaccinationdata: last7DaysData,
                vaccinationByAge: fetchedData.vaccination_by_age,
                vaccinationByGender: fetchedData.vaccination_by_gender,
                apiStatus: apiStatusConstants.success
            })
        }
        else{
            this.setState({apiStatus: apiStatusConstants.failure})
        }
        
    }


    renderLoader = () => {
        return(
            <div className="loader" data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
            </div>
        )
    }

    renderFailureView = () => {
        return(
            <div className="failure-container">
                <img src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png" 
                    alt="failure view" className="failure-img" />
                <h1 className="failure-text"> Something went wrong </h1>
            </div>
        )
    }

    renderCharts = () => {
        const {last7DaysVaccinationdata, vaccinationByGender, vaccinationByAge} = this.state
        return(
            <>
                <VaccinationCoverage last7DaysVaccinationdata={last7DaysVaccinationdata}  />
                <VaccinationByGender vaccinationByGender={vaccinationByGender} />
                <VaccinationByAge vaccinationByAge={vaccinationByAge} />
            </>
        )
    }

    renderContent = () => {
        const {apiStatus} = this.state
        switch(apiStatus){
            case (apiStatusConstants.success):
                return this.renderCharts()
            case (apiStatusConstants.inProgress):
                return this.renderLoader()
            case (apiStatusConstants.failure):
                return this.renderFailureView()
            default:
                return null
        }
    }

    render(){
        const {vaccinationByAge, vaccinationByGender, last7DaysVaccinationdata} = this.state
        
        return(
            <div className="bg-container">
                <div className="responsive-container">
                    <div className="header-container">
                        <img alt="website logo" className="website-logo"
                            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"/>
                        <h1 className="website-name"> Co-WIN </h1>
                    </div>
                    <h1 className="heading"> CoWIN Vaccination in India </h1>
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}


export default CowinDashboard