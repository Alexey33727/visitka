import React from 'react'

const Resume = () => {
    return (
        <div className='Resume'>

            <div className='sec'>
                <h1 className='h1'>Resume</h1>
                <p className='p'>Skills & Experience</p>
                <div className='block'>
                    <div className='text'>
                        <p>React</p>
                        <p>80%</p>
                    </div>
                    <div className='proc'><span style={{ width: '80%' }} className='line'></span></div>
                </div>
                <div className='block'>
                    <div className='text'>
                        <p>Django</p>
                        <p>60%</p>
                    </div>
                    <div className='proc'><span style={{ width: '60%' }} className='line'></span></div>
                </div>
                <div className='block'>
                    <div className='text'>
                        <p>Express</p>
                        <p>30%</p>
                    </div>
                    <div className='proc'><span style={{ width: '30%' }} className='line'></span></div>
                </div>
                <div className='block'>
                    <div className='text'>
                        <p>Vue</p>
                        <p>50%</p>
                    </div>
                    <div className='proc'><span style={{ width: '50%' }} className='line'></span></div>
                </div>

            </div>
            <div className='img_block'>
                    <img src="" alt="" />
            </div>
        </div>
    )
}

export default Resume