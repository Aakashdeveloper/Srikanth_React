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