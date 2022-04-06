import {FaGift, FaBitcoin, FaCarAlt, FaPlane, FaShoppingCart, FaHome } from 'react-icons/fa';
import {GiReceiveMoney, GiTicket, GiPayMoney, GiClothes} from 'react-icons/gi';
import {MdHomeWork, MdFastfood, MdPhoneAndroid, MdSavings, MdPets} from 'react-icons/md';
const incomeIcon = [<FaBitcoin/>, <GiTicket/>, <FaGift/>, <GiReceiveMoney/>, <MdSavings/>, <MdHomeWork/>];
const expenseIcon = [<GiPayMoney/>, <FaCarAlt/>, <GiClothes/>, <FaPlane/>, <MdFastfood/>, <FaShoppingCart/>, <FaHome/>, <MdPhoneAndroid/>, <MdPets/>];

export const incomeCategories = [
  { type: 'Investment', amount: 0, icon: incomeIcon[0] },
  { type: 'Lottery', amount: 0, icon: incomeIcon[1] },
  { type: 'Gifts', amount: 0, icon: incomeIcon[2] },
  { type: 'Salary', amount: 0, icon: incomeIcon[3] },
  { type: 'Savings', amount: 0, icon: incomeIcon[4] },
  { type: 'Rental income', amount: 0, icon: incomeIcon[5] },
];

export const expenseCategories = [
  { type: 'Taxes', amount: 0, icon: expenseIcon[0] },
  { type: 'Car', amount: 0, icon: expenseIcon[1] },
  { type: 'Clothes', amount: 0, icon: expenseIcon[2] },
  { type: 'Travel', amount: 0, icon: expenseIcon[3] },
  { type: 'Food', amount: 0, icon: expenseIcon[4] },
  { type: 'Shopping ', amount: 0, icon: expenseIcon[5] },
  { type: 'Home', amount: 0, icon: expenseIcon[6] },
  { type: 'Phone', amount: 0, icon: expenseIcon[7] },
  { type: 'Animals', amount: 0, icon: expenseIcon[8] },

];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};