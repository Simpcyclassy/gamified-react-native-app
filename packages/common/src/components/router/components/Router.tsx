// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavigationActions } from 'react-navigation';

// import { updateTransactions } from '../actions';
// import { getPath } from '../selectors';

// import { Home } from '../../home/components';
// import { Questions } from '../../questions/components';

// const Router = () => {
//     const dispatch = useDispatch();

//     const { path } = useSelector(state => ({
//         path: getPath(state),
//     }));

//     useEffect(() => {
//         dispatch(updateTransactions(`/home`));
//     }, [dispatch]);

//     return(
//         path === '/home' ? <Home /> : <Questions />
//     )
// };

// export default Router;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../home/components';
import { Questions } from '../../questions/components';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Questions" component={Questions} />
            </Stack.Navigator>
        </NavigationContainer>
      );
};

export default Router;
