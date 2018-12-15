import React, {Component} from 'react';

import Aux from '../../hoc/Aux'
import Dish from '../../components/Dish/Dish';

class DishBuilder extends Component {
    render () {
        return (
            <Aux>
                <Dish />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default DishBuilder;