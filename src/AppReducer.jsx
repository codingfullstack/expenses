export default(state, action )=>{
    let transactions;
    switch (action.type){
        case "ADD_TRANSACTION" :
             transactions = [action.payload, ...state]
            return transactions;
        default:
            return state;
    }
}