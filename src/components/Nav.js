/**
 * Created by reza on 1/25/17.
 */

import React, {Component, PropTypes} from 'react';
import {
    NavigationExperimental,
    StyleSheet
} from 'react-native';

import * as globalStyles from '../styles/global';

const {Header ,CardStack} = NavigationExperimental;

export default class Nav extends Component {

    constructor(props, context){
        super(props, context);
        this.renderScene = this.renderScene.bind(this);
        this.renderNavigationBar = this.renderNavigationBar.bind(this);
    }

    renderScene(sceneProps) {
        const route = sceneProps.scene.route;
        return (
            <route.component
                {...route.props}
                navigator={navigator}
                push={this.props.push}
                pop={this.props.pop}
            />
        );
    }

    renderNavigationBar(sceneProps) {
        return (
            <Header
                style={styles.navigationBar}
                onNavigationBack={this.props.pop}
                {...sceneProps}
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
            <CardStack
                onNavigationBack={this.props.pop}
                navigationState={this.props.navigation}
                renderScene={this.renderScene}
                renderHeader={this.renderNavigationBar}
                style={styles.cardStack}
            />
        );
    }
}

Nav.propTypes = {
    push: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
    navigation: PropTypes.objectOf(PropTypes.any)
};

const styles = StyleSheet.create({
    cardStack:{
        flex:1
    },
    navigationBar:{
        backgroundColor:globalStyles.MUTED_COLOR
    }
});