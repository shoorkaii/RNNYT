/**
 * Created by reza on 1/25/17.
 */

import React, {PropTypes} from 'react';
import {
    View,
    TouchableOpacity,
    StatusBar,
    StyleSheet
} from 'react-native';
import Title from './Title';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

StatusBar.setBarStyle('light-content');

const IntroScreen = ({navigator, nextScene}) => (
    <View style={[globalStyles.COMMON_STYLES.pageContainer,
        styles.container]}>
        <TouchableOpacity
            onPress={() => navigator.push(nextScene)}
        >
            <Title>React Native News Reader</Title>
            <AppText>
                Start Reading
            </AppText>
        </TouchableOpacity>
    </View>
);

IntroScreen.prototype = {
    navigator: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    nextScene: PropTypes.objectOf(PropTypes.any)
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default IntroScreen;