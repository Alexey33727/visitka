import React from 'react'

const Service = () => {
    return (
        <div className='Service'>
            <h1>Why Choose Us</h1>
            <p>Our Work Services</p>
            <div className='flex'>
                <div className='card'>
                    <div>
                        <ion-icon name="color-palette-outline"></ion-icon>
                        <p className='h1'>Computer Grafics</p>
                        <p className='text'>A way to create graphic images and visual information using special programs. The concept of computer graphics exists at the intersection of design and art, combining classical drawing and modern technology. Computer graphics are the result of human-machine interaction.</p>
                    </div>
                    <button><ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
                <div className='card'>
                    <div>
                        <ion-icon name="code-slash-outline"></ion-icon>
                        <p className='h1'>Web Development - frontend</p>
                        <p className='text'>This is the creation of the external interface of websites and applications. For a frontend developer, it is important that users can easily find everything they need on the site. For example, read the details about the product, learn about its advantages, read reviews, watch videos and make a purchase.</p>
                    </div>
                    <button><ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
                <div className='card'>
                    <div>
                        <ion-icon name="git-compare-outline"></ion-icon>
                        <p className='h1'>Web Development - backend</p>
                        <p className='text'>This is the part of programming that is responsible for the server side and provides the functionality and logic of the web application. Including data processing, user authentication, and server configuration.</p>
                    </div>
                    <button><ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
                <div className='card'>
                    <div>
                        <ion-icon name="server-outline"></ion-icon>
                        <p className='h1'>BD Developer</p>
                        <p className='text'>In the same instance, it is mandatory to do so for company data safe-keeping records as well as administering business processes in a balanced format.</p>
                    </div>
                    <button><ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
            </div>
        </div>
    )
}

export default Service