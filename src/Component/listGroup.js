import React from 'react';


const Listgroup = (props) => {
    const {onClick, genres} = props
    
    return ( 
        <React.Fragment>
            <ul className="list-group">
                  {genres.map(genre=>(                           
                                          <li className="list-group-item"
                                              onClick={()=>onClick(genre._id)}>{genre.name}                                  
                                          </li>
                              ))}
            </ul>
        </React.Fragment>
     );
}
 
export default Listgroup;