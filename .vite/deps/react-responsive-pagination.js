import React, { isValidElement, memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
//#region node_modules/react-is/cjs/react-is.development.js
/** @license React v16.13.1
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		"use strict";
		var hasSymbol = typeof Symbol === "function" && Symbol.for;
		var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
		var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
		var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
		var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
		var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
		var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
		var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
		var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
		var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
		var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
		var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
		var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
		var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
		var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
		var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
		var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
		var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
		var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
		function isValidElementType(type) {
			return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
		}
		function typeOf(object) {
			if (typeof object === "object" && object !== null) {
				var $$typeof = object.$$typeof;
				switch ($$typeof) {
					case REACT_ELEMENT_TYPE:
						var type = object.type;
						switch (type) {
							case REACT_ASYNC_MODE_TYPE:
							case REACT_CONCURRENT_MODE_TYPE:
							case REACT_FRAGMENT_TYPE:
							case REACT_PROFILER_TYPE:
							case REACT_STRICT_MODE_TYPE:
							case REACT_SUSPENSE_TYPE: return type;
							default:
								var $$typeofType = type && type.$$typeof;
								switch ($$typeofType) {
									case REACT_CONTEXT_TYPE:
									case REACT_FORWARD_REF_TYPE:
									case REACT_LAZY_TYPE:
									case REACT_MEMO_TYPE:
									case REACT_PROVIDER_TYPE: return $$typeofType;
									default: return $$typeof;
								}
						}
					case REACT_PORTAL_TYPE: return $$typeof;
				}
			}
		}
		var AsyncMode = REACT_ASYNC_MODE_TYPE;
		var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
		var ContextConsumer = REACT_CONTEXT_TYPE;
		var ContextProvider = REACT_PROVIDER_TYPE;
		var Element = REACT_ELEMENT_TYPE;
		var ForwardRef = REACT_FORWARD_REF_TYPE;
		var Fragment = REACT_FRAGMENT_TYPE;
		var Lazy = REACT_LAZY_TYPE;
		var Memo = REACT_MEMO_TYPE;
		var Portal = REACT_PORTAL_TYPE;
		var Profiler = REACT_PROFILER_TYPE;
		var StrictMode = REACT_STRICT_MODE_TYPE;
		var Suspense = REACT_SUSPENSE_TYPE;
		var hasWarnedAboutDeprecatedIsAsyncMode = false;
		function isAsyncMode(object) {
			if (!hasWarnedAboutDeprecatedIsAsyncMode) {
				hasWarnedAboutDeprecatedIsAsyncMode = true;
				console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
			}
			return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
		}
		function isConcurrentMode(object) {
			return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
		}
		function isContextConsumer(object) {
			return typeOf(object) === REACT_CONTEXT_TYPE;
		}
		function isContextProvider(object) {
			return typeOf(object) === REACT_PROVIDER_TYPE;
		}
		function isElement(object) {
			return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		function isForwardRef(object) {
			return typeOf(object) === REACT_FORWARD_REF_TYPE;
		}
		function isFragment(object) {
			return typeOf(object) === REACT_FRAGMENT_TYPE;
		}
		function isLazy(object) {
			return typeOf(object) === REACT_LAZY_TYPE;
		}
		function isMemo(object) {
			return typeOf(object) === REACT_MEMO_TYPE;
		}
		function isPortal(object) {
			return typeOf(object) === REACT_PORTAL_TYPE;
		}
		function isProfiler(object) {
			return typeOf(object) === REACT_PROFILER_TYPE;
		}
		function isStrictMode(object) {
			return typeOf(object) === REACT_STRICT_MODE_TYPE;
		}
		function isSuspense(object) {
			return typeOf(object) === REACT_SUSPENSE_TYPE;
		}
		exports.AsyncMode = AsyncMode;
		exports.ConcurrentMode = ConcurrentMode;
		exports.ContextConsumer = ContextConsumer;
		exports.ContextProvider = ContextProvider;
		exports.Element = Element;
		exports.ForwardRef = ForwardRef;
		exports.Fragment = Fragment;
		exports.Lazy = Lazy;
		exports.Memo = Memo;
		exports.Portal = Portal;
		exports.Profiler = Profiler;
		exports.StrictMode = StrictMode;
		exports.Suspense = Suspense;
		exports.isAsyncMode = isAsyncMode;
		exports.isConcurrentMode = isConcurrentMode;
		exports.isContextConsumer = isContextConsumer;
		exports.isContextProvider = isContextProvider;
		exports.isElement = isElement;
		exports.isForwardRef = isForwardRef;
		exports.isFragment = isFragment;
		exports.isLazy = isLazy;
		exports.isMemo = isMemo;
		exports.isPortal = isPortal;
		exports.isProfiler = isProfiler;
		exports.isStrictMode = isStrictMode;
		exports.isSuspense = isSuspense;
		exports.isValidElementType = isValidElementType;
		exports.typeOf = typeOf;
	})();
}));
//#endregion
//#region node_modules/react-is/index.js
var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_is_development();
}));
//#endregion
//#region node_modules/object-assign/index.js
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var require_object_assign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	function toObject(val) {
		if (val === null || val === void 0) throw new TypeError("Object.assign cannot be called with null or undefined");
		return Object(val);
	}
	function shouldUseNative() {
		try {
			if (!Object.assign) return false;
			var test1 = /* @__PURE__ */ new String("abc");
			test1[5] = "de";
			if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
			var test2 = {};
			for (var i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
			if (Object.getOwnPropertyNames(test2).map(function(n) {
				return test2[n];
			}).join("") !== "0123456789") return false;
			var test3 = {};
			"abcdefghijklmnopqrst".split("").forEach(function(letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
			return true;
		} catch (err) {
			return false;
		}
	}
	module.exports = shouldUseNative() ? Object.assign : function(target, source) {
		var from;
		var to = toObject(target);
		var symbols;
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
			for (var key in from) if (hasOwnProperty.call(from, key)) to[key] = from[key];
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
			}
		}
		return to;
	};
}));
//#endregion
//#region node_modules/prop-types/lib/ReactPropTypesSecret.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_ReactPropTypesSecret = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}));
//#endregion
//#region node_modules/prop-types/lib/has.js
var require_has = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}));
//#endregion
//#region node_modules/prop-types/checkPropTypes.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_checkPropTypes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var printWarning = function() {};
	var ReactPropTypesSecret = require_ReactPropTypesSecret();
	var loggedTypeFailures = {};
	var has = require_has();
	printWarning = function(text) {
		var message = "Warning: " + text;
		if (typeof console !== "undefined") console.error(message);
		try {
			throw new Error(message);
		} catch (x) {}
	};
	/**
	* Assert that the values match with the type specs.
	* Error messages are memorized and will only be shown once.
	*
	* @param {object} typeSpecs Map of name to a ReactPropType
	* @param {object} values Runtime values that need to be type-checked
	* @param {string} location e.g. "prop", "context", "child context"
	* @param {string} componentName Name of the component for error messages.
	* @param {?Function} getStack Returns the component stack.
	* @private
	*/
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
		for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
			var error;
			try {
				if (typeof typeSpecs[typeSpecName] !== "function") {
					var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
					err.name = "Invariant Violation";
					throw err;
				}
				error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
			} catch (ex) {
				error = ex;
			}
			if (error && !(error instanceof Error)) printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
			if (error instanceof Error && !(error.message in loggedTypeFailures)) {
				loggedTypeFailures[error.message] = true;
				var stack = getStack ? getStack() : "";
				printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
			}
		}
	}
	/**
	* Resets warning cache when testing.
	*
	* @private
	*/
	checkPropTypes.resetWarningCache = function() {
		loggedTypeFailures = {};
	};
	module.exports = checkPropTypes;
}));
//#endregion
//#region node_modules/prop-types/factoryWithTypeCheckers.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_factoryWithTypeCheckers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ReactIs = require_react_is();
	var assign = require_object_assign();
	var ReactPropTypesSecret = require_ReactPropTypesSecret();
	var has = require_has();
	var checkPropTypes = require_checkPropTypes();
	var printWarning = function() {};
	printWarning = function(text) {
		var message = "Warning: " + text;
		if (typeof console !== "undefined") console.error(message);
		try {
			throw new Error(message);
		} catch (x) {}
	};
	function emptyFunctionThatReturnsNull() {
		return null;
	}
	module.exports = function(isValidElement, throwOnDirectAccess) {
		var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = "@@iterator";
		/**
		* Returns the iterator method function contained on the iterable object.
		*
		* Be sure to invoke the function with the iterable as context:
		*
		*     var iteratorFn = getIteratorFn(myIterable);
		*     if (iteratorFn) {
		*       var iterator = iteratorFn.call(myIterable);
		*       ...
		*     }
		*
		* @param {?object} maybeIterable
		* @return {?function}
		*/
		function getIteratorFn(maybeIterable) {
			var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
			if (typeof iteratorFn === "function") return iteratorFn;
		}
		/**
		* Collection of methods that allow declaration and validation of props that are
		* supplied to React components. Example usage:
		*
		*   var Props = require('ReactPropTypes');
		*   var MyArticle = React.createClass({
		*     propTypes: {
		*       // An optional string prop named "description".
		*       description: Props.string,
		*
		*       // A required enum prop named "category".
		*       category: Props.oneOf(['News','Photos']).isRequired,
		*
		*       // A prop named "dialog" that requires an instance of Dialog.
		*       dialog: Props.instanceOf(Dialog).isRequired
		*     },
		*     render: function() { ... }
		*   });
		*
		* A more formal specification of how these methods are used:
		*
		*   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
		*   decl := ReactPropTypes.{type}(.isRequired)?
		*
		* Each and every declaration produces a function with the same signature. This
		* allows the creation of custom validation functions. For example:
		*
		*  var MyLink = React.createClass({
		*    propTypes: {
		*      // An optional string or URI prop named "href".
		*      href: function(props, propName, componentName) {
		*        var propValue = props[propName];
		*        if (propValue != null && typeof propValue !== 'string' &&
		*            !(propValue instanceof URI)) {
		*          return new Error(
		*            'Expected a string or an URI for ' + propName + ' in ' +
		*            componentName
		*          );
		*        }
		*      }
		*    },
		*    render: function() {...}
		*  });
		*
		* @internal
		*/
		var ANONYMOUS = "<<anonymous>>";
		var ReactPropTypes = {
			array: createPrimitiveTypeChecker("array"),
			bigint: createPrimitiveTypeChecker("bigint"),
			bool: createPrimitiveTypeChecker("boolean"),
			func: createPrimitiveTypeChecker("function"),
			number: createPrimitiveTypeChecker("number"),
			object: createPrimitiveTypeChecker("object"),
			string: createPrimitiveTypeChecker("string"),
			symbol: createPrimitiveTypeChecker("symbol"),
			any: createAnyTypeChecker(),
			arrayOf: createArrayOfTypeChecker,
			element: createElementTypeChecker(),
			elementType: createElementTypeTypeChecker(),
			instanceOf: createInstanceTypeChecker,
			node: createNodeChecker(),
			objectOf: createObjectOfTypeChecker,
			oneOf: createEnumTypeChecker,
			oneOfType: createUnionTypeChecker,
			shape: createShapeTypeChecker,
			exact: createStrictShapeTypeChecker
		};
		/**
		* inlined Object.is polyfill to avoid requiring consumers ship their own
		* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
		*/
		function is(x, y) {
			if (x === y) return x !== 0 || 1 / x === 1 / y;
			else return x !== x && y !== y;
		}
		/**
		* We use an Error-like object for backward compatibility as people may call
		* PropTypes directly and inspect their output. However, we don't use real
		* Errors anymore. We don't inspect their stack anyway, and creating them
		* is prohibitively expensive if they are created too often, such as what
		* happens in oneOfType() for any type before the one that matched.
		*/
		function PropTypeError(message, data) {
			this.message = message;
			this.data = data && typeof data === "object" ? data : {};
			this.stack = "";
		}
		PropTypeError.prototype = Error.prototype;
		function createChainableTypeChecker(validate) {
			var manualPropTypeCallCache = {};
			var manualPropTypeWarningCount = 0;
			function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
				componentName = componentName || ANONYMOUS;
				propFullName = propFullName || propName;
				if (secret !== ReactPropTypesSecret) {
					if (throwOnDirectAccess) {
						var err = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						err.name = "Invariant Violation";
						throw err;
					} else if (typeof console !== "undefined") {
						var cacheKey = componentName + ":" + propName;
						if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
							printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
							manualPropTypeCallCache[cacheKey] = true;
							manualPropTypeWarningCount++;
						}
					}
				}
				if (props[propName] == null) {
					if (isRequired) {
						if (props[propName] === null) return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
						return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
					}
					return null;
				} else return validate(props, propName, componentName, location, propFullName);
			}
			var chainedCheckType = checkType.bind(null, false);
			chainedCheckType.isRequired = checkType.bind(null, true);
			return chainedCheckType;
		}
		function createPrimitiveTypeChecker(expectedType) {
			function validate(props, propName, componentName, location, propFullName, secret) {
				var propValue = props[propName];
				if (getPropType(propValue) !== expectedType) {
					var preciseType = getPreciseType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createAnyTypeChecker() {
			return createChainableTypeChecker(emptyFunctionThatReturnsNull);
		}
		function createArrayOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
				var propValue = props[propName];
				if (!Array.isArray(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
				}
				for (var i = 0; i < propValue.length; i++) {
					var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
					if (error instanceof Error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createElementTypeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				if (!isValidElement(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createElementTypeTypeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				if (!ReactIs.isValidElementType(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createInstanceTypeChecker(expectedClass) {
			function validate(props, propName, componentName, location, propFullName) {
				if (!(props[propName] instanceof expectedClass)) {
					var expectedClassName = expectedClass.name || ANONYMOUS;
					var actualClassName = getClassName(props[propName]);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createEnumTypeChecker(expectedValues) {
			if (!Array.isArray(expectedValues)) {
				if (arguments.length > 1) printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
				else printWarning("Invalid argument supplied to oneOf, expected an array.");
				return emptyFunctionThatReturnsNull;
			}
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				for (var i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
				var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
					if (getPreciseType(value) === "symbol") return String(value);
					return value;
				});
				return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
			}
			return createChainableTypeChecker(validate);
		}
		function createObjectOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
				for (var key in propValue) if (has(propValue, key)) {
					var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error instanceof Error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createUnionTypeChecker(arrayOfTypeCheckers) {
			if (!Array.isArray(arrayOfTypeCheckers)) {
				printWarning("Invalid argument supplied to oneOfType, expected an instance of array.");
				return emptyFunctionThatReturnsNull;
			}
			for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
				var checker = arrayOfTypeCheckers[i];
				if (typeof checker !== "function") {
					printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
					return emptyFunctionThatReturnsNull;
				}
			}
			function validate(props, propName, componentName, location, propFullName) {
				var expectedTypes = [];
				for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
					var checker = arrayOfTypeCheckers[i];
					var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
					if (checkerResult == null) return null;
					if (checkerResult.data && has(checkerResult.data, "expectedType")) expectedTypes.push(checkerResult.data.expectedType);
				}
				var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
				return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
			}
			return createChainableTypeChecker(validate);
		}
		function createNodeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				if (!isNode(props[propName])) return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function invalidValidatorError(componentName, location, propFullName, key, type) {
			return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
		}
		function createShapeTypeChecker(shapeTypes) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
				for (var key in shapeTypes) {
					var checker = shapeTypes[key];
					if (typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
					var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createStrictShapeTypeChecker(shapeTypes) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
				for (var key in assign({}, props[propName], shapeTypes)) {
					var checker = shapeTypes[key];
					if (has(shapeTypes, key) && typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
					if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
					var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function isNode(propValue) {
			switch (typeof propValue) {
				case "number":
				case "string":
				case "undefined": return true;
				case "boolean": return !propValue;
				case "object":
					if (Array.isArray(propValue)) return propValue.every(isNode);
					if (propValue === null || isValidElement(propValue)) return true;
					var iteratorFn = getIteratorFn(propValue);
					if (iteratorFn) {
						var iterator = iteratorFn.call(propValue);
						var step;
						if (iteratorFn !== propValue.entries) {
							while (!(step = iterator.next()).done) if (!isNode(step.value)) return false;
						} else while (!(step = iterator.next()).done) {
							var entry = step.value;
							if (entry) {
								if (!isNode(entry[1])) return false;
							}
						}
					} else return false;
					return true;
				default: return false;
			}
		}
		function isSymbol(propType, propValue) {
			if (propType === "symbol") return true;
			if (!propValue) return false;
			if (propValue["@@toStringTag"] === "Symbol") return true;
			if (typeof Symbol === "function" && propValue instanceof Symbol) return true;
			return false;
		}
		function getPropType(propValue) {
			var propType = typeof propValue;
			if (Array.isArray(propValue)) return "array";
			if (propValue instanceof RegExp) return "object";
			if (isSymbol(propType, propValue)) return "symbol";
			return propType;
		}
		function getPreciseType(propValue) {
			if (typeof propValue === "undefined" || propValue === null) return "" + propValue;
			var propType = getPropType(propValue);
			if (propType === "object") {
				if (propValue instanceof Date) return "date";
				else if (propValue instanceof RegExp) return "regexp";
			}
			return propType;
		}
		function getPostfixForTypeWarning(value) {
			var type = getPreciseType(value);
			switch (type) {
				case "array":
				case "object": return "an " + type;
				case "boolean":
				case "date":
				case "regexp": return "a " + type;
				default: return type;
			}
		}
		function getClassName(propValue) {
			if (!propValue.constructor || !propValue.constructor.name) return ANONYMOUS;
			return propValue.constructor.name;
		}
		ReactPropTypes.checkPropTypes = checkPropTypes;
		ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
		ReactPropTypes.PropTypes = ReactPropTypes;
		return ReactPropTypes;
	};
}));
//#endregion
//#region node_modules/react-responsive-pagination/dist/helpers/util.js
var import_prop_types = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ReactIs = require_react_is();
	module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, true);
})))(), 1);
function sanatizeInteger(maybeInteger) {
	return typeof maybeInteger === "number" && Number.isInteger(maybeInteger) ? maybeInteger : void 0;
}
function sanatizeBoolean(maybeBoolean) {
	return typeof maybeBoolean === "boolean" ? maybeBoolean : void 0;
}
function findLastIndex(array, predicate) {
	for (let k = array.length - 1; k >= 0; k--) if (predicate(array[k])) return k;
	return -1;
}
var UnsupportedValueError = class extends Error {
	constructor(value) {
		super("Unsupported value: " + value);
	}
};
//#endregion
//#region node_modules/react-responsive-pagination/dist/compositionItem.js
function createActivePage(page) {
	return {
		type: "active",
		page
	};
}
function createPage(page) {
	return {
		type: "page",
		page
	};
}
function createNavPrevious(page) {
	return {
		type: "<",
		page
	};
}
function createNavNext(page) {
	return {
		type: ">",
		page
	};
}
function createEllipsis(ellipsisPos) {
	return {
		type: `…${ellipsisPos}`,
		page: void 0
	};
}
function isNav(item) {
	return item.type === "<" || item.type === ">";
}
function isEllipsis(item) {
	return item.type === "…L" || item.type === "…R";
}
function containsEllipsis(composition) {
	return composition.some(isEllipsis);
}
function isPageWithNumber(item, page) {
	return item.type === "page" && item.page === page;
}
function getLastPage(composition) {
	return Math.max(...composition.filter((item) => item.type === "active" || item.type === "page").map((item) => item.page));
}
function compositionMatches(composition, startIndex, pattern) {
	if (startIndex < 0) return;
	return pattern.every((matchItem, patternIndex) => {
		if (!composition[startIndex + patternIndex]) return false;
		const { type, page } = composition[startIndex + patternIndex];
		if (typeof matchItem === "number") return type === "page" && page === matchItem;
		else if (matchItem === "#") return type === "page";
		else if (matchItem === "…") return type === "…L" || type === "…R";
		else if (matchItem === "*") return type === "active";
		else throw new UnsupportedValueError(matchItem);
	});
}
function compositionMatchesEnd(composition, endIndex, pattern) {
	return compositionMatches(composition, endIndex - pattern.length + 1, pattern);
}
//#endregion
//#region node_modules/react-responsive-pagination/dist/helpers/iterator.js
function* zipIterators(xs, ys) {
	while (true) {
		const xResult = xs.next();
		const yResult = ys.next();
		if (xResult.done && yResult.done) break;
		yield [xResult.value, yResult.value];
	}
}
function lastWhere(xs, predicate) {
	let lastSoFar;
	for (const x of xs) {
		if (!predicate(x)) break;
		lastSoFar = x;
	}
	return lastSoFar;
}
function iteratorNext(xs) {
	const xResult = xs.next();
	return xResult.done ? void 0 : xResult.value;
}
//#endregion
//#region node_modules/react-responsive-pagination/dist/compositions/ranges.js
function* narrowToWidePaginationItemRanges(start, end, collapsePos) {
	for (const range of narrowToWideNumberRanges(start, end, collapsePos)) yield range.map((item) => item === "…" ? createEllipsis(collapsePos) : createPage(item));
}
function* narrowToWideNumberRanges(first, last, collapsePos) {
	const fullWidth = last - first + 1;
	for (let iterationWidth = 1; iterationWidth < fullWidth; iterationWidth++) {
		const range = getCollapsedRange(first, last, iterationWidth, collapsePos);
		if (range) yield range;
	}
	yield getFullRange(first, last);
}
function getCollapsedRange(first, last, requiredWidth, collapsePos) {
	if (requiredWidth < 3) return;
	const widthOfRange = requiredWidth - 2;
	return collapsePos === "L" ? [
		first,
		"…",
		...getFullRange(last - (widthOfRange - 1), last)
	] : [
		...getFullRange(first, first + (widthOfRange - 1)),
		"…",
		last
	];
}
function getFullRange(start, end) {
	if (end < start) return [];
	return Array.from(Array(end - start + 1).keys(), (i) => i + start);
}
//#endregion
//#region node_modules/react-responsive-pagination/dist/compositions/index.js
function* narrowToWideCompositions({ current, total, narrowBehaviour, renderNav }) {
	if (total < 1) return;
	const compositions = narrowToWideCompositionsUnfiltered(Math.max(1, Math.min(current, total)), total, renderNav);
	for (const initialComposition of compositions) {
		if (narrowBehaviour) yield* narrowBehaviour(initialComposition);
		yield initialComposition;
		yield* compositions;
	}
}
function* narrowToWideCompositionsUnfiltered(current, total, renderNav) {
	const navPrevious = createNavPrevious(current > 1 ? current - 1 : void 0);
	const navNext = createNavNext(current < total ? current + 1 : void 0);
	const activePage = createActivePage(current);
	const staggeredPairs = staggeredIterationRightRangeFirst(narrowToWidePaginationItemRanges(1, current - 1, "L"), narrowToWidePaginationItemRanges(current + 1, total, "R"));
	for (const { leftRange, rightRange } of staggeredPairs) if (renderNav) yield [
		navPrevious,
		...leftRange,
		activePage,
		...rightRange,
		navNext
	];
	else yield [
		...leftRange,
		activePage,
		...rightRange
	];
}
function* staggeredIterationRightRangeFirst(leftRanges, rightRanges) {
	const zippedRanges = zipIterators(leftRanges, rightRanges);
	const initial = zippedRanges.next();
	if (initial.done) return;
	let [leftRange = [], rightRange = []] = initial.value;
	yield {
		leftRange,
		rightRange
	};
	for (const [nextLeftRange, nextRightRange] of zippedRanges) {
		if (nextRightRange) {
			rightRange = nextRightRange;
			yield {
				leftRange,
				rightRange
			};
		}
		if (nextLeftRange) {
			leftRange = nextLeftRange;
			yield {
				leftRange,
				rightRange
			};
		}
	}
}
//#endregion
//#region node_modules/react-responsive-pagination/dist/paginationItem.js
function compositionToPaginationItems(compositionItems, options) {
	const previousLabel = options?.previousLabel || "«";
	const a11yPreviousLabel = options?.ariaPreviousLabel || "Previous";
	const nextLabel = options?.nextLabel || "»";
	const a11yNextLabel = options?.ariaNextLabel || "Next";
	const ariaPageLabel = options?.ariaPageLabel;
	return compositionItems.map(({ type, page }) => {
		switch (type) {
			case "<": return {
				type: "previous",
				key: `previous${page === void 0 ? "_disabled" : ""}`,
				label: previousLabel,
				a11yLabel: previousLabel === a11yPreviousLabel ? void 0 : a11yPreviousLabel,
				gotoPage: page
			};
			case ">": return {
				type: "next",
				key: `next${page === void 0 ? "_disabled" : ""}`,
				label: nextLabel,
				a11yLabel: nextLabel === a11yNextLabel ? void 0 : a11yNextLabel,
				gotoPage: page
			};
			case "…L":
			case "…R": return {
				type: "ellipsis",
				key: `ellipsis_${type === "…L" ? "l" : "r"}`,
				label: "…",
				a11yHidden: true,
				gotoPage: void 0
			};
			default: return {
				type: "page",
				key: `${type}_${page}`,
				label: page.toString(),
				a11yLabel: ariaPageLabel?.(page, type === "active"),
				gotoPage: page,
				active: type === "active"
			};
		}
	});
}
//#endregion
//#region node_modules/react-responsive-pagination/dist/helpers/style.js
function getElementWidth(element) {
	const style = getComputedStyle(element);
	const overrideInlineMarginStart = style.getPropertyValue("--pagination-override-margin-inline-start");
	const overrideInlineMarginEnd = style.getPropertyValue("--pagination-override-margin-inline-end");
	return styleMetricToInt(overrideInlineMarginStart || style.marginLeft) + getWidth(element) + styleMetricToInt(overrideInlineMarginEnd || style.marginRight);
}
function getContentWidth(element) {
	const style = getComputedStyle(element);
	return element.getBoundingClientRect().width - styleMetricToInt(style.borderLeftWidth) - styleMetricToInt(style.paddingLeft) - styleMetricToInt(style.paddingRight) - styleMetricToInt(style.borderRightWidth);
}
function getNonContentWidth(element) {
	const style = getComputedStyle(element);
	return styleMetricToInt(style.marginLeft) + styleMetricToInt(style.borderLeftWidth) + styleMetricToInt(style.paddingLeft) + styleMetricToInt(style.paddingRight) + styleMetricToInt(style.borderRightWidth) + styleMetricToInt(style.marginRight);
}
function getColumnGap(element) {
	const columnGap = getComputedStyle(element).columnGap;
	if (columnGap === "normal" || !columnGap) return 0;
	if (columnGap.indexOf("px") === -1) {
		console.log(`react-responsive-pagination: gap not supported: ${columnGap}`);
		return 0;
	}
	return styleMetricToIntRounded(columnGap);
}
function getWidth(element) {
	return element.getBoundingClientRect().width;
}
function styleMetricToInt(styleAttribute) {
	return styleAttribute ? parseInt(styleAttribute) : 0;
}
function styleMetricToIntRounded(styleAttribute) {
	return Math.ceil(parseFloat(styleAttribute));
}
//#endregion
//#region node_modules/react-responsive-pagination/dist/helpers/react.js
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
//#endregion
//#region node_modules/react-responsive-pagination/dist/hooks/useContentWidth.js
function useContentWidth(element) {
	const [width, setWidth] = useState();
	const widthRef = useRef(void 0);
	const syncWidth = useCallback(() => {
		const newWidth = element ? getContentWidth(element) : void 0;
		if (widthRef.current !== newWidth) {
			widthRef.current = newWidth;
			setWidth(newWidth);
		}
	}, [element]);
	useIsomorphicLayoutEffect(syncWidth);
	useEffect(() => {
		if (!element) return;
		const resizeObserver = new ResizeObserver(withResizeLoopDetection(() => flushSync(syncWidth)));
		resizeObserver.observe(element);
		return () => {
			resizeObserver.disconnect();
		};
	}, [element, syncWidth]);
	return width;
}
function withResizeLoopDetection(callback) {
	return (entries, resizeObserver) => {
		const elements = entries.map((entry) => entry.target);
		const rectsBefore = elements.map((element) => element.getBoundingClientRect());
		callback();
		const rectsAfter = elements.map((element) => element.getBoundingClientRect());
		elements.filter((_, i) => !areRectSizesEqual(rectsBefore[i], rectsAfter[i])).forEach((element) => unobserveUntilNextFrame(element, resizeObserver));
	};
}
function unobserveUntilNextFrame(element, resizeObserver) {
	resizeObserver.unobserve(element);
	requestAnimationFrame(() => {
		resizeObserver.observe(element);
	});
}
function areRectSizesEqual(rect1, rect2) {
	return rect1.width === rect2.width && rect1.height === rect2.height;
}
//#endregion
//#region node_modules/react-responsive-pagination/dist/hooks/useAvailableWidth.js
function useAvailableWidth(overrideWidth) {
	const [element, setElement] = useState(null);
	const parentElement = element?.parentElement ?? void 0;
	const width = useContentWidth(overrideWidth === void 0 ? parentElement : void 0);
	return {
		width: overrideWidth ?? width,
		ref: setElement
	};
}
//#endregion
//#region node_modules/react-responsive-pagination/dist/hooks/useFoutDetector.js
function useFoutDetector(getElements, handleFout) {
	const containerRef = useRef(null);
	useIsomorphicLayoutEffect(() => {
		const elements = getElements(containerRef.current);
		if (!elements) return;
		const widthsAtRender = new Map(elements.map((element) => [element, getWidth(element)]));
		const resizeObserver = new ResizeObserver((entries) => {
			entries.map((entry) => widthsAtRender.get(entry.target) - getWidth(entry.target)).some((difference) => difference < -.5 || difference > .5) && flushSync(handleFout);
		});
		elements.forEach((element) => resizeObserver.observe(element));
		return () => resizeObserver.disconnect();
	});
	return containerRef;
}
//#endregion
//#region node_modules/react-responsive-pagination/dist/hooks/useWidthCalculator.js
function useWidthCalculator() {
	const [widthCalculator, setWidthCalculator] = useState(void 0);
	const clearCache = useCallback(() => setWidthCalculator(void 0), []);
	if (!widthCalculator) return {
		metricsRender: {
			items: itemsToMeasure,
			ref(containerElement) {
				const metrics = getMetricsFromMetricsRender(containerElement);
				metrics && setWidthCalculator(() => createWidthCalculator(metrics));
			}
		},
		clearCache
	};
	return {
		widthCalculator,
		clearCache
	};
}
function getMetricsFromMetricsRender(containerElement) {
	if (!containerElement) return;
	return [
		getNonContentWidth(containerElement),
		getColumnGap(containerElement),
		...Array.from(containerElement.children).map(getElementWidth)
	];
}
function createWidthCalculator([outerFrameWidth, columnGap, pageSingleDigitWidth, pageDoubleDigitWidth, activeSingleDigitWidth, activeDoubleDigitWidth, navPreviousEnabledWidth, navPreviousDisabledWidth, navNextEnabledWidth, navNextDisabledWidth, ellipsisWidth]) {
	const getItemWidth = ({ type, page }) => {
		switch (type) {
			case "page": return pageSingleDigitWidth + (pageDoubleDigitWidth - pageSingleDigitWidth) * (page.toString().length - 1);
			case "active": return activeSingleDigitWidth + (activeDoubleDigitWidth - activeSingleDigitWidth) * (page.toString().length - 1);
			case "<": return page !== void 0 ? navPreviousEnabledWidth : navPreviousDisabledWidth;
			case ">": return page !== void 0 ? navNextEnabledWidth : navNextDisabledWidth;
			case "…L":
			case "…R": return ellipsisWidth;
			default: return type;
		}
	};
	return (items) => outerFrameWidth + columnGap * Math.max(items.length - 1, 0) + items.reduce((acc, item) => acc + getItemWidth(item), 0);
}
var itemsToMeasure = [
	createPage(8),
	createPage(88),
	createActivePage(8),
	createActivePage(88),
	createNavPrevious(0),
	createNavPrevious(void 0),
	createNavNext(0),
	createNavNext(void 0),
	createEllipsis("L")
];
//#endregion
//#region node_modules/react-responsive-pagination/dist/hooks/useWidestComposition.js
function useWidestComposition(narrowToWideCompositionsProvider, maxWidth) {
	const { widthCalculator, metricsRender, clearCache } = useWidthCalculator();
	const foutDetectorRef = useFoutDetector(getItemsDomElements, clearCache);
	const { width = 0, ref: availableWidthRef } = useAvailableWidth(maxWidth);
	const ref = useCallback((element) => {
		foutDetectorRef.current = element;
		availableWidthRef?.(element);
	}, [foutDetectorRef, availableWidthRef]);
	const [showPlaceholder, setShowPlaceholder] = useState(true);
	if (showPlaceholder) return {
		visible: false,
		items: iteratorNext(narrowToWideCompositionsProvider()) ?? [],
		ref(containerElement) {
			setShowPlaceholder(false);
			ref(containerElement);
		},
		clearCache
	};
	if (metricsRender) return {
		visible: false,
		items: metricsRender.items,
		ref(containerElement) {
			metricsRender.ref(containerElement);
			ref(containerElement);
		},
		clearCache
	};
	return {
		visible: true,
		items: getLargestFittingCompositionWithFallback(narrowToWideCompositionsProvider, widthCalculator, width),
		ref,
		clearCache
	};
}
function getLargestFittingCompositionWithFallback(getNarrowToWideCompositions, getCompositionWidth, maxWidth) {
	const narrowToWideCompositions = getNarrowToWideCompositions();
	const firstComposition = iteratorNext(narrowToWideCompositions) ?? [];
	const doesCompositionFit = (composition) => getCompositionWidth(composition) < maxWidth;
	return lastWhere(narrowToWideCompositions, doesCompositionFit) ?? firstComposition;
}
function getItemsDomElements(viewDomElement) {
	return viewDomElement && Array.from(viewDomElement.children);
}
//#endregion
//#region node_modules/react-responsive-pagination/dist/hooks/usePaginationItems.js
function usePaginationItems(inputCurrent, inputTotal, maxWidth, options) {
	const narrowToWideCompositionsProvider = () => narrowToWideCompositions({
		current: sanatizeInteger(inputCurrent) ?? 0,
		total: sanatizeInteger(inputTotal) ?? 0,
		narrowBehaviour: options?.narrowBehaviour,
		renderNav: sanatizeBoolean(options?.renderNav) ?? true
	});
	const { visible, items: compositionItems, ref, clearCache } = useWidestComposition(narrowToWideCompositionsProvider, maxWidth);
	useEffect(() => {
		return () => clearCache();
	}, [
		clearCache,
		labelCacheKey(options?.previousLabel),
		labelCacheKey(options?.nextLabel)
	]);
	return {
		visible,
		items: compositionToPaginationItems(compositionItems, options),
		ref,
		clearCache
	};
}
function labelCacheKey(item) {
	if (isValidElement(item)) {
		showReactElementLabelWarning();
		switch (typeof item.type) {
			case "string": return `element-str-${item.type}`;
			case "function": return `element-fn-${item.type.name}`;
			default: return "element";
		}
	} else if (Array.isArray(item)) {
		showReactElementLabelWarning();
		return "element-array";
	} else return item;
}
var reactElementLabelWarningShown = false;
function showReactElementLabelWarning() {
	if (reactElementLabelWarningShown) return;
	console.log("react-responsive-pagination: using React elements for labels is experimental, please see: https://react-responsive-pagination.elantha.com/faq#using-react-components-for-labels");
	reactElementLabelWarningShown = true;
}
//#endregion
//#region node_modules/react-responsive-pagination/dist/helpers/dom.js
function preventDefault(handler) {
	return (e) => {
		e.preventDefault();
		handler();
	};
}
//#endregion
//#region node_modules/react-responsive-pagination/dist/labelBehaviour.js
/**
* @public
*/
function defaultLabelBehaviour({ a11yLabel, label }) {
	return !a11yLabel ? label : React.createElement("span", { "aria-hidden": "true" }, label);
}
/**
* @public
*/
function srOnlySpanLabel({ a11yActiveLabel = "(current)", srOnlyClassName = "sr-only" } = {}) {
	return (item) => {
		const srOnlyLabel = item.gotoPage !== void 0 && item.active && a11yActiveLabel ? ` ${a11yActiveLabel}` : item.a11yLabel;
		return React.createElement(React.Fragment, null, !item.a11yLabel ? item.label : React.createElement("span", { "aria-hidden": "true" }, item.label), srOnlyLabel && React.createElement("span", { className: srOnlyClassName }, srOnlyLabel));
	};
}
//#endregion
//#region node_modules/react-responsive-pagination/dist/debug.js
var renderCount = 0;
function incRenderCount() {
	renderCount++;
}
//#endregion
//#region node_modules/react-responsive-pagination/dist/narrowBehaviour.js
/**
* @public
*/
function* dropEllipsis(initialComposition, metaData) {
	const indicesToDrop = [];
	if (metaData?.appliedBehaviours?.includes(dropFirstAndLast)) {
		const firstPageIndex = initialComposition.findIndex((item) => isPageWithNumber(item, 1));
		if (compositionMatches(initialComposition, firstPageIndex, [1, 2])) indicesToDrop.push(firstPageIndex);
		/** last page */
		const n = getLastPage(initialComposition);
		const lastPageIndex = findLastIndex(initialComposition, (item) => isPageWithNumber(item, n));
		if (compositionMatchesEnd(initialComposition, lastPageIndex, [n - 1, n])) indicesToDrop.push(lastPageIndex);
	}
	if (containsEllipsis(initialComposition) || indicesToDrop.length > 0) yield initialComposition.filter((item, index) => !isEllipsis(item) && !indicesToDrop.includes(index));
}
/**
* @public
*/
function* dropNav(initialComposition) {
	yield initialComposition.filter((item) => !isNav(item));
}
/**
* @public
*/
function* dropFirstAndLast(initialComposition, metaData) {
	const ellipsisDropped = metaData?.appliedBehaviours?.includes(dropEllipsis);
	const composition = initialComposition.slice();
	/**
	* normal
	* 1*                 1*
	* 1, 2*              1, 2*
	* 1, 2, 3*           1, 2, 3*
	* 1, 2, 3, 4*        …, 3, 4*
	* 1, …, p, p+1*      …, p, p+1* (p>=4)
	*
	* after dropEllipsis
	* 1*                 1*
	* 1, 2*              1, 2*
	* 1, 2, 3*           2, 3*
	* 1, 2, 3, 4*        3, 4*
	* 1, p, p+1*         p, p+1  (p>=4)
	*/
	const firstPageIndex = composition.findIndex((item) => isPageWithNumber(item, 1));
	if (ellipsisDropped) {
		if (compositionMatches(composition, firstPageIndex, [
			1,
			2,
			3,
			"*"
		])) composition.splice(firstPageIndex, 2);
		else if (compositionMatches(composition, firstPageIndex, [
			1,
			"#",
			"*"
		])) composition.splice(firstPageIndex, 1);
	} else if (compositionMatches(composition, firstPageIndex, [
		1,
		2,
		3,
		"*"
	])) composition.splice(firstPageIndex, 2, createEllipsis("L"));
	else if (compositionMatches(composition, firstPageIndex, [
		1,
		"…",
		"#"
	])) composition.splice(firstPageIndex, 1);
	/** last page */
	const n = getLastPage(composition);
	const lastPageIndex = findLastIndex(composition, (item) => isPageWithNumber(item, n));
	if (ellipsisDropped) {
		if (compositionMatchesEnd(composition, lastPageIndex, [
			"*",
			n - 2,
			n - 1,
			n
		])) composition.splice(lastPageIndex - 1, 2);
		else if (compositionMatchesEnd(composition, lastPageIndex, [
			"*",
			"#",
			n
		])) composition.splice(lastPageIndex, 1);
	} else if (compositionMatchesEnd(composition, lastPageIndex, [
		"*",
		n - 2,
		n - 1,
		n
	])) composition.splice(lastPageIndex - 1, 2, createEllipsis("R"));
	else if (compositionMatchesEnd(composition, lastPageIndex, [
		"#",
		"…",
		n
	])) composition.splice(lastPageIndex, 1);
	if (initialComposition.length !== composition.length) yield composition;
}
/**
* @public
*/
function* dropEllipsisThenNav(initialComposition) {
	if (containsEllipsis(initialComposition)) {
		yield initialComposition.filter((item) => !isEllipsis(item) && !isNav(item));
		yield initialComposition.filter((item) => !isEllipsis(item));
	} else yield initialComposition.filter((item) => !isNav(item));
}
/**
* @public
*/
function* dropNavThenEllipsis(initialComposition) {
	if (containsEllipsis(initialComposition)) yield initialComposition.filter((item) => !isEllipsis(item) && !isNav(item));
	yield initialComposition.filter((item) => !isNav(item));
}
/**
* When combining NarrowBehaviours the behaviours will be applied in order:
* the first behaviour will be used before subsequent behaviours
* Compositions yielded from combineBehaviours will initially have
* all behaviours applied in their narrowest form and then work through
* each behaviour in turn (from last to first)
*/
/**
* Combine two or more narrowBehaviours
* @public
*/
var combine = (...behaviours) => (initialComposition) => combineRecursive(behaviours, [], initialComposition);
function* combineRecursive(behaviours, previousBehaviours, initialComposition) {
	if (behaviours.length === 0) return;
	const [firstBehaviour, ...remainingBehaviours] = behaviours;
	const firstBehaviourCompositions = firstBehaviour(initialComposition, { appliedBehaviours: previousBehaviours });
	const firstResult = firstBehaviourCompositions.next();
	if (firstResult.done) yield* combineRecursive(remainingBehaviours, [...previousBehaviours, firstBehaviour], initialComposition);
	else {
		const firstComposition = firstResult.value;
		yield* combineRecursive(remainingBehaviours, [...previousBehaviours, firstBehaviour], firstComposition);
		yield firstComposition;
		yield* firstBehaviourCompositions;
	}
}
//#endregion
//#region node_modules/react-responsive-pagination/dist/presets.js
/**
* @public
*/
var v1_bootstrap4PaginationPreset = {
	ariaCurrentAttr: false,
	labelBehaviour: /* @__PURE__ */ srOnlySpanLabel()
};
/**
* legacy - may be removed
* @public
*/
var bootstrap4PaginationPreset = {};
/**
* legacy - may be removed
* @public
*/
var bootstrap5PaginationPreset = {};
//#endregion
//#region node_modules/react-responsive-pagination/dist/index.js
/**
* @public
*/
var ResponsivePaginationComponent = memo(ResponsivePagination);
function ResponsivePagination(props) {
	incRenderCount();
	checkLegacyProps(props);
	const { current, total, onPageChange: handlePageChange, maxWidth, narrowBehaviour, className, containerClassName, extraClassName = "justify-content-center", pageItemClassName = "page-item", pageLinkClassName = "page-link", activeItemClassName = "active", inactiveItemClassName = "", disabledItemClassName = "disabled", navClassName, previousClassName, nextClassName, classMerge = defaultClassMerge, previousLabel, nextLabel, ariaPreviousLabel, ariaNextLabel, ariaPageLabel, renderNav = true, ariaCurrentAttr = true, linkHref = "hash", labelBehaviour: getLabel = defaultLabelBehaviour } = props;
	const { visible, items, ref, clearCache } = usePaginationItems(current, total, maxWidth, {
		narrowBehaviour,
		previousLabel,
		nextLabel,
		ariaPreviousLabel,
		ariaNextLabel,
		ariaPageLabel,
		renderNav
	});
	useEffect(() => {
		return () => clearCache();
	}, [
		clearCache,
		className,
		containerClassName,
		pageItemClassName,
		pageLinkClassName,
		activeItemClassName,
		inactiveItemClassName,
		disabledItemClassName,
		navClassName,
		previousClassName,
		nextClassName,
		classMerge
	]);
	if (items.length === 0) return null;
	function getContainerClassName() {
		if (className !== void 0) return className;
		else if (containerClassName !== void 0) return containerClassName;
		else if (extraClassName) return `pagination ${extraClassName}`;
		else return "pagination";
	}
	return React.createElement("ul", {
		className: getContainerClassName(),
		ref,
		...!visible && { style: { visibility: "hidden" } }
	}, items.map((item) => item.gotoPage !== void 0 ? React.createElement("li", {
		key: item.key,
		className: classNames(classMerge, [
			pageItemClassName,
			item.active ? activeItemClassName : inactiveItemClassName,
			item.type === "next" && (nextClassName ?? navClassName),
			item.type === "previous" && (previousClassName ?? navClassName)
		]),
		"aria-current": item.active && ariaCurrentAttr ? "page" : void 0
	}, React.createElement("a", {
		className: pageLinkClassName,
		href: getHref(linkHref, item.gotoPage),
		onClick: preventDefault(() => handlePageChange(item.gotoPage)),
		"aria-label": item.a11yLabel
	}, getLabel(item))) : React.createElement("li", {
		key: item.key,
		className: classNames(classMerge, [
			pageItemClassName,
			disabledItemClassName,
			item.type === "next" && (nextClassName ?? navClassName),
			item.type === "previous" && (previousClassName ?? navClassName)
		]),
		"aria-hidden": item.a11yHidden
	}, React.createElement("span", {
		className: pageLinkClassName,
		"aria-label": item.a11yLabel
	}, getLabel(item)))));
}
function classNames(classMerge, names) {
	return classMerge(names.filter((name) => Boolean(name)));
}
function getHref(linkHref, page) {
	if (typeof linkHref === "function") return linkHref(page);
	else if (linkHref === "hash") return "#";
	else return;
}
var defaultClassMerge = (classNames) => classNames.join(" ");
ResponsivePagination.propTypes = {
	current: import_prop_types.default.number.isRequired,
	total: import_prop_types.default.number.isRequired,
	onPageChange: import_prop_types.default.func.isRequired,
	maxWidth: import_prop_types.default.number,
	narrowBehaviour: import_prop_types.default.func,
	className: import_prop_types.default.string,
	containerClassName: import_prop_types.default.string,
	extraClassName: import_prop_types.default.string,
	pageItemClassName: import_prop_types.default.string,
	pageLinkClassName: import_prop_types.default.string,
	activeItemClassName: import_prop_types.default.string,
	inactiveItemClassName: import_prop_types.default.string,
	disabledItemClassName: import_prop_types.default.string,
	disabledLinkClassName: import_prop_types.default.string,
	navClassName: import_prop_types.default.string,
	previousClassName: import_prop_types.default.string,
	nextClassName: import_prop_types.default.string,
	classMerge: import_prop_types.default.func,
	previousLabel: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.element]),
	nextLabel: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.element]),
	ariaPreviousLabel: import_prop_types.default.string,
	ariaNextLabel: import_prop_types.default.string,
	ariaPageLabel: import_prop_types.default.func,
	renderNav: import_prop_types.default.bool,
	ariaCurrentAttr: import_prop_types.default.bool,
	linkHref: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.oneOf(["hash", "omit"])]),
	labelBehaviour: import_prop_types.default.func
};
var legacyUsageWarnings = [];
function checkLegacyProps(props) {
	for (const legacyProp of [
		"srOnlyClassName",
		"a11yActiveLabel",
		"narrowStrategy"
	]) if (props[legacyProp] !== void 0 && !legacyUsageWarnings.includes(legacyProp)) {
		console.warn(`react-responsive-pagination: '${legacyProp}' prop no longer supported, please see migration guide: https://react-responsive-pagination.elantha.com/migration`);
		legacyUsageWarnings.push(legacyProp);
	}
}
//#endregion
export { bootstrap4PaginationPreset, bootstrap5PaginationPreset, combine, ResponsivePaginationComponent as default, defaultLabelBehaviour, dropEllipsis, dropEllipsisThenNav, dropFirstAndLast, dropNav, dropNavThenEllipsis, srOnlySpanLabel, v1_bootstrap4PaginationPreset };

//# sourceMappingURL=react-responsive-pagination.js.map