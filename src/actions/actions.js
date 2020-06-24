import { bindActionCreators } from "redux";

const { default: AddedFeature } = require("../components/AddedFeature");

export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = feature=>{
    console.log('addFeature');
    console.log(feature);
    return {type: ADD_FEATURE, payload: feature};
}

export const removeFeature= feature=>{
    console.log('removeFeature');
    return {type: REMOVE_FEATURE, payload: feature};

}
