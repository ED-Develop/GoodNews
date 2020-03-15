import React from "react";
import Home from "./Home";
import {connect} from "react-redux";
import {getCarouselData} from "../../redux/articles-selector";
import {getCategoryArticles, getTopArticles} from "../../redux/home-reducer";
import Preloader from "../common/Preloader/Preloader";
import {subscribe} from "../../redux/auth-reducer";
import {compose} from "redux";
import {withScrollTop} from "../../hoc/withScrollTop";

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.getTopArticles(5);
        this.props.getCategoryArticles(['politics', 'technology', 'sport', 'business'], 6)
    }

    render() {
        const {isSubscribe, subscribe, categories, carouselData, isAuth, popularArticles} = this.props;

        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Home isSubscribe={isSubscribe} subscribe={subscribe}
                            categories={categories} carouselData={carouselData}
                            isAuth={isAuth} popularArticles={popularArticles}/>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carouselData: getCarouselData(state),
        categories: state.home.categoryArticles,
        popularArticles: state.home.topArticles,
        isFetching: state.app.isFetching,
        isSubscribe: state.auth.isSubscribe,
        isAuth: state.auth.isAuth
    }
};

export default compose(connect(mapStateToProps, {getTopArticles, getCategoryArticles, subscribe}),
    withScrollTop)(HomeContainer);