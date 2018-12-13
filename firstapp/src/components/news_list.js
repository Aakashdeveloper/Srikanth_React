import React from 'react';

const NEWSLIST = (props) => {
    console.log(props)
    return(
        <div>{props.newsdata[0].title} </div>
    )
}

export default NEWSLIST;