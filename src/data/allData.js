const HomeList = [
	'（一）国家概况',
	'（二）入境须知',
	'（三）安全防范',
	'（四）交通出行',
	'（五）物价医疗',
	'（六）实用信息',
	'（七）深度了解',
];

const HomeDetail = new Map([
	[
		HomeList[0], 'file:///android_asset/src/webpage/home/1.html'
	],
	[
		HomeList[1], 'file:///android_asset/src/webpage/home/2.html'
	],
	[
		HomeList[2], 'file:///android_asset/src/webpage/home/3.html'
	],
	[
		HomeList[3], 'file:///android_asset/src/webpage/home/4.html'
	],
	[
		HomeList[4], 'file:///android_asset/src/webpage/home/5.html'
	],
	[
		HomeList[5], 'file:///android_asset/src/webpage/home/6.html'
	],
	[
		HomeList[6], 'file:///android_asset/src/webpage/home/7.html'
	]
]);

const CameraList = [
	'货币',
	'服务',
	'酒店设施',
	'个人用品',
	'海滩',
	'休闲娱乐',
	'餐饮',
	'礼品',
	'交通',
	'天气',
	'安全',
	'健康'
];

const CameraDetail = new Map([
	[
		CameraList[0], 'file:///android_asset/src/webpage/camera/1.html'
	],
	[
		CameraList[1], 'file:///android_asset/src/webpage/camera/2.html'
	],
	[
		CameraList[2], 'file:///android_asset/src/webpage/camera/3.html'
	],
	[
		CameraList[3], 'file:///android_asset/src/webpage/camera/4.html'
	],
	[
		CameraList[4], 'file:///android_asset/src/webpage/camera/5.html'
	],
	[
		CameraList[5], 'file:///android_asset/src/webpage/camera/6.html'
	],
	[
		CameraList[6], 'file:///android_asset/src/webpage/camera/7.html'
	],
	[
		CameraList[7], 'file:///android_asset/src/webpage/camera/8.html'
	],
	[
		CameraList[8], 'file:///android_asset/src/webpage/camera/9.html'
	],
	[
		CameraList[9], 'file:///android_asset/src/webpage/camera/10.html'
	],
	[
		CameraList[10], 'file:///android_asset/src/webpage/camera/11.html'
	],
	[
		CameraList[11], 'file:///android_asset/src/webpage/camera/12.html'
	],
]);

const BellList = [
	'（一）常用电话',
	'（二）领事提醒',
	'（三）领事保护与协助',
];

const BellDetail = new Map([
	[
		BellList[0], 'file:///android_asset/src/webpage/bell/1.html'
	],
	[
		BellList[1], 'file:///android_asset/src/webpage/bell/2.html'
	],
	[
		BellList[2], 'file:///android_asset/src/webpage/bell/3.html'
	],
]);

const PlaneList = [
	{
		title: '（一）掌握应急联系方式',
		indentTxt: '行前请登录外交部网站 ((http://www.fmprc.gov.cn/)[http://www.fmprc.gov.cn/]) 和中国领事服务网 ((http://cs.mfa.gov.cn/)[http://cs.mfa.gov.cn/])， 查询并保存中国驻毛里求斯使馆的联系方式以及相关旅行提醒、警告等海外安全信息。您还可以记录外交部全球领事保护与服务应急呼叫中心热线号码 tel:+8610-12308 或者 tel:+8610-59913991 备用，或关注领事直通车微信（微信号：LS12308）通过网络了解信息或与后台互动咨询。',
	},
	{
		title: '（二）检查护照有效期',
		indentTxt: '护照剩余有效期一般应在一年以上，否则可能影响您申请他国签证，或影响您在国外期间的行程安排。',
	},
	{
		title: '（三）核对机票',
		indentTxt: '仔细核对票面上所显示的登机时间、地点以及联程票的前后衔接是否正确。',
	},
	{
		title: '（四）购买必要保险',
		indentTxt: '国外医药等费用普遍较高，建议您根据自身经济条件，购买人身安全和医疗等方面的必要险种，以防万一。',
	},
	{
		title: '（五）留下应急联系方式',
		indentTxt: '出国前应给家人或朋友留下一份出行计划日程，约定好联络方式。',
	},
	{
		indentTxt: '建议您在护照“应急资料”页内详细写明家人或朋友的地址、电话号码，以备紧急情况下有关部门能够及时与他们取得联系。护照、签证、身份证应复印，一份留在家中，一份随身携带，还要准备几张护照相片，以备不时之需。',
	}
];
const PlaneUri = 'file:///android_asset/src/webpage/plane/1.html';
const ThumbsUpUri = 'file:///android_asset/src/webpage/thumbsUp/1.html';

export {
	HomeList, HomeDetail,
	CameraList, CameraDetail,
	BellList, BellDetail,
	PlaneUri,
	ThumbsUpUri,
};