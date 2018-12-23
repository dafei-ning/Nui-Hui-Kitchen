import React from 'react';

import Model from '../../components/UI/Model/Model';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent) => {
    return (props) => {
        return (
            <Aux>
                <Model>
                    Something not works!
                </Model>
                <WrappedComponent {...props} />
            </Aux>

        );
    }
}

export default withErrorHandler;