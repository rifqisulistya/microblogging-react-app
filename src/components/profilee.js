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
								<h3 class="mb-0">
									<a class="text-primary" href="#">Portfolios</a>
								</h3>
								<br/>
								<p class="card-text mb-auto" align="left">
									<ul>
										<li> SUAR Web Prototype Development </li>
										<li> SUAR Mobile App Prototype Development </li>
										<li> Repeated Measure Design, Growth Curve and Test on a Subvector on 2 or more population </li>
										<li> Mathematical Modeling: Rainbow visibility in the air </li>
										<li> Mathematical Modeling: Epilepsy Identification on EEG </li>
									</ul>
								</p>
							</div>
							<img class="card-img-right flex-auto d-none d-lg-block" src="/file/mu.jpg" alt="Card image cap" width="900" height="281" />
						</div>
					</div>
					<div class="col-md-6">
						<div class="card flex-md-row mb-4 shadow-sm h-md-250">
							<div class="card-body d-flex flex-column align-items-start">
								<h3 class="mb-0">
									<a class="text-success" href="#">Experiences</a>
								</h3>
								<br/>
								<p class="card-text mb-auto" align="left">
									<ul>
										<li>Community Manager of SUAR </li>
									</ul>	
										SUAR is a smart collaboration channels for storytellers to build brand engagement & trust 
										with blockchain technology.
									<ul>
									<br/>
										<li>Operation Manager of IYMDS 2017</li>
									</ul>	
										Indonesian Youth Marine Debris Summit (IYMDS) is a youth training 
										and development program which collects 70 young leaders across the country 
										and work on marine debris issues	
								</p>
							</div>
							<img class="card-img-right flex-auto d-none d-lg-block" src="./file/experience.jpg" alt="Card image cap" width="1200" height="281"/>
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
								<p class="card-text mb-auto" align="left">Knowledge is power but character is more.</p>
								<a href="#">Continue reading</a>
							</div>
							<img class="card-img-right flex-auto d-none d-lg-block" src="./file/kelas.jpg" alt="Card image cap" width="380" height="281"/>
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
								<p class="card-text mb-auto" align="left">Share with others and zero waste campaign</p>
								<a href="#">Continue reading</a>
							</div>
							<img class="card-img-right flex-auto d-none d-lg-block" src="./file/volunteer.jpg" alt="Card image cap" width="400" height="281"/>
						</div>
					</div>			
					
				</div>
			</main>	
		);
	}
}	
export default Profilee;