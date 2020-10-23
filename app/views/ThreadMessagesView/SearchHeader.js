import React from 'react';
import {
	ImageBackground, StyleSheet, Text, View
} from 'react-native';
import PropTypes from 'prop-types';

import { withTheme } from '../../theme';
import sharedStyles from '../Styles';
import { themes } from '../../constants/colors';
import TextInput from '../../presentation/TextInput';
import { isTablet, isIOS } from '../../utils/deviceInfo';
import { useOrientation } from '../../dimensions';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginLeft: 0
	},
	title: {
		...sharedStyles.textSemibold
	}
});

const SearchHeader = ({ theme }) => {
	const titleColorStyle = { color: themes[theme].headerTitleColor };
	const isLight = theme === 'light';
	const { isLandscape } = useOrientation();
	const scale = isIOS && isLandscape && !isTablet ? 0.8 : 1;
	const titleFontSize = 16 * scale;

	return (
		<View style={styles.container}>
			<TextInput
				autoFocus
				style={[styles.title, isLight && titleColorStyle, { fontSize: titleFontSize }]}
				placeholder='Search'
				// onChangeText={onSearchChangeText}
				theme={theme}
				testID='thread-messages-view-search-header'
			/>
		</View>
	);
};

SearchHeader.propTypes = {
	theme: PropTypes.string
};
export default withTheme(SearchHeader);
