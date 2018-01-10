import React, { Component } from 'react';

//table row cell
class ColumnSet extends Component {
  constructor(props){
    super();
   this.state = {
    columnCount:[],
    data:props.columnDetails.columnName
   };
   this.setColumnName = this.setColumnName.bind(this);
  }

  setColumnName(e){
    // setting the cell data with user defined value
     let value = e.currentTarget.value
       this.setState({
         data:value
      });

    // Adding the cell data to the rowData
      this.state.columns.map((item) => item.columnName = (item.id == e.target.id) ? e.target.value : item.columnName);
      this.setState({
        columns: this.state.columns
      });  
  
  }
  render(){
     return (
      <div className = "input-group" > 
      <input onChange ={this.setColumnName} id ={this.props.columnDetails.id} value = {this.state.data}/>
       < /div>
     )

}
}

 export default ColumnSet;