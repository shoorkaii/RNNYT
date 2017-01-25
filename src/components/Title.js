/**
 * Created by reza on 1/23/17.
 */

import React, {PropTypes} from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

const Title = ({style, children}) => (
    <AppText style={[style.title, style]}>
        {children}
    </AppText>
);

Title.prototype = {
    style: Text.propTypes.style,
    children: PropTypes.node
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'HelveticaNeue-CondensedBold',
        fontSize: 18,
        color: globalStyles.HEADER_TEXT_COLOR,
        backgroundColor: `${globalStyles.BG_COLOR}99`
    }
});

export default Title;