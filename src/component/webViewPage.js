import React, {
	Component
} from 'react';

import {
	StyleSheet,
	WebView,
	View,
	Modal,
	BackAndroid,
	Dimensions,
} from 'react-native';

import { naviGoBack } from '../util/common';
import LoadingView from './loadingView';
import {
	toastShort
} from '../util/toast';

let canGoBack = false;
let source;

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF'
  },
  spinner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.65)'
  },
  spinnerContent: {
    justifyContent: 'center',
    width: Dimensions.get('window').width * (7 / 10),
    height: Dimensions.get('window').width * (7 / 10) * 0.68,
    backgroundColor: '#fcfcfc',
    padding: 20,
    borderRadius: 5
  },
  spinnerTitle: {
    fontSize: 18,
    color: '#313131',
    textAlign: 'center',
    marginTop: 5
  },
  shareParent: {
    flexDirection: 'row',
    marginTop: 20
  },
  shareContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareIcon: {
    width: 40,
    height: 40
  }
});

class WebViewPage extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
	  this.goBack = this.goBack.bind(this);
	}
	
	componentWillMount() {
		let {uri} = this.props;
		source = typeof uri === 'string'?{uri}:uri;
	}

	componentDidMount() {
		BackAndroid.addEventListener('hardwareBackPress', this.goBack);
	}

	componentWillUnmount() {
		BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
	}

	onNavigationStateChange(navState) {
		canGoBack = navState.canGoBack;
	}

	goBack() {
		if (canGoBack) {
			this.webview.goBack();
			return true;
		}
		return naviGoBack();
	}

	renderLoading() {
		return <LoadingView />
	}

	render() {
		return (
			<View style={styles.container}>
				<WebView
					ref={(ref) => { this.webview = ref; }}
					automaticallyAdjustContentInsets={false}
					style={styles.base}
					source={{uri:this.props.uri}}
					javaScriptEnabled
					domStorageEnabled
					startInLoadingState
					scalesPageToFit
					decelerationRate="normal"
					onShouldStartLoadWithRequest={() => {
						const shouldStartLoad = true;
						return shouldStartLoad;
					}}
					onNavigationStateChange={this.onNavigationStateChange}
					renderLoading={this.renderLoading}
				/>
			</View>
		);
	}
}

export default WebViewPage;