const initialState = {
    name: '',
    address: '',
    city: '',
    usState: '',
    zipcode: '',
    imageUrl: '',
    monthlyMortgageAmount: '',
    desiredMonthlyRent: ''
}

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_USSTATE = "UPDATE_USSTATE";
const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
const UPDATE_IMAGE_URL = "UPDATE_IMAGE_URL";
const UPDATE_MONTHLY_MORTGAGE_AMOUNT = "UPDATE_MONTHLY_MORTGAGE_AMOUNT";
const UPDATE_DESIRED_MONTHLY_RENT = "UPDATE_DESIRED_MONTHLY_RENT";

export function updateName(name){
    return{
        type: UPDATE_NAME,
        payload: name
    }
}
export function updateAddress(address){
    return{
        type: UPDATE_ADDRESS,
        payload: address
    }
}
export function updateCity(city){
    return{
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateUsState(usState){
    return{
        type: UPDATE_USSTATE,
        payload: usState
    }
}
export function updateZipcode(zipcode){
    return{
        type: UPDATE_ZIPCODE,
        payload: zipcode
    }
}
export function updateImageUrl( imageUrl ){
    return{
        type: UPDATE_IMAGE_URL,
        payload: imageUrl
    }
}
export function updateMonthlyMortgageAmount( monthlyMortgageAmount ){
    return{
        type: UPDATE_MONTHLY_MORTGAGE_AMOUNT,
        payload: monthlyMortgageAmount
    }
}
export function updateDesiredMonthlyRent( desiredMonthlyRent ){
    return{
        type: UPDATE_DESIRED_MONTHLY_RENT,
        payload: desiredMonthlyRent
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_NAME:
            console.log('name: '+ action.payload )
            return Object.assign({}, state, {name: action.payload})
        case UPDATE_ADDRESS:
            return Object.assign({}, state, {address: action.payload})
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload})
        case UPDATE_USSTATE:
            return Object.assign({}, state, {usState: action.payload})
        case UPDATE_ZIPCODE:
            return Object.assign({}, state, {zipcode: action.payload})
        case UPDATE_IMAGE_URL:
            return Object.assign({}, state, {imageUrl: action.payload})
        case UPDATE_MONTHLY_MORTGAGE_AMOUNT:
            return Object.assign({}, state, {monthlyMortgageAmount: action.payload})
        case UPDATE_DESIRED_MONTHLY_RENT:
            return Object.assign({}, state, {desiredMonthlyRent: action.payload})

        default: 
        return state;
    }
}

export default reducer;
