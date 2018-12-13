import React, { Component } from 'react';
import ReactHashtag from "react-hashtag";
import getUrls from "get-urls";

class Post extends Component {

    render() {
        return (
            <div className="individualPost">
                <div className="container">
                    <div className="row">
                        <div className="two columns"><p><img src={this.props.meta.image} alt="" /></p></div>
                        <div className="ten columns">
                            <p className="author">{this.props.meta.author}</p>
							<p>
								<ReactHashtag onHashtagClick={(string, ev) => alert('Kamu mengeklik ' + string)}>
									{this.props.meta.blogPost}
								</ReactHashtag>	
							</p>
                            <p className="date">{this.props.meta.date}</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }

componentDidMount(){
		console.log("component did mount")
		let grabity = require("grabity");
		var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
 
		(async () => {
		let it = await grabity.grabIt(proxyUrl+"https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors/43268098");
		
		
		const text = 'Lorem ipsum dolor sit amet, //sindresorhus.com consectetuer adipiscing http://yeoman.io elit.';
		var url = getUrls(text);
		console.log(url)

		})();
	}	
}

export default Post;