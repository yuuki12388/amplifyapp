import './Menu.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ExpenseType  from './ExpenseType';
import Expense  from './Expense';

function Menu() {

    return (
        <Router>
            <div>
                <div>
                    <Link to="/">Home</Link>
                </div>                
                <div><Link to="/expensetype">Expense Types</Link></div>
                <div><Link to="/expense">Expenses</Link></div>
                <Switch>
                <Route path="/expensetype">
                        <ExpenseType />
                    </Route>  
                    <Route path="/expense">
                        <Expense />
                    </Route>                    
                    <Route path="/">
                        {/* <Home /> */}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}




export default Menu;