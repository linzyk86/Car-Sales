import React from 'react';
import AdditionalFeatures from './AdditionalFeatures';
import {connect} from 'react-redux';
import {addFeature} from '../actions/actions';

const AdditionalFeature = props => {
  return (
    <li><button onClick={() => {
            props.addFeature(props.feature);
          }}className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
      
    </li>
  );
};

////Defines what values our component reads from application store
const mapStateToProps = state => {
 return {
   //feature: state.additionalFeatures,
  };
};
//Defines what actions our component calls to update store
const mapDispatchToProps = { addFeature };//actions

export default connect(mapStateToProps, mapDispatchToProps
)(AdditionalFeature);

// export default AdditionalFeature;


//  {props.feature.name} (+{props.feature.price})was ln 9