import React, {Component} from 'react';
import './OverViewCrawl.css';

class OverViewCrawl extends Component {
  constructor(){
    super();
    this.state = {
      overView: {}
    };
  }
  retrieveOverview() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(filmData =>
        this.setState({
          overView: filmData
        })
      ).catch(error => error);

  }
  componentDidMount() {
    this.retrieveOverview();
  }

  render() {
    const randomNum = Math.floor(Math.random() * Math.floor(6));
    if (this.state.overView.results) {
      let films = this.state.overView.results;
      /* eslint-disable */
      const filmOpeners = films[randomNum].opening_crawl;
      /* eslint-enable */
      const titles = films[randomNum].title;
      const releaseDate = films[randomNum].release_date;

      return (
        <div className='over-view'>
          <section className='star-wars'>
            <div className="crawl">
              <p>{filmOpeners}</p>
              <h6>{titles}</h6>
              <h6>{releaseDate}</h6>

            </div>
          </section>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default OverViewCrawl;
