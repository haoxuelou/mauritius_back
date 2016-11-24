import React, {
	Component
} from 'react';

import {
	StyleSheet,
	Text
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import CodePush from 'react-native-code-push';

import TabBar   from '../component/tabBar';

import Home     from './home';
import Plane    from './plane';
import Camera   from './camera';
import ThumbsUp from './thumbsUp';
import Bell     from './bell';

const styles = StyleSheet.create({
	/**
	 * iOS平台下, react-native-scrollable-tab-view是用ScrollView实现的
	 * 当react-native-scrollable-tab-view嵌套react-native-viewpager时, 需要给react-native-scrollable-tab-view的子View设置overflow='hidden',
	 * ScrollView的removeClippedSubviews才能起作用, 将不在屏幕可视范围的视图移除掉.
	 */
	subView: {
		overflow: 'hidden'
	}
});

//tabbar图片资源
const TAB_BAR_RESOURCES = [
	[require('../webpage/imgs/home.png'), '毛求欢迎您',require('../webpage/imgs/home-o.png')],
	[require('../webpage/imgs/plane.png'), '出国前准备',require('../webpage/imgs/plane-o.png')],
	[require('../webpage/imgs/camera.png'), '用图说话',require('../webpage/imgs/camera-o.png')],
	[require('../webpage/imgs/thumbs-up.png'), '文明游客',require('../webpage/imgs/thumbs-up-o.png')],
	[require('../webpage/imgs/bell.png'), '寻求帮助',require('../webpage/imgs/bell-o.png')],
];

export default class MainContainer extends Component {
	constructor(props) {
		super(props);

		this.codePushStatusDidChange.bind(this);
      	this.codePushDownloadDidProgress.bind(this);
	}

	componentDidMount() {
		CodePush.sync({
			updateDialog: {
				optionalIgnoreButtonLabel: '稍后',
				optionalInstallButtonLabel: '后台更新',
				optionalUpdateMessage: '有新版本了，是否更新？',
				title: '更新提示'
			},
			installMode: CodePush.InstallMode.IMMEDIATE
		}, this.codePushStatusDidChange, this.codePushDownloadDidProgress);
  	}

	codePushStatusDidChange(syncStatus) {
		switch(syncStatus) {
			case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
				console.log({ syncMessage: "Checking for update." });
				break;
			case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
				console.log({ syncMessage: "Downloading package." });
				break;
			case CodePush.SyncStatus.AWAITING_USER_ACTION:
				console.log({ syncMessage: "Awaiting user action." });
				break;
			case CodePush.SyncStatus.INSTALLING_UPDATE:
				console.log({ syncMessage: "Installing update." });
				break;
			case CodePush.SyncStatus.UP_TO_DATE:
				console.log({ syncMessage: "App up to date.", progress: false });
				break;
			case CodePush.SyncStatus.UPDATE_IGNORED:
				console.log({ syncMessage: "Update cancelled by user.", progress: false });
				break;
			case CodePush.SyncStatus.UPDATE_INSTALLED:
				console.log({ syncMessage: "Update installed and will be applied on restart.", progress: false });
				break;
			case CodePush.SyncStatus.UNKNOWN_ERROR:
				console.log({ syncMessage: "An unknown error occurred.", progress: false });
				break;
		}
	}

	codePushDownloadDidProgress(progress) {
		console.log({ progress });
	}

	render() {
		return (
			<ScrollableTabView
			 	tabBarPosition = "bottom"
				locked = {true} 
				scrollWithoutAnimation = {true}
				prerenderingSiblingsNumber = {4}
				renderTabBar = {
					() => {
						/*使用自定义tabbar*/
						return <TabBar tabBarResources={TAB_BAR_RESOURCES}/>
					}
				}>
				<Home style={styles.subView} n={this.props.navigator}/>
				<Plane style={styles.subView}/>
				<Camera style={styles.subView}/>
				<ThumbsUp style={styles.subView}/>
				<Bell style={styles.subView}/>
			</ScrollableTabView>
		);
	}
}