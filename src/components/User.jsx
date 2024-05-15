import React from 'react';
const user={
    name : "Net the beauty",
    nameUrl:"https://i.imgur.com/yXOvdOSs.jpg",
    imageSize:90
}

const User = () => {
    return (
        <div>
            <h1>{user.name}</h1>
            <img src={user.nameUrl} style={{
                width:user.imageSize,
                widows:user.imageSize
            }}/>
        </div>
    );
};

export default User;