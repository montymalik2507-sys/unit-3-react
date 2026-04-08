import React from 'react'

// function Homepage() {
    // if (loggedin) {
    //     return ( 
    //         <button>Logout</button>
    //     )
    // } else {
    //     return (
    //         <button>Login</button>
    //     )
    // }
// returnloggedin ? <button>Logout</button> : <button>Login</button>

  
// }

class Homepage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Homepage</h1>
            </div>
        )
    }
    componentDidMount() {
        console.log("Component did mount")
    }
    shouldComponentUpdate(nextProps, nextState  ) {
        if (nextState.count===1) {
            return false;
        }   
        console.log("Should component update")
        return true;
    }   
    componentDidUpdate() {
        console.log("Component did update")
    }
}


export default Homepage