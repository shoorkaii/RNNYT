/**
 * Created by reza on 1/24/17.
 */

import React, {PropTypes, Component} from 'react';
import {
    ListView,
    StyleSheet,
    View,
    Modal,
    TouchableOpacity,
    RefreshControl,
    ActivityIndicator,
    WebView,
    NetInfo,
    Linking
} from 'react-native';
import SmallText from './SmallText';
import AppText from './AppText';
import NewsItem from './NewsItem';
import * as globalStyles from '../styles/global';

export default class NewsFeed extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.title !== row2.title
        });

        this.state = {
            dataSource: this.ds.cloneWithRows(props.news),
            initialLoading: true,
            modalVisible: false,
            refreshing: false,
            connected: true
        };
        this.renderRow = this.renderRow.bind(this);
        this.onModalOpen = this.onModalOpen.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        this.refresh = this.refresh.bind(this);
        this.handleConnectivityChange = this.handleConnectivityChange.bind(this);
    }

    handleConnectivityChange(isConnected) {
        this.setState({
            connected: isConnected
        });
        if (isConnected) {
            this.refresh();
        }
    }

    renderModal() {
        return (
            <Modal
                visible={this.props.modal !== undefined}
                onRequestClose={this.props.onModalClose}
                animationType="slide"
            >
                <View style={styles.modalContent}>
                    <View style={styles.modalButton}>
                        <TouchableOpacity
                            onPress={this.props.onModalClose}
                            style={styles.closeButton}
                        >
                            <SmallText>Close</SmallText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Linking.openURL(this.props.modal)}
                        >
                            <SmallText>Open in Browser</SmallText>
                        </TouchableOpacity>
                    </View>
                    <WebView
                        scalesPageToFit
                        source={{uri: this.state.modal}}
                    />
                </View>
            </Modal>
        );
    }

    onModalOpen(url) {
        this.setState({
            modalVisible: true,
            modalUrl: url
        });
    }

    onModalClose() {
        this.setState({
            modalVisible: false
        });
    }

    renderRow(rowData, ...rest) {
        const index = parseInt(rest[1], 10);
        return (
            <NewsItem
                onPress={() => this.props.onModalOpen(rowData.url)}
                onBookmark={() => this.props.addBookmark(rowData.url)}
                style={styles.newsItem}
                index={index}
                {...rowData}
            /> );
    }

    componentWillMount() {
        NetInfo.isConnected.addEventListener('change',
            this.handleConnectivityChange);
        this.refresh();
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('change',
            this.handleConnectivityChange);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.news),
            initialLoading: false
        });
    }

    refresh() {
        if (this.props.load) {
            this.props.load();
        }
    }

    render() {
        const {listStyles = globalStyles.COMMON_STYLES.pageContainer, showLoadingSpinner} = this.props;
        const {initialLoading, refreshing, dataSource} = this.state;

        if (!this.state.connected) {
            return (
                <View
                    style={[globalStyles.COMMON_STYLES.pageContainer, styles.loadingContainer]}
                >
                    <AppText>
                        No Connection
                    </AppText>

                </View>
            );
        }

        return (
            (initialLoading && showLoadingSpinner
                    ? (
                        <View style={[listStyles, styles.loadingContainer]}>
                            <ActivityIndicator
                                animating
                                size="small"
                                {...this.props}
                            />
                        </View>
                    ) : (
                        <View style={styles.container}>
                            <ListView
                                refreshControl={
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={this.refresh}
                                    /> }
                                enableEmptySections
                                dataSource={dataSource}
                                renderRow={this.renderRow}
                                style={listStyles}
                            />
                            {this.renderModal()}
                        </View>
                    )
            )
        );
    }
}

NewsFeed.prototypes = {
    news: PropTypes.arrayOf(PropTypes.object),
    listStyles: View.propTypes.style,
    load: PropTypes.func,
    showLoadingSpinner: PropTypes.bool,
    modal: PropTypes.string,
    onModalOpen: PropTypes.func.isRequired,
    onModalClose: PropTypes.func.isRequired,
    addBookmark:PropTypes.func.isRequired
};

NewsFeed.defaultProps = {
    showLoadingSpinner: true
};

const styles = StyleSheet.create({
    newsItem: {
        marginBottom: 20
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: globalStyles.BG_COLOR
    },
    container: {
        flex: 1
    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    modalButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
