import axios from 'axios';

export function getCountries() {
    return async function (dispatch) {
      try {
        const res = await axios.get("http://localhost:3001/countries");
        console.log(res)
        return dispatch({ type: "GET_COUNTRIES", payload: res.data });
      } catch (error) {
        console.log(error);
      }
    };
  }

  export function getActivity() {
    return async function(dispatch){
      try {
        var json = await axios.get('http://localhost:3001/activity');
        return dispatch ({
          type: "GET_ACTIVITIES",
          payload: json.data
        })
      }  catch(error) {
        console.log(error)
    }
    }
  }
  
  export function getByCon(data) {
    return { type: "GET_BY_CON", payload: data};
  }
  
  export function getByAct(data) {
    return { type: "GET_BY_ACT", payload: data};
  }
  
  export function getByArea(data) {
    return { type: "GET_BY_AREA", payload:data};
  }

  export function filterPoplulation() {
    return {
      type: 'FILTER_BY_POPULATION',
    }
  }

  export function orderByName(payload) {
    return {
      type: 'ORDER_BY_NAME',
      payload
    }
  }

  export function reversePopulation() {
    return {
      type: 'INVERT',
    }
  }


  export function postActivity(payload) {
     return async function (dispatch) {
       const response = await axios.post('http://localhost:3001/activity', payload)
       console.log(response)
       return response;
     }
  }

  export function getNameCountries(name) {
     return async function (dispatch) {
       try{
         var json = await axios.get("http://localhost:3001/country?name=" + name);
         return dispatch ({
           type: 'GET_NAME_COUNTRY',
           payload: json.data
         })
       } catch(error) {
         console.log(error)
       }
     }
  }

  export function getDetail(id) {
    return async function(dispatch){
      try {
        var json = await axios.get(`http://localhost:3001/countrie/${id}`);
        return dispatch ({
          type: "GET_DETAIL",
          payload: json.data
        })
      }  catch(error) {
        console.log(error)
    }
    }
  }