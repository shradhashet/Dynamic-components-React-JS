import React from 'react';
  class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      chartData:[]
    };
  }

  _handleFileChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = (e) => {
    var jsonObj=[];
     jsonObj = JSON.parse(e.target.result);
      this.setState({
        file: file,
        chartData:jsonObj
      });
      this.props.chartDataUpadte(jsonObj);
    }

    reader.readAsText(file)
  }

  render() {
   

    return (
      <div className="upload-data">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleFileChange(e)} />
        </form>
        
      </div>
    )
  }
}
  
export default FileUpload