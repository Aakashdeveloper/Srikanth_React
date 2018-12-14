import React from 'react';

const NEWSLIST = (props) => {

    const items = props.newsdata.map((data, index) => {
        return(
            <div key={index}>
                <h2>{index}</h2>
                <h3>{data.title}</h3>
                <div>
                    {data.feed}
                </div>
            </div>
        )
    })

    return(
        <div>
        {items} 
        </div>
    )
}

export default NEWSLIST;