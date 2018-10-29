import React, { Component } from 'react';
import Camera from 'react-dom-camera';
 

  export class Photo extends Component{
    render(){
      return(
        <Camera
          onTakePhoto={image =>
            console.log(image, 'do whatever you want with the image')
          }
        />

    );
  }
}