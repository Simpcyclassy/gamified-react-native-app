import React from 'react';
import {View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

const Questions = () => {
    const dispatch = useDispatch();

    return (
        <View>
            <Text>
                Maths Quiz
            </Text>
        </View>

    );
}

export default Questions;
