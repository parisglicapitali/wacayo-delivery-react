// Importing React Router
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

// styles
import './App.css';

// components
import Header from './Components/Header/Header';

// pages
import Home from "./Pages/Home/Home";
import ProductList from "./Pages/ProductList/ProductList";
import ViewProduct from "./Pages/ViewProduct/ViewProduct";
import CreateOrder from "./Pages/CreateOrder/CreateOrder";
import Successfully from "./Pages/Successfully/Successfully";
import Error from './Pages/Error/Error';

function App() {
	return (
		<div className="App">
			<Router>
				<Header/>
				
				<div className="container">
					<Switch>
						<Route path="/" exact component={ Home } />
						<Route path="/category/:category" exact component={ ProductList } />
						<Route path="/product/:productId" exact component={ ViewProduct } />
						<Route path="/order/:productId" exact component={ CreateOrder } />
						<Route path="/successfully" exact component={ Successfully } />
						<Route path="/error" exact component={ Error } />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
