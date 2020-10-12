import { setApiData } from '../reducer/app/appActions'

export const fetchAPI = (
    _APIUrl,
    header,
    HTTPMethod,
    data
  ) => async dispatch => {
    let APIUrl = _APIUrl;
    const headers = getHeaderForAPICall(header);
    const restArguments = {
      headers,
      method: HTTPMethod,
    };
  
    if (HTTPMethod === 'POST') {
      restArguments.body = JSON.stringify(data);
      restArguments.credentials = 'include';
    } else if (HTTPMethod === 'GET') {
      if (data != null) {
        const queryString = convertJsonToQS(data);
        APIUrl = `${APIUrl}?${queryString}`;
      }
    }
  
    try {
      let response = await fetch(APIUrl, restArguments);
      response = await response.json();
      return response;
    } catch (err) {
      console.error(err);
      return null;
    }
};

export function getHeaderForAPICall(headerToMerge) {
    const defaultHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    let headersToMerge = {};
    if (typeof headerToMerge === 'object') headersToMerge = headerToMerge;
  
    return Object.assign({}, defaultHeader, headersToMerge);
}

export function getApiCall(apiurl, dataToPost, ownProps) {
    return dispatch => {
      if (dataToPost) {
        var queryString = convertJsonToQS(dataToPost);
  
        fetch(`${apiurl}?${queryString}`, {
            method: 'GET',
            headers: getHeaderForAPICall()
          })
          .then((response) => response.json())
          .then((responseJson) => {
            if (!responseJson.errors) {
                dispatch(setApiData(responseJson));
                return responseJson;
            } else {
                //a popup          
             // return catchAPIFetchError(errorMsgJSON,"SHOW_COMMON_DISPLAY_POPUP_AS"); 
            }
          })
          .catch((error) => {
                return null;       
            //return catchAPIFetchError(errorMsgJSON,"SHOW_COMMON_DISPLAY_POPUP_AS");  
          })
      }
    }
}

export function postApiCall(apiUrl, data, ownProps) {
    return dispatch => {
      return fetch(apiUrl, {
          method: 'POST',
          headers: getHeaderForAPICall(),
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            dispatch(setApiData(data));
          return data;
        })
        .catch(function (error) {    
          return null;
        })
    }
  }