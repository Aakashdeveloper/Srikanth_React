import { BaseUrl } from '../contants/ApiUrl';

export function latestNews(){
    const request = fetch(`${BaseUrl}/articles?_end=3`,
            {method:'GET'})
            .then(response => response.json());

    return{
        type:'GET_LATEST',
        payload:request
    }
}

export function otherNews(){
    const request = fetch(`${BaseUrl}/articles?_start=3&_end=10`,
            {method:'GET'})
            .then(response => response.json());

    return{
        type:'GET_OTHER',
        payload:request
    }
}


export function latestGallery(){
    const request = fetch(`${BaseUrl}/galleries?_limit=2`,
            {method:'GET'})
            .then(response => response.json());

    return{
        type:'GET_GALLERY',
        payload:request
    }
}

///////////////////////////

export function selectedNews(id){
    const output = fetch(`${BaseUrl}/articles?id=${id}`,
        {method:'GET'})
        .then(response => response.json());
    
    return{
        type:'GET_SELECTED_NEWS',
        payload:output
    }

}


export function clearSelectedNews(){
    return{
        type:'CLEAR_SELECTED_NEWS',
        payload: []
    }
}


export function selectedGalley(id){
    const output = fetch(`${BaseUrl}/galleries?id=${id}`,
        {method:'GET'})
        .then(response => response.json());
    
    return{
        type:'GET_SELECTED_GALLERY',
        payload:output
    }

}


export function clearSelectedGallery(){
    return{
        type:'CLEAR_SELECTED_GALLERY',
        payload: []
    }
}


////////////

export function handleLikes(array,id,section,type){
    const output = fetch(`${BaseUrl}/${section}/${id}`,{
        method: 'PATCH',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({likes:array})
    })
    .then(response => response.json())

    return{
        type:type,
        payload:output
    }
}