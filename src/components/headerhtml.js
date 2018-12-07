import React from 'react';

class Header extends Component {
	render() {
		return (
			<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<a class="navbar-brand" href="#">Rifqi</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<a class="nav-link" href="#">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#profile">Profile</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#blog">Blog</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#aboutme">About Me</a>
						</li>
					</ul>
					<form class="form-inline mt-2 mt-md-0">
						<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
						<button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>
			</nav>		

			<!-- Carousel -->
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img class="first-slide" src="file/basket.jpg" alt="First slide">
						<div class="container">
							<div class="carousel-caption text-left">
								<h1>Independence Striver.</h1>
								<p>Striving for independency in all aspects of life.</p>
								<p><a class="btn btn-lg btn-primary" href="#subscribe" role="button">Subscribe now</a></p>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<img class="second-slide" src="file/gor.jpg" alt="Second slide">
						<div class="container">
							<div class="carousel-caption">
								<h1>Be confident</h1>
								<p>Show your work and be the best version of yourself..</p>
								<p><a class="btn btn-lg btn-primary" href="#" role="button" id="profile">Learn more</a></p>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<img class="third-slide" src="file/sepeda.jpg" alt="Third slide">
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
		)	
	}
}

export default Header;