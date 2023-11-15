const Portfolio = () => {
    return (
        <div className='Portfolio'>
            <h1>Portfolio</h1>
            <p>Some Of My Creative Work</p>
            <div className="grid_Port">
                <img style={{ gridArea: 'first' }} src="" alt="" />
                <img style={{ gridArea: 'second' }} src="" alt="" />
                <img style={{ gridArea: 'third' }} src="" alt="" />
                <img style={{ gridArea: 'four' }} src="" alt="" />
                <img style={{ gridArea: 'five' }} src="" alt="" />
                <img style={{ gridArea: 'six' }} src="" alt="" />
            </div>
            <div id="carouselExampleIndicators" class="carousel slide size">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://podmoskoviegid.ru/wp-content/uploads/2023/01/1.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://podmoskoviegid.ru/wp-content/uploads/2023/01/1.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://podmoskoviegid.ru/wp-content/uploads/2023/01/1.jpg" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Portfolio