import React from 'react'
import Header from './components/header/header';
import RecipeList from './components/recipe-list/recipeList';
import ArticleList from './components/article-list/articleList';
import Footer from './components/footer/footer';
import { themeSelector } from './slices/headerSlice';
import { useSelector } from 'react-redux';

export default function App() {
  const theme = useSelector(themeSelector);
  return (
    <div id={theme}>
        <header> 
            <Header />
        </header>
        <div className='content-container'>
            <main>
                <RecipeList />
            </main>
            <article>
                <ArticleList />
            </article>
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}