// // import Navbar from "./components/Navbar";
// // import Main from "./components/Main";
// // import Sidebar1 from "./components/Sidebar1";
// // import Sidebar2 from "./components/Sidebar2";
// // import Footer from "./components/Footer";
// // const App=()=>{
// //     return(
// //         <div className="app">
// //             <Navbar/>
// //             <Main></Main>
// //             <div className="sidebar">
// //                 <Sidebar1/>
// //                 <Sidebar2/>
// //             </div>
// //             <Footer/>
            
// //         </div>
// //     )

// // }

// // export default App;

// // import React, { Component } from 'react'
// // import CBCPropsex1 from './propsexample/CBCPropsex1';

// // class App extends Component {
// //     render() {
// //         return (
// //             <div>App
// //                 <hr />
// //                 <CBCPropsex1
// //                 username="Sam"
// //                 age={25}
// //                 desig={{city:"Hyd" , area:"Maisammaguda"}}
// //                 sendFun={function(){alert("hi i m from parent component")}}
// //                 />

// //             </div>
// //         )
// //     }

// // }
// // export default App;

// // ! FBC
// // import React from 'react'
// // import FBCPropex1 from './propsexample/FBCPropex1';

// // const App = () => {
// //     return (
// //         <div>
// //             <FBCPropex1
// //             username="Tarun"
// //             isLoggedIn={true}
// //             hobbies={["Roaming" , "Watching movies" , "travel" , "studies"]}
// //             />

// //         </div>
// //     )

// // }
// // export default App

// // ! props children example

// import React from 'react'
// import PropsChildrenEx from './propsexample/PropsChildrenEx'
// import ChildProps from './propsexample/ChildProps'

// const App = () => {
//     return (
//         <div>
//              <PropsChildrenEx username="Prashanth" company="TCS">
//                 <h1>this is app </h1>
//                 <ChildProps/>
//              </PropsChildrenEx>
//         </div>
//     )
// }

// export default App;

import React from 'react';
import formModule from './formModule.css'
import MyForm from "./components/MyForm";

const App=()=> {
    return (
        <div>
            <MyForm username="Prashanth" email='bvprasanth2004@gmail.com' password='12345' gender="Male" address='Mainbazar'>
                <h1>this is app</h1>
            </MyForm>
        </div>
    )

}
export default App;
  
