import React from "react";
import Home from "./Home";
import {connect} from "react-redux";
import {getTopArticles} from "../../redux/articles-reducer";
import {getCarouselData} from "../../redux/articles-selector";

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.getTopArticles(5, 'technology');
    }

    render() {
        return (
            <>
                <Home carouselData={this.props.carouselData}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carouselData: getCarouselData(state)
    }
};

export default connect(mapStateToProps, {getTopArticles})(HomeContainer);