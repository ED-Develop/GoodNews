import React from "react";
import Home from "./Home";
import {connect} from "react-redux";
import {getCarouselData} from "../../redux/articles-selector";
import {getCategoryArticles, getTopArticles} from "../../redux/home-reducer";
import Preloader from "../common/Preloader/Preloader";

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.getTopArticles(5, 'business');
        this.props.getCategoryArticles(['politics', 'technology', 'sport', 'business'], 6)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Home categories={this.props.categories} carouselData={this.props.carouselData}/>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carouselData: getCarouselData(state),
        categories: state.home.categoryArticles,
        isFetching: state.app.isFetching
    }
};

export default connect(mapStateToProps, {getTopArticles, getCategoryArticles})(HomeContainer);