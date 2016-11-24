import React, {
	Component
} from 'react';
import {
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
	button: {
		height: 40,
		width: 200,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'green',
	},
	text: {
		fontSize: 16,
		color: 'white',
	},
});

export default class Button extends Component {
	pressHandle() {
		const {
			onPress: handle
		} = this.props;

		handle && handle();
	}
	render() {
		let {
			style = {},
				textStyle = {},
				text,
		} = this.props;

		style = [styles.button, style];
		textStyle = [styles.text, textStyle];

		return (
			<TouchableOpacity style={style} onPress={this.pressHandle.bind(this)}>
				<Text style={textStyle}>{text}</Text>
			</TouchableOpacity>
		);
	}
}