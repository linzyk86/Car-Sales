import React from 'react';
import AdditionalFeatures from './AdditionalFeatures';
import {connect} from 'react-redux';
import {addFeature} from '../actions/actions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      {props.feature.name} (+{props.feature.price})

      <button onClick={() => {
            props.addFeature(props.addFeature);
          }}
          className="button">Add</button>
    </li>
  );
};

////Defines what values our component reads from application store
const mapStateToProps = state => {
 return {
   feature: state.additionalFeatures,
  };
};
//Defines what actions our component calls to update store
const mapDispatchToProps = { addFeature };//actions

export default connect(mapStateToProps, mapDispatchToProps
)(AdditionalFeature);

// export default AdditionalFeature;


//  {props.feature.name} (+{props.feature.price})was ln 9