/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
  getRouteMap,
  registerNavigator
} from './route';

export default class mauritius extends Component {
  constructor(props) {
    super(props);

    this.state = {
      load: false
    };
  }

  componentDidMount() {
    this.setState({
      load: true
    });
  }

  render() {
    return ( < Navigator initialRoute = {
        {
          index: 0,
          display: false,
          name: 'Welcome',
        }
      }
      configureScene = {
        (route, routeStack) => {
          let sceneAnimation = getRouteMap().get(route.name).sceneAnimation;
          if (sceneAnimation) {
            return sceneAnimation;
          }

          return Navigator.SceneConfigs.HorizontalSwipeJump;
        }
      }
      renderScene = {
        (route, navigator) => {
          registerNavigator(navigator);

          let {
            component: Component,
            params = {}
          } = getRouteMap().get(route.name);

          params = Object.assign(route.params || {}, params);
          return <Component {...params} navigator = { navigator }/>
        }
      }
      /> 
    );
  }
}