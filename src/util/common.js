import {
	getNavigator
} from '../route';

export const naviGoBack = () => {
	let navigator = getNavigator();
	if (navigator && navigator.getCurrentRoutes().length > 1) {
		navigator.pop();
		return true;
	}
	return false;
};