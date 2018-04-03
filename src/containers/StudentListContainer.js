import React, { PureComponent } from 'react'
import StudentTile from '../components/StudentTile'
import StatusBar from '../components/StatusBar'
import '../styles/style.css'

export default class StudentListContainer extends PureComponent {

    render() {
        const students = [1,2,3,4]
        
        return (
            <div className="StudentListContainer">

                <StatusBar />
                
                <div className="StudentTiles" style={{ display: "flex", flexDirection: 'row' }}> 
                {students.map( (id,index) => 
                        <StudentTile key={index}/>
                )}
        
                StudentListContainer
                        
                </div>
            </div>
        )
    }
}