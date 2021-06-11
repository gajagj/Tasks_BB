import React from 'react';
import { Chart } from 'react-chartjs-2';

class Task3 extends React.Component {
    constructor() {
        super();
        this.state = {
            levelPoints: [],
            wholeData: [
                        [[1, 2, 3, 0, 5], [3, 2, 4, 1, 15], [1, 2, 13, 4, 5], [1, 22, 3, 4, 5], [1, 20, 3, 4, 5]],
                        [[0, 2, 13, 0, 5], [1, 20, 3, 4, 5], [3, 2, 4, 1, 15], [1, 2, 13, 4, 5], [1, 22, 3, 4, 5]],
                        [[1, 2, 3, 0, 5], [3, 2, 4, 1, 15], [1, 2, 13, 4, 5], [1, 22, 3, 4, 5], [1, 20, 3, 4, 5]],
                        [[1, 22, 13, 4, 5], [1, 22, 3, 4, 5], [1, 20, 3, 4, 5], [1, 2, 3, 0, 5], [3, 2, 4, 1, 15]]
                    ],
            canvasGroup: []
        }
    }
    componentWillMount() {
        let group = []
        for (let j = 0; j < 4; j++) {
            let staffHeader= "Staff "+(j+1);
            group.push(<div className="row col-md-12"><h3>{staffHeader}</h3></div>)
            for (let i = 0; i < 5; i++) {
                let chartId = "myChart" + i + j
                group.push(<div className="col-md-2" style={{ width: '200px', height: '200px', border: '2px solid black', margin: '5px 0 0 5px' }}><canvas id={chartId} width="200px" height="200px"></canvas></div>)
            }
        }
        this.setState({ canvasGroup: group });
    }
    componentDidMount() {
        let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 5; i++) {
                let ctx = document.getElementById('myChart' + i + j).getContext('2d');
                let myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"],
                        datasets: [{
                            label: day[i],
                            data: this.state.wholeData[j][i],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
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

            }
        }
        return null
    }

    // displayPointsField=()=>{
    //     let points=[];
    //     for(let i=0;i<5;i++){
    //         points.push()
    //     }
    // }
    render() {


        return (
            <div>
                <h1>Task3</h1>
                <div className="row offset-1">
                    {this.state.canvasGroup}
                </div>

            </div>
        )
    }
}
export default Task3;