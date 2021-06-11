import React from 'react';
import { Chart } from 'react-chartjs-2';


export default class GenderPieChart extends React.Component{
    constructor(){
        super();
        this.state={
            canvass:''
        }
    }

    countGender=()=>{
        let male=0,female=0,unisex=0;
        let counts=[];
         this.props.wholeData.forEach(ele=>{
          if(ele.Gender === "Male"){
            male++
          }else if(ele.Gender === "Female"){
            female++
          }else if(ele.Gender === "Unisex"){
              unisex++
          }
        })
        counts.push(male);
        counts.push(female);
        counts.push(unisex);
        return counts
      }
    componentDidMount(){
        let ctx = document.getElementById('mypieChart').getContext('2d');
        let myChart = new Chart(ctx,{
          type: 'pie',
          data: {
            labels: [
              'Male',
              'FeMale',
                'UniSex'
            ],
            datasets: [{
              label: 'Gender Chart',
              data: this.countGender(),
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(254, 62, 235)',

              ],
              hoverOffset: 4
            }]
          },
        });
      }

    render(){
        return(
            <div>
                <h3>Gender PieChart</h3>
                <div className="col" style={{ width: '300px', height: '300px', border: '2px solid black', margin: '5px 0 0 5px' }}><canvas id="mypieChart" width="200px" height="200px"></canvas></div>
            </div>
        )
    }
}