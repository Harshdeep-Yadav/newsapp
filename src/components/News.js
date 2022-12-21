import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {
  articles = [
    {
      source: { id: "cnn", name: "CNN" },
      author: "Kevin Liptak",
      title:
        "Biden's off-the-cuff remark on Putin sends shock waves on dramatic final day of trip - CNN",
      description:
        'At nearly the same moment President Joe Biden declared him a "butcher," Vladimir Putin\'s missiles began falling in Lviv, Ukraine.',
      url: "https://www.cnn.com/2022/03/27/politics/joe-biden-vladimir-putin-ukraine-war/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/220326135432-13-biden-poland-0326.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-03-27T17:40:00Z",
      content:
        "At nearly the same moment President Joe Bidendeclared him a butcher, Vladimir Putins missiles began falling in Lviv, Ukraine.\r\nSending black smoke and flames billowing into the air, and injuring at l… [+8188 chars]",
    },

    {
      source: { id: null, name: "New York Post" },
      author: "Jackie Salo",
      title:
        "Foo Fighters' Dave Grohl makes emotional return after Taylor Hawkins' death - New York Post ",
      description:
        "Foo Fighters frontman Dave Grohl and his bandmates arrived in Los Angeles following the shocking death of drummer, Taylor Hawkins in Colombia.",
      url: "https://nypost.com/2022/03/27/dave-grohl-bandmates-return-after-taylor-hawkins-death/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/03/foo-fighters-hawkins-grohl-028.jpg?quality=90&strip=all&w=824",
      publishedAt: "2022-03-27T17:15:00Z",
      content:
        "Foo Fighters frontman Dave Grohl and his bandmates made an emotional return to Los Angeles following the shocking death of drummer, Taylor Hawkins, on tour in Colombia.\r\nGrohl appeared visibly strick… [+1642 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Hannah Towey",
      title:
        "Elon Musk reveals 3 existential threats he's scared of, including a declining birthrate, religious extremism, and 'artificial intelligence going wrong' - Yahoo Sports",
      description:
        '"I spent a lot of time talking about the birthrate thing," Musk said. "That might be the single biggest threat to the future of human civilization."',
      url: "https://www.businessinsider.com/elon-musk-reveals-existential-threats-he-fears-birthrate-extremism-ai-2022-3",
      urlToImage:
        "https://i.insider.com/62408802a2e45b0019509724?width=1200&format=jpeg",
      publishedAt: "2022-03-27T16:28:49Z",
      content:
        'Tesla CEO Elon Musk revealed three "existential threats" he believes currently face humanity during a recent interview with Mathias Döpfner, the CEO of Insider\'s parent company, Axel Springer. \r\nThe … [+2590 chars]',
    },
    {
      source: { id: null, name: "Ultimate Classic Rock" },
      author: "martinkielty",
      title:
        "Genesis Play Last-Ever Show With Peter Gabriel in Audience - Ultimate Classic Rock",
      description:
        "Phil Collins jokes about members needing “real jobs” after Last Domino? tour ends.",
      url: "https://ultimateclassicrock.com/genesis-final-show/",
      urlToImage:
        "https://townsquare.media/site/295/files/2022/03/attachment-collins.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
      publishedAt: "2022-03-27T16:18:43Z",
      content:
        "Genesis brought their career to a end in London on Mar. 26, 2022, and former frontman Peter Gabriel was in the audience to see it happen.\r\nThe closing show on the band’s Last Domino? tour had already… [+3148 chars]",
    },
    {
      source: { id: null, name: "ESPN" },
      author: "David Purdum",
      title:
        "Sportsbooks face major liability if Saint Peter's wins title; N.J. books to pay out on UNC as East champ win or lose vs. in-state Peacocks - ESPN",
      description:
        "Bettors with potential winnings as high as $800,000 if the Saint Peter's run goes all the way to the national title have sportsbooks starting to sweat, while a New Jersey law means North Carolina will be a futures winner no matter what Sunday.",
      url: "https://www.espn.com/chalk/story/_/id/33609136/sportsbooks-face-major-liability-saint-peter-wins-ncaa-title-nj-books-pay-north-carolina-east-champ-win-lose-vs-state-peacocks",
      urlToImage:
        "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0326%2Fr991397_1296x729_16%2D9.jpg",
      publishedAt: "2022-03-27T15:57:12Z",
      content:
        "The improbable NCAA tournament run by Saint Peter's has some sportsbooks facing historic liabilities and put New Jersey bookmakers in the unusual position of potentially having to pay out on a losing… [+1669 chars]",
    },
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Emma Roth",
      title:
        "Apple will reportedly release an iPad Pro with an M2 chip this fall - The Verge",
      description:
        "Apple tracker Mark Gurman predicts Apple will release its new iPad Pro with an M2 chip between September and November this year. Gurman also thinks the iPad Pro will support MagSafe charging.",
      url: "https://www.theverge.com/2022/3/27/22998512/apple-reportedly-release-ipad-pro-m2-chip-magsafe-fall-rumor",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/j9Nt5l9XuovcU_7QyYPyeL7ne6U=/0x138:2040x1206/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22524099/vpavic_28512_4592_0192.jpg",
      publishedAt: "2022-03-27T15:35:07Z",
      content:
        "It may also support MagSafe charging\r\nPhoto by Vjeran Pavic / The Verge\r\nApple is reportedly planning to release an iPad Pro with the rumored M2 chip sometime between September and November of this y… [+1894 chars]",
    },
    {
      source: { id: null, name: "The Action Network" },
      author: "Tanner McGrath",
      title:
        "Miami vs. Kansas Betting Odds, Picks, Predictions: NCAA Tournament Elite 8 Preview for Sunday, Mar. 27 - The Action Network",
      description:
        "Find college basketball odds, picks and predictions for Miami (FL) vs. Kansas in the 2022 NCAA Tournament Elite 8 on Sunday, March 27.",
      url: "https://www.actionnetwork.com/ncaab/miami-hurricanes-vs-kansas-jayhawks-ncaa-tournament-elite-8-betting-preview-sunday-march-27",
      urlToImage:
        "https://images.actionnetwork.com/blog/2022/03/ncaa-tournament-elite-8-kansas-vs-miami-kameron-mcgusty-sunday-march-27-2022.jpg",
      publishedAt: "2022-03-27T15:28:00Z",
      content:
        "The Kansas Jayhawks represent the final No. 1 seed remaining in the 2022 NCAA Tournament. Head coach Bill Self’s squad has automatically become the favorite to win the national title at many sportsbo… [+5692 chars]",
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "USMNT-Panama: How Gregg Berhalter's strategy of heavy rotation could pay off as World Cup qualification looms - CBS Sports",
      description:
        "Berhalter's rotation means the USMNT's fourth-string right back is no stranger to big moments",
      url: "https://www.cbssports.com/soccer/news/usmnt-panama-how-gregg-berhalters-strategy-of-heavy-rotation-could-pay-off-as-world-cup-qualification-looms/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2022/03/26/e616e8a7-6c6d-40e2-8349-614b633f4c06/thumbnail/1200x675/b239782891f063207d54a04a1bfe52c8/berhalter.jpg",
      publishedAt: "2022-03-27T15:27:00Z",
      content:
        "During World Cup qualifying it's rare that a team has their entire squad available all the time. This cycle, the final round stretched across almost seven months in five different international windo… [+6424 chars]",
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "USMNT-Panama: How Gregg Berhalter's strategy of heavy rotation could pay off as World Cup qualification looms - CBS Sports",
      description:
        "Berhalter's rotation means the USMNT's fourth-string right back is no stranger to big moments",
      url: "https://www.cbssports.com/soccer/news/usmnt-panama-how-gregg-berhalters-strategy-of-heavy-rotation-could-pay-off-as-world-cup-qualification-looms/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2022/03/26/e616e8a7-6c6d-40e2-8349-614b633f4c06/thumbnail/1200x675/b239782891f063207d54a04a1bfe52c8/berhalter.jpg",
      publishedAt: "2022-03-27T15:27:00Z",
      content:
        "During World Cup qualifying it's rare that a team has their entire squad available all the time. This cycle, the final round stretched across almost seven months in five different international windo… [+6424 chars]",
    },
  ];

  static dafaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general',
  }

  static propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    console.log("Hello I am a constructor from news Component");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=7113629afc76488db503299da9a7680c&page=1&pageSize=${this.prop.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false
    });
  }


  handlePreviousClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=7113629afc76488db503299da9a7680c&page=${this.state.page - 1
      }&pageSixe=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    if (!(
      this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
    )) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=7113629afc76488db503299da9a7680c&page=${this.state.page + 1}&pageSixe=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }
  };
  render() {
    return (
      <div className="container my-">
        <h2 className="text-center my-3">Top-HeadLines</h2>
        {<Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 28) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="conatainer d-flex justify-content-around my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-success "
            onClick={this.handlePreviousClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            class="btn btn-success "
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
