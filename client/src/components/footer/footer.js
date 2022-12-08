import React from 'react';
import GitHub from './github.png';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footerBox'>
            <div className='footerDetails'>
                <h5 className='attri'> Attributions: </h5>
                <div className='attriList'>
                    <a href='https://www.simplyrecipes.com/' target='_blank' rel='noreferrer'><p> Food Images : Simply Recipes </p></a>
                    <a href='https://www.bbc.co.uk/food/articles/' target='_blank' rel='noreferrer'><p> Articles : BBC Food </p></a>
                    <a href='https://icons8.com/' target='_blank' rel='noreferrer'><p> Icons: Icons8 </p></a>
                </div>
            </div>
            <div className='githubLink'>
                <a href='https://github.com/BenjaHolmes/PERN-RecipeApp' target='_blank' rel='NOREFERRER'>
                    <p> More of My Projects <br /> can be found in my <br /> Github Repository </p>
                    <img src={GitHub} alt='A Link to Authors Github Page'/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
