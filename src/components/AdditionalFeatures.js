import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

////Defines what values our component reads from application store
const mapStateToProps = state => {
 return {
   additionalFeatures: state.additionalFeatures,
   feature: state.feature
  };
};
//Defines what actions our component calls to update store
const mapDispatchToProps = {};//actions

export default connect(mapStateToProps, mapDispatchToProps
)(AdditionalFeatures);


//export default AdditionalFeatures;
