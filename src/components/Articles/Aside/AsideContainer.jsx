import React from 'react';
import Aside from "./Aside";
import {connect} from "react-redux";
import {getAsideArticles, setAsideFilter} from "../../../redux/articles-reducer";
import {getArticlesTitle} from "../../../redux/articles-selector";

class AsideContainer extends React.Component {
    componentDidMount() {
        this.props.getAsideArticles();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.asideFilter !== this.props.asideFilter) {
            this.props.getAsideArticles();
        }
    }

    setActiveButton = (button) => {
        this.props.setAsideFilter(button);
    };


    render() {
        return (
            <div>
                <Aside articles={this.props.articles} asideFilter={this.props.asideFilter}
                       setActiveButton={this.setActiveButton}/>
            </div>
        )
    }
}


const mapsStateToProps = (state) => {
    return {
        articles: getArticlesTitle(state),
        asideFilter: state.articles.asideFilter,
    }
};

export default connect(mapsStateToProps, {setAsideFilter, getAsideArticles})(AsideContainer);