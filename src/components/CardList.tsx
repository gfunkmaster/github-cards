import Card from './Card'
import React from 'react'

export const CardList = (props:any): any => {
    return (
      /* mapping throgh array */
      <div>
        {props.profiles.map((profile: any, index: number) => (
          <Card key={index} {...profile} />
        ))}
      </div>
    );
}
