import React, { Component } from 'react';
import LineChart from 'react-linechart';
import 'react-linechart/dist/styles.css';

 
  class StatusBar extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
        count: 90,
        pressure_trend:"",
        pressure_high_24h :"",
        pressure_low_24h:"",
        strike_count_3h:"",
        observation:[]
      };
    }

  sendMessage(message){
     this.connection.send(
        JSON.stringify({
         "type":"listen_start",
         "device_id":1110,
         "id":"random-id-12345" 
       }) 
      );
  }
  
   componentDidMount(){
    // this is an websocket service
    this.connection = new WebSocket('ws://ws.weatherflow.com/swd/data?api_key=20c70eae-e62f-4d3b-b3a4-8586e90f3ac8');
    // listen to onmessage event
    this.connection.onmessage = evt => {
      var resObject=JSON.parse(evt.data); 
      //set state of of received message
      if(resObject.summary){
      this.setState({
        pressure_trend:resObject.summary.pressure_trend,
        pressure_high_24h :resObject.summary.pressure_high_24h,
        pressure_low_24h:resObject.summary.pressure_low_24h,
        strike_count_3h:resObject.summary.strike_count_3h,
        observation:resObject.obs[0]
      })
      
    }
        setTimeout( _ =>{
     this.connection.send(JSON.stringify({
        "type":"listen_start",
         "device_id":1110,
          "id":"random-id-12345" }) )
    },200 )
       
    };

   

  }

  render() {
    var points=[];
     this.state.observation.map((item,i)=>(
         points.push({
          x:new Date().getTime()+i,
          y:item
        })
    ))
        const data = [
            {                 
                color: "orange", 
                points: points
            }
        ];
    return (
      <div className="stats">
      <div className="stats-component">
                <div className="title">Pressure</div>
                <div className="title-trend">
                <span>{this.state.pressure_trend}</span>
                <span>|</span>
                </div>
                 <div className="segment"><span className="high">High</span> <span>{this.state.pressure_high_24h}</span></div>
                 <div className="segment"> <span className="low">Low</span> <span>{this.state.pressure_low_24h}</span></div>
                 <div className="segment"> <span>Strike count</span> <span>{this.state.strike_count_3h}</span></div>
                  <span>|</span>
  
      </div>
      <div className="chart2-component">
                    
                    <LineChart 
                        width={400}
                        height={100}
                        data={data}
                        hideXAxis={true}
                        hideYAxis={true}
                    />
                </div>  
                </div>
    );
  }
}

  export default StatusBar;