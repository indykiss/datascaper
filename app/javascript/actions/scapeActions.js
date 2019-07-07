
export default function fetchScapes() {
    getURL = () => {
        //https://api.worldtradingdata.com/api/v1/history?symbol=AAPL&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz
        return (
          "https://api.worldtradingdata.com/api/v1/history?symbol=" + this.state.stock_name + "&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz"
        )
      }
      
    return (dispatch) => {
        dispatch({type: 'LOADING_SCAPES'});

      return fetch(this.getURL())
        .then(response => response.json())
        .then((responseData) => {
          this.setState({ stock_name: responseData.name,
            history: responseData.history
          });
        }
            const scapeScape = responseData
            dispatch({type: "FETCH_SCAPES", payload: scapeScape})
        )
        .catch(error => this.setState({ error }));
        console.log(this.state.stock_name)
    }
} 


