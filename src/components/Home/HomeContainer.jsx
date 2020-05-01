import React from "react";
import Home from "./Home";
import {connect} from "react-redux";
import {getCarouselData} from "../../redux/articles-selector";
import {initializeHomePage} from "../../redux/home-reducer";
import {subscribe} from "../../redux/auth-reducer";
import {compose} from "redux";
import {withScrollTop} from "../../hoc/withScrollTop";
import Preloader from "../common/Preloader/Preloader";

class HomeContainer extends React.Component {
    componentDidMount() {
       if (this.props.region) {
           this.getArticles();
       }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.region && prevProps.region !== this.props.region) {
           this.getArticles();
        }
    }

    getArticles = () => {
        this.props.initializeHomePage(
            [5],
            [['politics', 'technology', 'sport', 'business', 'science'], 6]
        );
    };

    render() {
        const {isSubscribe, subscribe, categories, carouselData, isAuth, popularArticles} = this.props;

        return (
            <>
                {
                    this.props.isInitialized
                        ? <Home
                            isSubscribe={isSubscribe}
                            subscribe={subscribe}
                            categories={categories}
                            carouselData={carouselData}
                            isAuth={isAuth}
                            popularArticles={popularArticles}
                        />
                        : <Preloader/>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carouselData: getCarouselData(state),
        categories: state.home.categoryArticles,
        popularArticles: state.home.topArticles,
        isSubscribe: state.auth.isSubscribe,
        isAuth: state.auth.isAuth,
        isInitialized: state.app.isInitialized,
        region: state.app.region
    }
};

export default compose(connect(mapStateToProps, {subscribe, initializeHomePage}),
    withScrollTop)(HomeContainer);
