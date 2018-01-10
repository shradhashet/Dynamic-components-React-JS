
import React, { Component } from 'react';
import LineChart from 'react-linechart';
import 'react-linechart/dist/styles.css';

 
export default class Chart extends Component {

  constructor(props) {
   
  super(props);
  this.state = {
      chartData:props.chartData
}
      
    
}
    render() {
 var points=[];
     this.props.chartData.map((item,i)=>(
         points.push({
          x:new Date(item.timestamp),
          y:item.speed
        })
    ))
        const data = [
            {                 
                color: "orange", 
                points: points
            }
        ];
        return (
            <div className="chart1-component">
                    
                    <LineChart 
                        width={400}
                        height={100}
                        data={data}
                        hideXAxis={true}
                        hideYAxis={true}
                    />
                </div>        
            
        );
    }
}