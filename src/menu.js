import React, {
	Component
} from 'react';

import {
	View,
	StyleSheet,
	ListView,
	RefreshControl,
	Text,
} from 'react-native';

var Icon = require('react-native-vector-icons/FontAwesome');
import Button from './component/button';
import Util from './util/utils';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemLayout: {
		flex: 1,
		width: Util.size.width / 3,
		height: Util.size.width / 3,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: Util.pixel,
		borderColor: '#eaeaea'
	},
	grid: {
		justifyContent: 'space-around',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
});


export default class Menu extends Component {
	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 != r2
		});

		this._data = [
			'毛里求斯欢迎您',
			'出国前准备',
			'图解交流',
			'做文明游客',
			'碰到困难时',
		];

		this.state = {
			dataSource: ds.cloneWithRows(this._data),
			isRefreshing: false,
			ds
		};
	}

	_onRefresh() {
		this.setState({
			isRefreshing: true
		});

		setTimeout(() => {
			this._data = this._data.concat([
				'毛里求斯欢迎您',
				'出国前准备',
				'图解交流',
				'做文明游客',
				'碰到困难时',
			]);
			this.setState({
				isRefreshing: false,
				dataSource: this.state.ds.cloneWithRows(this._data)
			})
		}, 5000);
	}

	goBack = () => {
		this.props.navigator.jumpBack();
	}

	render() {
		return ( < ListView dataSource = {
					this.state.dataSource
				}
				pageSize = {
					3
				}
				contentContainerStyle = {
					styles.grid
				}
				refreshControl = {
					<RefreshControl
		            refreshing={this.state.isRefreshing}
		            onRefresh={this._onRefresh.bind(this)}
		            tintColor="#ff0000"
		            title="Loading..."
		            titleColor="#00ff00"
		            colors={['#ff0000', '#00ff00', '#0000ff']}
		            progressBackgroundColor="#ffff00"/>
				}
				renderRow = {
					(rowData) => {
						<View style={styles.itemLayout}>
						<Text>{rowData}</Text>
					</View>
					}
				}
				/>
		);
	}
}