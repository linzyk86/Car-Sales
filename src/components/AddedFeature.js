import React from 'react';
import {connect} from 'react-redux';
import {removeFeature} from '../actions/actions';
import {initialState} from '../reducers/reducer';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => {   
            props.removeFeature(props.feature);
          }} 
          className="button">X</button>
      {props.feature.name}
    </li>
  );
};
//Defines what values our component reads from application store
const mapStateToProps = state => {
 return {
   feature: state.additionalFeatures.name,
  };
};

//Defines what actions our component calls to update store
const mapDispatchToProps = { removeFeature};//actions

export default connect(mapStateToProps, mapDispatchToProps
)(AddedFeature);


//export default AddedFeature;