import React from 'react';

class Profilee extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<main role="main" class="container">
				<hr/>

				<section class="jumbotron text-center" id="profile">
					<div class="container">
						<h1 class="jumbotron-heading">Projects and Experience</h1>
						<p class="lead text-muted">Some of my works. Check 'em out!</p>
					</div>
				</section>

				<div class="row mb-2" id="profile">
					<div class="col-md-6">
						<div class="card flex-md-row mb-4 shadow-sm h-md-250">
							<div class="card-body d-flex flex-column align-items-start">
								<strong class="d-inline-block mb-2 text-primary">Projects</strong>
								<h3 class="mb-0">
									<a class="text-dark" href="#">Web Portfolios</a>
								</h3>
									<div class="mb-1 text-muted">Nov 12
									</div>
								<p class="card-text mb-auto">You can check all my website projects here. Make sure you find what you want for your next project.</p>
								<a href="#">Continue reading</a>
							</div>
							<img class="card-img-right flex-auto d-none d-lg-block" src="/file/pesawat.jpg" alt="Card image cap"/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="card flex-md-row mb-4 shadow-sm h-md-250">
							<div class="card-body d-flex flex-column align-items-start">
								<strong class="d-inline-block mb-2 text-success">Accomplishment</strong>
								<h3 class="mb-0">
									<a class="text-dark" href="#">My Experiences</a>
								</h3>
									<div class="mb-1 text-muted">Nov 11
									</div>
								<p class="card-text mb-auto">From operation manager to be website developer</p>
								<a href="#">Continue reading</a>
							</div>
							<img class="card-img-right flex-auto d-none d-lg-block" src="./file/gedung.jpg" alt="Card image cap"/>
						</div>
					</div>
					<div class="w-100"></div>
					<div class="col-md-6">
						<div class="card flex-md-row mb-4 shadow-sm h-md-250">
							<div class="card-body d-flex flex-column align-items-start">
								<strong class="d-inline-block mb-2 text-primary">Projects</strong>
								<h3 class="mb-0">
									<a class="text-dark" href="#">Education</a>
								</h3>
									<div class="mb-1 text-muted">Nov 12
									</div>
								<p class="card-text mb-auto">Knowledge is power but character is more.</p>
								<a href="#">Continue reading</a>
							</div>
							<img class="card-img-right flex-auto d-none d-lg-block" src="./file/gedung.jpg" alt="Card image cap"/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="card flex-md-row mb-4 shadow-sm h-md-250">
							<div class="card-body d-flex flex-column align-items-start">
								<strong class="d-inline-block mb-2 text-success">Accomplishment</strong>
								<h3 class="mb-0">
									<a class="text-dark" href="#">Volunteer</a>
								</h3>
									<div class="mb-1 text-muted">Nov 11
									</div>
								<p class="card-text mb-auto">Share with others and zero waste campaign</p>
								<a href="#">Continue reading</a>
							</div>
							<img class="card-img-right flex-auto d-none d-lg-block" src="./file/pesawat.jpg" alt="Card image cap"/>
						</div>
					</div>			
					
				</div>
			</main>	
		);
	}
}	
export default Profilee;