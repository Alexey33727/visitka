import React from 'react'

const Contacts = () => {
    return (
        <div className='Contact'>
            <h1>Contact</h1>
            <div className="cards">
                <div className="card">
                    <div className='ico'><ion-icon name="call-outline"></ion-icon></div>
                    <div className='text'>
                        <p className='h1'>Phone number</p>
                        <p>+7 987 192 4666</p>
                    </div>
                </div>
                <div className="card">
                    <div className='ico'><ion-icon name="mail-outline"></ion-icon></div>
                    <div className='text'>
                        <p className='h1'>Email Address</p>
                        <p>lorfi119@gmail.com</p>
                    </div>
                </div>
                {/* <div className="card">
                    <div className='ico'><ion-icon name="location-outline"></ion-icon></div>
                    <div className='text'>
                        <h1>Email Address</h1>
                        <p>lorfi119@gmail.com</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Contacts