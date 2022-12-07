import React from 'react';
import ArticleCard from './articleCard.js';
import './article.css';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles, articleSelector } from '../../slices/articleSlice.js'
import { useEffect } from 'react';

const ArticleList = () => {
    const dispatch = useDispatch();
    const articles = useSelector(articleSelector);

    useEffect(() => {
        dispatch(getArticles());
    }, [dispatch])

    return (
        <article className='articleListHolder'>
            { articles !== null ?
            articles.map((article, index) => {
                return <ArticleCard key={index} title={article.title} subtitle={article.subtitle} 
                siteURL={article.site_url} picURL={article.pic_url} />
            })
            : '' }
        </article>
    );
}

export default ArticleList;
