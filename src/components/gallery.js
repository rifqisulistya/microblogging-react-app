import React from 'react';

class Subscribe extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section class="jumbotron text-center" id="blog">
				<div class="container">
					<h1 class="jumbotron-heading">My Blog</h1>
					<p class="lead text-muted">Article, review, photos and videos.</p>
				</div>
			</section>

				<div class="album py-5 bg-light">
					<div class="container">

						<div class="row">
							<div class="col-md-4">
								<div class="card mb-4 shadow-sm">
									<img class="card-img-top" src="file/1.jpg" alt="Card image cap">
									<div class="card-body">
										<p class="card-text">Bring me the horizon.</p>
										<div class="d-flex justify-content-between align-items-center">
											<div class="btn-group">
												<button type="button" class="btn btn-sm btn-outline-secondary">View
												</button>
												<button type="button" class="btn btn-sm btn-outline-secondary">Edit
												</button>
											</div>
											<small class="text-muted">10 Hr</small>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card mb-4 shadow-sm">
									<img class="card-img-top" src="file/2.jpg" alt="Card image cap">
									<div class="card-body">
										<p class="card-text">Say no more.</p>
										<div class="d-flex justify-content-between align-items-center">
											<div class="btn-group">
												<button type="button" class="btn btn-sm btn-outline-secondary">View</button>
												<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
											</div>
											<small class="text-muted">1 d</small>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card mb-4 shadow-sm">
									<img class="card-img-top" src="file/3.jpg" alt="Card image cap">
									<div class="card-body">
										<p class="card-text">Yeah, some scenery.</p>
										<div class="d-flex justify-content-between align-items-center">
											<div class="btn-group">
												<button type="button" class="btn btn-sm btn-outline-secondary">View</button>
												<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
											</div>
											<small class="text-muted">3 d</small>
										</div>
									</div>
								</div>
							</div>

					
						</div>
					</div>
				</div>
		);
	}
}

export default Gallery;		