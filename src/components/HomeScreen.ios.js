/**
 * Created by reza on 1/24/17.
 */

import React, {Component} from 'react';
import {
    TabBarIOS,
    Text,
    View,
    Alert,
    Vibration,
    StatusBar
} from 'react-native';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import SearchContainer from '../containers/SearchContainer';
import Search from './Search';
import * as globalStyles from '../styles/global';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: 'newsFeed'
        };
    }

    showBookmarkAlert() {
        Vibration.vibrate();
        Alert.alert(
            'Coming Soon!',
            'We are hard at work on this feature, check back in the near feature.',
            [
                {text: 'OK', onPress: () => console.log('User pressed OK')}
            ]
        );
    }

    render() {
        return (
            <NewsFeedContainer />
            // <TabBarIOS
            //     barTintColor={globalStyles.BAR_COLOR}
            //     tintColor={globalStyles.LINK_COLOR}
            //     translucent={false}
            // >
            //     <TabBarIOS.Item
            //         badge={4}
            //         systemIcon={'featured'}
            //         sleceted={this.state.tab === 'newsFeed'}
            //         onPress={() => this.setState({tab: 'newsFeed'})}
            //     >
            //         <NewsFeedContainer />
            //     </TabBarIOS.Item>
            //
            //     <TabBarIOS.Item
            //         systemIcon={'search'}
            //         sleceted={this.state.tab === 'search'}
            //         onPress={() => this.setState({tab: 'search'})}
            //     >
            //         <SearchContainer />
            //     </TabBarIOS.Item>
            //
            //     <TabBarIOS.Item
            //         systemIcon={'bookmarks'}
            //         sleceted={this.state.tab === 'bookmarks'}
            //         onPress={() => this.showBookmarkAlert()}
            //     >
            //         <Text>Bookmarks</Text>
            //     </TabBarIOS.Item>
            //
            // </TabBarIOS>
        )
    }
}