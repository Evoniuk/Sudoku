import React from 'react';
import Place from './Place';

export default function Row(props) {
  const places = Array(9).fill().map((_, column) => <Place
    state={props.state}
    row={props.row}
    column={column}
    colors={props.colors}
    handleClick={props.handleClick}
    key={column} // just to stop react complaining
  />);

  return <div style={{display: 'flex'}}>{places}</div>
}
