import React from 'react';
import Review from './Review';

const ReviewList = (props) => {
return(
		<div>
		{
			props.reviews.map((review, i) => {
				return(
					<div key = {[i]} className='tc bg-black dib br3 pa2 ma2 bw8 shadow-5'>
					<Review 
					key = {review.author}
					id = {review.author}
					author ={review.author}
					content ={review.content}
					/>
					</div>
				);
    		})
		}
		</div> 
		);
}

export default ReviewList;

	
