import React from 'react'
import './portfolio.css'

const portfolio = () => {
  return (
    <section id="portfolio" class="portfolio">
      <h5>MY PROJECTS</h5>
      <div className="container portfolio_container">
        <article className="portfolio_cards">

          <h2>Adelbridge & Co Firearms, Company Website</h2>
          <div className="portfolio_card">
            <a href="https://adelbridge.com/" target="_blank" className="btn">E-com Site</a>           
            <a className="btn btn-primary">No GitHub Available</a>            
          </div>

        </article>

        <article className="portfolio_cards">
          <h2>This Website</h2>
          <div className="portfolio_card">
            <a className="btn">Portfolio Site</a>
            <a href="https://github.com/ericguillermoguzman/PortfolioSite" target="_blank" className="btn btn-primary">GitHub</a>
          </div>          
        </article> 

        <article className="portfolio_cards">
          <h2>Datatel Solutions, Company Website</h2>
          <div className="portfolio_card">
            <a href="https://momsat.com" target="_blank" className="btn">Landing Page</a>
            <a href="https://github.com/ericguillermoguzman/momsat" target="_blank" className="btn btn-primary">GitHub</a>
          </div>          
        </article>

        <article className="portfolio_cards">
          <h2>G3Washing, Company Website</h2>
          <div className="portfolio_card">
            <a href="https://G3Washing.com" target="_blank" className="btn">Company Site</a>
            <a className="btn btn-primary">No GitHub Available</a>
          </div>          
        </article>

        <article className="portfolio_cards">
          <h2>Star Mobility Prosthetics, Company Website</h2>
          <div className="portfolio_card">
            <a href="https://starmobilityprosthetics.net/" target="_blank" className="btn">Company Site</a>
            <a className="btn btn-primary">No GitHub Available</a>
          </div>          
        </article>

      </div>
    </section>
  )
}

export default portfolio