import React from 'react'

function Prop(x) {
  return (
    <div>
      {x.name}
      {x.age}
      {x.cors}
    </div>
  )
}

Prop.defaultProps = {
        name:"html",
        age:"200",
        cors:"WD"
        
}

export default Prop;
