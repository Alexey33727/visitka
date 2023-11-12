const Portfolio = () => {
    return (
        <div className='Portfolio'>
            <h1>Portfolio</h1>
            <p>Some Of My Creative Work</p>
            <div className="grid_Port">
                <img style={{gridArea: 'first'}} src="" alt="" />
                <img style={{gridArea: 'second'}} src="" alt="" />
                <img style={{gridArea: 'third'}} src="" alt="" />
                <img style={{gridArea: 'four'}} src="" alt="" />
                <img style={{gridArea: 'five'}} src="" alt="" />
                <img style={{gridArea: 'six'}} src="" alt="" />
            </div>
        </div>
    )
}

export default Portfolio