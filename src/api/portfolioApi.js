import portfolio from '../data/active';

class PortfolioApi {
  static getPortfolio() {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(portfolio); }, 400);
    });
  }
}

export default PortfolioApi;
