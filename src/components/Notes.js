import React from 'react';

export default function Notes(props) {
  const notes = Array(9).fill()
    .map((_, num) => props.notes.has(num + 1) ? num + 1 : 0)
    .map((num, i) => <div key={i}>{num ? num : ''}</div>);

  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    width: '100%',
    height: '100%',
    fontSize:'9px',
    justifyItems: 'center',
    alignItems: 'center',
  }

  return <div style={style}>{notes}</div>
}
