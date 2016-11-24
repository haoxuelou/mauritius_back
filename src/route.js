/**
 * Created by lipeiwei on 16/10/4.
 */
import {
  Navigator,
} from 'react-native';

import Welcome from './welcome';
import Menu from './menu';
import MainContainer from './module/mainContainer';
import IntroView from './component/introView';

let navigator;

// PushFromRight
// PushFromLeft
// FloatFromRight
// FloatFromLeft
// FloatFromBottom
// FloatFromBottomAndroid
// FadeAndroid
// HorizontalSwipeJump
// HorizontalSwipeJumpFromRight
// VerticalUpSwipeJump
// VerticalDownSwipeJump

const routeMap = new Map([
  [
    "Welcome", 
    {
      component: Welcome,
      display: false
    }
  ],
  [
    "Menu", 
    {
      component: Menu,
      sceneAnimation: Navigator.SceneConfigs.FadeAndroid
    }
  ],
  [
    "MainContainer",
    {
      component: MainContainer,
      display: false
    }
  ],
  [
    "IntroView",
    {
      component: IntroView,
    }
  ]
]);

export function registerNavigator(tempNavigator) {
  navigator = tempNavigator;
}

export function getNavigator() {
  return navigator;
}

export function getRouteMap() {
  return routeMap;
}