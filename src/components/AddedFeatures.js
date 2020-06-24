import React from 'react';
import {connect} from 'react-redux';
import AddedFeature from './AddedFeature';

export const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};
//Defines what values our component reads from application store
const mapStateToProps = state => {
 return {
   features: state.features,
   car: state.car
  };
};

//Defines what actions our component calls to update store
const mapDispatchToProps = { };//actions

export default connect(mapStateToProps, mapDispatchToProps
)(AddedFeatures);


//export default AddedFeatures;
