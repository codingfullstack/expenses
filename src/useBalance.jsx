import { useContext } from 'react';
import { GlobalContext } from './globalState';


const useBalance = () => {
    let totalType = 0;
    const { transactions } = useContext(GlobalContext);
    const pajamos = transactions.filter((t) => t.type === "Income");
    const pajamosTotal = pajamos.reduce((acc, val) => acc += val.amount, 0)
    
    const išlaidos = transactions.filter((t) => t.type === "Expenses");
    const išlaidosTotal = išlaidos.reduce((acc, val) => acc += val.amount, 0)
    totalType = pajamosTotal - išlaidosTotal;
    // console.log(totalType)
    return { totalType }
};
export default useBalance;