import React from "react";
import Home from "./Home";
import {connect} from "react-redux";
import {getCarouselData} from "../../redux/articles-selector";
import {getCategoryArticles, getTopArticles} from "../../redux/home-reducer";

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.getTopArticles(5, 'business');
        this.props.getCategoryArticles(['technology', 'sport'], 7)
    }

    render() {
        return (
            <>
                <Home categories={this.props.categories} carouselData={this.props.carouselData}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carouselData: getCarouselData(state),
        categories: state.home.categoryArticles
    }
};

export default connect(mapStateToProps, {getTopArticles, getCategoryArticles})(HomeContainer);