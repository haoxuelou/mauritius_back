import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Image,
    Navigator,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    InteractionManager,
    View,
    Dimensions,
    StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper'

import Menu from './menu';
import Button from './component/button';

const Orientation = require('react-native-orientation');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    entry: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
    },
    info: {
        margin: 10,
        textAlign: 'center',
        lineHeight: 30,
        fontSize: 16
    },
    wrap: {
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        width: Dimensions.get('window').width,
        height: 240,
    }
});

export default class Welcome extends Component {
    _jump = () => {
        this.props.navigator.resetTo({
            index: 1,
            title: '首页',
            display: false,
            name: 'MainContainer'
        });
    }

    componentDidMount() {
        Orientation.lockToPortrait();
    }

    componentWillUnmount() {
        Orientation.unlockAllOrientations();
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Swiper style={styles.wrap} loop height={240} autoplay={true}
                paginationStyle={{bottom:0, justifyContent: 'flex-start', left: 20}}>
                    <View style={styles.slide}>
                        <Image source={require('./webpage/imgs/splash.jpg')} style={styles.image} resizeMode={Image.resizeMode.contain}/>
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('./webpage/imgs/splash1.jpg')} style={styles.image} resizeMode={Image.resizeMode.contain}/>
                    </View>
                </Swiper>
                <View style={styles.container}>
                    <Text style={styles.info}>
                        您是否曾想过：{'\n'}
                        不懂外语也能玩转毛岛？{'\n'}
                        轻松获取权威旅游资讯？{'\n'}
                        有高人指点，行程无忧？{'\n'}
                        碰到问题时迅速获得帮助？{'\n'}
                        “毛岛旅游领保”让您一切触手可及！ 
                    </Text>
                </View>
                <View style={styles.entry}>
                    <Button text="进入" onPress={this._jump} style={{width: 80, backgroundColor: '#2f6cb4'}}/>
                </View>
<StatusBar
backgroundColor="#dfecf3"
barStyle="default" hidden={true}/>
            </View>
        );
    }
}