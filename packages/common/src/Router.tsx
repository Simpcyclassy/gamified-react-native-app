import React, {useState} from 'react';

import { Home } from './components/home/components';
import { Questions } from './components/questions/components';

const Router = () => {
    const [route, setRoute] = useState('Home');

    return(
        route === 'Home' ? <Home /> : <Questions />
    )
};

export default Router;
