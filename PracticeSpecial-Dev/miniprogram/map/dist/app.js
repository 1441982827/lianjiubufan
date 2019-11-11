<<<<<<< HEAD
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),_index=require("./npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("./npm/@tarojs/mobx/index.js"),_counter=require("./store/counter.js"),_counter2=_interopRequireDefault(_counter);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var store={counterStore:_counter2.default};(0,_index3.setStore)(store);var _App=function(){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.config={pages:["pages/index/index"],window:{backgroundTextStyle:"light",navigationBarBackgroundColor:"#e48097",navigationBarTitleText:"练就非凡App",navigationBarTextStyle:"white"},permission:{"scope.userLocation":{desc:"你的位置信息将用于小程序位置接口的效果展示"}}},e}return _inherits(t,_index.Component),_createClass(t,[{key:"_createData",value:function(){}}]),t}();exports.default=_App,App(require("./npm/@tarojs/taro-weapp/index.js").default.createApp(_App)),_index2.default.initPxTransform({designWidth:750,deviceRatio:{640:1.17,750:1,828:.905}});
=======
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("./npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./npm/@tarojs/mobx/index.js");

var _counter = require("./store/counter.js");

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
var store = {
  counterStore: _counter2.default
};
(0, _index3.setStore)(store);
;

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    _classCallCheck(this, _App);

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    var _this = _possibleConstructorReturn(this, (_App.__proto__ || Object.getPrototypeOf(_App)).apply(this, arguments));

    _this.config = {
      pages: ['pages/index/index'],
      requiredBackgroundModes: ["audio", "location"],
      window: {
        // navigationStyle:'custom',
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#e48097',
        navigationBarTitleText: '练就非凡App',
        navigationBarTextStyle: 'white'
      },
      "permission": {
        "scope.userLocation": {
          "desc": "运动app 运动定位"
        },
        "scope.userLocationBackground": {
          "desc": "运动app 运动定位" // 高速公路行驶持续后台定位
        }
      }
    };
    return _this;
  }
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数

  _createClass(_App, [{
    key: "_createData",
    value: function _createData() {}
  }]);

  return _App;
}(_index.Component);

exports.default = _App;

App(require('./npm/@tarojs/taro-weapp/index.js').default.createApp(_App));
_index2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
>>>>>>> bb275365ead769427bee37d3112f8d57c5fdf650
