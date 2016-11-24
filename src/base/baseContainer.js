import React, {
	Component
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
  InteractionManager
} from 'react-native';

import {getNavigator} from '../route';
import NavigatorBar from '../component/navigationBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default class BaseContainer extends Component {
	constructor(props) {
	  super(props);
	
	  this.getNavigatorBarProps = this.getNavigatorBarProps.bind(this);
	  this.renderNavigatorBar   = this.renderNavigatorBar.bind(this);
	  this.renderBody           = this.renderBody.bind(this);
	  this.onLeftPressed        = this.onLeftPressed.bind(this);
	  this.onRightPressed       = this.onRightPressed.bind(this);
	}

	getNavigatorBarProps() {
		return null;
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

	renderBody() {

	}

	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				{this.renderNavigatorBar()}
				{this.renderBody()}
			</View>
		);
	}

	componentWillUnmount() {

	}

	onLeftPressed() {
		getNavigator().pop();
	}

	onRightPressed() {

	}
}