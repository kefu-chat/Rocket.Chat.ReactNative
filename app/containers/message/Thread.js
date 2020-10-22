import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { formatMessageCount } from './utils';
import styles from './styles';
import { CustomIcon } from '../../lib/Icons';
import { THREAD } from './constants';
import { themes } from '../../constants/colors';
import { formatDateThreads } from '../../utils/room';

const Thread = React.memo(({
	msg, tcount, tlm, isThreadRoom, theme
}) => {
	if (!tlm || isThreadRoom || tcount === 0) {
		return null;
	}

	const time = formatDateThreads(tlm);
	const buttonText = formatMessageCount(tcount, THREAD);
	return (
		<View style={styles.buttonContainer}>
			<View
				style={[styles.button, { backgroundColor: themes[theme].tintColor }]}
				testID={`message-thread-button-${ msg }`}
			>
				<CustomIcon name='threads' size={16} style={[styles.buttonIcon, { color: themes[theme].buttonText }]} />
				<Text style={[styles.buttonText, { color: themes[theme].buttonText }]}>{buttonText}</Text>
			</View>
			<Text style={[styles.time, { color: themes[theme].auxiliaryText }]}>{time}</Text>
		</View>
	);
}, (prevProps, nextProps) => {
	if (prevProps.tcount !== nextProps.tcount) {
		return false;
	}
	if (prevProps.theme !== nextProps.theme) {
		return false;
	}
	return true;
});

Thread.propTypes = {
	msg: PropTypes.string,
	tcount: PropTypes.string,
	theme: PropTypes.string,
	tlm: PropTypes.string,
	isThreadRoom: PropTypes.bool
};
Thread.displayName = 'MessageThread';

export default Thread;
