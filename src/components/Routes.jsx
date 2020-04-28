import React from "react";
import {Route} from "react-router-dom";
import HomeContainer from "./Home/HomeContainer";
import ArticlesContainer from "./Articles/ArticlesContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import {Container} from "react-bootstrap";

const Routes = () => {
    return (
        <Container>
            <Route path='/' exact component={HomeContainer}/>
            <Route path="/articles/:category?" component={ArticlesContainer}/>
            <Route path="/profile" component={ProfileContainer}/>
        </Container>
    )
};

export default Routes;
