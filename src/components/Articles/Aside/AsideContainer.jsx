import React from 'react';
import Aside from "./Aside";
import {connect} from "react-redux";
import {getAsideArticles, setAsideFilter} from "../../../redux/articles/articles-reducer";
import {sortAsideArticles} from "../../../redux/articles/articles-selector";
import style from "./Aside.module.css";

class AsideContainer extends React.Component {
    setActiveButton = (button) => {
        this.props.setAsideFilter(button);
    };

    render() {
        return (
            <div className={style.asideContainer + ' ' + 'position-fixed'}>
                <Aside
                    articles={this.props.articles}
                    asideFilter={this.props.asideFilter}
                    setActiveButton={this.setActiveButton}
                />
            </div>
        )
    }
}


const mapsStateToProps = (state) => {
    return {
        articles: sortAsideArticles(state),
        asideFilter: state.articles.asideFilter,
    }
};

export default connect(mapsStateToProps, {setAsideFilter, getAsideArticles})(AsideContainer);
