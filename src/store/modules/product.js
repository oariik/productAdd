 import Vue from 'vue';
import { router } from '../../router';
 const state = {
    products : [ ]
}

 const getters = {
    getProducts(state){
        return state.products;
    },
    getProduct(state){

    }
}

 const mutations = {
    updateProductList (state, product){
        state.products.push(product);
    }
}

 const actions = {
    initApp( { commit } ){
        // vue resource // 
    },
    saveProduct( { dispatch, commit , state } , product ){
        Vue.http.post("https://urun-islemleri-prod-44058.firebaseio.com/products.json", product)
        .then((response) => {
            product.key= response.body.name;
            commit("updateProductList" , product);

            let tradeResult = {
                purchase : 0, 
                count : product.count,
                sale : 0
            }
            dispatch("setTradeResult", tradeResult)
            router.replace("/")
        })
    },
    sellProduct( { commit } , payload ){

    }
 }

 export default {
     state,
     getters,
     mutations,
     actions
 }