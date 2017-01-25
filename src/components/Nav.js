/**
 * Created by reza on 1/25/17.
 */

import React, {Component} from 'react';
import {
    Navigator,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import HomeScreen from './HomeScreen';
import IntroScreen from './IntroScreen';
import Title from './Title';
import SmallText from './SmallText';

import * as globalStyles from '../styles/global';

const HOME_ROUTE = {
    title: 'RNNYT',
    component: HomeScreen
};
const INTRO_ROUTE = {
    title: 'Welcome',
    component: IntroScreen,
    props: {
        nextScene: HOME_ROUTE
    }
};

export default class Nav extends Component {

    renderScene(route, navigator) {
        return (
            <route.component
                {...route.props}
                navigator={navigator}
            />
        );
    }

    renderNavigationBar() {
        return (
            <Navigator.NavigationBar
                routeMapper={{
                    leftButton: this.renderLeftButton,
                    RightButton: () => null,
                    Title: this.renderTitle
                }}
                style={styles.navbar}
            /> );
    }

    renderLeftButton(route, navigator, index) {
        if (index === 0) {
            return null;
        }
        return (
            <TouchableOpacity
                style={styles.leftButton}
                onPress={() => navigator.pop()}
            >
                <SmallText>Back</SmallText>
            </TouchableOpacity>
        );
    }

    renderTitle(route) {
        return (
            <Title style={styles.title}>WebView
                {route.title}
            </Title> );
    }

    render() {
        return (
            <Navigator
                intialRoute={INTRO_ROUTE}
                renderScene={this.renderScene}
                navigationBar={this.renderNavigationBar()}
            />
        );
    }
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: globalStyles.MUTED_COLOR
    },
    leftButton:{
        padding:12
    },
    title:{
        padding:8,
        backgroundColor:globalStyles.MUTED_COLOR
    }
});