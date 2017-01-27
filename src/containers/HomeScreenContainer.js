/**
 * Created by reza on 1/27/17.
 */

import {NavigationExperimental} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import HomeScreen from '../components/HomeScreen';
import {tab} from '../actions/navigationActions';

const {StateUtils} = NavigationExperimental;

const mapStateToProps = (state) => {
    const homeState = StateUtils.get(state.navigation, 'home');
    return {
        selectedTab: homeState ? homeState.routes[homeState.index].key :
            'newsFeed'
    };
};

const mapDispatchToPtops = dispatch => (
    bindActionCreators({
        tab
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToPtops)(HomeScreen);