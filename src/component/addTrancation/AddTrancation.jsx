import React, { useState, useContext } from 'react';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { GlobalContext } from '../../globalState';
import { v4 as uuidv4 } from 'uuid';
import { incomeCategories, expenseCategories } from '../../constants/categories';
import useBalance from '../../useBalance';
import useTransaction from '../../useTransaction';
import Accordion from '../accordion/Accordion';



const InitialState = {
    amount: '',
    category: '',
    type: ''
}

const AddTrancation = () => {

    const { addTransaction } = useContext(GlobalContext)
    const { total } = useTransaction("Income");
    const { totalType } = useBalance();

    const [errorData, setErrorData] = useState([]);
    const [Data, setData] = useState(InitialState);
    const selectedCategories = Data.type === 'Income' ? incomeCategories : expenseCategories;
    console.log(Data.type)

    const craete = () => {
        if (total === 0 && Data.type === "Income") {

            if (Data.amount != '' && Data.category != '' && Data.type != '' && Data.amount == Data.amount.match(/[0-9]+/)) {
                const newTransaction = { ...Data, amount: Number(Data.amount), id: uuidv4() }
                addTransaction(newTransaction)
                setData(InitialState);
                setErrorData([]);
            } else {
                console.log('duomenys')
                setErrorData({ data: "missing or incorrectly entered data" })

            }
        } else if (total !== 0) {
            if (totalType >= Data.amount || Data.type === "Income") {
                if (Data.amount != '' && Data.category != '' && Data.type != '' && Data.amount == Data.amount.match(/[0-9]+/)) {
                    const newTransaction = { ...Data, amount: Number(Data.amount), id: uuidv4() }
                    addTransaction(newTransaction)
                    setData(InitialState);
                    setErrorData([]);
                } else {
                    console.log('duomenys')
                    setErrorData({ data: "missing or incorrectly entered data" })
                }
            } else {
                console.log('nepakanka');
                setErrorData({ data: "Sorry, you don't have as much income  " })
            }
        } else {
            console.log('0')
            setErrorData({ data: "Sorry, but you have no income, or your data is wrong" })
        }



    }



    return <div className='mt-3'>
        {
            errorData.data !== undefined ?
                <div class="alert alert-danger mt-4" role="alert">
                    {errorData.data}!!!
                </div> : <></>
        }


        <div><h4>Choose Operation</h4></div>
        <div>
            <form action="" >


                <InputGroup className="mb-3">
                    <FormControl value={Data.amount} onChange={(e) => setData({ ...Data, amount: e.target.value })}
                        type='number'
                        min={1}
                        placeholder="Amount"

                    />
                </InputGroup>

                <Form.Select className='my-3' value={Data.type} onChange={(e) => setData({ ...Data, type: e.target.value })} >
                    <option value=''>Select...</option>
                    <option value='Expenses'>Expenses</option>
                    <option value='Income'>Income</option>
                </Form.Select>
                <Form.Select value={Data.category} onChange={(e) => setData({ ...Data, category: e.target.value })} >
                    <option value=''>Select...</option>
                    {selectedCategories.map(item => <option value={item.type}>{item.type}</option>)}
                </Form.Select>
                <Button className='my-3' onClick={craete} variant="primary">Patvirtinti</Button>
            </form>
        </div>
        {/* <Accordion/> */}
    </div>;

};

export default AddTrancation;
