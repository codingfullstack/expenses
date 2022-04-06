import {useContext} from 'react';
import { GlobalContext } from './globalState';
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

const useTransaction = (title) => {
  resetCategories();
  const {transactions} = useContext(GlobalContext);

  const transactionType = transactions.filter((t) => t.type === title );
  const total = transactionType.reduce((acc, val)=>acc +=val.amount,0);
  const categories  = title === 'Income' ? incomeCategories :expenseCategories;
  transactionType.forEach((t) => {
    const category = categories.find((c)=> c.type ===t.category);
    if(category) category.amount += t.amount
  });

 
  const filteredCategories = categories.filter((c)=>c.amount>0)
  const chartData = {
    datasets: [{
      data: filteredCategories.map((c)=> c.amount),
      backgroundColor: filteredCategories.map((c)=>c.color)
    }],
    labels: filteredCategories.map((c)=>c.type)
  }
  return {transactionType, total, categories, chartData}
};
export default useTransaction ;
