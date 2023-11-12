import React from 'react'

const Service = () => {
    return (
        <div className='Service'>
            <h1>Why Choose Us</h1>
            <p>Our Work Services</p>
            <div className='flex'>
                <div className='card'>
                    <ion-icon name="color-palette-outline"></ion-icon>
                    <p className='h1'>Computer Grafics</p>
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus a in neque blanditiis at nostrum! Necessitatibus rem alias quod sapiente ullam officia modi vero, enim ad harum? Optio, id!</p>
                    <button><ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
                <div className='card'>
                <ion-icon name="code-slash-outline"></ion-icon>
                    <p className='h1'>Web Development - frontend</p>
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus a in neque blanditiis at nostrum! Necessitatibus rem alias quod sapiente ullam officia modi vero, enim ad harum? Optio, id!</p>
                    <button><ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
                <div className='card'>
                    <ion-icon name="git-compare-outline"></ion-icon>
                    <p className='h1'>Web Development - backend</p>
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus a in neque blanditiis at nostrum! Necessitatibus rem alias quod sapiente ullam officia modi vero, enim ad harum? Optio, id!</p>
                    <button><ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
                <div className='card'>
                    <ion-icon name="server-outline"></ion-icon>
                    <p className='h1'>BD Developer</p>
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus a in neque blanditiis at nostrum! Necessitatibus rem alias quod sapiente ullam officia modi vero, enim ad harum? Optio, id!</p>
                    <button><ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
            </div>
        </div>
    )
}

export default Service