import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './App.css'

class Drop extends Component {

  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    const files = document.getElementById('files')
    acceptedFiles.map(acceptedFile => (
    files.innerHTML +=` <li class="file-item">
    ${acceptedFile.name}
  </li>`
    ))
  }
  

  render() {
   
    return (
      <div id="dropzone" className="text-center mt-5">
        <Dropzone onDrop={this.onDrop}
        multiple>
            {({getRootProps, getInputProps, isDragActive}) => (
                <div id="dropzone2" {...getRootProps()}>
                <input  {...getInputProps()} />
                {isDragActive ? "Drop it like it's hot!" : 'Click me or drag a file to upload!'}
                </div>
            )}
        </Dropzone>
        <div id="files" className="list-group mt-2"></div>
      </div>
    );
  }
}
  
  export default Drop;