import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	InteractionManager,
} from 'react-native';

import BaseComponent from '../base/baseContainer'
import WebViewPage from './webViewPage';
import Lv from './loadingView';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		lineHeight: 21,
	}
});

class IntroView extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		};
	}

	componentDidMount() {
		this.setState({
			loading: true
		});
	}

	getNavigatorBarProps() {
		return {
			title: this.props.title
		};
	}

	renderBody() {
		if(!this.state.loading) {
			return (
				<Lv/>
			);
		}
		
		return (
			<WebViewPage uri={this.props.intro}/>
		);
	};
}

export default IntroView; 