import React, {useContext, useEffect} from 'react';
import {FaGift, FaBitcoin, FaCarAlt, FaPlane, FaShoppingCart, FaHome } from 'react-icons/fa';
import {GiReceiveMoney, GiTicket, GiPayMoney, GiClothes} from 'react-icons/gi';
import {MdHomeWork, MdFastfood, MdPhoneAndroid, MdSavings, MdPets} from 'react-icons/md';


import { GlobalContext } from '../../globalState';

 import useTransaction from '../../useTransaction';


const HistoryList = ({title}) => {
  const {transactions, getTransactions} = useContext(GlobalContext);
  const {total,  categories, chartData} = useTransaction(title);
  const filteredCategories = categories.filter((c)=>c.amount>0);



  
  return <div className=' min-vh-50'>
    
      <h4> {title}</h4>
      <div className='border  '>
        <h4 className='m-2'>{total}</h4>
      <div className="row ">
        {filteredCategories.map(item => 
          <div className=' col-sm-10 col-md-4 col-lg-2 col-xl-2 border m-4 rounded col-8   text-center' ><h3 className='text-white' >{item.icon}</h3> <h5 className='text-center text-white'>{item.amount}</h5></div>
          )}
        </div>                                
   

      </div>
      
  </div>;
};

export default HistoryList;