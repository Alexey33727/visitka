import React from 'react'

const About = () => {
    return (
        <div className='About'>
            <h1>About Me</h1>
            <div className='block'>
                <div className='img_block'>
                    <img src="" alt="" />
                </div>
                <div className='text'>
                    <h1>Alexey Smirnov</h1>
                    <p className='bio'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione minus, in laudantium rem perspiciatis, doloremque ab quibusdam amet quos laboriosam modi quo eum, ad quae error exercitationem ex neque hic!</p>
                    <div className='tab'>
                        <div className='st'>
                            <p><span>Birthday:</span> 10 October 2008</p>
                            <p><span>Website:</span> https://</p>
                            <p><span>Phone:</span> +7 987 192 4666</p>
                            <p><span>Study:</span> Synergy Univercity</p>
                        </div>
                        <div className='st'>
                            <p><span>Dgree:</span> Course</p>
                            <p><span>Gmail:</span> lorfi119@gmail.com</p>
                            <p><span>VK:</span> @smirnovlyosha</p>
                            <p><span>Freelance:</span> Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About