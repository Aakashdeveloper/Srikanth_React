import React, { Component} from 'react';

class PostDetail extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div  className="container">
                 <div class="panel panel-warning">
                    <div class="panel-heading">Posts Detail</div>
                    <div class="panel-body">Posts Detail Content for {this.props.match.params.id} </div>
                </div>
            </div>
        )
    }

}

export default PostDetail;