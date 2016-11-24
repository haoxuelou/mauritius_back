/**
 * Created by lipeiwei on 16/10/2.
 */

import React, {Component} from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';

import IconFA from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;

const defaultNavigationHeight = 50;
const defaultButtonHeight = defaultNavigationHeight - 25;//左侧图片的高度

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: '#dfecf3',
    height: defaultNavigationHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
    flexDirection: 'row'
  },
  navigationBarTitleContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 80,
    right: 80,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  navigationBarTitle: {
    color: '#54504d',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  leftButton: {
    paddingHorizontal: 8,
    height: defaultNavigationHeight,
    // backgroundColor: 'red',//test
    justifyContent: 'center',//主轴
    alignItems: 'flex-end'//TODO why 这里如果设置flex-start时图片偏右, 设置flex-end时图片偏左, 原因不明
  },
  rightButton: {
    paddingHorizontal: 8,
    height: defaultNavigationHeight,
    // backgroundColor: 'red',//test
    justifyContent: 'center',//主轴
    alignItems: 'flex-start'//

  },
  rightButtonTextStyle: {
    color: '#79767C',
    textAlign: 'right',
    fontSize: 16,
    marginRight: 10
  },
  image: {
    height: defaultButtonHeight,
    width: defaultButtonHeight
  }
});

const defaultNavigationBarProps = {
  hideNav: false,
  hideLeftButton: false,
  hideRightButton: false,
  hideIcon: true,
  // title: 'ONE',
  // leftButtonImage:
  // rightButtonImage:
  // rightTitle: '点击'
};

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.navigationBarProps = Object.assign({}, defaultNavigationBarProps, props.navigationBarProps);
    this.renderRight = this.renderRight.bind(this);
    this.renderLeftButton = this.renderLeftButton.bind(this);
    this.renderRightButton = this.renderRightButton.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.navigationBarProps = Object.assign({}, defaultNavigationBarProps, nextProps.navigationBarProps);
  }

  renderLeftButton() {
    if (this.navigationBarProps.hideLeftButton) {
      return null;
    }
    var {onLeftPressed} = this.props;
    return (
      <TouchableOpacity onPress={onLeftPressed} style={[styles.leftButton, this.navigationBarProps.leftStyle]}>
        <IconFA name="chevron-left" size={defaultButtonHeight} color="#a3a1a6"/>
      </TouchableOpacity>
    );
  }

  renderRightButton() {
    if (this.navigationBarProps.hideRightButton) {
      return null;
    }
    //优先image, text次之
    var {onRightPressed} = this.props;
    var component;
    if (this.navigationBarProps.rightButtonImage) {
      component = (
        <Image style={styles.image} resizeMode="contain" source={this.navigationBarProps.rightButtonImage} />
      );
    }
    else if (this.navigationBarProps.rightTitle && this.navigationBarProps.rightTitle !== '') {
      component = (
        <Text style={[styles.rightButtonTextStyle, this.navigationBarProps.rightTextStyle]}>{this.navigationBarProps.rightTitle}</Text>
      );
    } else {
      return null;
    }

    return (
      <TouchableOpacity onPress={onRightPressed} style={[styles.rightButton, this.navigationBarProps.rightStyle]}>
        {component}
      </TouchableOpacity>
    );
  }

  renderRight() {
    return (
      <View style={{flexDirection: 'row'}}>
        {this.renderRightButton()}
      </View>
    );
  }

  renderIcon() {
    if(this.navigationBarProps.hideIcon) {
      return null;
    }
    return <Image source={this.navigationBarProps.icon} style={{width: 30, height: 30}}/>;
  }

  render() {
    var {hideNav, title} = this.navigationBarProps;
    if (hideNav) {
      return null;
    }
    return (
      <View>
        <StatusBar
          backgroundColor="#dfecf3"
          barStyle="light-content"/>
        <View style={[styles.navigationBar, this.navigationBarProps.navigationBar]}>
          {this.renderLeftButton()}
          {this.renderRight()}
          <View style={styles.navigationBarTitleContainer}>
            {this.renderIcon()}
            <Text numberOfLines={1} style={[styles.navigationBarTitle, this.navigationBarProps.titleStyle]}>{title}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default NavigationBar;
