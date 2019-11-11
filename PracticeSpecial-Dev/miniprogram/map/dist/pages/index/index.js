<<<<<<< HEAD
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),_get=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index);function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var timer=null,Index=(_temp2=_class=function(){function a(){var t,e,n;_classCallCheck(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=n=_possibleConstructorReturn(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(r)))).$usedState=["anonymousState__temp","latitude","longitude","points"],n.config={navigationBarTitleText:"练就非凡App 徒步 "},n.customComponents=[],_possibleConstructorReturn(n,e)}return _inherits(a,_index.Component),_createClass(a,[{key:"_constructor",value:function(){_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).apply(this,arguments),this.state={latitude:40,longitude:120,points:[]},this.$$refs=[]}},{key:"componentDidMount",value:function(){var e=this;_index2.default.getLocation({type:"wgs84",success:function(t){e.setState({latitude:t.latitude,longitude:t.longitude}),console.log(t)}})}},{key:"componentWillUnmount",value:function(){clearInterval(timer),timer=null}},{key:"run",value:function(){var t=this;if(console.log(1),timer)return clearInterval(timer);timer=setInterval(function(){_index2.default.getLocation({type:"wgs84",success:function(n){t.setState(function(t){console.log(t);var e=[{latitude:n.latitude,longitude:n.longitude}].concat(t.points);return{latitude:n.latitude,longitude:n.longitude,points:e}})}})},1e3)}},{key:"_createData",value:function(t,e,n){this.__state=t||this.state||{},this.__props=e||this.props||{};this.$prefix;var o=this.__state,r=(o.latitude,o.longitude,o.points);console.log(r);var i=[{points:r,color:"#ff6600",width:2,dottedLine:!1,arrowLine:!0,borderColor:"#f00",borderWidth:5}];return Object.assign(this.__state,{anonymousState__temp:i}),this.__state}}]),a}(),_class.$$events=["run"],_class.$$componentPath="pages/index/index",_temp2);exports.default=Index,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Index,!0));
=======
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "latitude", "longitude", "run", "points", "musicSrc"], _this.config = {
      navigationBarTitleText: '练就非凡 运动App'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);

      this.state = {
        latitude: 40,
        longitude: 120,
        points: [],
        run: false,
        musicSrc: 'https://wydawn.club/static/media/music/2.mp3'
      };
      this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // "scope.userLocationBackground":{
      //   "desc": "运动定位"
      // }
      // Taro.authorize({
      // })
      this.getLocation();
      _index2.default.onLocationChange(this.onLocation.bind(this));
      _index2.default.getBackgroundAudioManager(function (x) {
        return console.log(x);
      });
      this.loadMusic();
    }
  }, {
    key: "onLocation",
    value: function onLocation(res) {
      // console.log('location change', res)
      this.setState(function (sta) {
        //  console.log(sta);
        var newP = [{
          latitude: res.latitude,
          longitude: res.longitude
        }].concat(sta.points);
        return {
          latitude: res.latitude,
          longitude: res.longitude,
          points: newP
        };
      });
    }
  }, {
    key: "getLocation",
    value: function getLocation() {
      var _this2 = this;

      _index2.default.getLocation({
        type: 'wgs84',
        isHighAccuracy: true,
        highAccuracyExpireTime: 500,
        success: function success(res) {
          _this2.setState({
            latitude: res.latitude,
            longitude: res.longitude
          });
          _index2.default.showToast({
            title: '获取定位成功',
            icon: 'success',
            duration: 1000
          });
        },
        fail: function fail(res) {
          _index2.default.showToast({
            title: '获取定位失败，请打开定位开始运动',
            icon: 'warn',
            duration: 1000
          });
          _this2.getLocation();
        }
      });
    }
  }, {
    key: "run",
    value: function run() {
      if (this.state.run) {
        this.locationEnd();
      } else {
        this.locationStart();
      }
      //   Taro.getSetting({
      //   success(res) {
      //     if (!res.authSetting['scope.userLocationBackground']) {
      //       Taro.authorize({
      //         scope: 'scope.userLocationBackground',
      //         success (res) {
      //           console.log(res);              
      //         },
      //         fail(res){
      //           console.log(res);
      //         }
      //       })
      //     }
      //   }
      //   ,
      //   fail(res){
      //     console.log(res);
      //   }
      // })
      //  Taro.onLocationChange( (arguments)=> {
      //    console.log(arguments)
      //  })
      // if(timer) return clearInterval(timer)
      // timer=setInterval(
      //   ()=>{
      //     Taro.getLocation({
      //         type: 'wgs84',
      //         isHighAccuracy:true,
      //         highAccuracyExpireTime:500,
      //         success: (res)=> {
      //           console.log(res)
      //           this.setState( 
      //            (sta)=>{
      //              console.log(sta);
      //             let newP= [{
      //               latitude:res.latitude,
      //               longitude:res.longitude,
      //             }].concat(sta.points)
      //              return{
      //               latitude:res.latitude,
      //               longitude:res.longitude,
      //               points:newP
      //              }
      //            })
      //         }
      //     })
      //   },1000
      // )
    }
  }, {
    key: "locationStart",
    value: function locationStart() {
      _index2.default.startLocationUpdateBackground({
        success: function success(res) {
          _index2.default.showToast({
            title: '运动开始',
            icon: 'success',
            duration: 1000
          });
        },
        fail: function fail(res) {
          console.log(res);
          _index2.default.showToast({
            title: '出现错误，重新启动小程序再试',
            icon: 'warn',
            duration: 1000
          });
        }
      });
      this.setState({
        run: true
      });
    }
  }, {
    key: "locationEnd",
    value: function locationEnd() {
      _index2.default.stopLocationUpdate({
        success: function success(res) {
          _index2.default.showToast({
            title: '运动已暂停',
            icon: 'success',
            duration: 1000
          });
        },
        fail: function fail(res) {
          //  Taro.showToast({
          //       title: '出现错误，重新启动小程序再试',
          //       icon: 'warn',
          //       duration: 1000
          //  })
        }
      });
      this.setState({
        run: false
      });
    }
  }, {
    key: "musicChange",
    value: function musicChange(e) {
      // console.log(e);
      if (e.detail.value) {
        this.audio && this.audio.play();
      } else {
        this.audio && this.audio.pause();
      }
    }
  }, {
    key: "loadMusic",
    value: function loadMusic() {
      var _this3 = this;

      this.setState({
        musicSrc: 'https://wydawn.club/static/media/music/' + Math.ceil(Math.random() * 4) + '.mp3'
      }, function () {
        _this3.audio = _index2.default.createInnerAudioContext();
        _this3.audio.src = _this3.state.musicSrc;
        _this3.audio.loop = true;
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          latitude = _state.latitude,
          longitude = _state.longitude,
          points = _state.points,
          run = _state.run;

      var anonymousState__temp = [{
        points: points,
        color: "#ff6600",
        width: 2,
        dottedLine: false,
        arrowLine: true,
        borderColor: "#f00",
        borderWidth: 5
      }];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = ["musicChange", "run"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));
>>>>>>> bb275365ead769427bee37d3112f8d57c5fdf650
