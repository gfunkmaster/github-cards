import React from 'react'

const Card = (props: any): any => {
    const profile: any = props;
    
    return (
      <>
        <div className="github-profile">
          <img src={profile.avatar_url} alt={profile.name} />
          <div className="info">
            <div className="name">{profile.name}</div>
            <div className="company">{profile.company}</div>
          </div>
        </div>
      </>
    );
}

export default Card
