import React from "react";

function Image(props) {
  return (
    <div>
      <img src={props.imageUrl} />
    </div>
  );
}
export default Image;





// import React, { Component } from 'react'

// export default class Image extends Component {
//     render() {
//         return (
//             <div>
//                 <img width="300px" src={this.props.url}/>
//                 <p>Hello 🐒</p>

//             </div>
//         )
//     }
// }
