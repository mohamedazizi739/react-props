import React from "react"
import PropTypes from 'prop-types';
const Prop=props=>{
const {name, bio, profession, func}=props
return(
 <div>
 <h1>{name}</h1>
 <h2>{bio}</h2>
 <h3>{profession}</h3>
 <p>{props.children}</p>
 <button onClick={()=>func(name)}>cliquer ici</button>
 </div>
)
}
Prop.propTypes = {
  name: PropTypes.string
};
export default Prop