import React from 'react';
import PropTypes from 'prop-types';

class AboutPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    //console.log('path: ', context.location.pathname);
  }

  render() {
    return(
      <div>
        <h2>More Info</h2>
        <hr/>
        <ul>
          <li>
            For the weekly production of each ticker's signal, the ticker has the market data traced back to its first public date. For example, the first public date for SP500 index is January 31, 1800.
          </li>
          <br/>
          <li>
            The "pos" (positive) Cycle Type implies combinations of the following meanings: expand, up-trend, rising, bullish, buy/hold, and/or <i>yang</i>. The "neg" (negative): constrict, down-trend, falling, bearish, sell/short, and/or <i>yin</i>. The context from the <i>Book of Change</i> amazingly predicts the ensuing development of a nation or a company in a metaphorical way.
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
          <li>The pos/neg-Cycle is triggered by price rise/fall, respectively, in which it always pans out a top/bottom due to <i>Change</i>. Each Cycle might last 2-3 years and could also be short-lived.</li>
          <br/>
          <li className="colorDeepPink">YouTiming is hosted on a shared server which cannot be customized to intercept the client-side routing. Thus, when refreshing a page route such as <i>http://youtiming.com/portfolio</i>, you would be hit by '404 Not Found' in return. For more information, please refer to <a href="https://tylermcginnis.com/react-router-cannot-get-url-refresh/" target="_blank">Cannot Get URL Error</a> article. To reload the application, you have to go back to <i>http://www.youtiming.com</i> or the <i>Home</i> menu.</li><br/>
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
                <td>NASDAQ (10)</td>
                <td>AAPL, AMZN, FB, GOOGL, MDSO, MSFT, NFLX, NVDA, TQQQ, TSLA</td>
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

