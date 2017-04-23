/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.state = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _users = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = function () {
    function State(o) {
        _classCallCheck(this, State);

        this.setState(o);
    }

    _createClass(State, [{
        key: 'setState',
        value: function setState(o) {
            var _this = this;

            Object.keys(o).forEach(function (key) {
                Object.defineProperty(_this, key, {
                    get: function get() {
                        return o[key];
                    },
                    configurable: true
                });
            });
        }
    }]);

    return State;
}();

var state = exports.state = new State({ users: _users.users });

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserList = function () {
    function UserList(node, users) {
        _classCallCheck(this, UserList);

        this.node = node;
        this.users = users;
        this.renderUsers();
    }

    _createClass(UserList, [{
        key: 'renderUsers',
        value: function renderUsers() {
            var _this = this;

            var li = function li(value) {
                var li = document.createElement('li');
                li.appendChild(value instanceof HTMLElement ? value : document.createTextNode(value));
                return li;
            };

            this.node.innerHTML = '';
            this.users.forEach(function (user) {
                return _this.node.appendChild(li(user.name));
            });
        }
    }]);

    return UserList;
}();

exports.default = UserList;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var $ = function $(sel) {
  return document.querySelector(sel);
};
var USERS_CONTAINER = exports.USERS_CONTAINER = $('.users');
var SEARCH_INPUT = exports.SEARCH_INPUT = $('.search');

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var users = exports.users = [{
    "id": 0, "name": "Julia Newton", "age": 34, "phone": "(254) 584-5323", "image": "dog", "phrase": "Inju simus zietmow karu oj moz ofodiuh ka sugatucuj bib os widmoeki wuole nif emamozoc."
}, {
    "id": 1, "name": "Gerald White", "age": 20, "phone": "(507) 851-5766", "image": "owl", "phrase": "Tiuse megetim ku et vepfi julol jihihamuk zokinadip meih em abven nucdusga ecapec vuka af."
}, {
    "id": 2, "name": "Willie McGuire", "age": 55, "phone": "(617) 708-3220", "image": "cat", "phrase": "Hacza gotiul wajcam jadti zoifa podpavcag izi nu wuktegjac sawko huzi fol nida tusef dupcasnu."
}, {
    "id": 3, "name": "Samuel Lee", "age": 28, "phone": "(339) 715-7535", "image": "cat", "phrase": "Imuhaj gikhe oloucoko wed zeud idetaav vuw de pow gefejmu akevi tajofuju wo ni nazcej."
}, {
    "id": 4, "name": "Alejandro Cook", "age": 21, "phone": "(415) 456-4821", "image": "dog", "phrase": "Vacimi hizlija pu vajturcup horraw kal asufofi kisi inpocedo ufubi weceguome ato ija memanev ta."
}, {
    "id": 5, "name": "Charlie Briggs", "age": 29, "phone": "(589) 866-5756", "image": "fox", "phrase": "Tac bikko dilgo to mibrepewo ojwehe dovga jic de osbulud jozobdu nadubale fedih gi sarunnih."
}, {
    "id": 6, "name": "Johanna Hardy", "age": 28, "phone": "(584) 836-9555", "image": "raccoon", "phrase": "Cidoznu fozefi reb vowew jelehak hi muaf opudof venocek enlil ceso sownigwib votnaiso acojog fe."
}, {
    "id": 7, "name": "Isabelle Green", "age": 43, "phone": "(334) 303-5654", "image": "dog", "phrase": "Ne sit nohip ki rug negi wihgum abihun zage ev vi fi mo gucis zopvikcog."
}, {
    "id": 8, "name": "Jessie Curtis", "age": 22, "phone": "(537) 994-1351", "image": "pig", "phrase": "Majub sacusgu vuslus uz cusju tawbozke ighiboso of fotje vem ge owze zefowso kusucnu pazvuto."
}];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UserList = __webpack_require__(1);

var _UserList2 = _interopRequireDefault(_UserList);

var _State = __webpack_require__(0);

var _users = __webpack_require__(3);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Search = function () {
    function Search(inputNode) {
        _classCallCheck(this, Search);

        this.inputNode = inputNode;
        this.createFilter();
    }

    _createClass(Search, [{
        key: 'createFilter',
        value: function createFilter() {
            this.inputNode.addEventListener('input', function (e) {
                var val = e.target.value;
                _State.state.setState({
                    users: _users.users.filter(function (user) {
                        return user.name.toUpperCase().includes(val.trim().toUpperCase());
                    })
                });
                new _UserList2.default(_constants.USERS_CONTAINER, _State.state.users);
            });
        }
    }]);

    return Search;
}();

exports.default = Search;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Search = __webpack_require__(4);

var _Search2 = _interopRequireDefault(_Search);

var _UserList = __webpack_require__(1);

var _UserList2 = _interopRequireDefault(_UserList);

var _State = __webpack_require__(0);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _Search2.default(_constants.SEARCH_INPUT);
new _UserList2.default(_constants.USERS_CONTAINER, _State.state.users);

/***/ })
/******/ ]);