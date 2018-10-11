import React, { Component } from 'react';

export class Info extends Component {
    render(){
        return(
            <div>
                {console.log('our URL' ,window.location.href.substr(window.location.href.lastIndexOf('/') + 1))}
                    
                {Object.keys(this.props.languageNow.locationsList).map((item, i) =>
                    (window.location.href.substr(window.location.href.lastIndexOf('/') + 1)===item && 
                    <li className="locationsList-List" >
                       {this.props.languageNow.locationsList[item].lable}
                       <br></br>  <br></br>
                       {this.props.languageNow.locationsList[item].description}
                       <br></br>   <br></br> 
                       <button onClick={() => {this.props.history.push(`/locationsList`)}}>back</button>
                       <br></br><br></br>    
                    </li>
                    )
                )}
            </div>
        )
    }
}

























// console.log(Object.values(this.props.languageNow.locationsList),77777)}{



// export const Info = ({ match }) => {
    //     const Thisinfo = (Object.values(this.props.languageNow.locationsList)).find(location => location.lable === match.params.lable);
    
    // return (
        //     <div dir={this.props.direction}>
        //            <h3> 
        //                {match.params.label}
        //            </h3>
//            <p>{Thisinfo.description}</p>
        {/* {Object.keys(this.props.languageNow.locationsList).map((item, i) =>
                    
                    <li className="locationsList-List" >
                       {this.props.languageNow.locationsList[item].lable}
                       <br></br>  <br></br>
                       {this.props.languageNow.locationsList[item].description}
                       <br></br>   <br></br> 
                       <button onClick={() => {this.props.history.push(`/locationsList`)}}>back</button>
                       <br></br><br></br>    
                    </li>
                )} */}
//     </div>
// );
//             }
