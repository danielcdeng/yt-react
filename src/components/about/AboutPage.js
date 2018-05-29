import React, {PropTypes} from 'react';
import HomePage from "../home/HomePage";

class AboutPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    //console.log('path: ', context.location.pathname);
  }

  render() {
    return(
      <div>
        <h2>About</h2>
        <hr/>
        <ul>
          <li>
            For the weekly production of each ticker's signal, the ticker has the market data traced back to its first public date. For example, the first public date for SP500 index is January 31, 1800.
          </li>
          <br/>
          <li>
            The Cycle-yang-type implies either or the combination of the following meanings: expand, up-trend, rising, bullish, buy/hold, and/or positive. The Cycle-yin-type: constrict, down-trend, falling, bearish, sell/short, and/or negative. The context from the <i>Book of Change</i> metaphorically predicts the ensuing situation.
          </li>
          <br/>
          <li>The application uses <span className="colorOrange">React</span>,&nbsp;
            <span className="colorOrange">Redux</span>,&nbsp;
            <span className="colorOrange">React-Router</span>,&nbsp;
            <span className="colorOrange">Bootstrap</span>,&nbsp;
            <span className="colorOrange">Webpack</span>,&nbsp;
            <span className="colorOrange">Babel</span>, and&nbsp;
            <span className="colorOrange">other libraries</span> to provide the view.&nbsp;
            The context of the view is provided by the weekly computed JSON data generated by Java.
          </li>
          <br/>
          <li>You may search a ticker (or tickers) from the portfolio through the provided filter input box but you cannot add any new tickers that are not in the list. This is the current constraint because this is my personal project. The system computes the market data once a week--i.e., the daily close market data is entered manually over the weekend for the Java program to compute.</li>
          <br/>
          <li>Every situation code has a five digits format, ABCDE, in which CD refers to the original sequence number listed in <i>The Book of Change</i>, E is the CD's internal verse numbered from 1 (beginning) to 6 (top), and AB is the system's internal sequence number that stands for 1 as Qian 乾, 2 as Dui 兑, 3 Li 離, 4 Zhen 震, 5 Xun 巽, 6 Kan 坎, 7 Gen 艮, 8 Kun 坤. <span className="colorBlue">The context of ABCDE metaphorically depicts the ensuing development of the Cycle.</span></li>
          <br/>
          <li>For the situation text displayed to the user, only the text of the CD is listed. Readers may refer to the <i>Book</i> for the E as the CD's internal state description.</li>
          <br/>
          <li>The Cycle-I-yang is triggered by a price rise, Cycle-II-yin by a price drop. Each Cycle might last 2-3 years and could also be short-lived.&nbsp;<span className="colorBlue">It is the yin/yang phenomenon that Cycle-I always pans out a top and Cycle-II a bottom.</span> Readers may use the provided stock chart to identify the top/bottom.</li>
          <br/>
          <li className="colorDeepPink">YouTiming is on a shared host and the server cannot be customized. Thus, when refreshing a page route such as <i>http://youtiming.com/portfolio</i>, you would get the '404 Not Found' error in return. For more information, please refer to this <a href="https://tylermcginnis.com/react-router-cannot-get-url-refresh/" target="_blank">Cannot Get URL Error</a> article.</li><br/>
          <li>For people who can read traditional Chinese, please join my FB group: 資本市場的易經.</li>
        </ul>

        <hr/>

        <div>
          Portfolio computed on weekly basis:<br/>
          <table className="table table-striped marginTop10px">
            <thead>
              <tr>
                <th width="12%">Market</th>
                <th>Tickers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Indices-1 (3)</td>
                <td>NASDAQ (USA), SP500 (USA), TRAN (USA)</td>
              </tr>
              <tr>
                <td>Indices-2 (4)</td>
                <td>DAX (Germany), KOSPI (Korea), SHCOMP (China, PROC), TAIEX (Taiwan, ROC)</td>
              </tr>
              <tr>
                <td>NASDAQ (9)</td>
                <td>AAPL, AMZN, FB, GOOGL, MSFT, NFLX, NVDA, TQQQ, TSLA</td>
              </tr>
              <tr>
                <td>NYSE (3)</td>
                <td>BABA, CRM, TSM</td>
              </tr>
              <tr>
                <td>NYSEARCA (5)</td>
                <td>IYR, GLD, SLV, XLE, XLF</td>
              </tr>
              <tr>
                <td>CRYPTO (1)</td>
                <td>BTC</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr/>

        <p className="fontSizeSmall">
          <i>
            DISCLAIMER:&nbsp;
            a). The information contained herein is for informational purposes only.&nbsp;
            Nothing at this site should be taken as a solicitation to purchase or sell securities.&nbsp;
            Before buying or selling any stock you should do your own research and reach your own conclusion or consult a licensed financial advisor.&nbsp;
            Investing includes risks, including loss of principal.&nbsp;
            b). The portfolio may change without notice.&nbsp;
            c). All online quotes are from <i>Yaoo! Finance</i> and <i>StockCharts.com</i>.
          </i>
        </p><br/>

        <p className="fontSizeSmall">
          <i>Copyright &copy; YouTiming.com, Daniel C. Deng, All Rights Reserved, 2003-Present. English I-Ching translation is quoted from http://www.akirarabelais.com/i/i.html.</i>
        </p>

        <hr/>
      </div>
    );
  }
}

AboutPage.contextTypes = {
  location: PropTypes.object
};

export default AboutPage;

