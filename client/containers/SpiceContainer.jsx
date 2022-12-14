import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreamators } from 'redux';
import { deleteSpice, getSpices, updateAmount } from '../actions/actions.js';
import SpiceDisplay from '../components/SpiceDisplay.jsx';


// do we need to import actions into this component? 

// on mount, make a get request to the database?

// I believe we need to have use mapStateToProps and mapDispatchToProps in this component. then push prop drill them down to SpiceDisplay

const mapStateToProps = state => ({
  spiceRack: state.spices.spiceRack
})

// NEEDS FUNCTIONS FROM 'actions.js' INSIDE 'dispatch()' ONCE THEY HAVE NAMES
const mapDispatchToProps = dispatch => ({
  getSpices : () => dispatch(getSpices()),
  updateSpice : (id) => dispatch(updateAmount(id)),
  deleteSpice : (update) => dispatch(deleteSpice(update))
}) 

const SpiceContainer = (props) => {

  const spiceArray = [];
  props.spiceRack.forEach((spice) => {
    spiceArray.push(<SpiceDisplay name={spice.name} remaining={spice.remaining} containersize={spice.containersize} id={spice.id} updateSpice={props.updateSpice} deleteSpice={props.deleteSpice} key={spice.id}/>)
  })

  return (
    (
      <div className='spice-container'>
        <button onClick={props.getSpices}>Refresh</button>
        {spiceArray}
      </div>
    )
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SpiceContainer);