/**
 * Created by reza on 1/23/17.
 */

import {StyleSheet} from 'react-native';

export const BG_COLOR = '#343336';
export const BAR_COLOR = '#4e4d52';
export const TEXT_COLOR = '#e5dbda';
export const HEADER_TEXT_COLOR = '#fff';
export const MUTED_COLOR = '#8e8786';
export const LINK_COLOR = '#48e9d9';
export const ACCENT_COLORS = ['#d31d65', '#751c53', '#c248c0', '#7d6e8b', '#bbc6f7'];

export const COMMON_STYLES = StyleSheet.create({
    text: {
        color: TEXT_COLOR,
        fontFamily: 'Helvetica Neue'
    },
    pageContainer: {
        backgroundColor: BG_COLOR,
        flex: 1,
        marginTop: 50,
        paddingTop: 20,
        marginBottom: 48,
        marginHorizontal: 0,
        paddingHorizontal: 10
    }
});