import React from 'react';
import NProgress from 'nprogress';
import Router from "next/router";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import fetch from 'isomorphic-unfetch'


/* eslint-disable react/prefer-stateless-function */
class LoadMore extends React.Component {
    static defaultProps = {
        color: '#29D',
        startPosition: 0.3,
        stopDelayMs: 200,
        height: 3,
    };

    constructor(props){
        super(props);
        this.state = {
           //states
        };
      }

    timer = null;

    //   routeChangeStart = () => {
    //     // NProgress.set(this.props.startPosition);
    //     NProgress.start();
    //   };

    //   routeChangeEnd = () => {
    //     NProgress.done(true);
    //     // clearTimeout(this.timer);
    //     // this.timer = setTimeout(() => {
    //     //   NProgress.done(true);
    //     // }, this.props.stopDelayMs);
    //   };
    onClickEvent = () => {
        console.log("click");
    }

    render() {
        
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={async () => {
                    alert("I'm a button.");
                    const res = await fetch(this.props.url);
                    const data = await res.json();
                   // console.log(data.id);
                    this.props.onGetData({data}); 
                }}>
                    Load More
                </Button>
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props.url);
        const props = this.props;
        window.onscroll = async function () {
            if (window.scrollY > (document.body.offsetHeight - window.outerHeight)) {
                 console.log("It's working!");
                 const res = await fetch(props.url);
                 const data = await res.json();
                 console.log(data.id);
                 props.onGetData(data); 
            }
        }
    }
}

export default LoadMore;