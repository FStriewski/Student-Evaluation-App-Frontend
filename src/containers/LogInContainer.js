import React, { PureComponent } from 'react'
import LogInForm from '../components/LogInForm'
import '../styles/style.css'

export default class LogInContainer extends PureComponent {

    render() {
        return (
            <div className="LogInContainer">
                
                <LogInForm/>
            </div>
        )
    }
}
