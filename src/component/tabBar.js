/**
 * Created by lipeiwei on 16/10/2.
 * 自定义tabbar
 */

import React, {
  Component
} from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
    Text
} from 'react-native';

import IconFa from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: "#DADADA",
    backgroundColor: '#dfecf3',
  },
  touchableContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30
  }
});

export default class TabBar extends Component {
  static propTypes = {
    tabBarResources: React.PropTypes.array.isRequired, //图片资源二维数组
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  };

  constructor(props) {
    super(props);
    if (props.tabBarResources.length !== props.tabs.length) {
      console.warn('ScrollableTabView TabBar config error, please check');
    }
  }

  render() {
    const {
      tabBarResources,
      activeTab,
      tabs,
      goToPage
    } = this.props;
    return (
      <View style={styles.container}>
        {
          tabs.map((tab, index) => {
            return (
              <TouchableOpacity style={styles.touchableContainer} key={index} onPress={() => {goToPage(index)}} activeOpacity={1}>
                <Image source={activeTab === index ? tabBarResources[index][2] : tabBarResources[index][0]} style={styles.image}/>
                <Text style={[{fontSize:10}, {color:activeTab === index?'#2f6cb4':'#555a5d'}]}>{tabBarResources[index][1]}</Text>
              </TouchableOpacity>
            );
          })
        }
      </View>
    );
  }

};