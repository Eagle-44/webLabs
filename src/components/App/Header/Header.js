import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import logo from "../../../img/logo.jpg";
import Home from "../../Home/Home.js";
import Catalog from "..//../Catalog/Catalog.js";
import left from "..//..//../img/left.jpg";
import {Image, LinkingWrapper, Meme} from "./Header.styles";
import {circuses} from "..//..//Utill/UtilCircus.js";
import ItemPage from "../../ItemPage/ItemPage";


const Header = () => {

    return (
        <Router>
            <LinkingWrapper>
                <div id="header">
                    <Image>
                        <img src={logo} alt="logo"/>
                    </Image>
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
                        </li>
                        <li>
                        <NavLink exact to="/cart" activeClassName="selected">Cart</NavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path={"/itempage/:id"} component = {ItemPage}/>    
                    <Route path="/catalog" component = {Catalog}>
                        <Catalog circus = {circuses}/>
                    </Route>
                    <Route path="/cart">
                        <Meme>
                            <div id="memes">
                                <img src={left} alt="meme"/>
                            </div>
                        </Meme>
                    </Route>
                    <Route exact path="/" component = {Home}>
                        <Home/>
                    </Route>
                </Switch>
            </LinkingWrapper>
        </Router>
    )
};

export default Header;