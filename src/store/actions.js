import Vue from 'vue';

export const setTradeResult = ({state,commit}, tradeResult) =>{
    commit("updateTradeResult", tradeResult)
    let tradeData = {
        purchase : state.purchase,
        sale : state.sale
    }
    Vue.http.put("https://urun-islemleri-prod-44058.firebaseio.com/trade-results.json",tradeData)
    then(response => {

    })
}


export const getTradeResult = ({commit})  => {
    Vue.http.get("https://urun-islemleri-prod-44058.firebaseio.com/trade-results.json")
    .then(response => {
        commit("updateTradeResult", response.body)
    })
}