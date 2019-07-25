import React from 'react'
import {connect} from 'react-redux'

class ItemDetail extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    let {item} = this.props
    item = item ? item : {name: "", price: "", happiness: "", image_url: ""}
    return (
      
        <div className="stats">
          <h1 >Name: {item.name}</h1>
          <br/>
          <h1 > Price: {item.price}</h1>
          <br/>
          <h1 >Happiness: {item.happiness}</h1>
        </div>

    )
    
  }
}

const mSP = (state, ownProps) => {
   const itemId = ownProps.match.params.itemId
   return {
     item: state.entities.items[itemId]
   }
}

export default connect(mSP)(ItemDetail)