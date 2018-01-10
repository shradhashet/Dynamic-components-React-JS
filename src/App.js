import React, { Component } from 'react';
import Modal from 'react-modal';
import './App.css';
import ModalLayout from './components/ModalLayout';
import Table from './components/Table';
import Chart from './components/Chart';
import Map from './components/Map';
import StatusBar from './components/StatusBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      component:"",
      columns:[],
      rowData:[],
      chartData:[],
      mapData:false,
      statsData:false
      
    };
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }

  columnUpdate(columns) {
    this.setState({
      columns:columns
    });
  }
  chartDataUpadte(chartData) {
   this.setState({
    chartData:chartData
  });
 }

 mapDataUpadte(mapData) {
   this.setState({
    mapData:mapData
  });
 }

 componentUpdate(component){
   this.setState({
    component:component
  });
 }

 statusDataUpadte(stats){
   this.setState({
    statsData:stats
    
  });
 }
 render() {

  return (
    <div className="app">
    <h1 className="header"> Dynamic components</h1>

    <ModalLayout ref="child" 
    componentUpdate={this.componentUpdate.bind(this)} 
    ColumnUpdate={this.columnUpdate.bind(this)}  
    chartDataUpadte={this.chartDataUpadte.bind(this)}
    mapDataUpadte={this.mapDataUpadte.bind(this)}
    statusDataUpadte={this.statusDataUpadte.bind(this)}
    />


    {(this.state.statsData) 
      ?<StatusBar  />
      :null
    }

    {(this.state.chartData && this.state.chartData.length > 0)
     ? <Chart chartData={this.state.chartData}/>
     :null
   }

   { (this.state.mapData)
     ? <div className="map-compnonet">
     <Map/>
     </div>
     :null
   }


   { (this.state.columns.length > 0)
    ? <Table columns = {this.state.columns} rowData={this.state.rowData}  ColumnUpdate={this.columnUpdate.bind(this)}  />
    :null
  } 

  <div className="add-component">
  <div className="add" onClick={() => this.refs.child.openModal()}>
  <span><b>+</b></span>
  <div>Add Component</div>
  </div>
  </div>

  </div>

  );
}
}
export default App;


