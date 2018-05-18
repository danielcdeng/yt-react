import portfolio from '../data/active';

class PortfolioApi {
  static getPortfolio() {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(portfolio); }, 500);
    });
  }
}

export default PortfolioApi;
