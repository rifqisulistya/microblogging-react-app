import React from 'react';

class Subscribe extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section class="jumbotron text-center" id="subscribe">
				<div class="container">
					<h1 class="jumbotron-heading">Subscribe for more updates
					</h1>
					{/* -- Button trigger modal -- */}
					<br/>
					<form class="form-inline mt-2 mt-md-0">
						<input class="form-control mr-sm-2" type="text" placeholder="Type your email here" aria-label="Search"/>
					<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
						Subscribe
					</button>
					</form>


					{/* -- Modal -- */}
					<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalCenterTitle">Thanks for subscribing!
									</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									I will send all my updates to your email.
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
									
								</div>
							</div>
						</div>
					</div>	
				
				</div>
			</section>
		);
	}
}	
export default Subscribe;	
		