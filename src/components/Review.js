import React from 'react';
import './Review.css';



const Review = ({id,author, content, url}) => {
return(
	<div className='tc bg-gray dib br3 pa3 ma2 bw2 shadow-5'>
   	<h1 className = "ReviewText"> {author}</h1>
    <p>{content}</p>
   	</div>
);
   }


   export default Review;