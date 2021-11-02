import React from "react";
import Band from "./Band"
import { connect } from "react-redux"
import { render } from "enzyme";

const Bands = (props) => {
  const renderBands = () => {
    props.bands.map((band) => {
      <Band deleteBand={props.deleteBand} key={band.id} band={band} />
    })
  }

  console.log(props)
    return (
      <div>{renderBands()}</div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBand: name => dispatch({type: "DELETE_BAND", name: name})
  }
}

export default connect(null, mapDispatchToProps)(Bands)