import React, {Component} from 'react';

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'***Logo***',
            keyword:'No Input'
        }
    }

    inputChanges(event){
        this.setState({keyword: event.target.value})
        this.props.newsSearch(event.target.value)

    }

    render(){
        return(
            <div>
                <header>
                    <div className="logo"
                        onClick={()=>console.log('clicked')}> 
                            {this.state.title}
                        </div>
                    <center>
                        <input onChange={this.inputChanges.bind(this)}/>
                        <p>{this.state.keyword}</p>
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