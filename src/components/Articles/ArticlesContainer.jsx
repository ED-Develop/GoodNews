import React from 'react';
import Articles from "./Articles";
import {connect} from "react-redux";
import {getArticles} from "../../redux/articles-reducer";

class ArticlesContainer extends React.Component{
    componentDidMount() {
        this.props.getArticles();
    }

    render() {
        return (
            <div>
                <Articles articles={this.props.articles}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getArticles
    })
};

const mapStateToProps = (state) => {
    return ({
        articles: state.articles.articles
    })
};

export default connect(mapStateToProps, mapDispatchToProps())(ArticlesContainer)