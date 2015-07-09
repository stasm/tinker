var L20n =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _webIo = __webpack_require__(1);

	Object.defineProperty(exports, 'fetch', {
	  enumerable: true,
	  get: function get() {
	    return _webIo.fetch;
	  }
	});

	var _bindingsHtmlService = __webpack_require__(3);

	Object.defineProperty(exports, 'Service', {
	  enumerable: true,
	  get: function get() {
	    return _bindingsHtmlService.Service;
	  }
	});

	var _bindingsHtmlView = __webpack_require__(12);

	Object.defineProperty(exports, 'View', {
	  enumerable: true,
	  get: function get() {
	    return _bindingsHtmlView.View;
	  }
	});

	var _libFormatL20nAstParser = __webpack_require__(17);

	exports.ASTParser = _interopRequire(_libFormatL20nAstParser);

	var _libFormatL20nAstSerializer = __webpack_require__(19);

	exports.ASTSerializer = _interopRequire(_libFormatL20nAstSerializer);

	var _libFormatL20nEntriesParser = __webpack_require__(9);

	exports.EntriesParser = _interopRequire(_libFormatL20nEntriesParser);

	var _libFormatL20nEntriesSerializer = __webpack_require__(20);

	exports.EntriesSerializer = _interopRequire(_libFormatL20nEntriesSerializer);

	var _libFormatPropertiesParser = __webpack_require__(8);

	exports.PropertiesParser = _interopRequire(_libFormatPropertiesParser);

	var _libContext = __webpack_require__(5);

	Object.defineProperty(exports, 'Context', {
	  enumerable: true,
	  get: function get() {
	    return _libContext.Context;
	  }
	});

	var _libEnv = __webpack_require__(4);

	Object.defineProperty(exports, 'Env', {
	  enumerable: true,
	  get: function get() {
	    return _libEnv.Env;
	  }
	});

	var _libErrors = __webpack_require__(2);

	Object.defineProperty(exports, 'L10nError', {
	  enumerable: true,
	  get: function get() {
	    return _libErrors.L10nError;
	  }
	});

	var _libEvents = __webpack_require__(11);

	Object.defineProperty(exports, 'emit', {
	  enumerable: true,
	  get: function get() {
	    return _libEvents.emit;
	  }
	});
	Object.defineProperty(exports, 'addEventListener', {
	  enumerable: true,
	  get: function get() {
	    return _libEvents.addEventListener;
	  }
	});
	Object.defineProperty(exports, 'removeEventListener', {
	  enumerable: true,
	  get: function get() {
	    return _libEvents.removeEventListener;
	  }
	});

	var _libIntl = __webpack_require__(16);

	Object.defineProperty(exports, 'prioritizeLocales', {
	  enumerable: true,
	  get: function get() {
	    return _libIntl.prioritizeLocales;
	  }
	});

	var _libMocks = __webpack_require__(21);

	Object.defineProperty(exports, 'MockContext', {
	  enumerable: true,
	  get: function get() {
	    return _libMocks.MockContext;
	  }
	});
	Object.defineProperty(exports, 'lang', {
	  enumerable: true,
	  get: function get() {
	    return _libMocks.lang;
	  }
	});

	var _libPlurals = __webpack_require__(7);

	Object.defineProperty(exports, 'getPluralRule', {
	  enumerable: true,
	  get: function get() {
	    return _libPlurals.getPluralRule;
	  }
	});

	var _libPseudo = __webpack_require__(10);

	Object.defineProperty(exports, 'walkEntry', {
	  enumerable: true,
	  get: function get() {
	    return _libPseudo.walkEntry;
	  }
	});
	Object.defineProperty(exports, 'walkValue', {
	  enumerable: true,
	  get: function get() {
	    return _libPseudo.walkValue;
	  }
	});
	Object.defineProperty(exports, 'qps', {
	  enumerable: true,
	  get: function get() {
	    return _libPseudo.qps;
	  }
	});

	var _libResolver = __webpack_require__(6);

	Object.defineProperty(exports, 'format', {
	  enumerable: true,
	  get: function get() {
	    return _libResolver.format;
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.fetch = fetch;

	var _libErrors = __webpack_require__(2);

	function load(type, url) {
	  return new Promise(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();

	    if (xhr.overrideMimeType) {
	      xhr.overrideMimeType(type);
	    }

	    xhr.open('GET', url, true);

	    if (type === 'application/json') {
	      xhr.responseType = 'json';
	    }

	    xhr.addEventListener('load', function io_onload(e) {
	      if (e.target.status === 200 || e.target.status === 0) {
	        resolve(e.target.response || e.target.responseText);
	      } else {
	        reject(new _libErrors.L10nError('Not found: ' + url));
	      }
	    });
	    xhr.addEventListener('error', reject);
	    xhr.addEventListener('timeout', reject);

	    try {
	      xhr.send(null);
	    } catch (e) {
	      if (e.name === 'NS_ERROR_FILE_NOT_FOUND') {
	        reject(new _libErrors.L10nError('Not found: ' + url));
	      } else {
	        throw e;
	      }
	    }
	  });
	}

	var io = {
	  extra: function (code, ver, path, type) {
	    return navigator.mozApps.getLocalizationResource(code, ver, path, type);
	  },
	  app: function (code, ver, path, type) {
	    switch (type) {
	      case 'text':
	        return load('text/plain', path);
	      case 'json':
	        return load('application/json', path);
	      default:
	        throw new _libErrors.L10nError('Unknown file type: ' + type);
	    }
	  }
	};

	function fetch(ver, res, lang) {
	  var url = res.replace('{locale}', lang.code);
	  var type = res.endsWith('.json') ? 'json' : 'text';
	  return io[lang.src](lang.code, ver, url, type);
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.L10nError = L10nError;

	function L10nError(message, id, lang) {
	  this.name = 'L10nError';
	  this.message = message;
	  this.id = id;
	  this.lang = lang;
	}

	L10nError.prototype = Object.create(Error.prototype);
	L10nError.prototype.constructor = L10nError;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.getAdditionalLanguages = getAdditionalLanguages;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _libEnv = __webpack_require__(4);

	var _view = __webpack_require__(12);

	var _head = __webpack_require__(13);

	var _langs = __webpack_require__(15);

	var Service = (function () {
	  function Service(fetch) {
	    _classCallCheck(this, Service);

	    var meta = (0, _head.getMeta)(document.head);
	    this.defaultLanguage = meta.defaultLang;
	    this.availableLanguages = meta.availableLangs;
	    this.appVersion = meta.appVersion;

	    this.env = new _libEnv.Env(this.defaultLanguage, fetch.bind(null, this.appVersion));
	    this.views = [document.l10n = new _view.View(this, document)];

	    this.env.addEventListener('deprecatewarning', function (err) {
	      return console.warn(err);
	    });
	  }

	  _createClass(Service, [{
	    key: 'requestLanguages',
	    value: function requestLanguages() {
	      var requestedLangs = arguments.length <= 0 || arguments[0] === undefined ? navigator.languages : arguments[0];

	      return changeLanguages.call(this, getAdditionalLanguages(), requestedLangs);
	    }
	  }, {
	    key: 'handleEvent',
	    value: function handleEvent(evt) {
	      return changeLanguages.call(this, evt.detail || getAdditionalLanguages(), navigator.languages);
	    }
	  }]);

	  return Service;
	})();

	exports.Service = Service;

	function getAdditionalLanguages() {
	  if (navigator.mozApps && navigator.mozApps.getAdditionalLanguages) {
	    return navigator.mozApps.getAdditionalLanguages().catch(function () {
	      return [];
	    });
	  }

	  return Promise.resolve([]);
	}

	function translateViews(langs) {
	  return Promise.all(this.views.map(function (view) {
	    return _view.translate.call(view, langs);
	  }));
	}

	function changeLanguages(additionalLangs, requestedLangs) {
	  var _this = this;

	  var prevLangs = this.languages || [];
	  return this.languages = Promise.all([additionalLangs, prevLangs]).then(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2);

	    var additionalLangs = _ref2[0];
	    var prevLangs = _ref2[1];
	    return (0, _langs.negotiateLanguages)(translateViews.bind(_this), _this.appVersion, _this.defaultLanguage, _this.availableLanguages, additionalLangs, prevLangs, requestedLangs);
	  });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.amendError = amendError;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _context = __webpack_require__(5);

	var _formatPropertiesParser = __webpack_require__(8);

	var _formatPropertiesParser2 = _interopRequireDefault(_formatPropertiesParser);

	var _formatL20nEntriesParser = __webpack_require__(9);

	var _formatL20nEntriesParser2 = _interopRequireDefault(_formatL20nEntriesParser);

	var _pseudo = __webpack_require__(10);

	var _events = __webpack_require__(11);

	var parsers = {
	  properties: _formatPropertiesParser2.default,
	  l20n: _formatL20nEntriesParser2.default
	};

	var Env = (function () {
	  function Env(defaultLang, fetch) {
	    _classCallCheck(this, Env);

	    this.defaultLang = defaultLang;
	    this.fetch = fetch;

	    this._resCache = Object.create(null);

	    var listeners = {};
	    this.emit = _events.emit.bind(this, listeners);
	    this.addEventListener = _events.addEventListener.bind(this, listeners);
	    this.removeEventListener = _events.removeEventListener.bind(this, listeners);
	  }

	  _createClass(Env, [{
	    key: 'createContext',
	    value: function createContext(resIds) {
	      return new _context.Context(this, resIds);
	    }
	  }, {
	    key: '_parse',
	    value: function _parse(syntax, lang, data) {
	      var _this = this;

	      var parser = parsers[syntax];
	      if (!parser) {
	        return data;
	      }

	      var emit = function (type, err) {
	        return _this.emit(type, amendError(lang, err));
	      };
	      return parser.parse.call(parser, emit, data);
	    }
	  }, {
	    key: '_create',
	    value: function _create(lang, entries) {
	      if (lang.src !== 'qps') {
	        return entries;
	      }

	      var pseudoentries = Object.create(null);
	      for (var key in entries) {
	        pseudoentries[key] = (0, _pseudo.walkEntry)(entries[key], _pseudo.qps[lang.code].translate);
	      }
	      return pseudoentries;
	    }
	  }, {
	    key: '_getResource',
	    value: function _getResource(lang, res) {
	      var _this2 = this;

	      var cache = this._resCache;
	      var id = res + lang.code + lang.src;

	      if (cache[id]) {
	        return cache[id];
	      }

	      var syntax = res.substr(res.lastIndexOf('.') + 1);

	      var saveEntries = function (data) {
	        var entries = _this2._parse(syntax, lang, data);
	        cache[id] = _this2._create(lang, entries);
	      };

	      var recover = function (err) {
	        err.lang = lang;
	        _this2.emit('fetcherror', err);
	        cache[id] = err;
	      };

	      var langToFetch = lang.src === 'qps' ? { code: this.defaultLang, src: 'app' } : lang;

	      return cache[id] = this.fetch(res, langToFetch).then(saveEntries, recover);
	    }
	  }]);

	  return Env;
	})();

	exports.Env = Env;

	function amendError(lang, err) {
	  err.lang = lang;
	  return err;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _errors = __webpack_require__(2);

	var _resolver = __webpack_require__(6);

	var _plurals = __webpack_require__(7);

	var Context = (function () {
	  function Context(env, resIds) {
	    _classCallCheck(this, Context);

	    this._env = env;
	    this._resIds = resIds;
	  }

	  _createClass(Context, [{
	    key: 'fetch',
	    value: function fetch(langs) {
	      return this._fetchResources(langs);
	    }
	  }, {
	    key: 'formatValue',
	    value: function formatValue(langs, id, args) {
	      return this.fetch(langs).then(this._fallback.bind(this, Context.prototype._formatValue, id, args));
	    }
	  }, {
	    key: 'formatEntity',
	    value: function formatEntity(langs, id, args) {
	      return this.fetch(langs).then(this._fallback.bind(this, Context.prototype._formatEntity, id, args));
	    }
	  }, {
	    key: '_formatTuple',
	    value: function _formatTuple(lang, args, entity, id, key) {
	      try {
	        return (0, _resolver.format)(this, lang, args, entity);
	      } catch (err) {
	        err.id = key ? id + '::' + key : id;
	        err.lang = lang;
	        this._env.emit('resolveerror', err, this);
	        return [{ error: err }, err.id];
	      }
	    }
	  }, {
	    key: '_formatValue',
	    value: function _formatValue(lang, args, entity, id) {
	      if (typeof entity === 'string') {
	        return entity;
	      }

	      var _formatTuple$call = this._formatTuple.call(this, lang, args, entity, id);

	      var _formatTuple$call2 = _slicedToArray(_formatTuple$call, 2);

	      var value = _formatTuple$call2[1];

	      return value;
	    }
	  }, {
	    key: '_formatEntity',
	    value: function _formatEntity(lang, args, entity, id) {
	      var _formatTuple$call3 = this._formatTuple.call(this, lang, args, entity, id);

	      var _formatTuple$call32 = _slicedToArray(_formatTuple$call3, 2);

	      var value = _formatTuple$call32[1];

	      var formatted = {
	        value: value,
	        attrs: null
	      };

	      if (entity.attrs) {
	        formatted.attrs = Object.create(null);
	      }

	      for (var key in entity.attrs) {
	        var _formatTuple$call4 = this._formatTuple.call(this, lang, args, entity.attrs[key], id, key);

	        var _formatTuple$call42 = _slicedToArray(_formatTuple$call4, 2);

	        var attrValue = _formatTuple$call42[1];

	        formatted.attrs[key] = attrValue;
	      }

	      return formatted;
	    }
	  }, {
	    key: '_fetchResources',
	    value: function _fetchResources(langs) {
	      if (langs.length === 0) {
	        return Promise.resolve(langs);
	      }

	      return Promise.all(this._resIds.map(this._env._getResource.bind(this._env, langs[0]))).then(function () {
	        return langs;
	      });
	    }
	  }, {
	    key: '_fallback',
	    value: function _fallback(method, id, args, langs) {
	      var lang = langs[0];

	      if (!lang) {
	        this._env.emit('notfounderror', new _errors.L10nError('"' + id + '"' + ' not found in any language', id), this);
	        return id;
	      }

	      var entity = this._getEntity(lang, id);

	      if (entity) {
	        return method.call(this, lang, args, entity, id);
	      } else {
	        this._env.emit('notfounderror', new _errors.L10nError('"' + id + '"' + ' not found in ' + lang.code, id, lang), this);
	      }

	      return this._fetchResources(langs.slice(1)).then(this._fallback.bind(this, method, id, args));
	    }
	  }, {
	    key: '_getEntity',
	    value: function _getEntity(lang, id) {
	      var cache = this._env._resCache;

	      for (var i = 0, resId = undefined; resId = this._resIds[i]; i++) {
	        var resource = cache[resId + lang.code + lang.src];
	        if (resource instanceof _errors.L10nError) {
	          continue;
	        }
	        if (id in resource) {
	          return resource[id];
	        }
	      }
	      return undefined;
	    }
	  }, {
	    key: '_getMacro',
	    value: function _getMacro(lang, id) {
	      switch (id) {
	        case 'plural':
	          return (0, _plurals.getPluralRule)(lang.code);
	        default:
	          return undefined;
	      }
	    }
	  }]);

	  return Context;
	})();

	exports.Context = Context;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	exports.format = format;

	var _errors = __webpack_require__(2);

	var KNOWN_MACROS = ['plural'];
	var MAX_PLACEABLE_LENGTH = 2500;

	var nonLatin1 = /[^\x01-\xFF]/;

	var FSI = '⁨';
	var PDI = '⁩';

	var resolutionChain = new WeakSet();

	function format(ctx, lang, args, entity) {
	  if (typeof entity === 'string') {
	    return [{}, entity];
	  }

	  if (resolutionChain.has(entity)) {
	    throw new _errors.L10nError('Cyclic reference detected');
	  }

	  resolutionChain.add(entity);

	  var rv = undefined;

	  try {
	    rv = resolveValue({}, ctx, lang, args, entity.value, entity.index);
	  } finally {
	    resolutionChain.delete(entity);
	  }
	  return rv;
	}

	function resolveIdentifier(ctx, lang, args, id) {
	  if (KNOWN_MACROS.indexOf(id) > -1) {
	    return [{}, ctx._getMacro(lang, id)];
	  }

	  if (args && args.hasOwnProperty(id)) {
	    if (typeof args[id] === 'string' || typeof args[id] === 'number' && !isNaN(args[id])) {
	      return [{}, args[id]];
	    } else {
	      throw new _errors.L10nError('Arg must be a string or a number: ' + id);
	    }
	  }

	  if (id === '__proto__') {
	    throw new _errors.L10nError('Illegal id: ' + id);
	  }

	  var entity = ctx._getEntity(lang, id);

	  if (entity) {
	    return format(ctx, lang, args, entity);
	  }

	  throw new _errors.L10nError('Unknown reference: ' + id);
	}

	function subPlaceable(locals, ctx, lang, args, id) {
	  var res = undefined;

	  try {
	    res = resolveIdentifier(ctx, lang, args, id);
	  } catch (err) {
	    return [{ error: err }, '{{ ' + id + ' }}'];
	  }

	  var value = res[1];

	  if (typeof value === 'number') {
	    return res;
	  }

	  if (typeof value === 'string') {
	    if (value.length >= MAX_PLACEABLE_LENGTH) {
	      throw new _errors.L10nError('Too many characters in placeable (' + value.length + ', max allowed is ' + MAX_PLACEABLE_LENGTH + ')');
	    }

	    if (locals.contextIsNonLatin1 || value.match(nonLatin1)) {
	      res[1] = FSI + value + PDI;
	    }

	    return res;
	  }

	  return [{}, '{{ ' + id + ' }}'];
	}

	function interpolate(locals, ctx, lang, args, arr) {
	  return arr.reduce(function (_ref, cur) {
	    var _ref2 = _slicedToArray(_ref, 2);

	    var localsSeq = _ref2[0];
	    var valueSeq = _ref2[1];

	    if (typeof cur === 'string') {
	      return [localsSeq, valueSeq + cur];
	    } else {
	      var _subPlaceable = subPlaceable(locals, ctx, lang, args, cur.name);

	      var _subPlaceable2 = _slicedToArray(_subPlaceable, 2);

	      var value = _subPlaceable2[1];

	      return [localsSeq, valueSeq + value];
	    }
	  }, [locals, '']);
	}

	function resolveSelector(ctx, lang, args, expr, index) {
	  var selectorName = undefined;
	  if (index[0].type === 'call' && index[0].expr.type === 'prop' && index[0].expr.expr.name === 'cldr') {
	    selectorName = 'plural';
	  } else {
	    selectorName = index[0].name;
	  }
	  var selector = resolveIdentifier(ctx, lang, args, selectorName)[1];

	  if (typeof selector !== 'function') {
	    return selector;
	  }

	  var argValue = index[0].args ? resolveIdentifier(ctx, lang, args, index[0].args[0].name)[1] : undefined;

	  if (selectorName === 'plural') {
	    if (argValue === 0 && 'zero' in expr) {
	      return 'zero';
	    }
	    if (argValue === 1 && 'one' in expr) {
	      return 'one';
	    }
	    if (argValue === 2 && 'two' in expr) {
	      return 'two';
	    }
	  }

	  return selector(argValue);
	}

	function resolveValue(locals, ctx, lang, args, expr, index) {
	  if (!expr) {
	    return [locals, expr];
	  }

	  if (typeof expr === 'string' || typeof expr === 'boolean' || typeof expr === 'number') {
	    return [locals, expr];
	  }

	  if (Array.isArray(expr)) {
	    locals.contextIsNonLatin1 = expr.some(function ($_) {
	      return typeof $_ === 'string' && $_.match(nonLatin1);
	    });
	    return interpolate(locals, ctx, lang, args, expr);
	  }

	  if (index) {
	    var selector = resolveSelector(ctx, lang, args, expr, index);
	    if (selector in expr) {
	      return resolveValue(locals, ctx, lang, args, expr[selector]);
	    }
	  }

	  if ('other' in expr) {
	    return resolveValue(locals, ctx, lang, args, expr.other);
	  }

	  throw new _errors.L10nError('Unresolvable value');
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getPluralRule = getPluralRule;
	var locales2rules = {
	  'af': 3,
	  'ak': 4,
	  'am': 4,
	  'ar': 1,
	  'asa': 3,
	  'az': 0,
	  'be': 11,
	  'bem': 3,
	  'bez': 3,
	  'bg': 3,
	  'bh': 4,
	  'bm': 0,
	  'bn': 3,
	  'bo': 0,
	  'br': 20,
	  'brx': 3,
	  'bs': 11,
	  'ca': 3,
	  'cgg': 3,
	  'chr': 3,
	  'cs': 12,
	  'cy': 17,
	  'da': 3,
	  'de': 3,
	  'dv': 3,
	  'dz': 0,
	  'ee': 3,
	  'el': 3,
	  'en': 3,
	  'eo': 3,
	  'es': 3,
	  'et': 3,
	  'eu': 3,
	  'fa': 0,
	  'ff': 5,
	  'fi': 3,
	  'fil': 4,
	  'fo': 3,
	  'fr': 5,
	  'fur': 3,
	  'fy': 3,
	  'ga': 8,
	  'gd': 24,
	  'gl': 3,
	  'gsw': 3,
	  'gu': 3,
	  'guw': 4,
	  'gv': 23,
	  'ha': 3,
	  'haw': 3,
	  'he': 2,
	  'hi': 4,
	  'hr': 11,
	  'hu': 0,
	  'id': 0,
	  'ig': 0,
	  'ii': 0,
	  'is': 3,
	  'it': 3,
	  'iu': 7,
	  'ja': 0,
	  'jmc': 3,
	  'jv': 0,
	  'ka': 0,
	  'kab': 5,
	  'kaj': 3,
	  'kcg': 3,
	  'kde': 0,
	  'kea': 0,
	  'kk': 3,
	  'kl': 3,
	  'km': 0,
	  'kn': 0,
	  'ko': 0,
	  'ksb': 3,
	  'ksh': 21,
	  'ku': 3,
	  'kw': 7,
	  'lag': 18,
	  'lb': 3,
	  'lg': 3,
	  'ln': 4,
	  'lo': 0,
	  'lt': 10,
	  'lv': 6,
	  'mas': 3,
	  'mg': 4,
	  'mk': 16,
	  'ml': 3,
	  'mn': 3,
	  'mo': 9,
	  'mr': 3,
	  'ms': 0,
	  'mt': 15,
	  'my': 0,
	  'nah': 3,
	  'naq': 7,
	  'nb': 3,
	  'nd': 3,
	  'ne': 3,
	  'nl': 3,
	  'nn': 3,
	  'no': 3,
	  'nr': 3,
	  'nso': 4,
	  'ny': 3,
	  'nyn': 3,
	  'om': 3,
	  'or': 3,
	  'pa': 3,
	  'pap': 3,
	  'pl': 13,
	  'ps': 3,
	  'pt': 3,
	  'rm': 3,
	  'ro': 9,
	  'rof': 3,
	  'ru': 11,
	  'rwk': 3,
	  'sah': 0,
	  'saq': 3,
	  'se': 7,
	  'seh': 3,
	  'ses': 0,
	  'sg': 0,
	  'sh': 11,
	  'shi': 19,
	  'sk': 12,
	  'sl': 14,
	  'sma': 7,
	  'smi': 7,
	  'smj': 7,
	  'smn': 7,
	  'sms': 7,
	  'sn': 3,
	  'so': 3,
	  'sq': 3,
	  'sr': 11,
	  'ss': 3,
	  'ssy': 3,
	  'st': 3,
	  'sv': 3,
	  'sw': 3,
	  'syr': 3,
	  'ta': 3,
	  'te': 3,
	  'teo': 3,
	  'th': 0,
	  'ti': 4,
	  'tig': 3,
	  'tk': 3,
	  'tl': 4,
	  'tn': 3,
	  'to': 0,
	  'tr': 0,
	  'ts': 3,
	  'tzm': 22,
	  'uk': 11,
	  'ur': 3,
	  've': 3,
	  'vi': 0,
	  'vun': 3,
	  'wa': 4,
	  'wae': 3,
	  'wo': 0,
	  'xh': 3,
	  'xog': 3,
	  'yo': 0,
	  'zh': 0,
	  'zu': 3
	};

	function isIn(n, list) {
	  return list.indexOf(n) !== -1;
	}
	function isBetween(n, start, end) {
	  return typeof n === typeof start && start <= n && n <= end;
	}

	var pluralRules = {
	  '0': function () {
	    return 'other';
	  },
	  '1': function (n) {
	    if (isBetween(n % 100, 3, 10)) {
	      return 'few';
	    }
	    if (n === 0) {
	      return 'zero';
	    }
	    if (isBetween(n % 100, 11, 99)) {
	      return 'many';
	    }
	    if (n === 2) {
	      return 'two';
	    }
	    if (n === 1) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '2': function (n) {
	    if (n !== 0 && n % 10 === 0) {
	      return 'many';
	    }
	    if (n === 2) {
	      return 'two';
	    }
	    if (n === 1) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '3': function (n) {
	    if (n === 1) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '4': function (n) {
	    if (isBetween(n, 0, 1)) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '5': function (n) {
	    if (isBetween(n, 0, 2) && n !== 2) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '6': function (n) {
	    if (n === 0) {
	      return 'zero';
	    }
	    if (n % 10 === 1 && n % 100 !== 11) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '7': function (n) {
	    if (n === 2) {
	      return 'two';
	    }
	    if (n === 1) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '8': function (n) {
	    if (isBetween(n, 3, 6)) {
	      return 'few';
	    }
	    if (isBetween(n, 7, 10)) {
	      return 'many';
	    }
	    if (n === 2) {
	      return 'two';
	    }
	    if (n === 1) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '9': function (n) {
	    if (n === 0 || n !== 1 && isBetween(n % 100, 1, 19)) {
	      return 'few';
	    }
	    if (n === 1) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '10': function (n) {
	    if (isBetween(n % 10, 2, 9) && !isBetween(n % 100, 11, 19)) {
	      return 'few';
	    }
	    if (n % 10 === 1 && !isBetween(n % 100, 11, 19)) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '11': function (n) {
	    if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) {
	      return 'few';
	    }
	    if (n % 10 === 0 || isBetween(n % 10, 5, 9) || isBetween(n % 100, 11, 14)) {
	      return 'many';
	    }
	    if (n % 10 === 1 && n % 100 !== 11) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '12': function (n) {
	    if (isBetween(n, 2, 4)) {
	      return 'few';
	    }
	    if (n === 1) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '13': function (n) {
	    if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) {
	      return 'few';
	    }
	    if (n !== 1 && isBetween(n % 10, 0, 1) || isBetween(n % 10, 5, 9) || isBetween(n % 100, 12, 14)) {
	      return 'many';
	    }
	    if (n === 1) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '14': function (n) {
	    if (isBetween(n % 100, 3, 4)) {
	      return 'few';
	    }
	    if (n % 100 === 2) {
	      return 'two';
	    }
	    if (n % 100 === 1) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '15': function (n) {
	    if (n === 0 || isBetween(n % 100, 2, 10)) {
	      return 'few';
	    }
	    if (isBetween(n % 100, 11, 19)) {
	      return 'many';
	    }
	    if (n === 1) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '16': function (n) {
	    if (n % 10 === 1 && n !== 11) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '17': function (n) {
	    if (n === 3) {
	      return 'few';
	    }
	    if (n === 0) {
	      return 'zero';
	    }
	    if (n === 6) {
	      return 'many';
	    }
	    if (n === 2) {
	      return 'two';
	    }
	    if (n === 1) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '18': function (n) {
	    if (n === 0) {
	      return 'zero';
	    }
	    if (isBetween(n, 0, 2) && n !== 0 && n !== 2) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '19': function (n) {
	    if (isBetween(n, 2, 10)) {
	      return 'few';
	    }
	    if (isBetween(n, 0, 1)) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '20': function (n) {
	    if ((isBetween(n % 10, 3, 4) || n % 10 === 9) && !(isBetween(n % 100, 10, 19) || isBetween(n % 100, 70, 79) || isBetween(n % 100, 90, 99))) {
	      return 'few';
	    }
	    if (n % 1000000 === 0 && n !== 0) {
	      return 'many';
	    }
	    if (n % 10 === 2 && !isIn(n % 100, [12, 72, 92])) {
	      return 'two';
	    }
	    if (n % 10 === 1 && !isIn(n % 100, [11, 71, 91])) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '21': function (n) {
	    if (n === 0) {
	      return 'zero';
	    }
	    if (n === 1) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '22': function (n) {
	    if (isBetween(n, 0, 1) || isBetween(n, 11, 99)) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '23': function (n) {
	    if (isBetween(n % 10, 1, 2) || n % 20 === 0) {
	      return 'one';
	    }
	    return 'other';
	  },
	  '24': function (n) {
	    if (isBetween(n, 3, 10) || isBetween(n, 13, 19)) {
	      return 'few';
	    }
	    if (isIn(n, [2, 12])) {
	      return 'two';
	    }
	    if (isIn(n, [1, 11])) {
	      return 'one';
	    }
	    return 'other';
	  }
	};

	function getPluralRule(code) {
	  var index = locales2rules[code.replace(/-.*$/, '')];
	  if (!(index in pluralRules)) {
	    return function () {
	      return 'other';
	    };
	  }
	  return pluralRules[index];
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _errors = __webpack_require__(2);

	var MAX_PLACEABLES = 100;

	exports.default = {
	  patterns: null,
	  entryIds: null,
	  emit: null,

	  init: function () {
	    this.patterns = {
	      comment: /^\s*#|^\s*$/,
	      entity: /^([^=\s]+)\s*=\s*(.*)$/,
	      multiline: /[^\\]\\$/,
	      index: /\{\[\s*(\w+)(?:\(([^\)]*)\))?\s*\]\}/i,
	      unicode: /\\u([0-9a-fA-F]{1,4})/g,
	      entries: /[^\r\n]+/g,
	      controlChars: /\\([\\\n\r\t\b\f\{\}\"\'])/g,
	      placeables: /\{\{\s*([^\s]*?)\s*\}\}/
	    };
	  },

	  parse: function (emit, source) {
	    if (!this.patterns) {
	      this.init();
	    }
	    this.emit = emit;

	    var entries = {};

	    var lines = source.match(this.patterns.entries);
	    if (!lines) {
	      return entries;
	    }
	    for (var i = 0; i < lines.length; i++) {
	      var line = lines[i];

	      if (this.patterns.comment.test(line)) {
	        continue;
	      }

	      while (this.patterns.multiline.test(line) && i < lines.length) {
	        line = line.slice(0, -1) + lines[++i].trim();
	      }

	      var entityMatch = line.match(this.patterns.entity);
	      if (entityMatch) {
	        try {
	          this.parseEntity(entityMatch[1], entityMatch[2], entries);
	        } catch (e) {
	          if (!this.emit) {
	            throw e;
	          }
	        }
	      }
	    }
	    return entries;
	  },

	  parseEntity: function (id, value, entries) {
	    var name, key;

	    var pos = id.indexOf('[');
	    if (pos !== -1) {
	      name = id.substr(0, pos);
	      key = id.substring(pos + 1, id.length - 1);
	    } else {
	      name = id;
	      key = null;
	    }

	    var nameElements = name.split('.');

	    if (nameElements.length > 2) {
	      throw this.error('Error in ID: "' + name + '".' + ' Nested attributes are not supported.');
	    }

	    var attr;
	    if (nameElements.length > 1) {
	      name = nameElements[0];
	      attr = nameElements[1];

	      if (attr[0] === '$') {
	        throw this.error('Attribute can\'t start with "$"');
	      }
	    } else {
	      attr = null;
	    }

	    this.setEntityValue(name, attr, key, this.unescapeString(value), entries);
	  },

	  setEntityValue: function (id, attr, key, rawValue, entries) {
	    var value = rawValue.indexOf('{{') > -1 ? this.parseString(rawValue) : rawValue;

	    var isSimpleValue = typeof value === 'string';
	    var root = entries;

	    var isSimpleNode = typeof entries[id] === 'string';

	    if (!entries[id] && (attr || key || !isSimpleValue)) {
	      entries[id] = Object.create(null);
	      isSimpleNode = false;
	    }

	    if (attr) {
	      if (isSimpleNode) {
	        var val = entries[id];
	        entries[id] = Object.create(null);
	        entries[id].value = val;
	      }
	      if (!entries[id].attrs) {
	        entries[id].attrs = Object.create(null);
	      }
	      if (!entries[id].attrs && !isSimpleValue) {
	        entries[id].attrs[attr] = Object.create(null);
	      }
	      root = entries[id].attrs;
	      id = attr;
	    }

	    if (key) {
	      isSimpleNode = false;
	      if (typeof root[id] === 'string') {
	        var val = root[id];
	        root[id] = Object.create(null);
	        root[id].index = this.parseIndex(val);
	        root[id].value = Object.create(null);
	      }
	      root = root[id].value;
	      id = key;
	      isSimpleValue = true;
	    }

	    if (isSimpleValue && (!entries[id] || isSimpleNode)) {
	      if (id in root) {
	        throw this.error();
	      }
	      root[id] = value;
	    } else {
	      if (!root[id]) {
	        root[id] = Object.create(null);
	      }
	      root[id].value = value;
	    }
	  },

	  parseString: function (str) {
	    var chunks = str.split(this.patterns.placeables);
	    var complexStr = [];

	    var len = chunks.length;
	    var placeablesCount = (len - 1) / 2;

	    if (placeablesCount >= MAX_PLACEABLES) {
	      throw this.error('Too many placeables (' + placeablesCount + ', max allowed is ' + MAX_PLACEABLES + ')');
	    }

	    for (var i = 0; i < chunks.length; i++) {
	      if (chunks[i].length === 0) {
	        continue;
	      }
	      if (i % 2 === 1) {
	        complexStr.push({ type: 'idOrVar', name: chunks[i] });
	      } else {
	        complexStr.push(chunks[i]);
	      }
	    }
	    return complexStr;
	  },

	  unescapeString: function (str) {
	    if (str.lastIndexOf('\\') !== -1) {
	      str = str.replace(this.patterns.controlChars, '$1');
	    }
	    return str.replace(this.patterns.unicode, function (match, token) {
	      return String.fromCodePoint(parseInt(token, 16));
	    });
	  },

	  parseIndex: function (str) {
	    var match = str.match(this.patterns.index);
	    if (!match) {
	      throw new _errors.L10nError('Malformed index');
	    }
	    if (match[2]) {
	      return [{
	        type: 'call',
	        expr: {
	          type: 'prop',
	          expr: {
	            type: 'glob',
	            name: 'cldr'
	          },
	          prop: 'plural',
	          cmpt: false
	        }, args: [{
	          type: 'idOrVar',
	          name: match[2]
	        }]
	      }];
	    } else {
	      return [{ type: 'idOrVar', name: match[1] }];
	    }
	  },

	  error: function (msg) {
	    var type = arguments.length <= 1 || arguments[1] === undefined ? 'parsererror' : arguments[1];

	    var err = new _errors.L10nError(msg);
	    if (this.emit) {
	      this.emit(type, err);
	    }
	    return err;
	  }
	};
	module.exports = exports.default;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _errors = __webpack_require__(2);

	var MAX_PLACEABLES = 100;

	exports.default = {
	  parse: function (emit, string) {
	    this._source = string;
	    this._index = 0;
	    this._length = string.length;
	    this.entries = Object.create(null);
	    this.emit = emit;

	    return this.getResource();
	  },

	  getResource: function () {
	    this.getWS();
	    while (this._index < this._length) {
	      try {
	        this.getEntry();
	      } catch (e) {
	        if (e instanceof _errors.L10nError) {
	          this.getJunkEntry();
	          if (!this.emit) {
	            throw e;
	          }
	        } else {
	          throw e;
	        }
	      }

	      if (this._index < this._length) {
	        this.getWS();
	      }
	    }

	    return this.entries;
	  },

	  getEntry: function () {
	    if (this._source[this._index] === '<') {
	      ++this._index;
	      var id = this.getIdentifier();
	      if (this._source[this._index] === '[') {
	        ++this._index;
	        return this.getEntity(id, this.getItemList(this.getExpression, ']'));
	      }
	      return this.getEntity(id);
	    }

	    if (this._source.startsWith('/*', this._index)) {
	      return this.getComment();
	    }

	    throw this.error('Invalid entry');
	  },

	  getEntity: function (id, index) {
	    if (!this.getRequiredWS()) {
	      throw this.error('Expected white space');
	    }

	    var ch = this._source[this._index];
	    var value = this.getValue(ch, index === undefined);
	    var attrs = undefined;

	    if (value === undefined) {
	      if (ch === '>') {
	        throw this.error('Expected ">"');
	      }
	      attrs = this.getAttributes();
	    } else {
	      var ws1 = this.getRequiredWS();
	      if (this._source[this._index] !== '>') {
	        if (!ws1) {
	          throw this.error('Expected ">"');
	        }
	        attrs = this.getAttributes();
	      }
	    }

	    ++this._index;

	    if (id in this.entries) {
	      throw this.error('Duplicate entry ID "' + id, 'duplicateerror');
	    }
	    if (!attrs && !index && typeof value === 'string') {
	      this.entries[id] = value;
	    } else {
	      this.entries[id] = {
	        value: value,
	        attrs: attrs,
	        index: index
	      };
	    }
	  },

	  getValue: function () {
	    var ch = arguments.length <= 0 || arguments[0] === undefined ? this._source[this._index] : arguments[0];
	    var optional = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	    switch (ch) {
	      case '\'':
	      case '"':
	        return this.getString(ch, 1);
	      case '{':
	        return this.getHash();
	    }

	    if (!optional) {
	      throw this.error('Unknown value type');
	    }

	    return;
	  },

	  getWS: function () {
	    var cc = this._source.charCodeAt(this._index);

	    while (cc === 32 || cc === 10 || cc === 9 || cc === 13) {
	      cc = this._source.charCodeAt(++this._index);
	    }
	  },

	  getRequiredWS: function () {
	    var pos = this._index;
	    var cc = this._source.charCodeAt(pos);

	    while (cc === 32 || cc === 10 || cc === 9 || cc === 13) {
	      cc = this._source.charCodeAt(++this._index);
	    }
	    return this._index !== pos;
	  },

	  getIdentifier: function () {
	    var start = this._index;
	    var cc = this._source.charCodeAt(this._index);

	    if (cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc === 95) {
	      cc = this._source.charCodeAt(++this._index);
	    } else {
	      throw this.error('Identifier has to start with [a-zA-Z_]');
	    }

	    while (cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc >= 48 && cc <= 57 || cc === 95) {
	      cc = this._source.charCodeAt(++this._index);
	    }

	    return this._source.slice(start, this._index);
	  },

	  getUnicodeChar: function () {
	    for (var i = 0; i < 4; i++) {
	      var cc = this._source.charCodeAt(++this._index);
	      if (cc > 96 && cc < 103 || cc > 64 && cc < 71 || cc > 47 && cc < 58) {
	        continue;
	      }
	      throw this.error('Illegal unicode escape sequence');
	    }
	    this._index++;
	    return String.fromCharCode(parseInt(this._source.slice(this._index - 4, this._index), 16));
	  },

	  stringRe: /"|'|{{|\\/g,
	  getString: function (opchar, opcharLen) {
	    var body = [];
	    var placeables = 0;

	    this._index += opcharLen;
	    var start = this._index;

	    var bufStart = start;
	    var buf = '';

	    while (true) {
	      this.stringRe.lastIndex = this._index;
	      var match = this.stringRe.exec(this._source);

	      if (!match) {
	        throw this.error('Unclosed string literal');
	      }

	      if (match[0] === '"' || match[0] === '\'') {
	        if (match[0] !== opchar) {
	          this._index += opcharLen;
	          continue;
	        }
	        this._index = match.index + opcharLen;
	        break;
	      }

	      if (match[0] === '{{') {
	        if (placeables > MAX_PLACEABLES - 1) {
	          throw this.error('Too many placeables, maximum allowed is ' + MAX_PLACEABLES);
	        }
	        placeables++;
	        if (match.index > bufStart || buf.length > 0) {
	          body.push(buf + this._source.slice(bufStart, match.index));
	          buf = '';
	        }
	        this._index = match.index + 2;
	        this.getWS();
	        body.push(this.getExpression());
	        this.getWS();
	        this._index += 2;
	        bufStart = this._index;
	        continue;
	      }

	      if (match[0] === '\\') {
	        this._index = match.index + 1;
	        var ch2 = this._source[this._index];
	        if (ch2 === 'u') {
	          buf += this._source.slice(bufStart, match.index) + this.getUnicodeChar();
	        } else if (ch2 === opchar || ch2 === '\\') {
	          buf += this._source.slice(bufStart, match.index) + ch2;
	          this._index++;
	        } else if (this._source.startsWith('{{', this._index)) {
	          buf += this._source.slice(bufStart, match.index) + '{{';
	          this._index += 2;
	        } else {
	          throw this.error('Illegal escape sequence');
	        }
	        bufStart = this._index;
	      }
	    }

	    if (body.length === 0) {
	      return buf + this._source.slice(bufStart, this._index - opcharLen);
	    }

	    if (this._index - opcharLen > bufStart || buf.length > 0) {
	      body.push(buf + this._source.slice(bufStart, this._index - opcharLen));
	    }

	    return body;
	  },

	  getAttributes: function () {
	    var attrs = Object.create(null);

	    while (true) {
	      this.getAttribute(attrs);
	      var ws1 = this.getRequiredWS();
	      var ch = this._source.charAt(this._index);
	      if (ch === '>') {
	        break;
	      } else if (!ws1) {
	        throw this.error('Expected ">"');
	      }
	    }
	    return attrs;
	  },

	  getAttribute: function (attrs) {
	    var key = this.getIdentifier();
	    var index = undefined;

	    if (this._source[this._index] === '[') {
	      ++this._index;
	      this.getWS();
	      index = this.getItemList(this.getExpression, ']');
	    }
	    this.getWS();
	    if (this._source[this._index] !== ':') {
	      throw this.error('Expected ":"');
	    }
	    ++this._index;
	    this.getWS();
	    var value = this.getValue();

	    if (key in attrs) {
	      throw this.error('Duplicate attribute "' + key, 'duplicateerror');
	    }

	    if (!index && typeof value === 'string') {
	      attrs[key] = value;
	    } else {
	      attrs[key] = {
	        value: value,
	        index: index
	      };
	    }
	  },

	  getHash: function () {
	    var items = Object.create(null);

	    ++this._index;
	    this.getWS();

	    var defKey = undefined;

	    while (true) {
	      var _getHashItem = this.getHashItem();

	      var _getHashItem2 = _slicedToArray(_getHashItem, 3);

	      var key = _getHashItem2[0];
	      var value = _getHashItem2[1];
	      var def = _getHashItem2[2];

	      items[key] = value;

	      if (def) {
	        if (defKey) {
	          throw this.error('Default item redefinition forbidden');
	        }
	        defKey = key;
	      }
	      this.getWS();

	      var comma = this._source[this._index] === ',';
	      if (comma) {
	        ++this._index;
	        this.getWS();
	      }
	      if (this._source[this._index] === '}') {
	        ++this._index;
	        break;
	      }
	      if (!comma) {
	        throw this.error('Expected "}"');
	      }
	    }

	    if (defKey) {
	      items.__default = defKey;
	    }

	    return items;
	  },

	  getHashItem: function () {
	    var defItem = false;
	    if (this._source[this._index] === '*') {
	      ++this._index;
	      defItem = true;
	    }

	    var key = this.getIdentifier();
	    this.getWS();
	    if (this._source[this._index] !== ':') {
	      throw this.error('Expected ":"');
	    }
	    ++this._index;
	    this.getWS();

	    return [key, this.getValue(), defItem];
	  },

	  getComment: function () {
	    this._index += 2;
	    var start = this._index;
	    var end = this._source.indexOf('*/', start);

	    if (end === -1) {
	      throw this.error('Comment without a closing tag');
	    }

	    this._index = end + 2;
	  },

	  getExpression: function () {
	    var exp = this.getPrimaryExpression();

	    while (true) {
	      var ch = this._source[this._index];
	      if (ch === '.' || ch === '[') {
	        ++this._index;
	        exp = this.getPropertyExpression(exp, ch === '[');
	      } else if (ch === '(') {
	        ++this._index;
	        exp = this.getCallExpression(exp);
	      } else {
	        break;
	      }
	    }

	    return exp;
	  },

	  getPropertyExpression: function (idref, computed) {
	    var exp = undefined;

	    if (computed) {
	      this.getWS();
	      exp = this.getExpression();
	      this.getWS();
	      if (this._source[this._index] !== ']') {
	        throw this.error('Expected "]"');
	      }
	      ++this._index;
	    } else {
	      exp = this.getIdentifier();
	    }

	    return {
	      type: 'prop',
	      expr: idref,
	      prop: exp,
	      cmpt: computed
	    };
	  },

	  getCallExpression: function (callee) {
	    this.getWS();

	    return {
	      type: 'call',
	      expr: callee,
	      args: this.getItemList(this.getExpression, ')')
	    };
	  },

	  getPrimaryExpression: function () {
	    var ch = this._source[this._index];

	    switch (ch) {
	      case '$':
	        ++this._index;
	        return {
	          type: 'var',
	          name: this.getIdentifier()
	        };
	      case '@':
	        ++this._index;
	        return {
	          type: 'glob',
	          name: this.getIdentifier()
	        };
	      default:
	        return {
	          type: 'id',
	          name: this.getIdentifier()
	        };
	    }
	  },

	  getItemList: function (callback, closeChar) {
	    var items = [];
	    var closed = false;

	    this.getWS();

	    if (this._source[this._index] === closeChar) {
	      ++this._index;
	      closed = true;
	    }

	    while (!closed) {
	      items.push(callback.call(this));
	      this.getWS();
	      var ch = this._source.charAt(this._index);
	      switch (ch) {
	        case ',':
	          ++this._index;
	          this.getWS();
	          break;
	        case closeChar:
	          ++this._index;
	          closed = true;
	          break;
	        default:
	          throw this.error('Expected "," or "' + closeChar + '"');
	      }
	    }

	    return items;
	  },

	  getJunkEntry: function () {
	    var pos = this._index;
	    var nextEntity = this._source.indexOf('<', pos);
	    var nextComment = this._source.indexOf('/*', pos);

	    if (nextEntity === -1) {
	      nextEntity = this._length;
	    }
	    if (nextComment === -1) {
	      nextComment = this._length;
	    }

	    var nextEntry = Math.min(nextEntity, nextComment);

	    this._index = nextEntry;
	  },

	  error: function (message) {
	    var type = arguments.length <= 1 || arguments[1] === undefined ? 'parsererror' : arguments[1];

	    var pos = this._index;

	    var start = this._source.lastIndexOf('<', pos - 1);
	    var lastClose = this._source.lastIndexOf('>', pos - 1);
	    start = lastClose > start ? lastClose + 1 : start;
	    var context = this._source.slice(start, pos + 10);

	    var msg = message + ' at pos ' + pos + ': `' + context + '`';
	    var err = new _errors.L10nError(msg);
	    if (this.emit) {
	      this.emit(type, err);
	    }
	    return err;
	  }
	};
	module.exports = exports.default;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.walkEntry = walkEntry;
	exports.walkValue = walkValue;

	function walkEntry(entry, fn) {
	  if (typeof entry === 'string') {
	    return fn(entry);
	  }

	  var newEntry = Object.create(null);

	  if (entry.value) {
	    newEntry.value = walkValue(entry.value, fn);
	  }

	  if (entry.index) {
	    newEntry.index = entry.index;
	  }

	  if (entry.attrs) {
	    newEntry.attrs = Object.create(null);
	    for (var key in entry.attrs) {
	      newEntry.attrs[key] = walkEntry(entry.attrs[key], fn);
	    }
	  }

	  return newEntry;
	}

	function walkValue(value, fn) {
	  if (typeof value === 'string') {
	    return fn(value);
	  }

	  if (value.type) {
	    return value;
	  }

	  var newValue = Array.isArray(value) ? [] : Object.create(null);
	  var keys = Object.keys(value);

	  for (var i = 0, key = undefined; key = keys[i]; i++) {
	    newValue[key] = walkValue(value[key], fn);
	  }

	  return newValue;
	}

	var reAlphas = /[a-zA-Z]/g;
	var reVowels = /[aeiouAEIOU]/g;

	var ACCENTED_MAP = 'ȦƁƇḒḖƑƓĦĪ' + 'ĴĶĿḾȠǾƤɊŘ' + 'ŞŦŬṼẆẊẎẐ' + '[\\]^_`' + 'ȧƀƈḓḗƒɠħī' + 'ĵķŀḿƞǿƥɋř' + 'şŧŭṽẇẋẏẑ';

	var FLIPPED_MAP = '∀ԐↃpƎɟפHIſ' + 'Ӽ˥WNOԀÒᴚS⊥∩Ʌ' + 'ＭXʎZ' + '[\\]ᵥ_,' + 'ɐqɔpǝɟƃɥıɾ' + 'ʞʅɯuodbɹsʇnʌʍxʎz';

	function makeLonger(val) {
	  return val.replace(reVowels, function (match) {
	    return match + match.toLowerCase();
	  });
	}

	function replaceChars(map, val) {
	  return val.replace(reAlphas, function (match) {
	    return map.charAt(match.charCodeAt(0) - 65);
	  });
	}

	var reWords = /[^\W0-9_]+/g;

	function makeRTL(val) {
	  return val.replace(reWords, function (match) {
	    return '‮' + match + '‬';
	  });
	}

	var reExcluded = /(%[EO]?\w|\{\s*.+?\s*\}|&[#\w]+;|<\s*.+?\s*>)/;

	function mapContent(fn, val) {
	  if (!val) {
	    return val;
	  }

	  var parts = val.split(reExcluded);
	  var modified = parts.map(function (part) {
	    if (reExcluded.test(part)) {
	      return part;
	    }
	    return fn(part);
	  });
	  return modified.join('');
	}

	function Pseudo(id, name, charMap, modFn) {
	  this.id = id;
	  this.translate = mapContent.bind(null, function (val) {
	    return replaceChars(charMap, modFn(val));
	  });
	  this.name = this.translate(name);
	}

	var qps = {
	  'qps-ploc': new Pseudo('qps-ploc', 'Runtime Accented', ACCENTED_MAP, makeLonger),
	  'qps-plocm': new Pseudo('qps-plocm', 'Runtime Mirrored', FLIPPED_MAP, makeRTL)
	};
	exports.qps = qps;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.emit = emit;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;

	function emit(listeners) {
	  var _this = this;

	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  var type = args.shift();

	  if (listeners['*']) {
	    listeners['*'].slice().forEach(function (listener) {
	      return listener.apply(_this, args);
	    });
	  }

	  if (listeners[type]) {
	    listeners[type].slice().forEach(function (listener) {
	      return listener.apply(_this, args);
	    });
	  }
	}

	function addEventListener(listeners, type, listener) {
	  if (!(type in listeners)) {
	    listeners[type] = [];
	  }
	  listeners[type].push(listener);
	}

	function removeEventListener(listeners, type, listener) {
	  var typeListeners = listeners[type];
	  var pos = typeListeners.indexOf(listener);
	  if (pos === -1) {
	    return;
	  }

	  typeListeners.splice(pos, 1);
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.translate = translate;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _bindingsHtmlHead = __webpack_require__(13);

	var _dom = __webpack_require__(14);

	var observerConfig = {
	  attributes: true,
	  characterData: false,
	  childList: true,
	  subtree: true,
	  attributeFilter: ['data-l10n-id', 'data-l10n-args']
	};

	var View = (function () {
	  function View(service, doc) {
	    var _this = this;

	    _classCallCheck(this, View);

	    this.service = service;
	    this.doc = doc;
	    this.ctx = this.service.env.createContext((0, _bindingsHtmlHead.getResourceLinks)(doc.head));

	    this.ready = new Promise(function (resolve) {
	      var viewReady = function (evt) {
	        doc.removeEventListener('DOMLocalized', viewReady);
	        resolve(evt.detail.languages);
	      };
	      doc.addEventListener('DOMLocalized', viewReady);
	    });

	    var observer = new MutationObserver(onMutations.bind(this));
	    this.observe = function () {
	      return observer.observe(_this.doc, observerConfig);
	    };
	    this.disconnect = function () {
	      return observer.disconnect();
	    };

	    this.observe();
	  }

	  _createClass(View, [{
	    key: 'emit',
	    value: function emit() {
	      var _service$env;

	      return (_service$env = this.service.env).emit.apply(_service$env, arguments);
	    }
	  }, {
	    key: 'formatValue',
	    value: function formatValue(id, args) {
	      var _this2 = this;

	      return this.service.languages.then(function (langs) {
	        return _this2.ctx.formatValue(langs, id, args);
	      });
	    }
	  }, {
	    key: 'formatEntity',
	    value: function formatEntity(id, args) {
	      var _this3 = this;

	      return this.service.languages.then(function (langs) {
	        return _this3.ctx.formatEntity(langs, id, args);
	      });
	    }
	  }, {
	    key: 'translateFragment',
	    value: function translateFragment(frag) {
	      var _this4 = this;

	      return this.service.languages.then(function (langs) {
	        return (0, _dom.translateFragment)(_this4, langs, frag);
	      });
	    }
	  }, {
	    key: 'languages',
	    get: function () {
	      return this.service.languages;
	    },
	    set: function (langs) {
	      return this.service.requestLanguages(langs);
	    }
	  }]);

	  return View;
	})();

	exports.View = View;

	View.prototype.setAttributes = _dom.setAttributes;
	View.prototype.getAttributes = _dom.getAttributes;

	function onMutations(mutations) {
	  var _this5 = this;

	  return this.service.languages.then(function (langs) {
	    return (0, _dom.translateMutations)(_this5, langs, mutations);
	  });
	}

	function translate(langs) {
	  dispatchEvent(this.doc, 'supportedlanguageschange', langs);

	  return this.ctx.fetch(langs).then(translateDocument.bind(this, langs));
	}

	function translateDocument(langs) {
	  var view = this;
	  var doc = this.doc;

	  var setDOMLocalized = function () {
	    doc.localized = true;
	    dispatchEvent(doc, 'DOMLocalized', langs);
	  };

	  if (langs[0].code === doc.documentElement.getAttribute('lang')) {
	    return Promise.resolve(setDOMLocalized());
	  }

	  return (0, _dom.translateFragment)(view, langs, doc.documentElement).then(function () {
	    doc.documentElement.lang = langs[0].code;
	    doc.documentElement.dir = langs[0].dir;
	    setDOMLocalized();
	  });
	}

	function dispatchEvent(root, name, langs) {
	  var event = new CustomEvent(name, {
	    bubbles: false,
	    cancelable: false,
	    detail: {
	      languages: langs
	    }
	  });
	  root.dispatchEvent(event);
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	exports.getResourceLinks = getResourceLinks;
	exports.getMeta = getMeta;

	function getResourceLinks(head) {
	  return Array.prototype.map.call(head.querySelectorAll('link[rel="localization"]'), function (el) {
	    return decodeURI(el.getAttribute('href'));
	  });
	}

	function getMeta(head) {
	  var availableLangs = Object.create(null);
	  var defaultLang = null;
	  var appVersion = null;

	  var els = head.querySelectorAll('meta[name="availableLanguages"],' + 'meta[name="defaultLanguage"],' + 'meta[name="appVersion"]');
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = els[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var el = _step.value;

	      var _name = el.getAttribute('name');
	      var content = el.getAttribute('content').trim();
	      switch (_name) {
	        case 'availableLanguages':
	          availableLangs = getLangRevisionMap(availableLangs, content);
	          break;
	        case 'defaultLanguage':
	          var _getLangRevisionTuple = getLangRevisionTuple(content),
	              _getLangRevisionTuple2 = _slicedToArray(_getLangRevisionTuple, 2),
	              lang = _getLangRevisionTuple2[0],
	              rev = _getLangRevisionTuple2[1];

	          defaultLang = lang;
	          if (!(lang in availableLangs)) {
	            availableLangs[lang] = rev;
	          }
	          break;
	        case 'appVersion':
	          appVersion = content;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator['return']) {
	        _iterator['return']();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return {
	    defaultLang: defaultLang,
	    availableLangs: availableLangs,
	    appVersion: appVersion
	  };
	}

	function getLangRevisionMap(seq, str) {
	  return str.split(',').reduce(function (seq, cur) {
	    var _getLangRevisionTuple3 = getLangRevisionTuple(cur);

	    var _getLangRevisionTuple32 = _slicedToArray(_getLangRevisionTuple3, 2);

	    var lang = _getLangRevisionTuple32[0];
	    var rev = _getLangRevisionTuple32[1];

	    seq[lang] = rev;
	    return seq;
	  }, seq);
	}

	function getLangRevisionTuple(str) {
	  var _str$trim$split = str.trim().split(':');

	  var _str$trim$split2 = _slicedToArray(_str$trim$split, 2);

	  var lang = _str$trim$split2[0];
	  var rev = _str$trim$split2[1];

	  return [lang, parseInt(rev)];
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.setAttributes = setAttributes;
	exports.getAttributes = getAttributes;
	exports.translateMutations = translateMutations;
	exports.translateFragment = translateFragment;
	exports.translateElement = translateElement;

	var _libErrors = __webpack_require__(2);

	var reOverlay = /<|&#?\w+;/;

	var allowed = {
	  elements: ['a', 'em', 'strong', 'small', 's', 'cite', 'q', 'dfn', 'abbr', 'data', 'time', 'code', 'var', 'samp', 'kbd', 'sub', 'sup', 'i', 'b', 'u', 'mark', 'ruby', 'rt', 'rp', 'bdi', 'bdo', 'span', 'br', 'wbr'],
	  attributes: {
	    global: ['title', 'aria-label', 'aria-valuetext', 'aria-moz-hint'],
	    a: ['download'],
	    area: ['download', 'alt'],

	    input: ['alt', 'placeholder'],
	    menuitem: ['label'],
	    menu: ['label'],
	    optgroup: ['label'],
	    option: ['label'],
	    track: ['label'],
	    img: ['alt'],
	    textarea: ['placeholder'],
	    th: ['abbr']
	  }
	};

	function setAttributes(element, id, args) {
	  element.setAttribute('data-l10n-id', id);
	  if (args) {
	    element.setAttribute('data-l10n-args', JSON.stringify(args));
	  }
	}

	function getAttributes(element) {
	  return {
	    id: element.getAttribute('data-l10n-id'),
	    args: JSON.parse(element.getAttribute('data-l10n-args'))
	  };
	}

	function getTranslatables(element) {
	  var nodes = [];

	  if (typeof element.hasAttribute === 'function' && element.hasAttribute('data-l10n-id')) {
	    nodes.push(element);
	  }

	  return nodes.concat.apply(nodes, element.querySelectorAll('*[data-l10n-id]'));
	}

	function translateMutations(view, langs, mutations) {
	  var targets = new Set();

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = mutations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var mutation = _step.value;

	      switch (mutation.type) {
	        case 'attributes':
	          targets.add(mutation.target);
	          break;
	        case 'childList':
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = mutation.addedNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var addedNode = _step2.value;

	              if (addedNode.nodeType === addedNode.ELEMENT_NODE) {
	                targets.add(addedNode);
	              }
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	                _iterator2['return']();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }

	          break;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator['return']) {
	        _iterator['return']();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  if (targets.size === 0) {
	    return;
	  }

	  var elements = [];

	  targets.forEach(function (target) {
	    return target.childElementCount ? elements.concat(getTranslatables(target)) : elements.push(target);
	  });

	  Promise.all(elements.map(function (elem) {
	    return getElementTranslation(view, langs, elem);
	  })).then(function (translations) {
	    return applyTranslations(view, elements, translations);
	  });
	}

	function translateFragment(view, langs, frag) {
	  var elements = getTranslatables(frag);
	  return Promise.all(elements.map(function (elem) {
	    return getElementTranslation(view, langs, elem);
	  })).then(function (translations) {
	    return applyTranslations(view, elements, translations);
	  });
	}

	function camelCaseToDashed(string) {
	  if (string === 'ariaValueText') {
	    return 'aria-valuetext';
	  }

	  return string.replace(/[A-Z]/g, function (match) {
	    return '-' + match.toLowerCase();
	  }).replace(/^-/, '');
	}

	function getElementTranslation(view, langs, elem) {
	  var l10n = getAttributes(elem);

	  return l10n.id ? view.ctx.formatEntity(langs, l10n.id, l10n.args) : false;
	}

	function translateElement(view, langs, elem) {
	  return getElementTranslation(view, langs, elem).then(function (translation) {
	    if (!translation) {
	      return false;
	    }

	    view.disconnect();
	    applyTranslation(view, elem, translation);
	    view.observe();
	  });
	}

	function applyTranslations(view, elements, translations) {
	  view.disconnect();
	  for (var i = 0; i < elements.length; i++) {
	    if (translations[i] === false) {
	      continue;
	    }
	    applyTranslation(view, elements[i], translations[i]);
	  }
	  view.observe();
	}

	function applyTranslation(view, element, translation) {
	  var value = undefined;
	  if (translation.attrs && translation.attrs.innerHTML) {
	    value = translation.attrs.innerHTML;
	    view.emit('deprecatewarning', new _libErrors.L10nError('L10n Deprecation Warning: using innerHTML in translations is unsafe ' + 'and will not be supported in future versions of l10n.js. ' + 'See https://bugzil.la/1027117'));
	  } else {
	    value = translation.value;
	  }

	  if (typeof value === 'string') {
	    if (!reOverlay.test(value)) {
	      element.textContent = value;
	    } else {
	      var tmpl = element.ownerDocument.createElement('template');
	      tmpl.innerHTML = value;

	      overlayElement(element, tmpl.content);
	    }
	  }

	  for (var key in translation.attrs) {
	    var attrName = camelCaseToDashed(key);
	    if (isAttrAllowed({ name: attrName }, element)) {
	      element.setAttribute(attrName, translation.attrs[key]);
	    }
	  }
	}

	function overlayElement(sourceElement, translationElement) {
	  var result = translationElement.ownerDocument.createDocumentFragment();
	  var k = undefined,
	      attr = undefined;

	  var childElement = undefined;
	  while (childElement = translationElement.childNodes[0]) {
	    translationElement.removeChild(childElement);

	    if (childElement.nodeType === childElement.TEXT_NODE) {
	      result.appendChild(childElement);
	      continue;
	    }

	    var index = getIndexOfType(childElement);
	    var sourceChild = getNthElementOfType(sourceElement, childElement, index);
	    if (sourceChild) {
	      overlayElement(sourceChild, childElement);
	      result.appendChild(sourceChild);
	      continue;
	    }

	    if (isElementAllowed(childElement)) {
	      for (k = 0, attr; attr = childElement.attributes[k]; k++) {
	        if (!isAttrAllowed(attr, childElement)) {
	          childElement.removeAttribute(attr.name);
	        }
	      }
	      result.appendChild(childElement);
	      continue;
	    }

	    result.appendChild(translationElement.ownerDocument.createTextNode(childElement.textContent));
	  }

	  sourceElement.textContent = '';
	  sourceElement.appendChild(result);

	  if (translationElement.attributes) {
	    for (k = 0, attr; attr = translationElement.attributes[k]; k++) {
	      if (isAttrAllowed(attr, sourceElement)) {
	        sourceElement.setAttribute(attr.name, attr.value);
	      }
	    }
	  }
	}

	function isElementAllowed(element) {
	  return allowed.elements.indexOf(element.tagName.toLowerCase()) !== -1;
	}

	function isAttrAllowed(attr, element) {
	  var attrName = attr.name.toLowerCase();
	  var tagName = element.tagName.toLowerCase();

	  if (allowed.attributes.global.indexOf(attrName) !== -1) {
	    return true;
	  }

	  if (!allowed.attributes[tagName]) {
	    return false;
	  }

	  if (allowed.attributes[tagName].indexOf(attrName) !== -1) {
	    return true;
	  }

	  if (tagName === 'input' && attrName === 'value') {
	    var type = element.type.toLowerCase();
	    if (type === 'submit' || type === 'button' || type === 'reset') {
	      return true;
	    }
	  }
	  return false;
	}

	function getNthElementOfType(context, element, index) {
	  var nthOfType = 0;
	  for (var i = 0, child = undefined; child = context.children[i]; i++) {
	    if (child.nodeType === child.ELEMENT_NODE && child.tagName === element.tagName) {
	      if (nthOfType === index) {
	        return child;
	      }
	      nthOfType++;
	    }
	  }
	  return null;
	}

	function getIndexOfType(element) {
	  var index = 0;
	  var child = undefined;
	  while (child = element.previousElementSibling) {
	    if (child.tagName === element.tagName) {
	      index++;
	    }
	  }
	  return index;
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.negotiateLanguages = negotiateLanguages;
	exports.getDirection = getDirection;

	var _libIntl = __webpack_require__(16);

	var _libPseudo = __webpack_require__(10);

	var rtlList = ['ar', 'he', 'fa', 'ps', 'qps-plocm', 'ur'];

	function negotiateLanguages(fn, appVersion, defaultLang, availableLangs, additionalLangs, prevLangs, requestedLangs) {

	  var allAvailableLangs = Object.keys(availableLangs).concat(additionalLangs || []).concat(Object.keys(_libPseudo.qps));
	  var newLangs = (0, _libIntl.prioritizeLocales)(defaultLang, allAvailableLangs, requestedLangs);

	  var langs = newLangs.map(function (code) {
	    return {
	      code: code,
	      src: getLangSource(appVersion, availableLangs, additionalLangs, code),
	      dir: getDirection(code)
	    };
	  });

	  if (!arrEqual(prevLangs, newLangs)) {
	    fn(langs);
	  }

	  return langs;
	}

	function getDirection(code) {
	  return rtlList.indexOf(code) >= 0 ? 'rtl' : 'ltr';
	}

	function arrEqual(arr1, arr2) {
	  return arr1.length === arr2.length && arr1.every(function (elem, i) {
	    return elem === arr2[i];
	  });
	}

	function getMatchingLangpack(appVersion, langpacks) {
	  for (var i = 0, langpack = undefined; langpack = langpacks[i]; i++) {
	    if (langpack.target === appVersion) {
	      return langpack;
	    }
	  }
	  return null;
	}

	function getLangSource(appVersion, availableLangs, additionalLangs, code) {
	  if (additionalLangs && additionalLangs[code]) {
	    var lp = getMatchingLangpack(appVersion, additionalLangs[code]);
	    if (lp && (!(code in availableLangs) || parseInt(lp.revision) > availableLangs[code])) {
	      return 'extra';
	    }
	  }

	  if (code in _libPseudo.qps && !(code in availableLangs)) {
	    return 'qps';
	  }

	  return 'app';
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.prioritizeLocales = prioritizeLocales;

	function prioritizeLocales(def, availableLangs, requested) {
	  var supportedLocale = undefined;

	  for (var i = 0; i < requested.length; i++) {
	    var locale = requested[i];
	    if (availableLangs.indexOf(locale) !== -1) {
	      supportedLocale = locale;
	      break;
	    }
	  }
	  if (!supportedLocale || supportedLocale === def) {
	    return [def];
	  }

	  return [supportedLocale, def];
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _ast = __webpack_require__(18);

	var _ast2 = _interopRequireDefault(_ast);

	var _errors = __webpack_require__(2);

	var MAX_PLACEABLES = 100;

	exports.default = {
	  parse: function (env, string) {
	    var pos = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	    this._source = string;
	    this._index = 0;
	    this._length = string.length;
	    this._curEntryStart = 0;
	    this._config = {
	      pos: pos
	    };

	    if (pos !== true) {
	      _ast2.default.Node.prototype.setPosition = function () {};
	    }
	    return this.getResource(pos);
	  },

	  getResource: function () {
	    var resource = new _ast2.default.Resource();
	    resource.setPosition(0, this._length);
	    resource._errors = [];

	    this.getWS();
	    while (this._index < this._length) {
	      try {
	        resource.body.push(this.getEntry());
	      } catch (e) {
	        if (e instanceof _errors.L10nError) {
	          resource._errors.push(e);
	          resource.body.push(this.getJunkEntry());
	        } else {
	          throw e;
	        }
	      }
	      if (this._index < this._length) {
	        this.getWS();
	      }
	    }

	    return resource;
	  },

	  getEntry: function () {
	    this._curEntryStart = this._index;

	    if (this._source[this._index] === '<') {
	      ++this._index;
	      var id = this.getIdentifier();
	      if (this._source[this._index] === '[') {
	        ++this._index;
	        return this.getEntity(id, this.getItemList(this.getExpression, ']'));
	      }
	      return this.getEntity(id);
	    }

	    if (this._source.startsWith('/*', this._index)) {
	      return this.getComment();
	    }

	    throw this.error('Invalid entry');
	  },

	  getEntity: function (id, index) {
	    if (!this.getRequiredWS()) {
	      throw this.error('Expected white space');
	    }

	    var ch = this._source.charAt(this._index);
	    var value = this.getValue(ch, index === undefined);
	    var attrs = undefined;

	    if (value === null) {
	      if (ch === '>') {
	        throw this.error('Expected ">"');
	      }
	      attrs = this.getAttributes();
	    } else {
	      var ws1 = this.getRequiredWS();
	      if (this._source[this._index] !== '>') {
	        if (!ws1) {
	          throw this.error('Expected ">"');
	        }
	        attrs = this.getAttributes();
	      }
	    }

	    ++this._index;

	    var entity = new _ast2.default.Entity(id, value, index, attrs);
	    entity.setPosition(this._curEntryStart, this._index);
	    return entity;
	  },

	  getValue: function () {
	    var ch = arguments.length <= 0 || arguments[0] === undefined ? this._source[this._index] : arguments[0];
	    var optional = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	    switch (ch) {
	      case '\'':
	      case '"':
	        return this.getString(ch, 1);
	      case '{':
	        return this.getHash();
	    }

	    if (!optional) {
	      throw this.error('Unknown value type');
	    }
	    return null;
	  },

	  getWS: function () {
	    var cc = this._source.charCodeAt(this._index);

	    while (cc === 32 || cc === 10 || cc === 9 || cc === 13) {
	      cc = this._source.charCodeAt(++this._index);
	    }
	  },

	  getRequiredWS: function () {
	    var pos = this._index;
	    var cc = this._source.charCodeAt(pos);

	    while (cc === 32 || cc === 10 || cc === 9 || cc === 13) {
	      cc = this._source.charCodeAt(++this._index);
	    }
	    return this._index !== pos;
	  },

	  getIdentifier: function () {
	    var start = this._index;
	    var cc = this._source.charCodeAt(this._index);

	    if (cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc === 95) {
	      cc = this._source.charCodeAt(++this._index);
	    } else {
	      throw this.error('Identifier has to start with [a-zA-Z_]');
	    }

	    while (cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc >= 48 && cc <= 57 || cc === 95) {
	      cc = this._source.charCodeAt(++this._index);
	    }

	    var id = new _ast2.default.Identifier(this._source.slice(start, this._index));
	    id.setPosition(start, this._index);
	    return id;
	  },

	  getUnicodeChar: function () {
	    for (var i = 0; i < 4; i++) {
	      var cc = this._source.charCodeAt(++this._index);
	      if (cc > 96 && cc < 103 || cc > 64 && cc < 71 || cc > 47 && cc < 58) {
	        continue;
	      }
	      throw this.error('Illegal unicode escape sequence');
	    }
	    return '\\u' + this._source.slice(this._index - 3, this._index + 1);
	  },

	  getString: function (opchar, opcharLen) {
	    var body = [];
	    var buf = '';
	    var placeables = 0;

	    this._index += opcharLen - 1;

	    var start = this._index + 1;

	    var closed = false;

	    while (!closed) {
	      var ch = this._source[++this._index];

	      switch (ch) {
	        case '\\':
	          var ch2 = this._source[++this._index];
	          if (ch2 === 'u') {
	            buf += this.getUnicodeChar();
	          } else if (ch2 === opchar || ch2 === '\\') {
	            buf += ch2;
	          } else if (ch2 === '{' && this._source[this._index + 1] === '{') {
	            buf += '{';
	          } else {
	            throw this.error('Illegal escape sequence');
	          }
	          break;
	        case '{':
	          if (this._source[this._index + 1] === '{') {
	            if (placeables > MAX_PLACEABLES - 1) {
	              throw this.error('Too many placeables, maximum allowed is ' + MAX_PLACEABLES);
	            }
	            if (buf.length) {
	              body.push(buf);
	              buf = '';
	            }
	            this._index += 2;
	            this.getWS();
	            body.push(this.getExpression());
	            this.getWS();
	            if (!this._source.startsWith('}}', this._index)) {
	              throw this.error('Expected "}}"');
	            }
	            this._index += 1;
	            placeables++;
	            break;
	          }

	        default:
	          if (ch === opchar) {
	            this._index++;
	            closed = true;
	            break;
	          }

	          buf += ch;
	          if (this._index + 1 >= this._length) {
	            throw this.error('Unclosed string literal');
	          }
	      }
	    }

	    if (buf.length) {
	      body.push(buf);
	    }

	    var string = new _ast2.default.String(this._source.slice(start, this._index - 1), body);
	    string.setPosition(start, this._index);
	    string._opchar = opchar;

	    return string;
	  },

	  getAttributes: function () {
	    var attrs = [];

	    while (true) {
	      var attr = this.getAttribute();
	      attrs.push(attr);
	      var ws1 = this.getRequiredWS();
	      var ch = this._source.charAt(this._index);
	      if (ch === '>') {
	        break;
	      } else if (!ws1) {
	        throw this.error('Expected ">"');
	      }
	    }
	    return attrs;
	  },

	  getAttribute: function () {
	    var start = this._index;
	    var key = this.getIdentifier();
	    var index = undefined;

	    if (this._source[this._index] === '[') {
	      ++this._index;
	      this.getWS();
	      index = this.getItemList(this.getExpression, ']');
	    }
	    this.getWS();
	    if (this._source[this._index] !== ':') {
	      throw this.error('Expected ":"');
	    }
	    ++this._index;
	    this.getWS();
	    var attr = new _ast2.default.Attribute(key, this.getValue(), index);
	    attr.setPosition(start, this._index);
	    return attr;
	  },

	  getHash: function () {
	    var start = this._index;
	    var items = [];

	    ++this._index;
	    this.getWS();

	    while (true) {
	      items.push(this.getHashItem());
	      this.getWS();

	      var comma = this._source[this._index] === ',';
	      if (comma) {
	        ++this._index;
	        this.getWS();
	      }
	      if (this._source[this._index] === '}') {
	        ++this._index;
	        break;
	      }
	      if (!comma) {
	        throw this.error('Expected "}"');
	      }
	    }

	    var hash = new _ast2.default.Hash(items);
	    hash.setPosition(start, this._index);
	    return hash;
	  },

	  getHashItem: function () {
	    var start = this._index;

	    var defItem = false;
	    if (this._source[this._index] === '*') {
	      ++this._index;
	      defItem = true;
	    }

	    var key = this.getIdentifier();
	    this.getWS();
	    if (this._source[this._index] !== ':') {
	      throw this.error('Expected ":"');
	    }
	    ++this._index;
	    this.getWS();

	    var hashItem = new _ast2.default.HashItem(key, this.getValue(), defItem);
	    hashItem.setPosition(start, this._index);
	    return hashItem;
	  },

	  getComment: function () {
	    this._index += 2;
	    var start = this._index;
	    var end = this._source.indexOf('*/', start);

	    if (end === -1) {
	      throw this.error('Comment without a closing tag');
	    }

	    this._index = end + 2;
	    var comment = new _ast2.default.Comment(this._source.slice(start, end));
	    comment.setPosition(start - 2, this._index);
	    return comment;
	  },

	  getExpression: function () {
	    var start = this._index;
	    var exp = this.getPrimaryExpression();

	    while (true) {
	      var ch = this._source[this._index];
	      if (ch === '.' || ch === '[') {
	        ++this._index;
	        exp = this.getPropertyExpression(exp, ch === '[', start);
	      } else if (ch === '(') {
	        ++this._index;
	        exp = this.getCallExpression(exp, start);
	      } else {
	        break;
	      }
	    }

	    return exp;
	  },

	  getPropertyExpression: function (idref, computed, start) {
	    var exp = undefined;

	    if (computed) {
	      this.getWS();
	      exp = this.getExpression();
	      this.getWS();
	      if (this._source[this._index] !== ']') {
	        throw this.error('Expected "]"');
	      }
	      ++this._index;
	    } else {
	      exp = this.getIdentifier();
	    }

	    var propExpr = new _ast2.default.PropertyExpression(idref, exp, computed);
	    propExpr.setPosition(start, this._index);
	    return propExpr;
	  },

	  getCallExpression: function (callee, start) {
	    this.getWS();

	    var callExpr = new _ast2.default.CallExpression(callee, this.getItemList(this.getExpression, ')'));
	    callExpr.setPosition(start, this._index);
	    return callExpr;
	  },

	  getPrimaryExpression: function () {
	    var start = this._index;
	    var ch = this._source[this._index];

	    switch (ch) {
	      case '$':
	        ++this._index;
	        var variable = new _ast2.default.Variable(this.getIdentifier());
	        variable.setPosition(start, this._index);
	        return variable;
	      case '@':
	        ++this._index;
	        var global = new _ast2.default.Global(this.getIdentifier());
	        global.setPosition(start, this._index);
	        return global;
	      default:
	        return this.getIdentifier();
	    }
	  },

	  getItemList: function (callback, closeChar) {
	    var items = [];
	    var closed = false;

	    this.getWS();

	    if (this._source[this._index] === closeChar) {
	      ++this._index;
	      closed = true;
	    }

	    while (!closed) {
	      items.push(callback.call(this));
	      this.getWS();
	      var ch = this._source.charAt(this._index);
	      switch (ch) {
	        case ',':
	          ++this._index;
	          this.getWS();
	          break;
	        case closeChar:
	          ++this._index;
	          closed = true;
	          break;
	        default:
	          throw this.error('Expected "," or "' + closeChar + '"');
	      }
	    }

	    return items;
	  },

	  error: function (message) {
	    var pos = this._index;

	    var start = this._source.lastIndexOf('<', pos - 1);
	    var lastClose = this._source.lastIndexOf('>', pos - 1);
	    start = lastClose > start ? lastClose + 1 : start;
	    var context = this._source.slice(start, pos + 10);

	    var msg = message + ' at pos ' + pos + ': `' + context + '`';

	    var err = new _errors.L10nError(msg);
	    err._pos = { start: pos, end: undefined };
	    err.offset = pos - start;
	    err.description = message;
	    err.context = context;
	    return err;
	  },

	  getJunkEntry: function () {
	    var pos = this._index;
	    var nextEntity = this._source.indexOf('<', pos);
	    var nextComment = this._source.indexOf('/*', pos);

	    if (nextEntity === -1) {
	      nextEntity = this._length;
	    }
	    if (nextComment === -1) {
	      nextComment = this._length;
	    }

	    var nextEntry = Math.min(nextEntity, nextComment);

	    this._index = nextEntry;

	    return new _ast2.default.JunkEntry(this._source.slice(this._curEntryStart, nextEntry));
	  }
	};
	module.exports = exports.default;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Node = (function () {
	  function Node() {
	    _classCallCheck(this, Node);

	    this.type = this.constructor.name;
	  }

	  _createClass(Node, [{
	    key: 'setPosition',
	    value: function setPosition(start, end) {
	      this._pos = { start: start, end: end };
	    }
	  }]);

	  return Node;
	})();

	var Entry = (function (_Node) {
	  function Entry() {
	    _classCallCheck(this, Entry);

	    _get(Object.getPrototypeOf(Entry.prototype), 'constructor', this).call(this);
	  }

	  _inherits(Entry, _Node);

	  return Entry;
	})(Node);

	var Identifier = (function (_Node2) {
	  function Identifier(name) {
	    _classCallCheck(this, Identifier);

	    _get(Object.getPrototypeOf(Identifier.prototype), 'constructor', this).call(this);
	    this.name = name;
	  }

	  _inherits(Identifier, _Node2);

	  return Identifier;
	})(Node);

	var Variable = (function (_Node3) {
	  function Variable(name) {
	    _classCallCheck(this, Variable);

	    _get(Object.getPrototypeOf(Variable.prototype), 'constructor', this).call(this);
	    this.name = name;
	  }

	  _inherits(Variable, _Node3);

	  return Variable;
	})(Node);

	var Global = (function (_Node4) {
	  function Global(name) {
	    _classCallCheck(this, Global);

	    _get(Object.getPrototypeOf(Global.prototype), 'constructor', this).call(this);
	    this.name = name;
	  }

	  _inherits(Global, _Node4);

	  return Global;
	})(Node);

	var Value = (function (_Node5) {
	  function Value() {
	    _classCallCheck(this, Value);

	    _get(Object.getPrototypeOf(Value.prototype), 'constructor', this).call(this);
	  }

	  _inherits(Value, _Node5);

	  return Value;
	})(Node);

	var String = (function (_Value) {
	  function String(source, content) {
	    _classCallCheck(this, String);

	    _get(Object.getPrototypeOf(String.prototype), 'constructor', this).call(this);
	    this.source = source;
	    this.content = content;

	    this._opchar = '"';
	  }

	  _inherits(String, _Value);

	  return String;
	})(Value);

	var Hash = (function (_Value2) {
	  function Hash(items) {
	    _classCallCheck(this, Hash);

	    _get(Object.getPrototypeOf(Hash.prototype), 'constructor', this).call(this);
	    this.items = items;
	  }

	  _inherits(Hash, _Value2);

	  return Hash;
	})(Value);

	var Entity = (function (_Entry) {
	  function Entity(id) {
	    var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    var index = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	    var attrs = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

	    _classCallCheck(this, Entity);

	    _get(Object.getPrototypeOf(Entity.prototype), 'constructor', this).call(this);
	    this.id = id;
	    this.value = value;
	    this.index = index;
	    this.attrs = attrs;
	  }

	  _inherits(Entity, _Entry);

	  return Entity;
	})(Entry);

	var Resource = (function (_Node6) {
	  function Resource() {
	    _classCallCheck(this, Resource);

	    _get(Object.getPrototypeOf(Resource.prototype), 'constructor', this).call(this);
	    this.body = [];
	  }

	  _inherits(Resource, _Node6);

	  return Resource;
	})(Node);

	var Attribute = (function (_Node7) {
	  function Attribute(id, value) {
	    var index = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    _classCallCheck(this, Attribute);

	    _get(Object.getPrototypeOf(Attribute.prototype), 'constructor', this).call(this);
	    this.id = id;
	    this.value = value;
	    this.index = index;
	  }

	  _inherits(Attribute, _Node7);

	  return Attribute;
	})(Node);

	var HashItem = (function (_Node8) {
	  function HashItem(id, value, defItem) {
	    _classCallCheck(this, HashItem);

	    _get(Object.getPrototypeOf(HashItem.prototype), 'constructor', this).call(this);
	    this.id = id;
	    this.value = value;
	    this.default = defItem;
	  }

	  _inherits(HashItem, _Node8);

	  return HashItem;
	})(Node);

	var Comment = (function (_Entry2) {
	  function Comment(body) {
	    _classCallCheck(this, Comment);

	    _get(Object.getPrototypeOf(Comment.prototype), 'constructor', this).call(this);
	    this.body = body;
	  }

	  _inherits(Comment, _Entry2);

	  return Comment;
	})(Entry);

	var Expression = (function (_Node9) {
	  function Expression() {
	    _classCallCheck(this, Expression);

	    _get(Object.getPrototypeOf(Expression.prototype), 'constructor', this).call(this);
	  }

	  _inherits(Expression, _Node9);

	  return Expression;
	})(Node);

	var PropertyExpression = (function (_Expression) {
	  function PropertyExpression(idref, exp) {
	    var computed = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	    _classCallCheck(this, PropertyExpression);

	    _get(Object.getPrototypeOf(PropertyExpression.prototype), 'constructor', this).call(this);
	    this.idref = idref;
	    this.exp = exp;
	    this.computed = computed;
	  }

	  _inherits(PropertyExpression, _Expression);

	  return PropertyExpression;
	})(Expression);

	var CallExpression = (function (_Expression2) {
	  function CallExpression(callee, args) {
	    _classCallCheck(this, CallExpression);

	    _get(Object.getPrototypeOf(CallExpression.prototype), 'constructor', this).call(this);
	    this.callee = callee;
	    this.args = args;
	  }

	  _inherits(CallExpression, _Expression2);

	  return CallExpression;
	})(Expression);

	var JunkEntry = (function (_Entry3) {
	  function JunkEntry(content) {
	    _classCallCheck(this, JunkEntry);

	    _get(Object.getPrototypeOf(JunkEntry.prototype), 'constructor', this).call(this);
	    this.content = content;
	  }

	  _inherits(JunkEntry, _Entry3);

	  return JunkEntry;
	})(Entry);

	exports.default = {
	  Node: Node,
	  Identifier: Identifier,
	  Value: Value,
	  String: String,
	  Hash: Hash,
	  Entity: Entity,
	  Resource: Resource,
	  Attribute: Attribute,
	  HashItem: HashItem,
	  Comment: Comment,
	  Variable: Variable,
	  Global: Global,
	  Expression: Expression,
	  PropertyExpression: PropertyExpression,
	  CallExpression: CallExpression,
	  JunkEntry: JunkEntry
	};
	module.exports = exports.default;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _errors = __webpack_require__(2);

	exports.default = {
	  serialize: function (ast) {
	    var string = '';
	    for (var id in ast) {
	      string += this.dumpEntry(ast[id]) + '\n';
	    }
	    return string;
	  },

	  serializeString: function (ast) {
	    var string = '';

	    if (typeof ast === 'object') {
	      string += this.dumpValue(ast, 0);
	    } else {
	      string += this.dumpString(ast);
	    }

	    return string;
	  },

	  dumpEntry: function (entry) {
	    return this.dumpEntity(entry);
	  },

	  dumpEntity: function (entity) {
	    var id,
	        val = null,
	        attrs = {};
	    var index = '';

	    for (var key in entity) {
	      switch (key) {
	        case '$v':
	          val = entity.$v;
	          break;
	        case '$x':
	          index = this.dumpIndex(entity.$x);
	          break;
	        case '$i':
	          id = this.dumpIdentifier(entity.$i);
	          break;
	        default:
	          attrs[key] = entity[key];
	      }
	    }

	    if (Object.keys(attrs).length === 0) {
	      return '<' + id + index + ' ' + this.dumpValue(val, 0) + '>';
	    } else {
	      return '<' + id + index + ' ' + this.dumpValue(val, 0) + '\n' + this.dumpAttributes(attrs) + '>';
	    }
	  },

	  dumpIdentifier: function (id) {
	    return id.replace(/-/g, '_');
	  },

	  dumpValue: function (value, depth) {
	    if (value === null) {
	      return '';
	    }

	    if (typeof value === 'string') {
	      return this.dumpString(value);
	    }
	    if (Array.isArray(value)) {
	      return this.dumpComplexString(value);
	    }
	    if (typeof value === 'object') {
	      if (value.o) {
	        return this.dumpValue(value.v);
	      }
	      return this.dumpHash(value, depth);
	    }
	  },

	  dumpString: function (str) {
	    if (str) {
	      return '"' + str.replace(/"/g, '\\"') + '"';
	    }
	    return '';
	  },

	  dumpComplexString: function (chunks) {
	    var str = '"';
	    for (var i = 0; i < chunks.length; i++) {
	      if (typeof chunks[i] === 'string') {
	        str += chunks[i].replace(/"/g, '\\"');
	      } else {
	        str += '{{ ' + this.dumpExpression(chunks[i]) + ' }}';
	      }
	    }
	    return str + '"';
	  },

	  dumpAttributes: function (attrs) {
	    var str = '';
	    for (var key in attrs) {
	      if (attrs[key].x) {
	        str += '  ' + key + this.dumpIndex(attrs[key].x) + ': ' + this.dumpValue(attrs[key].v, 1) + '\n';
	      } else {
	        str += '  ' + key + ': ' + this.dumpValue(attrs[key], 1) + '\n';
	      }
	    }

	    return str;
	  },

	  dumpExpression: function (exp) {
	    switch (exp.t) {
	      case 'call':
	        return this.dumpCallExpression(exp);
	      case 'prop':
	        return this.dumpPropertyExpression(exp);
	    }

	    return this.dumpPrimaryExpression(exp);
	  },

	  dumpPropertyExpression: function (exp) {
	    var idref = this.dumpExpression(exp.e);
	    var prop = undefined;

	    if (exp.c) {
	      prop = this.dumpExpression(exp.p);
	      return idref + '[' + prop + ']';
	    }

	    prop = this.dumpIdentifier(exp.p);
	    return idref + '.' + prop;
	  },

	  dumpCallExpression: function (exp) {
	    var pexp = this.dumpExpression(exp.v);

	    var attrs = this.dumpItemList(exp.a, this.dumpExpression.bind(this));
	    pexp += '(' + attrs + ')';
	    return pexp;
	  },

	  dumpPrimaryExpression: function (exp) {
	    var ret = '';

	    if (typeof exp === 'string') {
	      return exp;
	    }

	    switch (exp.t) {
	      case 'glob':
	        ret += '@';
	        ret += exp.v;
	        break;
	      case 'var':
	        ret += '$';
	        ret += exp.v;
	        break;
	      case 'id':
	        ret += this.dumpIdentifier(exp.v);
	        break;
	      case 'idOrVar':
	        ret += this.dumpIdentifier(exp.v);
	        break;
	      default:
	        throw new _errors.L10nError('Unknown primary expression');
	    }

	    return ret;
	  },

	  dumpHash: function (hash, depth) {
	    var items = [];
	    var str;

	    var defIndex;
	    if ('__default' in hash) {
	      defIndex = hash.__default;
	    }

	    for (var key in hash) {
	      var _indent = '  ';
	      if (key.charAt(0) === '_' && key.charAt(1) === '_') {
	        continue;
	      }

	      if (key === defIndex) {
	        _indent = ' *';
	      }
	      str = _indent + key + ': ' + this.dumpValue(hash[key], depth + 1);
	      items.push(str);
	    }

	    var indent = new Array(depth + 1).join('  ');
	    return '{\n' + indent + items.join(',\n' + indent) + '\n' + indent + '}';
	  },

	  dumpItemList: function (itemList, cb) {
	    return itemList.map(cb).join(', ');
	  },

	  dumpIndex: function (index) {
	    return '[' + this.dumpItemList(index, this.dumpExpression.bind(this)) + ']';
	  }
	};
	module.exports = exports.default;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports.default = function () {
	  this.serialize = function (ast) {
	    var string = '';
	    for (var id in ast) {
	      string += dumpEntry(ast[id]) + '\n';
	    }

	    return string;
	  };

	  function dumpEntry(entry) {
	    return dumpEntity(entry);
	  }

	  function dumpEntity(entity) {
	    var id,
	        val = null,
	        attrs = {};
	    var index = '';

	    for (var key in entity) {
	      switch (key) {
	        case '$v':
	          val = entity.$v;
	          break;
	        case '$x':
	          index = dumpIndex(entity.$x);
	          break;
	        case '$i':
	          id = entity.$i.replace(/-/g, '_');
	          break;
	        default:
	          attrs[key] = entity[key];
	      }
	    }

	    if (Object.keys(attrs).length === 0) {
	      return '<' + id + index + ' ' + dumpValue(val, 0) + '>';
	    } else {
	      return '<' + id + index + ' ' + dumpValue(val, 0) + '\n' + dumpAttributes(attrs) + '>';
	    }
	  }

	  function dumpIndex(index) {
	    if (index[0].v === 'plural') {
	      return '[ @cldr.plural($' + index[1] + ') ]';
	    }
	  }

	  function dumpValue(value, depth) {
	    if (value === null) {
	      return '';
	    }
	    if (typeof value === 'string') {
	      return dumpString(value);
	    }
	    if (Array.isArray(value)) {
	      return dumpComplexString(value);
	    }
	    if (typeof value === 'object') {
	      if (value.$o) {
	        return dumpValue(value.$o);
	      }
	      return dumpHash(value, depth);
	    }
	  }

	  function dumpString(str) {
	    if (str) {
	      return '"' + str.replace(/"/g, '\\"') + '"';
	    }
	    return '';
	  }

	  function dumpComplexString(chunks) {
	    var str = '"';
	    for (var i = 0; i < chunks.length; i++) {
	      if (typeof chunks[i] === 'string') {
	        str += chunks[i];
	      } else {
	        str += '{{ ' + chunks[i].v.replace(/-/g, '_') + ' }}';
	      }
	    }
	    return str + '"';
	  }

	  function dumpHash(hash, depth) {
	    var items = [];
	    var str;

	    for (var key in hash) {
	      str = '  ' + key + ': ' + dumpValue(hash[key]);
	      items.push(str);
	    }

	    var indent = depth ? '  ' : '';
	    return '{\n' + indent + items.join(',\n' + indent) + '\n' + indent + '}';
	  }

	  function dumpAttributes(attrs) {
	    var str = '';
	    for (var key in attrs) {
	      if (attrs[key].$x) {
	        str += '  ' + key + dumpIndex(attrs[key].$x) + ': ' + dumpValue(attrs[key].$v, 1) + '\n';
	      } else {
	        str += '  ' + key + ': ' + dumpValue(attrs[key], 1) + '\n';
	      }
	    }

	    return str;
	  }
	};

	module.exports = exports.default;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.createEntriesFromSource = createEntriesFromSource;
	exports.MockContext = MockContext;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _formatPropertiesParser = __webpack_require__(8);

	var _formatPropertiesParser2 = _interopRequireDefault(_formatPropertiesParser);

	var _plurals = __webpack_require__(7);

	var lang = {
	  code: 'en-US',
	  src: 'app',
	  dir: 'ltr'
	};

	exports.lang = lang;

	function createEntriesFromSource(source) {
	  return _formatPropertiesParser2.default.parse(null, source);
	}

	function MockContext(entries) {
	  this._getEntity = function (lang, id) {
	    return entries[id];
	  };

	  this._getMacro = function (lang, id) {
	    switch (id) {
	      case 'plural':
	        return (0, _plurals.getPluralRule)(lang.code);
	      default:
	        return undefined;
	    }
	  };
	}

/***/ }
/******/ ]);