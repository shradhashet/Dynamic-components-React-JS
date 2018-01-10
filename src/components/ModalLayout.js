import React, {Component} from 'react';
import Modal from 'react-modal';
import FileUpload from './FileUpload';
import ColumnSet from './ColumnSet';

//setting custom styles for the modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '400px',
    width: '600px'
  }
};

class ModalLayout extends Component {
  constructor(props) {
    super();
    this.state = {
      modalIsOpen: false,
      columns:[],
      component:"map"
    };

     this.afterOpenModal = this.afterOpenModal.bind(this);
     this.getComponent = this.getComponent.bind(this);
     this.openModal = this.openModal.bind(this);
     this.closeModal = this.closeModal.bind(this);
     this.saveData = this.saveData.bind(this);

  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';

  }

  //open modal method called for opening modal window
  openModal() {
    this.setState({
      modalIsOpen: true,
      component:"map"
    });
   
  }

  //open modal method called for opening modal window
  closeModal() {
    this.setState({
      modalIsOpen: false,

    });

   
  }

  //this methods closes the modal Window 
 //and save user Defined Data and renders the table
  saveData(e) {
      this.setState({
         modalIsOpen: false
      });

    this.props.ColumnUpdate(this.state.columns);
    this.props.componentUpdate(this.state.component);
    this.props.chartDataUpadte(this.state.chartData);

    if(this.state.component ==="stats"){
       this.props.statusDataUpadte(true);
    }
    if(this.state.component ==="map"){
       this.props.mapDataUpadte(true);
    }
   
  }
  //get require fields to render the reuqest component
  getComponent(e){
    let value = e.currentTarget.value;
    this.setState({
     component:value
   });
   
  }
  chartDataUpadte(chartData) {
   this.setState({chartData:chartData});
   this.props.chartDataUpadte(chartData);
  
  }




//get the user input for columns and generate Column Name and Data Type fields dynamically
  getColumnCount(e) {
    let count = e.target.value;
    let columnName;

    
   var columns = []
    //adding default column details
    for (var i = 0; i < count; i++) {
      columnName = 'Column' + (i + 1);

      columns.push({
        columnName: columnName,
        id: i + 1
      });
    }
    

    this.setState({
      columns:columns,
      columnCount: count
    });
  }

// renders the modal Window 
// calls and renders Table component once user saves the configuration changes
  render() {
  
    return (
    
      <Modal 
        isOpen = {this.state.modalIsOpen} 
        onAfterOpen = { this.afterOpenModal}
        onRequestClose = {this.closeModal} 
        style = { customStyles}
      >

     <div className="modal-body"> 
        <h2 className = "header" ref = {subtitle => this.subtitle = subtitle} > 
            Choose layout 
         </h2>
        <form className = "formDetails">
           <p> 
           <label><b>Component</b></label>
            <select onChange = {this.getComponent}>
             <option value="map">Map</option>
             <option value="table">Table</option>
             <option value="stats">Stats</option>
             <option value ="chart">Chart</option>
           </select>
           </p>
    
        {
         (this.state.component === "table")
          ? <div> 
             <p> 
           <label> <b> Number of columns </b> </label>
             <input onChange={this.getColumnCount.bind(this)} / >
             </p>
             {
                (this.state.columnCount > 0)
                ? <h4> Choose names of the columns </h4>
                :<div></div >
              }

             {
              this.state.columns.map((item,i) =>(
              <ColumnSet key={i} columns={this.state.columns} columnDetails={item} count={this.state.columnCount}/>
              ))
             }
             </div>

            :null
          }

          {
           (this.state.component === "chart")
            ?<FileUpload chartDataUpadte={this.chartDataUpadte.bind(this)}/>
            :null
          }
             
        < /form> 
       
        <div className = "footer">
             < button className = "done" onClick = { this.saveData}> Done < /button> 
             <button className = "cancel" onClick = {this.closeModal} > Cancel < /button> 
        </div>
          </div>
       </Modal> 


     
      );
    }
  }
  export default ModalLayout;