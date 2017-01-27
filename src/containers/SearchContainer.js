/**
 * Created by reza on 1/25/17.
 */

import {NavigationExperimental} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {openModal, closeModal} from '../actions/navigationActions';
import {searchNews} from '../actions/newsActions';
import Search from '../components/Search';
import {searchNewsSelector} from '../selectors/newsSelectors';

const {StateUtils} = NavigationExperimental;

const mapStateToProps = state => {
    const homeState = StateUtils.get(state.navigation, 'home');
    const searchState = homeState && StateUtils.get(homeState, 'search');
    const modal = searchState && searchState.modal;
    return {
        filteredNews: searchNewsSelector(state),
        modal: modal || undefined
    };
};


const mapDispatchToProps = dispatch => (
    bindActionCreators({
        searchNews,
        onModalOpen: openModal,
        onModalClose: closeModal
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);