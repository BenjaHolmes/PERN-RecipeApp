import React from 'react';
import ArticleCard from './articleCard.js';
import './article.css';

const ArticleList = () => {
    return (
        <article className='articleListHolder'>
            <ArticleCard />
        </article>
    );
}

export default ArticleList;
