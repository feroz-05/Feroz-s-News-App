import React, { Component } from "react";
import NewsItem from "./NewsItem";
import gif from "../loading.gif";
import '../App.css';
export default class News extends Component {
   
  // article = [ {
  //   "source": {
  //     "id": "espn-cric-info",
  //     "name": "ESPN Cric Info"
  //   },
  //   "author": null,
  //   "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //   "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //   "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //   "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //   "publishedAt": "2020-04-27T11:41:47Z",
  //   "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  // },
  // {
  //   "source": {
  //     "id": "espn-cric-info",
  //     "name": "ESPN Cric Info"
  //   },
  //   "author": null,
  //   "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //   "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //   "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //   "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //   "publishedAt": "2020-03-30T15:26:05Z",
  //   "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  // }]
  
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      length : 0
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=eae3b5ad2f6f48c183f826d55be46f8c&page=${this.state.page}&pageSize=9`;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        articles: data.articles,
        loading: false,
        length : data.totalResults
      })
    }

    displayPrev =() =>{
      this.setState({
        page :this.state.page -1
      })
      this.componentDidMount()
      console.log(this.state.page)
      }
    
      displayNext =() =>{
        console.log("display Previous")
        this.setState({
          page : this.state.page + 1
        })
        this.componentDidMount()
        console.log("page :" + this.state.page)
        console.log("length :" + Math.floor(this.state.length/8))
      }
  render() {
    return (
      <>
     
      {this.state.loading === true?
       <div className="loading">
      <img src={gif} alt='ngh'></img>
        please Wait...
      </div>
      // else below code will run
      :
      <div className="container my-5">
        <h1 className="text-center">Latest News</h1>
          <div className="container mx-3">
          <div className="row">
            {this.state.articles.map((item, index) => {
              return (
                <div className="col-md-4 my-3" key={index}>
                  <NewsItem
                    title={!item.title?"empty":item.title.slice(0, 44) + "..."}
                    desc={!item.description?"Umar Akmal's troubled cricket career has hit its biggest roadblock yet,":item.description.slice(0, 80) + "..."}
                    imageUrl={!item.urlToImage?"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg":item.urlToImage} 
                    url={item.url}/>
                </div>
                    
              );
            })}
          </div>
          <div className="d-flex justify-content-between mx-3 my-5">
                    <button type="button" disabled={this.state.page === 1} className="btn btn-warning" onClick={this.displayPrev}>Prev</button>
                    <button type="button" disabled={this.state.page === Math.ceil(this.state.length/8)} className="btn btn-warning" onClick={this.displayNext}>Next</button>
              </div>
              </div>
              
      </div>
  }
              </>
    );
  }
  }