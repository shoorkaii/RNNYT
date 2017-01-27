/**
 * Created by reza on 1/24/17.
 */

import {NavigationExperimental} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadNews} from '../actions/newsActions';
import NewsFeed from '../components/NewsFeed';
import {openModal, closeModal} from '../actions/navigationActions';
import {allNewsSelector} from '../selectors/newsSelectors';


const {StateUtils} = NavigationExperimental;

const mapStateToProps = state => {
    const homeState = StateUtils.get(state.navigation, 'home');
    const newsFeedState = homeState && StateUtils.get(homeState, 'newsFeed');
    const modal = newsFeedState && newsFeedState.modal;
    return {
        news: allNewsSelector(state),
        modal: modal || undefined
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loadNews,
        onModalOpen: openModal,
        onModalClose: closeModal
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);