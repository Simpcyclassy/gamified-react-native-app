import React from 'react';
import {View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateTransactions } from '../../router/actions';


const Home = () => {
    const dispatch = useDispatch();

    return (
        <View>
            <Text>Welcome Chioma</Text>
            <Button title="Go to quiz" onPress={() =>dispatch(updateTransactions(`/questions`))}/>
        </View>

    );
}

export default Home;
