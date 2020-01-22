import React from "react";
import "./App.css";
import Image from "./components/Image";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUrl: "https://i.imgflip.com/25q1ve.jpg"
    };
  }
  render() {
    return (
      <div className="App">
        <Image imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}
export default App;





// import React, { Component } from "react";
// import "./App.css";
// import Image from './components/Image'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Image
//         url= {'https://cdn.vox-cdn.com/thumbor/Or0rhkc1ciDqjrKv73IEXGHtna0=/0x0:666x444/1200x800/filters:focal(273x193:379x299)/cdn.vox-cdn.com/uploads/chorus_image/image/59384673/Macaca_nigra_self-portrait__rotated_and_cropped_.0.jpg'}/>

//       </div>
//     );
//   }
// }
// export default App;
