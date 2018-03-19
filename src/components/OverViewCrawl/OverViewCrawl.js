import React, {Component} from 'react';
import './OverViewCrawl.css'

class OverViewCrawl extends Component {
  constructor(){
    super()
    this.state = {
      overView: {}
    }
  }
  retrieveOverview() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(filmData =>
        this.setState({
          overView: filmData
        })
      ).catch(error => console.log({error}));

  }
  componentDidMount() {
    this.retrieveOverview()
  }

  render() {
    const randomNum = Math.floor(Math.random() * Math.floor(6))
    console.log(randomNum)
    if(this.state.overView.results) {
      let films = this.state.overView.results
      const filmOpeners = films[randomNum].opening_crawl
      const titles = films[randomNum].title

      return (
        <div className='over-view'>
          <p>{filmOpeners}</p>
          <h6>{titles}</h6>
        </div>
      )
    } else {
      return null
    }
  }

}
// retrieveWeather(input)
//       .then(response => response.json())
//       .then(weatherConditions => {
//
//         if (weatherConditions.forecast || localStorage.length === 0) {
//           this.setState({
//             weatherResults: dataCleaner(weatherConditions),
//             error: false
//           });
//
//         } else {
//           this.setState({
//             error: true
//           });
//         }
//       })
//       .catch(error => console.log({error}));
//     this.setToLocal();
//   }
export default OverViewCrawl;
