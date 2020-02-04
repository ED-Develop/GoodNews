import React from 'react';
import Articles from "./Articles";
import {connect} from "react-redux";
import {getEverythingArticles} from "../../redux/articles-reducer";

class ArticlesContainer extends React.Component{
    componentDidMount() {
        this.props.getEverythingArticles();
    }

    render() {
        return (
            <div>
                <Articles articles={this.props.articles}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        articles: state.articles.everythingArticles
    })
};

export default connect(mapStateToProps, {getEverythingArticles})(ArticlesContainer)