import React from 'react'

const StartedView = () => {
    return (
        <div className='back'>
            <div className="blocks f one"><ion-icon name="logo-nodejs"></ion-icon></div>
            <div className="blocks d two"><ion-icon name="logo-react"></ion-icon></div>
            <div className="blocks f three"><ion-icon name="logo-html5"></ion-icon></div>
            <div className="blocks four"><ion-icon name="logo-css3"></ion-icon></div>
            <div className="circle_one"></div>
            <div className="circle_two"></div>
            <div className="contacts">
                <a rel="noreferrer" target='_blank' href='https://instagram.com/alexeysmirny' className="link"><ion-icon name="logo-instagram"></ion-icon></a>
                <a rel="noreferrer" target='_blank' href='https://github.com/Alexey33727' className="link"><ion-icon name="logo-github"></ion-icon></a>
                <a rel="noreferrer" target='_blank' href='https://vk.com/smirnovlyosha' className="link"><ion-icon name="logo-vk"></ion-icon></a>
            </div>
            <div className="text">
                <p className='well'>welcome My Portfolio</p>
                <h1 className='main_text'>Hello, I‘m Alexey Smirnov <br /> <span>Professional</span> Web-developer</h1>
                <p className='quote'>Web development is the embodiment of ideas in code that turns into functional and beautiful websites. - Emily Joyce</p>
                <button className='hr'>Hire Me</button>
                <button className='dwn'>Download CV</button>
            </div>
        </div>
    )
}

export default StartedView