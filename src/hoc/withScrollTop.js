import React from "react";
import GoTop from "../components/common/GoTop/GoTop";
import CSSTransition from "react-transition-group/cjs/CSSTransition";

export const withScrollTop = (Component) => {
    class ScrollTop extends React.Component {
        state = {
            isGoTop: false
        };

        componentDidMount() {
            window.addEventListener('scroll', this.onScroll)
        };

        componentWillUnmount() {
            window.removeEventListener('scroll', this.onScroll)
        };

        onScroll = (e) => {
            let scroll = window.pageYOffset;

            if (scroll > 600) {
                this.setState({isGoTop: true})
            } else {
                this.setState({isGoTop: false})
            }
        };

        scrollTop = () => {
            let increment = window.pageYOffset / 20;
            let scroller = setInterval(() => {
                window.scrollTo(0, window.pageYOffset - increment);

                if (window.pageYOffset <= 0) clearInterval(scroller);
            }, 20);
        };

        render() {
            return (
                <>
                    <CSSTransition
                        in={this.state.isGoTop}
                        classNames="btnGoTop"
                        timeout={300}
                        unmountOnExit
                    >
                        <GoTop scrollTop={this.scrollTop}/>
                    </CSSTransition>
                    <Component scrollTop={this.scrollTop} {...this.props}/>
                </>
            )
        }
    }

    return ScrollTop;
};
