import React, { Component } from 'react';

import Model from '../../components/UI/Model/Model';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
        }

        componentWillMount () {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req; // 当send一个request，必须return这个request让它continue
            })
            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error})
            })
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        render() {
            return (
                <Aux>
                    <Model show={this.state.error} modelClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Model>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        };
    }
}

export default withErrorHandler;