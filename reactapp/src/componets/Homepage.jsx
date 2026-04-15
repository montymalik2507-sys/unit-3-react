import React from 'react'

function Homepage() {
    const loggedin = true;
    if (loggedin) {
        return ( 
            <button style={{backgroundColor:"blue",color:"white",width:"100px",height:"30px"}}>Logout</button>
        )
    } else {
        return (
            <button style={{backgroundColor:"green",color:"white",width:"100px",height:"30px"}}>Login</button>
        )
    }

  
}

export default Homepage

// class Homepage extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Homepage</h1>
//             </div>
//         )
//     }
//     componentDidMount() {
//         console.log("Component did mount")
//     }
//     shouldComponentUpdate(nextProps, nextState  ) {
//         if (nextState.count===1) {
//             return false;
//         }   
//         console.log("Should component update")
//         return true;
//     }   
//     componentDidUpdate() {
//         console.log("Component did update")
//     }
// }


// export default Homepage