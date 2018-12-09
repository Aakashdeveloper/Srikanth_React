import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <div>
                <header>
                    <div className="logo"> Logo </div>
                    <center>
                        <input />
                    </center>
                </header>
            </div>
        )
    }
}

export default Header;

/*
const Header = () => {
    return(
        <h1>logo</h1>
    )
}


const styles = {
            header:{
                background:'tomato'
            },
            logo:{
                color: '#fff',
                textAlign: 'center',
                fontSize:'30px'
            }
        }
        return(
            <div>
                <header style={styles.header}>
                    <div style={styles.logo}> Logo </div>
                    <center>
                        <input />
                    </center>
                </header>
            </div>
        )
*/