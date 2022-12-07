import React from 'react';
import './article.css';

const ArticleCard = (props) => {
    return (
        <div>
            <a href={props.siteURL} target='_blank' rel='noreferrer'>
            <div className='articleCard' style={{backgroundImage: `url(${props.picURL}`}}>
                <p className='title'> {props.title} </p>
                <p className='subheading'> {props.subtitle} </p>
            </div>
            <div className='articleImgHolder'>
                {/* <img src={props.picURL} alt=''/> */}
            </div>
            </a>
        </div>
    );
}

export default ArticleCard;
