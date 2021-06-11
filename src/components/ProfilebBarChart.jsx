import React from 'react';
import { Chart } from 'react-chartjs-2';

export default class ProfileBarChart extends React.Component {
    constructor() {
        super();
    }

    profileCounts=()=>{
        let counts=[0,0,0,0,0];
        this.props.wholeData.forEach(data => {
           let status=["NULL", "familydetailsCompleted", "studentdetailsCompleted", "proffesioncompleted", "verifyCompleted"];
           let index = status.indexOf(data.Profile_Status)
           counts[index]++;
        })
        return counts;
    }
    componentDidMount() {
        let ctx = document.getElementById('myProfileChart').getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Null", "FamilyDetailsCompleted", "StudentDetailsCompleted", "ProfessionCompleted","VerifyCompleted"],
                datasets: [{
                    label: "Completion",
                    data: this.profileCounts(),
                    backgroundColor: [
                        'rgba(255, 0, 0, 0.8)',
                        'rgba(200, 100, 0, 0.8)',
                        'rgba(150, 150, 0, 0.8)',
                        'rgba(100, 200, 0, 0.8)',
                        'rgba(0, 255, 0, 0.8)'
                        
                    ],
                    borderColor: [
                        'rgba(255, 0, 0, 1)',
                        'rgba(200, 100, 0, 1)',
                        'rgba(150, 150, 0, 1)',
                        'rgba(100, 200, 0, 1)',
                        'rgba(0, 255, 0, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });


        return null
    }
    render() {
        return (
            <div>
                <h3>Profile Completion BarChart</h3>
                <div className="col" style={{ width: '300px', height: '300px', border: '2px solid black', margin: '5px 0 0 5px' }}>
                    <canvas id="myProfileChart" width="200px" height="200px"></canvas>
                </div>
            </div>
        )
    }
}