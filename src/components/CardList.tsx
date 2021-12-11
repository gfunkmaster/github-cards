import Card from './Card'
import Form from './Form';
import Profile from "../interface";
import React from 'react'

export const CardList = (props:any): any => {
    return (
        /* mapping throgh array */
      <div>
      {props.profiles.map((profile: any) => <Card  {...profile}/>)}
      </div>
    );
}
