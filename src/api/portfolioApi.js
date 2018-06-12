import axios from 'axios';

class PortfolioApi {
  static getArchive() {
    return new Promise((resolve, reject) => {
      axios({
        method:'get',
        url:'/archive.json',
        responseType:'json',
        timeout: 5000
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        console.log('GET /archive.json, error = ', error);
        reject({error, 'message': 'Error in GET /archive.json'});
      });
    });
  }

  static getPortfolio() {
    return new Promise((resolve, reject) => {
      axios({
        method:'get',
        url:'/active.json',
        responseType:'json',
        timeout: 5000
      })
      .then(response => {
        console.log('REST portfolio = ', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('GET /active.json, error = ', error);
        reject({error, 'message': 'Error in GET /active.json'});
      });
    });
  }
}

export default PortfolioApi;
