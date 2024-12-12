
import * as actions from './actions'
export const initialState={
    SystemConfig: {profile:true,menus:[{id:1,displayText:'Home',targetPath:"/home"},{id:2,displayText:'Movies',targetPath:"/movies"},{id:3,displayText:'Sports',targetPath:"/sports"}]},
    SystemFeature: null,
    Location: null,
    Session: null,
    NotificationBar: null,
    PageData: {},
    PageRefresh: false,
    userDetails: null,
    navigateFrom:null,
    profileUtil:null,
    packageUtil:null,
    isloggedin: null,
    paymentResponse:null,
    playerUtils: null,
    shakaCardHoverState:false,
    SystemLanguages: null
}


export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actions.SystemConfig :return {...state,SystemConfig:action.payload};
        case actions.SystemFeature :return {...state,SystemFeature:action.payload};
        case actions.PageRefresh :return {...state,PageRefresh:action.payload};
        case actions.userDetails :return {...state,userDetails:action.payload};
        case actions.SystemLanguages :return {...state,SystemLanguages:action.payload};
        case actions.isloggedin :return {...state,isloggedin:action.payload};
    }

}