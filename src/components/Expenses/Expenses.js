import React ,{ useState }from 'react'
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
const Expenses = (props) => {
    const [filteredYear , setFilteredYear] = useState('2020');
    console.log("props",props);
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
        console.log(`happy ${selectedYear}`);
    }
    const filteredExpenses = props.items.filter (expense =>{
             return expense.date.getFullYear().toString() === filteredYear;
    });
    
    return(
        <div>
        <Card className="expenses">
        <ExpensesFilter
         selected={filteredYear}
          onChangeFilter ={filterChangeHandler} />
         <ExpenseList items ={filteredExpenses} />
           </Card>
           </div>
    );
}
export default Expenses;