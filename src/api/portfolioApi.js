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
        console.log('Error: GET /data/archive');
        alert('Error: GET /data/archive');
        resolve([{}]);
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
        resolve(response.data);
      })
      .catch(error => {
        console.log('Error: GET /data/active');
        alert('Error: GET /data/active');
        resolve([{}]);
      });
    });
  }
}

export default PortfolioApi;
