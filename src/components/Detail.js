import React from 'react'

function Detail() {

    let cookie
    return (
        <div className="detail">
            {cookie && // if there is cookie show its data 
                <>
                    <h5>{cookie.name}</h5>
                    <img src={cookie.image} alt="cookie" />
                    <p>{cookie.price} KD</p>
                    <p>{cookie.description}</p>
                </>}


        </div>
    )
}

export default Detail
