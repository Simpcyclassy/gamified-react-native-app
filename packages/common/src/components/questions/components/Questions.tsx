import React from 'react';
import {View, Text, Button } from 'react-native';
import { updateTransactions } from '../../router/actions';
import { useDispatch } from 'react-redux';

const Questions = () => {
    const dispatch = useDispatch();

    return (
        <View>
            <Text>
                Maths Quiz
            </Text>
            <Button title="Go to quiz" onPress={() =>dispatch(updateTransactions(`/home`))}/>
        </View>

    );
}

export default Questions;
