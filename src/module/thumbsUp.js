import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	InteractionManager
} from 'react-native';

import WebViewPage from '../component/webViewPage';
import LoadingView from '../component/loadingView';
import NavigatorBar from '../component/navigationBar';

import {
	ThumbsUpUri
} from '../data/allData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default class ThumbsUp extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  };

	  this.getNavigatorBarProps = this.getNavigatorBarProps.bind(this);
	  this.renderNavigatorBar   = this.renderNavigatorBar.bind(this);
	  this.onLeftPressed        = this.onLeftPressed.bind(this);
	  this.onRightPressed       = this.onRightPressed.bind(this);
	}

	getNavigatorBarProps() {
		return {
			hideLeftButton: true,
			title: '做文明游客'
		};
	}

	renderNavigatorBar() {
		let navigationBarProps = this.getNavigatorBarProps();
		return (
			<NavigatorBar 
				navigationBarProps={navigationBarProps}
				onLeftPressed={this.onLeftPressed}
				onRightPressed={this.onRightPressed}/>
		);
	}

	componentWillMount() {

	}

	componentDidMount() {
	}

	componentWillUnmount() {
		
	}

	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				{this.renderNavigatorBar()}
				<WebViewPage uri={ThumbsUpUri} />
			</View>
		);
	}

	onLeftPressed() {
		
	}

	onRightPressed() {

	}
}