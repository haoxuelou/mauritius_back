import React from 'react';

import {
	View,
	Text,
	StyleSheet,
	InteractionManager,
	TouchableOpacity,
	ListView
} from 'react-native';

import IconFA from 'react-native-vector-icons/FontAwesome';


import BaseComponent from '../base/baseContainer';
import {
	BellList,
	BellDetail,
} from '../data/allData';
import {getNavigator} from '../route';

const styles = StyleSheet.create({
	rowStyle: {
		paddingVertical: 20,
		paddingLeft: 16,
		paddingRight: 16,
		borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
	}
});

export default class Bell extends BaseComponent {
	constructor(props) {
	  super(props);
	
	  this.fetchData = this.fetchData.bind(this);
	  this.pressHandle = this.pressHandle.bind(this);

	  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	
	  this.state = {
	  	ds
	  };

	  this._data = [];
	}

	getNavigatorBarProps() {
		return {
			hideLeftButton: true,
			title: '碰到困难时'
		};
	}

	componentDidMount() {
		InteractionManager.runAfterInteractions(this.fetchData);
	}

	fetchData() {
		this._data = BellList;

		this.setState({
			ds: this.state.ds.cloneWithRows(this._data)
		})
	}

	pressHandle(key) {
		InteractionManager.runAfterInteractions(() => {
			getNavigator().push({
				name: 'IntroView',
				params: {
					intro: BellDetail.get(key),
					title: key
				}
			});
		});
	}

	renderBody() {
		return (
			<ListView style={{backgroundColor:'#f7f7f7'}}
				dataSource={this.state.ds}
				renderRow={
					(rowData, sectionID, rowID)=>(
						<TouchableOpacity onPress={() => this.pressHandle(rowData)}>
							<View style={styles.rowStyle}>
								<Text>{rowData}</Text>
								<IconFA name="chevron-right" size={20} color="#c8c6cc"/>
							</View>
						</TouchableOpacity>
					)
				}
			/>
		);
	}
}