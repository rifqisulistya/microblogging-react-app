import React from 'react';

class Carousel extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (			
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img class="first-slide" src="./file/basket.jpg" alt="First slide"/>
						<div class="container">
							<div class="carousel-caption text-left">
								<h1>Independent Striver.</h1>
								<p>Striving for independency in all aspects of life.</p>
								<p><a class="btn btn-lg btn-primary" href="#subscribe" role="button">Subscribe now</a></p>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<img class="second-slide" src="./file/gor.jpg" alt="Second slide"/>
						<div class="container">
							<div class="carousel-caption">
								<h1>Be confident</h1>
								<p>Show your work and be the best version of yourself..</p>
								<p><a class="btn btn-lg btn-primary" href="#" role="button" id="profile">Learn more</a></p>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<img class="third-slide" src="./file/sepeda.jpg" alt="Third slide"/>
						<div class="container">
							<div class="carousel-caption text-right">
								<h1>Faster, Better</h1>
								<p>Be afraid of nothing. give more to earn more.</p>
								<p><a class="btn btn-lg btn-primary" href="#blog" role="button">Browse gallery</a></p>
							</div>
						</div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
		);
	}	
}	
export default Carousel; 