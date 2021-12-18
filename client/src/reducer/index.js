const initialState = {
    countries : [],
    activities: [],
    population: [],
    detail: [],
    continents: [],
    allCountries: [],
    filtrados: [],
    area: []
}

function rootReducer (state= initialState, action) {
    switch(action.type) {
        case 'GET_COUNTRIES':
            const con = new Set(action.payload.map((e) => e.continents));
            return {
                ...state,
                countries: action.payload,
                continents: Array.from(con),
                allCountries: action.payload,
                filtrados: action.payload
            }
        case 'GET_BY_CON':
            return {
                ...state,
                filtrados: [...state.allCountries].filter((d) =>
                d.continents.includes(action.payload)
              ),
            }
            case 'GET_BY_ACT':
                return {
                    ...state,
                    filtrados:[...state.countries].filter((country) =>
                    country.activities?.find((e) => e.name.includes(action.payload))
                  ),
                }
        case 'GET_ACTIVITIES':
            return {
                ...state,
                activities: action.payload
            }
        case "GET_BY_AREA":
            return {
                ...state,
                filtrados: [...state.filtrados].sort(function (a, b) {
                    if (Number(a.area) > Number(b.area)) {
                        return 1;
                    }
                    if (Number(b.area) > Number(a.area)) {
                        return -1;
                } 
                return 0
              })
            }
            case 'FILTER_BY_POPULATION':
                return {
                    ...state,
                    filtrados: [...state.filtrados].sort(function (a, b) {
                        if (Number(a.population) > Number(b.population)) {
                            return 1;
                        }
                        if (Number(b.population) > Number(a.population)) {
                            return -1;
                        }
                        return 0
                    })
                }
            case 'GET_NAME_COUNTRY':
                return {
                    ...state,
                    filtrados: action.payload
                }
    
            case 'ORDER_BY_NAME':
                return {
                    ...state,
                    filtrados: [...state.filtrados].sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (b.name > a.name) {
                            return -1;
                        }
                        return 0
                    })
                }
            case 'POST_ACTIVITY':
                    return {
                        ...state,
                    }
            case 'GET_DETAIL':
                return {
                    ...state,
                    detail: action.payload
                }
                default:
                return state;
            case 'INVERT':
                return {
                  ...state,
                  filtrados: [...state.filtrados].reverse()
                }
    } 
}

export default rootReducer;