/**
 * Created by reza on 1/24/17.
 */

import React, {Component, PropTypes} from 'react';
import {
    TabBarIOS,
    Text,
    Alert,
    Vibration,
    StatusBar
} from 'react-native';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import SearchContainer from '../containers/SearchContainer';
import * as globalStyles from '../styles/global';

StatusBar.setBarStyle('light-content');

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

        const {selectedTab, tab} = this.props;
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
            //         sleceted={selectedTab === 'newsFeed'}
            //         onPress={() => tab('newsFeed')}
            //     >
            //         <NewsFeedContainer />
            //     </TabBarIOS.Item>
            //
            //     <TabBarIOS.Item
            //         systemIcon={'search'}
            //         sleceted={selectedTab === 'search'}
            //         onPress={() => tab('search')}
            //     >
            //         <NewsFeedContainer />
            //     </TabBarIOS.Item>
            //
            //     <TabBarIOS.Item
            //         systemIcon={'bookmarks'}
            //         sleceted={selectedTab === 'bookmarks'}
            //         onPress={() => this.showBookmarkAlert()}
            //     >
            //         <NewsFeedContainer />
            //     </TabBarIOS.Item>
            //
            // </TabBarIOS>
        )
    }
}

HomeScreen.propTypes = {
    selectedTab: PropTypes.string,
    tab: PropTypes.func.isRequired
};