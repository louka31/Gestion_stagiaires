import React from "react";
import { BrowserRouter as Router, Route, Routes ,Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import CrudAdd from "./components/cruds/CrudAdd";
import CrudTable from "./components/cruds/CrudTable";
import CrudListView from "./components/cruds/CrudListView";
import CrudDetails from "./components/cruds/CrudDetails";
import CrudEdit from "./components/cruds/CrudEdit";
import CrudDelete from "./components/cruds/CrudDelete";
import Footer from "./components/common/Footer";
import Login from "./components/Login";


function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			</Routes>
				<Navbar />

				<Routes>
					
				
					
					<Route exact path="/cruds" element={<CrudTable />} />					
					<Route exact path="/cruds/list-view" element={<CrudListView />} />
					<Route exact path="/cruds/new" element={<CrudAdd />} />
					<Route exact path="/cruds/:_id" element={<CrudDetails />} />
					<Route exact path="/cruds/:_id/edit" element={<CrudEdit />} />
					<Route exact path="/cruds/:_id/delete" element={<CrudDelete />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
