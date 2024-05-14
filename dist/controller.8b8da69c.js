(function () {
  function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
  }
  var $parcel$global = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {}; // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\@parcel\runtime-js\lib\bundle-manifest.js
  var $bd72ee1865b930c1fed8ae47f35e91$var$mapping = {};
  function $bd72ee1865b930c1fed8ae47f35e91$var$register(pairs) {
    var keys = Object.keys(pairs);
    for (var i = 0; i < keys.length; i++) {
      $bd72ee1865b930c1fed8ae47f35e91$var$mapping[keys[i]] = pairs[keys[i]];
    }
  }
  function $bd72ee1865b930c1fed8ae47f35e91$var$resolve(id) {
    var resolved = $bd72ee1865b930c1fed8ae47f35e91$var$mapping[id];
    if (resolved == null) {
      throw new Error('Could not resolve bundle with id ' + id);
    }
    return resolved;
  }
  var $bd72ee1865b930c1fed8ae47f35e91$export$register = $bd72ee1865b930c1fed8ae47f35e91$var$register;
  var $bd72ee1865b930c1fed8ae47f35e91$export$resolve = $bd72ee1865b930c1fed8ae47f35e91$var$resolve;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\@parcel\runtime-js\lib\JSRuntime.js
  $bd72ee1865b930c1fed8ae47f35e91$export$register(JSON.parse("{\"9386246f13be099a\":\"controller.8b8da69c.js\",\"91e1509eb3eba0bf\":\"icons.c781f215.svg\"}"));
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\export.js
  var $da20139527b9570444c7d5c06ae45fa2$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\global.js
  var $cbab2f3c4d2181527b69a2bf91b9e1fd$exports = {};
  var $cbab2f3c4d2181527b69a2bf91b9e1fd$var$check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  $cbab2f3c4d2181527b69a2bf91b9e1fd$exports =
  // eslint-disable-next-line no-undef
  $cbab2f3c4d2181527b69a2bf91b9e1fd$var$check(typeof globalThis == 'object' && globalThis) || $cbab2f3c4d2181527b69a2bf91b9e1fd$var$check(typeof window == 'object' && window) || $cbab2f3c4d2181527b69a2bf91b9e1fd$var$check(typeof self == 'object' && self) || $cbab2f3c4d2181527b69a2bf91b9e1fd$var$check(typeof $parcel$global == 'object' && $parcel$global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')(); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-get-own-property-descriptor.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\descriptors.js
  var $a7c68cb8fd81a83c8a53a82a3f122f3e$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\fails.js
  var $efaceca3db1203b03f84edf56feaf8f$exports = {};
  $efaceca3db1203b03f84edf56feaf8f$exports = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };
  // Thank's IE8 for his funny defineProperty
  $a7c68cb8fd81a83c8a53a82a3f122f3e$exports = !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-property-is-enumerable.js
  var $fd3aded0ab2c815d5a451b8b3c59$var$nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var $fd3aded0ab2c815d5a451b8b3c59$var$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var $fd3aded0ab2c815d5a451b8b3c59$var$NASHORN_BUG = $fd3aded0ab2c815d5a451b8b3c59$var$getOwnPropertyDescriptor && !$fd3aded0ab2c815d5a451b8b3c59$var$nativePropertyIsEnumerable.call({
    1: 2
  }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
  var $fd3aded0ab2c815d5a451b8b3c59$export$f = $fd3aded0ab2c815d5a451b8b3c59$var$NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = $fd3aded0ab2c815d5a451b8b3c59$var$getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $fd3aded0ab2c815d5a451b8b3c59$var$nativePropertyIsEnumerable;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\create-property-descriptor.js
  var $c83efd2171483e9988d3cc48fb8a$exports = {};
  $c83efd2171483e9988d3cc48fb8a$exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\to-indexed-object.js
  var $d3edb8b5b29142657e301b5e7cecac5$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\indexed-object.js
  var $c8c30ff7b4b337039de62128343f6647$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\classof-raw.js
  var $b499f0f4b947123008cbd2ef011785$exports = {};
  var $b499f0f4b947123008cbd2ef011785$var$toString = {}.toString;
  $b499f0f4b947123008cbd2ef011785$exports = function (it) {
    return $b499f0f4b947123008cbd2ef011785$var$toString.call(it).slice(8, -1);
  };
  var $c8c30ff7b4b337039de62128343f6647$var$split = ''.split;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  $c8c30ff7b4b337039de62128343f6647$exports = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return $b499f0f4b947123008cbd2ef011785$exports(it) == 'String' ? $c8c30ff7b4b337039de62128343f6647$var$split.call(it, '') : Object(it);
  } : Object; // toObject with fallback for non-array-like ES3 strings
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\require-object-coercible.js
  var $b71c0730843361a14fc0393fd741336c$exports = {};
  // `RequireObjectCoercible` abstract operation
  // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
  $b71c0730843361a14fc0393fd741336c$exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };
  $d3edb8b5b29142657e301b5e7cecac5$exports = function (it) {
    return $c8c30ff7b4b337039de62128343f6647$exports($b71c0730843361a14fc0393fd741336c$exports(it));
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\to-primitive.js
  var $ec9b43a21fce0d1894877586c488a33$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\is-object.js
  var $ce5aa73a2f4131a4f5ee32067e6336$exports = {};
  $ce5aa73a2f4131a4f5ee32067e6336$exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  // `ToPrimitive` abstract operation
  // https://tc39.github.io/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  $ec9b43a21fce0d1894877586c488a33$exports = function (input, PREFERRED_STRING) {
    if (!$ce5aa73a2f4131a4f5ee32067e6336$exports(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !$ce5aa73a2f4131a4f5ee32067e6336$exports(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !$ce5aa73a2f4131a4f5ee32067e6336$exports(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !$ce5aa73a2f4131a4f5ee32067e6336$exports(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\has.js
  var $fb61ad628fb3464a4b59a2997dacf0$exports = {};
  var $fb61ad628fb3464a4b59a2997dacf0$var$hasOwnProperty = {}.hasOwnProperty;
  $fb61ad628fb3464a4b59a2997dacf0$exports = function (it, key) {
    return $fb61ad628fb3464a4b59a2997dacf0$var$hasOwnProperty.call(it, key);
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\ie8-dom-define.js
  var $fe72d382108f2b4ac8f1c9ec95c5d$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\document-create-element.js
  var $f2fb510662c1b3df76419e7197b0ca0b$exports = {};
  var $f2fb510662c1b3df76419e7197b0ca0b$var$document = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.document;
  // typeof document.createElement is 'object' in old IE
  var $f2fb510662c1b3df76419e7197b0ca0b$var$EXISTS = $ce5aa73a2f4131a4f5ee32067e6336$exports($f2fb510662c1b3df76419e7197b0ca0b$var$document) && $ce5aa73a2f4131a4f5ee32067e6336$exports($f2fb510662c1b3df76419e7197b0ca0b$var$document.createElement);
  $f2fb510662c1b3df76419e7197b0ca0b$exports = function (it) {
    return $f2fb510662c1b3df76419e7197b0ca0b$var$EXISTS ? $f2fb510662c1b3df76419e7197b0ca0b$var$document.createElement(it) : {};
  };
  // Thank's IE8 for his funny defineProperty
  $fe72d382108f2b4ac8f1c9ec95c5d$exports = !$a7c68cb8fd81a83c8a53a82a3f122f3e$exports && !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    return Object.defineProperty($f2fb510662c1b3df76419e7197b0ca0b$exports('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });
  var $ef3dd30401c6b3b1a77e9290273caca$var$nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
  var $ef3dd30401c6b3b1a77e9290273caca$export$f = $a7c68cb8fd81a83c8a53a82a3f122f3e$exports ? $ef3dd30401c6b3b1a77e9290273caca$var$nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = $d3edb8b5b29142657e301b5e7cecac5$exports(O);
    P = $ec9b43a21fce0d1894877586c488a33$exports(P, true);
    if ($fe72d382108f2b4ac8f1c9ec95c5d$exports) try {
      return $ef3dd30401c6b3b1a77e9290273caca$var$nativeGetOwnPropertyDescriptor(O, P);
    } catch (error) {/* empty */}
    if ($fb61ad628fb3464a4b59a2997dacf0$exports(O, P)) return $c83efd2171483e9988d3cc48fb8a$exports(!$fd3aded0ab2c815d5a451b8b3c59$export$f.call(O, P), O[P]);
  };
  var $da20139527b9570444c7d5c06ae45fa2$var$getOwnPropertyDescriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\create-non-enumerable-property.js
  var $cccb6b555b82a0b86f5e6c39c4b7c7b$exports = {}; // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-define-property.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\an-object.js
  var $ca96f020fbb32dd48b2236cb9c$exports = {};
  $ca96f020fbb32dd48b2236cb9c$exports = function (it) {
    if (!$ce5aa73a2f4131a4f5ee32067e6336$exports(it)) {
      throw TypeError(String(it) + ' is not an object');
    }
    return it;
  };
  var $e0cd0bce67aea07baa689ea10527$var$nativeDefineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  var $e0cd0bce67aea07baa689ea10527$export$f = $a7c68cb8fd81a83c8a53a82a3f122f3e$exports ? $e0cd0bce67aea07baa689ea10527$var$nativeDefineProperty : function defineProperty(O, P, Attributes) {
    $ca96f020fbb32dd48b2236cb9c$exports(O);
    P = $ec9b43a21fce0d1894877586c488a33$exports(P, true);
    $ca96f020fbb32dd48b2236cb9c$exports(Attributes);
    if ($fe72d382108f2b4ac8f1c9ec95c5d$exports) try {
      return $e0cd0bce67aea07baa689ea10527$var$nativeDefineProperty(O, P, Attributes);
    } catch (error) {/* empty */}
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  $cccb6b555b82a0b86f5e6c39c4b7c7b$exports = $a7c68cb8fd81a83c8a53a82a3f122f3e$exports ? function (object, key, value) {
    return $e0cd0bce67aea07baa689ea10527$export$f(object, key, $c83efd2171483e9988d3cc48fb8a$exports(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\redefine.js
  var $e3c8a1361cc0783bc835b9e100a3660b$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\set-global.js
  var $edad60d7e38b8ccde89568196479ca9$exports = {};
  $edad60d7e38b8ccde89568196479ca9$exports = function (key, value) {
    try {
      $cccb6b555b82a0b86f5e6c39c4b7c7b$exports($cbab2f3c4d2181527b69a2bf91b9e1fd$exports, key, value);
    } catch (error) {
      $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[key] = value;
    }
    return value;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\inspect-source.js
  var $ab5801d5efb2f3515da23ff838eb1e2c$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\shared-store.js
  var $d3a912d770f84b0034d3db827eba3f$exports = {};
  var $d3a912d770f84b0034d3db827eba3f$var$SHARED = '__core-js_shared__';
  var $d3a912d770f84b0034d3db827eba3f$var$store = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[$d3a912d770f84b0034d3db827eba3f$var$SHARED] || $edad60d7e38b8ccde89568196479ca9$exports($d3a912d770f84b0034d3db827eba3f$var$SHARED, {});
  $d3a912d770f84b0034d3db827eba3f$exports = $d3a912d770f84b0034d3db827eba3f$var$store;
  var $ab5801d5efb2f3515da23ff838eb1e2c$var$functionToString = Function.toString;

  // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
  if (typeof $d3a912d770f84b0034d3db827eba3f$exports.inspectSource != 'function') {
    $d3a912d770f84b0034d3db827eba3f$exports.inspectSource = function (it) {
      return $ab5801d5efb2f3515da23ff838eb1e2c$var$functionToString.call(it);
    };
  }
  $ab5801d5efb2f3515da23ff838eb1e2c$exports = $d3a912d770f84b0034d3db827eba3f$exports.inspectSource;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\internal-state.js
  var $c9333b419e2d291fa24a6e5282e596$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\native-weak-map.js
  var $edbe168fc4018e8823ff4f92a8f7563d$exports = {};
  var $edbe168fc4018e8823ff4f92a8f7563d$var$WeakMap = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.WeakMap;
  $edbe168fc4018e8823ff4f92a8f7563d$exports = typeof $edbe168fc4018e8823ff4f92a8f7563d$var$WeakMap === 'function' && /native code/.test($ab5801d5efb2f3515da23ff838eb1e2c$exports($edbe168fc4018e8823ff4f92a8f7563d$var$WeakMap));
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\shared-key.js
  var $bbc62ededb0e13a5c149ad01cf8$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\shared.js
  var $b759a4ff5ce4e4cc3a6e49bafb2e7c9$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\is-pure.js
  var $f57ba62cba687e9257bf807714b47$exports = {};
  $f57ba62cba687e9257bf807714b47$exports = false;
  ($b759a4ff5ce4e4cc3a6e49bafb2e7c9$exports = function (key, value) {
    return $d3a912d770f84b0034d3db827eba3f$exports[key] || ($d3a912d770f84b0034d3db827eba3f$exports[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.6.5',
    mode: $f57ba62cba687e9257bf807714b47$exports ? 'pure' : 'global',
    copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
  });
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\uid.js
  var $ebaf71c27182b704b57713b$exports = {};
  var $ebaf71c27182b704b57713b$var$id = 0;
  var $ebaf71c27182b704b57713b$var$postfix = Math.random();
  $ebaf71c27182b704b57713b$exports = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++$ebaf71c27182b704b57713b$var$id + $ebaf71c27182b704b57713b$var$postfix).toString(36);
  };
  var $bbc62ededb0e13a5c149ad01cf8$var$keys = $b759a4ff5ce4e4cc3a6e49bafb2e7c9$exports('keys');
  $bbc62ededb0e13a5c149ad01cf8$exports = function (key) {
    return $bbc62ededb0e13a5c149ad01cf8$var$keys[key] || ($bbc62ededb0e13a5c149ad01cf8$var$keys[key] = $ebaf71c27182b704b57713b$exports(key));
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\hidden-keys.js
  var $e03b142da07ab54980946dc60260821a$exports = {};
  $e03b142da07ab54980946dc60260821a$exports = {};
  var $c9333b419e2d291fa24a6e5282e596$var$WeakMap = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.WeakMap;
  var $c9333b419e2d291fa24a6e5282e596$var$set, $c9333b419e2d291fa24a6e5282e596$var$get, $c9333b419e2d291fa24a6e5282e596$var$has;
  var $c9333b419e2d291fa24a6e5282e596$var$enforce = function (it) {
    return $c9333b419e2d291fa24a6e5282e596$var$has(it) ? $c9333b419e2d291fa24a6e5282e596$var$get(it) : $c9333b419e2d291fa24a6e5282e596$var$set(it, {});
  };
  var $c9333b419e2d291fa24a6e5282e596$var$getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!$ce5aa73a2f4131a4f5ee32067e6336$exports(it) || (state = $c9333b419e2d291fa24a6e5282e596$var$get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      }
      return state;
    };
  };
  if ($edbe168fc4018e8823ff4f92a8f7563d$exports) {
    var $c9333b419e2d291fa24a6e5282e596$var$store = new $c9333b419e2d291fa24a6e5282e596$var$WeakMap();
    var $c9333b419e2d291fa24a6e5282e596$var$wmget = $c9333b419e2d291fa24a6e5282e596$var$store.get;
    var $c9333b419e2d291fa24a6e5282e596$var$wmhas = $c9333b419e2d291fa24a6e5282e596$var$store.has;
    var $c9333b419e2d291fa24a6e5282e596$var$wmset = $c9333b419e2d291fa24a6e5282e596$var$store.set;
    $c9333b419e2d291fa24a6e5282e596$var$set = function (it, metadata) {
      $c9333b419e2d291fa24a6e5282e596$var$wmset.call($c9333b419e2d291fa24a6e5282e596$var$store, it, metadata);
      return metadata;
    };
    $c9333b419e2d291fa24a6e5282e596$var$get = function (it) {
      return $c9333b419e2d291fa24a6e5282e596$var$wmget.call($c9333b419e2d291fa24a6e5282e596$var$store, it) || {};
    };
    $c9333b419e2d291fa24a6e5282e596$var$has = function (it) {
      return $c9333b419e2d291fa24a6e5282e596$var$wmhas.call($c9333b419e2d291fa24a6e5282e596$var$store, it);
    };
  } else {
    var $c9333b419e2d291fa24a6e5282e596$var$STATE = $bbc62ededb0e13a5c149ad01cf8$exports('state');
    $e03b142da07ab54980946dc60260821a$exports[$c9333b419e2d291fa24a6e5282e596$var$STATE] = true;
    $c9333b419e2d291fa24a6e5282e596$var$set = function (it, metadata) {
      $cccb6b555b82a0b86f5e6c39c4b7c7b$exports(it, $c9333b419e2d291fa24a6e5282e596$var$STATE, metadata);
      return metadata;
    };
    $c9333b419e2d291fa24a6e5282e596$var$get = function (it) {
      return $fb61ad628fb3464a4b59a2997dacf0$exports(it, $c9333b419e2d291fa24a6e5282e596$var$STATE) ? it[$c9333b419e2d291fa24a6e5282e596$var$STATE] : {};
    };
    $c9333b419e2d291fa24a6e5282e596$var$has = function (it) {
      return $fb61ad628fb3464a4b59a2997dacf0$exports(it, $c9333b419e2d291fa24a6e5282e596$var$STATE);
    };
  }
  $c9333b419e2d291fa24a6e5282e596$exports = {
    set: $c9333b419e2d291fa24a6e5282e596$var$set,
    get: $c9333b419e2d291fa24a6e5282e596$var$get,
    has: $c9333b419e2d291fa24a6e5282e596$var$has,
    enforce: $c9333b419e2d291fa24a6e5282e596$var$enforce,
    getterFor: $c9333b419e2d291fa24a6e5282e596$var$getterFor
  };
  var $e3c8a1361cc0783bc835b9e100a3660b$var$getInternalState = $c9333b419e2d291fa24a6e5282e596$exports.get;
  var $e3c8a1361cc0783bc835b9e100a3660b$var$enforceInternalState = $c9333b419e2d291fa24a6e5282e596$exports.enforce;
  var $e3c8a1361cc0783bc835b9e100a3660b$var$TEMPLATE = String(String).split('String');
  ($e3c8a1361cc0783bc835b9e100a3660b$exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    if (typeof value == 'function') {
      if (typeof key == 'string' && !$fb61ad628fb3464a4b59a2997dacf0$exports(value, 'name')) $cccb6b555b82a0b86f5e6c39c4b7c7b$exports(value, 'name', key);
      $e3c8a1361cc0783bc835b9e100a3660b$var$enforceInternalState(value).source = $e3c8a1361cc0783bc835b9e100a3660b$var$TEMPLATE.join(typeof key == 'string' ? key : '');
    }
    if (O === $cbab2f3c4d2181527b69a2bf91b9e1fd$exports) {
      if (simple) O[key] = value;else $edad60d7e38b8ccde89568196479ca9$exports(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;else $cccb6b555b82a0b86f5e6c39c4b7c7b$exports(O, key, value);
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && $e3c8a1361cc0783bc835b9e100a3660b$var$getInternalState(this).source || $ab5801d5efb2f3515da23ff838eb1e2c$exports(this);
  });
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\copy-constructor-properties.js
  var $fc21109f6c12d5dfdca0457804b6adf9$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\own-keys.js
  var $d0576472b878af2a7f34df2b14f0d5$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\get-built-in.js
  var $aeb1e6b80ef7a537d3287f35b9b88$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\path.js
  var $e72ecaf72253d486638ab4b53a7bd$exports = {};
  $e72ecaf72253d486638ab4b53a7bd$exports = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports;
  var $aeb1e6b80ef7a537d3287f35b9b88$var$aFunction = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };
  $aeb1e6b80ef7a537d3287f35b9b88$exports = function (namespace, method) {
    return arguments.length < 2 ? $aeb1e6b80ef7a537d3287f35b9b88$var$aFunction($e72ecaf72253d486638ab4b53a7bd$exports[namespace]) || $aeb1e6b80ef7a537d3287f35b9b88$var$aFunction($cbab2f3c4d2181527b69a2bf91b9e1fd$exports[namespace]) : $e72ecaf72253d486638ab4b53a7bd$exports[namespace] && $e72ecaf72253d486638ab4b53a7bd$exports[namespace][method] || $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[namespace] && $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[namespace][method];
  }; // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-get-own-property-names.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-keys-internal.js
  var $d0c4e52bcf782edaef$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\array-includes.js
  var $a1d725b9b45bb416ceb1ec2e84dcc$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\to-length.js
  var $df129385d5f4540f45d9004e6da0d$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\to-integer.js
  var $d094f929ef4c732d238eb970cba7b45$exports = {};
  var $d094f929ef4c732d238eb970cba7b45$var$ceil = Math.ceil;
  var $d094f929ef4c732d238eb970cba7b45$var$floor = Math.floor;

  // `ToInteger` abstract operation
  // https://tc39.github.io/ecma262/#sec-tointeger
  $d094f929ef4c732d238eb970cba7b45$exports = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? $d094f929ef4c732d238eb970cba7b45$var$floor : $d094f929ef4c732d238eb970cba7b45$var$ceil)(argument);
  };
  var $df129385d5f4540f45d9004e6da0d$var$min = Math.min;

  // `ToLength` abstract operation
  // https://tc39.github.io/ecma262/#sec-tolength
  $df129385d5f4540f45d9004e6da0d$exports = function (argument) {
    return argument > 0 ? $df129385d5f4540f45d9004e6da0d$var$min($d094f929ef4c732d238eb970cba7b45$exports(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\to-absolute-index.js
  var $fa4d6094d01aacc8da63324cbdee87$exports = {};
  var $fa4d6094d01aacc8da63324cbdee87$var$max = Math.max;
  var $fa4d6094d01aacc8da63324cbdee87$var$min = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  $fa4d6094d01aacc8da63324cbdee87$exports = function (index, length) {
    var integer = $d094f929ef4c732d238eb970cba7b45$exports(index);
    return integer < 0 ? $fa4d6094d01aacc8da63324cbdee87$var$max(integer + length, 0) : $fa4d6094d01aacc8da63324cbdee87$var$min(integer, length);
  };
  // `Array.prototype.{ indexOf, includes }` methods implementation
  var $a1d725b9b45bb416ceb1ec2e84dcc$var$createMethod = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = $d3edb8b5b29142657e301b5e7cecac5$exports($this);
      var length = $df129385d5f4540f45d9004e6da0d$exports(O.length);
      var index = $fa4d6094d01aacc8da63324cbdee87$exports(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };
  $a1d725b9b45bb416ceb1ec2e84dcc$exports = {
    // `Array.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    includes: $a1d725b9b45bb416ceb1ec2e84dcc$var$createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
    indexOf: $a1d725b9b45bb416ceb1ec2e84dcc$var$createMethod(false)
  };
  var $d0c4e52bcf782edaef$var$indexOf = $a1d725b9b45bb416ceb1ec2e84dcc$exports.indexOf;
  $d0c4e52bcf782edaef$exports = function (object, names) {
    var O = $d3edb8b5b29142657e301b5e7cecac5$exports(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !$fb61ad628fb3464a4b59a2997dacf0$exports($e03b142da07ab54980946dc60260821a$exports, key) && $fb61ad628fb3464a4b59a2997dacf0$exports(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if ($fb61ad628fb3464a4b59a2997dacf0$exports(O, key = names[i++])) {
      ~$d0c4e52bcf782edaef$var$indexOf(result, key) || result.push(key);
    }
    return result;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\enum-bug-keys.js
  var $edce42c6be7ab832735e6f2e1ec88ae$exports = {};
  // IE8- don't enum bug keys
  $edce42c6be7ab832735e6f2e1ec88ae$exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
  var $d9a6d5181c3eabba6bda9d711fdfa$var$hiddenKeys = $edce42c6be7ab832735e6f2e1ec88ae$exports.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  var $d9a6d5181c3eabba6bda9d711fdfa$export$f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $d0c4e52bcf782edaef$exports(O, $d9a6d5181c3eabba6bda9d711fdfa$var$hiddenKeys);
  }; // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-get-own-property-symbols.js
  var $cf17ca754490ad95678b37e125c91c4e$export$f = Object.getOwnPropertySymbols;
  // all object keys, includes non-enumerable and symbols
  $d0576472b878af2a7f34df2b14f0d5$exports = $aeb1e6b80ef7a537d3287f35b9b88$exports('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = $d9a6d5181c3eabba6bda9d711fdfa$export$f($ca96f020fbb32dd48b2236cb9c$exports(it));
    var getOwnPropertySymbols = $cf17ca754490ad95678b37e125c91c4e$export$f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };
  $fc21109f6c12d5dfdca0457804b6adf9$exports = function (target, source) {
    var keys = $d0576472b878af2a7f34df2b14f0d5$exports(source);
    var defineProperty = $e0cd0bce67aea07baa689ea10527$export$f;
    var getOwnPropertyDescriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!$fb61ad628fb3464a4b59a2997dacf0$exports(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\is-forced.js
  var $e6274f5bb65453325663a3dbd134944$exports = {};
  var $e6274f5bb65453325663a3dbd134944$var$replacement = /#|\.prototype\./;
  var $e6274f5bb65453325663a3dbd134944$var$isForced = function (feature, detection) {
    var value = $e6274f5bb65453325663a3dbd134944$var$data[$e6274f5bb65453325663a3dbd134944$var$normalize(feature)];
    return value == $e6274f5bb65453325663a3dbd134944$var$POLYFILL ? true : value == $e6274f5bb65453325663a3dbd134944$var$NATIVE ? false : typeof detection == 'function' ? $efaceca3db1203b03f84edf56feaf8f$exports(detection) : !!detection;
  };
  var $e6274f5bb65453325663a3dbd134944$var$normalize = $e6274f5bb65453325663a3dbd134944$var$isForced.normalize = function (string) {
    return String(string).replace($e6274f5bb65453325663a3dbd134944$var$replacement, '.').toLowerCase();
  };
  var $e6274f5bb65453325663a3dbd134944$var$data = $e6274f5bb65453325663a3dbd134944$var$isForced.data = {};
  var $e6274f5bb65453325663a3dbd134944$var$NATIVE = $e6274f5bb65453325663a3dbd134944$var$isForced.NATIVE = 'N';
  var $e6274f5bb65453325663a3dbd134944$var$POLYFILL = $e6274f5bb65453325663a3dbd134944$var$isForced.POLYFILL = 'P';
  $e6274f5bb65453325663a3dbd134944$exports = $e6274f5bb65453325663a3dbd134944$var$isForced;
  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */
  $da20139527b9570444c7d5c06ae45fa2$exports = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports;
    } else if (STATIC) {
      target = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[TARGET] || $edad60d7e38b8ccde89568196479ca9$exports(TARGET, {});
    } else {
      target = ($cbab2f3c4d2181527b69a2bf91b9e1fd$exports[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = $da20139527b9570444c7d5c06ae45fa2$var$getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = $e6274f5bb65453325663a3dbd134944$exports(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        $fc21109f6c12d5dfdca0457804b6adf9$exports(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || targetProperty && targetProperty.sham) {
        $cccb6b555b82a0b86f5e6c39c4b7c7b$exports(sourceProperty, 'sham', true);
      }
      // extend global
      $e3c8a1361cc0783bc835b9e100a3660b$exports(target, key, sourceProperty, options);
    }
  }; // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.symbol.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\native-symbol.js
  var $a96e9c542e912624439a0da166918117$exports = {};
  $a96e9c542e912624439a0da166918117$exports = !!Object.getOwnPropertySymbols && !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    // Chrome 38 Symbol has incorrect toString conversion
    // eslint-disable-next-line no-undef
    return !String(Symbol());
  });
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\use-symbol-as-uid.js
  var $d819381812e21015c4ea462003556b95$exports = {};
  $d819381812e21015c4ea462003556b95$exports = $a96e9c542e912624439a0da166918117$exports // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\is-array.js
  var $a8f3970f2c7d9372e6992817f1d$exports = {};
  // `IsArray` abstract operation
  // https://tc39.github.io/ecma262/#sec-isarray
  $a8f3970f2c7d9372e6992817f1d$exports = Array.isArray || function isArray(arg) {
    return $b499f0f4b947123008cbd2ef011785$exports(arg) == 'Array';
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\to-object.js
  var $cc8d97c6287a31e609e67fc971001f$exports = {};
  // `ToObject` abstract operation
  // https://tc39.github.io/ecma262/#sec-toobject
  $cc8d97c6287a31e609e67fc971001f$exports = function (argument) {
    return Object($b71c0730843361a14fc0393fd741336c$exports(argument));
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-create.js
  var $a968e88b66c89954fb6a8439bd2$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-define-properties.js
  var $b13c804123a5f34e6966538ba0b49ccd$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-keys.js
  var $d59175071a5199d16e3d14abf7583df2$exports = {};
  // `Object.keys` method
  // https://tc39.github.io/ecma262/#sec-object.keys
  $d59175071a5199d16e3d14abf7583df2$exports = Object.keys || function keys(O) {
    return $d0c4e52bcf782edaef$exports(O, $edce42c6be7ab832735e6f2e1ec88ae$exports);
  };
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  $b13c804123a5f34e6966538ba0b49ccd$exports = $a7c68cb8fd81a83c8a53a82a3f122f3e$exports ? Object.defineProperties : function defineProperties(O, Properties) {
    $ca96f020fbb32dd48b2236cb9c$exports(O);
    var keys = $d59175071a5199d16e3d14abf7583df2$exports(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) $e0cd0bce67aea07baa689ea10527$export$f(O, key = keys[index++], Properties[key]);
    return O;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\html.js
  var $cdef3e72fb6cca4a7a675f7441aa6$exports = {};
  $cdef3e72fb6cca4a7a675f7441aa6$exports = $aeb1e6b80ef7a537d3287f35b9b88$exports('document', 'documentElement');
  var $a968e88b66c89954fb6a8439bd2$var$GT = '>';
  var $a968e88b66c89954fb6a8439bd2$var$LT = '<';
  var $a968e88b66c89954fb6a8439bd2$var$PROTOTYPE = 'prototype';
  var $a968e88b66c89954fb6a8439bd2$var$SCRIPT = 'script';
  var $a968e88b66c89954fb6a8439bd2$var$IE_PROTO = $bbc62ededb0e13a5c149ad01cf8$exports('IE_PROTO');
  var $a968e88b66c89954fb6a8439bd2$var$EmptyConstructor = function () {/* empty */};
  var $a968e88b66c89954fb6a8439bd2$var$scriptTag = function (content) {
    return $a968e88b66c89954fb6a8439bd2$var$LT + $a968e88b66c89954fb6a8439bd2$var$SCRIPT + $a968e88b66c89954fb6a8439bd2$var$GT + content + $a968e88b66c89954fb6a8439bd2$var$LT + '/' + $a968e88b66c89954fb6a8439bd2$var$SCRIPT + $a968e88b66c89954fb6a8439bd2$var$GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var $a968e88b66c89954fb6a8439bd2$var$NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write($a968e88b66c89954fb6a8439bd2$var$scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var $a968e88b66c89954fb6a8439bd2$var$NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = $f2fb510662c1b3df76419e7197b0ca0b$exports('iframe');
    var JS = 'java' + $a968e88b66c89954fb6a8439bd2$var$SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    $cdef3e72fb6cca4a7a675f7441aa6$exports.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write($a968e88b66c89954fb6a8439bd2$var$scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var $a968e88b66c89954fb6a8439bd2$var$activeXDocument;
  var $a968e88b66c89954fb6a8439bd2$var$NullProtoObject = function () {
    try {
      /* global ActiveXObject */
      $a968e88b66c89954fb6a8439bd2$var$activeXDocument = document.domain && new ActiveXObject('htmlfile');
    } catch (error) {/* ignore */}
    $a968e88b66c89954fb6a8439bd2$var$NullProtoObject = $a968e88b66c89954fb6a8439bd2$var$activeXDocument ? $a968e88b66c89954fb6a8439bd2$var$NullProtoObjectViaActiveX($a968e88b66c89954fb6a8439bd2$var$activeXDocument) : $a968e88b66c89954fb6a8439bd2$var$NullProtoObjectViaIFrame();
    var length = $edce42c6be7ab832735e6f2e1ec88ae$exports.length;
    while (length--) delete $a968e88b66c89954fb6a8439bd2$var$NullProtoObject[$a968e88b66c89954fb6a8439bd2$var$PROTOTYPE][$edce42c6be7ab832735e6f2e1ec88ae$exports[length]];
    return $a968e88b66c89954fb6a8439bd2$var$NullProtoObject();
  };
  $e03b142da07ab54980946dc60260821a$exports[$a968e88b66c89954fb6a8439bd2$var$IE_PROTO] = true;

  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  $a968e88b66c89954fb6a8439bd2$exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      $a968e88b66c89954fb6a8439bd2$var$EmptyConstructor[$a968e88b66c89954fb6a8439bd2$var$PROTOTYPE] = $ca96f020fbb32dd48b2236cb9c$exports(O);
      result = new $a968e88b66c89954fb6a8439bd2$var$EmptyConstructor();
      $a968e88b66c89954fb6a8439bd2$var$EmptyConstructor[$a968e88b66c89954fb6a8439bd2$var$PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[$a968e88b66c89954fb6a8439bd2$var$IE_PROTO] = O;
    } else result = $a968e88b66c89954fb6a8439bd2$var$NullProtoObject();
    return Properties === undefined ? result : $b13c804123a5f34e6966538ba0b49ccd$exports(result, Properties);
  }; // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-get-own-property-names-external.js
  var $de7fcf93bb557af6a480475$var$nativeGetOwnPropertyNames = $d9a6d5181c3eabba6bda9d711fdfa$export$f;
  var $de7fcf93bb557af6a480475$var$toString = {}.toString;
  var $de7fcf93bb557af6a480475$var$windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  var $de7fcf93bb557af6a480475$var$getWindowNames = function (it) {
    try {
      return $de7fcf93bb557af6a480475$var$nativeGetOwnPropertyNames(it);
    } catch (error) {
      return $de7fcf93bb557af6a480475$var$windowNames.slice();
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var $de7fcf93bb557af6a480475$export$f = function getOwnPropertyNames(it) {
    return $de7fcf93bb557af6a480475$var$windowNames && $de7fcf93bb557af6a480475$var$toString.call(it) == '[object Window]' ? $de7fcf93bb557af6a480475$var$getWindowNames(it) : $de7fcf93bb557af6a480475$var$nativeGetOwnPropertyNames($d3edb8b5b29142657e301b5e7cecac5$exports(it));
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\well-known-symbol.js
  var $a241c8cf065084cf6d499662389d097$exports = {};
  var $a241c8cf065084cf6d499662389d097$var$WellKnownSymbolsStore = $b759a4ff5ce4e4cc3a6e49bafb2e7c9$exports('wks');
  var $a241c8cf065084cf6d499662389d097$var$Symbol = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.Symbol;
  var $a241c8cf065084cf6d499662389d097$var$createWellKnownSymbol = $d819381812e21015c4ea462003556b95$exports ? $a241c8cf065084cf6d499662389d097$var$Symbol : $a241c8cf065084cf6d499662389d097$var$Symbol && $a241c8cf065084cf6d499662389d097$var$Symbol.withoutSetter || $ebaf71c27182b704b57713b$exports;
  $a241c8cf065084cf6d499662389d097$exports = function (name) {
    if (!$fb61ad628fb3464a4b59a2997dacf0$exports($a241c8cf065084cf6d499662389d097$var$WellKnownSymbolsStore, name)) {
      if ($a96e9c542e912624439a0da166918117$exports && $fb61ad628fb3464a4b59a2997dacf0$exports($a241c8cf065084cf6d499662389d097$var$Symbol, name)) $a241c8cf065084cf6d499662389d097$var$WellKnownSymbolsStore[name] = $a241c8cf065084cf6d499662389d097$var$Symbol[name];else $a241c8cf065084cf6d499662389d097$var$WellKnownSymbolsStore[name] = $a241c8cf065084cf6d499662389d097$var$createWellKnownSymbol('Symbol.' + name);
    }
    return $a241c8cf065084cf6d499662389d097$var$WellKnownSymbolsStore[name];
  }; // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\well-known-symbol-wrapped.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\define-well-known-symbol.js
  var $bb78ac54c54bd851f403c5de3f1bbdd8$exports = {};
  var $bb78ac54c54bd851f403c5de3f1bbdd8$var$defineProperty = $e0cd0bce67aea07baa689ea10527$export$f;
  $bb78ac54c54bd851f403c5de3f1bbdd8$exports = function (NAME) {
    var Symbol = $e72ecaf72253d486638ab4b53a7bd$exports.Symbol || ($e72ecaf72253d486638ab4b53a7bd$exports.Symbol = {});
    if (!$fb61ad628fb3464a4b59a2997dacf0$exports(Symbol, NAME)) $bb78ac54c54bd851f403c5de3f1bbdd8$var$defineProperty(Symbol, NAME, {
      value: $a241c8cf065084cf6d499662389d097$exports(NAME)
    });
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\set-to-string-tag.js
  var $b44eaad080afd8b6cc975138b17db$exports = {};
  var $b44eaad080afd8b6cc975138b17db$var$defineProperty = $e0cd0bce67aea07baa689ea10527$export$f;
  var $b44eaad080afd8b6cc975138b17db$var$TO_STRING_TAG = $a241c8cf065084cf6d499662389d097$exports('toStringTag');
  $b44eaad080afd8b6cc975138b17db$exports = function (it, TAG, STATIC) {
    if (it && !$fb61ad628fb3464a4b59a2997dacf0$exports(it = STATIC ? it : it.prototype, $b44eaad080afd8b6cc975138b17db$var$TO_STRING_TAG)) {
      $b44eaad080afd8b6cc975138b17db$var$defineProperty(it, $b44eaad080afd8b6cc975138b17db$var$TO_STRING_TAG, {
        configurable: true,
        value: TAG
      });
    }
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\array-iteration.js
  var $a44239821dbd12c71742ad33b885$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\function-bind-context.js
  var $d098e725d461df6003aa3baf1810a74$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\a-function.js
  var $dd1737e30ac45587cfd439eb433a7a$exports = {};
  $dd1737e30ac45587cfd439eb433a7a$exports = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    }
    return it;
  };
  // optional / simple context binding
  $d098e725d461df6003aa3baf1810a74$exports = function (fn, that, length) {
    $dd1737e30ac45587cfd439eb433a7a$exports(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 0:
        return function () {
          return fn.call(that);
        };
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function /* ...args */
    () {
      return fn.apply(that, arguments);
    };
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\array-species-create.js
  var $bc8551fc8d16cc98c16167c614659138$exports = {};
  var $bc8551fc8d16cc98c16167c614659138$var$SPECIES = $a241c8cf065084cf6d499662389d097$exports('species');

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.github.io/ecma262/#sec-arrayspeciescreate
  $bc8551fc8d16cc98c16167c614659138$exports = function (originalArray, length) {
    var C;
    if ($a8f3970f2c7d9372e6992817f1d$exports(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || $a8f3970f2c7d9372e6992817f1d$exports(C.prototype))) C = undefined;else if ($ce5aa73a2f4131a4f5ee32067e6336$exports(C)) {
        C = C[$bc8551fc8d16cc98c16167c614659138$var$SPECIES];
        if (C === null) C = undefined;
      }
    }
    return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };
  var $a44239821dbd12c71742ad33b885$var$push = [].push;

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
  var $a44239821dbd12c71742ad33b885$var$createMethod = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = $cc8d97c6287a31e609e67fc971001f$exports($this);
      var self = $c8c30ff7b4b337039de62128343f6647$exports(O);
      var boundFunction = $d098e725d461df6003aa3baf1810a74$exports(callbackfn, that, 3);
      var length = $df129385d5f4540f45d9004e6da0d$exports(self.length);
      var index = 0;
      var create = specificCreate || $bc8551fc8d16cc98c16167c614659138$exports;
      var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var value, result;
      for (; length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3:
              return true;
            // some
            case 5:
              return value;
            // find
            case 6:
              return index;
            // findIndex
            case 2:
              $a44239821dbd12c71742ad33b885$var$push.call(target, value);
            // filter
          } else if (IS_EVERY) return false; // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };
  $a44239821dbd12c71742ad33b885$exports = {
    // `Array.prototype.forEach` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
    forEach: $a44239821dbd12c71742ad33b885$var$createMethod(0),
    // `Array.prototype.map` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.map
    map: $a44239821dbd12c71742ad33b885$var$createMethod(1),
    // `Array.prototype.filter` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.filter
    filter: $a44239821dbd12c71742ad33b885$var$createMethod(2),
    // `Array.prototype.some` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.some
    some: $a44239821dbd12c71742ad33b885$var$createMethod(3),
    // `Array.prototype.every` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.every
    every: $a44239821dbd12c71742ad33b885$var$createMethod(4),
    // `Array.prototype.find` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.find
    find: $a44239821dbd12c71742ad33b885$var$createMethod(5),
    // `Array.prototype.findIndex` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
    findIndex: $a44239821dbd12c71742ad33b885$var$createMethod(6)
  };
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$$forEach = $a44239821dbd12c71742ad33b885$exports.forEach;
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$HIDDEN = $bbc62ededb0e13a5c149ad01cf8$exports('hidden');
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$SYMBOL = 'Symbol';
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$PROTOTYPE = 'prototype';
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$TO_PRIMITIVE = $a241c8cf065084cf6d499662389d097$exports('toPrimitive');
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$setInternalState = $c9333b419e2d291fa24a6e5282e596$exports.set;
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$getInternalState = $c9333b419e2d291fa24a6e5282e596$exports.getterFor($a50ce4d4dfc06c87e0a24fa362e50899$var$SYMBOL);
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototype = Object[$a50ce4d4dfc06c87e0a24fa362e50899$var$PROTOTYPE];
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$$Symbol = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.Symbol;
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$$stringify = $aeb1e6b80ef7a537d3287f35b9b88$exports('JSON', 'stringify');
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$nativeGetOwnPropertyDescriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f;
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$nativeDefineProperty = $e0cd0bce67aea07baa689ea10527$export$f;
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$nativeGetOwnPropertyNames = $de7fcf93bb557af6a480475$export$f;
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$nativePropertyIsEnumerable = $fd3aded0ab2c815d5a451b8b3c59$export$f;
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$AllSymbols = $b759a4ff5ce4e4cc3a6e49bafb2e7c9$exports('symbols');
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototypeSymbols = $b759a4ff5ce4e4cc3a6e49bafb2e7c9$exports('op-symbols');
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$StringToSymbolRegistry = $b759a4ff5ce4e4cc3a6e49bafb2e7c9$exports('string-to-symbol-registry');
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$SymbolToStringRegistry = $b759a4ff5ce4e4cc3a6e49bafb2e7c9$exports('symbol-to-string-registry');
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$WellKnownSymbolsStore = $b759a4ff5ce4e4cc3a6e49bafb2e7c9$exports('wks');
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$QObject = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$USE_SETTER = !$a50ce4d4dfc06c87e0a24fa362e50899$var$QObject || !$a50ce4d4dfc06c87e0a24fa362e50899$var$QObject[$a50ce4d4dfc06c87e0a24fa362e50899$var$PROTOTYPE] || !$a50ce4d4dfc06c87e0a24fa362e50899$var$QObject[$a50ce4d4dfc06c87e0a24fa362e50899$var$PROTOTYPE].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$setSymbolDescriptor = $a7c68cb8fd81a83c8a53a82a3f122f3e$exports && $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    return $a968e88b66c89954fb6a8439bd2$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$nativeDefineProperty({}, 'a', {
      get: function () {
        return $a50ce4d4dfc06c87e0a24fa362e50899$var$nativeDefineProperty(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = $a50ce4d4dfc06c87e0a24fa362e50899$var$nativeGetOwnPropertyDescriptor($a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototype, P);
    if (ObjectPrototypeDescriptor) delete $a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototype[P];
    $a50ce4d4dfc06c87e0a24fa362e50899$var$nativeDefineProperty(O, P, Attributes);
    if (ObjectPrototypeDescriptor && O !== $a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototype) {
      $a50ce4d4dfc06c87e0a24fa362e50899$var$nativeDefineProperty($a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototype, P, ObjectPrototypeDescriptor);
    }
  } : $a50ce4d4dfc06c87e0a24fa362e50899$var$nativeDefineProperty;
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$wrap = function (tag, description) {
    var symbol = $a50ce4d4dfc06c87e0a24fa362e50899$var$AllSymbols[tag] = $a968e88b66c89954fb6a8439bd2$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$$Symbol[$a50ce4d4dfc06c87e0a24fa362e50899$var$PROTOTYPE]);
    $a50ce4d4dfc06c87e0a24fa362e50899$var$setInternalState(symbol, {
      type: $a50ce4d4dfc06c87e0a24fa362e50899$var$SYMBOL,
      tag: tag,
      description: description
    });
    if (!$a7c68cb8fd81a83c8a53a82a3f122f3e$exports) symbol.description = description;
    return symbol;
  };
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$isSymbol = $d819381812e21015c4ea462003556b95$exports ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return Object(it) instanceof $a50ce4d4dfc06c87e0a24fa362e50899$var$$Symbol;
  };
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$$defineProperty = function defineProperty(O, P, Attributes) {
    if (O === $a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototype) $a50ce4d4dfc06c87e0a24fa362e50899$var$$defineProperty($a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototypeSymbols, P, Attributes);
    $ca96f020fbb32dd48b2236cb9c$exports(O);
    var key = $ec9b43a21fce0d1894877586c488a33$exports(P, true);
    $ca96f020fbb32dd48b2236cb9c$exports(Attributes);
    if ($fb61ad628fb3464a4b59a2997dacf0$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!$fb61ad628fb3464a4b59a2997dacf0$exports(O, $a50ce4d4dfc06c87e0a24fa362e50899$var$HIDDEN)) $a50ce4d4dfc06c87e0a24fa362e50899$var$nativeDefineProperty(O, $a50ce4d4dfc06c87e0a24fa362e50899$var$HIDDEN, $c83efd2171483e9988d3cc48fb8a$exports(1, {}));
        O[$a50ce4d4dfc06c87e0a24fa362e50899$var$HIDDEN][key] = true;
      } else {
        if ($fb61ad628fb3464a4b59a2997dacf0$exports(O, $a50ce4d4dfc06c87e0a24fa362e50899$var$HIDDEN) && O[$a50ce4d4dfc06c87e0a24fa362e50899$var$HIDDEN][key]) O[$a50ce4d4dfc06c87e0a24fa362e50899$var$HIDDEN][key] = false;
        Attributes = $a968e88b66c89954fb6a8439bd2$exports(Attributes, {
          enumerable: $c83efd2171483e9988d3cc48fb8a$exports(0, false)
        });
      }
      return $a50ce4d4dfc06c87e0a24fa362e50899$var$setSymbolDescriptor(O, key, Attributes);
    }
    return $a50ce4d4dfc06c87e0a24fa362e50899$var$nativeDefineProperty(O, key, Attributes);
  };
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$$defineProperties = function defineProperties(O, Properties) {
    $ca96f020fbb32dd48b2236cb9c$exports(O);
    var properties = $d3edb8b5b29142657e301b5e7cecac5$exports(Properties);
    var keys = $d59175071a5199d16e3d14abf7583df2$exports(properties).concat($a50ce4d4dfc06c87e0a24fa362e50899$var$$getOwnPropertySymbols(properties));
    $a50ce4d4dfc06c87e0a24fa362e50899$var$$forEach(keys, function (key) {
      if (!$a7c68cb8fd81a83c8a53a82a3f122f3e$exports || $a50ce4d4dfc06c87e0a24fa362e50899$var$$propertyIsEnumerable.call(properties, key)) $a50ce4d4dfc06c87e0a24fa362e50899$var$$defineProperty(O, key, properties[key]);
    });
    return O;
  };
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$$create = function create(O, Properties) {
    return Properties === undefined ? $a968e88b66c89954fb6a8439bd2$exports(O) : $a50ce4d4dfc06c87e0a24fa362e50899$var$$defineProperties($a968e88b66c89954fb6a8439bd2$exports(O), Properties);
  };
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$$propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = $ec9b43a21fce0d1894877586c488a33$exports(V, true);
    var enumerable = $a50ce4d4dfc06c87e0a24fa362e50899$var$nativePropertyIsEnumerable.call(this, P);
    if (this === $a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototype && $fb61ad628fb3464a4b59a2997dacf0$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$AllSymbols, P) && !$fb61ad628fb3464a4b59a2997dacf0$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototypeSymbols, P)) return false;
    return enumerable || !$fb61ad628fb3464a4b59a2997dacf0$exports(this, P) || !$fb61ad628fb3464a4b59a2997dacf0$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$AllSymbols, P) || $fb61ad628fb3464a4b59a2997dacf0$exports(this, $a50ce4d4dfc06c87e0a24fa362e50899$var$HIDDEN) && this[$a50ce4d4dfc06c87e0a24fa362e50899$var$HIDDEN][P] ? enumerable : true;
  };
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$$getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = $d3edb8b5b29142657e301b5e7cecac5$exports(O);
    var key = $ec9b43a21fce0d1894877586c488a33$exports(P, true);
    if (it === $a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototype && $fb61ad628fb3464a4b59a2997dacf0$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$AllSymbols, key) && !$fb61ad628fb3464a4b59a2997dacf0$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototypeSymbols, key)) return;
    var descriptor = $a50ce4d4dfc06c87e0a24fa362e50899$var$nativeGetOwnPropertyDescriptor(it, key);
    if (descriptor && $fb61ad628fb3464a4b59a2997dacf0$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$AllSymbols, key) && !($fb61ad628fb3464a4b59a2997dacf0$exports(it, $a50ce4d4dfc06c87e0a24fa362e50899$var$HIDDEN) && it[$a50ce4d4dfc06c87e0a24fa362e50899$var$HIDDEN][key])) {
      descriptor.enumerable = true;
    }
    return descriptor;
  };
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$$getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = $a50ce4d4dfc06c87e0a24fa362e50899$var$nativeGetOwnPropertyNames($d3edb8b5b29142657e301b5e7cecac5$exports(O));
    var result = [];
    $a50ce4d4dfc06c87e0a24fa362e50899$var$$forEach(names, function (key) {
      if (!$fb61ad628fb3464a4b59a2997dacf0$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$AllSymbols, key) && !$fb61ad628fb3464a4b59a2997dacf0$exports($e03b142da07ab54980946dc60260821a$exports, key)) result.push(key);
    });
    return result;
  };
  var $a50ce4d4dfc06c87e0a24fa362e50899$var$$getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === $a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototype;
    var names = $a50ce4d4dfc06c87e0a24fa362e50899$var$nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? $a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototypeSymbols : $d3edb8b5b29142657e301b5e7cecac5$exports(O));
    var result = [];
    $a50ce4d4dfc06c87e0a24fa362e50899$var$$forEach(names, function (key) {
      if ($fb61ad628fb3464a4b59a2997dacf0$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || $fb61ad628fb3464a4b59a2997dacf0$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototype, key))) {
        result.push($a50ce4d4dfc06c87e0a24fa362e50899$var$AllSymbols[key]);
      }
    });
    return result;
  };

  // `Symbol` constructor
  // https://tc39.github.io/ecma262/#sec-symbol-constructor
  if (!$a96e9c542e912624439a0da166918117$exports) {
    $a50ce4d4dfc06c87e0a24fa362e50899$var$$Symbol = function Symbol() {
      if (this instanceof $a50ce4d4dfc06c87e0a24fa362e50899$var$$Symbol) throw TypeError('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
      var tag = $ebaf71c27182b704b57713b$exports(description);
      var setter = function (value) {
        if (this === $a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototype) setter.call($a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototypeSymbols, value);
        if ($fb61ad628fb3464a4b59a2997dacf0$exports(this, $a50ce4d4dfc06c87e0a24fa362e50899$var$HIDDEN) && $fb61ad628fb3464a4b59a2997dacf0$exports(this[$a50ce4d4dfc06c87e0a24fa362e50899$var$HIDDEN], tag)) this[$a50ce4d4dfc06c87e0a24fa362e50899$var$HIDDEN][tag] = false;
        $a50ce4d4dfc06c87e0a24fa362e50899$var$setSymbolDescriptor(this, tag, $c83efd2171483e9988d3cc48fb8a$exports(1, value));
      };
      if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports && $a50ce4d4dfc06c87e0a24fa362e50899$var$USE_SETTER) $a50ce4d4dfc06c87e0a24fa362e50899$var$setSymbolDescriptor($a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototype, tag, {
        configurable: true,
        set: setter
      });
      return $a50ce4d4dfc06c87e0a24fa362e50899$var$wrap(tag, description);
    };
    $e3c8a1361cc0783bc835b9e100a3660b$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$$Symbol[$a50ce4d4dfc06c87e0a24fa362e50899$var$PROTOTYPE], 'toString', function toString() {
      return $a50ce4d4dfc06c87e0a24fa362e50899$var$getInternalState(this).tag;
    });
    $e3c8a1361cc0783bc835b9e100a3660b$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$$Symbol, 'withoutSetter', function (description) {
      return $a50ce4d4dfc06c87e0a24fa362e50899$var$wrap($ebaf71c27182b704b57713b$exports(description), description);
    });
    $fd3aded0ab2c815d5a451b8b3c59$export$f = $a50ce4d4dfc06c87e0a24fa362e50899$var$$propertyIsEnumerable;
    $e0cd0bce67aea07baa689ea10527$export$f = $a50ce4d4dfc06c87e0a24fa362e50899$var$$defineProperty;
    $ef3dd30401c6b3b1a77e9290273caca$export$f = $a50ce4d4dfc06c87e0a24fa362e50899$var$$getOwnPropertyDescriptor;
    $d9a6d5181c3eabba6bda9d711fdfa$export$f = $de7fcf93bb557af6a480475$export$f = $a50ce4d4dfc06c87e0a24fa362e50899$var$$getOwnPropertyNames;
    $cf17ca754490ad95678b37e125c91c4e$export$f = $a50ce4d4dfc06c87e0a24fa362e50899$var$$getOwnPropertySymbols;
    $a241c8cf065084cf6d499662389d097$exports = function (name) {
      return $a50ce4d4dfc06c87e0a24fa362e50899$var$wrap($a241c8cf065084cf6d499662389d097$exports(name), name);
    };
    if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports) {
      // https://github.com/tc39/proposal-Symbol-description
      $a50ce4d4dfc06c87e0a24fa362e50899$var$nativeDefineProperty($a50ce4d4dfc06c87e0a24fa362e50899$var$$Symbol[$a50ce4d4dfc06c87e0a24fa362e50899$var$PROTOTYPE], 'description', {
        configurable: true,
        get: function description() {
          return $a50ce4d4dfc06c87e0a24fa362e50899$var$getInternalState(this).description;
        }
      });
      if (!$f57ba62cba687e9257bf807714b47$exports) {
        $e3c8a1361cc0783bc835b9e100a3660b$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$ObjectPrototype, 'propertyIsEnumerable', $a50ce4d4dfc06c87e0a24fa362e50899$var$$propertyIsEnumerable, {
          unsafe: true
        });
      }
    }
  }
  $da20139527b9570444c7d5c06ae45fa2$exports({
    global: true,
    wrap: true,
    forced: !$a96e9c542e912624439a0da166918117$exports,
    sham: !$a96e9c542e912624439a0da166918117$exports
  }, {
    Symbol: $a50ce4d4dfc06c87e0a24fa362e50899$var$$Symbol
  });
  $a50ce4d4dfc06c87e0a24fa362e50899$var$$forEach($d59175071a5199d16e3d14abf7583df2$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$WellKnownSymbolsStore), function (name) {
    $bb78ac54c54bd851f403c5de3f1bbdd8$exports(name);
  });
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: $a50ce4d4dfc06c87e0a24fa362e50899$var$SYMBOL,
    stat: true,
    forced: !$a96e9c542e912624439a0da166918117$exports
  }, {
    // `Symbol.for` method
    // https://tc39.github.io/ecma262/#sec-symbol.for
    'for': function (key) {
      var string = String(key);
      if ($fb61ad628fb3464a4b59a2997dacf0$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$StringToSymbolRegistry, string)) return $a50ce4d4dfc06c87e0a24fa362e50899$var$StringToSymbolRegistry[string];
      var symbol = $a50ce4d4dfc06c87e0a24fa362e50899$var$$Symbol(string);
      $a50ce4d4dfc06c87e0a24fa362e50899$var$StringToSymbolRegistry[string] = symbol;
      $a50ce4d4dfc06c87e0a24fa362e50899$var$SymbolToStringRegistry[symbol] = string;
      return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.github.io/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!$a50ce4d4dfc06c87e0a24fa362e50899$var$isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
      if ($fb61ad628fb3464a4b59a2997dacf0$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$SymbolToStringRegistry, sym)) return $a50ce4d4dfc06c87e0a24fa362e50899$var$SymbolToStringRegistry[sym];
    },
    useSetter: function () {
      $a50ce4d4dfc06c87e0a24fa362e50899$var$USE_SETTER = true;
    },
    useSimple: function () {
      $a50ce4d4dfc06c87e0a24fa362e50899$var$USE_SETTER = false;
    }
  });
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true,
    forced: !$a96e9c542e912624439a0da166918117$exports,
    sham: !$a7c68cb8fd81a83c8a53a82a3f122f3e$exports
  }, {
    // `Object.create` method
    // https://tc39.github.io/ecma262/#sec-object.create
    create: $a50ce4d4dfc06c87e0a24fa362e50899$var$$create,
    // `Object.defineProperty` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperty
    defineProperty: $a50ce4d4dfc06c87e0a24fa362e50899$var$$defineProperty,
    // `Object.defineProperties` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperties
    defineProperties: $a50ce4d4dfc06c87e0a24fa362e50899$var$$defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $a50ce4d4dfc06c87e0a24fa362e50899$var$$getOwnPropertyDescriptor
  });
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true,
    forced: !$a96e9c542e912624439a0da166918117$exports
  }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $a50ce4d4dfc06c87e0a24fa362e50899$var$$getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $a50ce4d4dfc06c87e0a24fa362e50899$var$$getOwnPropertySymbols
  });

  // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true,
    forced: $efaceca3db1203b03f84edf56feaf8f$exports(function () {
      $cf17ca754490ad95678b37e125c91c4e$export$f(1);
    })
  }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return $cf17ca754490ad95678b37e125c91c4e$export$f($cc8d97c6287a31e609e67fc971001f$exports(it));
    }
  });

  // `JSON.stringify` method behavior with symbols
  // https://tc39.github.io/ecma262/#sec-json.stringify
  if ($a50ce4d4dfc06c87e0a24fa362e50899$var$$stringify) {
    var $a50ce4d4dfc06c87e0a24fa362e50899$var$FORCED_JSON_STRINGIFY = !$a96e9c542e912624439a0da166918117$exports || $efaceca3db1203b03f84edf56feaf8f$exports(function () {
      var symbol = $a50ce4d4dfc06c87e0a24fa362e50899$var$$Symbol();
      // MS Edge converts symbol values to JSON as {}
      return $a50ce4d4dfc06c87e0a24fa362e50899$var$$stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $a50ce4d4dfc06c87e0a24fa362e50899$var$$stringify({
        a: symbol
      }) != '{}'
      // V8 throws on boxed symbols
      || $a50ce4d4dfc06c87e0a24fa362e50899$var$$stringify(Object(symbol)) != '{}';
    });
    $da20139527b9570444c7d5c06ae45fa2$exports({
      target: 'JSON',
      stat: true,
      forced: $a50ce4d4dfc06c87e0a24fa362e50899$var$FORCED_JSON_STRINGIFY
    }, {
      // eslint-disable-next-line no-unused-vars
      stringify: function stringify(it, replacer, space) {
        var args = [it];
        var index = 1;
        var $replacer;
        while (arguments.length > index) args.push(arguments[index++]);
        $replacer = replacer;
        if (!$ce5aa73a2f4131a4f5ee32067e6336$exports(replacer) && it === undefined || $a50ce4d4dfc06c87e0a24fa362e50899$var$isSymbol(it)) return; // IE8 returns string on undefined
        if (!$a8f3970f2c7d9372e6992817f1d$exports(replacer)) replacer = function (key, value) {
          if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
          if (!$a50ce4d4dfc06c87e0a24fa362e50899$var$isSymbol(value)) return value;
        };
        args[1] = replacer;
        return $a50ce4d4dfc06c87e0a24fa362e50899$var$$stringify.apply(null, args);
      }
    });
  }

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
  if (!$a50ce4d4dfc06c87e0a24fa362e50899$var$$Symbol[$a50ce4d4dfc06c87e0a24fa362e50899$var$PROTOTYPE][$a50ce4d4dfc06c87e0a24fa362e50899$var$TO_PRIMITIVE]) {
    $cccb6b555b82a0b86f5e6c39c4b7c7b$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$$Symbol[$a50ce4d4dfc06c87e0a24fa362e50899$var$PROTOTYPE], $a50ce4d4dfc06c87e0a24fa362e50899$var$TO_PRIMITIVE, $a50ce4d4dfc06c87e0a24fa362e50899$var$$Symbol[$a50ce4d4dfc06c87e0a24fa362e50899$var$PROTOTYPE].valueOf);
  }
  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
  $b44eaad080afd8b6cc975138b17db$exports($a50ce4d4dfc06c87e0a24fa362e50899$var$$Symbol, $a50ce4d4dfc06c87e0a24fa362e50899$var$SYMBOL);
  $e03b142da07ab54980946dc60260821a$exports[$a50ce4d4dfc06c87e0a24fa362e50899$var$HIDDEN] = true; // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\src\js\controller.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.symbol.description.js
  var $bed55d3129e494e2acaa6340d77b23$var$defineProperty = $e0cd0bce67aea07baa689ea10527$export$f;
  var $bed55d3129e494e2acaa6340d77b23$var$NativeSymbol = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.Symbol;
  if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports && typeof $bed55d3129e494e2acaa6340d77b23$var$NativeSymbol == 'function' && (!('description' in $bed55d3129e494e2acaa6340d77b23$var$NativeSymbol.prototype) ||
  // Safari 12 bug
  $bed55d3129e494e2acaa6340d77b23$var$NativeSymbol().description !== undefined)) {
    var $bed55d3129e494e2acaa6340d77b23$var$EmptyStringDescriptionStore = {};
    // wrap Symbol constructor for correct work with undefined description
    var $bed55d3129e494e2acaa6340d77b23$var$SymbolWrapper = function Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
      var result = this instanceof $bed55d3129e494e2acaa6340d77b23$var$SymbolWrapper ? new $bed55d3129e494e2acaa6340d77b23$var$NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? $bed55d3129e494e2acaa6340d77b23$var$NativeSymbol() : $bed55d3129e494e2acaa6340d77b23$var$NativeSymbol(description);
      if (description === '') $bed55d3129e494e2acaa6340d77b23$var$EmptyStringDescriptionStore[result] = true;
      return result;
    };
    $fc21109f6c12d5dfdca0457804b6adf9$exports($bed55d3129e494e2acaa6340d77b23$var$SymbolWrapper, $bed55d3129e494e2acaa6340d77b23$var$NativeSymbol);
    var $bed55d3129e494e2acaa6340d77b23$var$symbolPrototype = $bed55d3129e494e2acaa6340d77b23$var$SymbolWrapper.prototype = $bed55d3129e494e2acaa6340d77b23$var$NativeSymbol.prototype;
    $bed55d3129e494e2acaa6340d77b23$var$symbolPrototype.constructor = $bed55d3129e494e2acaa6340d77b23$var$SymbolWrapper;
    var $bed55d3129e494e2acaa6340d77b23$var$symbolToString = $bed55d3129e494e2acaa6340d77b23$var$symbolPrototype.toString;
    var $bed55d3129e494e2acaa6340d77b23$var$native = String($bed55d3129e494e2acaa6340d77b23$var$NativeSymbol('test')) == 'Symbol(test)';
    var $bed55d3129e494e2acaa6340d77b23$var$regexp = /^Symbol\((.*)\)[^)]+$/;
    $bed55d3129e494e2acaa6340d77b23$var$defineProperty($bed55d3129e494e2acaa6340d77b23$var$symbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = $ce5aa73a2f4131a4f5ee32067e6336$exports(this) ? this.valueOf() : this;
        var string = $bed55d3129e494e2acaa6340d77b23$var$symbolToString.call(symbol);
        if ($fb61ad628fb3464a4b59a2997dacf0$exports($bed55d3129e494e2acaa6340d77b23$var$EmptyStringDescriptionStore, symbol)) return '';
        var desc = $bed55d3129e494e2acaa6340d77b23$var$native ? string.slice(7, -1) : string.replace($bed55d3129e494e2acaa6340d77b23$var$regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });
    $da20139527b9570444c7d5c06ae45fa2$exports({
      global: true,
      forced: true
    }, {
      Symbol: $bed55d3129e494e2acaa6340d77b23$var$SymbolWrapper
    });
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.symbol.async-iterator.js
  // `Symbol.asyncIterator` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.asynciterator
  $bb78ac54c54bd851f403c5de3f1bbdd8$exports('asyncIterator'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.symbol.has-instance.js
  // `Symbol.hasInstance` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.hasinstance
  $bb78ac54c54bd851f403c5de3f1bbdd8$exports('hasInstance'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.symbol.is-concat-spreadable.js
  // `Symbol.isConcatSpreadable` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
  $bb78ac54c54bd851f403c5de3f1bbdd8$exports('isConcatSpreadable'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.symbol.iterator.js
  // `Symbol.iterator` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.iterator
  $bb78ac54c54bd851f403c5de3f1bbdd8$exports('iterator'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.symbol.match.js
  // `Symbol.match` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.match
  $bb78ac54c54bd851f403c5de3f1bbdd8$exports('match'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.symbol.replace.js
  // `Symbol.replace` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.replace
  $bb78ac54c54bd851f403c5de3f1bbdd8$exports('replace'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.symbol.search.js
  // `Symbol.search` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.search
  $bb78ac54c54bd851f403c5de3f1bbdd8$exports('search'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.symbol.species.js
  // `Symbol.species` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.species
  $bb78ac54c54bd851f403c5de3f1bbdd8$exports('species'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.symbol.split.js
  // `Symbol.split` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.split
  $bb78ac54c54bd851f403c5de3f1bbdd8$exports('split'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.symbol.to-primitive.js
  // `Symbol.toPrimitive` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.toprimitive
  $bb78ac54c54bd851f403c5de3f1bbdd8$exports('toPrimitive'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.symbol.to-string-tag.js
  // `Symbol.toStringTag` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.tostringtag
  $bb78ac54c54bd851f403c5de3f1bbdd8$exports('toStringTag'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.symbol.unscopables.js
  // `Symbol.unscopables` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.unscopables
  $bb78ac54c54bd851f403c5de3f1bbdd8$exports('unscopables'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.concat.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\create-property.js
  var $cb0cd31bd5a8ea8a840ab8e2fbe71$exports = {};
  $cb0cd31bd5a8ea8a840ab8e2fbe71$exports = function (object, key, value) {
    var propertyKey = $ec9b43a21fce0d1894877586c488a33$exports(key);
    if (propertyKey in object) $e0cd0bce67aea07baa689ea10527$export$f(object, propertyKey, $c83efd2171483e9988d3cc48fb8a$exports(0, value));else object[propertyKey] = value;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\array-method-has-species-support.js
  var $cada630aaf742ef2f368576964fd76$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\engine-v8-version.js
  var $fb615b1b527081388b3886dea9b01$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\engine-user-agent.js
  var $faa9dc823f5f739a68a846c4dbffdc$exports = {};
  $faa9dc823f5f739a68a846c4dbffdc$exports = $aeb1e6b80ef7a537d3287f35b9b88$exports('navigator', 'userAgent') || '';
  var $fb615b1b527081388b3886dea9b01$var$process = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.process;
  var $fb615b1b527081388b3886dea9b01$var$versions = $fb615b1b527081388b3886dea9b01$var$process && $fb615b1b527081388b3886dea9b01$var$process.versions;
  var $fb615b1b527081388b3886dea9b01$var$v8 = $fb615b1b527081388b3886dea9b01$var$versions && $fb615b1b527081388b3886dea9b01$var$versions.v8;
  var $fb615b1b527081388b3886dea9b01$var$match, $fb615b1b527081388b3886dea9b01$var$version;
  if ($fb615b1b527081388b3886dea9b01$var$v8) {
    $fb615b1b527081388b3886dea9b01$var$match = $fb615b1b527081388b3886dea9b01$var$v8.split('.');
    $fb615b1b527081388b3886dea9b01$var$version = $fb615b1b527081388b3886dea9b01$var$match[0] + $fb615b1b527081388b3886dea9b01$var$match[1];
  } else if ($faa9dc823f5f739a68a846c4dbffdc$exports) {
    $fb615b1b527081388b3886dea9b01$var$match = $faa9dc823f5f739a68a846c4dbffdc$exports.match(/Edge\/(\d+)/);
    if (!$fb615b1b527081388b3886dea9b01$var$match || $fb615b1b527081388b3886dea9b01$var$match[1] >= 74) {
      $fb615b1b527081388b3886dea9b01$var$match = $faa9dc823f5f739a68a846c4dbffdc$exports.match(/Chrome\/(\d+)/);
      if ($fb615b1b527081388b3886dea9b01$var$match) $fb615b1b527081388b3886dea9b01$var$version = $fb615b1b527081388b3886dea9b01$var$match[1];
    }
  }
  $fb615b1b527081388b3886dea9b01$exports = $fb615b1b527081388b3886dea9b01$var$version && +$fb615b1b527081388b3886dea9b01$var$version;
  var $cada630aaf742ef2f368576964fd76$var$SPECIES = $a241c8cf065084cf6d499662389d097$exports('species');
  $cada630aaf742ef2f368576964fd76$exports = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return $fb615b1b527081388b3886dea9b01$exports >= 51 || !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[$cada630aaf742ef2f368576964fd76$var$SPECIES] = function () {
        return {
          foo: 1
        };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };
  var $fb4e8a65dffdbdf5ff31b5c5998d808a$var$IS_CONCAT_SPREADABLE = $a241c8cf065084cf6d499662389d097$exports('isConcatSpreadable');
  var $fb4e8a65dffdbdf5ff31b5c5998d808a$var$MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var $fb4e8a65dffdbdf5ff31b5c5998d808a$var$MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var $fb4e8a65dffdbdf5ff31b5c5998d808a$var$IS_CONCAT_SPREADABLE_SUPPORT = $fb615b1b527081388b3886dea9b01$exports >= 51 || !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    var array = [];
    array[$fb4e8a65dffdbdf5ff31b5c5998d808a$var$IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var $fb4e8a65dffdbdf5ff31b5c5998d808a$var$SPECIES_SUPPORT = $cada630aaf742ef2f368576964fd76$exports('concat');
  var $fb4e8a65dffdbdf5ff31b5c5998d808a$var$isConcatSpreadable = function (O) {
    if (!$ce5aa73a2f4131a4f5ee32067e6336$exports(O)) return false;
    var spreadable = O[$fb4e8a65dffdbdf5ff31b5c5998d808a$var$IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : $a8f3970f2c7d9372e6992817f1d$exports(O);
  };
  var $fb4e8a65dffdbdf5ff31b5c5998d808a$var$FORCED = !$fb4e8a65dffdbdf5ff31b5c5998d808a$var$IS_CONCAT_SPREADABLE_SUPPORT || !$fb4e8a65dffdbdf5ff31b5c5998d808a$var$SPECIES_SUPPORT;

  // `Array.prototype.concat` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    proto: true,
    forced: $fb4e8a65dffdbdf5ff31b5c5998d808a$var$FORCED
  }, {
    concat: function concat(arg) {
      // eslint-disable-line no-unused-vars
      var O = $cc8d97c6287a31e609e67fc971001f$exports(this);
      var A = $bc8551fc8d16cc98c16167c614659138$exports(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if ($fb4e8a65dffdbdf5ff31b5c5998d808a$var$isConcatSpreadable(E)) {
          len = $df129385d5f4540f45d9004e6da0d$exports(E.length);
          if (n + len > $fb4e8a65dffdbdf5ff31b5c5998d808a$var$MAX_SAFE_INTEGER) throw TypeError($fb4e8a65dffdbdf5ff31b5c5998d808a$var$MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          for (k = 0; k < len; k++, n++) if (k in E) $cb0cd31bd5a8ea8a840ab8e2fbe71$exports(A, n, E[k]);
        } else {
          if (n >= $fb4e8a65dffdbdf5ff31b5c5998d808a$var$MAX_SAFE_INTEGER) throw TypeError($fb4e8a65dffdbdf5ff31b5c5998d808a$var$MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          $cb0cd31bd5a8ea8a840ab8e2fbe71$exports(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.copy-within.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\array-copy-within.js
  var $cac3dbd9eaefcf8db88e23dc7cfedb7a$exports = {};
  var $cac3dbd9eaefcf8db88e23dc7cfedb7a$var$min = Math.min;

  // `Array.prototype.copyWithin` method implementation
  // https://tc39.github.io/ecma262/#sec-array.prototype.copywithin
  $cac3dbd9eaefcf8db88e23dc7cfedb7a$exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
    var O = $cc8d97c6287a31e609e67fc971001f$exports(this);
    var len = $df129385d5f4540f45d9004e6da0d$exports(O.length);
    var to = $fa4d6094d01aacc8da63324cbdee87$exports(target, len);
    var from = $fa4d6094d01aacc8da63324cbdee87$exports(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = $cac3dbd9eaefcf8db88e23dc7cfedb7a$var$min((end === undefined ? len : $fa4d6094d01aacc8da63324cbdee87$exports(end, len)) - from, len - to);
    var inc = 1;
    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }
    while (count-- > 0) {
      if (from in O) O[to] = O[from];else delete O[to];
      to += inc;
      from += inc;
    }
    return O;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\add-to-unscopables.js
  var $eb2a72010d084bd9d318f6ee4fab2ccb$exports = {};
  var $eb2a72010d084bd9d318f6ee4fab2ccb$var$UNSCOPABLES = $a241c8cf065084cf6d499662389d097$exports('unscopables');
  var $eb2a72010d084bd9d318f6ee4fab2ccb$var$ArrayPrototype = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  if ($eb2a72010d084bd9d318f6ee4fab2ccb$var$ArrayPrototype[$eb2a72010d084bd9d318f6ee4fab2ccb$var$UNSCOPABLES] == undefined) {
    $e0cd0bce67aea07baa689ea10527$export$f($eb2a72010d084bd9d318f6ee4fab2ccb$var$ArrayPrototype, $eb2a72010d084bd9d318f6ee4fab2ccb$var$UNSCOPABLES, {
      configurable: true,
      value: $a968e88b66c89954fb6a8439bd2$exports(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  $eb2a72010d084bd9d318f6ee4fab2ccb$exports = function (key) {
    $eb2a72010d084bd9d318f6ee4fab2ccb$var$ArrayPrototype[$eb2a72010d084bd9d318f6ee4fab2ccb$var$UNSCOPABLES][key] = true;
  };
  // `Array.prototype.copyWithin` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.copywithin
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    proto: true
  }, {
    copyWithin: $cac3dbd9eaefcf8db88e23dc7cfedb7a$exports
  });

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  $eb2a72010d084bd9d318f6ee4fab2ccb$exports('copyWithin'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.fill.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\array-fill.js
  var $e05f80abb07b929ffb652f47e7fdf8$exports = {};
  // `Array.prototype.fill` method implementation
  // https://tc39.github.io/ecma262/#sec-array.prototype.fill
  $e05f80abb07b929ffb652f47e7fdf8$exports = function fill(value /* , start = 0, end = @length */) {
    var O = $cc8d97c6287a31e609e67fc971001f$exports(this);
    var length = $df129385d5f4540f45d9004e6da0d$exports(O.length);
    var argumentsLength = arguments.length;
    var index = $fa4d6094d01aacc8da63324cbdee87$exports(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : $fa4d6094d01aacc8da63324cbdee87$exports(end, length);
    while (endPos > index) O[index++] = value;
    return O;
  };
  // `Array.prototype.fill` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.fill
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    proto: true
  }, {
    fill: $e05f80abb07b929ffb652f47e7fdf8$exports
  });

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  $eb2a72010d084bd9d318f6ee4fab2ccb$exports('fill'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.filter.js
  var $cacb24910ecf686e41b70e3deb9528b3$var$$filter = $a44239821dbd12c71742ad33b885$exports.filter;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\array-method-uses-to-length.js
  var $dc944bcf7ca9382c22a7882b254f2f36$exports = {};
  var $dc944bcf7ca9382c22a7882b254f2f36$var$defineProperty = Object.defineProperty;
  var $dc944bcf7ca9382c22a7882b254f2f36$var$cache = {};
  var $dc944bcf7ca9382c22a7882b254f2f36$var$thrower = function (it) {
    throw it;
  };
  $dc944bcf7ca9382c22a7882b254f2f36$exports = function (METHOD_NAME, options) {
    if ($fb61ad628fb3464a4b59a2997dacf0$exports($dc944bcf7ca9382c22a7882b254f2f36$var$cache, METHOD_NAME)) return $dc944bcf7ca9382c22a7882b254f2f36$var$cache[METHOD_NAME];
    if (!options) options = {};
    var method = [][METHOD_NAME];
    var ACCESSORS = $fb61ad628fb3464a4b59a2997dacf0$exports(options, 'ACCESSORS') ? options.ACCESSORS : false;
    var argument0 = $fb61ad628fb3464a4b59a2997dacf0$exports(options, 0) ? options[0] : $dc944bcf7ca9382c22a7882b254f2f36$var$thrower;
    var argument1 = $fb61ad628fb3464a4b59a2997dacf0$exports(options, 1) ? options[1] : undefined;
    return $dc944bcf7ca9382c22a7882b254f2f36$var$cache[METHOD_NAME] = !!method && !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
      if (ACCESSORS && !$a7c68cb8fd81a83c8a53a82a3f122f3e$exports) return true;
      var O = {
        length: -1
      };
      if (ACCESSORS) $dc944bcf7ca9382c22a7882b254f2f36$var$defineProperty(O, 1, {
        enumerable: true,
        get: $dc944bcf7ca9382c22a7882b254f2f36$var$thrower
      });else O[1] = 1;
      method.call(O, argument0, argument1);
    });
  };
  var $cacb24910ecf686e41b70e3deb9528b3$var$HAS_SPECIES_SUPPORT = $cada630aaf742ef2f368576964fd76$exports('filter');
  // Edge 14- issue
  var $cacb24910ecf686e41b70e3deb9528b3$var$USES_TO_LENGTH = $dc944bcf7ca9382c22a7882b254f2f36$exports('filter');

  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    proto: true,
    forced: !$cacb24910ecf686e41b70e3deb9528b3$var$HAS_SPECIES_SUPPORT || !$cacb24910ecf686e41b70e3deb9528b3$var$USES_TO_LENGTH
  }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $cacb24910ecf686e41b70e3deb9528b3$var$$filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.find.js
  var $bda199fd1a0861d0ef65a07d006c570$var$$find = $a44239821dbd12c71742ad33b885$exports.find;
  var $bda199fd1a0861d0ef65a07d006c570$var$FIND = 'find';
  var $bda199fd1a0861d0ef65a07d006c570$var$SKIPS_HOLES = true;
  var $bda199fd1a0861d0ef65a07d006c570$var$USES_TO_LENGTH = $dc944bcf7ca9382c22a7882b254f2f36$exports($bda199fd1a0861d0ef65a07d006c570$var$FIND);

  // Shouldn't skip holes
  if ($bda199fd1a0861d0ef65a07d006c570$var$FIND in []) Array(1)[$bda199fd1a0861d0ef65a07d006c570$var$FIND](function () {
    $bda199fd1a0861d0ef65a07d006c570$var$SKIPS_HOLES = false;
  });

  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    proto: true,
    forced: $bda199fd1a0861d0ef65a07d006c570$var$SKIPS_HOLES || !$bda199fd1a0861d0ef65a07d006c570$var$USES_TO_LENGTH
  }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $bda199fd1a0861d0ef65a07d006c570$var$$find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  $eb2a72010d084bd9d318f6ee4fab2ccb$exports($bda199fd1a0861d0ef65a07d006c570$var$FIND); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.find-index.js
  var $dc4fee07b1d4396e83aeecf38ec7098$var$$findIndex = $a44239821dbd12c71742ad33b885$exports.findIndex;
  var $dc4fee07b1d4396e83aeecf38ec7098$var$FIND_INDEX = 'findIndex';
  var $dc4fee07b1d4396e83aeecf38ec7098$var$SKIPS_HOLES = true;
  var $dc4fee07b1d4396e83aeecf38ec7098$var$USES_TO_LENGTH = $dc944bcf7ca9382c22a7882b254f2f36$exports($dc4fee07b1d4396e83aeecf38ec7098$var$FIND_INDEX);

  // Shouldn't skip holes
  if ($dc4fee07b1d4396e83aeecf38ec7098$var$FIND_INDEX in []) Array(1)[$dc4fee07b1d4396e83aeecf38ec7098$var$FIND_INDEX](function () {
    $dc4fee07b1d4396e83aeecf38ec7098$var$SKIPS_HOLES = false;
  });

  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findindex
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    proto: true,
    forced: $dc4fee07b1d4396e83aeecf38ec7098$var$SKIPS_HOLES || !$dc4fee07b1d4396e83aeecf38ec7098$var$USES_TO_LENGTH
  }, {
    findIndex: function findIndex(callbackfn /* , that = undefined */) {
      return $dc4fee07b1d4396e83aeecf38ec7098$var$$findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  $eb2a72010d084bd9d318f6ee4fab2ccb$exports($dc4fee07b1d4396e83aeecf38ec7098$var$FIND_INDEX); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.flat.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\flatten-into-array.js
  var $afba13e0dd2f0424d8b9a8b36a0$exports = {};
  // `FlattenIntoArray` abstract operation
  // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
  var $afba13e0dd2f0424d8b9a8b36a0$var$flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? $d098e725d461df6003aa3baf1810a74$exports(mapper, thisArg, 3) : false;
    var element;
    while (sourceIndex < sourceLen) {
      if (sourceIndex in source) {
        element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
        if (depth > 0 && $a8f3970f2c7d9372e6992817f1d$exports(element)) {
          targetIndex = $afba13e0dd2f0424d8b9a8b36a0$var$flattenIntoArray(target, original, element, $df129385d5f4540f45d9004e6da0d$exports(element.length), targetIndex, depth - 1) - 1;
        } else {
          if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
          target[targetIndex] = element;
        }
        targetIndex++;
      }
      sourceIndex++;
    }
    return targetIndex;
  };
  $afba13e0dd2f0424d8b9a8b36a0$exports = $afba13e0dd2f0424d8b9a8b36a0$var$flattenIntoArray;
  // `Array.prototype.flat` method
  // https://github.com/tc39/proposal-flatMap
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    proto: true
  }, {
    flat: function flat( /* depthArg = 1 */
    ) {
      var depthArg = arguments.length ? arguments[0] : undefined;
      var O = $cc8d97c6287a31e609e67fc971001f$exports(this);
      var sourceLen = $df129385d5f4540f45d9004e6da0d$exports(O.length);
      var A = $bc8551fc8d16cc98c16167c614659138$exports(O, 0);
      A.length = $afba13e0dd2f0424d8b9a8b36a0$exports(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : $d094f929ef4c732d238eb970cba7b45$exports(depthArg));
      return A;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.flat-map.js
  // `Array.prototype.flatMap` method
  // https://github.com/tc39/proposal-flatMap
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    proto: true
  }, {
    flatMap: function flatMap(callbackfn /* , thisArg */) {
      var O = $cc8d97c6287a31e609e67fc971001f$exports(this);
      var sourceLen = $df129385d5f4540f45d9004e6da0d$exports(O.length);
      var A;
      $dd1737e30ac45587cfd439eb433a7a$exports(callbackfn);
      A = $bc8551fc8d16cc98c16167c614659138$exports(O, 0);
      A.length = $afba13e0dd2f0424d8b9a8b36a0$exports(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      return A;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.from.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\array-from.js
  var $b21247ed923af71bc4cfac981f77f5$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\call-with-safe-iteration-closing.js
  var $ab8f093634e66910b881f0ac3fcb1c$exports = {};
  // call something on iterator step with safe closing on error
  $ab8f093634e66910b881f0ac3fcb1c$exports = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn($ca96f020fbb32dd48b2236cb9c$exports(value)[0], value[1]) : fn(value);
      // 7.4.6 IteratorClose(iterator, completion)
    } catch (error) {
      var returnMethod = iterator['return'];
      if (returnMethod !== undefined) $ca96f020fbb32dd48b2236cb9c$exports(returnMethod.call(iterator));
      throw error;
    }
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\is-array-iterator-method.js
  var $c4a2281a8686657ad2b150da80d08d57$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\iterators.js
  var $e3150c721497614e7c0683c19e22bcb$exports = {};
  $e3150c721497614e7c0683c19e22bcb$exports = {};
  var $c4a2281a8686657ad2b150da80d08d57$var$ITERATOR = $a241c8cf065084cf6d499662389d097$exports('iterator');
  var $c4a2281a8686657ad2b150da80d08d57$var$ArrayPrototype = Array.prototype;

  // check on default Array iterator
  $c4a2281a8686657ad2b150da80d08d57$exports = function (it) {
    return it !== undefined && ($e3150c721497614e7c0683c19e22bcb$exports.Array === it || $c4a2281a8686657ad2b150da80d08d57$var$ArrayPrototype[$c4a2281a8686657ad2b150da80d08d57$var$ITERATOR] === it);
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\get-iterator-method.js
  var $d19886d1d6e229ee23952976627e4f4$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\classof.js
  var $ef9d499d695cd246c34e60e7d380677e$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\to-string-tag-support.js
  var $b7021ffb90cf564121c3b19bbc73$exports = {};
  var $b7021ffb90cf564121c3b19bbc73$var$TO_STRING_TAG = $a241c8cf065084cf6d499662389d097$exports('toStringTag');
  var $b7021ffb90cf564121c3b19bbc73$var$test = {};
  $b7021ffb90cf564121c3b19bbc73$var$test[$b7021ffb90cf564121c3b19bbc73$var$TO_STRING_TAG] = 'z';
  $b7021ffb90cf564121c3b19bbc73$exports = String($b7021ffb90cf564121c3b19bbc73$var$test) === '[object z]';
  var $ef9d499d695cd246c34e60e7d380677e$var$TO_STRING_TAG = $a241c8cf065084cf6d499662389d097$exports('toStringTag');
  // ES3 wrong here
  var $ef9d499d695cd246c34e60e7d380677e$var$CORRECT_ARGUMENTS = $b499f0f4b947123008cbd2ef011785$exports(function () {
    return arguments;
  }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var $ef9d499d695cd246c34e60e7d380677e$var$tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) {/* empty */}
  };

  // getting tag from ES6+ `Object.prototype.toString`
  $ef9d499d695cd246c34e60e7d380677e$exports = $b7021ffb90cf564121c3b19bbc73$exports ? $b499f0f4b947123008cbd2ef011785$exports : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = $ef9d499d695cd246c34e60e7d380677e$var$tryGet(O = Object(it), $ef9d499d695cd246c34e60e7d380677e$var$TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : $ef9d499d695cd246c34e60e7d380677e$var$CORRECT_ARGUMENTS ? $b499f0f4b947123008cbd2ef011785$exports(O)
    // ES3 arguments fallback
    : (result = $b499f0f4b947123008cbd2ef011785$exports(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };
  var $d19886d1d6e229ee23952976627e4f4$var$ITERATOR = $a241c8cf065084cf6d499662389d097$exports('iterator');
  $d19886d1d6e229ee23952976627e4f4$exports = function (it) {
    if (it != undefined) return it[$d19886d1d6e229ee23952976627e4f4$var$ITERATOR] || it['@@iterator'] || $e3150c721497614e7c0683c19e22bcb$exports[$ef9d499d695cd246c34e60e7d380677e$exports(it)];
  };
  // `Array.from` method implementation
  // https://tc39.github.io/ecma262/#sec-array.from
  $b21247ed923af71bc4cfac981f77f5$exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = $cc8d97c6287a31e609e67fc971001f$exports(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = $d19886d1d6e229ee23952976627e4f4$exports(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    if (mapping) mapfn = $d098e725d461df6003aa3baf1810a74$exports(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod != undefined && !(C == Array && $c4a2281a8686657ad2b150da80d08d57$exports(iteratorMethod))) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      result = new C();
      for (; !(step = next.call(iterator)).done; index++) {
        value = mapping ? $ab8f093634e66910b881f0ac3fcb1c$exports(iterator, mapfn, [step.value, index], true) : step.value;
        $cb0cd31bd5a8ea8a840ab8e2fbe71$exports(result, index, value);
      }
    } else {
      length = $df129385d5f4540f45d9004e6da0d$exports(O.length);
      result = new C(length);
      for (; length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        $cb0cd31bd5a8ea8a840ab8e2fbe71$exports(result, index, value);
      }
    }
    result.length = index;
    return result;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\check-correctness-of-iteration.js
  var $ff50355ab8eb1a915fe785e1d83073e5$exports = {};
  var $ff50355ab8eb1a915fe785e1d83073e5$var$ITERATOR = $a241c8cf065084cf6d499662389d097$exports('iterator');
  var $ff50355ab8eb1a915fe785e1d83073e5$var$SAFE_CLOSING = false;
  try {
    var $ff50355ab8eb1a915fe785e1d83073e5$var$called = 0;
    var $ff50355ab8eb1a915fe785e1d83073e5$var$iteratorWithReturn = {
      next: function () {
        return {
          done: !!$ff50355ab8eb1a915fe785e1d83073e5$var$called++
        };
      },
      'return': function () {
        $ff50355ab8eb1a915fe785e1d83073e5$var$SAFE_CLOSING = true;
      }
    };
    $ff50355ab8eb1a915fe785e1d83073e5$var$iteratorWithReturn[$ff50355ab8eb1a915fe785e1d83073e5$var$ITERATOR] = function () {
      return this;
    };
    // eslint-disable-next-line no-throw-literal
    Array.from($ff50355ab8eb1a915fe785e1d83073e5$var$iteratorWithReturn, function () {
      throw 2;
    });
  } catch (error) {/* empty */}
  $ff50355ab8eb1a915fe785e1d83073e5$exports = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !$ff50355ab8eb1a915fe785e1d83073e5$var$SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[$ff50355ab8eb1a915fe785e1d83073e5$var$ITERATOR] = function () {
        return {
          next: function () {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };
      exec(object);
    } catch (error) {/* empty */}
    return ITERATION_SUPPORT;
  };
  var $fbe0ba4b3e7860e9494bd4791bf5b9fa$var$INCORRECT_ITERATION = !$ff50355ab8eb1a915fe785e1d83073e5$exports(function (iterable) {
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.github.io/ecma262/#sec-array.from
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    stat: true,
    forced: $fbe0ba4b3e7860e9494bd4791bf5b9fa$var$INCORRECT_ITERATION
  }, {
    from: $b21247ed923af71bc4cfac981f77f5$exports
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.includes.js
  var $f776f40c1ef8c0a04c4037a78$var$$includes = $a1d725b9b45bb416ceb1ec2e84dcc$exports.includes;
  var $f776f40c1ef8c0a04c4037a78$var$USES_TO_LENGTH = $dc944bcf7ca9382c22a7882b254f2f36$exports('indexOf', {
    ACCESSORS: true,
    1: 0
  });

  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    proto: true,
    forced: !$f776f40c1ef8c0a04c4037a78$var$USES_TO_LENGTH
  }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $f776f40c1ef8c0a04c4037a78$var$$includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  $eb2a72010d084bd9d318f6ee4fab2ccb$exports('includes');
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.iterator.js
  var $b07a75778f5206bb0f3d2b9a1642a55$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\define-iterator.js
  var $ceee6a22777aa8b0d6ccfa1bc8048b4$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\create-iterator-constructor.js
  var $a982263142df3569fafe9564433a3760$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\iterators-core.js
  var $abea5fd2b34adadabe38bcbc6407e796$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-get-prototype-of.js
  var $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\correct-prototype-getter.js
  var $cc5dfedb42488db1845b3e42876a23b$exports = {};
  $cc5dfedb42488db1845b3e42876a23b$exports = !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    function F() {/* empty */}
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });
  var $ff8ba30449b22ad7fcaa2e5c15bd4e66$var$IE_PROTO = $bbc62ededb0e13a5c149ad01cf8$exports('IE_PROTO');
  var $ff8ba30449b22ad7fcaa2e5c15bd4e66$var$ObjectPrototype = Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.getprototypeof
  $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports = $cc5dfedb42488db1845b3e42876a23b$exports ? Object.getPrototypeOf : function (O) {
    O = $cc8d97c6287a31e609e67fc971001f$exports(O);
    if ($fb61ad628fb3464a4b59a2997dacf0$exports(O, $ff8ba30449b22ad7fcaa2e5c15bd4e66$var$IE_PROTO)) return O[$ff8ba30449b22ad7fcaa2e5c15bd4e66$var$IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }
    return O instanceof Object ? $ff8ba30449b22ad7fcaa2e5c15bd4e66$var$ObjectPrototype : null;
  };
  var $abea5fd2b34adadabe38bcbc6407e796$var$ITERATOR = $a241c8cf065084cf6d499662389d097$exports('iterator');
  var $abea5fd2b34adadabe38bcbc6407e796$var$BUGGY_SAFARI_ITERATORS = false;
  var $abea5fd2b34adadabe38bcbc6407e796$var$returnThis = function () {
    return this;
  };

  // `%IteratorPrototype%` object
  // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
  var $abea5fd2b34adadabe38bcbc6407e796$var$IteratorPrototype, $abea5fd2b34adadabe38bcbc6407e796$var$PrototypeOfArrayIteratorPrototype, $abea5fd2b34adadabe38bcbc6407e796$var$arrayIterator;
  if ([].keys) {
    $abea5fd2b34adadabe38bcbc6407e796$var$arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in $abea5fd2b34adadabe38bcbc6407e796$var$arrayIterator)) $abea5fd2b34adadabe38bcbc6407e796$var$BUGGY_SAFARI_ITERATORS = true;else {
      $abea5fd2b34adadabe38bcbc6407e796$var$PrototypeOfArrayIteratorPrototype = $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports($ff8ba30449b22ad7fcaa2e5c15bd4e66$exports($abea5fd2b34adadabe38bcbc6407e796$var$arrayIterator));
      if ($abea5fd2b34adadabe38bcbc6407e796$var$PrototypeOfArrayIteratorPrototype !== Object.prototype) $abea5fd2b34adadabe38bcbc6407e796$var$IteratorPrototype = $abea5fd2b34adadabe38bcbc6407e796$var$PrototypeOfArrayIteratorPrototype;
    }
  }
  if ($abea5fd2b34adadabe38bcbc6407e796$var$IteratorPrototype == undefined) $abea5fd2b34adadabe38bcbc6407e796$var$IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  if (!$f57ba62cba687e9257bf807714b47$exports && !$fb61ad628fb3464a4b59a2997dacf0$exports($abea5fd2b34adadabe38bcbc6407e796$var$IteratorPrototype, $abea5fd2b34adadabe38bcbc6407e796$var$ITERATOR)) {
    $cccb6b555b82a0b86f5e6c39c4b7c7b$exports($abea5fd2b34adadabe38bcbc6407e796$var$IteratorPrototype, $abea5fd2b34adadabe38bcbc6407e796$var$ITERATOR, $abea5fd2b34adadabe38bcbc6407e796$var$returnThis);
  }
  $abea5fd2b34adadabe38bcbc6407e796$exports = {
    IteratorPrototype: $abea5fd2b34adadabe38bcbc6407e796$var$IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: $abea5fd2b34adadabe38bcbc6407e796$var$BUGGY_SAFARI_ITERATORS
  };
  var $a982263142df3569fafe9564433a3760$var$IteratorPrototype = $abea5fd2b34adadabe38bcbc6407e796$exports.IteratorPrototype;
  var $a982263142df3569fafe9564433a3760$var$returnThis = function () {
    return this;
  };
  $a982263142df3569fafe9564433a3760$exports = function (IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = $a968e88b66c89954fb6a8439bd2$exports($a982263142df3569fafe9564433a3760$var$IteratorPrototype, {
      next: $c83efd2171483e9988d3cc48fb8a$exports(1, next)
    });
    $b44eaad080afd8b6cc975138b17db$exports(IteratorConstructor, TO_STRING_TAG, false, true);
    $e3150c721497614e7c0683c19e22bcb$exports[TO_STRING_TAG] = $a982263142df3569fafe9564433a3760$var$returnThis;
    return IteratorConstructor;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-set-prototype-of.js
  var $fc7c3cdaee9ffa16612f5bbf0d2a633$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\a-possible-prototype.js
  var $a70315bd713fa6b672079b20545cb$exports = {};
  $a70315bd713fa6b672079b20545cb$exports = function (it) {
    if (!$ce5aa73a2f4131a4f5ee32067e6336$exports(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    }
    return it;
  };
  // `Object.setPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  $fc7c3cdaee9ffa16612f5bbf0d2a633$exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {/* empty */}
    return function setPrototypeOf(O, proto) {
      $ca96f020fbb32dd48b2236cb9c$exports(O);
      $a70315bd713fa6b672079b20545cb$exports(proto);
      if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);
  var $ceee6a22777aa8b0d6ccfa1bc8048b4$var$IteratorPrototype = $abea5fd2b34adadabe38bcbc6407e796$exports.IteratorPrototype;
  var $ceee6a22777aa8b0d6ccfa1bc8048b4$var$BUGGY_SAFARI_ITERATORS = $abea5fd2b34adadabe38bcbc6407e796$exports.BUGGY_SAFARI_ITERATORS;
  var $ceee6a22777aa8b0d6ccfa1bc8048b4$var$ITERATOR = $a241c8cf065084cf6d499662389d097$exports('iterator');
  var $ceee6a22777aa8b0d6ccfa1bc8048b4$var$KEYS = 'keys';
  var $ceee6a22777aa8b0d6ccfa1bc8048b4$var$VALUES = 'values';
  var $ceee6a22777aa8b0d6ccfa1bc8048b4$var$ENTRIES = 'entries';
  var $ceee6a22777aa8b0d6ccfa1bc8048b4$var$returnThis = function () {
    return this;
  };
  $ceee6a22777aa8b0d6ccfa1bc8048b4$exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    $a982263142df3569fafe9564433a3760$exports(IteratorConstructor, NAME, next);
    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!$ceee6a22777aa8b0d6ccfa1bc8048b4$var$BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case $ceee6a22777aa8b0d6ccfa1bc8048b4$var$KEYS:
          return function keys() {
            return new IteratorConstructor(this, KIND);
          };
        case $ceee6a22777aa8b0d6ccfa1bc8048b4$var$VALUES:
          return function values() {
            return new IteratorConstructor(this, KIND);
          };
        case $ceee6a22777aa8b0d6ccfa1bc8048b4$var$ENTRIES:
          return function entries() {
            return new IteratorConstructor(this, KIND);
          };
      }
      return function () {
        return new IteratorConstructor(this);
      };
    };
    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[$ceee6a22777aa8b0d6ccfa1bc8048b4$var$ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !$ceee6a22777aa8b0d6ccfa1bc8048b4$var$BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports(anyNativeIterator.call(new Iterable()));
      if ($ceee6a22777aa8b0d6ccfa1bc8048b4$var$IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (!$f57ba62cba687e9257bf807714b47$exports && $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports(CurrentIteratorPrototype) !== $ceee6a22777aa8b0d6ccfa1bc8048b4$var$IteratorPrototype) {
          if ($fc7c3cdaee9ffa16612f5bbf0d2a633$exports) {
            $fc7c3cdaee9ffa16612f5bbf0d2a633$exports(CurrentIteratorPrototype, $ceee6a22777aa8b0d6ccfa1bc8048b4$var$IteratorPrototype);
          } else if (typeof CurrentIteratorPrototype[$ceee6a22777aa8b0d6ccfa1bc8048b4$var$ITERATOR] != 'function') {
            $cccb6b555b82a0b86f5e6c39c4b7c7b$exports(CurrentIteratorPrototype, $ceee6a22777aa8b0d6ccfa1bc8048b4$var$ITERATOR, $ceee6a22777aa8b0d6ccfa1bc8048b4$var$returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        $b44eaad080afd8b6cc975138b17db$exports(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
        if ($f57ba62cba687e9257bf807714b47$exports) $e3150c721497614e7c0683c19e22bcb$exports[TO_STRING_TAG] = $ceee6a22777aa8b0d6ccfa1bc8048b4$var$returnThis;
      }
    }

    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEFAULT == $ceee6a22777aa8b0d6ccfa1bc8048b4$var$VALUES && nativeIterator && nativeIterator.name !== $ceee6a22777aa8b0d6ccfa1bc8048b4$var$VALUES) {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() {
        return nativeIterator.call(this);
      };
    }

    // define iterator
    if ((!$f57ba62cba687e9257bf807714b47$exports || FORCED) && IterablePrototype[$ceee6a22777aa8b0d6ccfa1bc8048b4$var$ITERATOR] !== defaultIterator) {
      $cccb6b555b82a0b86f5e6c39c4b7c7b$exports(IterablePrototype, $ceee6a22777aa8b0d6ccfa1bc8048b4$var$ITERATOR, defaultIterator);
    }
    $e3150c721497614e7c0683c19e22bcb$exports[NAME] = defaultIterator;

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod($ceee6a22777aa8b0d6ccfa1bc8048b4$var$VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod($ceee6a22777aa8b0d6ccfa1bc8048b4$var$KEYS),
        entries: getIterationMethod($ceee6a22777aa8b0d6ccfa1bc8048b4$var$ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if ($ceee6a22777aa8b0d6ccfa1bc8048b4$var$BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          $e3c8a1361cc0783bc835b9e100a3660b$exports(IterablePrototype, KEY, methods[KEY]);
        }
      } else $da20139527b9570444c7d5c06ae45fa2$exports({
        target: NAME,
        proto: true,
        forced: $ceee6a22777aa8b0d6ccfa1bc8048b4$var$BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
      }, methods);
    }
    return methods;
  };
  var $b07a75778f5206bb0f3d2b9a1642a55$var$ARRAY_ITERATOR = 'Array Iterator';
  var $b07a75778f5206bb0f3d2b9a1642a55$var$setInternalState = $c9333b419e2d291fa24a6e5282e596$exports.set;
  var $b07a75778f5206bb0f3d2b9a1642a55$var$getInternalState = $c9333b419e2d291fa24a6e5282e596$exports.getterFor($b07a75778f5206bb0f3d2b9a1642a55$var$ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.github.io/ecma262/#sec-createarrayiterator
  $b07a75778f5206bb0f3d2b9a1642a55$exports = $ceee6a22777aa8b0d6ccfa1bc8048b4$exports(Array, 'Array', function (iterated, kind) {
    $b07a75778f5206bb0f3d2b9a1642a55$var$setInternalState(this, {
      type: $b07a75778f5206bb0f3d2b9a1642a55$var$ARRAY_ITERATOR,
      target: $d3edb8b5b29142657e301b5e7cecac5$exports(iterated),
      // target
      index: 0,
      // next index
      kind: kind // kind
    });
    // `%ArrayIteratorPrototype%.next` method
    // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = $b07a75778f5206bb0f3d2b9a1642a55$var$getInternalState(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return {
        value: undefined,
        done: true
      };
    }
    if (kind == 'keys') return {
      value: index,
      done: false
    };
    if (kind == 'values') return {
      value: target[index],
      done: false
    };
    return {
      value: [index, target[index]],
      done: false
    };
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
  $e3150c721497614e7c0683c19e22bcb$exports.Arguments = $e3150c721497614e7c0683c19e22bcb$exports.Array;

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  $eb2a72010d084bd9d318f6ee4fab2ccb$exports('keys');
  $eb2a72010d084bd9d318f6ee4fab2ccb$exports('values');
  $eb2a72010d084bd9d318f6ee4fab2ccb$exports('entries'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.join.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\array-method-is-strict.js
  var $bb116b1b623648e29417fe2a9a96a295$exports = {};
  $bb116b1b623648e29417fe2a9a96a295$exports = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && $efaceca3db1203b03f84edf56feaf8f$exports(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal
      method.call(null, argument || function () {
        throw 1;
      }, 1);
    });
  };
  var $a6a58fdc10f8e3e5de3ed628210640bd$var$nativeJoin = [].join;
  var $a6a58fdc10f8e3e5de3ed628210640bd$var$ES3_STRINGS = $c8c30ff7b4b337039de62128343f6647$exports != Object;
  var $a6a58fdc10f8e3e5de3ed628210640bd$var$STRICT_METHOD = $bb116b1b623648e29417fe2a9a96a295$exports('join', ',');

  // `Array.prototype.join` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.join
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    proto: true,
    forced: $a6a58fdc10f8e3e5de3ed628210640bd$var$ES3_STRINGS || !$a6a58fdc10f8e3e5de3ed628210640bd$var$STRICT_METHOD
  }, {
    join: function join(separator) {
      return $a6a58fdc10f8e3e5de3ed628210640bd$var$nativeJoin.call($d3edb8b5b29142657e301b5e7cecac5$exports(this), separator === undefined ? ',' : separator);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.map.js
  var $ed3ce488bf12822080e3ebab7326444$var$$map = $a44239821dbd12c71742ad33b885$exports.map;
  var $ed3ce488bf12822080e3ebab7326444$var$HAS_SPECIES_SUPPORT = $cada630aaf742ef2f368576964fd76$exports('map');
  // FF49- issue
  var $ed3ce488bf12822080e3ebab7326444$var$USES_TO_LENGTH = $dc944bcf7ca9382c22a7882b254f2f36$exports('map');

  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    proto: true,
    forced: !$ed3ce488bf12822080e3ebab7326444$var$HAS_SPECIES_SUPPORT || !$ed3ce488bf12822080e3ebab7326444$var$USES_TO_LENGTH
  }, {
    map: function map(callbackfn /* , thisArg */) {
      return $ed3ce488bf12822080e3ebab7326444$var$$map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.of.js
  var $ca07592656666ee78906c7401c5$var$ISNT_GENERIC = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    function F() {/* empty */}
    return !(Array.of.call(F) instanceof F);
  });

  // `Array.of` method
  // https://tc39.github.io/ecma262/#sec-array.of
  // WebKit Array.of isn't generic
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    stat: true,
    forced: $ca07592656666ee78906c7401c5$var$ISNT_GENERIC
  }, {
    of: function of( /* ...args */
    ) {
      var index = 0;
      var argumentsLength = arguments.length;
      var result = new (typeof this == 'function' ? this : Array)(argumentsLength);
      while (argumentsLength > index) $cb0cd31bd5a8ea8a840ab8e2fbe71$exports(result, index, arguments[index++]);
      result.length = argumentsLength;
      return result;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.slice.js
  var $b42e37f4e536560c287d72135bb$var$HAS_SPECIES_SUPPORT = $cada630aaf742ef2f368576964fd76$exports('slice');
  var $b42e37f4e536560c287d72135bb$var$USES_TO_LENGTH = $dc944bcf7ca9382c22a7882b254f2f36$exports('slice', {
    ACCESSORS: true,
    0: 0,
    1: 2
  });
  var $b42e37f4e536560c287d72135bb$var$SPECIES = $a241c8cf065084cf6d499662389d097$exports('species');
  var $b42e37f4e536560c287d72135bb$var$nativeSlice = [].slice;
  var $b42e37f4e536560c287d72135bb$var$max = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    proto: true,
    forced: !$b42e37f4e536560c287d72135bb$var$HAS_SPECIES_SUPPORT || !$b42e37f4e536560c287d72135bb$var$USES_TO_LENGTH
  }, {
    slice: function slice(start, end) {
      var O = $d3edb8b5b29142657e301b5e7cecac5$exports(this);
      var length = $df129385d5f4540f45d9004e6da0d$exports(O.length);
      var k = $fa4d6094d01aacc8da63324cbdee87$exports(start, length);
      var fin = $fa4d6094d01aacc8da63324cbdee87$exports(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if ($a8f3970f2c7d9372e6992817f1d$exports(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (typeof Constructor == 'function' && (Constructor === Array || $a8f3970f2c7d9372e6992817f1d$exports(Constructor.prototype))) {
          Constructor = undefined;
        } else if ($ce5aa73a2f4131a4f5ee32067e6336$exports(Constructor)) {
          Constructor = Constructor[$b42e37f4e536560c287d72135bb$var$SPECIES];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === Array || Constructor === undefined) {
          return $b42e37f4e536560c287d72135bb$var$nativeSlice.call(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? Array : Constructor)($b42e37f4e536560c287d72135bb$var$max(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) $cb0cd31bd5a8ea8a840ab8e2fbe71$exports(result, n, O[k]);
      result.length = n;
      return result;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.sort.js
  var $d50e545fe21493d1c551c1a067984cb$var$test = [];
  var $d50e545fe21493d1c551c1a067984cb$var$nativeSort = $d50e545fe21493d1c551c1a067984cb$var$test.sort;

  // IE8-
  var $d50e545fe21493d1c551c1a067984cb$var$FAILS_ON_UNDEFINED = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $d50e545fe21493d1c551c1a067984cb$var$test.sort(undefined);
  });
  // V8 bug
  var $d50e545fe21493d1c551c1a067984cb$var$FAILS_ON_NULL = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $d50e545fe21493d1c551c1a067984cb$var$test.sort(null);
  });
  // Old WebKit
  var $d50e545fe21493d1c551c1a067984cb$var$STRICT_METHOD = $bb116b1b623648e29417fe2a9a96a295$exports('sort');
  var $d50e545fe21493d1c551c1a067984cb$var$FORCED = $d50e545fe21493d1c551c1a067984cb$var$FAILS_ON_UNDEFINED || !$d50e545fe21493d1c551c1a067984cb$var$FAILS_ON_NULL || !$d50e545fe21493d1c551c1a067984cb$var$STRICT_METHOD;

  // `Array.prototype.sort` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.sort
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    proto: true,
    forced: $d50e545fe21493d1c551c1a067984cb$var$FORCED
  }, {
    sort: function sort(comparefn) {
      return comparefn === undefined ? $d50e545fe21493d1c551c1a067984cb$var$nativeSort.call($cc8d97c6287a31e609e67fc971001f$exports(this)) : $d50e545fe21493d1c551c1a067984cb$var$nativeSort.call($cc8d97c6287a31e609e67fc971001f$exports(this), $dd1737e30ac45587cfd439eb433a7a$exports(comparefn));
    }
  });
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\set-species.js
  var $f554410d1aff73003a341f161b396478$exports = {};
  var $f554410d1aff73003a341f161b396478$var$SPECIES = $a241c8cf065084cf6d499662389d097$exports('species');
  $f554410d1aff73003a341f161b396478$exports = function (CONSTRUCTOR_NAME) {
    var Constructor = $aeb1e6b80ef7a537d3287f35b9b88$exports(CONSTRUCTOR_NAME);
    var defineProperty = $e0cd0bce67aea07baa689ea10527$export$f;
    if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports && Constructor && !Constructor[$f554410d1aff73003a341f161b396478$var$SPECIES]) {
      defineProperty(Constructor, $f554410d1aff73003a341f161b396478$var$SPECIES, {
        configurable: true,
        get: function () {
          return this;
        }
      });
    }
  }; // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.species.js
  // `Array[@@species]` getter
  // https://tc39.github.io/ecma262/#sec-get-array-@@species
  $f554410d1aff73003a341f161b396478$exports('Array'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.splice.js
  var $ff4bd952bafdde976e515b70a63652$var$HAS_SPECIES_SUPPORT = $cada630aaf742ef2f368576964fd76$exports('splice');
  var $ff4bd952bafdde976e515b70a63652$var$USES_TO_LENGTH = $dc944bcf7ca9382c22a7882b254f2f36$exports('splice', {
    ACCESSORS: true,
    0: 0,
    1: 2
  });
  var $ff4bd952bafdde976e515b70a63652$var$max = Math.max;
  var $ff4bd952bafdde976e515b70a63652$var$min = Math.min;
  var $ff4bd952bafdde976e515b70a63652$var$MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var $ff4bd952bafdde976e515b70a63652$var$MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

  // `Array.prototype.splice` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Array',
    proto: true,
    forced: !$ff4bd952bafdde976e515b70a63652$var$HAS_SPECIES_SUPPORT || !$ff4bd952bafdde976e515b70a63652$var$USES_TO_LENGTH
  }, {
    splice: function splice(start, deleteCount /* , ...items */) {
      var O = $cc8d97c6287a31e609e67fc971001f$exports(this);
      var len = $df129385d5f4540f45d9004e6da0d$exports(O.length);
      var actualStart = $fa4d6094d01aacc8da63324cbdee87$exports(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;
      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = $ff4bd952bafdde976e515b70a63652$var$min($ff4bd952bafdde976e515b70a63652$var$max($d094f929ef4c732d238eb970cba7b45$exports(deleteCount), 0), len - actualStart);
      }
      if (len + insertCount - actualDeleteCount > $ff4bd952bafdde976e515b70a63652$var$MAX_SAFE_INTEGER) {
        throw TypeError($ff4bd952bafdde976e515b70a63652$var$MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
      }
      A = $bc8551fc8d16cc98c16167c614659138$exports(O, actualDeleteCount);
      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) $cb0cd31bd5a8ea8a840ab8e2fbe71$exports(A, k, O[from]);
      }
      A.length = actualDeleteCount;
      if (insertCount < actualDeleteCount) {
        for (k = actualStart; k < len - actualDeleteCount; k++) {
          from = k + actualDeleteCount;
          to = k + insertCount;
          if (from in O) O[to] = O[from];else delete O[to];
        }
        for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];else delete O[to];
        }
      }
      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }
      O.length = len - actualDeleteCount + insertCount;
      return A;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.unscopables.flat.js
  // this method was added to unscopables after implementation
  // in popular engines, so it's moved to a separate module
  $eb2a72010d084bd9d318f6ee4fab2ccb$exports('flat'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array.unscopables.flat-map.js
  // this method was added to unscopables after implementation
  // in popular engines, so it's moved to a separate module
  $eb2a72010d084bd9d318f6ee4fab2ccb$exports('flatMap'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.array-buffer.constructor.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\array-buffer.js
  var $d3585d522f61005dbeeb27c46c3a1$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\array-buffer-native.js
  var $a7a8c6084ba7f3e4de9f9c34dcfc110e$exports = {};
  $a7a8c6084ba7f3e4de9f9c34dcfc110e$exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\redefine-all.js
  var $ae410a5c6b0e1b5259e34ff96d957254$exports = {};
  $ae410a5c6b0e1b5259e34ff96d957254$exports = function (target, src, options) {
    for (var key in src) $e3c8a1361cc0783bc835b9e100a3660b$exports(target, key, src[key], options);
    return target;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\an-instance.js
  var $e359134306bb9a3c781645bdfc0c5d18$exports = {};
  $e359134306bb9a3c781645bdfc0c5d18$exports = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) {
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    }
    return it;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\to-index.js
  var $b7ca1fa9f1d9d6cae98d59d0bb$exports = {};
  // `ToIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-toindex
  $b7ca1fa9f1d9d6cae98d59d0bb$exports = function (it) {
    if (it === undefined) return 0;
    var number = $d094f929ef4c732d238eb970cba7b45$exports(it);
    var length = $df129385d5f4540f45d9004e6da0d$exports(number);
    if (number !== length) throw RangeError('Wrong length or index');
    return length;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\ieee754.js
  var $feceb7b6554adf7dfeb64271d12b4b1$exports = {};
  // IEEE754 conversions based on https://github.com/feross/ieee754
  // eslint-disable-next-line no-shadow-restricted-names
  var $feceb7b6554adf7dfeb64271d12b4b1$var$Infinity = 1 / 0;
  var $feceb7b6554adf7dfeb64271d12b4b1$var$abs = Math.abs;
  var $feceb7b6554adf7dfeb64271d12b4b1$var$pow = Math.pow;
  var $feceb7b6554adf7dfeb64271d12b4b1$var$floor = Math.floor;
  var $feceb7b6554adf7dfeb64271d12b4b1$var$log = Math.log;
  var $feceb7b6554adf7dfeb64271d12b4b1$var$LN2 = Math.LN2;
  var $feceb7b6554adf7dfeb64271d12b4b1$var$pack = function (number, mantissaLength, bytes) {
    var buffer = new Array(bytes);
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var rt = mantissaLength === 23 ? $feceb7b6554adf7dfeb64271d12b4b1$var$pow(2, -24) - $feceb7b6554adf7dfeb64271d12b4b1$var$pow(2, -77) : 0;
    var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
    var index = 0;
    var exponent, mantissa, c;
    number = $feceb7b6554adf7dfeb64271d12b4b1$var$abs(number);
    // eslint-disable-next-line no-self-compare
    if (number != number || number === $feceb7b6554adf7dfeb64271d12b4b1$var$Infinity) {
      // eslint-disable-next-line no-self-compare
      mantissa = number != number ? 1 : 0;
      exponent = eMax;
    } else {
      exponent = $feceb7b6554adf7dfeb64271d12b4b1$var$floor($feceb7b6554adf7dfeb64271d12b4b1$var$log(number) / $feceb7b6554adf7dfeb64271d12b4b1$var$LN2);
      if (number * (c = $feceb7b6554adf7dfeb64271d12b4b1$var$pow(2, -exponent)) < 1) {
        exponent--;
        c *= 2;
      }
      if (exponent + eBias >= 1) {
        number += rt / c;
      } else {
        number += rt * $feceb7b6554adf7dfeb64271d12b4b1$var$pow(2, 1 - eBias);
      }
      if (number * c >= 2) {
        exponent++;
        c /= 2;
      }
      if (exponent + eBias >= eMax) {
        mantissa = 0;
        exponent = eMax;
      } else if (exponent + eBias >= 1) {
        mantissa = (number * c - 1) * $feceb7b6554adf7dfeb64271d12b4b1$var$pow(2, mantissaLength);
        exponent = exponent + eBias;
      } else {
        mantissa = number * $feceb7b6554adf7dfeb64271d12b4b1$var$pow(2, eBias - 1) * $feceb7b6554adf7dfeb64271d12b4b1$var$pow(2, mantissaLength);
        exponent = 0;
      }
    }
    for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
    exponent = exponent << mantissaLength | mantissa;
    exponentLength += mantissaLength;
    for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
    buffer[--index] |= sign * 128;
    return buffer;
  };
  var $feceb7b6554adf7dfeb64271d12b4b1$var$unpack = function (buffer, mantissaLength) {
    var bytes = buffer.length;
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var nBits = exponentLength - 7;
    var index = bytes - 1;
    var sign = buffer[index--];
    var exponent = sign & 127;
    var mantissa;
    sign >>= 7;
    for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
    mantissa = exponent & (1 << -nBits) - 1;
    exponent >>= -nBits;
    nBits += mantissaLength;
    for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
    if (exponent === 0) {
      exponent = 1 - eBias;
    } else if (exponent === eMax) {
      return mantissa ? NaN : sign ? -$feceb7b6554adf7dfeb64271d12b4b1$var$Infinity : $feceb7b6554adf7dfeb64271d12b4b1$var$Infinity;
    } else {
      mantissa = mantissa + $feceb7b6554adf7dfeb64271d12b4b1$var$pow(2, mantissaLength);
      exponent = exponent - eBias;
    }
    return (sign ? -1 : 1) * mantissa * $feceb7b6554adf7dfeb64271d12b4b1$var$pow(2, exponent - mantissaLength);
  };
  $feceb7b6554adf7dfeb64271d12b4b1$exports = {
    pack: $feceb7b6554adf7dfeb64271d12b4b1$var$pack,
    unpack: $feceb7b6554adf7dfeb64271d12b4b1$var$unpack
  };
  var $d3585d522f61005dbeeb27c46c3a1$var$getOwnPropertyNames = $d9a6d5181c3eabba6bda9d711fdfa$export$f;
  var $d3585d522f61005dbeeb27c46c3a1$var$defineProperty = $e0cd0bce67aea07baa689ea10527$export$f;
  var $d3585d522f61005dbeeb27c46c3a1$var$getInternalState = $c9333b419e2d291fa24a6e5282e596$exports.get;
  var $d3585d522f61005dbeeb27c46c3a1$var$setInternalState = $c9333b419e2d291fa24a6e5282e596$exports.set;
  var $d3585d522f61005dbeeb27c46c3a1$var$ARRAY_BUFFER = 'ArrayBuffer';
  var $d3585d522f61005dbeeb27c46c3a1$var$DATA_VIEW = 'DataView';
  var $d3585d522f61005dbeeb27c46c3a1$var$PROTOTYPE = 'prototype';
  var $d3585d522f61005dbeeb27c46c3a1$var$WRONG_LENGTH = 'Wrong length';
  var $d3585d522f61005dbeeb27c46c3a1$var$WRONG_INDEX = 'Wrong index';
  var $d3585d522f61005dbeeb27c46c3a1$var$NativeArrayBuffer = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[$d3585d522f61005dbeeb27c46c3a1$var$ARRAY_BUFFER];
  var $d3585d522f61005dbeeb27c46c3a1$var$$ArrayBuffer = $d3585d522f61005dbeeb27c46c3a1$var$NativeArrayBuffer;
  var $d3585d522f61005dbeeb27c46c3a1$var$$DataView = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[$d3585d522f61005dbeeb27c46c3a1$var$DATA_VIEW];
  var $d3585d522f61005dbeeb27c46c3a1$var$$DataViewPrototype = $d3585d522f61005dbeeb27c46c3a1$var$$DataView && $d3585d522f61005dbeeb27c46c3a1$var$$DataView[$d3585d522f61005dbeeb27c46c3a1$var$PROTOTYPE];
  var $d3585d522f61005dbeeb27c46c3a1$var$ObjectPrototype = Object.prototype;
  var $d3585d522f61005dbeeb27c46c3a1$var$RangeError = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.RangeError;
  var $d3585d522f61005dbeeb27c46c3a1$var$packIEEE754 = $feceb7b6554adf7dfeb64271d12b4b1$exports.pack;
  var $d3585d522f61005dbeeb27c46c3a1$var$unpackIEEE754 = $feceb7b6554adf7dfeb64271d12b4b1$exports.unpack;
  var $d3585d522f61005dbeeb27c46c3a1$var$packInt8 = function (number) {
    return [number & 0xFF];
  };
  var $d3585d522f61005dbeeb27c46c3a1$var$packInt16 = function (number) {
    return [number & 0xFF, number >> 8 & 0xFF];
  };
  var $d3585d522f61005dbeeb27c46c3a1$var$packInt32 = function (number) {
    return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
  };
  var $d3585d522f61005dbeeb27c46c3a1$var$unpackInt32 = function (buffer) {
    return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
  };
  var $d3585d522f61005dbeeb27c46c3a1$var$packFloat32 = function (number) {
    return $d3585d522f61005dbeeb27c46c3a1$var$packIEEE754(number, 23, 4);
  };
  var $d3585d522f61005dbeeb27c46c3a1$var$packFloat64 = function (number) {
    return $d3585d522f61005dbeeb27c46c3a1$var$packIEEE754(number, 52, 8);
  };
  var $d3585d522f61005dbeeb27c46c3a1$var$addGetter = function (Constructor, key) {
    $d3585d522f61005dbeeb27c46c3a1$var$defineProperty(Constructor[$d3585d522f61005dbeeb27c46c3a1$var$PROTOTYPE], key, {
      get: function () {
        return $d3585d522f61005dbeeb27c46c3a1$var$getInternalState(this)[key];
      }
    });
  };
  var $d3585d522f61005dbeeb27c46c3a1$var$get = function (view, count, index, isLittleEndian) {
    var intIndex = $b7ca1fa9f1d9d6cae98d59d0bb$exports(index);
    var store = $d3585d522f61005dbeeb27c46c3a1$var$getInternalState(view);
    if (intIndex + count > store.byteLength) throw $d3585d522f61005dbeeb27c46c3a1$var$RangeError($d3585d522f61005dbeeb27c46c3a1$var$WRONG_INDEX);
    var bytes = $d3585d522f61005dbeeb27c46c3a1$var$getInternalState(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = bytes.slice(start, start + count);
    return isLittleEndian ? pack : pack.reverse();
  };
  var $d3585d522f61005dbeeb27c46c3a1$var$set = function (view, count, index, conversion, value, isLittleEndian) {
    var intIndex = $b7ca1fa9f1d9d6cae98d59d0bb$exports(index);
    var store = $d3585d522f61005dbeeb27c46c3a1$var$getInternalState(view);
    if (intIndex + count > store.byteLength) throw $d3585d522f61005dbeeb27c46c3a1$var$RangeError($d3585d522f61005dbeeb27c46c3a1$var$WRONG_INDEX);
    var bytes = $d3585d522f61005dbeeb27c46c3a1$var$getInternalState(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = conversion(+value);
    for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
  };
  if (!$a7a8c6084ba7f3e4de9f9c34dcfc110e$exports) {
    $d3585d522f61005dbeeb27c46c3a1$var$$ArrayBuffer = function ArrayBuffer(length) {
      $e359134306bb9a3c781645bdfc0c5d18$exports(this, $d3585d522f61005dbeeb27c46c3a1$var$$ArrayBuffer, $d3585d522f61005dbeeb27c46c3a1$var$ARRAY_BUFFER);
      var byteLength = $b7ca1fa9f1d9d6cae98d59d0bb$exports(length);
      $d3585d522f61005dbeeb27c46c3a1$var$setInternalState(this, {
        bytes: $e05f80abb07b929ffb652f47e7fdf8$exports.call(new Array(byteLength), 0),
        byteLength: byteLength
      });
      if (!$a7c68cb8fd81a83c8a53a82a3f122f3e$exports) this.byteLength = byteLength;
    };
    $d3585d522f61005dbeeb27c46c3a1$var$$DataView = function DataView(buffer, byteOffset, byteLength) {
      $e359134306bb9a3c781645bdfc0c5d18$exports(this, $d3585d522f61005dbeeb27c46c3a1$var$$DataView, $d3585d522f61005dbeeb27c46c3a1$var$DATA_VIEW);
      $e359134306bb9a3c781645bdfc0c5d18$exports(buffer, $d3585d522f61005dbeeb27c46c3a1$var$$ArrayBuffer, $d3585d522f61005dbeeb27c46c3a1$var$DATA_VIEW);
      var bufferLength = $d3585d522f61005dbeeb27c46c3a1$var$getInternalState(buffer).byteLength;
      var offset = $d094f929ef4c732d238eb970cba7b45$exports(byteOffset);
      if (offset < 0 || offset > bufferLength) throw $d3585d522f61005dbeeb27c46c3a1$var$RangeError('Wrong offset');
      byteLength = byteLength === undefined ? bufferLength - offset : $df129385d5f4540f45d9004e6da0d$exports(byteLength);
      if (offset + byteLength > bufferLength) throw $d3585d522f61005dbeeb27c46c3a1$var$RangeError($d3585d522f61005dbeeb27c46c3a1$var$WRONG_LENGTH);
      $d3585d522f61005dbeeb27c46c3a1$var$setInternalState(this, {
        buffer: buffer,
        byteLength: byteLength,
        byteOffset: offset
      });
      if (!$a7c68cb8fd81a83c8a53a82a3f122f3e$exports) {
        this.buffer = buffer;
        this.byteLength = byteLength;
        this.byteOffset = offset;
      }
    };
    if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports) {
      $d3585d522f61005dbeeb27c46c3a1$var$addGetter($d3585d522f61005dbeeb27c46c3a1$var$$ArrayBuffer, 'byteLength');
      $d3585d522f61005dbeeb27c46c3a1$var$addGetter($d3585d522f61005dbeeb27c46c3a1$var$$DataView, 'buffer');
      $d3585d522f61005dbeeb27c46c3a1$var$addGetter($d3585d522f61005dbeeb27c46c3a1$var$$DataView, 'byteLength');
      $d3585d522f61005dbeeb27c46c3a1$var$addGetter($d3585d522f61005dbeeb27c46c3a1$var$$DataView, 'byteOffset');
    }
    $ae410a5c6b0e1b5259e34ff96d957254$exports($d3585d522f61005dbeeb27c46c3a1$var$$DataView[$d3585d522f61005dbeeb27c46c3a1$var$PROTOTYPE], {
      getInt8: function getInt8(byteOffset) {
        return $d3585d522f61005dbeeb27c46c3a1$var$get(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return $d3585d522f61005dbeeb27c46c3a1$var$get(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset /* , littleEndian */) {
        var bytes = $d3585d522f61005dbeeb27c46c3a1$var$get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset /* , littleEndian */) {
        var bytes = $d3585d522f61005dbeeb27c46c3a1$var$get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset /* , littleEndian */) {
        return $d3585d522f61005dbeeb27c46c3a1$var$unpackInt32($d3585d522f61005dbeeb27c46c3a1$var$get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
      },
      getUint32: function getUint32(byteOffset /* , littleEndian */) {
        return $d3585d522f61005dbeeb27c46c3a1$var$unpackInt32($d3585d522f61005dbeeb27c46c3a1$var$get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
        return $d3585d522f61005dbeeb27c46c3a1$var$unpackIEEE754($d3585d522f61005dbeeb27c46c3a1$var$get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
      },
      getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
        return $d3585d522f61005dbeeb27c46c3a1$var$unpackIEEE754($d3585d522f61005dbeeb27c46c3a1$var$get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
      },
      setInt8: function setInt8(byteOffset, value) {
        $d3585d522f61005dbeeb27c46c3a1$var$set(this, 1, byteOffset, $d3585d522f61005dbeeb27c46c3a1$var$packInt8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        $d3585d522f61005dbeeb27c46c3a1$var$set(this, 1, byteOffset, $d3585d522f61005dbeeb27c46c3a1$var$packInt8, value);
      },
      setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
        $d3585d522f61005dbeeb27c46c3a1$var$set(this, 2, byteOffset, $d3585d522f61005dbeeb27c46c3a1$var$packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
        $d3585d522f61005dbeeb27c46c3a1$var$set(this, 2, byteOffset, $d3585d522f61005dbeeb27c46c3a1$var$packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
        $d3585d522f61005dbeeb27c46c3a1$var$set(this, 4, byteOffset, $d3585d522f61005dbeeb27c46c3a1$var$packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
        $d3585d522f61005dbeeb27c46c3a1$var$set(this, 4, byteOffset, $d3585d522f61005dbeeb27c46c3a1$var$packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
        $d3585d522f61005dbeeb27c46c3a1$var$set(this, 4, byteOffset, $d3585d522f61005dbeeb27c46c3a1$var$packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
        $d3585d522f61005dbeeb27c46c3a1$var$set(this, 8, byteOffset, $d3585d522f61005dbeeb27c46c3a1$var$packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
      }
    });
  } else {
    if (!$efaceca3db1203b03f84edf56feaf8f$exports(function () {
      $d3585d522f61005dbeeb27c46c3a1$var$NativeArrayBuffer(1);
    }) || !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
      new $d3585d522f61005dbeeb27c46c3a1$var$NativeArrayBuffer(-1); // eslint-disable-line no-new
    }) || $efaceca3db1203b03f84edf56feaf8f$exports(function () {
      new $d3585d522f61005dbeeb27c46c3a1$var$NativeArrayBuffer(); // eslint-disable-line no-new
      new $d3585d522f61005dbeeb27c46c3a1$var$NativeArrayBuffer(1.5); // eslint-disable-line no-new
      new $d3585d522f61005dbeeb27c46c3a1$var$NativeArrayBuffer(NaN); // eslint-disable-line no-new
      return $d3585d522f61005dbeeb27c46c3a1$var$NativeArrayBuffer.name != $d3585d522f61005dbeeb27c46c3a1$var$ARRAY_BUFFER;
    })) {
      $d3585d522f61005dbeeb27c46c3a1$var$$ArrayBuffer = function ArrayBuffer(length) {
        $e359134306bb9a3c781645bdfc0c5d18$exports(this, $d3585d522f61005dbeeb27c46c3a1$var$$ArrayBuffer);
        return new $d3585d522f61005dbeeb27c46c3a1$var$NativeArrayBuffer($b7ca1fa9f1d9d6cae98d59d0bb$exports(length));
      };
      var $d3585d522f61005dbeeb27c46c3a1$var$ArrayBufferPrototype = $d3585d522f61005dbeeb27c46c3a1$var$$ArrayBuffer[$d3585d522f61005dbeeb27c46c3a1$var$PROTOTYPE] = $d3585d522f61005dbeeb27c46c3a1$var$NativeArrayBuffer[$d3585d522f61005dbeeb27c46c3a1$var$PROTOTYPE];
      for (var $d3585d522f61005dbeeb27c46c3a1$var$keys = $d3585d522f61005dbeeb27c46c3a1$var$getOwnPropertyNames($d3585d522f61005dbeeb27c46c3a1$var$NativeArrayBuffer), $d3585d522f61005dbeeb27c46c3a1$var$j = 0, $d3585d522f61005dbeeb27c46c3a1$var$key; $d3585d522f61005dbeeb27c46c3a1$var$keys.length > $d3585d522f61005dbeeb27c46c3a1$var$j;) {
        if (!(($d3585d522f61005dbeeb27c46c3a1$var$key = $d3585d522f61005dbeeb27c46c3a1$var$keys[$d3585d522f61005dbeeb27c46c3a1$var$j++]) in $d3585d522f61005dbeeb27c46c3a1$var$$ArrayBuffer)) {
          $cccb6b555b82a0b86f5e6c39c4b7c7b$exports($d3585d522f61005dbeeb27c46c3a1$var$$ArrayBuffer, $d3585d522f61005dbeeb27c46c3a1$var$key, $d3585d522f61005dbeeb27c46c3a1$var$NativeArrayBuffer[$d3585d522f61005dbeeb27c46c3a1$var$key]);
        }
      }
      $d3585d522f61005dbeeb27c46c3a1$var$ArrayBufferPrototype.constructor = $d3585d522f61005dbeeb27c46c3a1$var$$ArrayBuffer;
    }

    // WebKit bug - the same parent prototype for typed arrays and data view
    if ($fc7c3cdaee9ffa16612f5bbf0d2a633$exports && $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports($d3585d522f61005dbeeb27c46c3a1$var$$DataViewPrototype) !== $d3585d522f61005dbeeb27c46c3a1$var$ObjectPrototype) {
      $fc7c3cdaee9ffa16612f5bbf0d2a633$exports($d3585d522f61005dbeeb27c46c3a1$var$$DataViewPrototype, $d3585d522f61005dbeeb27c46c3a1$var$ObjectPrototype);
    }

    // iOS Safari 7.x bug
    var $d3585d522f61005dbeeb27c46c3a1$var$testView = new $d3585d522f61005dbeeb27c46c3a1$var$$DataView(new $d3585d522f61005dbeeb27c46c3a1$var$$ArrayBuffer(2));
    var $d3585d522f61005dbeeb27c46c3a1$var$nativeSetInt8 = $d3585d522f61005dbeeb27c46c3a1$var$$DataViewPrototype.setInt8;
    $d3585d522f61005dbeeb27c46c3a1$var$testView.setInt8(0, 2147483648);
    $d3585d522f61005dbeeb27c46c3a1$var$testView.setInt8(1, 2147483649);
    if ($d3585d522f61005dbeeb27c46c3a1$var$testView.getInt8(0) || !$d3585d522f61005dbeeb27c46c3a1$var$testView.getInt8(1)) $ae410a5c6b0e1b5259e34ff96d957254$exports($d3585d522f61005dbeeb27c46c3a1$var$$DataViewPrototype, {
      setInt8: function setInt8(byteOffset, value) {
        $d3585d522f61005dbeeb27c46c3a1$var$nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        $d3585d522f61005dbeeb27c46c3a1$var$nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
      }
    }, {
      unsafe: true
    });
  }
  $b44eaad080afd8b6cc975138b17db$exports($d3585d522f61005dbeeb27c46c3a1$var$$ArrayBuffer, $d3585d522f61005dbeeb27c46c3a1$var$ARRAY_BUFFER);
  $b44eaad080afd8b6cc975138b17db$exports($d3585d522f61005dbeeb27c46c3a1$var$$DataView, $d3585d522f61005dbeeb27c46c3a1$var$DATA_VIEW);
  $d3585d522f61005dbeeb27c46c3a1$exports = {
    ArrayBuffer: $d3585d522f61005dbeeb27c46c3a1$var$$ArrayBuffer,
    DataView: $d3585d522f61005dbeeb27c46c3a1$var$$DataView
  };
  var $dd3a765355ed7f616b13ecf2c85a2e3$var$ARRAY_BUFFER = 'ArrayBuffer';
  var $dd3a765355ed7f616b13ecf2c85a2e3$var$ArrayBuffer = $d3585d522f61005dbeeb27c46c3a1$exports[$dd3a765355ed7f616b13ecf2c85a2e3$var$ARRAY_BUFFER];
  var $dd3a765355ed7f616b13ecf2c85a2e3$var$NativeArrayBuffer = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[$dd3a765355ed7f616b13ecf2c85a2e3$var$ARRAY_BUFFER];

  // `ArrayBuffer` constructor
  // https://tc39.github.io/ecma262/#sec-arraybuffer-constructor
  $da20139527b9570444c7d5c06ae45fa2$exports({
    global: true,
    forced: $dd3a765355ed7f616b13ecf2c85a2e3$var$NativeArrayBuffer !== $dd3a765355ed7f616b13ecf2c85a2e3$var$ArrayBuffer
  }, {
    ArrayBuffer: $dd3a765355ed7f616b13ecf2c85a2e3$var$ArrayBuffer
  });
  $f554410d1aff73003a341f161b396478$exports($dd3a765355ed7f616b13ecf2c85a2e3$var$ARRAY_BUFFER); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.date.to-primitive.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\date-to-primitive.js
  var $fc67669c2274054c817d00aa5191edbf$exports = {};
  $fc67669c2274054c817d00aa5191edbf$exports = function (hint) {
    if (hint !== 'string' && hint !== 'number' && hint !== 'default') {
      throw TypeError('Incorrect hint');
    }
    return $ec9b43a21fce0d1894877586c488a33$exports($ca96f020fbb32dd48b2236cb9c$exports(this), hint !== 'number');
  };
  var $ee17cecc03d3fd372fe7348eda6$var$TO_PRIMITIVE = $a241c8cf065084cf6d499662389d097$exports('toPrimitive');
  var $ee17cecc03d3fd372fe7348eda6$var$DatePrototype = Date.prototype;

  // `Date.prototype[@@toPrimitive]` method
  // https://tc39.github.io/ecma262/#sec-date.prototype-@@toprimitive
  if (!($ee17cecc03d3fd372fe7348eda6$var$TO_PRIMITIVE in $ee17cecc03d3fd372fe7348eda6$var$DatePrototype)) {
    $cccb6b555b82a0b86f5e6c39c4b7c7b$exports($ee17cecc03d3fd372fe7348eda6$var$DatePrototype, $ee17cecc03d3fd372fe7348eda6$var$TO_PRIMITIVE, $fc67669c2274054c817d00aa5191edbf$exports);
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.function.has-instance.js
  var $accb6bf38bd7e12855bd6b622fed82$var$HAS_INSTANCE = $a241c8cf065084cf6d499662389d097$exports('hasInstance');
  var $accb6bf38bd7e12855bd6b622fed82$var$FunctionPrototype = Function.prototype;

  // `Function.prototype[@@hasInstance]` method
  // https://tc39.github.io/ecma262/#sec-function.prototype-@@hasinstance
  if (!($accb6bf38bd7e12855bd6b622fed82$var$HAS_INSTANCE in $accb6bf38bd7e12855bd6b622fed82$var$FunctionPrototype)) {
    $e0cd0bce67aea07baa689ea10527$export$f($accb6bf38bd7e12855bd6b622fed82$var$FunctionPrototype, $accb6bf38bd7e12855bd6b622fed82$var$HAS_INSTANCE, {
      value: function (O) {
        if (typeof this != 'function' || !$ce5aa73a2f4131a4f5ee32067e6336$exports(O)) return false;
        if (!$ce5aa73a2f4131a4f5ee32067e6336$exports(this.prototype)) return O instanceof this;
        // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
        while (O = $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports(O)) if (this.prototype === O) return true;
        return false;
      }
    });
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.function.name.js
  var $af35aeaec5704429e36f70dda4ab8a3$var$defineProperty = $e0cd0bce67aea07baa689ea10527$export$f;
  var $af35aeaec5704429e36f70dda4ab8a3$var$FunctionPrototype = Function.prototype;
  var $af35aeaec5704429e36f70dda4ab8a3$var$FunctionPrototypeToString = $af35aeaec5704429e36f70dda4ab8a3$var$FunctionPrototype.toString;
  var $af35aeaec5704429e36f70dda4ab8a3$var$nameRE = /^\s*function ([^ (]*)/;
  var $af35aeaec5704429e36f70dda4ab8a3$var$NAME = 'name';

  // Function instances `.name` property
  // https://tc39.github.io/ecma262/#sec-function-instances-name
  if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports && !($af35aeaec5704429e36f70dda4ab8a3$var$NAME in $af35aeaec5704429e36f70dda4ab8a3$var$FunctionPrototype)) {
    $af35aeaec5704429e36f70dda4ab8a3$var$defineProperty($af35aeaec5704429e36f70dda4ab8a3$var$FunctionPrototype, $af35aeaec5704429e36f70dda4ab8a3$var$NAME, {
      configurable: true,
      get: function () {
        try {
          return $af35aeaec5704429e36f70dda4ab8a3$var$FunctionPrototypeToString.call(this).match($af35aeaec5704429e36f70dda4ab8a3$var$nameRE)[1];
        } catch (error) {
          return '';
        }
      }
    });
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.json.to-string-tag.js
  // JSON[@@toStringTag] property
  // https://tc39.github.io/ecma262/#sec-json-@@tostringtag
  $b44eaad080afd8b6cc975138b17db$exports($cbab2f3c4d2181527b69a2bf91b9e1fd$exports.JSON, 'JSON', true);
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.map.js
  var $f06053210d5ef36fa6d81c2f08$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\collection.js
  var $e42f6657794eeb359618f23174e2aa7$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\internal-metadata.js
  var $a1561bd8adb650545b7dfef15847bae$exports = {};
  var $a1561bd8adb650545b7dfef15847bae$var$defineProperty = $e0cd0bce67aea07baa689ea10527$export$f;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\freezing.js
  var $b65f563c815cd52d425329bdc5f2e$exports = {};
  $b65f563c815cd52d425329bdc5f2e$exports = !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  });
  var $a1561bd8adb650545b7dfef15847bae$var$METADATA = $ebaf71c27182b704b57713b$exports('meta');
  var $a1561bd8adb650545b7dfef15847bae$var$id = 0;
  var $a1561bd8adb650545b7dfef15847bae$var$isExtensible = Object.isExtensible || function () {
    return true;
  };
  var $a1561bd8adb650545b7dfef15847bae$var$setMetadata = function (it) {
    $a1561bd8adb650545b7dfef15847bae$var$defineProperty(it, $a1561bd8adb650545b7dfef15847bae$var$METADATA, {
      value: {
        objectID: 'O' + ++$a1561bd8adb650545b7dfef15847bae$var$id,
        // object ID
        weakData: {} // weak collections IDs
      }
    });
  };
  var $a1561bd8adb650545b7dfef15847bae$var$fastKey = function (it, create) {
    // return a primitive with prefix
    if (!$ce5aa73a2f4131a4f5ee32067e6336$exports(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!$fb61ad628fb3464a4b59a2997dacf0$exports(it, $a1561bd8adb650545b7dfef15847bae$var$METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!$a1561bd8adb650545b7dfef15847bae$var$isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      $a1561bd8adb650545b7dfef15847bae$var$setMetadata(it);
      // return object ID
    }
    return it[$a1561bd8adb650545b7dfef15847bae$var$METADATA].objectID;
  };
  var $a1561bd8adb650545b7dfef15847bae$var$getWeakData = function (it, create) {
    if (!$fb61ad628fb3464a4b59a2997dacf0$exports(it, $a1561bd8adb650545b7dfef15847bae$var$METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!$a1561bd8adb650545b7dfef15847bae$var$isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      $a1561bd8adb650545b7dfef15847bae$var$setMetadata(it);
      // return the store of weak collections IDs
    }
    return it[$a1561bd8adb650545b7dfef15847bae$var$METADATA].weakData;
  };

  // add metadata on freeze-family methods calling
  var $a1561bd8adb650545b7dfef15847bae$var$onFreeze = function (it) {
    if ($b65f563c815cd52d425329bdc5f2e$exports && $a1561bd8adb650545b7dfef15847bae$var$meta.REQUIRED && $a1561bd8adb650545b7dfef15847bae$var$isExtensible(it) && !$fb61ad628fb3464a4b59a2997dacf0$exports(it, $a1561bd8adb650545b7dfef15847bae$var$METADATA)) $a1561bd8adb650545b7dfef15847bae$var$setMetadata(it);
    return it;
  };
  var $a1561bd8adb650545b7dfef15847bae$var$meta = $a1561bd8adb650545b7dfef15847bae$exports = {
    REQUIRED: false,
    fastKey: $a1561bd8adb650545b7dfef15847bae$var$fastKey,
    getWeakData: $a1561bd8adb650545b7dfef15847bae$var$getWeakData,
    onFreeze: $a1561bd8adb650545b7dfef15847bae$var$onFreeze
  };
  $e03b142da07ab54980946dc60260821a$exports[$a1561bd8adb650545b7dfef15847bae$var$METADATA] = true;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\iterate.js
  var $fdd517320290a6fff727586fb82d9241$exports = {};
  var $fdd517320290a6fff727586fb82d9241$var$Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };
  var $fdd517320290a6fff727586fb82d9241$var$iterate = $fdd517320290a6fff727586fb82d9241$exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
    var boundFunction = $d098e725d461df6003aa3baf1810a74$exports(fn, that, AS_ENTRIES ? 2 : 1);
    var iterator, iterFn, index, length, result, next, step;
    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = $d19886d1d6e229ee23952976627e4f4$exports(iterable);
      if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
      // optimisation for array iterators
      if ($c4a2281a8686657ad2b150da80d08d57$exports(iterFn)) {
        for (index = 0, length = $df129385d5f4540f45d9004e6da0d$exports(iterable.length); length > index; index++) {
          result = AS_ENTRIES ? boundFunction($ca96f020fbb32dd48b2236cb9c$exports(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
          if (result && result instanceof $fdd517320290a6fff727586fb82d9241$var$Result) return result;
        }
        return new $fdd517320290a6fff727586fb82d9241$var$Result(false);
      }
      iterator = iterFn.call(iterable);
    }
    next = iterator.next;
    while (!(step = next.call(iterator)).done) {
      result = $ab8f093634e66910b881f0ac3fcb1c$exports(iterator, boundFunction, step.value, AS_ENTRIES);
      if (typeof result == 'object' && result && result instanceof $fdd517320290a6fff727586fb82d9241$var$Result) return result;
    }
    return new $fdd517320290a6fff727586fb82d9241$var$Result(false);
  };
  $fdd517320290a6fff727586fb82d9241$var$iterate.stop = function (result) {
    return new $fdd517320290a6fff727586fb82d9241$var$Result(true, result);
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\inherit-if-required.js
  var $f7cf5bd62ee521585730e1f76900b85$exports = {};
  // makes subclassing work correct for wrapped built-ins
  $f7cf5bd62ee521585730e1f76900b85$exports = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
    // it can work only with native `setPrototypeOf`
    $fc7c3cdaee9ffa16612f5bbf0d2a633$exports &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && $ce5aa73a2f4131a4f5ee32067e6336$exports(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) $fc7c3cdaee9ffa16612f5bbf0d2a633$exports($this, NewTargetPrototype);
    return $this;
  };
  $e42f6657794eeb359618f23174e2aa7$exports = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};
    var fixMethod = function (KEY) {
      var nativeMethod = NativePrototype[KEY];
      $e3c8a1361cc0783bc835b9e100a3660b$exports(NativePrototype, KEY, KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !$ce5aa73a2f4131a4f5ee32067e6336$exports(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !$ce5aa73a2f4131a4f5ee32067e6336$exports(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !$ce5aa73a2f4131a4f5ee32067e6336$exports(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      });
    };

    // eslint-disable-next-line max-len
    if ($e6274f5bb65453325663a3dbd134944$exports(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
      new NativeConstructor().entries().next();
    })))) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      $a1561bd8adb650545b7dfef15847bae$exports.REQUIRED = true;
    } else if ($e6274f5bb65453325663a3dbd134944$exports(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor();
      // early implementations not supports chaining
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
      // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
      var THROWS_ON_PRIMITIVES = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
        instance.has(1);
      });
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new
      var ACCEPT_ITERABLES = $ff50355ab8eb1a915fe785e1d83073e5$exports(function (iterable) {
        new NativeConstructor(iterable);
      });
      // for early implementations -0 and +0 not the same
      var BUGGY_ZERO = !IS_WEAK && $efaceca3db1203b03f84edf56feaf8f$exports(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });
      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          $e359134306bb9a3c781645bdfc0c5d18$exports(dummy, Constructor, CONSTRUCTOR_NAME);
          var that = $f7cf5bd62ee521585730e1f76900b85$exports(new NativeConstructor(), dummy, Constructor);
          if (iterable != undefined) $fdd517320290a6fff727586fb82d9241$exports(iterable, that[ADDER], that, IS_MAP);
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }
      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }
      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

      // weak collections should not contains .clear method
      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }
    exported[CONSTRUCTOR_NAME] = Constructor;
    $da20139527b9570444c7d5c06ae45fa2$exports({
      global: true,
      forced: Constructor != NativeConstructor
    }, exported);
    $b44eaad080afd8b6cc975138b17db$exports(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\collection-strong.js
  var $bed1c9cc1c82f35f0b60d355889e1bbb$exports = {};
  var $bed1c9cc1c82f35f0b60d355889e1bbb$var$defineProperty = $e0cd0bce67aea07baa689ea10527$export$f;
  var $bed1c9cc1c82f35f0b60d355889e1bbb$var$fastKey = $a1561bd8adb650545b7dfef15847bae$exports.fastKey;
  var $bed1c9cc1c82f35f0b60d355889e1bbb$var$setInternalState = $c9333b419e2d291fa24a6e5282e596$exports.set;
  var $bed1c9cc1c82f35f0b60d355889e1bbb$var$internalStateGetterFor = $c9333b419e2d291fa24a6e5282e596$exports.getterFor;
  $bed1c9cc1c82f35f0b60d355889e1bbb$exports = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        $e359134306bb9a3c781645bdfc0c5d18$exports(that, C, CONSTRUCTOR_NAME);
        $bed1c9cc1c82f35f0b60d355889e1bbb$var$setInternalState(that, {
          type: CONSTRUCTOR_NAME,
          index: $a968e88b66c89954fb6a8439bd2$exports(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!$a7c68cb8fd81a83c8a53a82a3f122f3e$exports) that.size = 0;
        if (iterable != undefined) $fdd517320290a6fff727586fb82d9241$exports(iterable, that[ADDER], that, IS_MAP);
      });
      var getInternalState = $bed1c9cc1c82f35f0b60d355889e1bbb$var$internalStateGetterFor(CONSTRUCTOR_NAME);
      var define = function (that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index;
        // change existing entry
        if (entry) {
          entry.value = value;
          // create new entry
        } else {
          state.last = entry = {
            index: index = $bed1c9cc1c82f35f0b60d355889e1bbb$var$fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports) state.size++;else that.size++;
          // add to index
          if (index !== 'F') state.index[index] = entry;
        }
        return that;
      };
      var getEntry = function (that, key) {
        var state = getInternalState(that);
        // fast case
        var index = $bed1c9cc1c82f35f0b60d355889e1bbb$var$fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index];
        // frozen object case
        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry;
        }
      };
      $ae410a5c6b0e1b5259e34ff96d957254$exports(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var data = state.index;
          var entry = state.first;
          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            delete data[entry.index];
            entry = entry.next;
          }
          state.first = state.last = undefined;
          if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports) state.size = 0;else that.size = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function (key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first == entry) state.first = next;
            if (state.last == entry) state.last = prev;
            if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports) state.size--;else that.size--;
          }
          return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn /* , that = undefined */) {
          var state = getInternalState(this);
          var boundFunction = $d098e725d461df6003aa3baf1810a74$exports(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;
          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this);
            // revert to the last existing entry
            while (entry && entry.removed) entry = entry.previous;
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      $ae410a5c6b0e1b5259e34ff96d957254$exports(C.prototype, IS_MAP ? {
        // 23.1.3.6 Map.prototype.get(key)
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // 23.1.3.9 Map.prototype.set(key, value)
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // 23.2.3.1 Set.prototype.add(value)
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports) $bed1c9cc1c82f35f0b60d355889e1bbb$var$defineProperty(C.prototype, 'size', {
        get: function () {
          return getInternalState(this).size;
        }
      });
      return C;
    },
    setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = $bed1c9cc1c82f35f0b60d355889e1bbb$var$internalStateGetterFor(CONSTRUCTOR_NAME);
      var getInternalIteratorState = $bed1c9cc1c82f35f0b60d355889e1bbb$var$internalStateGetterFor(ITERATOR_NAME);
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      $ceee6a22777aa8b0d6ccfa1bc8048b4$exports(C, CONSTRUCTOR_NAME, function (iterated, kind) {
        $bed1c9cc1c82f35f0b60d355889e1bbb$var$setInternalState(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last;
        // revert to the last existing entry
        while (entry && entry.removed) entry = entry.previous;
        // get next entry
        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return {
            value: undefined,
            done: true
          };
        }
        // return step by kind
        if (kind == 'keys') return {
          value: entry.key,
          done: false
        };
        if (kind == 'values') return {
          value: entry.value,
          done: false
        };
        return {
          value: [entry.key, entry.value],
          done: false
        };
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

      // add [@@species], 23.1.2.2, 23.2.2.2
      $f554410d1aff73003a341f161b396478$exports(CONSTRUCTOR_NAME);
    }
  };
  // `Map` constructor
  // https://tc39.github.io/ecma262/#sec-map-objects
  $f06053210d5ef36fa6d81c2f08$exports = $e42f6657794eeb359618f23174e2aa7$exports('Map', function (init) {
    return function Map() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, $bed1c9cc1c82f35f0b60d355889e1bbb$exports); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.acosh.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\math-log1p.js
  var $aa630693230ebb8c4533c600c502d3$exports = {};
  var $aa630693230ebb8c4533c600c502d3$var$log = Math.log;

  // `Math.log1p` method implementation
  // https://tc39.github.io/ecma262/#sec-math.log1p
  $aa630693230ebb8c4533c600c502d3$exports = Math.log1p || function log1p(x) {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : $aa630693230ebb8c4533c600c502d3$var$log(1 + x);
  };
  var $a1d4335d054e53f33c66edf56aba3ac$var$nativeAcosh = Math.acosh;
  var $a1d4335d054e53f33c66edf56aba3ac$var$log = Math.log;
  var $a1d4335d054e53f33c66edf56aba3ac$var$sqrt = Math.sqrt;
  var $a1d4335d054e53f33c66edf56aba3ac$var$LN2 = Math.LN2;
  var $a1d4335d054e53f33c66edf56aba3ac$var$FORCED = !$a1d4335d054e53f33c66edf56aba3ac$var$nativeAcosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  || Math.floor($a1d4335d054e53f33c66edf56aba3ac$var$nativeAcosh(Number.MAX_VALUE)) != 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  || $a1d4335d054e53f33c66edf56aba3ac$var$nativeAcosh(Infinity) != Infinity;

  // `Math.acosh` method
  // https://tc39.github.io/ecma262/#sec-math.acosh
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true,
    forced: $a1d4335d054e53f33c66edf56aba3ac$var$FORCED
  }, {
    acosh: function acosh(x) {
      return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? $a1d4335d054e53f33c66edf56aba3ac$var$log(x) + $a1d4335d054e53f33c66edf56aba3ac$var$LN2 : $aa630693230ebb8c4533c600c502d3$exports(x - 1 + $a1d4335d054e53f33c66edf56aba3ac$var$sqrt(x - 1) * $a1d4335d054e53f33c66edf56aba3ac$var$sqrt(x + 1));
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.asinh.js
  var $c2a3756647f6897b5dcac6d00469337$var$nativeAsinh = Math.asinh;
  var $c2a3756647f6897b5dcac6d00469337$var$log = Math.log;
  var $c2a3756647f6897b5dcac6d00469337$var$sqrt = Math.sqrt;
  function $c2a3756647f6897b5dcac6d00469337$var$asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -$c2a3756647f6897b5dcac6d00469337$var$asinh(-x) : $c2a3756647f6897b5dcac6d00469337$var$log(x + $c2a3756647f6897b5dcac6d00469337$var$sqrt(x * x + 1));
  }

  // `Math.asinh` method
  // https://tc39.github.io/ecma262/#sec-math.asinh
  // Tor Browser bug: Math.asinh(0) -> -0
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true,
    forced: !($c2a3756647f6897b5dcac6d00469337$var$nativeAsinh && 1 / $c2a3756647f6897b5dcac6d00469337$var$nativeAsinh(0) > 0)
  }, {
    asinh: $c2a3756647f6897b5dcac6d00469337$var$asinh
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.atanh.js
  var $be407704a1b4ca3e19aa043c1a8$var$nativeAtanh = Math.atanh;
  var $be407704a1b4ca3e19aa043c1a8$var$log = Math.log;

  // `Math.atanh` method
  // https://tc39.github.io/ecma262/#sec-math.atanh
  // Tor Browser bug: Math.atanh(-0) -> 0
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true,
    forced: !($be407704a1b4ca3e19aa043c1a8$var$nativeAtanh && 1 / $be407704a1b4ca3e19aa043c1a8$var$nativeAtanh(-0) < 0)
  }, {
    atanh: function atanh(x) {
      return (x = +x) == 0 ? x : $be407704a1b4ca3e19aa043c1a8$var$log((1 + x) / (1 - x)) / 2;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.cbrt.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\math-sign.js
  var $ed253bfc766cd0caa5bd75e06fda8d67$exports = {};
  // `Math.sign` method implementation
  // https://tc39.github.io/ecma262/#sec-math.sign
  $ed253bfc766cd0caa5bd75e06fda8d67$exports = Math.sign || function sign(x) {
    // eslint-disable-next-line no-self-compare
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };
  var $f75a4d832e1dbdc218abcd8ff1bfa36$var$abs = Math.abs;
  var $f75a4d832e1dbdc218abcd8ff1bfa36$var$pow = Math.pow;

  // `Math.cbrt` method
  // https://tc39.github.io/ecma262/#sec-math.cbrt
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true
  }, {
    cbrt: function cbrt(x) {
      return $ed253bfc766cd0caa5bd75e06fda8d67$exports(x = +x) * $f75a4d832e1dbdc218abcd8ff1bfa36$var$pow($f75a4d832e1dbdc218abcd8ff1bfa36$var$abs(x), 1 / 3);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.clz32.js
  var $c9d1b32e6b50c8880e8a0e11c90db$var$floor = Math.floor;
  var $c9d1b32e6b50c8880e8a0e11c90db$var$log = Math.log;
  var $c9d1b32e6b50c8880e8a0e11c90db$var$LOG2E = Math.LOG2E;

  // `Math.clz32` method
  // https://tc39.github.io/ecma262/#sec-math.clz32
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true
  }, {
    clz32: function clz32(x) {
      return (x >>>= 0) ? 31 - $c9d1b32e6b50c8880e8a0e11c90db$var$floor($c9d1b32e6b50c8880e8a0e11c90db$var$log(x + 0.5) * $c9d1b32e6b50c8880e8a0e11c90db$var$LOG2E) : 32;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.cosh.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\math-expm1.js
  var $c39ccf9edffc2d0268605317b8ced83f$exports = {};
  var $c39ccf9edffc2d0268605317b8ced83f$var$nativeExpm1 = Math.expm1;
  var $c39ccf9edffc2d0268605317b8ced83f$var$exp = Math.exp;

  // `Math.expm1` method implementation
  // https://tc39.github.io/ecma262/#sec-math.expm1
  $c39ccf9edffc2d0268605317b8ced83f$exports = !$c39ccf9edffc2d0268605317b8ced83f$var$nativeExpm1
  // Old FF bug
  || $c39ccf9edffc2d0268605317b8ced83f$var$nativeExpm1(10) > 22025.465794806719 || $c39ccf9edffc2d0268605317b8ced83f$var$nativeExpm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $c39ccf9edffc2d0268605317b8ced83f$var$nativeExpm1(-2e-17) != -2e-17 ? function expm1(x) {
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : $c39ccf9edffc2d0268605317b8ced83f$var$exp(x) - 1;
  } : $c39ccf9edffc2d0268605317b8ced83f$var$nativeExpm1;
  var $c850c43c8a1d79a716a98e55d3975df9$var$nativeCosh = Math.cosh;
  var $c850c43c8a1d79a716a98e55d3975df9$var$abs = Math.abs;
  var $c850c43c8a1d79a716a98e55d3975df9$var$E = Math.E;

  // `Math.cosh` method
  // https://tc39.github.io/ecma262/#sec-math.cosh
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true,
    forced: !$c850c43c8a1d79a716a98e55d3975df9$var$nativeCosh || $c850c43c8a1d79a716a98e55d3975df9$var$nativeCosh(710) === Infinity
  }, {
    cosh: function cosh(x) {
      var t = $c39ccf9edffc2d0268605317b8ced83f$exports($c850c43c8a1d79a716a98e55d3975df9$var$abs(x) - 1) + 1;
      return (t + 1 / (t * $c850c43c8a1d79a716a98e55d3975df9$var$E * $c850c43c8a1d79a716a98e55d3975df9$var$E)) * ($c850c43c8a1d79a716a98e55d3975df9$var$E / 2);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.expm1.js
  // `Math.expm1` method
  // https://tc39.github.io/ecma262/#sec-math.expm1
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true,
    forced: $c39ccf9edffc2d0268605317b8ced83f$exports != Math.expm1
  }, {
    expm1: $c39ccf9edffc2d0268605317b8ced83f$exports
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.fround.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\math-fround.js
  var $ad745db619d5163802e9c128a0d2ea7$exports = {};
  var $ad745db619d5163802e9c128a0d2ea7$var$abs = Math.abs;
  var $ad745db619d5163802e9c128a0d2ea7$var$pow = Math.pow;
  var $ad745db619d5163802e9c128a0d2ea7$var$EPSILON = $ad745db619d5163802e9c128a0d2ea7$var$pow(2, -52);
  var $ad745db619d5163802e9c128a0d2ea7$var$EPSILON32 = $ad745db619d5163802e9c128a0d2ea7$var$pow(2, -23);
  var $ad745db619d5163802e9c128a0d2ea7$var$MAX32 = $ad745db619d5163802e9c128a0d2ea7$var$pow(2, 127) * (2 - $ad745db619d5163802e9c128a0d2ea7$var$EPSILON32);
  var $ad745db619d5163802e9c128a0d2ea7$var$MIN32 = $ad745db619d5163802e9c128a0d2ea7$var$pow(2, -126);
  var $ad745db619d5163802e9c128a0d2ea7$var$roundTiesToEven = function (n) {
    return n + 1 / $ad745db619d5163802e9c128a0d2ea7$var$EPSILON - 1 / $ad745db619d5163802e9c128a0d2ea7$var$EPSILON;
  };

  // `Math.fround` method implementation
  // https://tc39.github.io/ecma262/#sec-math.fround
  $ad745db619d5163802e9c128a0d2ea7$exports = Math.fround || function fround(x) {
    var $abs = $ad745db619d5163802e9c128a0d2ea7$var$abs(x);
    var $sign = $ed253bfc766cd0caa5bd75e06fda8d67$exports(x);
    var a, result;
    if ($abs < $ad745db619d5163802e9c128a0d2ea7$var$MIN32) return $sign * $ad745db619d5163802e9c128a0d2ea7$var$roundTiesToEven($abs / $ad745db619d5163802e9c128a0d2ea7$var$MIN32 / $ad745db619d5163802e9c128a0d2ea7$var$EPSILON32) * $ad745db619d5163802e9c128a0d2ea7$var$MIN32 * $ad745db619d5163802e9c128a0d2ea7$var$EPSILON32;
    a = (1 + $ad745db619d5163802e9c128a0d2ea7$var$EPSILON32 / $ad745db619d5163802e9c128a0d2ea7$var$EPSILON) * $abs;
    result = a - (a - $abs);
    // eslint-disable-next-line no-self-compare
    if (result > $ad745db619d5163802e9c128a0d2ea7$var$MAX32 || result != result) return $sign * Infinity;
    return $sign * result;
  };
  // `Math.fround` method
  // https://tc39.github.io/ecma262/#sec-math.fround
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true
  }, {
    fround: $ad745db619d5163802e9c128a0d2ea7$exports
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.hypot.js
  var $ffd79625f0de46f7eb3ec652a6ae25c8$var$$hypot = Math.hypot;
  var $ffd79625f0de46f7eb3ec652a6ae25c8$var$abs = Math.abs;
  var $ffd79625f0de46f7eb3ec652a6ae25c8$var$sqrt = Math.sqrt;

  // Chrome 77 bug
  // https://bugs.chromium.org/p/v8/issues/detail?id=9546
  var $ffd79625f0de46f7eb3ec652a6ae25c8$var$BUGGY = !!$ffd79625f0de46f7eb3ec652a6ae25c8$var$$hypot && $ffd79625f0de46f7eb3ec652a6ae25c8$var$$hypot(Infinity, NaN) !== Infinity;

  // `Math.hypot` method
  // https://tc39.github.io/ecma262/#sec-math.hypot
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true,
    forced: $ffd79625f0de46f7eb3ec652a6ae25c8$var$BUGGY
  }, {
    hypot: function hypot(value1, value2) {
      // eslint-disable-line no-unused-vars
      var sum = 0;
      var i = 0;
      var aLen = arguments.length;
      var larg = 0;
      var arg, div;
      while (i < aLen) {
        arg = $ffd79625f0de46f7eb3ec652a6ae25c8$var$abs(arguments[i++]);
        if (larg < arg) {
          div = larg / arg;
          sum = sum * div * div + 1;
          larg = arg;
        } else if (arg > 0) {
          div = arg / larg;
          sum += div * div;
        } else sum += arg;
      }
      return larg === Infinity ? Infinity : larg * $ffd79625f0de46f7eb3ec652a6ae25c8$var$sqrt(sum);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.imul.js
  var $e475664b957ff18726690bce48b4174f$var$nativeImul = Math.imul;
  var $e475664b957ff18726690bce48b4174f$var$FORCED = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    return $e475664b957ff18726690bce48b4174f$var$nativeImul(0xFFFFFFFF, 5) != -5 || $e475664b957ff18726690bce48b4174f$var$nativeImul.length != 2;
  });

  // `Math.imul` method
  // https://tc39.github.io/ecma262/#sec-math.imul
  // some WebKit versions fails with big numbers, some has wrong arity
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true,
    forced: $e475664b957ff18726690bce48b4174f$var$FORCED
  }, {
    imul: function imul(x, y) {
      var UINT16 = 0xFFFF;
      var xn = +x;
      var yn = +y;
      var xl = UINT16 & xn;
      var yl = UINT16 & yn;
      return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.log10.js
  var $d18cc3bca4a7e73eb68572565a9992$var$log = Math.log;
  var $d18cc3bca4a7e73eb68572565a9992$var$LOG10E = Math.LOG10E;

  // `Math.log10` method
  // https://tc39.github.io/ecma262/#sec-math.log10
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true
  }, {
    log10: function log10(x) {
      return $d18cc3bca4a7e73eb68572565a9992$var$log(x) * $d18cc3bca4a7e73eb68572565a9992$var$LOG10E;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.log1p.js
  // `Math.log1p` method
  // https://tc39.github.io/ecma262/#sec-math.log1p
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true
  }, {
    log1p: $aa630693230ebb8c4533c600c502d3$exports
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.log2.js
  var $f1d1a18391ca1ad9646b7082975da1a6$var$log = Math.log;
  var $f1d1a18391ca1ad9646b7082975da1a6$var$LN2 = Math.LN2;

  // `Math.log2` method
  // https://tc39.github.io/ecma262/#sec-math.log2
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true
  }, {
    log2: function log2(x) {
      return $f1d1a18391ca1ad9646b7082975da1a6$var$log(x) / $f1d1a18391ca1ad9646b7082975da1a6$var$LN2;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.sign.js
  // `Math.sign` method
  // https://tc39.github.io/ecma262/#sec-math.sign
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true
  }, {
    sign: $ed253bfc766cd0caa5bd75e06fda8d67$exports
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.sinh.js
  var $dec5af3d627294a6fabeb25829660db4$var$abs = Math.abs;
  var $dec5af3d627294a6fabeb25829660db4$var$exp = Math.exp;
  var $dec5af3d627294a6fabeb25829660db4$var$E = Math.E;
  var $dec5af3d627294a6fabeb25829660db4$var$FORCED = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    return Math.sinh(-2e-17) != -2e-17;
  });

  // `Math.sinh` method
  // https://tc39.github.io/ecma262/#sec-math.sinh
  // V8 near Chromium 38 has a problem with very small numbers
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true,
    forced: $dec5af3d627294a6fabeb25829660db4$var$FORCED
  }, {
    sinh: function sinh(x) {
      return $dec5af3d627294a6fabeb25829660db4$var$abs(x = +x) < 1 ? ($c39ccf9edffc2d0268605317b8ced83f$exports(x) - $c39ccf9edffc2d0268605317b8ced83f$exports(-x)) / 2 : ($dec5af3d627294a6fabeb25829660db4$var$exp(x - 1) - $dec5af3d627294a6fabeb25829660db4$var$exp(-x - 1)) * ($dec5af3d627294a6fabeb25829660db4$var$E / 2);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.tanh.js
  var $efecdaa1181e06b526d52b1eba7e$var$exp = Math.exp;

  // `Math.tanh` method
  // https://tc39.github.io/ecma262/#sec-math.tanh
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true
  }, {
    tanh: function tanh(x) {
      var a = $c39ccf9edffc2d0268605317b8ced83f$exports(x = +x);
      var b = $c39ccf9edffc2d0268605317b8ced83f$exports(-x);
      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / ($efecdaa1181e06b526d52b1eba7e$var$exp(x) + $efecdaa1181e06b526d52b1eba7e$var$exp(-x));
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.to-string-tag.js
  // Math[@@toStringTag] property
  // https://tc39.github.io/ecma262/#sec-math-@@tostringtag
  $b44eaad080afd8b6cc975138b17db$exports(Math, 'Math', true); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.math.trunc.js
  var $a30603c99849400cd0e374dc9c0d03f9$var$ceil = Math.ceil;
  var $a30603c99849400cd0e374dc9c0d03f9$var$floor = Math.floor;

  // `Math.trunc` method
  // https://tc39.github.io/ecma262/#sec-math.trunc
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Math',
    stat: true
  }, {
    trunc: function trunc(it) {
      return (it > 0 ? $a30603c99849400cd0e374dc9c0d03f9$var$floor : $a30603c99849400cd0e374dc9c0d03f9$var$ceil)(it);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.number.constructor.js
  var $c39c2229edf37c40327f2e0a$var$getOwnPropertyNames = $d9a6d5181c3eabba6bda9d711fdfa$export$f;
  var $c39c2229edf37c40327f2e0a$var$getOwnPropertyDescriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f;
  var $c39c2229edf37c40327f2e0a$var$defineProperty = $e0cd0bce67aea07baa689ea10527$export$f;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\string-trim.js
  var $b9482c1abbd9a13d23fe3d80c172977a$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\whitespaces.js
  var $aa8520fc3f45679591044fcad3a40a8$exports = {};
  // a string of all valid unicode whitespaces
  // eslint-disable-next-line max-len
  $aa8520fc3f45679591044fcad3a40a8$exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  var $b9482c1abbd9a13d23fe3d80c172977a$var$whitespace = '[' + $aa8520fc3f45679591044fcad3a40a8$exports + ']';
  var $b9482c1abbd9a13d23fe3d80c172977a$var$ltrim = RegExp('^' + $b9482c1abbd9a13d23fe3d80c172977a$var$whitespace + $b9482c1abbd9a13d23fe3d80c172977a$var$whitespace + '*');
  var $b9482c1abbd9a13d23fe3d80c172977a$var$rtrim = RegExp($b9482c1abbd9a13d23fe3d80c172977a$var$whitespace + $b9482c1abbd9a13d23fe3d80c172977a$var$whitespace + '*$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var $b9482c1abbd9a13d23fe3d80c172977a$var$createMethod = function (TYPE) {
    return function ($this) {
      var string = String($b71c0730843361a14fc0393fd741336c$exports($this));
      if (TYPE & 1) string = string.replace($b9482c1abbd9a13d23fe3d80c172977a$var$ltrim, '');
      if (TYPE & 2) string = string.replace($b9482c1abbd9a13d23fe3d80c172977a$var$rtrim, '');
      return string;
    };
  };
  $b9482c1abbd9a13d23fe3d80c172977a$exports = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
    start: $b9482c1abbd9a13d23fe3d80c172977a$var$createMethod(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
    end: $b9482c1abbd9a13d23fe3d80c172977a$var$createMethod(2),
    // `String.prototype.trim` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.trim
    trim: $b9482c1abbd9a13d23fe3d80c172977a$var$createMethod(3)
  };
  var $c39c2229edf37c40327f2e0a$var$trim = $b9482c1abbd9a13d23fe3d80c172977a$exports.trim;
  var $c39c2229edf37c40327f2e0a$var$NUMBER = 'Number';
  var $c39c2229edf37c40327f2e0a$var$NativeNumber = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[$c39c2229edf37c40327f2e0a$var$NUMBER];
  var $c39c2229edf37c40327f2e0a$var$NumberPrototype = $c39c2229edf37c40327f2e0a$var$NativeNumber.prototype;

  // Opera ~12 has broken Object#toString
  var $c39c2229edf37c40327f2e0a$var$BROKEN_CLASSOF = $b499f0f4b947123008cbd2ef011785$exports($a968e88b66c89954fb6a8439bd2$exports($c39c2229edf37c40327f2e0a$var$NumberPrototype)) == $c39c2229edf37c40327f2e0a$var$NUMBER;

  // `ToNumber` abstract operation
  // https://tc39.github.io/ecma262/#sec-tonumber
  var $c39c2229edf37c40327f2e0a$var$toNumber = function (argument) {
    var it = $ec9b43a21fce0d1894877586c488a33$exports(argument, false);
    var first, third, radix, maxCode, digits, length, index, code;
    if (typeof it == 'string' && it.length > 2) {
      it = $c39c2229edf37c40327f2e0a$var$trim(it);
      first = it.charCodeAt(0);
      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66:
          case 98:
            radix = 2;
            maxCode = 49;
            break;
          // fast equal of /^0b[01]+$/i
          case 79:
          case 111:
            radix = 8;
            maxCode = 55;
            break;
          // fast equal of /^0o[0-7]+$/i
          default:
            return +it;
        }
        digits = it.slice(2);
        length = digits.length;
        for (index = 0; index < length; index++) {
          code = digits.charCodeAt(index);
          // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols
          if (code < 48 || code > maxCode) return NaN;
        }
        return parseInt(digits, radix);
      }
    }
    return +it;
  };

  // `Number` constructor
  // https://tc39.github.io/ecma262/#sec-number-constructor
  if ($e6274f5bb65453325663a3dbd134944$exports($c39c2229edf37c40327f2e0a$var$NUMBER, !$c39c2229edf37c40327f2e0a$var$NativeNumber(' 0o1') || !$c39c2229edf37c40327f2e0a$var$NativeNumber('0b1') || $c39c2229edf37c40327f2e0a$var$NativeNumber('+0x1'))) {
    var $c39c2229edf37c40327f2e0a$var$NumberWrapper = function Number(value) {
      var it = arguments.length < 1 ? 0 : value;
      var dummy = this;
      return dummy instanceof $c39c2229edf37c40327f2e0a$var$NumberWrapper
      // check on 1..constructor(foo) case
      && ($c39c2229edf37c40327f2e0a$var$BROKEN_CLASSOF ? $efaceca3db1203b03f84edf56feaf8f$exports(function () {
        $c39c2229edf37c40327f2e0a$var$NumberPrototype.valueOf.call(dummy);
      }) : $b499f0f4b947123008cbd2ef011785$exports(dummy) != $c39c2229edf37c40327f2e0a$var$NUMBER) ? $f7cf5bd62ee521585730e1f76900b85$exports(new $c39c2229edf37c40327f2e0a$var$NativeNumber($c39c2229edf37c40327f2e0a$var$toNumber(it)), dummy, $c39c2229edf37c40327f2e0a$var$NumberWrapper) : $c39c2229edf37c40327f2e0a$var$toNumber(it);
    };
    for (var $c39c2229edf37c40327f2e0a$var$keys = $a7c68cb8fd81a83c8a53a82a3f122f3e$exports ? $c39c2229edf37c40327f2e0a$var$getOwnPropertyNames($c39c2229edf37c40327f2e0a$var$NativeNumber) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES2015 (in case, if modules with ES2015 Number statics required before):
      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), $c39c2229edf37c40327f2e0a$var$j = 0, $c39c2229edf37c40327f2e0a$var$key; $c39c2229edf37c40327f2e0a$var$keys.length > $c39c2229edf37c40327f2e0a$var$j; $c39c2229edf37c40327f2e0a$var$j++) {
      if ($fb61ad628fb3464a4b59a2997dacf0$exports($c39c2229edf37c40327f2e0a$var$NativeNumber, $c39c2229edf37c40327f2e0a$var$key = $c39c2229edf37c40327f2e0a$var$keys[$c39c2229edf37c40327f2e0a$var$j]) && !$fb61ad628fb3464a4b59a2997dacf0$exports($c39c2229edf37c40327f2e0a$var$NumberWrapper, $c39c2229edf37c40327f2e0a$var$key)) {
        $c39c2229edf37c40327f2e0a$var$defineProperty($c39c2229edf37c40327f2e0a$var$NumberWrapper, $c39c2229edf37c40327f2e0a$var$key, $c39c2229edf37c40327f2e0a$var$getOwnPropertyDescriptor($c39c2229edf37c40327f2e0a$var$NativeNumber, $c39c2229edf37c40327f2e0a$var$key));
      }
    }
    $c39c2229edf37c40327f2e0a$var$NumberWrapper.prototype = $c39c2229edf37c40327f2e0a$var$NumberPrototype;
    $c39c2229edf37c40327f2e0a$var$NumberPrototype.constructor = $c39c2229edf37c40327f2e0a$var$NumberWrapper;
    $e3c8a1361cc0783bc835b9e100a3660b$exports($cbab2f3c4d2181527b69a2bf91b9e1fd$exports, $c39c2229edf37c40327f2e0a$var$NUMBER, $c39c2229edf37c40327f2e0a$var$NumberWrapper);
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.number.epsilon.js
  // `Number.EPSILON` constant
  // https://tc39.github.io/ecma262/#sec-number.epsilon
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Number',
    stat: true
  }, {
    EPSILON: Math.pow(2, -52)
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.number.is-finite.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\number-is-finite.js
  var $f4d9a21e6fa233c0dc261c2a7fff3d$exports = {};
  var $f4d9a21e6fa233c0dc261c2a7fff3d$var$globalIsFinite = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.isFinite;

  // `Number.isFinite` method
  // https://tc39.github.io/ecma262/#sec-number.isfinite
  $f4d9a21e6fa233c0dc261c2a7fff3d$exports = Number.isFinite || function isFinite(it) {
    return typeof it == 'number' && $f4d9a21e6fa233c0dc261c2a7fff3d$var$globalIsFinite(it);
  };
  // `Number.isFinite` method
  // https://tc39.github.io/ecma262/#sec-number.isfinite
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Number',
    stat: true
  }, {
    isFinite: $f4d9a21e6fa233c0dc261c2a7fff3d$exports
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.number.is-integer.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\is-integer.js
  var $fc37a61f2f4b67eba23b19b919fb91$exports = {};
  var $fc37a61f2f4b67eba23b19b919fb91$var$floor = Math.floor;

  // `Number.isInteger` method implementation
  // https://tc39.github.io/ecma262/#sec-number.isinteger
  $fc37a61f2f4b67eba23b19b919fb91$exports = function isInteger(it) {
    return !$ce5aa73a2f4131a4f5ee32067e6336$exports(it) && isFinite(it) && $fc37a61f2f4b67eba23b19b919fb91$var$floor(it) === it;
  };
  // `Number.isInteger` method
  // https://tc39.github.io/ecma262/#sec-number.isinteger
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Number',
    stat: true
  }, {
    isInteger: $fc37a61f2f4b67eba23b19b919fb91$exports
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.number.is-nan.js
  // `Number.isNaN` method
  // https://tc39.github.io/ecma262/#sec-number.isnan
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Number',
    stat: true
  }, {
    isNaN: function isNaN(number) {
      // eslint-disable-next-line no-self-compare
      return number != number;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.number.is-safe-integer.js
  var $b65b9825b83c8f84c34659a715f31c9$var$abs = Math.abs;

  // `Number.isSafeInteger` method
  // https://tc39.github.io/ecma262/#sec-number.issafeinteger
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Number',
    stat: true
  }, {
    isSafeInteger: function isSafeInteger(number) {
      return $fc37a61f2f4b67eba23b19b919fb91$exports(number) && $b65b9825b83c8f84c34659a715f31c9$var$abs(number) <= 0x1FFFFFFFFFFFFF;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.number.max-safe-integer.js
  // `Number.MAX_SAFE_INTEGER` constant
  // https://tc39.github.io/ecma262/#sec-number.max_safe_integer
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Number',
    stat: true
  }, {
    MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.number.min-safe-integer.js
  // `Number.MIN_SAFE_INTEGER` constant
  // https://tc39.github.io/ecma262/#sec-number.min_safe_integer
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Number',
    stat: true
  }, {
    MIN_SAFE_INTEGER: -0x1FFFFFFFFFFFFF
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.number.parse-float.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\number-parse-float.js
  var $a6e9885a7f1b5382899d3ee829c1a1d5$exports = {};
  var $a6e9885a7f1b5382899d3ee829c1a1d5$var$trim = $b9482c1abbd9a13d23fe3d80c172977a$exports.trim;
  var $a6e9885a7f1b5382899d3ee829c1a1d5$var$$parseFloat = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.parseFloat;
  var $a6e9885a7f1b5382899d3ee829c1a1d5$var$FORCED = 1 / $a6e9885a7f1b5382899d3ee829c1a1d5$var$$parseFloat($aa8520fc3f45679591044fcad3a40a8$exports + '-0') !== -Infinity;

  // `parseFloat` method
  // https://tc39.github.io/ecma262/#sec-parsefloat-string
  $a6e9885a7f1b5382899d3ee829c1a1d5$exports = $a6e9885a7f1b5382899d3ee829c1a1d5$var$FORCED ? function parseFloat(string) {
    var trimmedString = $a6e9885a7f1b5382899d3ee829c1a1d5$var$trim(String(string));
    var result = $a6e9885a7f1b5382899d3ee829c1a1d5$var$$parseFloat(trimmedString);
    return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
  } : $a6e9885a7f1b5382899d3ee829c1a1d5$var$$parseFloat;
  // `Number.parseFloat` method
  // https://tc39.github.io/ecma262/#sec-number.parseFloat
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Number',
    stat: true,
    forced: Number.parseFloat != $a6e9885a7f1b5382899d3ee829c1a1d5$exports
  }, {
    parseFloat: $a6e9885a7f1b5382899d3ee829c1a1d5$exports
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.number.parse-int.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\number-parse-int.js
  var $feaf65dc0b708fb489e1ff1b08ce$exports = {};
  var $feaf65dc0b708fb489e1ff1b08ce$var$trim = $b9482c1abbd9a13d23fe3d80c172977a$exports.trim;
  var $feaf65dc0b708fb489e1ff1b08ce$var$$parseInt = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.parseInt;
  var $feaf65dc0b708fb489e1ff1b08ce$var$hex = /^[+-]?0[Xx]/;
  var $feaf65dc0b708fb489e1ff1b08ce$var$FORCED = $feaf65dc0b708fb489e1ff1b08ce$var$$parseInt($aa8520fc3f45679591044fcad3a40a8$exports + '08') !== 8 || $feaf65dc0b708fb489e1ff1b08ce$var$$parseInt($aa8520fc3f45679591044fcad3a40a8$exports + '0x16') !== 22;

  // `parseInt` method
  // https://tc39.github.io/ecma262/#sec-parseint-string-radix
  $feaf65dc0b708fb489e1ff1b08ce$exports = $feaf65dc0b708fb489e1ff1b08ce$var$FORCED ? function parseInt(string, radix) {
    var S = $feaf65dc0b708fb489e1ff1b08ce$var$trim(String(string));
    return $feaf65dc0b708fb489e1ff1b08ce$var$$parseInt(S, radix >>> 0 || ($feaf65dc0b708fb489e1ff1b08ce$var$hex.test(S) ? 16 : 10));
  } : $feaf65dc0b708fb489e1ff1b08ce$var$$parseInt;
  // `Number.parseInt` method
  // https://tc39.github.io/ecma262/#sec-number.parseint
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Number',
    stat: true,
    forced: Number.parseInt != $feaf65dc0b708fb489e1ff1b08ce$exports
  }, {
    parseInt: $feaf65dc0b708fb489e1ff1b08ce$exports
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.number.to-fixed.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\this-number-value.js
  var $c5953688b9d98743de802c08e6ee3$exports = {};
  // `thisNumberValue` abstract operation
  // https://tc39.github.io/ecma262/#sec-thisnumbervalue
  $c5953688b9d98743de802c08e6ee3$exports = function (value) {
    if (typeof value != 'number' && $b499f0f4b947123008cbd2ef011785$exports(value) != 'Number') {
      throw TypeError('Incorrect invocation');
    }
    return +value;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\string-repeat.js
  var $f73bb1261b60aaf10b273e6d444475b8$exports = {};
  // `String.prototype.repeat` method implementation
  // https://tc39.github.io/ecma262/#sec-string.prototype.repeat
  $f73bb1261b60aaf10b273e6d444475b8$exports = ''.repeat || function repeat(count) {
    var str = String($b71c0730843361a14fc0393fd741336c$exports(this));
    var result = '';
    var n = $d094f929ef4c732d238eb970cba7b45$exports(count);
    if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
    for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
    return result;
  };
  var $be0f97bec16fe4507272a2d55cdd8$var$nativeToFixed = 1.0.toFixed;
  var $be0f97bec16fe4507272a2d55cdd8$var$floor = Math.floor;
  var $be0f97bec16fe4507272a2d55cdd8$var$pow = function (x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? $be0f97bec16fe4507272a2d55cdd8$var$pow(x, n - 1, acc * x) : $be0f97bec16fe4507272a2d55cdd8$var$pow(x * x, n / 2, acc);
  };
  var $be0f97bec16fe4507272a2d55cdd8$var$log = function (x) {
    var n = 0;
    var x2 = x;
    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }
    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    }
    return n;
  };
  var $be0f97bec16fe4507272a2d55cdd8$var$FORCED = $be0f97bec16fe4507272a2d55cdd8$var$nativeToFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    // V8 ~ Android 4.3-
    $be0f97bec16fe4507272a2d55cdd8$var$nativeToFixed.call({});
  });

  // `Number.prototype.toFixed` method
  // https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Number',
    proto: true,
    forced: $be0f97bec16fe4507272a2d55cdd8$var$FORCED
  }, {
    // eslint-disable-next-line max-statements
    toFixed: function toFixed(fractionDigits) {
      var number = $c5953688b9d98743de802c08e6ee3$exports(this);
      var fractDigits = $d094f929ef4c732d238eb970cba7b45$exports(fractionDigits);
      var data = [0, 0, 0, 0, 0, 0];
      var sign = '';
      var result = '0';
      var e, z, j, k;
      var multiply = function (n, c) {
        var index = -1;
        var c2 = c;
        while (++index < 6) {
          c2 += n * data[index];
          data[index] = c2 % 1e7;
          c2 = $be0f97bec16fe4507272a2d55cdd8$var$floor(c2 / 1e7);
        }
      };
      var divide = function (n) {
        var index = 6;
        var c = 0;
        while (--index >= 0) {
          c += data[index];
          data[index] = $be0f97bec16fe4507272a2d55cdd8$var$floor(c / n);
          c = c % n * 1e7;
        }
      };
      var dataToString = function () {
        var index = 6;
        var s = '';
        while (--index >= 0) {
          if (s !== '' || index === 0 || data[index] !== 0) {
            var t = String(data[index]);
            s = s === '' ? t : s + $f73bb1261b60aaf10b273e6d444475b8$exports.call('0', 7 - t.length) + t;
          }
        }
        return s;
      };
      if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
      // eslint-disable-next-line no-self-compare
      if (number != number) return 'NaN';
      if (number <= -1e21 || number >= 1e21) return String(number);
      if (number < 0) {
        sign = '-';
        number = -number;
      }
      if (number > 1e-21) {
        e = $be0f97bec16fe4507272a2d55cdd8$var$log(number * $be0f97bec16fe4507272a2d55cdd8$var$pow(2, 69, 1)) - 69;
        z = e < 0 ? number * $be0f97bec16fe4507272a2d55cdd8$var$pow(2, -e, 1) : number / $be0f97bec16fe4507272a2d55cdd8$var$pow(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;
        if (e > 0) {
          multiply(0, z);
          j = fractDigits;
          while (j >= 7) {
            multiply(1e7, 0);
            j -= 7;
          }
          multiply($be0f97bec16fe4507272a2d55cdd8$var$pow(10, j, 1), 0);
          j = e - 1;
          while (j >= 23) {
            divide(1 << 23);
            j -= 23;
          }
          divide(1 << j);
          multiply(1, 1);
          divide(2);
          result = dataToString();
        } else {
          multiply(0, z);
          multiply(1 << -e, 0);
          result = dataToString() + $f73bb1261b60aaf10b273e6d444475b8$exports.call('0', fractDigits);
        }
      }
      if (fractDigits > 0) {
        k = result.length;
        result = sign + (k <= fractDigits ? '0.' + $f73bb1261b60aaf10b273e6d444475b8$exports.call('0', fractDigits - k) + result : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
      } else {
        result = sign + result;
      }
      return result;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.assign.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-assign.js
  var $df7d869e20dac5e526bf12faf6ad3c$exports = {};
  var $df7d869e20dac5e526bf12faf6ad3c$var$nativeAssign = Object.assign;
  var $df7d869e20dac5e526bf12faf6ad3c$var$defineProperty = Object.defineProperty;

  // `Object.assign` method
  // https://tc39.github.io/ecma262/#sec-object.assign
  $df7d869e20dac5e526bf12faf6ad3c$exports = !$df7d869e20dac5e526bf12faf6ad3c$var$nativeAssign || $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    // should have correct order of operations (Edge bug)
    if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports && $df7d869e20dac5e526bf12faf6ad3c$var$nativeAssign({
      b: 1
    }, $df7d869e20dac5e526bf12faf6ad3c$var$nativeAssign($df7d869e20dac5e526bf12faf6ad3c$var$defineProperty({}, 'a', {
      enumerable: true,
      get: function () {
        $df7d869e20dac5e526bf12faf6ad3c$var$defineProperty(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), {
      b: 2
    })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) {
      B[chr] = chr;
    });
    return $df7d869e20dac5e526bf12faf6ad3c$var$nativeAssign({}, A)[symbol] != 7 || $d59175071a5199d16e3d14abf7583df2$exports($df7d869e20dac5e526bf12faf6ad3c$var$nativeAssign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars
    var T = $cc8d97c6287a31e609e67fc971001f$exports(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = $cf17ca754490ad95678b37e125c91c4e$export$f;
    var propertyIsEnumerable = $fd3aded0ab2c815d5a451b8b3c59$export$f;
    while (argumentsLength > index) {
      var S = $c8c30ff7b4b337039de62128343f6647$exports(arguments[index++]);
      var keys = getOwnPropertySymbols ? $d59175071a5199d16e3d14abf7583df2$exports(S).concat(getOwnPropertySymbols(S)) : $d59175071a5199d16e3d14abf7583df2$exports(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!$a7c68cb8fd81a83c8a53a82a3f122f3e$exports || propertyIsEnumerable.call(S, key)) T[key] = S[key];
      }
    }
    return T;
  } : $df7d869e20dac5e526bf12faf6ad3c$var$nativeAssign;
  // `Object.assign` method
  // https://tc39.github.io/ecma262/#sec-object.assign
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true,
    forced: Object.assign !== $df7d869e20dac5e526bf12faf6ad3c$exports
  }, {
    assign: $df7d869e20dac5e526bf12faf6ad3c$exports
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.define-getter.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-prototype-accessors-forced.js
  var $b12b1d98e88c186abe7e1b09dfd137$exports = {};
  // Forced replacement object prototype accessors methods
  $b12b1d98e88c186abe7e1b09dfd137$exports = $f57ba62cba687e9257bf807714b47$exports || !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    var key = Math.random();
    // In FF throws only define methods
    // eslint-disable-next-line no-undef, no-useless-call
    __defineSetter__.call(null, key, function () {/* empty */});
    delete $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[key];
  });
  // `Object.prototype.__defineGetter__` method
  // https://tc39.github.io/ecma262/#sec-object.prototype.__defineGetter__
  if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports) {
    $da20139527b9570444c7d5c06ae45fa2$exports({
      target: 'Object',
      proto: true,
      forced: $b12b1d98e88c186abe7e1b09dfd137$exports
    }, {
      __defineGetter__: function __defineGetter__(P, getter) {
        $e0cd0bce67aea07baa689ea10527$export$f($cc8d97c6287a31e609e67fc971001f$exports(this), P, {
          get: $dd1737e30ac45587cfd439eb433a7a$exports(getter),
          enumerable: true,
          configurable: true
        });
      }
    });
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.define-setter.js
  // `Object.prototype.__defineSetter__` method
  // https://tc39.github.io/ecma262/#sec-object.prototype.__defineSetter__
  if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports) {
    $da20139527b9570444c7d5c06ae45fa2$exports({
      target: 'Object',
      proto: true,
      forced: $b12b1d98e88c186abe7e1b09dfd137$exports
    }, {
      __defineSetter__: function __defineSetter__(P, setter) {
        $e0cd0bce67aea07baa689ea10527$export$f($cc8d97c6287a31e609e67fc971001f$exports(this), P, {
          set: $dd1737e30ac45587cfd439eb433a7a$exports(setter),
          enumerable: true,
          configurable: true
        });
      }
    });
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.entries.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-to-array.js
  var $d60500b7ca49f248a1ecb545644e3d25$exports = {};
  var $d60500b7ca49f248a1ecb545644e3d25$var$propertyIsEnumerable = $fd3aded0ab2c815d5a451b8b3c59$export$f;

  // `Object.{ entries, values }` methods implementation
  var $d60500b7ca49f248a1ecb545644e3d25$var$createMethod = function (TO_ENTRIES) {
    return function (it) {
      var O = $d3edb8b5b29142657e301b5e7cecac5$exports(it);
      var keys = $d59175071a5199d16e3d14abf7583df2$exports(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;
      while (length > i) {
        key = keys[i++];
        if (!$a7c68cb8fd81a83c8a53a82a3f122f3e$exports || $d60500b7ca49f248a1ecb545644e3d25$var$propertyIsEnumerable.call(O, key)) {
          result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
        }
      }
      return result;
    };
  };
  $d60500b7ca49f248a1ecb545644e3d25$exports = {
    // `Object.entries` method
    // https://tc39.github.io/ecma262/#sec-object.entries
    entries: $d60500b7ca49f248a1ecb545644e3d25$var$createMethod(true),
    // `Object.values` method
    // https://tc39.github.io/ecma262/#sec-object.values
    values: $d60500b7ca49f248a1ecb545644e3d25$var$createMethod(false)
  };
  var $c006a0439ddf883564a20e8f65a28d82$var$$entries = $d60500b7ca49f248a1ecb545644e3d25$exports.entries;

  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true
  }, {
    entries: function entries(O) {
      return $c006a0439ddf883564a20e8f65a28d82$var$$entries(O);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.freeze.js
  var $e8642b601d5f6dab0cbf4709e46$var$onFreeze = $a1561bd8adb650545b7dfef15847bae$exports.onFreeze;
  var $e8642b601d5f6dab0cbf4709e46$var$nativeFreeze = Object.freeze;
  var $e8642b601d5f6dab0cbf4709e46$var$FAILS_ON_PRIMITIVES = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $e8642b601d5f6dab0cbf4709e46$var$nativeFreeze(1);
  });

  // `Object.freeze` method
  // https://tc39.github.io/ecma262/#sec-object.freeze
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true,
    forced: $e8642b601d5f6dab0cbf4709e46$var$FAILS_ON_PRIMITIVES,
    sham: !$b65f563c815cd52d425329bdc5f2e$exports
  }, {
    freeze: function freeze(it) {
      return $e8642b601d5f6dab0cbf4709e46$var$nativeFreeze && $ce5aa73a2f4131a4f5ee32067e6336$exports(it) ? $e8642b601d5f6dab0cbf4709e46$var$nativeFreeze($e8642b601d5f6dab0cbf4709e46$var$onFreeze(it)) : it;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.from-entries.js
  // `Object.fromEntries` method
  // https://github.com/tc39/proposal-object-from-entries
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true
  }, {
    fromEntries: function fromEntries(iterable) {
      var obj = {};
      $fdd517320290a6fff727586fb82d9241$exports(iterable, function (k, v) {
        $cb0cd31bd5a8ea8a840ab8e2fbe71$exports(obj, k, v);
      }, undefined, true);
      return obj;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.get-own-property-descriptor.js
  var $a56aeda13912b4de7537e329dfc4d9f6$var$nativeGetOwnPropertyDescriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f;
  var $a56aeda13912b4de7537e329dfc4d9f6$var$FAILS_ON_PRIMITIVES = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $a56aeda13912b4de7537e329dfc4d9f6$var$nativeGetOwnPropertyDescriptor(1);
  });
  var $a56aeda13912b4de7537e329dfc4d9f6$var$FORCED = !$a7c68cb8fd81a83c8a53a82a3f122f3e$exports || $a56aeda13912b4de7537e329dfc4d9f6$var$FAILS_ON_PRIMITIVES;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true,
    forced: $a56aeda13912b4de7537e329dfc4d9f6$var$FORCED,
    sham: !$a7c68cb8fd81a83c8a53a82a3f122f3e$exports
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
      return $a56aeda13912b4de7537e329dfc4d9f6$var$nativeGetOwnPropertyDescriptor($d3edb8b5b29142657e301b5e7cecac5$exports(it), key);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.get-own-property-descriptors.js
  // `Object.getOwnPropertyDescriptors` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true,
    sham: !$a7c68cb8fd81a83c8a53a82a3f122f3e$exports
  }, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = $d3edb8b5b29142657e301b5e7cecac5$exports(object);
      var getOwnPropertyDescriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f;
      var keys = $d0576472b878af2a7f34df2b14f0d5$exports(O);
      var result = {};
      var index = 0;
      var key, descriptor;
      while (keys.length > index) {
        descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
        if (descriptor !== undefined) $cb0cd31bd5a8ea8a840ab8e2fbe71$exports(result, key, descriptor);
      }
      return result;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.get-own-property-names.js
  var $d8c66cb69417b1c99fbe2e1536e9291$var$nativeGetOwnPropertyNames = $de7fcf93bb557af6a480475$export$f;
  var $d8c66cb69417b1c99fbe2e1536e9291$var$FAILS_ON_PRIMITIVES = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    return !Object.getOwnPropertyNames(1);
  });

  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true,
    forced: $d8c66cb69417b1c99fbe2e1536e9291$var$FAILS_ON_PRIMITIVES
  }, {
    getOwnPropertyNames: $d8c66cb69417b1c99fbe2e1536e9291$var$nativeGetOwnPropertyNames
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.get-prototype-of.js
  var $f0d31e5a5b71b017c98f6b2f216f6b1$var$FAILS_ON_PRIMITIVES = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports(1);
  });

  // `Object.getPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.getprototypeof
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true,
    forced: $f0d31e5a5b71b017c98f6b2f216f6b1$var$FAILS_ON_PRIMITIVES,
    sham: !$cc5dfedb42488db1845b3e42876a23b$exports
  }, {
    getPrototypeOf: function getPrototypeOf(it) {
      return $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports($cc8d97c6287a31e609e67fc971001f$exports(it));
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.is.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\same-value.js
  var $f35cacfd9cd7a56874e970b368ec49$exports = {};
  // `SameValue` abstract operation
  // https://tc39.github.io/ecma262/#sec-samevalue
  $f35cacfd9cd7a56874e970b368ec49$exports = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  // `Object.is` method
  // https://tc39.github.io/ecma262/#sec-object.is
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true
  }, {
    is: $f35cacfd9cd7a56874e970b368ec49$exports
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.is-extensible.js
  var $f9ab6e02b4fa7b9d2115ca06ef2b5961$var$nativeIsExtensible = Object.isExtensible;
  var $f9ab6e02b4fa7b9d2115ca06ef2b5961$var$FAILS_ON_PRIMITIVES = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $f9ab6e02b4fa7b9d2115ca06ef2b5961$var$nativeIsExtensible(1);
  });

  // `Object.isExtensible` method
  // https://tc39.github.io/ecma262/#sec-object.isextensible
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true,
    forced: $f9ab6e02b4fa7b9d2115ca06ef2b5961$var$FAILS_ON_PRIMITIVES
  }, {
    isExtensible: function isExtensible(it) {
      return $ce5aa73a2f4131a4f5ee32067e6336$exports(it) ? $f9ab6e02b4fa7b9d2115ca06ef2b5961$var$nativeIsExtensible ? $f9ab6e02b4fa7b9d2115ca06ef2b5961$var$nativeIsExtensible(it) : true : false;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.is-frozen.js
  var $cd9107b3e700fb3c2b0776a10fba$var$nativeIsFrozen = Object.isFrozen;
  var $cd9107b3e700fb3c2b0776a10fba$var$FAILS_ON_PRIMITIVES = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $cd9107b3e700fb3c2b0776a10fba$var$nativeIsFrozen(1);
  });

  // `Object.isFrozen` method
  // https://tc39.github.io/ecma262/#sec-object.isfrozen
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true,
    forced: $cd9107b3e700fb3c2b0776a10fba$var$FAILS_ON_PRIMITIVES
  }, {
    isFrozen: function isFrozen(it) {
      return $ce5aa73a2f4131a4f5ee32067e6336$exports(it) ? $cd9107b3e700fb3c2b0776a10fba$var$nativeIsFrozen ? $cd9107b3e700fb3c2b0776a10fba$var$nativeIsFrozen(it) : false : true;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.is-sealed.js
  var $fb32e88c1d96d4f25e34f2e2ada14$var$nativeIsSealed = Object.isSealed;
  var $fb32e88c1d96d4f25e34f2e2ada14$var$FAILS_ON_PRIMITIVES = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $fb32e88c1d96d4f25e34f2e2ada14$var$nativeIsSealed(1);
  });

  // `Object.isSealed` method
  // https://tc39.github.io/ecma262/#sec-object.issealed
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true,
    forced: $fb32e88c1d96d4f25e34f2e2ada14$var$FAILS_ON_PRIMITIVES
  }, {
    isSealed: function isSealed(it) {
      return $ce5aa73a2f4131a4f5ee32067e6336$exports(it) ? $fb32e88c1d96d4f25e34f2e2ada14$var$nativeIsSealed ? $fb32e88c1d96d4f25e34f2e2ada14$var$nativeIsSealed(it) : false : true;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.keys.js
  var $c75bc7b875df8ee042bb2cf1980b3f47$var$FAILS_ON_PRIMITIVES = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $d59175071a5199d16e3d14abf7583df2$exports(1);
  });

  // `Object.keys` method
  // https://tc39.github.io/ecma262/#sec-object.keys
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true,
    forced: $c75bc7b875df8ee042bb2cf1980b3f47$var$FAILS_ON_PRIMITIVES
  }, {
    keys: function keys(it) {
      return $d59175071a5199d16e3d14abf7583df2$exports($cc8d97c6287a31e609e67fc971001f$exports(it));
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.lookup-getter.js
  var $f75a2b6001278edc2304547a02e7d7b0$var$getOwnPropertyDescriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f;

  // `Object.prototype.__lookupGetter__` method
  // https://tc39.github.io/ecma262/#sec-object.prototype.__lookupGetter__
  if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports) {
    $da20139527b9570444c7d5c06ae45fa2$exports({
      target: 'Object',
      proto: true,
      forced: $b12b1d98e88c186abe7e1b09dfd137$exports
    }, {
      __lookupGetter__: function __lookupGetter__(P) {
        var O = $cc8d97c6287a31e609e67fc971001f$exports(this);
        var key = $ec9b43a21fce0d1894877586c488a33$exports(P, true);
        var desc;
        do {
          if (desc = $f75a2b6001278edc2304547a02e7d7b0$var$getOwnPropertyDescriptor(O, key)) return desc.get;
        } while (O = $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports(O));
      }
    });
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.lookup-setter.js
  var $f2f48b74c4702cb4899c83f8593e$var$getOwnPropertyDescriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f;

  // `Object.prototype.__lookupSetter__` method
  // https://tc39.github.io/ecma262/#sec-object.prototype.__lookupSetter__
  if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports) {
    $da20139527b9570444c7d5c06ae45fa2$exports({
      target: 'Object',
      proto: true,
      forced: $b12b1d98e88c186abe7e1b09dfd137$exports
    }, {
      __lookupSetter__: function __lookupSetter__(P) {
        var O = $cc8d97c6287a31e609e67fc971001f$exports(this);
        var key = $ec9b43a21fce0d1894877586c488a33$exports(P, true);
        var desc;
        do {
          if (desc = $f2f48b74c4702cb4899c83f8593e$var$getOwnPropertyDescriptor(O, key)) return desc.set;
        } while (O = $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports(O));
      }
    });
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.prevent-extensions.js
  var $b4ad13a2a6580a392784ae651a0ed323$var$onFreeze = $a1561bd8adb650545b7dfef15847bae$exports.onFreeze;
  var $b4ad13a2a6580a392784ae651a0ed323$var$nativePreventExtensions = Object.preventExtensions;
  var $b4ad13a2a6580a392784ae651a0ed323$var$FAILS_ON_PRIMITIVES = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $b4ad13a2a6580a392784ae651a0ed323$var$nativePreventExtensions(1);
  });

  // `Object.preventExtensions` method
  // https://tc39.github.io/ecma262/#sec-object.preventextensions
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true,
    forced: $b4ad13a2a6580a392784ae651a0ed323$var$FAILS_ON_PRIMITIVES,
    sham: !$b65f563c815cd52d425329bdc5f2e$exports
  }, {
    preventExtensions: function preventExtensions(it) {
      return $b4ad13a2a6580a392784ae651a0ed323$var$nativePreventExtensions && $ce5aa73a2f4131a4f5ee32067e6336$exports(it) ? $b4ad13a2a6580a392784ae651a0ed323$var$nativePreventExtensions($b4ad13a2a6580a392784ae651a0ed323$var$onFreeze(it)) : it;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.seal.js
  var $a9747df6a5b9766d49bffb95a27f4a92$var$onFreeze = $a1561bd8adb650545b7dfef15847bae$exports.onFreeze;
  var $a9747df6a5b9766d49bffb95a27f4a92$var$nativeSeal = Object.seal;
  var $a9747df6a5b9766d49bffb95a27f4a92$var$FAILS_ON_PRIMITIVES = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $a9747df6a5b9766d49bffb95a27f4a92$var$nativeSeal(1);
  });

  // `Object.seal` method
  // https://tc39.github.io/ecma262/#sec-object.seal
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true,
    forced: $a9747df6a5b9766d49bffb95a27f4a92$var$FAILS_ON_PRIMITIVES,
    sham: !$b65f563c815cd52d425329bdc5f2e$exports
  }, {
    seal: function seal(it) {
      return $a9747df6a5b9766d49bffb95a27f4a92$var$nativeSeal && $ce5aa73a2f4131a4f5ee32067e6336$exports(it) ? $a9747df6a5b9766d49bffb95a27f4a92$var$nativeSeal($a9747df6a5b9766d49bffb95a27f4a92$var$onFreeze(it)) : it;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.to-string.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\object-to-string.js
  var $aaf279399071f45c58aa58d8048a8aa2$exports = {};
  // `Object.prototype.toString` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
  $aaf279399071f45c58aa58d8048a8aa2$exports = $b7021ffb90cf564121c3b19bbc73$exports ? {}.toString : function toString() {
    return '[object ' + $ef9d499d695cd246c34e60e7d380677e$exports(this) + ']';
  };
  // `Object.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
  if (!$b7021ffb90cf564121c3b19bbc73$exports) {
    $e3c8a1361cc0783bc835b9e100a3660b$exports(Object.prototype, 'toString', $aaf279399071f45c58aa58d8048a8aa2$exports, {
      unsafe: true
    });
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.object.values.js
  var $c08712604150439a720265161685b8$var$$values = $d60500b7ca49f248a1ecb545644e3d25$exports.values;

  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Object',
    stat: true
  }, {
    values: function values(O) {
      return $c08712604150439a720265161685b8$var$$values(O);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.promise.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\native-promise-constructor.js
  var $b59d7fcd3562dc1f949764d15456a4e$exports = {};
  $b59d7fcd3562dc1f949764d15456a4e$exports = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.Promise;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\species-constructor.js
  var $de01eb37a632c5cc8bc6158846def6d$exports = {};
  var $de01eb37a632c5cc8bc6158846def6d$var$SPECIES = $a241c8cf065084cf6d499662389d097$exports('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.github.io/ecma262/#sec-speciesconstructor
  $de01eb37a632c5cc8bc6158846def6d$exports = function (O, defaultConstructor) {
    var C = $ca96f020fbb32dd48b2236cb9c$exports(O).constructor;
    var S;
    return C === undefined || (S = $ca96f020fbb32dd48b2236cb9c$exports(C)[$de01eb37a632c5cc8bc6158846def6d$var$SPECIES]) == undefined ? defaultConstructor : $dd1737e30ac45587cfd439eb433a7a$exports(S);
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\task.js
  var $d5715b582aa01c261d48606c0be53f1$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\engine-is-ios.js
  var $c1f39397f61667358f572acf44$exports = {};
  $c1f39397f61667358f572acf44$exports = /(iphone|ipod|ipad).*applewebkit/i.test($faa9dc823f5f739a68a846c4dbffdc$exports);
  var $d5715b582aa01c261d48606c0be53f1$var$location = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.location;
  var $d5715b582aa01c261d48606c0be53f1$var$set = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.setImmediate;
  var $d5715b582aa01c261d48606c0be53f1$var$clear = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.clearImmediate;
  var $d5715b582aa01c261d48606c0be53f1$var$process = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.process;
  var $d5715b582aa01c261d48606c0be53f1$var$MessageChannel = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.MessageChannel;
  var $d5715b582aa01c261d48606c0be53f1$var$Dispatch = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.Dispatch;
  var $d5715b582aa01c261d48606c0be53f1$var$counter = 0;
  var $d5715b582aa01c261d48606c0be53f1$var$queue = {};
  var $d5715b582aa01c261d48606c0be53f1$var$ONREADYSTATECHANGE = 'onreadystatechange';
  var $d5715b582aa01c261d48606c0be53f1$var$defer, $d5715b582aa01c261d48606c0be53f1$var$channel, $d5715b582aa01c261d48606c0be53f1$var$port;
  var $d5715b582aa01c261d48606c0be53f1$var$run = function (id) {
    // eslint-disable-next-line no-prototype-builtins
    if ($d5715b582aa01c261d48606c0be53f1$var$queue.hasOwnProperty(id)) {
      var fn = $d5715b582aa01c261d48606c0be53f1$var$queue[id];
      delete $d5715b582aa01c261d48606c0be53f1$var$queue[id];
      fn();
    }
  };
  var $d5715b582aa01c261d48606c0be53f1$var$runner = function (id) {
    return function () {
      $d5715b582aa01c261d48606c0be53f1$var$run(id);
    };
  };
  var $d5715b582aa01c261d48606c0be53f1$var$listener = function (event) {
    $d5715b582aa01c261d48606c0be53f1$var$run(event.data);
  };
  var $d5715b582aa01c261d48606c0be53f1$var$post = function (id) {
    // old engines have not location.origin
    $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.postMessage(id + '', $d5715b582aa01c261d48606c0be53f1$var$location.protocol + '//' + $d5715b582aa01c261d48606c0be53f1$var$location.host);
  };

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!$d5715b582aa01c261d48606c0be53f1$var$set || !$d5715b582aa01c261d48606c0be53f1$var$clear) {
    $d5715b582aa01c261d48606c0be53f1$var$set = function setImmediate(fn) {
      var args = [];
      var i = 1;
      while (arguments.length > i) args.push(arguments[i++]);
      $d5715b582aa01c261d48606c0be53f1$var$queue[++$d5715b582aa01c261d48606c0be53f1$var$counter] = function () {
        // eslint-disable-next-line no-new-func
        (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
      };
      $d5715b582aa01c261d48606c0be53f1$var$defer($d5715b582aa01c261d48606c0be53f1$var$counter);
      return $d5715b582aa01c261d48606c0be53f1$var$counter;
    };
    $d5715b582aa01c261d48606c0be53f1$var$clear = function clearImmediate(id) {
      delete $d5715b582aa01c261d48606c0be53f1$var$queue[id];
    };
    // Node.js 0.8-
    if ($b499f0f4b947123008cbd2ef011785$exports($d5715b582aa01c261d48606c0be53f1$var$process) == 'process') {
      $d5715b582aa01c261d48606c0be53f1$var$defer = function (id) {
        $d5715b582aa01c261d48606c0be53f1$var$process.nextTick($d5715b582aa01c261d48606c0be53f1$var$runner(id));
      };
      // Sphere (JS game engine) Dispatch API
    } else if ($d5715b582aa01c261d48606c0be53f1$var$Dispatch && $d5715b582aa01c261d48606c0be53f1$var$Dispatch.now) {
      $d5715b582aa01c261d48606c0be53f1$var$defer = function (id) {
        $d5715b582aa01c261d48606c0be53f1$var$Dispatch.now($d5715b582aa01c261d48606c0be53f1$var$runner(id));
      };
      // Browsers with MessageChannel, includes WebWorkers
      // except iOS - https://github.com/zloirock/core-js/issues/624
    } else if ($d5715b582aa01c261d48606c0be53f1$var$MessageChannel && !$c1f39397f61667358f572acf44$exports) {
      $d5715b582aa01c261d48606c0be53f1$var$channel = new $d5715b582aa01c261d48606c0be53f1$var$MessageChannel();
      $d5715b582aa01c261d48606c0be53f1$var$port = $d5715b582aa01c261d48606c0be53f1$var$channel.port2;
      $d5715b582aa01c261d48606c0be53f1$var$channel.port1.onmessage = $d5715b582aa01c261d48606c0be53f1$var$listener;
      $d5715b582aa01c261d48606c0be53f1$var$defer = $d098e725d461df6003aa3baf1810a74$exports($d5715b582aa01c261d48606c0be53f1$var$port.postMessage, $d5715b582aa01c261d48606c0be53f1$var$port, 1);
      // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if ($cbab2f3c4d2181527b69a2bf91b9e1fd$exports.addEventListener && typeof postMessage == 'function' && !$cbab2f3c4d2181527b69a2bf91b9e1fd$exports.importScripts && !$efaceca3db1203b03f84edf56feaf8f$exports($d5715b582aa01c261d48606c0be53f1$var$post) && $d5715b582aa01c261d48606c0be53f1$var$location.protocol !== 'file:') {
      $d5715b582aa01c261d48606c0be53f1$var$defer = $d5715b582aa01c261d48606c0be53f1$var$post;
      $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.addEventListener('message', $d5715b582aa01c261d48606c0be53f1$var$listener, false);
      // IE8-
    } else if ($d5715b582aa01c261d48606c0be53f1$var$ONREADYSTATECHANGE in $f2fb510662c1b3df76419e7197b0ca0b$exports('script')) {
      $d5715b582aa01c261d48606c0be53f1$var$defer = function (id) {
        $cdef3e72fb6cca4a7a675f7441aa6$exports.appendChild($f2fb510662c1b3df76419e7197b0ca0b$exports('script'))[$d5715b582aa01c261d48606c0be53f1$var$ONREADYSTATECHANGE] = function () {
          $cdef3e72fb6cca4a7a675f7441aa6$exports.removeChild(this);
          $d5715b582aa01c261d48606c0be53f1$var$run(id);
        };
      };
      // Rest old browsers
    } else {
      $d5715b582aa01c261d48606c0be53f1$var$defer = function (id) {
        setTimeout($d5715b582aa01c261d48606c0be53f1$var$runner(id), 0);
      };
    }
  }
  $d5715b582aa01c261d48606c0be53f1$exports = {
    set: $d5715b582aa01c261d48606c0be53f1$var$set,
    clear: $d5715b582aa01c261d48606c0be53f1$var$clear
  };
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$task = $d5715b582aa01c261d48606c0be53f1$exports.set;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\microtask.js
  var $c6fd0ef04f85523c315bb4c09a70$exports = {};
  var $c6fd0ef04f85523c315bb4c09a70$var$getOwnPropertyDescriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f;
  var $c6fd0ef04f85523c315bb4c09a70$var$macrotask = $d5715b582aa01c261d48606c0be53f1$exports.set;
  var $c6fd0ef04f85523c315bb4c09a70$var$MutationObserver = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.MutationObserver || $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.WebKitMutationObserver;
  var $c6fd0ef04f85523c315bb4c09a70$var$process = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.process;
  var $c6fd0ef04f85523c315bb4c09a70$var$Promise = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.Promise;
  var $c6fd0ef04f85523c315bb4c09a70$var$IS_NODE = $b499f0f4b947123008cbd2ef011785$exports($c6fd0ef04f85523c315bb4c09a70$var$process) == 'process';
  // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
  var $c6fd0ef04f85523c315bb4c09a70$var$queueMicrotaskDescriptor = $c6fd0ef04f85523c315bb4c09a70$var$getOwnPropertyDescriptor($cbab2f3c4d2181527b69a2bf91b9e1fd$exports, 'queueMicrotask');
  var $c6fd0ef04f85523c315bb4c09a70$var$queueMicrotask = $c6fd0ef04f85523c315bb4c09a70$var$queueMicrotaskDescriptor && $c6fd0ef04f85523c315bb4c09a70$var$queueMicrotaskDescriptor.value;
  var $c6fd0ef04f85523c315bb4c09a70$var$flush, $c6fd0ef04f85523c315bb4c09a70$var$head, $c6fd0ef04f85523c315bb4c09a70$var$last, $c6fd0ef04f85523c315bb4c09a70$var$notify, $c6fd0ef04f85523c315bb4c09a70$var$toggle, $c6fd0ef04f85523c315bb4c09a70$var$node, $c6fd0ef04f85523c315bb4c09a70$var$promise, $c6fd0ef04f85523c315bb4c09a70$var$then;

  // modern engines have queueMicrotask method
  if (!$c6fd0ef04f85523c315bb4c09a70$var$queueMicrotask) {
    $c6fd0ef04f85523c315bb4c09a70$var$flush = function () {
      var parent, fn;
      if ($c6fd0ef04f85523c315bb4c09a70$var$IS_NODE && (parent = $c6fd0ef04f85523c315bb4c09a70$var$process.domain)) parent.exit();
      while ($c6fd0ef04f85523c315bb4c09a70$var$head) {
        fn = $c6fd0ef04f85523c315bb4c09a70$var$head.fn;
        $c6fd0ef04f85523c315bb4c09a70$var$head = $c6fd0ef04f85523c315bb4c09a70$var$head.next;
        try {
          fn();
        } catch (error) {
          if ($c6fd0ef04f85523c315bb4c09a70$var$head) $c6fd0ef04f85523c315bb4c09a70$var$notify();else $c6fd0ef04f85523c315bb4c09a70$var$last = undefined;
          throw error;
        }
      }
      $c6fd0ef04f85523c315bb4c09a70$var$last = undefined;
      if (parent) parent.enter();
    };

    // Node.js
    if ($c6fd0ef04f85523c315bb4c09a70$var$IS_NODE) {
      $c6fd0ef04f85523c315bb4c09a70$var$notify = function () {
        $c6fd0ef04f85523c315bb4c09a70$var$process.nextTick($c6fd0ef04f85523c315bb4c09a70$var$flush);
      };
      // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    } else if ($c6fd0ef04f85523c315bb4c09a70$var$MutationObserver && !$c1f39397f61667358f572acf44$exports) {
      $c6fd0ef04f85523c315bb4c09a70$var$toggle = true;
      $c6fd0ef04f85523c315bb4c09a70$var$node = document.createTextNode('');
      new $c6fd0ef04f85523c315bb4c09a70$var$MutationObserver($c6fd0ef04f85523c315bb4c09a70$var$flush).observe($c6fd0ef04f85523c315bb4c09a70$var$node, {
        characterData: true
      });
      $c6fd0ef04f85523c315bb4c09a70$var$notify = function () {
        $c6fd0ef04f85523c315bb4c09a70$var$node.data = $c6fd0ef04f85523c315bb4c09a70$var$toggle = !$c6fd0ef04f85523c315bb4c09a70$var$toggle;
      };
      // environments with maybe non-completely correct, but existent Promise
    } else if ($c6fd0ef04f85523c315bb4c09a70$var$Promise && $c6fd0ef04f85523c315bb4c09a70$var$Promise.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      $c6fd0ef04f85523c315bb4c09a70$var$promise = $c6fd0ef04f85523c315bb4c09a70$var$Promise.resolve(undefined);
      $c6fd0ef04f85523c315bb4c09a70$var$then = $c6fd0ef04f85523c315bb4c09a70$var$promise.then;
      $c6fd0ef04f85523c315bb4c09a70$var$notify = function () {
        $c6fd0ef04f85523c315bb4c09a70$var$then.call($c6fd0ef04f85523c315bb4c09a70$var$promise, $c6fd0ef04f85523c315bb4c09a70$var$flush);
      };
      // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout
    } else {
      $c6fd0ef04f85523c315bb4c09a70$var$notify = function () {
        // strange IE + webpack dev server bug - use .call(global)
        $c6fd0ef04f85523c315bb4c09a70$var$macrotask.call($cbab2f3c4d2181527b69a2bf91b9e1fd$exports, $c6fd0ef04f85523c315bb4c09a70$var$flush);
      };
    }
  }
  $c6fd0ef04f85523c315bb4c09a70$exports = $c6fd0ef04f85523c315bb4c09a70$var$queueMicrotask || function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if ($c6fd0ef04f85523c315bb4c09a70$var$last) $c6fd0ef04f85523c315bb4c09a70$var$last.next = task;
    if (!$c6fd0ef04f85523c315bb4c09a70$var$head) {
      $c6fd0ef04f85523c315bb4c09a70$var$head = task;
      $c6fd0ef04f85523c315bb4c09a70$var$notify();
    }
    $c6fd0ef04f85523c315bb4c09a70$var$last = task;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\promise-resolve.js
  var $ddd490a132460a5f10d6ede0052051$exports = {}; // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\new-promise-capability.js
  var $cb76e74c1ea92aad627f90a7431f$var$PromiseCapability = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = $dd1737e30ac45587cfd439eb433a7a$exports(resolve);
    this.reject = $dd1737e30ac45587cfd439eb433a7a$exports(reject);
  };

  // 25.4.1.5 NewPromiseCapability(C)
  var $cb76e74c1ea92aad627f90a7431f$export$f = function (C) {
    return new $cb76e74c1ea92aad627f90a7431f$var$PromiseCapability(C);
  };
  $ddd490a132460a5f10d6ede0052051$exports = function (C, x) {
    $ca96f020fbb32dd48b2236cb9c$exports(C);
    if ($ce5aa73a2f4131a4f5ee32067e6336$exports(x) && x.constructor === C) return x;
    var promiseCapability = $cb76e74c1ea92aad627f90a7431f$export$f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\host-report-errors.js
  var $fae059b1a3a52c9976c135d756352c0$exports = {};
  $fae059b1a3a52c9976c135d756352c0$exports = function (a, b) {
    var console = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.console;
    if (console && console.error) {
      arguments.length === 1 ? console.error(a) : console.error(a, b);
    }
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\perform.js
  var $fb0c66791ef331d394965158c4354$exports = {};
  $fb0c66791ef331d394965158c4354$exports = function (exec) {
    try {
      return {
        error: false,
        value: exec()
      };
    } catch (error) {
      return {
        error: true,
        value: error
      };
    }
  };
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$SPECIES = $a241c8cf065084cf6d499662389d097$exports('species');
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PROMISE = 'Promise';
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$getInternalState = $c9333b419e2d291fa24a6e5282e596$exports.get;
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$setInternalState = $c9333b419e2d291fa24a6e5282e596$exports.set;
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$getInternalPromiseState = $c9333b419e2d291fa24a6e5282e596$exports.getterFor($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PROMISE);
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PromiseConstructor = $b59d7fcd3562dc1f949764d15456a4e$exports;
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$TypeError = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.TypeError;
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$document = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.document;
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$process = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.process;
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$$fetch = $aeb1e6b80ef7a537d3287f35b9b88$exports('fetch');
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$newPromiseCapability = $cb76e74c1ea92aad627f90a7431f$export$f;
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$newGenericPromiseCapability = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$newPromiseCapability;
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$IS_NODE = $b499f0f4b947123008cbd2ef011785$exports($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$process) == 'process';
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$DISPATCH_EVENT = !!($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$document && $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$document.createEvent && $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.dispatchEvent);
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$UNHANDLED_REJECTION = 'unhandledrejection';
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$REJECTION_HANDLED = 'rejectionhandled';
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PENDING = 0;
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$FULFILLED = 1;
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$REJECTED = 2;
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$HANDLED = 1;
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$UNHANDLED = 2;
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$Internal, $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$OwnPromiseCapability, $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PromiseWrapper, $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$nativeThen;
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$FORCED = $e6274f5bb65453325663a3dbd134944$exports($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PROMISE, function () {
    var GLOBAL_CORE_JS_PROMISE = $ab5801d5efb2f3515da23ff838eb1e2c$exports($b59d7fcd3562dc1f949764d15456a4e$exports) !== String($b59d7fcd3562dc1f949764d15456a4e$exports);
    if (!GLOBAL_CORE_JS_PROMISE) {
      // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // We can't detect it synchronously, so just check versions
      if ($fb615b1b527081388b3886dea9b01$exports === 66) return true;
      // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      if (!$f9e11b46cdcd8ab5a6cb1c2f8a91625$var$IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
    }
    // We need Promise#finally in the pure version for preventing prototype pollution
    if ($f57ba62cba687e9257bf807714b47$exports && !$b59d7fcd3562dc1f949764d15456a4e$exports.prototype['finally']) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if ($fb615b1b527081388b3886dea9b01$exports >= 51 && /native code/.test($b59d7fcd3562dc1f949764d15456a4e$exports)) return false;
    // Detect correctness of subclassing with @@species support
    var promise = $b59d7fcd3562dc1f949764d15456a4e$exports.resolve(1);
    var FakePromise = function (exec) {
      exec(function () {/* empty */}, function () {/* empty */});
    };
    var constructor = promise.constructor = {};
    constructor[$f9e11b46cdcd8ab5a6cb1c2f8a91625$var$SPECIES] = FakePromise;
    return !(promise.then(function () {/* empty */}) instanceof FakePromise);
  });
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$INCORRECT_ITERATION = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$FORCED || !$ff50355ab8eb1a915fe785e1d83073e5$exports(function (iterable) {
    $b59d7fcd3562dc1f949764d15456a4e$exports.all(iterable)['catch'](function () {/* empty */});
  });

  // helpers
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$isThenable = function (it) {
    var then;
    return $ce5aa73a2f4131a4f5ee32067e6336$exports(it) && typeof (then = it.then) == 'function' ? then : false;
  };
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$notify = function (promise, state, isReject) {
    if (state.notified) return;
    state.notified = true;
    var chain = state.reactions;
    $c6fd0ef04f85523c315bb4c09a70$exports(function () {
      var value = state.value;
      var ok = state.state == $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$FULFILLED;
      var index = 0;
      // variable length - can't use forEach
      while (chain.length > index) {
        var reaction = chain[index++];
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;
        try {
          if (handler) {
            if (!ok) {
              if (state.rejection === $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$UNHANDLED) $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$onHandleUnhandled(promise, state);
              state.rejection = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$HANDLED;
            }
            if (handler === true) result = value;else {
              if (domain) domain.enter();
              result = handler(value); // can throw
              if (domain) {
                domain.exit();
                exited = true;
              }
            }
            if (result === reaction.promise) {
              reject($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$TypeError('Promise-chain cycle'));
            } else if (then = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (error) {
          if (domain && !exited) domain.exit();
          reject(error);
        }
      }
      state.reactions = [];
      state.notified = false;
      if (isReject && !state.rejection) $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$onUnhandled(promise, state);
    });
  };
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$dispatchEvent = function (name, promise, reason) {
    var event, handler;
    if ($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$DISPATCH_EVENT) {
      event = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$document.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.dispatchEvent(event);
    } else event = {
      promise: promise,
      reason: reason
    };
    if (handler = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports['on' + name]) handler(event);else if (name === $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$UNHANDLED_REJECTION) $fae059b1a3a52c9976c135d756352c0$exports('Unhandled promise rejection', reason);
  };
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$onUnhandled = function (promise, state) {
    $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$task.call($cbab2f3c4d2181527b69a2bf91b9e1fd$exports, function () {
      var value = state.value;
      var IS_UNHANDLED = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$isUnhandled(state);
      var result;
      if (IS_UNHANDLED) {
        result = $fb0c66791ef331d394965158c4354$exports(function () {
          if ($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$IS_NODE) {
            $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$process.emit('unhandledRejection', value, promise);
          } else $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$dispatchEvent($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$UNHANDLED_REJECTION, promise, value);
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        state.rejection = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$IS_NODE || $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$isUnhandled(state) ? $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$UNHANDLED : $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$HANDLED;
        if (result.error) throw result.value;
      }
    });
  };
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$isUnhandled = function (state) {
    return state.rejection !== $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$HANDLED && !state.parent;
  };
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$onHandleUnhandled = function (promise, state) {
    $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$task.call($cbab2f3c4d2181527b69a2bf91b9e1fd$exports, function () {
      if ($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$IS_NODE) {
        $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$process.emit('rejectionHandled', promise);
      } else $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$dispatchEvent($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$REJECTION_HANDLED, promise, state.value);
    });
  };
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$bind = function (fn, promise, state, unwrap) {
    return function (value) {
      fn(promise, state, value, unwrap);
    };
  };
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$internalReject = function (promise, state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$REJECTED;
    $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$notify(promise, state, true);
  };
  var $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$internalResolve = function (promise, state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
      if (promise === value) throw $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$TypeError("Promise can't be resolved itself");
      var then = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$isThenable(value);
      if (then) {
        $c6fd0ef04f85523c315bb4c09a70$exports(function () {
          var wrapper = {
            done: false
          };
          try {
            then.call(value, $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$bind($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$internalResolve, promise, wrapper, state), $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$bind($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$internalReject, promise, wrapper, state));
          } catch (error) {
            $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$internalReject(promise, wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$FULFILLED;
        $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$notify(promise, state, false);
      }
    } catch (error) {
      $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$internalReject(promise, {
        done: false
      }, error, state);
    }
  };

  // constructor polyfill
  if ($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$FORCED) {
    // 25.4.3.1 Promise(executor)
    $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PromiseConstructor = function Promise(executor) {
      $e359134306bb9a3c781645bdfc0c5d18$exports(this, $b59d7fcd3562dc1f949764d15456a4e$exports, $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PROMISE);
      $dd1737e30ac45587cfd439eb433a7a$exports(executor);
      $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$Internal.call(this);
      var state = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$getInternalState(this);
      try {
        executor($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$bind($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$internalResolve, this, state), $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$bind($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$internalReject, this, state));
      } catch (error) {
        $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$internalReject(this, state, error);
      }
    };
    // eslint-disable-next-line no-unused-vars
    $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$Internal = function Promise(executor) {
      $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$setInternalState(this, {
        type: $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: [],
        rejection: false,
        state: $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PENDING,
        value: undefined
      });
    };
    $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$Internal.prototype = $ae410a5c6b0e1b5259e34ff96d957254$exports($b59d7fcd3562dc1f949764d15456a4e$exports.prototype, {
      // `Promise.prototype.then` method
      // https://tc39.github.io/ecma262/#sec-promise.prototype.then
      then: function then(onFulfilled, onRejected) {
        var state = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$getInternalPromiseState(this);
        var reaction = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$newPromiseCapability($de01eb37a632c5cc8bc6158846def6d$exports(this, $b59d7fcd3562dc1f949764d15456a4e$exports));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$IS_NODE ? $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$process.domain : undefined;
        state.parent = true;
        state.reactions.push(reaction);
        if (state.state != $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PENDING) $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$notify(this, state, false);
        return reaction.promise;
      },
      // `Promise.prototype.catch` method
      // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
      'catch': function (onRejected) {
        return this.then(undefined, onRejected);
      }
    });
    $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$OwnPromiseCapability = function () {
      var promise = new $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$Internal();
      var state = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$getInternalState(promise);
      this.promise = promise;
      this.resolve = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$bind($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$internalResolve, promise, state);
      this.reject = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$bind($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$internalReject, promise, state);
    };
    $cb76e74c1ea92aad627f90a7431f$export$f = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$newPromiseCapability = function (C) {
      return C === $b59d7fcd3562dc1f949764d15456a4e$exports || C === $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PromiseWrapper ? new $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$OwnPromiseCapability(C) : $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$newGenericPromiseCapability(C);
    };
    if (!$f57ba62cba687e9257bf807714b47$exports && typeof $b59d7fcd3562dc1f949764d15456a4e$exports == 'function') {
      $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$nativeThen = $b59d7fcd3562dc1f949764d15456a4e$exports.prototype.then;

      // wrap native Promise#then for native async functions
      $e3c8a1361cc0783bc835b9e100a3660b$exports($b59d7fcd3562dc1f949764d15456a4e$exports.prototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new $b59d7fcd3562dc1f949764d15456a4e$exports(function (resolve, reject) {
          $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$nativeThen.call(that, resolve, reject);
        }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
      }, {
        unsafe: true
      });

      // wrap fetch result
      if (typeof $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$$fetch == 'function') $da20139527b9570444c7d5c06ae45fa2$exports({
        global: true,
        enumerable: true,
        forced: true
      }, {
        // eslint-disable-next-line no-unused-vars
        fetch: function fetch(input /* , init */) {
          return $ddd490a132460a5f10d6ede0052051$exports($b59d7fcd3562dc1f949764d15456a4e$exports, $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$$fetch.apply($cbab2f3c4d2181527b69a2bf91b9e1fd$exports, arguments));
        }
      });
    }
  }
  $da20139527b9570444c7d5c06ae45fa2$exports({
    global: true,
    wrap: true,
    forced: $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$FORCED
  }, {
    Promise: $b59d7fcd3562dc1f949764d15456a4e$exports
  });
  $b44eaad080afd8b6cc975138b17db$exports($b59d7fcd3562dc1f949764d15456a4e$exports, $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PROMISE, false, true);
  $f554410d1aff73003a341f161b396478$exports($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PROMISE);
  $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PromiseWrapper = $aeb1e6b80ef7a537d3287f35b9b88$exports($f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PROMISE);

  // statics
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PROMISE,
    stat: true,
    forced: $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$FORCED
  }, {
    // `Promise.reject` method
    // https://tc39.github.io/ecma262/#sec-promise.reject
    reject: function reject(r) {
      var capability = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$newPromiseCapability(this);
      capability.reject.call(undefined, r);
      return capability.promise;
    }
  });
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PROMISE,
    stat: true,
    forced: $f57ba62cba687e9257bf807714b47$exports || $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$FORCED
  }, {
    // `Promise.resolve` method
    // https://tc39.github.io/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
      return $ddd490a132460a5f10d6ede0052051$exports($f57ba62cba687e9257bf807714b47$exports && this === $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PromiseWrapper ? $b59d7fcd3562dc1f949764d15456a4e$exports : this, x);
    }
  });
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$PROMISE,
    stat: true,
    forced: $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$INCORRECT_ITERATION
  }, {
    // `Promise.all` method
    // https://tc39.github.io/ecma262/#sec-promise.all
    all: function all(iterable) {
      var C = this;
      var capability = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = $fb0c66791ef331d394965158c4354$exports(function () {
        var $promiseResolve = $dd1737e30ac45587cfd439eb433a7a$exports(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        $fdd517320290a6fff727586fb82d9241$exports(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          $promiseResolve.call(C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    },
    // `Promise.race` method
    // https://tc39.github.io/ecma262/#sec-promise.race
    race: function race(iterable) {
      var C = this;
      var capability = $f9e11b46cdcd8ab5a6cb1c2f8a91625$var$newPromiseCapability(C);
      var reject = capability.reject;
      var result = $fb0c66791ef331d394965158c4354$exports(function () {
        var $promiseResolve = $dd1737e30ac45587cfd439eb433a7a$exports(C.resolve);
        $fdd517320290a6fff727586fb82d9241$exports(iterable, function (promise) {
          $promiseResolve.call(C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.promise.finally.js
  // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
  var $cfb30c09a70e5689722bda59f5f0c559$var$NON_GENERIC = !!$b59d7fcd3562dc1f949764d15456a4e$exports && $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $b59d7fcd3562dc1f949764d15456a4e$exports.prototype['finally'].call({
      then: function () {/* empty */}
    }, function () {/* empty */});
  });

  // `Promise.prototype.finally` method
  // https://tc39.github.io/ecma262/#sec-promise.prototype.finally
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Promise',
    proto: true,
    real: true,
    forced: $cfb30c09a70e5689722bda59f5f0c559$var$NON_GENERIC
  }, {
    'finally': function (onFinally) {
      var C = $de01eb37a632c5cc8bc6158846def6d$exports(this, $aeb1e6b80ef7a537d3287f35b9b88$exports('Promise'));
      var isFunction = typeof onFinally == 'function';
      return this.then(isFunction ? function (x) {
        return $ddd490a132460a5f10d6ede0052051$exports(C, onFinally()).then(function () {
          return x;
        });
      } : onFinally, isFunction ? function (e) {
        return $ddd490a132460a5f10d6ede0052051$exports(C, onFinally()).then(function () {
          throw e;
        });
      } : onFinally);
    }
  });

  // patch native Promise.prototype for native async functions
  if (!$f57ba62cba687e9257bf807714b47$exports && typeof $b59d7fcd3562dc1f949764d15456a4e$exports == 'function' && !$b59d7fcd3562dc1f949764d15456a4e$exports.prototype['finally']) {
    $e3c8a1361cc0783bc835b9e100a3660b$exports($b59d7fcd3562dc1f949764d15456a4e$exports.prototype, 'finally', $aeb1e6b80ef7a537d3287f35b9b88$exports('Promise').prototype['finally']);
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.reflect.apply.js
  var $bfaafa075b3adb6043e3a990c3e688d$var$nativeApply = $aeb1e6b80ef7a537d3287f35b9b88$exports('Reflect', 'apply');
  var $bfaafa075b3adb6043e3a990c3e688d$var$functionApply = Function.apply;

  // MS Edge argumentsList argument is optional
  var $bfaafa075b3adb6043e3a990c3e688d$var$OPTIONAL_ARGUMENTS_LIST = !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $bfaafa075b3adb6043e3a990c3e688d$var$nativeApply(function () {/* empty */});
  });

  // `Reflect.apply` method
  // https://tc39.github.io/ecma262/#sec-reflect.apply
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Reflect',
    stat: true,
    forced: $bfaafa075b3adb6043e3a990c3e688d$var$OPTIONAL_ARGUMENTS_LIST
  }, {
    apply: function apply(target, thisArgument, argumentsList) {
      $dd1737e30ac45587cfd439eb433a7a$exports(target);
      $ca96f020fbb32dd48b2236cb9c$exports(argumentsList);
      return $bfaafa075b3adb6043e3a990c3e688d$var$nativeApply ? $bfaafa075b3adb6043e3a990c3e688d$var$nativeApply(target, thisArgument, argumentsList) : $bfaafa075b3adb6043e3a990c3e688d$var$functionApply.call(target, thisArgument, argumentsList);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.reflect.construct.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\function-bind.js
  var $b6bcab33e453cae24853a134a34f89$exports = {};
  var $b6bcab33e453cae24853a134a34f89$var$slice = [].slice;
  var $b6bcab33e453cae24853a134a34f89$var$factories = {};
  var $b6bcab33e453cae24853a134a34f89$var$construct = function (C, argsLength, args) {
    if (!(argsLength in $b6bcab33e453cae24853a134a34f89$var$factories)) {
      for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
      // eslint-disable-next-line no-new-func
      $b6bcab33e453cae24853a134a34f89$var$factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
    }
    return $b6bcab33e453cae24853a134a34f89$var$factories[argsLength](C, args);
  };

  // `Function.prototype.bind` method implementation
  // https://tc39.github.io/ecma262/#sec-function.prototype.bind
  $b6bcab33e453cae24853a134a34f89$exports = Function.bind || function bind(that /* , ...args */) {
    var fn = $dd1737e30ac45587cfd439eb433a7a$exports(this);
    var partArgs = $b6bcab33e453cae24853a134a34f89$var$slice.call(arguments, 1);
    var boundFunction = function bound( /* args... */
    ) {
      var args = partArgs.concat($b6bcab33e453cae24853a134a34f89$var$slice.call(arguments));
      return this instanceof boundFunction ? $b6bcab33e453cae24853a134a34f89$var$construct(fn, args.length, args) : fn.apply(that, args);
    };
    if ($ce5aa73a2f4131a4f5ee32067e6336$exports(fn.prototype)) boundFunction.prototype = fn.prototype;
    return boundFunction;
  };
  var $b8215003075cf42dfeebc25d6e4527d$var$nativeConstruct = $aeb1e6b80ef7a537d3287f35b9b88$exports('Reflect', 'construct');

  // `Reflect.construct` method
  // https://tc39.github.io/ecma262/#sec-reflect.construct
  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it
  var $b8215003075cf42dfeebc25d6e4527d$var$NEW_TARGET_BUG = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    function F() {/* empty */}
    return !($b8215003075cf42dfeebc25d6e4527d$var$nativeConstruct(function () {/* empty */}, [], F) instanceof F);
  });
  var $b8215003075cf42dfeebc25d6e4527d$var$ARGS_BUG = !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $b8215003075cf42dfeebc25d6e4527d$var$nativeConstruct(function () {/* empty */});
  });
  var $b8215003075cf42dfeebc25d6e4527d$var$FORCED = $b8215003075cf42dfeebc25d6e4527d$var$NEW_TARGET_BUG || $b8215003075cf42dfeebc25d6e4527d$var$ARGS_BUG;
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Reflect',
    stat: true,
    forced: $b8215003075cf42dfeebc25d6e4527d$var$FORCED,
    sham: $b8215003075cf42dfeebc25d6e4527d$var$FORCED
  }, {
    construct: function construct(Target, args /* , newTarget */) {
      $dd1737e30ac45587cfd439eb433a7a$exports(Target);
      $ca96f020fbb32dd48b2236cb9c$exports(args);
      var newTarget = arguments.length < 3 ? Target : $dd1737e30ac45587cfd439eb433a7a$exports(arguments[2]);
      if ($b8215003075cf42dfeebc25d6e4527d$var$ARGS_BUG && !$b8215003075cf42dfeebc25d6e4527d$var$NEW_TARGET_BUG) return $b8215003075cf42dfeebc25d6e4527d$var$nativeConstruct(Target, args, newTarget);
      if (Target == newTarget) {
        // w/o altered newTarget, optimization for 0-4 arguments
        switch (args.length) {
          case 0:
            return new Target();
          case 1:
            return new Target(args[0]);
          case 2:
            return new Target(args[0], args[1]);
          case 3:
            return new Target(args[0], args[1], args[2]);
          case 4:
            return new Target(args[0], args[1], args[2], args[3]);
        }
        // w/o altered newTarget, lot of arguments case
        var $args = [null];
        $args.push.apply($args, args);
        return new ($b6bcab33e453cae24853a134a34f89$exports.apply(Target, $args))();
      }
      // with altered newTarget, not support built-in constructors
      var proto = newTarget.prototype;
      var instance = $a968e88b66c89954fb6a8439bd2$exports($ce5aa73a2f4131a4f5ee32067e6336$exports(proto) ? proto : Object.prototype);
      var result = Function.apply.call(Target, instance, args);
      return $ce5aa73a2f4131a4f5ee32067e6336$exports(result) ? result : instance;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.reflect.define-property.js
  // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
  var $f6a95a8d76bf7d690f3ff11ed02c75$var$ERROR_INSTEAD_OF_FALSE = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    // eslint-disable-next-line no-undef
    Reflect.defineProperty($e0cd0bce67aea07baa689ea10527$export$f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    });
  });

  // `Reflect.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-reflect.defineproperty
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Reflect',
    stat: true,
    forced: $f6a95a8d76bf7d690f3ff11ed02c75$var$ERROR_INSTEAD_OF_FALSE,
    sham: !$a7c68cb8fd81a83c8a53a82a3f122f3e$exports
  }, {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
      $ca96f020fbb32dd48b2236cb9c$exports(target);
      var key = $ec9b43a21fce0d1894877586c488a33$exports(propertyKey, true);
      $ca96f020fbb32dd48b2236cb9c$exports(attributes);
      try {
        $e0cd0bce67aea07baa689ea10527$export$f(target, key, attributes);
        return true;
      } catch (error) {
        return false;
      }
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.reflect.delete-property.js
  var $c425a56990a37637977e76e08547461$var$getOwnPropertyDescriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f;

  // `Reflect.deleteProperty` method
  // https://tc39.github.io/ecma262/#sec-reflect.deleteproperty
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Reflect',
    stat: true
  }, {
    deleteProperty: function deleteProperty(target, propertyKey) {
      var descriptor = $c425a56990a37637977e76e08547461$var$getOwnPropertyDescriptor($ca96f020fbb32dd48b2236cb9c$exports(target), propertyKey);
      return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.reflect.get.js
  // `Reflect.get` method
  // https://tc39.github.io/ecma262/#sec-reflect.get
  function $faed3860ae1a123e6f35daf28925cc$var$get(target, propertyKey /* , receiver */) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var descriptor, prototype;
    if ($ca96f020fbb32dd48b2236cb9c$exports(target) === receiver) return target[propertyKey];
    if (descriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f(target, propertyKey)) return $fb61ad628fb3464a4b59a2997dacf0$exports(descriptor, 'value') ? descriptor.value : descriptor.get === undefined ? undefined : descriptor.get.call(receiver);
    if ($ce5aa73a2f4131a4f5ee32067e6336$exports(prototype = $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports(target))) return $faed3860ae1a123e6f35daf28925cc$var$get(prototype, propertyKey, receiver);
  }
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Reflect',
    stat: true
  }, {
    get: $faed3860ae1a123e6f35daf28925cc$var$get
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.reflect.get-own-property-descriptor.js
  // `Reflect.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-reflect.getownpropertydescriptor
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Reflect',
    stat: true,
    sham: !$a7c68cb8fd81a83c8a53a82a3f122f3e$exports
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
      return $ef3dd30401c6b3b1a77e9290273caca$export$f($ca96f020fbb32dd48b2236cb9c$exports(target), propertyKey);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.reflect.get-prototype-of.js
  // `Reflect.getPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-reflect.getprototypeof
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Reflect',
    stat: true,
    sham: !$cc5dfedb42488db1845b3e42876a23b$exports
  }, {
    getPrototypeOf: function getPrototypeOf(target) {
      return $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports($ca96f020fbb32dd48b2236cb9c$exports(target));
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.reflect.has.js
  // `Reflect.has` method
  // https://tc39.github.io/ecma262/#sec-reflect.has
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Reflect',
    stat: true
  }, {
    has: function has(target, propertyKey) {
      return propertyKey in target;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.reflect.is-extensible.js
  var $af00e3f42c5795bf14c661ab7f8$var$objectIsExtensible = Object.isExtensible;

  // `Reflect.isExtensible` method
  // https://tc39.github.io/ecma262/#sec-reflect.isextensible
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Reflect',
    stat: true
  }, {
    isExtensible: function isExtensible(target) {
      $ca96f020fbb32dd48b2236cb9c$exports(target);
      return $af00e3f42c5795bf14c661ab7f8$var$objectIsExtensible ? $af00e3f42c5795bf14c661ab7f8$var$objectIsExtensible(target) : true;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.reflect.own-keys.js
  // `Reflect.ownKeys` method
  // https://tc39.github.io/ecma262/#sec-reflect.ownkeys
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Reflect',
    stat: true
  }, {
    ownKeys: $d0576472b878af2a7f34df2b14f0d5$exports
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.reflect.prevent-extensions.js
  // `Reflect.preventExtensions` method
  // https://tc39.github.io/ecma262/#sec-reflect.preventextensions
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Reflect',
    stat: true,
    sham: !$b65f563c815cd52d425329bdc5f2e$exports
  }, {
    preventExtensions: function preventExtensions(target) {
      $ca96f020fbb32dd48b2236cb9c$exports(target);
      try {
        var objectPreventExtensions = $aeb1e6b80ef7a537d3287f35b9b88$exports('Object', 'preventExtensions');
        if (objectPreventExtensions) objectPreventExtensions(target);
        return true;
      } catch (error) {
        return false;
      }
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.reflect.set.js
  // `Reflect.set` method
  // https://tc39.github.io/ecma262/#sec-reflect.set
  function $a33d4a0cc495b89887c522d0c3f5d2c$var$set(target, propertyKey, V /* , receiver */) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDescriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f($ca96f020fbb32dd48b2236cb9c$exports(target), propertyKey);
    var existingDescriptor, prototype;
    if (!ownDescriptor) {
      if ($ce5aa73a2f4131a4f5ee32067e6336$exports(prototype = $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports(target))) {
        return $a33d4a0cc495b89887c522d0c3f5d2c$var$set(prototype, propertyKey, V, receiver);
      }
      ownDescriptor = $c83efd2171483e9988d3cc48fb8a$exports(0);
    }
    if ($fb61ad628fb3464a4b59a2997dacf0$exports(ownDescriptor, 'value')) {
      if (ownDescriptor.writable === false || !$ce5aa73a2f4131a4f5ee32067e6336$exports(receiver)) return false;
      if (existingDescriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f(receiver, propertyKey)) {
        if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
        existingDescriptor.value = V;
        $e0cd0bce67aea07baa689ea10527$export$f(receiver, propertyKey, existingDescriptor);
      } else $e0cd0bce67aea07baa689ea10527$export$f(receiver, propertyKey, $c83efd2171483e9988d3cc48fb8a$exports(0, V));
      return true;
    }
    return ownDescriptor.set === undefined ? false : (ownDescriptor.set.call(receiver, V), true);
  }

  // MS Edge 17-18 Reflect.set allows setting the property to object
  // with non-writable property on the prototype
  var $a33d4a0cc495b89887c522d0c3f5d2c$var$MS_EDGE_BUG = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    var object = $e0cd0bce67aea07baa689ea10527$export$f({}, 'a', {
      configurable: true
    });
    // eslint-disable-next-line no-undef
    return Reflect.set($ff8ba30449b22ad7fcaa2e5c15bd4e66$exports(object), 'a', 1, object) !== false;
  });
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Reflect',
    stat: true,
    forced: $a33d4a0cc495b89887c522d0c3f5d2c$var$MS_EDGE_BUG
  }, {
    set: $a33d4a0cc495b89887c522d0c3f5d2c$var$set
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.reflect.set-prototype-of.js
  // `Reflect.setPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-reflect.setprototypeof
  if ($fc7c3cdaee9ffa16612f5bbf0d2a633$exports) $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'Reflect',
    stat: true
  }, {
    setPrototypeOf: function setPrototypeOf(target, proto) {
      $ca96f020fbb32dd48b2236cb9c$exports(target);
      $a70315bd713fa6b672079b20545cb$exports(proto);
      try {
        $fc7c3cdaee9ffa16612f5bbf0d2a633$exports(target, proto);
        return true;
      } catch (error) {
        return false;
      }
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.regexp.constructor.js
  var $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$defineProperty = $e0cd0bce67aea07baa689ea10527$export$f;
  var $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$getOwnPropertyNames = $d9a6d5181c3eabba6bda9d711fdfa$export$f;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\is-regexp.js
  var $e093ffc1044877620e6cc0f6b0f00$exports = {};
  var $e093ffc1044877620e6cc0f6b0f00$var$MATCH = $a241c8cf065084cf6d499662389d097$exports('match');

  // `IsRegExp` abstract operation
  // https://tc39.github.io/ecma262/#sec-isregexp
  $e093ffc1044877620e6cc0f6b0f00$exports = function (it) {
    var isRegExp;
    return $ce5aa73a2f4131a4f5ee32067e6336$exports(it) && ((isRegExp = it[$e093ffc1044877620e6cc0f6b0f00$var$MATCH]) !== undefined ? !!isRegExp : $b499f0f4b947123008cbd2ef011785$exports(it) == 'RegExp');
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\regexp-flags.js
  var $dbb09593825fefd857f36a703feedee$exports = {};
  // `RegExp.prototype.flags` getter implementation
  // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
  $dbb09593825fefd857f36a703feedee$exports = function () {
    var that = $ca96f020fbb32dd48b2236cb9c$exports(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  }; // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\regexp-sticky-helpers.js
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
  // so we use an intermediate function.
  function $e73084b5418905f95a4af357ad5f7078$var$RE(s, f) {
    return RegExp(s, f);
  }
  var $e73084b5418905f95a4af357ad5f7078$export$UNSUPPORTED_Y = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var re = $e73084b5418905f95a4af357ad5f7078$var$RE('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });
  var $e73084b5418905f95a4af357ad5f7078$export$BROKEN_CARET = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $e73084b5418905f95a4af357ad5f7078$var$RE('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });
  var $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$setInternalState = $c9333b419e2d291fa24a6e5282e596$exports.set;
  var $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$MATCH = $a241c8cf065084cf6d499662389d097$exports('match');
  var $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$NativeRegExp = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.RegExp;
  var $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$RegExpPrototype = $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$NativeRegExp.prototype;
  var $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$re1 = /a/g;
  var $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$CORRECT_NEW = new $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$NativeRegExp($cc8d24ba9e8f9b7ad3cab085fbb5e64$var$re1) !== $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$re1;
  var $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$UNSUPPORTED_Y = $e73084b5418905f95a4af357ad5f7078$export$UNSUPPORTED_Y;
  var $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$FORCED = $a7c68cb8fd81a83c8a53a82a3f122f3e$exports && $e6274f5bb65453325663a3dbd134944$exports('RegExp', !$cc8d24ba9e8f9b7ad3cab085fbb5e64$var$CORRECT_NEW || $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$UNSUPPORTED_Y || $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$re2[$cc8d24ba9e8f9b7ad3cab085fbb5e64$var$MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$NativeRegExp($cc8d24ba9e8f9b7ad3cab085fbb5e64$var$re1) != $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$re1 || $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$NativeRegExp($cc8d24ba9e8f9b7ad3cab085fbb5e64$var$re2) == $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$re2 || $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$NativeRegExp($cc8d24ba9e8f9b7ad3cab085fbb5e64$var$re1, 'i') != '/a/i';
  }));

  // `RegExp` constructor
  // https://tc39.github.io/ecma262/#sec-regexp-constructor
  if ($cc8d24ba9e8f9b7ad3cab085fbb5e64$var$FORCED) {
    var $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = this instanceof $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$RegExpWrapper;
      var patternIsRegExp = $e093ffc1044877620e6cc0f6b0f00$exports(pattern);
      var flagsAreUndefined = flags === undefined;
      var sticky;
      if (!thisIsRegExp && patternIsRegExp && pattern.constructor === $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$RegExpWrapper && flagsAreUndefined) {
        return pattern;
      }
      if ($cc8d24ba9e8f9b7ad3cab085fbb5e64$var$CORRECT_NEW) {
        if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
      } else if (pattern instanceof $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$RegExpWrapper) {
        if (flagsAreUndefined) flags = $dbb09593825fefd857f36a703feedee$exports.call(pattern);
        pattern = pattern.source;
      }
      if ($cc8d24ba9e8f9b7ad3cab085fbb5e64$var$UNSUPPORTED_Y) {
        sticky = !!flags && flags.indexOf('y') > -1;
        if (sticky) flags = flags.replace(/y/g, '');
      }
      var result = $f7cf5bd62ee521585730e1f76900b85$exports($cc8d24ba9e8f9b7ad3cab085fbb5e64$var$CORRECT_NEW ? new $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$NativeRegExp(pattern, flags) : $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$NativeRegExp(pattern, flags), thisIsRegExp ? this : $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$RegExpPrototype, $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$RegExpWrapper);
      if ($cc8d24ba9e8f9b7ad3cab085fbb5e64$var$UNSUPPORTED_Y && sticky) $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$setInternalState(result, {
        sticky: sticky
      });
      return result;
    };
    var $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$proxy = function (key) {
      key in $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$RegExpWrapper || $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$defineProperty($cc8d24ba9e8f9b7ad3cab085fbb5e64$var$RegExpWrapper, key, {
        configurable: true,
        get: function () {
          return $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$NativeRegExp[key];
        },
        set: function (it) {
          $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$NativeRegExp[key] = it;
        }
      });
    };
    var $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$keys = $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$getOwnPropertyNames($cc8d24ba9e8f9b7ad3cab085fbb5e64$var$NativeRegExp);
    var $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$index = 0;
    while ($cc8d24ba9e8f9b7ad3cab085fbb5e64$var$keys.length > $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$index) $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$proxy($cc8d24ba9e8f9b7ad3cab085fbb5e64$var$keys[$cc8d24ba9e8f9b7ad3cab085fbb5e64$var$index++]);
    $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$RegExpPrototype.constructor = $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$RegExpWrapper;
    $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$RegExpWrapper.prototype = $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$RegExpPrototype;
    $e3c8a1361cc0783bc835b9e100a3660b$exports($cbab2f3c4d2181527b69a2bf91b9e1fd$exports, 'RegExp', $cc8d24ba9e8f9b7ad3cab085fbb5e64$var$RegExpWrapper);
  }

  // https://tc39.github.io/ecma262/#sec-get-regexp-@@species
  $f554410d1aff73003a341f161b396478$exports('RegExp'); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.regexp.exec.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\regexp-exec.js
  var $d438da3780b82afe6a6f510eaf6d385$exports = {};
  var $d438da3780b82afe6a6f510eaf6d385$var$nativeExec = RegExp.prototype.exec;
  // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.
  var $d438da3780b82afe6a6f510eaf6d385$var$nativeReplace = String.prototype.replace;
  var $d438da3780b82afe6a6f510eaf6d385$var$patchedExec = $d438da3780b82afe6a6f510eaf6d385$var$nativeExec;
  var $d438da3780b82afe6a6f510eaf6d385$var$UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/;
    var re2 = /b*/g;
    $d438da3780b82afe6a6f510eaf6d385$var$nativeExec.call(re1, 'a');
    $d438da3780b82afe6a6f510eaf6d385$var$nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();
  var $d438da3780b82afe6a6f510eaf6d385$var$UNSUPPORTED_Y = $e73084b5418905f95a4af357ad5f7078$export$UNSUPPORTED_Y || $e73084b5418905f95a4af357ad5f7078$export$BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var $d438da3780b82afe6a6f510eaf6d385$var$NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var $d438da3780b82afe6a6f510eaf6d385$var$PATCH = $d438da3780b82afe6a6f510eaf6d385$var$UPDATES_LAST_INDEX_WRONG || $d438da3780b82afe6a6f510eaf6d385$var$NPCG_INCLUDED || $d438da3780b82afe6a6f510eaf6d385$var$UNSUPPORTED_Y;
  if ($d438da3780b82afe6a6f510eaf6d385$var$PATCH) {
    $d438da3780b82afe6a6f510eaf6d385$var$patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;
      var sticky = $d438da3780b82afe6a6f510eaf6d385$var$UNSUPPORTED_Y && re.sticky;
      var flags = $dbb09593825fefd857f36a703feedee$exports.call(re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;
      if (sticky) {
        flags = flags.replace('y', '');
        if (flags.indexOf('g') === -1) {
          flags += 'g';
        }
        strCopy = String(str).slice(re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }
      if ($d438da3780b82afe6a6f510eaf6d385$var$NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if ($d438da3780b82afe6a6f510eaf6d385$var$UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
      match = $d438da3780b82afe6a6f510eaf6d385$var$nativeExec.call(sticky ? reCopy : re, strCopy);
      if (sticky) {
        if (match) {
          match.input = match.input.slice(charsAdded);
          match[0] = match[0].slice(charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if ($d438da3780b82afe6a6f510eaf6d385$var$UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if ($d438da3780b82afe6a6f510eaf6d385$var$NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        $d438da3780b82afe6a6f510eaf6d385$var$nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }
      return match;
    };
  }
  $d438da3780b82afe6a6f510eaf6d385$exports = $d438da3780b82afe6a6f510eaf6d385$var$patchedExec;
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== $d438da3780b82afe6a6f510eaf6d385$exports
  }, {
    exec: $d438da3780b82afe6a6f510eaf6d385$exports
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.regexp.flags.js
  var $ab57f0fb11b73485c160fce579e36a2$var$UNSUPPORTED_Y = $e73084b5418905f95a4af357ad5f7078$export$UNSUPPORTED_Y;

  // `RegExp.prototype.flags` getter
  // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
  if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports && (/./g.flags != 'g' || $ab57f0fb11b73485c160fce579e36a2$var$UNSUPPORTED_Y)) {
    $e0cd0bce67aea07baa689ea10527$export$f(RegExp.prototype, 'flags', {
      configurable: true,
      get: $dbb09593825fefd857f36a703feedee$exports
    });
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.regexp.to-string.js
  var $d1a37a44b295c960cb1bb484dc9d5e0a$var$TO_STRING = 'toString';
  var $d1a37a44b295c960cb1bb484dc9d5e0a$var$RegExpPrototype = RegExp.prototype;
  var $d1a37a44b295c960cb1bb484dc9d5e0a$var$nativeToString = $d1a37a44b295c960cb1bb484dc9d5e0a$var$RegExpPrototype[$d1a37a44b295c960cb1bb484dc9d5e0a$var$TO_STRING];
  var $d1a37a44b295c960cb1bb484dc9d5e0a$var$NOT_GENERIC = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    return $d1a37a44b295c960cb1bb484dc9d5e0a$var$nativeToString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  });
  // FF44- RegExp#toString has a wrong name
  var $d1a37a44b295c960cb1bb484dc9d5e0a$var$INCORRECT_NAME = $d1a37a44b295c960cb1bb484dc9d5e0a$var$nativeToString.name != $d1a37a44b295c960cb1bb484dc9d5e0a$var$TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
  if ($d1a37a44b295c960cb1bb484dc9d5e0a$var$NOT_GENERIC || $d1a37a44b295c960cb1bb484dc9d5e0a$var$INCORRECT_NAME) {
    $e3c8a1361cc0783bc835b9e100a3660b$exports(RegExp.prototype, $d1a37a44b295c960cb1bb484dc9d5e0a$var$TO_STRING, function toString() {
      var R = $ca96f020fbb32dd48b2236cb9c$exports(this);
      var p = String(R.source);
      var rf = R.flags;
      var f = String(rf === undefined && R instanceof RegExp && !('flags' in $d1a37a44b295c960cb1bb484dc9d5e0a$var$RegExpPrototype) ? $dbb09593825fefd857f36a703feedee$exports.call(R) : rf);
      return '/' + p + '/' + f;
    }, {
      unsafe: true
    });
  }
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.set.js
  var $d1774d63f44cc97879b61699fd8$exports = {};
  // `Set` constructor
  // https://tc39.github.io/ecma262/#sec-set-objects
  $d1774d63f44cc97879b61699fd8$exports = $e42f6657794eeb359618f23174e2aa7$exports('Set', function (init) {
    return function Set() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, $bed1c9cc1c82f35f0b60d355889e1bbb$exports); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.code-point-at.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\string-multibyte.js
  var $be18c92a8c61f6589ba91e084ce$exports = {};
  // `String.prototype.{ codePointAt, at }` methods implementation
  var $be18c92a8c61f6589ba91e084ce$var$createMethod = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String($b71c0730843361a14fc0393fd741336c$exports($this));
      var position = $d094f929ef4c732d238eb970cba7b45$exports(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };
  $be18c92a8c61f6589ba91e084ce$exports = {
    // `String.prototype.codePointAt` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
    codeAt: $be18c92a8c61f6589ba91e084ce$var$createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: $be18c92a8c61f6589ba91e084ce$var$createMethod(true)
  };
  var $ada9fcf4d4c34731be40fca2ae151ac$var$codeAt = $be18c92a8c61f6589ba91e084ce$exports.codeAt;

  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true
  }, {
    codePointAt: function codePointAt(pos) {
      return $ada9fcf4d4c34731be40fca2ae151ac$var$codeAt(this, pos);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.ends-with.js
  var $b293cf1679252d919050db6e03d9b22d$var$getOwnPropertyDescriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\not-a-regexp.js
  var $fd042be92dc98e09a2247174a45cd45e$exports = {};
  $fd042be92dc98e09a2247174a45cd45e$exports = function (it) {
    if ($e093ffc1044877620e6cc0f6b0f00$exports(it)) {
      throw TypeError("The method doesn't accept regular expressions");
    }
    return it;
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\correct-is-regexp-logic.js
  var $f2926699cf44e7c69280160c20a226f$exports = {};
  var $f2926699cf44e7c69280160c20a226f$var$MATCH = $a241c8cf065084cf6d499662389d097$exports('match');
  $f2926699cf44e7c69280160c20a226f$exports = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (e) {
      try {
        regexp[$f2926699cf44e7c69280160c20a226f$var$MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (f) {/* empty */}
    }
    return false;
  };
  var $b293cf1679252d919050db6e03d9b22d$var$nativeEndsWith = ''.endsWith;
  var $b293cf1679252d919050db6e03d9b22d$var$min = Math.min;
  var $b293cf1679252d919050db6e03d9b22d$var$CORRECT_IS_REGEXP_LOGIC = $f2926699cf44e7c69280160c20a226f$exports('endsWith');
  // https://github.com/zloirock/core-js/pull/702
  var $b293cf1679252d919050db6e03d9b22d$var$MDN_POLYFILL_BUG = !$f57ba62cba687e9257bf807714b47$exports && !$b293cf1679252d919050db6e03d9b22d$var$CORRECT_IS_REGEXP_LOGIC && !!function () {
    var descriptor = $b293cf1679252d919050db6e03d9b22d$var$getOwnPropertyDescriptor(String.prototype, 'endsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.endsWith` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.endswith
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: !$b293cf1679252d919050db6e03d9b22d$var$MDN_POLYFILL_BUG && !$b293cf1679252d919050db6e03d9b22d$var$CORRECT_IS_REGEXP_LOGIC
  }, {
    endsWith: function endsWith(searchString /* , endPosition = @length */) {
      var that = String($b71c0730843361a14fc0393fd741336c$exports(this));
      $fd042be92dc98e09a2247174a45cd45e$exports(searchString);
      var endPosition = arguments.length > 1 ? arguments[1] : undefined;
      var len = $df129385d5f4540f45d9004e6da0d$exports(that.length);
      var end = endPosition === undefined ? len : $b293cf1679252d919050db6e03d9b22d$var$min($df129385d5f4540f45d9004e6da0d$exports(endPosition), len);
      var search = String(searchString);
      return $b293cf1679252d919050db6e03d9b22d$var$nativeEndsWith ? $b293cf1679252d919050db6e03d9b22d$var$nativeEndsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.from-code-point.js
  var $d945b02041391391954ac4f6aca96d49$var$fromCharCode = String.fromCharCode;
  var $d945b02041391391954ac4f6aca96d49$var$nativeFromCodePoint = String.fromCodePoint;

  // length should be 1, old FF problem
  var $d945b02041391391954ac4f6aca96d49$var$INCORRECT_LENGTH = !!$d945b02041391391954ac4f6aca96d49$var$nativeFromCodePoint && $d945b02041391391954ac4f6aca96d49$var$nativeFromCodePoint.length != 1;

  // `String.fromCodePoint` method
  // https://tc39.github.io/ecma262/#sec-string.fromcodepoint
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    stat: true,
    forced: $d945b02041391391954ac4f6aca96d49$var$INCORRECT_LENGTH
  }, {
    fromCodePoint: function fromCodePoint(x) {
      // eslint-disable-line no-unused-vars
      var elements = [];
      var length = arguments.length;
      var i = 0;
      var code;
      while (length > i) {
        code = +arguments[i++];
        if ($fa4d6094d01aacc8da63324cbdee87$exports(code, 0x10FFFF) !== code) throw RangeError(code + ' is not a valid code point');
        elements.push(code < 0x10000 ? $d945b02041391391954ac4f6aca96d49$var$fromCharCode(code) : $d945b02041391391954ac4f6aca96d49$var$fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00));
      }
      return elements.join('');
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.includes.js
  // `String.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.includes
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: !$f2926699cf44e7c69280160c20a226f$exports('includes')
  }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~String($b71c0730843361a14fc0393fd741336c$exports(this)).indexOf($fd042be92dc98e09a2247174a45cd45e$exports(searchString), arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.iterator.js
  var $bccea1e93a4c992f827502efb45ca86a$var$charAt = $be18c92a8c61f6589ba91e084ce$exports.charAt;
  var $bccea1e93a4c992f827502efb45ca86a$var$STRING_ITERATOR = 'String Iterator';
  var $bccea1e93a4c992f827502efb45ca86a$var$setInternalState = $c9333b419e2d291fa24a6e5282e596$exports.set;
  var $bccea1e93a4c992f827502efb45ca86a$var$getInternalState = $c9333b419e2d291fa24a6e5282e596$exports.getterFor($bccea1e93a4c992f827502efb45ca86a$var$STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
  $ceee6a22777aa8b0d6ccfa1bc8048b4$exports(String, 'String', function (iterated) {
    $bccea1e93a4c992f827502efb45ca86a$var$setInternalState(this, {
      type: $bccea1e93a4c992f827502efb45ca86a$var$STRING_ITERATOR,
      string: String(iterated),
      index: 0
    });
    // `%StringIteratorPrototype%.next` method
    // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = $bccea1e93a4c992f827502efb45ca86a$var$getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
      value: undefined,
      done: true
    };
    point = $bccea1e93a4c992f827502efb45ca86a$var$charAt(string, index);
    state.index += point.length;
    return {
      value: point,
      done: false
    };
  });
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\fix-regexp-well-known-symbol-logic.js
  var $fda72ac4899c516e7486813af74254eb$exports = {}; // TODO: Remove from `core-js@4` since it's moved to entry points
  var $fda72ac4899c516e7486813af74254eb$var$SPECIES = $a241c8cf065084cf6d499662389d097$exports('species');
  var $fda72ac4899c516e7486813af74254eb$var$REPLACE_SUPPORTS_NAMED_GROUPS = !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var $fda72ac4899c516e7486813af74254eb$var$REPLACE_KEEPS_$0 = function () {
    return 'a'.replace(/./, '$0') === '$0';
  }();
  var $fda72ac4899c516e7486813af74254eb$var$REPLACE = $a241c8cf065084cf6d499662389d097$exports('replace');
  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var $fda72ac4899c516e7486813af74254eb$var$REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
    if (/./[$fda72ac4899c516e7486813af74254eb$var$REPLACE]) {
      return /./[$fda72ac4899c516e7486813af74254eb$var$REPLACE]('a', '$0') === '';
    }
    return false;
  }();

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var $fda72ac4899c516e7486813af74254eb$var$SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () {
      return originalExec.apply(this, arguments);
    };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });
  $fda72ac4899c516e7486813af74254eb$exports = function (KEY, length, exec, sham) {
    var SYMBOL = $a241c8cf065084cf6d499662389d097$exports(KEY);
    var DELEGATES_TO_SYMBOL = !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () {
        return 7;
      };
      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;
      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[$fda72ac4899c516e7486813af74254eb$var$SPECIES] = function () {
          return re;
        };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }
      re.exec = function () {
        execCalled = true;
        return null;
      };
      re[SYMBOL]('');
      return !execCalled;
    });
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !($fda72ac4899c516e7486813af74254eb$var$REPLACE_SUPPORTS_NAMED_GROUPS && $fda72ac4899c516e7486813af74254eb$var$REPLACE_KEEPS_$0 && !$fda72ac4899c516e7486813af74254eb$var$REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === 'split' && !$fda72ac4899c516e7486813af74254eb$var$SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === $d438da3780b82afe6a6f510eaf6d385$exports) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: nativeRegExpMethod.call(regexp, str, arg2)
            };
          }
          return {
            done: true,
            value: nativeMethod.call(str, regexp, arg2)
          };
        }
        return {
          done: false
        };
      }, {
        REPLACE_KEEPS_$0: $fda72ac4899c516e7486813af74254eb$var$REPLACE_KEEPS_$0,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: $fda72ac4899c516e7486813af74254eb$var$REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
      });
      var stringMethod = methods[0];
      var regexMethod = methods[1];
      $e3c8a1361cc0783bc835b9e100a3660b$exports(String.prototype, KEY, stringMethod);
      $e3c8a1361cc0783bc835b9e100a3660b$exports(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) {
        return regexMethod.call(string, this, arg);
      }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) {
        return regexMethod.call(string, this);
      });
    }
    if (sham) $cccb6b555b82a0b86f5e6c39c4b7c7b$exports(RegExp.prototype[SYMBOL], 'sham', true);
  }; // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.match.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\advance-string-index.js
  var $cce44bbe29ddd1b61475f44ccb48ae0$exports = {};
  var $cce44bbe29ddd1b61475f44ccb48ae0$var$charAt = $be18c92a8c61f6589ba91e084ce$exports.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex
  $cce44bbe29ddd1b61475f44ccb48ae0$exports = function (S, index, unicode) {
    return index + (unicode ? $cce44bbe29ddd1b61475f44ccb48ae0$var$charAt(S, index).length : 1);
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\regexp-exec-abstract.js
  var $a6f57287a410b609b9187bcf8b91aaf4$exports = {};
  // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec
  $a6f57287a410b609b9187bcf8b91aaf4$exports = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }
    if ($b499f0f4b947123008cbd2ef011785$exports(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }
    return $d438da3780b82afe6a6f510eaf6d385$exports.call(R, S);
  };
  // @@match logic
  $fda72ac4899c516e7486813af74254eb$exports('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
    return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = $b71c0730843361a14fc0393fd741336c$exports(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;
      var rx = $ca96f020fbb32dd48b2236cb9c$exports(regexp);
      var S = String(this);
      if (!rx.global) return $a6f57287a410b609b9187bcf8b91aaf4$exports(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = $a6f57287a410b609b9187bcf8b91aaf4$exports(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = $cce44bbe29ddd1b61475f44ccb48ae0$exports(S, $df129385d5f4540f45d9004e6da0d$exports(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }];
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.pad-end.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\string-pad.js
  var $f4e2dc7c28844ffb6cfdf6ce69de30b$exports = {}; // https://github.com/tc39/proposal-string-pad-start-end
  var $f4e2dc7c28844ffb6cfdf6ce69de30b$var$ceil = Math.ceil;

  // `String.prototype.{ padStart, padEnd }` methods implementation
  var $f4e2dc7c28844ffb6cfdf6ce69de30b$var$createMethod = function (IS_END) {
    return function ($this, maxLength, fillString) {
      var S = String($b71c0730843361a14fc0393fd741336c$exports($this));
      var stringLength = S.length;
      var fillStr = fillString === undefined ? ' ' : String(fillString);
      var intMaxLength = $df129385d5f4540f45d9004e6da0d$exports(maxLength);
      var fillLen, stringFiller;
      if (intMaxLength <= stringLength || fillStr == '') return S;
      fillLen = intMaxLength - stringLength;
      stringFiller = $f73bb1261b60aaf10b273e6d444475b8$exports.call(fillStr, $f4e2dc7c28844ffb6cfdf6ce69de30b$var$ceil(fillLen / fillStr.length));
      if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
      return IS_END ? S + stringFiller : stringFiller + S;
    };
  };
  $f4e2dc7c28844ffb6cfdf6ce69de30b$exports = {
    // `String.prototype.padStart` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.padstart
    start: $f4e2dc7c28844ffb6cfdf6ce69de30b$var$createMethod(false),
    // `String.prototype.padEnd` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.padend
    end: $f4e2dc7c28844ffb6cfdf6ce69de30b$var$createMethod(true)
  };
  var $e450e7c39d5169dac60a401faf8$var$$padEnd = $f4e2dc7c28844ffb6cfdf6ce69de30b$exports.end;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\string-pad-webkit-bug.js
  var $a093a5d35a9ff03f11b4a87cba1c271b$exports = {}; // https://github.com/zloirock/core-js/issues/280
  // eslint-disable-next-line unicorn/no-unsafe-regex
  $a093a5d35a9ff03f11b4a87cba1c271b$exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test($faa9dc823f5f739a68a846c4dbffdc$exports);
  // `String.prototype.padEnd` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padend
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $a093a5d35a9ff03f11b4a87cba1c271b$exports
  }, {
    padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
      return $e450e7c39d5169dac60a401faf8$var$$padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.pad-start.js
  var $d4b14fb5998313c11fc3347c6541773$var$$padStart = $f4e2dc7c28844ffb6cfdf6ce69de30b$exports.start;
  // `String.prototype.padStart` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padstart
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $a093a5d35a9ff03f11b4a87cba1c271b$exports
  }, {
    padStart: function padStart(maxLength /* , fillString = ' ' */) {
      return $d4b14fb5998313c11fc3347c6541773$var$$padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.raw.js
  // `String.raw` method
  // https://tc39.github.io/ecma262/#sec-string.raw
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    stat: true
  }, {
    raw: function raw(template) {
      var rawTemplate = $d3edb8b5b29142657e301b5e7cecac5$exports(template.raw);
      var literalSegments = $df129385d5f4540f45d9004e6da0d$exports(rawTemplate.length);
      var argumentsLength = arguments.length;
      var elements = [];
      var i = 0;
      while (literalSegments > i) {
        elements.push(String(rawTemplate[i++]));
        if (i < argumentsLength) elements.push(String(arguments[i]));
      }
      return elements.join('');
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.repeat.js
  // `String.prototype.repeat` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.repeat
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true
  }, {
    repeat: $f73bb1261b60aaf10b273e6d444475b8$exports
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.replace.js
  var $cf23b460f4e7a147b0211ea1d58ec6$var$max = Math.max;
  var $cf23b460f4e7a147b0211ea1d58ec6$var$min = Math.min;
  var $cf23b460f4e7a147b0211ea1d58ec6$var$floor = Math.floor;
  var $cf23b460f4e7a147b0211ea1d58ec6$var$SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
  var $cf23b460f4e7a147b0211ea1d58ec6$var$SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;
  var $cf23b460f4e7a147b0211ea1d58ec6$var$maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  $fda72ac4899c516e7486813af74254eb$exports('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
    var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = $b71c0730843361a14fc0393fd741336c$exports(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }
      var rx = $ca96f020fbb32dd48b2236cb9c$exports(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = $a6f57287a410b609b9187bcf8b91aaf4$exports(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = $cce44bbe29ddd1b61475f44ccb48ae0$exports(S, $df129385d5f4540f45d9004e6da0d$exports(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = $cf23b460f4e7a147b0211ea1d58ec6$var$max($cf23b460f4e7a147b0211ea1d58ec6$var$min($d094f929ef4c732d238eb970cba7b45$exports(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push($cf23b460f4e7a147b0211ea1d58ec6$var$maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = $cf23b460f4e7a147b0211ea1d58ec6$var$SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== undefined) {
        namedCaptures = $cc8d97c6287a31e609e67fc971001f$exports(namedCaptures);
        symbols = $cf23b460f4e7a147b0211ea1d58ec6$var$SUBSTITUTION_SYMBOLS;
      }
      return nativeReplace.call(replacement, symbols, function (match, ch) {
        var capture;
        switch (ch.charAt(0)) {
          case '$':
            return '$';
          case '&':
            return matched;
          case '`':
            return str.slice(0, position);
          case "'":
            return str.slice(tailPos);
          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;
          default:
            // \d\d?
            var n = +ch;
            if (n === 0) return match;
            if (n > m) {
              var f = $cf23b460f4e7a147b0211ea1d58ec6$var$floor(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }
            capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
      });
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.search.js
  // @@search logic
  $fda72ac4899c516e7486813af74254eb$exports('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
    return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = $b71c0730843361a14fc0393fd741336c$exports(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;
      var rx = $ca96f020fbb32dd48b2236cb9c$exports(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!$f35cacfd9cd7a56874e970b368ec49$exports(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = $a6f57287a410b609b9187bcf8b91aaf4$exports(rx, S);
      if (!$f35cacfd9cd7a56874e970b368ec49$exports(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }];
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.split.js
  var $cb5b8d7f6d7062b6addc15d9bd19cba5$var$arrayPush = [].push;
  var $cb5b8d7f6d7062b6addc15d9bd19cba5$var$min = Math.min;
  var $cb5b8d7f6d7062b6addc15d9bd19cba5$var$MAX_UINT32 = 0xFFFFFFFF;

  // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
  var $cb5b8d7f6d7062b6addc15d9bd19cba5$var$SUPPORTS_Y = !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    return !RegExp($cb5b8d7f6d7062b6addc15d9bd19cba5$var$MAX_UINT32, 'y');
  });

  // @@split logic
  $fda72ac4899c516e7486813af74254eb$exports('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if ('abbc'.split(/(b)*/)[1] == 'c' || 'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String($b71c0730843361a14fc0393fd741336c$exports(this));
        var lim = limit === undefined ? $cb5b8d7f6d7062b6addc15d9bd19cba5$var$MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        // If `separator` is not a regex, use native split
        if (!$e093ffc1044877620e6cc0f6b0f00$exports(separator)) {
          return nativeSplit.call(string, separator, lim);
        }
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = $d438da3780b82afe6a6f510eaf6d385$exports.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) $cb5b8d7f6d7062b6addc15d9bd19cba5$var$arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output.length > lim ? output.slice(0, lim) : output;
      };
      // Chakra, V8
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;
    return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = $b71c0730843361a14fc0393fd741336c$exports(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
      var rx = $ca96f020fbb32dd48b2236cb9c$exports(regexp);
      var S = String(this);
      var C = $de01eb37a632c5cc8bc6158846def6d$exports(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + ($cb5b8d7f6d7062b6addc15d9bd19cba5$var$SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C($cb5b8d7f6d7062b6addc15d9bd19cba5$var$SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? $cb5b8d7f6d7062b6addc15d9bd19cba5$var$MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return $a6f57287a410b609b9187bcf8b91aaf4$exports(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = $cb5b8d7f6d7062b6addc15d9bd19cba5$var$SUPPORTS_Y ? q : 0;
        var z = $a6f57287a410b609b9187bcf8b91aaf4$exports(splitter, $cb5b8d7f6d7062b6addc15d9bd19cba5$var$SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (z === null || (e = $cb5b8d7f6d7062b6addc15d9bd19cba5$var$min($df129385d5f4540f45d9004e6da0d$exports(splitter.lastIndex + ($cb5b8d7f6d7062b6addc15d9bd19cba5$var$SUPPORTS_Y ? 0 : q)), S.length)) === p) {
          q = $cce44bbe29ddd1b61475f44ccb48ae0$exports(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }];
  }, !$cb5b8d7f6d7062b6addc15d9bd19cba5$var$SUPPORTS_Y); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.starts-with.js
  var $a494ee45e370622cc2de86e5df3416ea$var$getOwnPropertyDescriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f;
  var $a494ee45e370622cc2de86e5df3416ea$var$nativeStartsWith = ''.startsWith;
  var $a494ee45e370622cc2de86e5df3416ea$var$min = Math.min;
  var $a494ee45e370622cc2de86e5df3416ea$var$CORRECT_IS_REGEXP_LOGIC = $f2926699cf44e7c69280160c20a226f$exports('startsWith');
  // https://github.com/zloirock/core-js/pull/702
  var $a494ee45e370622cc2de86e5df3416ea$var$MDN_POLYFILL_BUG = !$f57ba62cba687e9257bf807714b47$exports && !$a494ee45e370622cc2de86e5df3416ea$var$CORRECT_IS_REGEXP_LOGIC && !!function () {
    var descriptor = $a494ee45e370622cc2de86e5df3416ea$var$getOwnPropertyDescriptor(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.startsWith` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.startswith
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: !$a494ee45e370622cc2de86e5df3416ea$var$MDN_POLYFILL_BUG && !$a494ee45e370622cc2de86e5df3416ea$var$CORRECT_IS_REGEXP_LOGIC
  }, {
    startsWith: function startsWith(searchString /* , position = 0 */) {
      var that = String($b71c0730843361a14fc0393fd741336c$exports(this));
      $fd042be92dc98e09a2247174a45cd45e$exports(searchString);
      var index = $df129385d5f4540f45d9004e6da0d$exports($a494ee45e370622cc2de86e5df3416ea$var$min(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = String(searchString);
      return $a494ee45e370622cc2de86e5df3416ea$var$nativeStartsWith ? $a494ee45e370622cc2de86e5df3416ea$var$nativeStartsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.trim.js
  var $bd161e4c155336d98610afccb818062$var$$trim = $b9482c1abbd9a13d23fe3d80c172977a$exports.trim;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\string-trim-forced.js
  var $b2071eb370ec8c324f0545dcc09f928d$exports = {};
  var $b2071eb370ec8c324f0545dcc09f928d$var$non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  $b2071eb370ec8c324f0545dcc09f928d$exports = function (METHOD_NAME) {
    return $efaceca3db1203b03f84edf56feaf8f$exports(function () {
      return !!$aa8520fc3f45679591044fcad3a40a8$exports[METHOD_NAME]() || $b2071eb370ec8c324f0545dcc09f928d$var$non[METHOD_NAME]() != $b2071eb370ec8c324f0545dcc09f928d$var$non || $aa8520fc3f45679591044fcad3a40a8$exports[METHOD_NAME].name !== METHOD_NAME;
    });
  };
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $b2071eb370ec8c324f0545dcc09f928d$exports('trim')
  }, {
    trim: function trim() {
      return $bd161e4c155336d98610afccb818062$var$$trim(this);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.trim-end.js
  var $f977097b2fe292374abcc340874f04e3$var$$trimEnd = $b9482c1abbd9a13d23fe3d80c172977a$exports.end;
  var $f977097b2fe292374abcc340874f04e3$var$FORCED = $b2071eb370ec8c324f0545dcc09f928d$exports('trimEnd');
  var $f977097b2fe292374abcc340874f04e3$var$trimEnd = $f977097b2fe292374abcc340874f04e3$var$FORCED ? function trimEnd() {
    return $f977097b2fe292374abcc340874f04e3$var$$trimEnd(this);
  } : ''.trimEnd;

  // `String.prototype.{ trimEnd, trimRight }` methods
  // https://github.com/tc39/ecmascript-string-left-right-trim
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $f977097b2fe292374abcc340874f04e3$var$FORCED
  }, {
    trimEnd: $f977097b2fe292374abcc340874f04e3$var$trimEnd,
    trimRight: $f977097b2fe292374abcc340874f04e3$var$trimEnd
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.trim-start.js
  var $e86793761bb3f03a7171052a0794c4e$var$$trimStart = $b9482c1abbd9a13d23fe3d80c172977a$exports.start;
  var $e86793761bb3f03a7171052a0794c4e$var$FORCED = $b2071eb370ec8c324f0545dcc09f928d$exports('trimStart');
  var $e86793761bb3f03a7171052a0794c4e$var$trimStart = $e86793761bb3f03a7171052a0794c4e$var$FORCED ? function trimStart() {
    return $e86793761bb3f03a7171052a0794c4e$var$$trimStart(this);
  } : ''.trimStart;

  // `String.prototype.{ trimStart, trimLeft }` methods
  // https://github.com/tc39/ecmascript-string-left-right-trim
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $e86793761bb3f03a7171052a0794c4e$var$FORCED
  }, {
    trimStart: $e86793761bb3f03a7171052a0794c4e$var$trimStart,
    trimLeft: $e86793761bb3f03a7171052a0794c4e$var$trimStart
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.anchor.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\create-html.js
  var $c92ec725fa89fa143b24be6d1c49dd7f$exports = {};
  var $c92ec725fa89fa143b24be6d1c49dd7f$var$quot = /"/g;

  // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
  // https://tc39.github.io/ecma262/#sec-createhtml
  $c92ec725fa89fa143b24be6d1c49dd7f$exports = function (string, tag, attribute, value) {
    var S = String($b71c0730843361a14fc0393fd741336c$exports(string));
    var p1 = '<' + tag;
    if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace($c92ec725fa89fa143b24be6d1c49dd7f$var$quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\string-html-forced.js
  var $bec63a5c9054944787664c50cf10bb1$exports = {};
  // check the existence of a method, lowercase
  // of a tag and escaping quotes in arguments
  $bec63a5c9054944787664c50cf10bb1$exports = function (METHOD_NAME) {
    return $efaceca3db1203b03f84edf56feaf8f$exports(function () {
      var test = ''[METHOD_NAME]('"');
      return test !== test.toLowerCase() || test.split('"').length > 3;
    });
  };
  // `String.prototype.anchor` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.anchor
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $bec63a5c9054944787664c50cf10bb1$exports('anchor')
  }, {
    anchor: function anchor(name) {
      return $c92ec725fa89fa143b24be6d1c49dd7f$exports(this, 'a', 'name', name);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.big.js
  // `String.prototype.big` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.big
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $bec63a5c9054944787664c50cf10bb1$exports('big')
  }, {
    big: function big() {
      return $c92ec725fa89fa143b24be6d1c49dd7f$exports(this, 'big', '', '');
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.blink.js
  // `String.prototype.blink` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.blink
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $bec63a5c9054944787664c50cf10bb1$exports('blink')
  }, {
    blink: function blink() {
      return $c92ec725fa89fa143b24be6d1c49dd7f$exports(this, 'blink', '', '');
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.bold.js
  // `String.prototype.bold` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.bold
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $bec63a5c9054944787664c50cf10bb1$exports('bold')
  }, {
    bold: function bold() {
      return $c92ec725fa89fa143b24be6d1c49dd7f$exports(this, 'b', '', '');
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.fixed.js
  // `String.prototype.fixed` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.fixed
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $bec63a5c9054944787664c50cf10bb1$exports('fixed')
  }, {
    fixed: function fixed() {
      return $c92ec725fa89fa143b24be6d1c49dd7f$exports(this, 'tt', '', '');
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.fontcolor.js
  // `String.prototype.fontcolor` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.fontcolor
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $bec63a5c9054944787664c50cf10bb1$exports('fontcolor')
  }, {
    fontcolor: function fontcolor(color) {
      return $c92ec725fa89fa143b24be6d1c49dd7f$exports(this, 'font', 'color', color);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.fontsize.js
  // `String.prototype.fontsize` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.fontsize
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $bec63a5c9054944787664c50cf10bb1$exports('fontsize')
  }, {
    fontsize: function fontsize(size) {
      return $c92ec725fa89fa143b24be6d1c49dd7f$exports(this, 'font', 'size', size);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.italics.js
  // `String.prototype.italics` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.italics
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $bec63a5c9054944787664c50cf10bb1$exports('italics')
  }, {
    italics: function italics() {
      return $c92ec725fa89fa143b24be6d1c49dd7f$exports(this, 'i', '', '');
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.link.js
  // `String.prototype.link` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.link
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $bec63a5c9054944787664c50cf10bb1$exports('link')
  }, {
    link: function link(url) {
      return $c92ec725fa89fa143b24be6d1c49dd7f$exports(this, 'a', 'href', url);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.small.js
  // `String.prototype.small` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.small
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $bec63a5c9054944787664c50cf10bb1$exports('small')
  }, {
    small: function small() {
      return $c92ec725fa89fa143b24be6d1c49dd7f$exports(this, 'small', '', '');
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.strike.js
  // `String.prototype.strike` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.strike
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $bec63a5c9054944787664c50cf10bb1$exports('strike')
  }, {
    strike: function strike() {
      return $c92ec725fa89fa143b24be6d1c49dd7f$exports(this, 'strike', '', '');
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.sub.js
  // `String.prototype.sub` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.sub
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $bec63a5c9054944787664c50cf10bb1$exports('sub')
  }, {
    sub: function sub() {
      return $c92ec725fa89fa143b24be6d1c49dd7f$exports(this, 'sub', '', '');
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.string.sup.js
  // `String.prototype.sup` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.sup
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'String',
    proto: true,
    forced: $bec63a5c9054944787664c50cf10bb1$exports('sup')
  }, {
    sup: function sup() {
      return $c92ec725fa89fa143b24be6d1c49dd7f$exports(this, 'sup', '', '');
    }
  });
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\typed-array-constructor.js
  var $bad3d9524fcc9c7c4a498e4ca3b$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\typed-array-constructors-require-wrappers.js
  var $f2428ce9aaddef4bf7ca0ea7acb1f3f6$exports = {};
  /* eslint-disable no-new */
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\array-buffer-view-core.js
  var $b4d675d33008fbd775eaa95f3f689de9$exports = {};
  var $b4d675d33008fbd775eaa95f3f689de9$var$defineProperty = $e0cd0bce67aea07baa689ea10527$export$f;
  var $b4d675d33008fbd775eaa95f3f689de9$var$Int8Array = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.Int8Array;
  var $b4d675d33008fbd775eaa95f3f689de9$var$Int8ArrayPrototype = $b4d675d33008fbd775eaa95f3f689de9$var$Int8Array && $b4d675d33008fbd775eaa95f3f689de9$var$Int8Array.prototype;
  var $b4d675d33008fbd775eaa95f3f689de9$var$Uint8ClampedArray = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.Uint8ClampedArray;
  var $b4d675d33008fbd775eaa95f3f689de9$var$Uint8ClampedArrayPrototype = $b4d675d33008fbd775eaa95f3f689de9$var$Uint8ClampedArray && $b4d675d33008fbd775eaa95f3f689de9$var$Uint8ClampedArray.prototype;
  var $b4d675d33008fbd775eaa95f3f689de9$var$TypedArray = $b4d675d33008fbd775eaa95f3f689de9$var$Int8Array && $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports($b4d675d33008fbd775eaa95f3f689de9$var$Int8Array);
  var $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayPrototype = $b4d675d33008fbd775eaa95f3f689de9$var$Int8ArrayPrototype && $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports($b4d675d33008fbd775eaa95f3f689de9$var$Int8ArrayPrototype);
  var $b4d675d33008fbd775eaa95f3f689de9$var$ObjectPrototype = Object.prototype;
  var $b4d675d33008fbd775eaa95f3f689de9$var$isPrototypeOf = $b4d675d33008fbd775eaa95f3f689de9$var$ObjectPrototype.isPrototypeOf;
  var $b4d675d33008fbd775eaa95f3f689de9$var$TO_STRING_TAG = $a241c8cf065084cf6d499662389d097$exports('toStringTag');
  var $b4d675d33008fbd775eaa95f3f689de9$var$TYPED_ARRAY_TAG = $ebaf71c27182b704b57713b$exports('TYPED_ARRAY_TAG');
  // Fixing native typed arrays in Opera Presto crashes the browser, see #595
  var $b4d675d33008fbd775eaa95f3f689de9$var$NATIVE_ARRAY_BUFFER_VIEWS = $a7a8c6084ba7f3e4de9f9c34dcfc110e$exports && !!$fc7c3cdaee9ffa16612f5bbf0d2a633$exports && $ef9d499d695cd246c34e60e7d380677e$exports($cbab2f3c4d2181527b69a2bf91b9e1fd$exports.opera) !== 'Opera';
  var $b4d675d33008fbd775eaa95f3f689de9$var$TYPED_ARRAY_TAG_REQIRED = false;
  var $b4d675d33008fbd775eaa95f3f689de9$var$NAME;
  var $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  };
  var $b4d675d33008fbd775eaa95f3f689de9$var$isView = function isView(it) {
    var klass = $ef9d499d695cd246c34e60e7d380677e$exports(it);
    return klass === 'DataView' || $fb61ad628fb3464a4b59a2997dacf0$exports($b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayConstructorsList, klass);
  };
  var $b4d675d33008fbd775eaa95f3f689de9$var$isTypedArray = function (it) {
    return $ce5aa73a2f4131a4f5ee32067e6336$exports(it) && $fb61ad628fb3464a4b59a2997dacf0$exports($b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayConstructorsList, $ef9d499d695cd246c34e60e7d380677e$exports(it));
  };
  var $b4d675d33008fbd775eaa95f3f689de9$var$aTypedArray = function (it) {
    if ($b4d675d33008fbd775eaa95f3f689de9$var$isTypedArray(it)) return it;
    throw TypeError('Target is not a typed array');
  };
  var $b4d675d33008fbd775eaa95f3f689de9$var$aTypedArrayConstructor = function (C) {
    if ($fc7c3cdaee9ffa16612f5bbf0d2a633$exports) {
      if ($b4d675d33008fbd775eaa95f3f689de9$var$isPrototypeOf.call($b4d675d33008fbd775eaa95f3f689de9$var$TypedArray, C)) return C;
    } else for (var ARRAY in $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayConstructorsList) if ($fb61ad628fb3464a4b59a2997dacf0$exports($b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayConstructorsList, $b4d675d33008fbd775eaa95f3f689de9$var$NAME)) {
      var TypedArrayConstructor = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[ARRAY];
      if (TypedArrayConstructor && (C === TypedArrayConstructor || $b4d675d33008fbd775eaa95f3f689de9$var$isPrototypeOf.call(TypedArrayConstructor, C))) {
        return C;
      }
    }
    throw TypeError('Target is not a typed array constructor');
  };
  var $b4d675d33008fbd775eaa95f3f689de9$var$exportTypedArrayMethod = function (KEY, property, forced) {
    if (!$a7c68cb8fd81a83c8a53a82a3f122f3e$exports) return;
    if (forced) for (var ARRAY in $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayConstructorsList) {
      var TypedArrayConstructor = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[ARRAY];
      if (TypedArrayConstructor && $fb61ad628fb3464a4b59a2997dacf0$exports(TypedArrayConstructor.prototype, KEY)) {
        delete TypedArrayConstructor.prototype[KEY];
      }
    }
    if (!$b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayPrototype[KEY] || forced) {
      $e3c8a1361cc0783bc835b9e100a3660b$exports($b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayPrototype, KEY, forced ? property : $b4d675d33008fbd775eaa95f3f689de9$var$NATIVE_ARRAY_BUFFER_VIEWS && $b4d675d33008fbd775eaa95f3f689de9$var$Int8ArrayPrototype[KEY] || property);
    }
  };
  var $b4d675d33008fbd775eaa95f3f689de9$var$exportTypedArrayStaticMethod = function (KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!$a7c68cb8fd81a83c8a53a82a3f122f3e$exports) return;
    if ($fc7c3cdaee9ffa16612f5bbf0d2a633$exports) {
      if (forced) for (ARRAY in $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayConstructorsList) {
        TypedArrayConstructor = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[ARRAY];
        if (TypedArrayConstructor && $fb61ad628fb3464a4b59a2997dacf0$exports(TypedArrayConstructor, KEY)) {
          delete TypedArrayConstructor[KEY];
        }
      }
      if (!$b4d675d33008fbd775eaa95f3f689de9$var$TypedArray[KEY] || forced) {
        // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
        try {
          return $e3c8a1361cc0783bc835b9e100a3660b$exports($b4d675d33008fbd775eaa95f3f689de9$var$TypedArray, KEY, forced ? property : $b4d675d33008fbd775eaa95f3f689de9$var$NATIVE_ARRAY_BUFFER_VIEWS && $b4d675d33008fbd775eaa95f3f689de9$var$Int8Array[KEY] || property);
        } catch (error) {/* empty */}
      } else return;
    }
    for (ARRAY in $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayConstructorsList) {
      TypedArrayConstructor = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[ARRAY];
      if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
        $e3c8a1361cc0783bc835b9e100a3660b$exports(TypedArrayConstructor, KEY, property);
      }
    }
  };
  for ($b4d675d33008fbd775eaa95f3f689de9$var$NAME in $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayConstructorsList) {
    if (!$cbab2f3c4d2181527b69a2bf91b9e1fd$exports[$b4d675d33008fbd775eaa95f3f689de9$var$NAME]) $b4d675d33008fbd775eaa95f3f689de9$var$NATIVE_ARRAY_BUFFER_VIEWS = false;
  }

  // WebKit bug - typed arrays constructors prototype is Object.prototype
  if (!$b4d675d33008fbd775eaa95f3f689de9$var$NATIVE_ARRAY_BUFFER_VIEWS || typeof $b4d675d33008fbd775eaa95f3f689de9$var$TypedArray != 'function' || $b4d675d33008fbd775eaa95f3f689de9$var$TypedArray === Function.prototype) {
    // eslint-disable-next-line no-shadow
    $b4d675d33008fbd775eaa95f3f689de9$var$TypedArray = function TypedArray() {
      throw TypeError('Incorrect invocation');
    };
    if ($b4d675d33008fbd775eaa95f3f689de9$var$NATIVE_ARRAY_BUFFER_VIEWS) for ($b4d675d33008fbd775eaa95f3f689de9$var$NAME in $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayConstructorsList) {
      if ($cbab2f3c4d2181527b69a2bf91b9e1fd$exports[$b4d675d33008fbd775eaa95f3f689de9$var$NAME]) $fc7c3cdaee9ffa16612f5bbf0d2a633$exports($cbab2f3c4d2181527b69a2bf91b9e1fd$exports[$b4d675d33008fbd775eaa95f3f689de9$var$NAME], $b4d675d33008fbd775eaa95f3f689de9$var$TypedArray);
    }
  }
  if (!$b4d675d33008fbd775eaa95f3f689de9$var$NATIVE_ARRAY_BUFFER_VIEWS || !$b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayPrototype || $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayPrototype === $b4d675d33008fbd775eaa95f3f689de9$var$ObjectPrototype) {
    $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayPrototype = $b4d675d33008fbd775eaa95f3f689de9$var$TypedArray.prototype;
    if ($b4d675d33008fbd775eaa95f3f689de9$var$NATIVE_ARRAY_BUFFER_VIEWS) for ($b4d675d33008fbd775eaa95f3f689de9$var$NAME in $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayConstructorsList) {
      if ($cbab2f3c4d2181527b69a2bf91b9e1fd$exports[$b4d675d33008fbd775eaa95f3f689de9$var$NAME]) $fc7c3cdaee9ffa16612f5bbf0d2a633$exports($cbab2f3c4d2181527b69a2bf91b9e1fd$exports[$b4d675d33008fbd775eaa95f3f689de9$var$NAME].prototype, $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayPrototype);
    }
  }

  // WebKit bug - one more object in Uint8ClampedArray prototype chain
  if ($b4d675d33008fbd775eaa95f3f689de9$var$NATIVE_ARRAY_BUFFER_VIEWS && $ff8ba30449b22ad7fcaa2e5c15bd4e66$exports($b4d675d33008fbd775eaa95f3f689de9$var$Uint8ClampedArrayPrototype) !== $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayPrototype) {
    $fc7c3cdaee9ffa16612f5bbf0d2a633$exports($b4d675d33008fbd775eaa95f3f689de9$var$Uint8ClampedArrayPrototype, $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayPrototype);
  }
  if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports && !$fb61ad628fb3464a4b59a2997dacf0$exports($b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayPrototype, $b4d675d33008fbd775eaa95f3f689de9$var$TO_STRING_TAG)) {
    $b4d675d33008fbd775eaa95f3f689de9$var$TYPED_ARRAY_TAG_REQIRED = true;
    $b4d675d33008fbd775eaa95f3f689de9$var$defineProperty($b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayPrototype, $b4d675d33008fbd775eaa95f3f689de9$var$TO_STRING_TAG, {
      get: function () {
        return $ce5aa73a2f4131a4f5ee32067e6336$exports(this) ? this[$b4d675d33008fbd775eaa95f3f689de9$var$TYPED_ARRAY_TAG] : undefined;
      }
    });
    for ($b4d675d33008fbd775eaa95f3f689de9$var$NAME in $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayConstructorsList) if ($cbab2f3c4d2181527b69a2bf91b9e1fd$exports[$b4d675d33008fbd775eaa95f3f689de9$var$NAME]) {
      $cccb6b555b82a0b86f5e6c39c4b7c7b$exports($cbab2f3c4d2181527b69a2bf91b9e1fd$exports[$b4d675d33008fbd775eaa95f3f689de9$var$NAME], $b4d675d33008fbd775eaa95f3f689de9$var$TYPED_ARRAY_TAG, $b4d675d33008fbd775eaa95f3f689de9$var$NAME);
    }
  }
  $b4d675d33008fbd775eaa95f3f689de9$exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: $b4d675d33008fbd775eaa95f3f689de9$var$NATIVE_ARRAY_BUFFER_VIEWS,
    TYPED_ARRAY_TAG: $b4d675d33008fbd775eaa95f3f689de9$var$TYPED_ARRAY_TAG_REQIRED && $b4d675d33008fbd775eaa95f3f689de9$var$TYPED_ARRAY_TAG,
    aTypedArray: $b4d675d33008fbd775eaa95f3f689de9$var$aTypedArray,
    aTypedArrayConstructor: $b4d675d33008fbd775eaa95f3f689de9$var$aTypedArrayConstructor,
    exportTypedArrayMethod: $b4d675d33008fbd775eaa95f3f689de9$var$exportTypedArrayMethod,
    exportTypedArrayStaticMethod: $b4d675d33008fbd775eaa95f3f689de9$var$exportTypedArrayStaticMethod,
    isView: $b4d675d33008fbd775eaa95f3f689de9$var$isView,
    isTypedArray: $b4d675d33008fbd775eaa95f3f689de9$var$isTypedArray,
    TypedArray: $b4d675d33008fbd775eaa95f3f689de9$var$TypedArray,
    TypedArrayPrototype: $b4d675d33008fbd775eaa95f3f689de9$var$TypedArrayPrototype
  };
  var $f2428ce9aaddef4bf7ca0ea7acb1f3f6$var$NATIVE_ARRAY_BUFFER_VIEWS = $b4d675d33008fbd775eaa95f3f689de9$exports.NATIVE_ARRAY_BUFFER_VIEWS;
  var $f2428ce9aaddef4bf7ca0ea7acb1f3f6$var$ArrayBuffer = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.ArrayBuffer;
  var $f2428ce9aaddef4bf7ca0ea7acb1f3f6$var$Int8Array = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.Int8Array;
  $f2428ce9aaddef4bf7ca0ea7acb1f3f6$exports = !$f2428ce9aaddef4bf7ca0ea7acb1f3f6$var$NATIVE_ARRAY_BUFFER_VIEWS || !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $f2428ce9aaddef4bf7ca0ea7acb1f3f6$var$Int8Array(1);
  }) || !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    new $f2428ce9aaddef4bf7ca0ea7acb1f3f6$var$Int8Array(-1);
  }) || !$ff50355ab8eb1a915fe785e1d83073e5$exports(function (iterable) {
    new $f2428ce9aaddef4bf7ca0ea7acb1f3f6$var$Int8Array();
    new $f2428ce9aaddef4bf7ca0ea7acb1f3f6$var$Int8Array(null);
    new $f2428ce9aaddef4bf7ca0ea7acb1f3f6$var$Int8Array(1.5);
    new $f2428ce9aaddef4bf7ca0ea7acb1f3f6$var$Int8Array(iterable);
  }, true) || $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
    return new $f2428ce9aaddef4bf7ca0ea7acb1f3f6$var$Int8Array(new $f2428ce9aaddef4bf7ca0ea7acb1f3f6$var$ArrayBuffer(2), 1, undefined).length !== 1;
  });
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\to-offset.js
  var $c271e541402d2474758479dea5$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\to-positive-integer.js
  var $ec17e096f0185b887f40af4e5936b0c$exports = {};
  $ec17e096f0185b887f40af4e5936b0c$exports = function (it) {
    var result = $d094f929ef4c732d238eb970cba7b45$exports(it);
    if (result < 0) throw RangeError("The argument can't be less than 0");
    return result;
  };
  $c271e541402d2474758479dea5$exports = function (it, BYTES) {
    var offset = $ec17e096f0185b887f40af4e5936b0c$exports(it);
    if (offset % BYTES) throw RangeError('Wrong offset');
    return offset;
  };
  var $bad3d9524fcc9c7c4a498e4ca3b$var$getOwnPropertyNames = $d9a6d5181c3eabba6bda9d711fdfa$export$f;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\typed-array-from.js
  var $ed90df968395a89527ff37996bbac$exports = {};
  var $ed90df968395a89527ff37996bbac$var$aTypedArrayConstructor = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArrayConstructor;
  $ed90df968395a89527ff37996bbac$exports = function from(source /* , mapfn, thisArg */) {
    var O = $cc8d97c6287a31e609e67fc971001f$exports(source);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = $d19886d1d6e229ee23952976627e4f4$exports(O);
    var i, length, result, step, iterator, next;
    if (iteratorMethod != undefined && !$c4a2281a8686657ad2b150da80d08d57$exports(iteratorMethod)) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      O = [];
      while (!(step = next.call(iterator)).done) {
        O.push(step.value);
      }
    }
    if (mapping && argumentsLength > 2) {
      mapfn = $d098e725d461df6003aa3baf1810a74$exports(mapfn, arguments[2], 2);
    }
    length = $df129385d5f4540f45d9004e6da0d$exports(O.length);
    result = new ($ed90df968395a89527ff37996bbac$var$aTypedArrayConstructor(this))(length);
    for (i = 0; length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };
  var $bad3d9524fcc9c7c4a498e4ca3b$var$forEach = $a44239821dbd12c71742ad33b885$exports.forEach;
  var $bad3d9524fcc9c7c4a498e4ca3b$var$getInternalState = $c9333b419e2d291fa24a6e5282e596$exports.get;
  var $bad3d9524fcc9c7c4a498e4ca3b$var$setInternalState = $c9333b419e2d291fa24a6e5282e596$exports.set;
  var $bad3d9524fcc9c7c4a498e4ca3b$var$nativeDefineProperty = $e0cd0bce67aea07baa689ea10527$export$f;
  var $bad3d9524fcc9c7c4a498e4ca3b$var$nativeGetOwnPropertyDescriptor = $ef3dd30401c6b3b1a77e9290273caca$export$f;
  var $bad3d9524fcc9c7c4a498e4ca3b$var$round = Math.round;
  var $bad3d9524fcc9c7c4a498e4ca3b$var$RangeError = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.RangeError;
  var $bad3d9524fcc9c7c4a498e4ca3b$var$ArrayBuffer = $d3585d522f61005dbeeb27c46c3a1$exports.ArrayBuffer;
  var $bad3d9524fcc9c7c4a498e4ca3b$var$DataView = $d3585d522f61005dbeeb27c46c3a1$exports.DataView;
  var $bad3d9524fcc9c7c4a498e4ca3b$var$NATIVE_ARRAY_BUFFER_VIEWS = $b4d675d33008fbd775eaa95f3f689de9$exports.NATIVE_ARRAY_BUFFER_VIEWS;
  var $bad3d9524fcc9c7c4a498e4ca3b$var$TYPED_ARRAY_TAG = $b4d675d33008fbd775eaa95f3f689de9$exports.TYPED_ARRAY_TAG;
  var $bad3d9524fcc9c7c4a498e4ca3b$var$TypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.TypedArray;
  var $bad3d9524fcc9c7c4a498e4ca3b$var$TypedArrayPrototype = $b4d675d33008fbd775eaa95f3f689de9$exports.TypedArrayPrototype;
  var $bad3d9524fcc9c7c4a498e4ca3b$var$aTypedArrayConstructor = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArrayConstructor;
  var $bad3d9524fcc9c7c4a498e4ca3b$var$isTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.isTypedArray;
  var $bad3d9524fcc9c7c4a498e4ca3b$var$BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var $bad3d9524fcc9c7c4a498e4ca3b$var$WRONG_LENGTH = 'Wrong length';
  var $bad3d9524fcc9c7c4a498e4ca3b$var$fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = new ($bad3d9524fcc9c7c4a498e4ca3b$var$aTypedArrayConstructor(C))(length);
    while (length > index) result[index] = list[index++];
    return result;
  };
  var $bad3d9524fcc9c7c4a498e4ca3b$var$addGetter = function (it, key) {
    $bad3d9524fcc9c7c4a498e4ca3b$var$nativeDefineProperty(it, key, {
      get: function () {
        return $bad3d9524fcc9c7c4a498e4ca3b$var$getInternalState(this)[key];
      }
    });
  };
  var $bad3d9524fcc9c7c4a498e4ca3b$var$isArrayBuffer = function (it) {
    var klass;
    return it instanceof $bad3d9524fcc9c7c4a498e4ca3b$var$ArrayBuffer || (klass = $ef9d499d695cd246c34e60e7d380677e$exports(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
  };
  var $bad3d9524fcc9c7c4a498e4ca3b$var$isTypedArrayIndex = function (target, key) {
    return $bad3d9524fcc9c7c4a498e4ca3b$var$isTypedArray(target) && typeof key != 'symbol' && key in target && String(+key) == String(key);
  };
  var $bad3d9524fcc9c7c4a498e4ca3b$var$wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
    return $bad3d9524fcc9c7c4a498e4ca3b$var$isTypedArrayIndex(target, key = $ec9b43a21fce0d1894877586c488a33$exports(key, true)) ? $c83efd2171483e9988d3cc48fb8a$exports(2, target[key]) : $bad3d9524fcc9c7c4a498e4ca3b$var$nativeGetOwnPropertyDescriptor(target, key);
  };
  var $bad3d9524fcc9c7c4a498e4ca3b$var$wrappedDefineProperty = function defineProperty(target, key, descriptor) {
    if ($bad3d9524fcc9c7c4a498e4ca3b$var$isTypedArrayIndex(target, key = $ec9b43a21fce0d1894877586c488a33$exports(key, true)) && $ce5aa73a2f4131a4f5ee32067e6336$exports(descriptor) && $fb61ad628fb3464a4b59a2997dacf0$exports(descriptor, 'value') && !$fb61ad628fb3464a4b59a2997dacf0$exports(descriptor, 'get') && !$fb61ad628fb3464a4b59a2997dacf0$exports(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable && (!$fb61ad628fb3464a4b59a2997dacf0$exports(descriptor, 'writable') || descriptor.writable) && (!$fb61ad628fb3464a4b59a2997dacf0$exports(descriptor, 'enumerable') || descriptor.enumerable)) {
      target[key] = descriptor.value;
      return target;
    }
    return $bad3d9524fcc9c7c4a498e4ca3b$var$nativeDefineProperty(target, key, descriptor);
  };
  if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports) {
    if (!$bad3d9524fcc9c7c4a498e4ca3b$var$NATIVE_ARRAY_BUFFER_VIEWS) {
      $ef3dd30401c6b3b1a77e9290273caca$export$f = $bad3d9524fcc9c7c4a498e4ca3b$var$wrappedGetOwnPropertyDescriptor;
      $e0cd0bce67aea07baa689ea10527$export$f = $bad3d9524fcc9c7c4a498e4ca3b$var$wrappedDefineProperty;
      $bad3d9524fcc9c7c4a498e4ca3b$var$addGetter($bad3d9524fcc9c7c4a498e4ca3b$var$TypedArrayPrototype, 'buffer');
      $bad3d9524fcc9c7c4a498e4ca3b$var$addGetter($bad3d9524fcc9c7c4a498e4ca3b$var$TypedArrayPrototype, 'byteOffset');
      $bad3d9524fcc9c7c4a498e4ca3b$var$addGetter($bad3d9524fcc9c7c4a498e4ca3b$var$TypedArrayPrototype, 'byteLength');
      $bad3d9524fcc9c7c4a498e4ca3b$var$addGetter($bad3d9524fcc9c7c4a498e4ca3b$var$TypedArrayPrototype, 'length');
    }
    $da20139527b9570444c7d5c06ae45fa2$exports({
      target: 'Object',
      stat: true,
      forced: !$bad3d9524fcc9c7c4a498e4ca3b$var$NATIVE_ARRAY_BUFFER_VIEWS
    }, {
      getOwnPropertyDescriptor: $bad3d9524fcc9c7c4a498e4ca3b$var$wrappedGetOwnPropertyDescriptor,
      defineProperty: $bad3d9524fcc9c7c4a498e4ca3b$var$wrappedDefineProperty
    });
    $bad3d9524fcc9c7c4a498e4ca3b$exports = function (TYPE, wrapper, CLAMPED) {
      var BYTES = TYPE.match(/\d+$/)[0] / 8;
      var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
      var GETTER = 'get' + TYPE;
      var SETTER = 'set' + TYPE;
      var NativeTypedArrayConstructor = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[CONSTRUCTOR_NAME];
      var TypedArrayConstructor = NativeTypedArrayConstructor;
      var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
      var exported = {};
      var getter = function (that, index) {
        var data = $bad3d9524fcc9c7c4a498e4ca3b$var$getInternalState(that);
        return data.view[GETTER](index * BYTES + data.byteOffset, true);
      };
      var setter = function (that, index, value) {
        var data = $bad3d9524fcc9c7c4a498e4ca3b$var$getInternalState(that);
        if (CLAMPED) value = (value = $bad3d9524fcc9c7c4a498e4ca3b$var$round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
        data.view[SETTER](index * BYTES + data.byteOffset, value, true);
      };
      var addElement = function (that, index) {
        $bad3d9524fcc9c7c4a498e4ca3b$var$nativeDefineProperty(that, index, {
          get: function () {
            return getter(this, index);
          },
          set: function (value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };
      if (!$bad3d9524fcc9c7c4a498e4ca3b$var$NATIVE_ARRAY_BUFFER_VIEWS) {
        TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
          $e359134306bb9a3c781645bdfc0c5d18$exports(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
          var index = 0;
          var byteOffset = 0;
          var buffer, byteLength, length;
          if (!$ce5aa73a2f4131a4f5ee32067e6336$exports(data)) {
            length = $b7ca1fa9f1d9d6cae98d59d0bb$exports(data);
            byteLength = length * BYTES;
            buffer = new $bad3d9524fcc9c7c4a498e4ca3b$var$ArrayBuffer(byteLength);
          } else if ($bad3d9524fcc9c7c4a498e4ca3b$var$isArrayBuffer(data)) {
            buffer = data;
            byteOffset = $c271e541402d2474758479dea5$exports(offset, BYTES);
            var $len = data.byteLength;
            if ($length === undefined) {
              if ($len % BYTES) throw $bad3d9524fcc9c7c4a498e4ca3b$var$RangeError($bad3d9524fcc9c7c4a498e4ca3b$var$WRONG_LENGTH);
              byteLength = $len - byteOffset;
              if (byteLength < 0) throw $bad3d9524fcc9c7c4a498e4ca3b$var$RangeError($bad3d9524fcc9c7c4a498e4ca3b$var$WRONG_LENGTH);
            } else {
              byteLength = $df129385d5f4540f45d9004e6da0d$exports($length) * BYTES;
              if (byteLength + byteOffset > $len) throw $bad3d9524fcc9c7c4a498e4ca3b$var$RangeError($bad3d9524fcc9c7c4a498e4ca3b$var$WRONG_LENGTH);
            }
            length = byteLength / BYTES;
          } else if ($bad3d9524fcc9c7c4a498e4ca3b$var$isTypedArray(data)) {
            return $bad3d9524fcc9c7c4a498e4ca3b$var$fromList(TypedArrayConstructor, data);
          } else {
            return $ed90df968395a89527ff37996bbac$exports.call(TypedArrayConstructor, data);
          }
          $bad3d9524fcc9c7c4a498e4ca3b$var$setInternalState(that, {
            buffer: buffer,
            byteOffset: byteOffset,
            byteLength: byteLength,
            length: length,
            view: new $bad3d9524fcc9c7c4a498e4ca3b$var$DataView(buffer)
          });
          while (index < length) addElement(that, index++);
        });
        if ($fc7c3cdaee9ffa16612f5bbf0d2a633$exports) $fc7c3cdaee9ffa16612f5bbf0d2a633$exports(TypedArrayConstructor, $bad3d9524fcc9c7c4a498e4ca3b$var$TypedArray);
        TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = $a968e88b66c89954fb6a8439bd2$exports($bad3d9524fcc9c7c4a498e4ca3b$var$TypedArrayPrototype);
      } else if ($f2428ce9aaddef4bf7ca0ea7acb1f3f6$exports) {
        TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
          $e359134306bb9a3c781645bdfc0c5d18$exports(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
          return $f7cf5bd62ee521585730e1f76900b85$exports(function () {
            if (!$ce5aa73a2f4131a4f5ee32067e6336$exports(data)) return new NativeTypedArrayConstructor($b7ca1fa9f1d9d6cae98d59d0bb$exports(data));
            if ($bad3d9524fcc9c7c4a498e4ca3b$var$isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, $c271e541402d2474758479dea5$exports(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, $c271e541402d2474758479dea5$exports(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
            if ($bad3d9524fcc9c7c4a498e4ca3b$var$isTypedArray(data)) return $bad3d9524fcc9c7c4a498e4ca3b$var$fromList(TypedArrayConstructor, data);
            return $ed90df968395a89527ff37996bbac$exports.call(TypedArrayConstructor, data);
          }(), dummy, TypedArrayConstructor);
        });
        if ($fc7c3cdaee9ffa16612f5bbf0d2a633$exports) $fc7c3cdaee9ffa16612f5bbf0d2a633$exports(TypedArrayConstructor, $bad3d9524fcc9c7c4a498e4ca3b$var$TypedArray);
        $bad3d9524fcc9c7c4a498e4ca3b$var$forEach($bad3d9524fcc9c7c4a498e4ca3b$var$getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
          if (!(key in TypedArrayConstructor)) {
            $cccb6b555b82a0b86f5e6c39c4b7c7b$exports(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
          }
        });
        TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
      }
      if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
        $cccb6b555b82a0b86f5e6c39c4b7c7b$exports(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
      }
      if ($bad3d9524fcc9c7c4a498e4ca3b$var$TYPED_ARRAY_TAG) {
        $cccb6b555b82a0b86f5e6c39c4b7c7b$exports(TypedArrayConstructorPrototype, $bad3d9524fcc9c7c4a498e4ca3b$var$TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
      }
      exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
      $da20139527b9570444c7d5c06ae45fa2$exports({
        global: true,
        forced: TypedArrayConstructor != NativeTypedArrayConstructor,
        sham: !$bad3d9524fcc9c7c4a498e4ca3b$var$NATIVE_ARRAY_BUFFER_VIEWS
      }, exported);
      if (!($bad3d9524fcc9c7c4a498e4ca3b$var$BYTES_PER_ELEMENT in TypedArrayConstructor)) {
        $cccb6b555b82a0b86f5e6c39c4b7c7b$exports(TypedArrayConstructor, $bad3d9524fcc9c7c4a498e4ca3b$var$BYTES_PER_ELEMENT, BYTES);
      }
      if (!($bad3d9524fcc9c7c4a498e4ca3b$var$BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
        $cccb6b555b82a0b86f5e6c39c4b7c7b$exports(TypedArrayConstructorPrototype, $bad3d9524fcc9c7c4a498e4ca3b$var$BYTES_PER_ELEMENT, BYTES);
      }
      $f554410d1aff73003a341f161b396478$exports(CONSTRUCTOR_NAME);
    };
  } else $bad3d9524fcc9c7c4a498e4ca3b$exports = function () {/* empty */}; // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.float32-array.js
  // `Float32Array` constructor
  // https://tc39.github.io/ecma262/#sec-typedarray-objects
  $bad3d9524fcc9c7c4a498e4ca3b$exports('Float32', function (init) {
    return function Float32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.float64-array.js
  // `Float64Array` constructor
  // https://tc39.github.io/ecma262/#sec-typedarray-objects
  $bad3d9524fcc9c7c4a498e4ca3b$exports('Float64', function (init) {
    return function Float64Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.int8-array.js
  // `Int8Array` constructor
  // https://tc39.github.io/ecma262/#sec-typedarray-objects
  $bad3d9524fcc9c7c4a498e4ca3b$exports('Int8', function (init) {
    return function Int8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.int16-array.js
  // `Int16Array` constructor
  // https://tc39.github.io/ecma262/#sec-typedarray-objects
  $bad3d9524fcc9c7c4a498e4ca3b$exports('Int16', function (init) {
    return function Int16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.int32-array.js
  // `Int32Array` constructor
  // https://tc39.github.io/ecma262/#sec-typedarray-objects
  $bad3d9524fcc9c7c4a498e4ca3b$exports('Int32', function (init) {
    return function Int32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.uint8-array.js
  // `Uint8Array` constructor
  // https://tc39.github.io/ecma262/#sec-typedarray-objects
  $bad3d9524fcc9c7c4a498e4ca3b$exports('Uint8', function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.uint8-clamped-array.js
  // `Uint8ClampedArray` constructor
  // https://tc39.github.io/ecma262/#sec-typedarray-objects
  $bad3d9524fcc9c7c4a498e4ca3b$exports('Uint8', function (init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }, true); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.uint16-array.js
  // `Uint16Array` constructor
  // https://tc39.github.io/ecma262/#sec-typedarray-objects
  $bad3d9524fcc9c7c4a498e4ca3b$exports('Uint16', function (init) {
    return function Uint16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.uint32-array.js
  // `Uint32Array` constructor
  // https://tc39.github.io/ecma262/#sec-typedarray-objects
  $bad3d9524fcc9c7c4a498e4ca3b$exports('Uint32', function (init) {
    return function Uint32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.copy-within.js
  var $c195adfc23a8f7c9b58fbe19c1ca0e6$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $c195adfc23a8f7c9b58fbe19c1ca0e6$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;

  // `%TypedArray%.prototype.copyWithin` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.copywithin
  $c195adfc23a8f7c9b58fbe19c1ca0e6$var$exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
    return $cac3dbd9eaefcf8db88e23dc7cfedb7a$exports.call($c195adfc23a8f7c9b58fbe19c1ca0e6$var$aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.every.js
  var $e44cb656f0964e6426166fe6382cb9ad$var$$every = $a44239821dbd12c71742ad33b885$exports.every;
  var $e44cb656f0964e6426166fe6382cb9ad$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $e44cb656f0964e6426166fe6382cb9ad$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;

  // `%TypedArray%.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.every
  $e44cb656f0964e6426166fe6382cb9ad$var$exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
    return $e44cb656f0964e6426166fe6382cb9ad$var$$every($e44cb656f0964e6426166fe6382cb9ad$var$aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.fill.js
  var $c902e8fe93d40746d7b64e586ccb1b9f$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $c902e8fe93d40746d7b64e586ccb1b9f$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;

  // `%TypedArray%.prototype.fill` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
  // eslint-disable-next-line no-unused-vars
  $c902e8fe93d40746d7b64e586ccb1b9f$var$exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
    return $e05f80abb07b929ffb652f47e7fdf8$exports.apply($c902e8fe93d40746d7b64e586ccb1b9f$var$aTypedArray(this), arguments);
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.filter.js
  var $f8afc125b9ba51c238a092d7a95f98$var$$filter = $a44239821dbd12c71742ad33b885$exports.filter;
  var $f8afc125b9ba51c238a092d7a95f98$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $f8afc125b9ba51c238a092d7a95f98$var$aTypedArrayConstructor = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArrayConstructor;
  var $f8afc125b9ba51c238a092d7a95f98$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;

  // `%TypedArray%.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.filter
  $f8afc125b9ba51c238a092d7a95f98$var$exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
    var list = $f8afc125b9ba51c238a092d7a95f98$var$$filter($f8afc125b9ba51c238a092d7a95f98$var$aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var C = $de01eb37a632c5cc8bc6158846def6d$exports(this, this.constructor);
    var index = 0;
    var length = list.length;
    var result = new ($f8afc125b9ba51c238a092d7a95f98$var$aTypedArrayConstructor(C))(length);
    while (length > index) result[index] = list[index++];
    return result;
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.find.js
  var $de3dfc367aebdbbfed256d6ac76ad69$var$$find = $a44239821dbd12c71742ad33b885$exports.find;
  var $de3dfc367aebdbbfed256d6ac76ad69$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $de3dfc367aebdbbfed256d6ac76ad69$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;

  // `%TypedArray%.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.find
  $de3dfc367aebdbbfed256d6ac76ad69$var$exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
    return $de3dfc367aebdbbfed256d6ac76ad69$var$$find($de3dfc367aebdbbfed256d6ac76ad69$var$aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.find-index.js
  var $b4a35726bae20118a8b31339af67f281$var$$findIndex = $a44239821dbd12c71742ad33b885$exports.findIndex;
  var $b4a35726bae20118a8b31339af67f281$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $b4a35726bae20118a8b31339af67f281$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;

  // `%TypedArray%.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.findindex
  $b4a35726bae20118a8b31339af67f281$var$exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
    return $b4a35726bae20118a8b31339af67f281$var$$findIndex($b4a35726bae20118a8b31339af67f281$var$aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.for-each.js
  var $d3979c2b728e2c849fd477741f422fd$var$$forEach = $a44239821dbd12c71742ad33b885$exports.forEach;
  var $d3979c2b728e2c849fd477741f422fd$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $d3979c2b728e2c849fd477741f422fd$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;

  // `%TypedArray%.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.foreach
  $d3979c2b728e2c849fd477741f422fd$var$exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {
    $d3979c2b728e2c849fd477741f422fd$var$$forEach($d3979c2b728e2c849fd477741f422fd$var$aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.from.js
  var $f731a9a5e7dfb921683be6c4e7334$var$exportTypedArrayStaticMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayStaticMethod;
  // `%TypedArray%.from` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.from
  $f731a9a5e7dfb921683be6c4e7334$var$exportTypedArrayStaticMethod('from', $ed90df968395a89527ff37996bbac$exports, $f2428ce9aaddef4bf7ca0ea7acb1f3f6$exports); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.includes.js
  var $b260cfe552410759fceb148513f72a$var$$includes = $a1d725b9b45bb416ceb1ec2e84dcc$exports.includes;
  var $b260cfe552410759fceb148513f72a$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $b260cfe552410759fceb148513f72a$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;

  // `%TypedArray%.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.includes
  $b260cfe552410759fceb148513f72a$var$exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
    return $b260cfe552410759fceb148513f72a$var$$includes($b260cfe552410759fceb148513f72a$var$aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.index-of.js
  var $a807e4f0caed0a583681aae9c6bb26d$var$$indexOf = $a1d725b9b45bb416ceb1ec2e84dcc$exports.indexOf;
  var $a807e4f0caed0a583681aae9c6bb26d$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $a807e4f0caed0a583681aae9c6bb26d$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;

  // `%TypedArray%.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.indexof
  $a807e4f0caed0a583681aae9c6bb26d$var$exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
    return $a807e4f0caed0a583681aae9c6bb26d$var$$indexOf($a807e4f0caed0a583681aae9c6bb26d$var$aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.iterator.js
  var $a430ebbc0c6232e6b76f882e945bada2$var$ITERATOR = $a241c8cf065084cf6d499662389d097$exports('iterator');
  var $a430ebbc0c6232e6b76f882e945bada2$var$Uint8Array = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.Uint8Array;
  var $a430ebbc0c6232e6b76f882e945bada2$var$arrayValues = $b07a75778f5206bb0f3d2b9a1642a55$exports.values;
  var $a430ebbc0c6232e6b76f882e945bada2$var$arrayKeys = $b07a75778f5206bb0f3d2b9a1642a55$exports.keys;
  var $a430ebbc0c6232e6b76f882e945bada2$var$arrayEntries = $b07a75778f5206bb0f3d2b9a1642a55$exports.entries;
  var $a430ebbc0c6232e6b76f882e945bada2$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $a430ebbc0c6232e6b76f882e945bada2$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;
  var $a430ebbc0c6232e6b76f882e945bada2$var$nativeTypedArrayIterator = $a430ebbc0c6232e6b76f882e945bada2$var$Uint8Array && $a430ebbc0c6232e6b76f882e945bada2$var$Uint8Array.prototype[$a430ebbc0c6232e6b76f882e945bada2$var$ITERATOR];
  var $a430ebbc0c6232e6b76f882e945bada2$var$CORRECT_ITER_NAME = !!$a430ebbc0c6232e6b76f882e945bada2$var$nativeTypedArrayIterator && ($a430ebbc0c6232e6b76f882e945bada2$var$nativeTypedArrayIterator.name == 'values' || $a430ebbc0c6232e6b76f882e945bada2$var$nativeTypedArrayIterator.name == undefined);
  var $a430ebbc0c6232e6b76f882e945bada2$var$typedArrayValues = function values() {
    return $a430ebbc0c6232e6b76f882e945bada2$var$arrayValues.call($a430ebbc0c6232e6b76f882e945bada2$var$aTypedArray(this));
  };

  // `%TypedArray%.prototype.entries` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.entries
  $a430ebbc0c6232e6b76f882e945bada2$var$exportTypedArrayMethod('entries', function entries() {
    return $a430ebbc0c6232e6b76f882e945bada2$var$arrayEntries.call($a430ebbc0c6232e6b76f882e945bada2$var$aTypedArray(this));
  });
  // `%TypedArray%.prototype.keys` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.keys
  $a430ebbc0c6232e6b76f882e945bada2$var$exportTypedArrayMethod('keys', function keys() {
    return $a430ebbc0c6232e6b76f882e945bada2$var$arrayKeys.call($a430ebbc0c6232e6b76f882e945bada2$var$aTypedArray(this));
  });
  // `%TypedArray%.prototype.values` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.values
  $a430ebbc0c6232e6b76f882e945bada2$var$exportTypedArrayMethod('values', $a430ebbc0c6232e6b76f882e945bada2$var$typedArrayValues, !$a430ebbc0c6232e6b76f882e945bada2$var$CORRECT_ITER_NAME);
  // `%TypedArray%.prototype[@@iterator]` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype-@@iterator
  $a430ebbc0c6232e6b76f882e945bada2$var$exportTypedArrayMethod($a430ebbc0c6232e6b76f882e945bada2$var$ITERATOR, $a430ebbc0c6232e6b76f882e945bada2$var$typedArrayValues, !$a430ebbc0c6232e6b76f882e945bada2$var$CORRECT_ITER_NAME); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.join.js
  var $e132c336be599ae22f26002aaa7347$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $e132c336be599ae22f26002aaa7347$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;
  var $e132c336be599ae22f26002aaa7347$var$$join = [].join;

  // `%TypedArray%.prototype.join` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
  // eslint-disable-next-line no-unused-vars
  $e132c336be599ae22f26002aaa7347$var$exportTypedArrayMethod('join', function join(separator) {
    return $e132c336be599ae22f26002aaa7347$var$$join.apply($e132c336be599ae22f26002aaa7347$var$aTypedArray(this), arguments);
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.last-index-of.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\array-last-index-of.js
  var $c8e8413fef9449e2f321510ff38d7fa0$exports = {};
  var $c8e8413fef9449e2f321510ff38d7fa0$var$min = Math.min;
  var $c8e8413fef9449e2f321510ff38d7fa0$var$nativeLastIndexOf = [].lastIndexOf;
  var $c8e8413fef9449e2f321510ff38d7fa0$var$NEGATIVE_ZERO = !!$c8e8413fef9449e2f321510ff38d7fa0$var$nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
  var $c8e8413fef9449e2f321510ff38d7fa0$var$STRICT_METHOD = $bb116b1b623648e29417fe2a9a96a295$exports('lastIndexOf');
  // For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method
  var $c8e8413fef9449e2f321510ff38d7fa0$var$USES_TO_LENGTH = $dc944bcf7ca9382c22a7882b254f2f36$exports('indexOf', {
    ACCESSORS: true,
    1: 0
  });
  var $c8e8413fef9449e2f321510ff38d7fa0$var$FORCED = $c8e8413fef9449e2f321510ff38d7fa0$var$NEGATIVE_ZERO || !$c8e8413fef9449e2f321510ff38d7fa0$var$STRICT_METHOD || !$c8e8413fef9449e2f321510ff38d7fa0$var$USES_TO_LENGTH;

  // `Array.prototype.lastIndexOf` method implementation
  // https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
  $c8e8413fef9449e2f321510ff38d7fa0$exports = $c8e8413fef9449e2f321510ff38d7fa0$var$FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if ($c8e8413fef9449e2f321510ff38d7fa0$var$NEGATIVE_ZERO) return $c8e8413fef9449e2f321510ff38d7fa0$var$nativeLastIndexOf.apply(this, arguments) || 0;
    var O = $d3edb8b5b29142657e301b5e7cecac5$exports(this);
    var length = $df129385d5f4540f45d9004e6da0d$exports(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = $c8e8413fef9449e2f321510ff38d7fa0$var$min(index, $d094f929ef4c732d238eb970cba7b45$exports(arguments[1]));
    if (index < 0) index = length + index;
    for (; index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
    return -1;
  } : $c8e8413fef9449e2f321510ff38d7fa0$var$nativeLastIndexOf;
  var $ada4640c286c5fb679dc1d7d1316c$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $ada4640c286c5fb679dc1d7d1316c$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;

  // `%TypedArray%.prototype.lastIndexOf` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.lastindexof
  // eslint-disable-next-line no-unused-vars
  $ada4640c286c5fb679dc1d7d1316c$var$exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
    return $c8e8413fef9449e2f321510ff38d7fa0$exports.apply($ada4640c286c5fb679dc1d7d1316c$var$aTypedArray(this), arguments);
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.map.js
  var $e1095c6c44daef810871a7d$var$$map = $a44239821dbd12c71742ad33b885$exports.map;
  var $e1095c6c44daef810871a7d$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $e1095c6c44daef810871a7d$var$aTypedArrayConstructor = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArrayConstructor;
  var $e1095c6c44daef810871a7d$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;

  // `%TypedArray%.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.map
  $e1095c6c44daef810871a7d$var$exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
    return $e1095c6c44daef810871a7d$var$$map($e1095c6c44daef810871a7d$var$aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
      return new ($e1095c6c44daef810871a7d$var$aTypedArrayConstructor($de01eb37a632c5cc8bc6158846def6d$exports(O, O.constructor)))(length);
    });
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.of.js
  var $b803c128c81a2ab62c3d98087f2db8$var$aTypedArrayConstructor = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArrayConstructor;
  var $b803c128c81a2ab62c3d98087f2db8$var$exportTypedArrayStaticMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayStaticMethod;

  // `%TypedArray%.of` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.of
  $b803c128c81a2ab62c3d98087f2db8$var$exportTypedArrayStaticMethod('of', function of( /* ...items */
  ) {
    var index = 0;
    var length = arguments.length;
    var result = new ($b803c128c81a2ab62c3d98087f2db8$var$aTypedArrayConstructor(this))(length);
    while (length > index) result[index] = arguments[index++];
    return result;
  }, $f2428ce9aaddef4bf7ca0ea7acb1f3f6$exports); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.reduce.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\array-reduce.js
  var $dfb903d15dab9ae606612615be02f7b6$exports = {};
  // `Array.prototype.{ reduce, reduceRight }` methods implementation
  var $dfb903d15dab9ae606612615be02f7b6$var$createMethod = function (IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      $dd1737e30ac45587cfd439eb433a7a$exports(callbackfn);
      var O = $cc8d97c6287a31e609e67fc971001f$exports(that);
      var self = $c8c30ff7b4b337039de62128343f6647$exports(O);
      var length = $df129385d5f4540f45d9004e6da0d$exports(O.length);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (IS_RIGHT ? index < 0 : length <= index) {
          throw TypeError('Reduce of empty array with no initial value');
        }
      }
      for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
      return memo;
    };
  };
  $dfb903d15dab9ae606612615be02f7b6$exports = {
    // `Array.prototype.reduce` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
    left: $dfb903d15dab9ae606612615be02f7b6$var$createMethod(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
    right: $dfb903d15dab9ae606612615be02f7b6$var$createMethod(true)
  };
  var $a2558df0986e4d6916cf2a0800de3d$var$$reduce = $dfb903d15dab9ae606612615be02f7b6$exports.left;
  var $a2558df0986e4d6916cf2a0800de3d$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $a2558df0986e4d6916cf2a0800de3d$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;

  // `%TypedArray%.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduce
  $a2558df0986e4d6916cf2a0800de3d$var$exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
    return $a2558df0986e4d6916cf2a0800de3d$var$$reduce($a2558df0986e4d6916cf2a0800de3d$var$aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.reduce-right.js
  var $c80dc8d18b03105cbcc012899f08e25$var$$reduceRight = $dfb903d15dab9ae606612615be02f7b6$exports.right;
  var $c80dc8d18b03105cbcc012899f08e25$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $c80dc8d18b03105cbcc012899f08e25$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;

  // `%TypedArray%.prototype.reduceRicht` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduceright
  $c80dc8d18b03105cbcc012899f08e25$var$exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
    return $c80dc8d18b03105cbcc012899f08e25$var$$reduceRight($c80dc8d18b03105cbcc012899f08e25$var$aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.reverse.js
  var $bdab18e659a5565d7d7854576e5e88c4$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $bdab18e659a5565d7d7854576e5e88c4$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;
  var $bdab18e659a5565d7d7854576e5e88c4$var$floor = Math.floor;

  // `%TypedArray%.prototype.reverse` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reverse
  $bdab18e659a5565d7d7854576e5e88c4$var$exportTypedArrayMethod('reverse', function reverse() {
    var that = this;
    var length = $bdab18e659a5565d7d7854576e5e88c4$var$aTypedArray(that).length;
    var middle = $bdab18e659a5565d7d7854576e5e88c4$var$floor(length / 2);
    var index = 0;
    var value;
    while (index < middle) {
      value = that[index];
      that[index++] = that[--length];
      that[length] = value;
    }
    return that;
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.set.js
  var $abbef7eed862ef8a5d0145f142f25f00$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $abbef7eed862ef8a5d0145f142f25f00$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;
  var $abbef7eed862ef8a5d0145f142f25f00$var$FORCED = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    // eslint-disable-next-line no-undef
    new Int8Array(1).set({});
  });

  // `%TypedArray%.prototype.set` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.set
  $abbef7eed862ef8a5d0145f142f25f00$var$exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
    $abbef7eed862ef8a5d0145f142f25f00$var$aTypedArray(this);
    var offset = $c271e541402d2474758479dea5$exports(arguments.length > 1 ? arguments[1] : undefined, 1);
    var length = this.length;
    var src = $cc8d97c6287a31e609e67fc971001f$exports(arrayLike);
    var len = $df129385d5f4540f45d9004e6da0d$exports(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError('Wrong length');
    while (index < len) this[offset + index] = src[index++];
  }, $abbef7eed862ef8a5d0145f142f25f00$var$FORCED); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.slice.js
  var $be25af4cb9fcc9f5f7740afadd508092$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $be25af4cb9fcc9f5f7740afadd508092$var$aTypedArrayConstructor = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArrayConstructor;
  var $be25af4cb9fcc9f5f7740afadd508092$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;
  var $be25af4cb9fcc9f5f7740afadd508092$var$$slice = [].slice;
  var $be25af4cb9fcc9f5f7740afadd508092$var$FORCED = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    // eslint-disable-next-line no-undef
    new Int8Array(1).slice();
  });

  // `%TypedArray%.prototype.slice` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
  $be25af4cb9fcc9f5f7740afadd508092$var$exportTypedArrayMethod('slice', function slice(start, end) {
    var list = $be25af4cb9fcc9f5f7740afadd508092$var$$slice.call($be25af4cb9fcc9f5f7740afadd508092$var$aTypedArray(this), start, end);
    var C = $de01eb37a632c5cc8bc6158846def6d$exports(this, this.constructor);
    var index = 0;
    var length = list.length;
    var result = new ($be25af4cb9fcc9f5f7740afadd508092$var$aTypedArrayConstructor(C))(length);
    while (length > index) result[index] = list[index++];
    return result;
  }, $be25af4cb9fcc9f5f7740afadd508092$var$FORCED); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.some.js
  var $a24854959d408ff6ebd6a04c1d89$var$$some = $a44239821dbd12c71742ad33b885$exports.some;
  var $a24854959d408ff6ebd6a04c1d89$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $a24854959d408ff6ebd6a04c1d89$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;

  // `%TypedArray%.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some
  $a24854959d408ff6ebd6a04c1d89$var$exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {
    return $a24854959d408ff6ebd6a04c1d89$var$$some($a24854959d408ff6ebd6a04c1d89$var$aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.sort.js
  var $f740fe97c627b307a8937a22a570$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $f740fe97c627b307a8937a22a570$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;
  var $f740fe97c627b307a8937a22a570$var$$sort = [].sort;

  // `%TypedArray%.prototype.sort` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.sort
  $f740fe97c627b307a8937a22a570$var$exportTypedArrayMethod('sort', function sort(comparefn) {
    return $f740fe97c627b307a8937a22a570$var$$sort.call($f740fe97c627b307a8937a22a570$var$aTypedArray(this), comparefn);
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.subarray.js
  var $b3dbb0274a23e746feae0b02f1352db8$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $b3dbb0274a23e746feae0b02f1352db8$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;

  // `%TypedArray%.prototype.subarray` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.subarray
  $b3dbb0274a23e746feae0b02f1352db8$var$exportTypedArrayMethod('subarray', function subarray(begin, end) {
    var O = $b3dbb0274a23e746feae0b02f1352db8$var$aTypedArray(this);
    var length = O.length;
    var beginIndex = $fa4d6094d01aacc8da63324cbdee87$exports(begin, length);
    return new ($de01eb37a632c5cc8bc6158846def6d$exports(O, O.constructor))(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, $df129385d5f4540f45d9004e6da0d$exports((end === undefined ? length : $fa4d6094d01aacc8da63324cbdee87$exports(end, length)) - beginIndex));
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.to-locale-string.js
  var $f5cfb8858ac32fd22cbc8e80ff414bc$var$Int8Array = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.Int8Array;
  var $f5cfb8858ac32fd22cbc8e80ff414bc$var$aTypedArray = $b4d675d33008fbd775eaa95f3f689de9$exports.aTypedArray;
  var $f5cfb8858ac32fd22cbc8e80ff414bc$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;
  var $f5cfb8858ac32fd22cbc8e80ff414bc$var$$toLocaleString = [].toLocaleString;
  var $f5cfb8858ac32fd22cbc8e80ff414bc$var$$slice = [].slice;

  // iOS Safari 6.x fails here
  var $f5cfb8858ac32fd22cbc8e80ff414bc$var$TO_LOCALE_STRING_BUG = !!$f5cfb8858ac32fd22cbc8e80ff414bc$var$Int8Array && $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $f5cfb8858ac32fd22cbc8e80ff414bc$var$$toLocaleString.call(new $f5cfb8858ac32fd22cbc8e80ff414bc$var$Int8Array(1));
  });
  var $f5cfb8858ac32fd22cbc8e80ff414bc$var$FORCED = $efaceca3db1203b03f84edf56feaf8f$exports(function () {
    return [1, 2].toLocaleString() != new $f5cfb8858ac32fd22cbc8e80ff414bc$var$Int8Array([1, 2]).toLocaleString();
  }) || !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $f5cfb8858ac32fd22cbc8e80ff414bc$var$Int8Array.prototype.toLocaleString.call([1, 2]);
  });

  // `%TypedArray%.prototype.toLocaleString` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tolocalestring
  $f5cfb8858ac32fd22cbc8e80ff414bc$var$exportTypedArrayMethod('toLocaleString', function toLocaleString() {
    return $f5cfb8858ac32fd22cbc8e80ff414bc$var$$toLocaleString.apply($f5cfb8858ac32fd22cbc8e80ff414bc$var$TO_LOCALE_STRING_BUG ? $f5cfb8858ac32fd22cbc8e80ff414bc$var$$slice.call($f5cfb8858ac32fd22cbc8e80ff414bc$var$aTypedArray(this)) : $f5cfb8858ac32fd22cbc8e80ff414bc$var$aTypedArray(this), arguments);
  }, $f5cfb8858ac32fd22cbc8e80ff414bc$var$FORCED);
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.typed-array.to-string.js
  var $aca540d89909023fe5de70582c5a5$var$exportTypedArrayMethod = $b4d675d33008fbd775eaa95f3f689de9$exports.exportTypedArrayMethod;
  var $aca540d89909023fe5de70582c5a5$var$Uint8Array = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.Uint8Array;
  var $aca540d89909023fe5de70582c5a5$var$Uint8ArrayPrototype = $aca540d89909023fe5de70582c5a5$var$Uint8Array && $aca540d89909023fe5de70582c5a5$var$Uint8Array.prototype || {};
  var $aca540d89909023fe5de70582c5a5$var$arrayToString = [].toString;
  var $aca540d89909023fe5de70582c5a5$var$arrayJoin = [].join;
  if ($efaceca3db1203b03f84edf56feaf8f$exports(function () {
    $aca540d89909023fe5de70582c5a5$var$arrayToString.call({});
  })) {
    $aca540d89909023fe5de70582c5a5$var$arrayToString = function toString() {
      return $aca540d89909023fe5de70582c5a5$var$arrayJoin.call(this);
    };
  }
  var $aca540d89909023fe5de70582c5a5$var$IS_NOT_ARRAY_METHOD = $aca540d89909023fe5de70582c5a5$var$Uint8ArrayPrototype.toString != $aca540d89909023fe5de70582c5a5$var$arrayToString;

  // `%TypedArray%.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tostring
  $aca540d89909023fe5de70582c5a5$var$exportTypedArrayMethod('toString', $aca540d89909023fe5de70582c5a5$var$arrayToString, $aca540d89909023fe5de70582c5a5$var$IS_NOT_ARRAY_METHOD);
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.weak-map.js
  var $a214a401f479faf44c2a017387140dbc$exports = {};
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\collection-weak.js
  var $a8e17bb5cd0087defa80a863b49cdb6$exports = {};
  var $a8e17bb5cd0087defa80a863b49cdb6$var$getWeakData = $a1561bd8adb650545b7dfef15847bae$exports.getWeakData;
  var $a8e17bb5cd0087defa80a863b49cdb6$var$setInternalState = $c9333b419e2d291fa24a6e5282e596$exports.set;
  var $a8e17bb5cd0087defa80a863b49cdb6$var$internalStateGetterFor = $c9333b419e2d291fa24a6e5282e596$exports.getterFor;
  var $a8e17bb5cd0087defa80a863b49cdb6$var$find = $a44239821dbd12c71742ad33b885$exports.find;
  var $a8e17bb5cd0087defa80a863b49cdb6$var$findIndex = $a44239821dbd12c71742ad33b885$exports.findIndex;
  var $a8e17bb5cd0087defa80a863b49cdb6$var$id = 0;

  // fallback for uncaught frozen keys
  var $a8e17bb5cd0087defa80a863b49cdb6$var$uncaughtFrozenStore = function (store) {
    return store.frozen || (store.frozen = new $a8e17bb5cd0087defa80a863b49cdb6$var$UncaughtFrozenStore());
  };
  var $a8e17bb5cd0087defa80a863b49cdb6$var$UncaughtFrozenStore = function () {
    this.entries = [];
  };
  var $a8e17bb5cd0087defa80a863b49cdb6$var$findUncaughtFrozen = function (store, key) {
    return $a8e17bb5cd0087defa80a863b49cdb6$var$find(store.entries, function (it) {
      return it[0] === key;
    });
  };
  $a8e17bb5cd0087defa80a863b49cdb6$var$UncaughtFrozenStore.prototype = {
    get: function (key) {
      var entry = $a8e17bb5cd0087defa80a863b49cdb6$var$findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function (key) {
      return !!$a8e17bb5cd0087defa80a863b49cdb6$var$findUncaughtFrozen(this, key);
    },
    set: function (key, value) {
      var entry = $a8e17bb5cd0087defa80a863b49cdb6$var$findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.entries.push([key, value]);
    },
    'delete': function (key) {
      var index = $a8e17bb5cd0087defa80a863b49cdb6$var$findIndex(this.entries, function (it) {
        return it[0] === key;
      });
      if (~index) this.entries.splice(index, 1);
      return !!~index;
    }
  };
  $a8e17bb5cd0087defa80a863b49cdb6$exports = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        $e359134306bb9a3c781645bdfc0c5d18$exports(that, C, CONSTRUCTOR_NAME);
        $a8e17bb5cd0087defa80a863b49cdb6$var$setInternalState(that, {
          type: CONSTRUCTOR_NAME,
          id: $a8e17bb5cd0087defa80a863b49cdb6$var$id++,
          frozen: undefined
        });
        if (iterable != undefined) $fdd517320290a6fff727586fb82d9241$exports(iterable, that[ADDER], that, IS_MAP);
      });
      var getInternalState = $a8e17bb5cd0087defa80a863b49cdb6$var$internalStateGetterFor(CONSTRUCTOR_NAME);
      var define = function (that, key, value) {
        var state = getInternalState(that);
        var data = $a8e17bb5cd0087defa80a863b49cdb6$var$getWeakData($ca96f020fbb32dd48b2236cb9c$exports(key), true);
        if (data === true) $a8e17bb5cd0087defa80a863b49cdb6$var$uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
        return that;
      };
      $ae410a5c6b0e1b5259e34ff96d957254$exports(C.prototype, {
        // 23.3.3.2 WeakMap.prototype.delete(key)
        // 23.4.3.3 WeakSet.prototype.delete(value)
        'delete': function (key) {
          var state = getInternalState(this);
          if (!$ce5aa73a2f4131a4f5ee32067e6336$exports(key)) return false;
          var data = $a8e17bb5cd0087defa80a863b49cdb6$var$getWeakData(key);
          if (data === true) return $a8e17bb5cd0087defa80a863b49cdb6$var$uncaughtFrozenStore(state)['delete'](key);
          return data && $fb61ad628fb3464a4b59a2997dacf0$exports(data, state.id) && delete data[state.id];
        },
        // 23.3.3.4 WeakMap.prototype.has(key)
        // 23.4.3.4 WeakSet.prototype.has(value)
        has: function has(key) {
          var state = getInternalState(this);
          if (!$ce5aa73a2f4131a4f5ee32067e6336$exports(key)) return false;
          var data = $a8e17bb5cd0087defa80a863b49cdb6$var$getWeakData(key);
          if (data === true) return $a8e17bb5cd0087defa80a863b49cdb6$var$uncaughtFrozenStore(state).has(key);
          return data && $fb61ad628fb3464a4b59a2997dacf0$exports(data, state.id);
        }
      });
      $ae410a5c6b0e1b5259e34ff96d957254$exports(C.prototype, IS_MAP ? {
        // 23.3.3.3 WeakMap.prototype.get(key)
        get: function get(key) {
          var state = getInternalState(this);
          if ($ce5aa73a2f4131a4f5ee32067e6336$exports(key)) {
            var data = $a8e17bb5cd0087defa80a863b49cdb6$var$getWeakData(key);
            if (data === true) return $a8e17bb5cd0087defa80a863b49cdb6$var$uncaughtFrozenStore(state).get(key);
            return data ? data[state.id] : undefined;
          }
        },
        // 23.3.3.5 WeakMap.prototype.set(key, value)
        set: function set(key, value) {
          return define(this, key, value);
        }
      } : {
        // 23.4.3.1 WeakSet.prototype.add(value)
        add: function add(value) {
          return define(this, value, true);
        }
      });
      return C;
    }
  };
  var $a214a401f479faf44c2a017387140dbc$var$enforceIternalState = $c9333b419e2d291fa24a6e5282e596$exports.enforce;
  var $a214a401f479faf44c2a017387140dbc$var$IS_IE11 = !$cbab2f3c4d2181527b69a2bf91b9e1fd$exports.ActiveXObject && 'ActiveXObject' in $cbab2f3c4d2181527b69a2bf91b9e1fd$exports;
  var $a214a401f479faf44c2a017387140dbc$var$isExtensible = Object.isExtensible;
  var $a214a401f479faf44c2a017387140dbc$var$InternalWeakMap;
  var $a214a401f479faf44c2a017387140dbc$var$wrapper = function (init) {
    return function WeakMap() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  };

  // `WeakMap` constructor
  // https://tc39.github.io/ecma262/#sec-weakmap-constructor
  var $a214a401f479faf44c2a017387140dbc$var$$WeakMap = $a214a401f479faf44c2a017387140dbc$exports = $e42f6657794eeb359618f23174e2aa7$exports('WeakMap', $a214a401f479faf44c2a017387140dbc$var$wrapper, $a8e17bb5cd0087defa80a863b49cdb6$exports);

  // IE11 WeakMap frozen keys fix
  // We can't use feature detection because it crash some old IE builds
  // https://github.com/zloirock/core-js/issues/485
  if ($edbe168fc4018e8823ff4f92a8f7563d$exports && $a214a401f479faf44c2a017387140dbc$var$IS_IE11) {
    $a214a401f479faf44c2a017387140dbc$var$InternalWeakMap = $a8e17bb5cd0087defa80a863b49cdb6$exports.getConstructor($a214a401f479faf44c2a017387140dbc$var$wrapper, 'WeakMap', true);
    $a1561bd8adb650545b7dfef15847bae$exports.REQUIRED = true;
    var $a214a401f479faf44c2a017387140dbc$var$WeakMapPrototype = $a214a401f479faf44c2a017387140dbc$var$$WeakMap.prototype;
    var $a214a401f479faf44c2a017387140dbc$var$nativeDelete = $a214a401f479faf44c2a017387140dbc$var$WeakMapPrototype['delete'];
    var $a214a401f479faf44c2a017387140dbc$var$nativeHas = $a214a401f479faf44c2a017387140dbc$var$WeakMapPrototype.has;
    var $a214a401f479faf44c2a017387140dbc$var$nativeGet = $a214a401f479faf44c2a017387140dbc$var$WeakMapPrototype.get;
    var $a214a401f479faf44c2a017387140dbc$var$nativeSet = $a214a401f479faf44c2a017387140dbc$var$WeakMapPrototype.set;
    $ae410a5c6b0e1b5259e34ff96d957254$exports($a214a401f479faf44c2a017387140dbc$var$WeakMapPrototype, {
      'delete': function (key) {
        if ($ce5aa73a2f4131a4f5ee32067e6336$exports(key) && !$a214a401f479faf44c2a017387140dbc$var$isExtensible(key)) {
          var state = $a214a401f479faf44c2a017387140dbc$var$enforceIternalState(this);
          if (!state.frozen) state.frozen = new $a214a401f479faf44c2a017387140dbc$var$InternalWeakMap();
          return $a214a401f479faf44c2a017387140dbc$var$nativeDelete.call(this, key) || state.frozen['delete'](key);
        }
        return $a214a401f479faf44c2a017387140dbc$var$nativeDelete.call(this, key);
      },
      has: function has(key) {
        if ($ce5aa73a2f4131a4f5ee32067e6336$exports(key) && !$a214a401f479faf44c2a017387140dbc$var$isExtensible(key)) {
          var state = $a214a401f479faf44c2a017387140dbc$var$enforceIternalState(this);
          if (!state.frozen) state.frozen = new $a214a401f479faf44c2a017387140dbc$var$InternalWeakMap();
          return $a214a401f479faf44c2a017387140dbc$var$nativeHas.call(this, key) || state.frozen.has(key);
        }
        return $a214a401f479faf44c2a017387140dbc$var$nativeHas.call(this, key);
      },
      get: function get(key) {
        if ($ce5aa73a2f4131a4f5ee32067e6336$exports(key) && !$a214a401f479faf44c2a017387140dbc$var$isExtensible(key)) {
          var state = $a214a401f479faf44c2a017387140dbc$var$enforceIternalState(this);
          if (!state.frozen) state.frozen = new $a214a401f479faf44c2a017387140dbc$var$InternalWeakMap();
          return $a214a401f479faf44c2a017387140dbc$var$nativeHas.call(this, key) ? $a214a401f479faf44c2a017387140dbc$var$nativeGet.call(this, key) : state.frozen.get(key);
        }
        return $a214a401f479faf44c2a017387140dbc$var$nativeGet.call(this, key);
      },
      set: function set(key, value) {
        if ($ce5aa73a2f4131a4f5ee32067e6336$exports(key) && !$a214a401f479faf44c2a017387140dbc$var$isExtensible(key)) {
          var state = $a214a401f479faf44c2a017387140dbc$var$enforceIternalState(this);
          if (!state.frozen) state.frozen = new $a214a401f479faf44c2a017387140dbc$var$InternalWeakMap();
          $a214a401f479faf44c2a017387140dbc$var$nativeHas.call(this, key) ? $a214a401f479faf44c2a017387140dbc$var$nativeSet.call(this, key, value) : state.frozen.set(key, value);
        } else $a214a401f479faf44c2a017387140dbc$var$nativeSet.call(this, key, value);
        return this;
      }
    });
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\es.weak-set.js
  // `WeakSet` constructor
  // https://tc39.github.io/ecma262/#sec-weakset-constructor
  $e42f6657794eeb359618f23174e2aa7$exports('WeakSet', function (init) {
    return function WeakSet() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, $a8e17bb5cd0087defa80a863b49cdb6$exports); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\web.dom-collections.for-each.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\dom-iterables.js
  var $e7157e8c77d66da6d1a3b2d9981e7eea$exports = {};
  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  $e7157e8c77d66da6d1a3b2d9981e7eea$exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\array-for-each.js
  var $b54bf6ad089cee94aa1caf158ee0b152$exports = {};
  var $b54bf6ad089cee94aa1caf158ee0b152$var$$forEach = $a44239821dbd12c71742ad33b885$exports.forEach;
  var $b54bf6ad089cee94aa1caf158ee0b152$var$STRICT_METHOD = $bb116b1b623648e29417fe2a9a96a295$exports('forEach');
  var $b54bf6ad089cee94aa1caf158ee0b152$var$USES_TO_LENGTH = $dc944bcf7ca9382c22a7882b254f2f36$exports('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  $b54bf6ad089cee94aa1caf158ee0b152$exports = !$b54bf6ad089cee94aa1caf158ee0b152$var$STRICT_METHOD || !$b54bf6ad089cee94aa1caf158ee0b152$var$USES_TO_LENGTH ? function forEach(callbackfn /* , thisArg */) {
    return $b54bf6ad089cee94aa1caf158ee0b152$var$$forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  } : [].forEach;
  for (var $e04816eda7f26daa9a184ac8587bfd1$var$COLLECTION_NAME in $e7157e8c77d66da6d1a3b2d9981e7eea$exports) {
    var $e04816eda7f26daa9a184ac8587bfd1$var$Collection = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[$e04816eda7f26daa9a184ac8587bfd1$var$COLLECTION_NAME];
    var $e04816eda7f26daa9a184ac8587bfd1$var$CollectionPrototype = $e04816eda7f26daa9a184ac8587bfd1$var$Collection && $e04816eda7f26daa9a184ac8587bfd1$var$Collection.prototype;
    // some Chrome versions have non-configurable methods on DOMTokenList
    if ($e04816eda7f26daa9a184ac8587bfd1$var$CollectionPrototype && $e04816eda7f26daa9a184ac8587bfd1$var$CollectionPrototype.forEach !== $b54bf6ad089cee94aa1caf158ee0b152$exports) try {
      $cccb6b555b82a0b86f5e6c39c4b7c7b$exports($e04816eda7f26daa9a184ac8587bfd1$var$CollectionPrototype, 'forEach', $b54bf6ad089cee94aa1caf158ee0b152$exports);
    } catch (error) {
      $e04816eda7f26daa9a184ac8587bfd1$var$CollectionPrototype.forEach = $b54bf6ad089cee94aa1caf158ee0b152$exports;
    }
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\web.dom-collections.iterator.js
  var $c473e8a37a4680d921a745f1ab1132c8$var$ITERATOR = $a241c8cf065084cf6d499662389d097$exports('iterator');
  var $c473e8a37a4680d921a745f1ab1132c8$var$TO_STRING_TAG = $a241c8cf065084cf6d499662389d097$exports('toStringTag');
  var $c473e8a37a4680d921a745f1ab1132c8$var$ArrayValues = $b07a75778f5206bb0f3d2b9a1642a55$exports.values;
  for (var $c473e8a37a4680d921a745f1ab1132c8$var$COLLECTION_NAME in $e7157e8c77d66da6d1a3b2d9981e7eea$exports) {
    var $c473e8a37a4680d921a745f1ab1132c8$var$Collection = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports[$c473e8a37a4680d921a745f1ab1132c8$var$COLLECTION_NAME];
    var $c473e8a37a4680d921a745f1ab1132c8$var$CollectionPrototype = $c473e8a37a4680d921a745f1ab1132c8$var$Collection && $c473e8a37a4680d921a745f1ab1132c8$var$Collection.prototype;
    if ($c473e8a37a4680d921a745f1ab1132c8$var$CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if ($c473e8a37a4680d921a745f1ab1132c8$var$CollectionPrototype[$c473e8a37a4680d921a745f1ab1132c8$var$ITERATOR] !== $c473e8a37a4680d921a745f1ab1132c8$var$ArrayValues) try {
        $cccb6b555b82a0b86f5e6c39c4b7c7b$exports($c473e8a37a4680d921a745f1ab1132c8$var$CollectionPrototype, $c473e8a37a4680d921a745f1ab1132c8$var$ITERATOR, $c473e8a37a4680d921a745f1ab1132c8$var$ArrayValues);
      } catch (error) {
        $c473e8a37a4680d921a745f1ab1132c8$var$CollectionPrototype[$c473e8a37a4680d921a745f1ab1132c8$var$ITERATOR] = $c473e8a37a4680d921a745f1ab1132c8$var$ArrayValues;
      }
      if (!$c473e8a37a4680d921a745f1ab1132c8$var$CollectionPrototype[$c473e8a37a4680d921a745f1ab1132c8$var$TO_STRING_TAG]) {
        $cccb6b555b82a0b86f5e6c39c4b7c7b$exports($c473e8a37a4680d921a745f1ab1132c8$var$CollectionPrototype, $c473e8a37a4680d921a745f1ab1132c8$var$TO_STRING_TAG, $c473e8a37a4680d921a745f1ab1132c8$var$COLLECTION_NAME);
      }
      if ($e7157e8c77d66da6d1a3b2d9981e7eea$exports[$c473e8a37a4680d921a745f1ab1132c8$var$COLLECTION_NAME]) for (var $c473e8a37a4680d921a745f1ab1132c8$var$METHOD_NAME in $b07a75778f5206bb0f3d2b9a1642a55$exports) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if ($c473e8a37a4680d921a745f1ab1132c8$var$CollectionPrototype[$c473e8a37a4680d921a745f1ab1132c8$var$METHOD_NAME] !== $b07a75778f5206bb0f3d2b9a1642a55$exports[$c473e8a37a4680d921a745f1ab1132c8$var$METHOD_NAME]) try {
          $cccb6b555b82a0b86f5e6c39c4b7c7b$exports($c473e8a37a4680d921a745f1ab1132c8$var$CollectionPrototype, $c473e8a37a4680d921a745f1ab1132c8$var$METHOD_NAME, $b07a75778f5206bb0f3d2b9a1642a55$exports[$c473e8a37a4680d921a745f1ab1132c8$var$METHOD_NAME]);
        } catch (error) {
          $c473e8a37a4680d921a745f1ab1132c8$var$CollectionPrototype[$c473e8a37a4680d921a745f1ab1132c8$var$METHOD_NAME] = $b07a75778f5206bb0f3d2b9a1642a55$exports[$c473e8a37a4680d921a745f1ab1132c8$var$METHOD_NAME];
        }
      }
    }
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\web.immediate.js
  var $fba7d48d6cf623a41265a3552fcddb5$var$FORCED = !$cbab2f3c4d2181527b69a2bf91b9e1fd$exports.setImmediate || !$cbab2f3c4d2181527b69a2bf91b9e1fd$exports.clearImmediate;

  // http://w3c.github.io/setImmediate/
  $da20139527b9570444c7d5c06ae45fa2$exports({
    global: true,
    bind: true,
    enumerable: true,
    forced: $fba7d48d6cf623a41265a3552fcddb5$var$FORCED
  }, {
    // `setImmediate` method
    // http://w3c.github.io/setImmediate/#si-setImmediate
    setImmediate: $d5715b582aa01c261d48606c0be53f1$exports.set,
    // `clearImmediate` method
    // http://w3c.github.io/setImmediate/#si-clearImmediate
    clearImmediate: $d5715b582aa01c261d48606c0be53f1$exports.clear
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\web.queue-microtask.js
  var $d55fa4858f55013ec6924c09dd270f1c$var$process = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.process;
  var $d55fa4858f55013ec6924c09dd270f1c$var$isNode = $b499f0f4b947123008cbd2ef011785$exports($d55fa4858f55013ec6924c09dd270f1c$var$process) == 'process';

  // `queueMicrotask` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
  $da20139527b9570444c7d5c06ae45fa2$exports({
    global: true,
    enumerable: true,
    noTargetGet: true
  }, {
    queueMicrotask: function queueMicrotask(fn) {
      var domain = $d55fa4858f55013ec6924c09dd270f1c$var$isNode && $d55fa4858f55013ec6924c09dd270f1c$var$process.domain;
      $c6fd0ef04f85523c315bb4c09a70$exports(domain ? domain.bind(fn) : fn);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\web.url.js
  // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\native-url.js
  var $a16bd222c79729fa1f7ca8508368$exports = {};
  var $a16bd222c79729fa1f7ca8508368$var$ITERATOR = $a241c8cf065084cf6d499662389d097$exports('iterator');
  $a16bd222c79729fa1f7ca8508368$exports = !$efaceca3db1203b03f84edf56feaf8f$exports(function () {
    var url = new URL('b?a=1&b=2&c=3', 'http://a');
    var searchParams = url.searchParams;
    var result = '';
    url.pathname = 'c%20d';
    searchParams.forEach(function (value, key) {
      searchParams['delete']('b');
      result += key + value;
    });
    return $f57ba62cba687e9257bf807714b47$exports && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?a=1&c=3' || searchParams.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[$a16bd222c79729fa1f7ca8508368$var$ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
  });
  var $b5d5601ba003bf38e95bbe861ec10012$var$codeAt = $be18c92a8c61f6589ba91e084ce$exports.codeAt;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\string-punycode-to-ascii.js
  var $ade489c805fe0cceec493573671cc41$exports = {};
  // based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
  var $ade489c805fe0cceec493573671cc41$var$maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
  var $ade489c805fe0cceec493573671cc41$var$base = 36;
  var $ade489c805fe0cceec493573671cc41$var$tMin = 1;
  var $ade489c805fe0cceec493573671cc41$var$tMax = 26;
  var $ade489c805fe0cceec493573671cc41$var$skew = 38;
  var $ade489c805fe0cceec493573671cc41$var$damp = 700;
  var $ade489c805fe0cceec493573671cc41$var$initialBias = 72;
  var $ade489c805fe0cceec493573671cc41$var$initialN = 128; // 0x80
  var $ade489c805fe0cceec493573671cc41$var$delimiter = '-'; // '\x2D'
  var $ade489c805fe0cceec493573671cc41$var$regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
  var $ade489c805fe0cceec493573671cc41$var$regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
  var $ade489c805fe0cceec493573671cc41$var$OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
  var $ade489c805fe0cceec493573671cc41$var$baseMinusTMin = $ade489c805fe0cceec493573671cc41$var$base - $ade489c805fe0cceec493573671cc41$var$tMin;
  var $ade489c805fe0cceec493573671cc41$var$floor = Math.floor;
  var $ade489c805fe0cceec493573671cc41$var$stringFromCharCode = String.fromCharCode;

  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   */
  var $ade489c805fe0cceec493573671cc41$var$ucs2decode = function (string) {
    var output = [];
    var counter = 0;
    var length = string.length;
    while (counter < length) {
      var value = string.charCodeAt(counter++);
      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // It's a high surrogate, and there is a next character.
        var extra = string.charCodeAt(counter++);
        if ((extra & 0xFC00) == 0xDC00) {
          // Low surrogate.
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // It's an unmatched surrogate; only append this code unit, in case the
          // next code unit is the high surrogate of a surrogate pair.
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  };

  /**
   * Converts a digit/integer into a basic code point.
   */
  var $ade489c805fe0cceec493573671cc41$var$digitToBasic = function (digit) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26);
  };

  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   */
  var $ade489c805fe0cceec493573671cc41$var$adapt = function (delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? $ade489c805fe0cceec493573671cc41$var$floor(delta / $ade489c805fe0cceec493573671cc41$var$damp) : delta >> 1;
    delta += $ade489c805fe0cceec493573671cc41$var$floor(delta / numPoints);
    for (; delta > $ade489c805fe0cceec493573671cc41$var$baseMinusTMin * $ade489c805fe0cceec493573671cc41$var$tMax >> 1; k += $ade489c805fe0cceec493573671cc41$var$base) {
      delta = $ade489c805fe0cceec493573671cc41$var$floor(delta / $ade489c805fe0cceec493573671cc41$var$baseMinusTMin);
    }
    return $ade489c805fe0cceec493573671cc41$var$floor(k + ($ade489c805fe0cceec493573671cc41$var$baseMinusTMin + 1) * delta / (delta + $ade489c805fe0cceec493573671cc41$var$skew));
  };

  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   */
  // eslint-disable-next-line  max-statements
  var $ade489c805fe0cceec493573671cc41$var$encode = function (input) {
    var output = [];

    // Convert the input in UCS-2 to an array of Unicode code points.
    input = $ade489c805fe0cceec493573671cc41$var$ucs2decode(input);

    // Cache the length.
    var inputLength = input.length;

    // Initialize the state.
    var n = $ade489c805fe0cceec493573671cc41$var$initialN;
    var delta = 0;
    var bias = $ade489c805fe0cceec493573671cc41$var$initialBias;
    var i, currentValue;

    // Handle the basic code points.
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < 0x80) {
        output.push($ade489c805fe0cceec493573671cc41$var$stringFromCharCode(currentValue));
      }
    }
    var basicLength = output.length; // number of basic code points.
    var handledCPCount = basicLength; // number of code points that have been handled;

    // Finish the basic string with a delimiter unless it's empty.
    if (basicLength) {
      output.push($ade489c805fe0cceec493573671cc41$var$delimiter);
    }

    // Main encoding loop:
    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next larger one:
      var m = $ade489c805fe0cceec493573671cc41$var$maxInt;
      for (i = 0; i < input.length; i++) {
        currentValue = input[i];
        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      }

      // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
      var handledCPCountPlusOne = handledCPCount + 1;
      if (m - n > $ade489c805fe0cceec493573671cc41$var$floor(($ade489c805fe0cceec493573671cc41$var$maxInt - delta) / handledCPCountPlusOne)) {
        throw RangeError($ade489c805fe0cceec493573671cc41$var$OVERFLOW_ERROR);
      }
      delta += (m - n) * handledCPCountPlusOne;
      n = m;
      for (i = 0; i < input.length; i++) {
        currentValue = input[i];
        if (currentValue < n && ++delta > $ade489c805fe0cceec493573671cc41$var$maxInt) {
          throw RangeError($ade489c805fe0cceec493573671cc41$var$OVERFLOW_ERROR);
        }
        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer.
          var q = delta;
          for /* no condition */
          (var k = $ade489c805fe0cceec493573671cc41$var$base;; k += $ade489c805fe0cceec493573671cc41$var$base) {
            var t = k <= bias ? $ade489c805fe0cceec493573671cc41$var$tMin : k >= bias + $ade489c805fe0cceec493573671cc41$var$tMax ? $ade489c805fe0cceec493573671cc41$var$tMax : k - bias;
            if (q < t) break;
            var qMinusT = q - t;
            var baseMinusT = $ade489c805fe0cceec493573671cc41$var$base - t;
            output.push($ade489c805fe0cceec493573671cc41$var$stringFromCharCode($ade489c805fe0cceec493573671cc41$var$digitToBasic(t + qMinusT % baseMinusT)));
            q = $ade489c805fe0cceec493573671cc41$var$floor(qMinusT / baseMinusT);
          }
          output.push($ade489c805fe0cceec493573671cc41$var$stringFromCharCode($ade489c805fe0cceec493573671cc41$var$digitToBasic(q)));
          bias = $ade489c805fe0cceec493573671cc41$var$adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }
      ++delta;
      ++n;
    }
    return output.join('');
  };
  $ade489c805fe0cceec493573671cc41$exports = function (input) {
    var encoded = [];
    var labels = input.toLowerCase().replace($ade489c805fe0cceec493573671cc41$var$regexSeparators, '\u002E').split('.');
    var i, label;
    for (i = 0; i < labels.length; i++) {
      label = labels[i];
      encoded.push($ade489c805fe0cceec493573671cc41$var$regexNonASCII.test(label) ? 'xn--' + $ade489c805fe0cceec493573671cc41$var$encode(label) : label);
    }
    return encoded.join('.');
  };
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\web.url-search-params.js
  var $a8d575c92e0a38b31b02825046758a5$exports = {}; // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\internals\get-iterator.js
  var $fe7a60b0afe45c2e4944a16d4207$exports = {};
  $fe7a60b0afe45c2e4944a16d4207$exports = function (it) {
    var iteratorMethod = $d19886d1d6e229ee23952976627e4f4$exports(it);
    if (typeof iteratorMethod != 'function') {
      throw TypeError(String(it) + ' is not iterable');
    }
    return $ca96f020fbb32dd48b2236cb9c$exports(iteratorMethod.call(it));
  };
  var $a8d575c92e0a38b31b02825046758a5$var$$fetch = $aeb1e6b80ef7a537d3287f35b9b88$exports('fetch');
  var $a8d575c92e0a38b31b02825046758a5$var$Headers = $aeb1e6b80ef7a537d3287f35b9b88$exports('Headers');
  var $a8d575c92e0a38b31b02825046758a5$var$ITERATOR = $a241c8cf065084cf6d499662389d097$exports('iterator');
  var $a8d575c92e0a38b31b02825046758a5$var$URL_SEARCH_PARAMS = 'URLSearchParams';
  var $a8d575c92e0a38b31b02825046758a5$var$URL_SEARCH_PARAMS_ITERATOR = $a8d575c92e0a38b31b02825046758a5$var$URL_SEARCH_PARAMS + 'Iterator';
  var $a8d575c92e0a38b31b02825046758a5$var$setInternalState = $c9333b419e2d291fa24a6e5282e596$exports.set;
  var $a8d575c92e0a38b31b02825046758a5$var$getInternalParamsState = $c9333b419e2d291fa24a6e5282e596$exports.getterFor($a8d575c92e0a38b31b02825046758a5$var$URL_SEARCH_PARAMS);
  var $a8d575c92e0a38b31b02825046758a5$var$getInternalIteratorState = $c9333b419e2d291fa24a6e5282e596$exports.getterFor($a8d575c92e0a38b31b02825046758a5$var$URL_SEARCH_PARAMS_ITERATOR);
  var $a8d575c92e0a38b31b02825046758a5$var$plus = /\+/g;
  var $a8d575c92e0a38b31b02825046758a5$var$sequences = Array(4);
  var $a8d575c92e0a38b31b02825046758a5$var$percentSequence = function (bytes) {
    return $a8d575c92e0a38b31b02825046758a5$var$sequences[bytes - 1] || ($a8d575c92e0a38b31b02825046758a5$var$sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
  };
  var $a8d575c92e0a38b31b02825046758a5$var$percentDecode = function (sequence) {
    try {
      return decodeURIComponent(sequence);
    } catch (error) {
      return sequence;
    }
  };
  var $a8d575c92e0a38b31b02825046758a5$var$deserialize = function (it) {
    var result = it.replace($a8d575c92e0a38b31b02825046758a5$var$plus, ' ');
    var bytes = 4;
    try {
      return decodeURIComponent(result);
    } catch (error) {
      while (bytes) {
        result = result.replace($a8d575c92e0a38b31b02825046758a5$var$percentSequence(bytes--), $a8d575c92e0a38b31b02825046758a5$var$percentDecode);
      }
      return result;
    }
  };
  var $a8d575c92e0a38b31b02825046758a5$var$find = /[!'()~]|%20/g;
  var $a8d575c92e0a38b31b02825046758a5$var$replace = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+'
  };
  var $a8d575c92e0a38b31b02825046758a5$var$replacer = function (match) {
    return $a8d575c92e0a38b31b02825046758a5$var$replace[match];
  };
  var $a8d575c92e0a38b31b02825046758a5$var$serialize = function (it) {
    return encodeURIComponent(it).replace($a8d575c92e0a38b31b02825046758a5$var$find, $a8d575c92e0a38b31b02825046758a5$var$replacer);
  };
  var $a8d575c92e0a38b31b02825046758a5$var$parseSearchParams = function (result, query) {
    if (query) {
      var attributes = query.split('&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = attribute.split('=');
          result.push({
            key: $a8d575c92e0a38b31b02825046758a5$var$deserialize(entry.shift()),
            value: $a8d575c92e0a38b31b02825046758a5$var$deserialize(entry.join('='))
          });
        }
      }
    }
  };
  var $a8d575c92e0a38b31b02825046758a5$var$updateSearchParams = function (query) {
    this.entries.length = 0;
    $a8d575c92e0a38b31b02825046758a5$var$parseSearchParams(this.entries, query);
  };
  var $a8d575c92e0a38b31b02825046758a5$var$validateArgumentsLength = function (passed, required) {
    if (passed < required) throw TypeError('Not enough arguments');
  };
  var $a8d575c92e0a38b31b02825046758a5$var$URLSearchParamsIterator = $a982263142df3569fafe9564433a3760$exports(function Iterator(params, kind) {
    $a8d575c92e0a38b31b02825046758a5$var$setInternalState(this, {
      type: $a8d575c92e0a38b31b02825046758a5$var$URL_SEARCH_PARAMS_ITERATOR,
      iterator: $fe7a60b0afe45c2e4944a16d4207$exports($a8d575c92e0a38b31b02825046758a5$var$getInternalParamsState(params).entries),
      kind: kind
    });
  }, 'Iterator', function next() {
    var state = $a8d575c92e0a38b31b02825046758a5$var$getInternalIteratorState(this);
    var kind = state.kind;
    var step = state.iterator.next();
    var entry = step.value;
    if (!step.done) {
      step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
    }
    return step;
  });

  // `URLSearchParams` constructor
  // https://url.spec.whatwg.org/#interface-urlsearchparams
  var $a8d575c92e0a38b31b02825046758a5$var$URLSearchParamsConstructor = function URLSearchParams( /* init */
  ) {
    $e359134306bb9a3c781645bdfc0c5d18$exports(this, $a8d575c92e0a38b31b02825046758a5$var$URLSearchParamsConstructor, $a8d575c92e0a38b31b02825046758a5$var$URL_SEARCH_PARAMS);
    var init = arguments.length > 0 ? arguments[0] : undefined;
    var that = this;
    var entries = [];
    var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;
    $a8d575c92e0a38b31b02825046758a5$var$setInternalState(that, {
      type: $a8d575c92e0a38b31b02825046758a5$var$URL_SEARCH_PARAMS,
      entries: entries,
      updateURL: function () {/* empty */},
      updateSearchParams: $a8d575c92e0a38b31b02825046758a5$var$updateSearchParams
    });
    if (init !== undefined) {
      if ($ce5aa73a2f4131a4f5ee32067e6336$exports(init)) {
        iteratorMethod = $d19886d1d6e229ee23952976627e4f4$exports(init);
        if (typeof iteratorMethod === 'function') {
          iterator = iteratorMethod.call(init);
          next = iterator.next;
          while (!(step = next.call(iterator)).done) {
            entryIterator = $fe7a60b0afe45c2e4944a16d4207$exports($ca96f020fbb32dd48b2236cb9c$exports(step.value));
            entryNext = entryIterator.next;
            if ((first = entryNext.call(entryIterator)).done || (second = entryNext.call(entryIterator)).done || !entryNext.call(entryIterator).done) throw TypeError('Expected sequence with length 2');
            entries.push({
              key: first.value + '',
              value: second.value + ''
            });
          }
        } else for (key in init) if ($fb61ad628fb3464a4b59a2997dacf0$exports(init, key)) entries.push({
          key: key,
          value: init[key] + ''
        });
      } else {
        $a8d575c92e0a38b31b02825046758a5$var$parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
      }
    }
  };
  var $a8d575c92e0a38b31b02825046758a5$var$URLSearchParamsPrototype = $a8d575c92e0a38b31b02825046758a5$var$URLSearchParamsConstructor.prototype;
  $ae410a5c6b0e1b5259e34ff96d957254$exports($a8d575c92e0a38b31b02825046758a5$var$URLSearchParamsPrototype, {
    // `URLSearchParams.prototype.appent` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-append
    append: function append(name, value) {
      $a8d575c92e0a38b31b02825046758a5$var$validateArgumentsLength(arguments.length, 2);
      var state = $a8d575c92e0a38b31b02825046758a5$var$getInternalParamsState(this);
      state.entries.push({
        key: name + '',
        value: value + ''
      });
      state.updateURL();
    },
    // `URLSearchParams.prototype.delete` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
    'delete': function (name) {
      $a8d575c92e0a38b31b02825046758a5$var$validateArgumentsLength(arguments.length, 1);
      var state = $a8d575c92e0a38b31b02825046758a5$var$getInternalParamsState(this);
      var entries = state.entries;
      var key = name + '';
      var index = 0;
      while (index < entries.length) {
        if (entries[index].key === key) entries.splice(index, 1);else index++;
      }
      state.updateURL();
    },
    // `URLSearchParams.prototype.get` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-get
    get: function get(name) {
      $a8d575c92e0a38b31b02825046758a5$var$validateArgumentsLength(arguments.length, 1);
      var entries = $a8d575c92e0a38b31b02825046758a5$var$getInternalParamsState(this).entries;
      var key = name + '';
      var index = 0;
      for (; index < entries.length; index++) {
        if (entries[index].key === key) return entries[index].value;
      }
      return null;
    },
    // `URLSearchParams.prototype.getAll` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
    getAll: function getAll(name) {
      $a8d575c92e0a38b31b02825046758a5$var$validateArgumentsLength(arguments.length, 1);
      var entries = $a8d575c92e0a38b31b02825046758a5$var$getInternalParamsState(this).entries;
      var key = name + '';
      var result = [];
      var index = 0;
      for (; index < entries.length; index++) {
        if (entries[index].key === key) result.push(entries[index].value);
      }
      return result;
    },
    // `URLSearchParams.prototype.has` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-has
    has: function has(name) {
      $a8d575c92e0a38b31b02825046758a5$var$validateArgumentsLength(arguments.length, 1);
      var entries = $a8d575c92e0a38b31b02825046758a5$var$getInternalParamsState(this).entries;
      var key = name + '';
      var index = 0;
      while (index < entries.length) {
        if (entries[index++].key === key) return true;
      }
      return false;
    },
    // `URLSearchParams.prototype.set` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-set
    set: function set(name, value) {
      $a8d575c92e0a38b31b02825046758a5$var$validateArgumentsLength(arguments.length, 1);
      var state = $a8d575c92e0a38b31b02825046758a5$var$getInternalParamsState(this);
      var entries = state.entries;
      var found = false;
      var key = name + '';
      var val = value + '';
      var index = 0;
      var entry;
      for (; index < entries.length; index++) {
        entry = entries[index];
        if (entry.key === key) {
          if (found) entries.splice(index--, 1);else {
            found = true;
            entry.value = val;
          }
        }
      }
      if (!found) entries.push({
        key: key,
        value: val
      });
      state.updateURL();
    },
    // `URLSearchParams.prototype.sort` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
    sort: function sort() {
      var state = $a8d575c92e0a38b31b02825046758a5$var$getInternalParamsState(this);
      var entries = state.entries;
      // Array#sort is not stable in some engines
      var slice = entries.slice();
      var entry, entriesIndex, sliceIndex;
      entries.length = 0;
      for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
        entry = slice[sliceIndex];
        for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
          if (entries[entriesIndex].key > entry.key) {
            entries.splice(entriesIndex, 0, entry);
            break;
          }
        }
        if (entriesIndex === sliceIndex) entries.push(entry);
      }
      state.updateURL();
    },
    // `URLSearchParams.prototype.forEach` method
    forEach: function forEach(callback /* , thisArg */) {
      var entries = $a8d575c92e0a38b31b02825046758a5$var$getInternalParamsState(this).entries;
      var boundFunction = $d098e725d461df6003aa3baf1810a74$exports(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
      var index = 0;
      var entry;
      while (index < entries.length) {
        entry = entries[index++];
        boundFunction(entry.value, entry.key, this);
      }
    },
    // `URLSearchParams.prototype.keys` method
    keys: function keys() {
      return new $a8d575c92e0a38b31b02825046758a5$var$URLSearchParamsIterator(this, 'keys');
    },
    // `URLSearchParams.prototype.values` method
    values: function values() {
      return new $a8d575c92e0a38b31b02825046758a5$var$URLSearchParamsIterator(this, 'values');
    },
    // `URLSearchParams.prototype.entries` method
    entries: function entries() {
      return new $a8d575c92e0a38b31b02825046758a5$var$URLSearchParamsIterator(this, 'entries');
    }
  }, {
    enumerable: true
  });

  // `URLSearchParams.prototype[@@iterator]` method
  $e3c8a1361cc0783bc835b9e100a3660b$exports($a8d575c92e0a38b31b02825046758a5$var$URLSearchParamsPrototype, $a8d575c92e0a38b31b02825046758a5$var$ITERATOR, $a8d575c92e0a38b31b02825046758a5$var$URLSearchParamsPrototype.entries);

  // `URLSearchParams.prototype.toString` method
  // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
  $e3c8a1361cc0783bc835b9e100a3660b$exports($a8d575c92e0a38b31b02825046758a5$var$URLSearchParamsPrototype, 'toString', function toString() {
    var entries = $a8d575c92e0a38b31b02825046758a5$var$getInternalParamsState(this).entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      result.push($a8d575c92e0a38b31b02825046758a5$var$serialize(entry.key) + '=' + $a8d575c92e0a38b31b02825046758a5$var$serialize(entry.value));
    }
    return result.join('&');
  }, {
    enumerable: true
  });
  $b44eaad080afd8b6cc975138b17db$exports($a8d575c92e0a38b31b02825046758a5$var$URLSearchParamsConstructor, $a8d575c92e0a38b31b02825046758a5$var$URL_SEARCH_PARAMS);
  $da20139527b9570444c7d5c06ae45fa2$exports({
    global: true,
    forced: !$a16bd222c79729fa1f7ca8508368$exports
  }, {
    URLSearchParams: $a8d575c92e0a38b31b02825046758a5$var$URLSearchParamsConstructor
  });

  // Wrap `fetch` for correct work with polyfilled `URLSearchParams`
  // https://github.com/zloirock/core-js/issues/674
  if (!$a16bd222c79729fa1f7ca8508368$exports && typeof $a8d575c92e0a38b31b02825046758a5$var$$fetch == 'function' && typeof $a8d575c92e0a38b31b02825046758a5$var$Headers == 'function') {
    $da20139527b9570444c7d5c06ae45fa2$exports({
      global: true,
      enumerable: true,
      forced: true
    }, {
      fetch: function fetch(input /* , init */) {
        var args = [input];
        var init, body, headers;
        if (arguments.length > 1) {
          init = arguments[1];
          if ($ce5aa73a2f4131a4f5ee32067e6336$exports(init)) {
            body = init.body;
            if ($ef9d499d695cd246c34e60e7d380677e$exports(body) === $a8d575c92e0a38b31b02825046758a5$var$URL_SEARCH_PARAMS) {
              headers = init.headers ? new $a8d575c92e0a38b31b02825046758a5$var$Headers(init.headers) : new $a8d575c92e0a38b31b02825046758a5$var$Headers();
              if (!headers.has('content-type')) {
                headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
              }
              init = $a968e88b66c89954fb6a8439bd2$exports(init, {
                body: $c83efd2171483e9988d3cc48fb8a$exports(0, String(body)),
                headers: $c83efd2171483e9988d3cc48fb8a$exports(0, headers)
              });
            }
          }
          args.push(init);
        }
        return $a8d575c92e0a38b31b02825046758a5$var$$fetch.apply(this, args);
      }
    });
  }
  $a8d575c92e0a38b31b02825046758a5$exports = {
    URLSearchParams: $a8d575c92e0a38b31b02825046758a5$var$URLSearchParamsConstructor,
    getState: $a8d575c92e0a38b31b02825046758a5$var$getInternalParamsState
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$NativeURL = $cbab2f3c4d2181527b69a2bf91b9e1fd$exports.URL;
  var $b5d5601ba003bf38e95bbe861ec10012$var$URLSearchParams = $a8d575c92e0a38b31b02825046758a5$exports.URLSearchParams;
  var $b5d5601ba003bf38e95bbe861ec10012$var$getInternalSearchParamsState = $a8d575c92e0a38b31b02825046758a5$exports.getState;
  var $b5d5601ba003bf38e95bbe861ec10012$var$setInternalState = $c9333b419e2d291fa24a6e5282e596$exports.set;
  var $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState = $c9333b419e2d291fa24a6e5282e596$exports.getterFor('URL');
  var $b5d5601ba003bf38e95bbe861ec10012$var$floor = Math.floor;
  var $b5d5601ba003bf38e95bbe861ec10012$var$pow = Math.pow;
  var $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_AUTHORITY = 'Invalid authority';
  var $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_SCHEME = 'Invalid scheme';
  var $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_HOST = 'Invalid host';
  var $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_PORT = 'Invalid port';
  var $b5d5601ba003bf38e95bbe861ec10012$var$ALPHA = /[A-Za-z]/;
  var $b5d5601ba003bf38e95bbe861ec10012$var$ALPHANUMERIC = /[\d+-.A-Za-z]/;
  var $b5d5601ba003bf38e95bbe861ec10012$var$DIGIT = /\d/;
  var $b5d5601ba003bf38e95bbe861ec10012$var$HEX_START = /^(0x|0X)/;
  var $b5d5601ba003bf38e95bbe861ec10012$var$OCT = /^[0-7]+$/;
  var $b5d5601ba003bf38e95bbe861ec10012$var$DEC = /^\d+$/;
  var $b5d5601ba003bf38e95bbe861ec10012$var$HEX = /^[\dA-Fa-f]+$/;
  // eslint-disable-next-line no-control-regex
  var $b5d5601ba003bf38e95bbe861ec10012$var$FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
  // eslint-disable-next-line no-control-regex
  var $b5d5601ba003bf38e95bbe861ec10012$var$FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
  // eslint-disable-next-line no-control-regex
  var $b5d5601ba003bf38e95bbe861ec10012$var$LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
  // eslint-disable-next-line no-control-regex
  var $b5d5601ba003bf38e95bbe861ec10012$var$TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
  var $b5d5601ba003bf38e95bbe861ec10012$var$EOF;
  var $b5d5601ba003bf38e95bbe861ec10012$var$parseHost = function (url, input) {
    var result, codePoints, index;
    if (input.charAt(0) == '[') {
      if (input.charAt(input.length - 1) != ']') return $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_HOST;
      result = $b5d5601ba003bf38e95bbe861ec10012$var$parseIPv6(input.slice(1, -1));
      if (!result) return $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_HOST;
      url.host = result;
      // opaque host
    } else if (!$b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url)) {
      if ($b5d5601ba003bf38e95bbe861ec10012$var$FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_HOST;
      result = '';
      codePoints = $b21247ed923af71bc4cfac981f77f5$exports(input);
      for (index = 0; index < codePoints.length; index++) {
        result += $b5d5601ba003bf38e95bbe861ec10012$var$percentEncode(codePoints[index], $b5d5601ba003bf38e95bbe861ec10012$var$C0ControlPercentEncodeSet);
      }
      url.host = result;
    } else {
      input = $ade489c805fe0cceec493573671cc41$exports(input);
      if ($b5d5601ba003bf38e95bbe861ec10012$var$FORBIDDEN_HOST_CODE_POINT.test(input)) return $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_HOST;
      result = $b5d5601ba003bf38e95bbe861ec10012$var$parseIPv4(input);
      if (result === null) return $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_HOST;
      url.host = result;
    }
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$parseIPv4 = function (input) {
    var parts = input.split('.');
    var partsLength, numbers, index, part, radix, number, ipv4;
    if (parts.length && parts[parts.length - 1] == '') {
      parts.pop();
    }
    partsLength = parts.length;
    if (partsLength > 4) return input;
    numbers = [];
    for (index = 0; index < partsLength; index++) {
      part = parts[index];
      if (part == '') return input;
      radix = 10;
      if (part.length > 1 && part.charAt(0) == '0') {
        radix = $b5d5601ba003bf38e95bbe861ec10012$var$HEX_START.test(part) ? 16 : 8;
        part = part.slice(radix == 8 ? 1 : 2);
      }
      if (part === '') {
        number = 0;
      } else {
        if (!(radix == 10 ? $b5d5601ba003bf38e95bbe861ec10012$var$DEC : radix == 8 ? $b5d5601ba003bf38e95bbe861ec10012$var$OCT : $b5d5601ba003bf38e95bbe861ec10012$var$HEX).test(part)) return input;
        number = parseInt(part, radix);
      }
      numbers.push(number);
    }
    for (index = 0; index < partsLength; index++) {
      number = numbers[index];
      if (index == partsLength - 1) {
        if (number >= $b5d5601ba003bf38e95bbe861ec10012$var$pow(256, 5 - partsLength)) return null;
      } else if (number > 255) return null;
    }
    ipv4 = numbers.pop();
    for (index = 0; index < numbers.length; index++) {
      ipv4 += numbers[index] * $b5d5601ba003bf38e95bbe861ec10012$var$pow(256, 3 - index);
    }
    return ipv4;
  };

  // eslint-disable-next-line max-statements
  var $b5d5601ba003bf38e95bbe861ec10012$var$parseIPv6 = function (input) {
    var address = [0, 0, 0, 0, 0, 0, 0, 0];
    var pieceIndex = 0;
    var compress = null;
    var pointer = 0;
    var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
    var char = function () {
      return input.charAt(pointer);
    };
    if (char() == ':') {
      if (input.charAt(1) != ':') return;
      pointer += 2;
      pieceIndex++;
      compress = pieceIndex;
    }
    while (char()) {
      if (pieceIndex == 8) return;
      if (char() == ':') {
        if (compress !== null) return;
        pointer++;
        pieceIndex++;
        compress = pieceIndex;
        continue;
      }
      value = length = 0;
      while (length < 4 && $b5d5601ba003bf38e95bbe861ec10012$var$HEX.test(char())) {
        value = value * 16 + parseInt(char(), 16);
        pointer++;
        length++;
      }
      if (char() == '.') {
        if (length == 0) return;
        pointer -= length;
        if (pieceIndex > 6) return;
        numbersSeen = 0;
        while (char()) {
          ipv4Piece = null;
          if (numbersSeen > 0) {
            if (char() == '.' && numbersSeen < 4) pointer++;else return;
          }
          if (!$b5d5601ba003bf38e95bbe861ec10012$var$DIGIT.test(char())) return;
          while ($b5d5601ba003bf38e95bbe861ec10012$var$DIGIT.test(char())) {
            number = parseInt(char(), 10);
            if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece == 0) return;else ipv4Piece = ipv4Piece * 10 + number;
            if (ipv4Piece > 255) return;
            pointer++;
          }
          address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
          numbersSeen++;
          if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
        }
        if (numbersSeen != 4) return;
        break;
      } else if (char() == ':') {
        pointer++;
        if (!char()) return;
      } else if (char()) return;
      address[pieceIndex++] = value;
    }
    if (compress !== null) {
      swaps = pieceIndex - compress;
      pieceIndex = 7;
      while (pieceIndex != 0 && swaps > 0) {
        swap = address[pieceIndex];
        address[pieceIndex--] = address[compress + swaps - 1];
        address[compress + --swaps] = swap;
      }
    } else if (pieceIndex != 8) return;
    return address;
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$findLongestZeroSequence = function (ipv6) {
    var maxIndex = null;
    var maxLength = 1;
    var currStart = null;
    var currLength = 0;
    var index = 0;
    for (; index < 8; index++) {
      if (ipv6[index] !== 0) {
        if (currLength > maxLength) {
          maxIndex = currStart;
          maxLength = currLength;
        }
        currStart = null;
        currLength = 0;
      } else {
        if (currStart === null) currStart = index;
        ++currLength;
      }
    }
    if (currLength > maxLength) {
      maxIndex = currStart;
      maxLength = currLength;
    }
    return maxIndex;
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$serializeHost = function (host) {
    var result, index, compress, ignore0;
    // ipv4
    if (typeof host == 'number') {
      result = [];
      for (index = 0; index < 4; index++) {
        result.unshift(host % 256);
        host = $b5d5601ba003bf38e95bbe861ec10012$var$floor(host / 256);
      }
      return result.join('.');
      // ipv6
    } else if (typeof host == 'object') {
      result = '';
      compress = $b5d5601ba003bf38e95bbe861ec10012$var$findLongestZeroSequence(host);
      for (index = 0; index < 8; index++) {
        if (ignore0 && host[index] === 0) continue;
        if (ignore0) ignore0 = false;
        if (compress === index) {
          result += index ? ':' : '::';
          ignore0 = true;
        } else {
          result += host[index].toString(16);
          if (index < 7) result += ':';
        }
      }
      return '[' + result + ']';
    }
    return host;
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$C0ControlPercentEncodeSet = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$fragmentPercentEncodeSet = $df7d869e20dac5e526bf12faf6ad3c$exports({}, $b5d5601ba003bf38e95bbe861ec10012$var$C0ControlPercentEncodeSet, {
    ' ': 1,
    '"': 1,
    '<': 1,
    '>': 1,
    '`': 1
  });
  var $b5d5601ba003bf38e95bbe861ec10012$var$pathPercentEncodeSet = $df7d869e20dac5e526bf12faf6ad3c$exports({}, $b5d5601ba003bf38e95bbe861ec10012$var$fragmentPercentEncodeSet, {
    '#': 1,
    '?': 1,
    '{': 1,
    '}': 1
  });
  var $b5d5601ba003bf38e95bbe861ec10012$var$userinfoPercentEncodeSet = $df7d869e20dac5e526bf12faf6ad3c$exports({}, $b5d5601ba003bf38e95bbe861ec10012$var$pathPercentEncodeSet, {
    '/': 1,
    ':': 1,
    ';': 1,
    '=': 1,
    '@': 1,
    '[': 1,
    '\\': 1,
    ']': 1,
    '^': 1,
    '|': 1
  });
  var $b5d5601ba003bf38e95bbe861ec10012$var$percentEncode = function (char, set) {
    var code = $b5d5601ba003bf38e95bbe861ec10012$var$codeAt(char, 0);
    return code > 0x20 && code < 0x7F && !$fb61ad628fb3464a4b59a2997dacf0$exports(set, char) ? char : encodeURIComponent(char);
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$specialSchemes = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$isSpecial = function (url) {
    return $fb61ad628fb3464a4b59a2997dacf0$exports($b5d5601ba003bf38e95bbe861ec10012$var$specialSchemes, url.scheme);
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$includesCredentials = function (url) {
    return url.username != '' || url.password != '';
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$cannotHaveUsernamePasswordPort = function (url) {
    return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$isWindowsDriveLetter = function (string, normalized) {
    var second;
    return string.length == 2 && $b5d5601ba003bf38e95bbe861ec10012$var$ALPHA.test(string.charAt(0)) && ((second = string.charAt(1)) == ':' || !normalized && second == '|');
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$startsWithWindowsDriveLetter = function (string) {
    var third;
    return string.length > 1 && $b5d5601ba003bf38e95bbe861ec10012$var$isWindowsDriveLetter(string.slice(0, 2)) && (string.length == 2 || (third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#');
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$shortenURLsPath = function (url) {
    var path = url.path;
    var pathSize = path.length;
    if (pathSize && (url.scheme != 'file' || pathSize != 1 || !$b5d5601ba003bf38e95bbe861ec10012$var$isWindowsDriveLetter(path[0], true))) {
      path.pop();
    }
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$isSingleDot = function (segment) {
    return segment === '.' || segment.toLowerCase() === '%2e';
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$isDoubleDot = function (segment) {
    segment = segment.toLowerCase();
    return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
  };

  // States:
  var $b5d5601ba003bf38e95bbe861ec10012$var$SCHEME_START = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$SCHEME = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$NO_SCHEME = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$SPECIAL_RELATIVE_OR_AUTHORITY = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$PATH_OR_AUTHORITY = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$RELATIVE = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$RELATIVE_SLASH = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$SPECIAL_AUTHORITY_SLASHES = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$AUTHORITY = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$HOST = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$HOSTNAME = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$PORT = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$FILE = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$FILE_SLASH = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$FILE_HOST = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$PATH_START = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$PATH = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$CANNOT_BE_A_BASE_URL_PATH = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$QUERY = {};
  var $b5d5601ba003bf38e95bbe861ec10012$var$FRAGMENT = {};

  // eslint-disable-next-line max-statements
  var $b5d5601ba003bf38e95bbe861ec10012$var$parseURL = function (url, input, stateOverride, base) {
    var state = stateOverride || $b5d5601ba003bf38e95bbe861ec10012$var$SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, char, bufferCodePoints, failure;
    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = input.replace($b5d5601ba003bf38e95bbe861ec10012$var$LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
    }
    input = input.replace($b5d5601ba003bf38e95bbe861ec10012$var$TAB_AND_NEW_LINE, '');
    codePoints = $b21247ed923af71bc4cfac981f77f5$exports(input);
    while (pointer <= codePoints.length) {
      char = codePoints[pointer];
      switch (state) {
        case $b5d5601ba003bf38e95bbe861ec10012$var$SCHEME_START:
          if (char && $b5d5601ba003bf38e95bbe861ec10012$var$ALPHA.test(char)) {
            buffer += char.toLowerCase();
            state = $b5d5601ba003bf38e95bbe861ec10012$var$SCHEME;
          } else if (!stateOverride) {
            state = $b5d5601ba003bf38e95bbe861ec10012$var$NO_SCHEME;
            continue;
          } else return $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_SCHEME;
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$SCHEME:
          if (char && ($b5d5601ba003bf38e95bbe861ec10012$var$ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
            buffer += char.toLowerCase();
          } else if (char == ':') {
            if (stateOverride && ($b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url) != $fb61ad628fb3464a4b59a2997dacf0$exports($b5d5601ba003bf38e95bbe861ec10012$var$specialSchemes, buffer) || buffer == 'file' && ($b5d5601ba003bf38e95bbe861ec10012$var$includesCredentials(url) || url.port !== null) || url.scheme == 'file' && !url.host)) return;
            url.scheme = buffer;
            if (stateOverride) {
              if ($b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url) && $b5d5601ba003bf38e95bbe861ec10012$var$specialSchemes[url.scheme] == url.port) url.port = null;
              return;
            }
            buffer = '';
            if (url.scheme == 'file') {
              state = $b5d5601ba003bf38e95bbe861ec10012$var$FILE;
            } else if ($b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url) && base && base.scheme == url.scheme) {
              state = $b5d5601ba003bf38e95bbe861ec10012$var$SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if ($b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url)) {
              state = $b5d5601ba003bf38e95bbe861ec10012$var$SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] == '/') {
              state = $b5d5601ba003bf38e95bbe861ec10012$var$PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              url.path.push('');
              state = $b5d5601ba003bf38e95bbe861ec10012$var$CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = $b5d5601ba003bf38e95bbe861ec10012$var$NO_SCHEME;
            pointer = 0;
            continue;
          } else return $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_SCHEME;
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$NO_SCHEME:
          if (!base || base.cannotBeABaseURL && char != '#') return $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_SCHEME;
          if (base.cannotBeABaseURL && char == '#') {
            url.scheme = base.scheme;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = $b5d5601ba003bf38e95bbe861ec10012$var$FRAGMENT;
            break;
          }
          state = base.scheme == 'file' ? $b5d5601ba003bf38e95bbe861ec10012$var$FILE : $b5d5601ba003bf38e95bbe861ec10012$var$RELATIVE;
          continue;
        case $b5d5601ba003bf38e95bbe861ec10012$var$SPECIAL_RELATIVE_OR_AUTHORITY:
          if (char == '/' && codePoints[pointer + 1] == '/') {
            state = $b5d5601ba003bf38e95bbe861ec10012$var$SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = $b5d5601ba003bf38e95bbe861ec10012$var$RELATIVE;
            continue;
          }
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$PATH_OR_AUTHORITY:
          if (char == '/') {
            state = $b5d5601ba003bf38e95bbe861ec10012$var$AUTHORITY;
            break;
          } else {
            state = $b5d5601ba003bf38e95bbe861ec10012$var$PATH;
            continue;
          }
        case $b5d5601ba003bf38e95bbe861ec10012$var$RELATIVE:
          url.scheme = base.scheme;
          if (char == $b5d5601ba003bf38e95bbe861ec10012$var$EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '/' || char == '\\' && $b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url)) {
            state = $b5d5601ba003bf38e95bbe861ec10012$var$RELATIVE_SLASH;
          } else if (char == '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.query = '';
            state = $b5d5601ba003bf38e95bbe861ec10012$var$QUERY;
          } else if (char == '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = $b5d5601ba003bf38e95bbe861ec10012$var$FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.path.pop();
            state = $b5d5601ba003bf38e95bbe861ec10012$var$PATH;
            continue;
          }
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$RELATIVE_SLASH:
          if ($b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url) && (char == '/' || char == '\\')) {
            state = $b5d5601ba003bf38e95bbe861ec10012$var$SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (char == '/') {
            state = $b5d5601ba003bf38e95bbe861ec10012$var$AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = $b5d5601ba003bf38e95bbe861ec10012$var$PATH;
            continue;
          }
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$SPECIAL_AUTHORITY_SLASHES:
          state = $b5d5601ba003bf38e95bbe861ec10012$var$SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
          pointer++;
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (char != '/' && char != '\\') {
            state = $b5d5601ba003bf38e95bbe861ec10012$var$AUTHORITY;
            continue;
          }
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$AUTHORITY:
          if (char == '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = $b21247ed923af71bc4cfac981f77f5$exports(buffer);
            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];
              if (codePoint == ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }
              var encodedCodePoints = $b5d5601ba003bf38e95bbe861ec10012$var$percentEncode(codePoint, $b5d5601ba003bf38e95bbe861ec10012$var$userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
            }
            buffer = '';
          } else if (char == $b5d5601ba003bf38e95bbe861ec10012$var$EOF || char == '/' || char == '?' || char == '#' || char == '\\' && $b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url)) {
            if (seenAt && buffer == '') return $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_AUTHORITY;
            pointer -= $b21247ed923af71bc4cfac981f77f5$exports(buffer).length + 1;
            buffer = '';
            state = $b5d5601ba003bf38e95bbe861ec10012$var$HOST;
          } else buffer += char;
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$HOST:
        case $b5d5601ba003bf38e95bbe861ec10012$var$HOSTNAME:
          if (stateOverride && url.scheme == 'file') {
            state = $b5d5601ba003bf38e95bbe861ec10012$var$FILE_HOST;
            continue;
          } else if (char == ':' && !seenBracket) {
            if (buffer == '') return $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_HOST;
            failure = $b5d5601ba003bf38e95bbe861ec10012$var$parseHost(url, buffer);
            if (failure) return failure;
            buffer = '';
            state = $b5d5601ba003bf38e95bbe861ec10012$var$PORT;
            if (stateOverride == $b5d5601ba003bf38e95bbe861ec10012$var$HOSTNAME) return;
          } else if (char == $b5d5601ba003bf38e95bbe861ec10012$var$EOF || char == '/' || char == '?' || char == '#' || char == '\\' && $b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url)) {
            if ($b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url) && buffer == '') return $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_HOST;
            if (stateOverride && buffer == '' && ($b5d5601ba003bf38e95bbe861ec10012$var$includesCredentials(url) || url.port !== null)) return;
            failure = $b5d5601ba003bf38e95bbe861ec10012$var$parseHost(url, buffer);
            if (failure) return failure;
            buffer = '';
            state = $b5d5601ba003bf38e95bbe861ec10012$var$PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (char == '[') seenBracket = true;else if (char == ']') seenBracket = false;
            buffer += char;
          }
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$PORT:
          if ($b5d5601ba003bf38e95bbe861ec10012$var$DIGIT.test(char)) {
            buffer += char;
          } else if (char == $b5d5601ba003bf38e95bbe861ec10012$var$EOF || char == '/' || char == '?' || char == '#' || char == '\\' && $b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url) || stateOverride) {
            if (buffer != '') {
              var port = parseInt(buffer, 10);
              if (port > 0xFFFF) return $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_PORT;
              url.port = $b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url) && port === $b5d5601ba003bf38e95bbe861ec10012$var$specialSchemes[url.scheme] ? null : port;
              buffer = '';
            }
            if (stateOverride) return;
            state = $b5d5601ba003bf38e95bbe861ec10012$var$PATH_START;
            continue;
          } else return $b5d5601ba003bf38e95bbe861ec10012$var$INVALID_PORT;
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$FILE:
          url.scheme = 'file';
          if (char == '/' || char == '\\') state = $b5d5601ba003bf38e95bbe861ec10012$var$FILE_SLASH;else if (base && base.scheme == 'file') {
            if (char == $b5d5601ba003bf38e95bbe861ec10012$var$EOF) {
              url.host = base.host;
              url.path = base.path.slice();
              url.query = base.query;
            } else if (char == '?') {
              url.host = base.host;
              url.path = base.path.slice();
              url.query = '';
              state = $b5d5601ba003bf38e95bbe861ec10012$var$QUERY;
            } else if (char == '#') {
              url.host = base.host;
              url.path = base.path.slice();
              url.query = base.query;
              url.fragment = '';
              state = $b5d5601ba003bf38e95bbe861ec10012$var$FRAGMENT;
            } else {
              if (!$b5d5601ba003bf38e95bbe861ec10012$var$startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                url.host = base.host;
                url.path = base.path.slice();
                $b5d5601ba003bf38e95bbe861ec10012$var$shortenURLsPath(url);
              }
              state = $b5d5601ba003bf38e95bbe861ec10012$var$PATH;
              continue;
            }
          } else {
            state = $b5d5601ba003bf38e95bbe861ec10012$var$PATH;
            continue;
          }
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$FILE_SLASH:
          if (char == '/' || char == '\\') {
            state = $b5d5601ba003bf38e95bbe861ec10012$var$FILE_HOST;
            break;
          }
          if (base && base.scheme == 'file' && !$b5d5601ba003bf38e95bbe861ec10012$var$startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
            if ($b5d5601ba003bf38e95bbe861ec10012$var$isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);else url.host = base.host;
          }
          state = $b5d5601ba003bf38e95bbe861ec10012$var$PATH;
          continue;
        case $b5d5601ba003bf38e95bbe861ec10012$var$FILE_HOST:
          if (char == $b5d5601ba003bf38e95bbe861ec10012$var$EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
            if (!stateOverride && $b5d5601ba003bf38e95bbe861ec10012$var$isWindowsDriveLetter(buffer)) {
              state = $b5d5601ba003bf38e95bbe861ec10012$var$PATH;
            } else if (buffer == '') {
              url.host = '';
              if (stateOverride) return;
              state = $b5d5601ba003bf38e95bbe861ec10012$var$PATH_START;
            } else {
              failure = $b5d5601ba003bf38e95bbe861ec10012$var$parseHost(url, buffer);
              if (failure) return failure;
              if (url.host == 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = $b5d5601ba003bf38e95bbe861ec10012$var$PATH_START;
            }
            continue;
          } else buffer += char;
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$PATH_START:
          if ($b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url)) {
            state = $b5d5601ba003bf38e95bbe861ec10012$var$PATH;
            if (char != '/' && char != '\\') continue;
          } else if (!stateOverride && char == '?') {
            url.query = '';
            state = $b5d5601ba003bf38e95bbe861ec10012$var$QUERY;
          } else if (!stateOverride && char == '#') {
            url.fragment = '';
            state = $b5d5601ba003bf38e95bbe861ec10012$var$FRAGMENT;
          } else if (char != $b5d5601ba003bf38e95bbe861ec10012$var$EOF) {
            state = $b5d5601ba003bf38e95bbe861ec10012$var$PATH;
            if (char != '/') continue;
          }
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$PATH:
          if (char == $b5d5601ba003bf38e95bbe861ec10012$var$EOF || char == '/' || char == '\\' && $b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url) || !stateOverride && (char == '?' || char == '#')) {
            if ($b5d5601ba003bf38e95bbe861ec10012$var$isDoubleDot(buffer)) {
              $b5d5601ba003bf38e95bbe861ec10012$var$shortenURLsPath(url);
              if (char != '/' && !(char == '\\' && $b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url))) {
                url.path.push('');
              }
            } else if ($b5d5601ba003bf38e95bbe861ec10012$var$isSingleDot(buffer)) {
              if (char != '/' && !(char == '\\' && $b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url))) {
                url.path.push('');
              }
            } else {
              if (url.scheme == 'file' && !url.path.length && $b5d5601ba003bf38e95bbe861ec10012$var$isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
              }
              url.path.push(buffer);
            }
            buffer = '';
            if (url.scheme == 'file' && (char == $b5d5601ba003bf38e95bbe861ec10012$var$EOF || char == '?' || char == '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                url.path.shift();
              }
            }
            if (char == '?') {
              url.query = '';
              state = $b5d5601ba003bf38e95bbe861ec10012$var$QUERY;
            } else if (char == '#') {
              url.fragment = '';
              state = $b5d5601ba003bf38e95bbe861ec10012$var$FRAGMENT;
            }
          } else {
            buffer += $b5d5601ba003bf38e95bbe861ec10012$var$percentEncode(char, $b5d5601ba003bf38e95bbe861ec10012$var$pathPercentEncodeSet);
          }
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$CANNOT_BE_A_BASE_URL_PATH:
          if (char == '?') {
            url.query = '';
            state = $b5d5601ba003bf38e95bbe861ec10012$var$QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = $b5d5601ba003bf38e95bbe861ec10012$var$FRAGMENT;
          } else if (char != $b5d5601ba003bf38e95bbe861ec10012$var$EOF) {
            url.path[0] += $b5d5601ba003bf38e95bbe861ec10012$var$percentEncode(char, $b5d5601ba003bf38e95bbe861ec10012$var$C0ControlPercentEncodeSet);
          }
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$QUERY:
          if (!stateOverride && char == '#') {
            url.fragment = '';
            state = $b5d5601ba003bf38e95bbe861ec10012$var$FRAGMENT;
          } else if (char != $b5d5601ba003bf38e95bbe861ec10012$var$EOF) {
            if (char == "'" && $b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url)) url.query += '%27';else if (char == '#') url.query += '%23';else url.query += $b5d5601ba003bf38e95bbe861ec10012$var$percentEncode(char, $b5d5601ba003bf38e95bbe861ec10012$var$C0ControlPercentEncodeSet);
          }
          break;
        case $b5d5601ba003bf38e95bbe861ec10012$var$FRAGMENT:
          if (char != $b5d5601ba003bf38e95bbe861ec10012$var$EOF) url.fragment += $b5d5601ba003bf38e95bbe861ec10012$var$percentEncode(char, $b5d5601ba003bf38e95bbe861ec10012$var$fragmentPercentEncodeSet);
          break;
      }
      pointer++;
    }
  };

  // `URL` constructor
  // https://url.spec.whatwg.org/#url-class
  var $b5d5601ba003bf38e95bbe861ec10012$var$URLConstructor = function URL(url /* , base */) {
    var that = $e359134306bb9a3c781645bdfc0c5d18$exports(this, $b5d5601ba003bf38e95bbe861ec10012$var$URLConstructor, 'URL');
    var base = arguments.length > 1 ? arguments[1] : undefined;
    var urlString = String(url);
    var state = $b5d5601ba003bf38e95bbe861ec10012$var$setInternalState(that, {
      type: 'URL'
    });
    var baseState, failure;
    if (base !== undefined) {
      if (base instanceof $b5d5601ba003bf38e95bbe861ec10012$var$URLConstructor) baseState = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(base);else {
        failure = $b5d5601ba003bf38e95bbe861ec10012$var$parseURL(baseState = {}, String(base));
        if (failure) throw TypeError(failure);
      }
    }
    failure = $b5d5601ba003bf38e95bbe861ec10012$var$parseURL(state, urlString, null, baseState);
    if (failure) throw TypeError(failure);
    var searchParams = state.searchParams = new $b5d5601ba003bf38e95bbe861ec10012$var$URLSearchParams();
    var searchParamsState = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalSearchParamsState(searchParams);
    searchParamsState.updateSearchParams(state.query);
    searchParamsState.updateURL = function () {
      state.query = String(searchParams) || null;
    };
    if (!$a7c68cb8fd81a83c8a53a82a3f122f3e$exports) {
      that.href = $b5d5601ba003bf38e95bbe861ec10012$var$serializeURL.call(that);
      that.origin = $b5d5601ba003bf38e95bbe861ec10012$var$getOrigin.call(that);
      that.protocol = $b5d5601ba003bf38e95bbe861ec10012$var$getProtocol.call(that);
      that.username = $b5d5601ba003bf38e95bbe861ec10012$var$getUsername.call(that);
      that.password = $b5d5601ba003bf38e95bbe861ec10012$var$getPassword.call(that);
      that.host = $b5d5601ba003bf38e95bbe861ec10012$var$getHost.call(that);
      that.hostname = $b5d5601ba003bf38e95bbe861ec10012$var$getHostname.call(that);
      that.port = $b5d5601ba003bf38e95bbe861ec10012$var$getPort.call(that);
      that.pathname = $b5d5601ba003bf38e95bbe861ec10012$var$getPathname.call(that);
      that.search = $b5d5601ba003bf38e95bbe861ec10012$var$getSearch.call(that);
      that.searchParams = $b5d5601ba003bf38e95bbe861ec10012$var$getSearchParams.call(that);
      that.hash = $b5d5601ba003bf38e95bbe861ec10012$var$getHash.call(that);
    }
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$URLPrototype = $b5d5601ba003bf38e95bbe861ec10012$var$URLConstructor.prototype;
  var $b5d5601ba003bf38e95bbe861ec10012$var$serializeURL = function () {
    var url = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this);
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';
    if (host !== null) {
      output += '//';
      if ($b5d5601ba003bf38e95bbe861ec10012$var$includesCredentials(url)) {
        output += username + (password ? ':' + password : '') + '@';
      }
      output += $b5d5601ba003bf38e95bbe861ec10012$var$serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme == 'file') output += '//';
    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$getOrigin = function () {
    var url = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this);
    var scheme = url.scheme;
    var port = url.port;
    if (scheme == 'blob') try {
      return new URL(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme == 'file' || !$b5d5601ba003bf38e95bbe861ec10012$var$isSpecial(url)) return 'null';
    return scheme + '://' + $b5d5601ba003bf38e95bbe861ec10012$var$serializeHost(url.host) + (port !== null ? ':' + port : '');
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$getProtocol = function () {
    return $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this).scheme + ':';
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$getUsername = function () {
    return $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this).username;
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$getPassword = function () {
    return $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this).password;
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$getHost = function () {
    var url = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this);
    var host = url.host;
    var port = url.port;
    return host === null ? '' : port === null ? $b5d5601ba003bf38e95bbe861ec10012$var$serializeHost(host) : $b5d5601ba003bf38e95bbe861ec10012$var$serializeHost(host) + ':' + port;
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$getHostname = function () {
    var host = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this).host;
    return host === null ? '' : $b5d5601ba003bf38e95bbe861ec10012$var$serializeHost(host);
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$getPort = function () {
    var port = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this).port;
    return port === null ? '' : String(port);
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$getPathname = function () {
    var url = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this);
    var path = url.path;
    return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$getSearch = function () {
    var query = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this).query;
    return query ? '?' + query : '';
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$getSearchParams = function () {
    return $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this).searchParams;
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$getHash = function () {
    var fragment = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this).fragment;
    return fragment ? '#' + fragment : '';
  };
  var $b5d5601ba003bf38e95bbe861ec10012$var$accessorDescriptor = function (getter, setter) {
    return {
      get: getter,
      set: setter,
      configurable: true,
      enumerable: true
    };
  };
  if ($a7c68cb8fd81a83c8a53a82a3f122f3e$exports) {
    $b13c804123a5f34e6966538ba0b49ccd$exports($b5d5601ba003bf38e95bbe861ec10012$var$URLPrototype, {
      // `URL.prototype.href` accessors pair
      // https://url.spec.whatwg.org/#dom-url-href
      href: $b5d5601ba003bf38e95bbe861ec10012$var$accessorDescriptor($b5d5601ba003bf38e95bbe861ec10012$var$serializeURL, function (href) {
        var url = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this);
        var urlString = String(href);
        var failure = $b5d5601ba003bf38e95bbe861ec10012$var$parseURL(url, urlString);
        if (failure) throw TypeError(failure);
        $b5d5601ba003bf38e95bbe861ec10012$var$getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
      }),
      // `URL.prototype.origin` getter
      // https://url.spec.whatwg.org/#dom-url-origin
      origin: $b5d5601ba003bf38e95bbe861ec10012$var$accessorDescriptor($b5d5601ba003bf38e95bbe861ec10012$var$getOrigin),
      // `URL.prototype.protocol` accessors pair
      // https://url.spec.whatwg.org/#dom-url-protocol
      protocol: $b5d5601ba003bf38e95bbe861ec10012$var$accessorDescriptor($b5d5601ba003bf38e95bbe861ec10012$var$getProtocol, function (protocol) {
        var url = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this);
        $b5d5601ba003bf38e95bbe861ec10012$var$parseURL(url, String(protocol) + ':', $b5d5601ba003bf38e95bbe861ec10012$var$SCHEME_START);
      }),
      // `URL.prototype.username` accessors pair
      // https://url.spec.whatwg.org/#dom-url-username
      username: $b5d5601ba003bf38e95bbe861ec10012$var$accessorDescriptor($b5d5601ba003bf38e95bbe861ec10012$var$getUsername, function (username) {
        var url = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this);
        var codePoints = $b21247ed923af71bc4cfac981f77f5$exports(String(username));
        if ($b5d5601ba003bf38e95bbe861ec10012$var$cannotHaveUsernamePasswordPort(url)) return;
        url.username = '';
        for (var i = 0; i < codePoints.length; i++) {
          url.username += $b5d5601ba003bf38e95bbe861ec10012$var$percentEncode(codePoints[i], $b5d5601ba003bf38e95bbe861ec10012$var$userinfoPercentEncodeSet);
        }
      }),
      // `URL.prototype.password` accessors pair
      // https://url.spec.whatwg.org/#dom-url-password
      password: $b5d5601ba003bf38e95bbe861ec10012$var$accessorDescriptor($b5d5601ba003bf38e95bbe861ec10012$var$getPassword, function (password) {
        var url = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this);
        var codePoints = $b21247ed923af71bc4cfac981f77f5$exports(String(password));
        if ($b5d5601ba003bf38e95bbe861ec10012$var$cannotHaveUsernamePasswordPort(url)) return;
        url.password = '';
        for (var i = 0; i < codePoints.length; i++) {
          url.password += $b5d5601ba003bf38e95bbe861ec10012$var$percentEncode(codePoints[i], $b5d5601ba003bf38e95bbe861ec10012$var$userinfoPercentEncodeSet);
        }
      }),
      // `URL.prototype.host` accessors pair
      // https://url.spec.whatwg.org/#dom-url-host
      host: $b5d5601ba003bf38e95bbe861ec10012$var$accessorDescriptor($b5d5601ba003bf38e95bbe861ec10012$var$getHost, function (host) {
        var url = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this);
        if (url.cannotBeABaseURL) return;
        $b5d5601ba003bf38e95bbe861ec10012$var$parseURL(url, String(host), $b5d5601ba003bf38e95bbe861ec10012$var$HOST);
      }),
      // `URL.prototype.hostname` accessors pair
      // https://url.spec.whatwg.org/#dom-url-hostname
      hostname: $b5d5601ba003bf38e95bbe861ec10012$var$accessorDescriptor($b5d5601ba003bf38e95bbe861ec10012$var$getHostname, function (hostname) {
        var url = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this);
        if (url.cannotBeABaseURL) return;
        $b5d5601ba003bf38e95bbe861ec10012$var$parseURL(url, String(hostname), $b5d5601ba003bf38e95bbe861ec10012$var$HOSTNAME);
      }),
      // `URL.prototype.port` accessors pair
      // https://url.spec.whatwg.org/#dom-url-port
      port: $b5d5601ba003bf38e95bbe861ec10012$var$accessorDescriptor($b5d5601ba003bf38e95bbe861ec10012$var$getPort, function (port) {
        var url = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this);
        if ($b5d5601ba003bf38e95bbe861ec10012$var$cannotHaveUsernamePasswordPort(url)) return;
        port = String(port);
        if (port == '') url.port = null;else $b5d5601ba003bf38e95bbe861ec10012$var$parseURL(url, port, $b5d5601ba003bf38e95bbe861ec10012$var$PORT);
      }),
      // `URL.prototype.pathname` accessors pair
      // https://url.spec.whatwg.org/#dom-url-pathname
      pathname: $b5d5601ba003bf38e95bbe861ec10012$var$accessorDescriptor($b5d5601ba003bf38e95bbe861ec10012$var$getPathname, function (pathname) {
        var url = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this);
        if (url.cannotBeABaseURL) return;
        url.path = [];
        $b5d5601ba003bf38e95bbe861ec10012$var$parseURL(url, pathname + '', $b5d5601ba003bf38e95bbe861ec10012$var$PATH_START);
      }),
      // `URL.prototype.search` accessors pair
      // https://url.spec.whatwg.org/#dom-url-search
      search: $b5d5601ba003bf38e95bbe861ec10012$var$accessorDescriptor($b5d5601ba003bf38e95bbe861ec10012$var$getSearch, function (search) {
        var url = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this);
        search = String(search);
        if (search == '') {
          url.query = null;
        } else {
          if ('?' == search.charAt(0)) search = search.slice(1);
          url.query = '';
          $b5d5601ba003bf38e95bbe861ec10012$var$parseURL(url, search, $b5d5601ba003bf38e95bbe861ec10012$var$QUERY);
        }
        $b5d5601ba003bf38e95bbe861ec10012$var$getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
      }),
      // `URL.prototype.searchParams` getter
      // https://url.spec.whatwg.org/#dom-url-searchparams
      searchParams: $b5d5601ba003bf38e95bbe861ec10012$var$accessorDescriptor($b5d5601ba003bf38e95bbe861ec10012$var$getSearchParams),
      // `URL.prototype.hash` accessors pair
      // https://url.spec.whatwg.org/#dom-url-hash
      hash: $b5d5601ba003bf38e95bbe861ec10012$var$accessorDescriptor($b5d5601ba003bf38e95bbe861ec10012$var$getHash, function (hash) {
        var url = $b5d5601ba003bf38e95bbe861ec10012$var$getInternalURLState(this);
        hash = String(hash);
        if (hash == '') {
          url.fragment = null;
          return;
        }
        if ('#' == hash.charAt(0)) hash = hash.slice(1);
        url.fragment = '';
        $b5d5601ba003bf38e95bbe861ec10012$var$parseURL(url, hash, $b5d5601ba003bf38e95bbe861ec10012$var$FRAGMENT);
      })
    });
  }

  // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson
  $e3c8a1361cc0783bc835b9e100a3660b$exports($b5d5601ba003bf38e95bbe861ec10012$var$URLPrototype, 'toJSON', function toJSON() {
    return $b5d5601ba003bf38e95bbe861ec10012$var$serializeURL.call(this);
  }, {
    enumerable: true
  });

  // `URL.prototype.toString` method
  // https://url.spec.whatwg.org/#URL-stringification-behavior
  $e3c8a1361cc0783bc835b9e100a3660b$exports($b5d5601ba003bf38e95bbe861ec10012$var$URLPrototype, 'toString', function toString() {
    return $b5d5601ba003bf38e95bbe861ec10012$var$serializeURL.call(this);
  }, {
    enumerable: true
  });
  if ($b5d5601ba003bf38e95bbe861ec10012$var$NativeURL) {
    var $b5d5601ba003bf38e95bbe861ec10012$var$nativeCreateObjectURL = $b5d5601ba003bf38e95bbe861ec10012$var$NativeURL.createObjectURL;
    var $b5d5601ba003bf38e95bbe861ec10012$var$nativeRevokeObjectURL = $b5d5601ba003bf38e95bbe861ec10012$var$NativeURL.revokeObjectURL;
    // `URL.createObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
    // eslint-disable-next-line no-unused-vars
    if ($b5d5601ba003bf38e95bbe861ec10012$var$nativeCreateObjectURL) $e3c8a1361cc0783bc835b9e100a3660b$exports($b5d5601ba003bf38e95bbe861ec10012$var$URLConstructor, 'createObjectURL', function createObjectURL(blob) {
      return $b5d5601ba003bf38e95bbe861ec10012$var$nativeCreateObjectURL.apply($b5d5601ba003bf38e95bbe861ec10012$var$NativeURL, arguments);
    });
    // `URL.revokeObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
    // eslint-disable-next-line no-unused-vars
    if ($b5d5601ba003bf38e95bbe861ec10012$var$nativeRevokeObjectURL) $e3c8a1361cc0783bc835b9e100a3660b$exports($b5d5601ba003bf38e95bbe861ec10012$var$URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
      return $b5d5601ba003bf38e95bbe861ec10012$var$nativeRevokeObjectURL.apply($b5d5601ba003bf38e95bbe861ec10012$var$NativeURL, arguments);
    });
  }
  $b44eaad080afd8b6cc975138b17db$exports($b5d5601ba003bf38e95bbe861ec10012$var$URLConstructor, 'URL');
  $da20139527b9570444c7d5c06ae45fa2$exports({
    global: true,
    forced: !$a16bd222c79729fa1f7ca8508368$exports,
    sham: !$a7c68cb8fd81a83c8a53a82a3f122f3e$exports
  }, {
    URL: $b5d5601ba003bf38e95bbe861ec10012$var$URLConstructor
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\core-js\modules\web.url.to-json.js
  // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson
  $da20139527b9570444c7d5c06ae45fa2$exports({
    target: 'URL',
    proto: true,
    enumerable: true
  }, {
    toJSON: function toJSON() {
      return URL.prototype.toString.call(this);
    }
  }); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\src\js\modal.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\src\js\helpers.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\regenerator-runtime\runtime.js
  var $c921ead684f111a814b77534477c6ddf$exports = {};
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var $c921ead684f111a814b77534477c6ddf$var$runtime = function (exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction ||
      // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }
          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }
      var previousPromise;
      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
        // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };
    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }
        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }
        context.method = method;
        context.arg = arg;
        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }
            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }
          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;
            if (record.arg === ContinueSentinel) {
              continue;
            }
            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;
        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined;
            maybeInvokeDelegate(delegate, context);
            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }
          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return ContinueSentinel;
      }
      var record = tryCatch(method, delegate.iterator, context.arg);
      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }
      var info = record.arg;
      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }
      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function () {
      return this;
    };
    Gp.toString = function () {
      return "[object Generator]";
    };
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      if (1 in locs) {
        entry.catchLoc = locs[1];
      }
      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }
      this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }
    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }
    exports.keys = function (object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }
        if (typeof iterable.next === "function") {
          return iterable;
        }
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }
              next.value = undefined;
              next.done = true;
              return next;
            };
          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return {
        next: doneResult
      };
    }
    exports.values = values;
    function doneResult() {
      return {
        value: undefined,
        done: true
      };
    }
    Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined;
        this.tryEntries.forEach(resetTryEntry);
        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },
      stop: function () {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) {
          throw exception;
        }
        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;
          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined;
          }
          return !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;
          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }
        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;
        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }
        return this.complete(record);
      },
      complete: function (record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }
        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }
        return ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };
        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined;
        }
        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
  }(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  "object" === "object" ? $c921ead684f111a814b77534477c6ddf$exports : {});
  try {
    regeneratorRuntime = $c921ead684f111a814b77534477c6ddf$var$runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")($c921ead684f111a814b77534477c6ddf$var$runtime);
  } // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\src\js\config.js
  var $ad22e0a18c2bbded425be092f88aba2e$export$API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
  var $ad22e0a18c2bbded425be092f88aba2e$export$PAGE_LIMIT = 10;
  function $fe40ff4fe3c4c74bdad83178dfb5e92$var$_typeof(o) {
    "@babel/helpers - typeof";

    return $fe40ff4fe3c4c74bdad83178dfb5e92$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $fe40ff4fe3c4c74bdad83178dfb5e92$var$_typeof(o);
  }
  function $fe40ff4fe3c4c74bdad83178dfb5e92$var$_regeneratorRuntime() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    $fe40ff4fe3c4c74bdad83178dfb5e92$var$_regeneratorRuntime = function _regeneratorRuntime() {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function define(t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == $fe40ff4fe3c4c74bdad83178dfb5e92$var$_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function value(t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError($fe40ff4fe3c4c74bdad83178dfb5e92$var$_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function $fe40ff4fe3c4c74bdad83178dfb5e92$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function $fe40ff4fe3c4c74bdad83178dfb5e92$var$_asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          $fe40ff4fe3c4c74bdad83178dfb5e92$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          $fe40ff4fe3c4c74bdad83178dfb5e92$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  var $fe40ff4fe3c4c74bdad83178dfb5e92$var$timeout = function timeout(s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error("Request took too long! Timeout after ".concat(s, " second")));
      }, s * 1000);
    });
  };
  var $fe40ff4fe3c4c74bdad83178dfb5e92$export$JsonDataEx = /*#__PURE__*/function () {
    var _ref = $fe40ff4fe3c4c74bdad83178dfb5e92$var$_asyncToGenerator( /*#__PURE__*/$fe40ff4fe3c4c74bdad83178dfb5e92$var$_regeneratorRuntime().mark(function _callee(url) {
      var res, data;
      return $fe40ff4fe3c4c74bdad83178dfb5e92$var$_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch(url);
          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();
          case 6:
            data = _context.sent;
            if (res.ok) {
              _context.next = 9;
              break;
            }
            throw new Error("".concat(data.message, " (").concat(res.status, ")"));
          case 9:
            return _context.abrupt("return", data);
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            throw _context.t0;
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 12]]);
    }));
    return function JsonDataEx(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var $fe40ff4fe3c4c74bdad83178dfb5e92$export$sendJSON = /*#__PURE__*/function () {
    var _ref2 = $fe40ff4fe3c4c74bdad83178dfb5e92$var$_asyncToGenerator( /*#__PURE__*/$fe40ff4fe3c4c74bdad83178dfb5e92$var$_regeneratorRuntime().mark(function _callee2(url, data) {
      var fetchPro, res, _data;
      return $fe40ff4fe3c4c74bdad83178dfb5e92$var$_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            fetchPro = fetch(url, {
              method: 'POST',
              Headers: {
                'Content-Type': 'aplication/json'
              },
              body: JSON.stringify(_data)
            });
            _context2.next = 4;
            return promise.race([fetchPro, $fe40ff4fe3c4c74bdad83178dfb5e92$var$timeout(10)]);
          case 4:
            res = _context2.sent;
            _context2.next = 7;
            return res.json();
          case 7:
            _data = _context2.sent;
            if (res.ok) {
              _context2.next = 10;
              break;
            }
            throw new Error("".concat(_data.message, " (").concat(res.status, ")"));
          case 10:
            return _context2.abrupt("return", _data);
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 13]]);
    }));
    return function sendJSON(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }(); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\src\js\views\bookmarks.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\src\js\views\ParentView.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\@parcel\runtime-js\lib\JSRuntime.js
  var $ece14095656b317e1b80bd00028aeec$exports = {}; // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\@parcel\runtime-js\lib\bundle-url.js
  /* globals document:readonly */
  var $da3a6c17234c5d68d4f1108f53a7bad4$var$bundleURL = null;
  function $da3a6c17234c5d68d4f1108f53a7bad4$var$getBundleURLCached() {
    if (!$da3a6c17234c5d68d4f1108f53a7bad4$var$bundleURL) {
      $da3a6c17234c5d68d4f1108f53a7bad4$var$bundleURL = $da3a6c17234c5d68d4f1108f53a7bad4$var$getBundleURL();
    }
    return $da3a6c17234c5d68d4f1108f53a7bad4$var$bundleURL;
  }
  function $da3a6c17234c5d68d4f1108f53a7bad4$var$getBundleURL() {
    try {
      throw new Error();
    } catch (err) {
      var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
      if (matches) {
        return $da3a6c17234c5d68d4f1108f53a7bad4$var$getBaseURL(matches[0]);
      }
    }
    return '/';
  }
  function $da3a6c17234c5d68d4f1108f53a7bad4$var$getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
  } // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
  var $da3a6c17234c5d68d4f1108f53a7bad4$export$getBundleURL = $da3a6c17234c5d68d4f1108f53a7bad4$var$getBundleURLCached;
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\@parcel\runtime-js\lib\relative-path.js
  var $e5b69ae2ffddc223b376d75aff9c28$exports = {};
  var $e5b69ae2ffddc223b376d75aff9c28$var$resolve = $bd72ee1865b930c1fed8ae47f35e91$export$resolve;
  $e5b69ae2ffddc223b376d75aff9c28$exports = function (fromId, toId) {
    return $e5b69ae2ffddc223b376d75aff9c28$var$relative($e5b69ae2ffddc223b376d75aff9c28$var$dirname($e5b69ae2ffddc223b376d75aff9c28$var$resolve(fromId)), $e5b69ae2ffddc223b376d75aff9c28$var$resolve(toId));
  };
  function $e5b69ae2ffddc223b376d75aff9c28$var$dirname(_filePath) {
    if (_filePath === '') {
      return '.';
    }
    var filePath = _filePath[_filePath.length - 1] === '/' ? _filePath.slice(0, _filePath.length - 1) : _filePath;
    var slashIndex = filePath.lastIndexOf('/');
    return slashIndex === -1 ? '.' : filePath.slice(0, slashIndex);
  }
  function $e5b69ae2ffddc223b376d75aff9c28$var$relative(from, to) {
    if (from === to) {
      return '';
    }
    var fromParts = from.split('/');
    if (fromParts[0] === '.') {
      fromParts.shift();
    }
    var toParts = to.split('/');
    if (toParts[0] === '.') {
      toParts.shift();
    } // Find where path segments diverge.

    var i;
    var divergeIndex;
    for (i = 0; (i < toParts.length || i < fromParts.length) && divergeIndex == null; i++) {
      if (fromParts[i] !== toParts[i]) {
        divergeIndex = i;
      }
    } // If there are segments from "from" beyond the point of divergence,
    // return back up the path to that point using "..".

    var parts = [];
    for (i = 0; i < fromParts.length - divergeIndex; i++) {
      parts.push('..');
    } // If there are segments from "to" beyond the point of divergence,
    // continue using the remaining segments.

    if (toParts.length > divergeIndex) {
      parts.push.apply(parts, toParts.slice(divergeIndex));
    }
    return parts.join('/');
  }
  var $e5b69ae2ffddc223b376d75aff9c28$export$_dirname = $e5b69ae2ffddc223b376d75aff9c28$var$dirname;
  $e5b69ae2ffddc223b376d75aff9c28$exports._dirname = $e5b69ae2ffddc223b376d75aff9c28$export$_dirname;
  var $e5b69ae2ffddc223b376d75aff9c28$export$_relative = $e5b69ae2ffddc223b376d75aff9c28$var$relative;
  $e5b69ae2ffddc223b376d75aff9c28$exports._relative = $e5b69ae2ffddc223b376d75aff9c28$export$_relative;
  $ece14095656b317e1b80bd00028aeec$exports = $da3a6c17234c5d68d4f1108f53a7bad4$export$getBundleURL() + $e5b69ae2ffddc223b376d75aff9c28$exports("9386246f13be099a", "91e1509eb3eba0bf");
  function $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_typeof(o) {
    "@babel/helpers - typeof";

    return $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_typeof(o);
  }
  function $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_toPropertyKey(descriptor.key), descriptor);
    }
  }
  function $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_defineProperty(obj, key, value) {
    key = $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_toPropertyKey(t) {
    var i = $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_toPrimitive(t, "string");
    return "symbol" == $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_typeof(i) ? i : i + "";
  }
  function $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_toPrimitive(t, r) {
    if ("object" != $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  var $ece14095656b317e1b80bd00028aeec$$interop$default = $parcel$interopDefault($ece14095656b317e1b80bd00028aeec$exports);
  var $b99ae1ccf7b7dfd6b49eb2b84e6d6141$export$default = /*#__PURE__*/function () {
    function ParentView() {
      var _this = this;
      $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_classCallCheck(this, ParentView);
      $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_defineProperty(this, "spinner", function () {
        var html = "\n        <div class=\"spinner\">\n            <svg>\n                <use href=\"".concat($ece14095656b317e1b80bd00028aeec$$interop$default, "#icon-loader\"></use>\n            </svg>\n        </div>\n      ");
        _this.clear();
        _this.parentElement.insertAdjacentHTML('afterbegin', html);
      });
    }
    return $b99ae1ccf7b7dfd6b49eb2b84e6d6141$var$_createClass(ParentView, [{
      key: "render",
      value: function render(data) {
        var _render = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this.data = data;
        var html = this.generateMarkup();
        if (!_render) return html;
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', html);
        // if ((result = false)) return data;
        // else return html;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.parentElement.innerHTML = '';
      }
    }, {
      key: "renderError",
      value: function renderError() {
        var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.errorMessage;
        var html = "<div class=\"error\">\n    <div>\n      <svg>\n        <use href=\"".concat($ece14095656b317e1b80bd00028aeec$$interop$default, "#icon-alert-triangle\"></use>\n      </svg>\n    </div>\n    <p>").concat(message, "</p>\n  </div>");
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', html);
      }
    }]);
  }(); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\src\js\views\Upreview.js
  function $af840bb2d3482e430fadc5305a4b56e$var$_typeof(o) {
    "@babel/helpers - typeof";

    return $af840bb2d3482e430fadc5305a4b56e$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $af840bb2d3482e430fadc5305a4b56e$var$_typeof(o);
  }
  function $af840bb2d3482e430fadc5305a4b56e$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function $af840bb2d3482e430fadc5305a4b56e$var$_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, $af840bb2d3482e430fadc5305a4b56e$var$_toPropertyKey(descriptor.key), descriptor);
    }
  }
  function $af840bb2d3482e430fadc5305a4b56e$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $af840bb2d3482e430fadc5305a4b56e$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $af840bb2d3482e430fadc5305a4b56e$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function $af840bb2d3482e430fadc5305a4b56e$var$_toPropertyKey(t) {
    var i = $af840bb2d3482e430fadc5305a4b56e$var$_toPrimitive(t, "string");
    return "symbol" == $af840bb2d3482e430fadc5305a4b56e$var$_typeof(i) ? i : i + "";
  }
  function $af840bb2d3482e430fadc5305a4b56e$var$_toPrimitive(t, r) {
    if ("object" != $af840bb2d3482e430fadc5305a4b56e$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != $af840bb2d3482e430fadc5305a4b56e$var$_typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function $af840bb2d3482e430fadc5305a4b56e$var$_callSuper(t, o, e) {
    return o = $af840bb2d3482e430fadc5305a4b56e$var$_getPrototypeOf(o), $af840bb2d3482e430fadc5305a4b56e$var$_possibleConstructorReturn(t, $af840bb2d3482e430fadc5305a4b56e$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $af840bb2d3482e430fadc5305a4b56e$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function $af840bb2d3482e430fadc5305a4b56e$var$_possibleConstructorReturn(self, call) {
    if (call && ($af840bb2d3482e430fadc5305a4b56e$var$_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return $af840bb2d3482e430fadc5305a4b56e$var$_assertThisInitialized(self);
  }
  function $af840bb2d3482e430fadc5305a4b56e$var$_assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function $af840bb2d3482e430fadc5305a4b56e$var$_isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return ($af840bb2d3482e430fadc5305a4b56e$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return !!t;
    })();
  }
  function $af840bb2d3482e430fadc5305a4b56e$var$_getPrototypeOf(o) {
    $af840bb2d3482e430fadc5305a4b56e$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $af840bb2d3482e430fadc5305a4b56e$var$_getPrototypeOf(o);
  }
  function $af840bb2d3482e430fadc5305a4b56e$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) $af840bb2d3482e430fadc5305a4b56e$var$_setPrototypeOf(subClass, superClass);
  }
  function $af840bb2d3482e430fadc5305a4b56e$var$_setPrototypeOf(o, p) {
    $af840bb2d3482e430fadc5305a4b56e$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return $af840bb2d3482e430fadc5305a4b56e$var$_setPrototypeOf(o, p);
  }
  var $af840bb2d3482e430fadc5305a4b56e$var$previewView = /*#__PURE__*/function (_ParentView) {
    function previewView() {
      $af840bb2d3482e430fadc5305a4b56e$var$_classCallCheck(this, previewView);
      return $af840bb2d3482e430fadc5305a4b56e$var$_callSuper(this, previewView, arguments);
    }
    $af840bb2d3482e430fadc5305a4b56e$var$_inherits(previewView, _ParentView);
    return $af840bb2d3482e430fadc5305a4b56e$var$_createClass(previewView, [{
      key: "generateMarkup",
      value: function generateMarkup() {
        var id = window.location.hash.slice(1);
        return "\n    <li class=\"preview\">\n      <a class=\"preview__link ".concat(this.data.id === id ? 'preview__link--active' : '', "\" href=\"#").concat(this.data.id, "\">\n        <figure class=\"preview__fig\">\n          <img src=\"").concat(this.data.image, "\" alt=\"").concat(this.data.title, "\" />\n        </figure>\n        <div class=\"preview__data\">\n          <h4 class=\"preview__title\">").concat(this.data.title, "</h4>\n          <p class=\"preview__publisher\">").concat(this.data.publisher, "</p>\n        </div>\n      </a>\n    </li>");
      }
    }]);
  }($b99ae1ccf7b7dfd6b49eb2b84e6d6141$export$default);
  var $af840bb2d3482e430fadc5305a4b56e$export$default = new $af840bb2d3482e430fadc5305a4b56e$var$previewView();
  function $a31b4151d8521703d05fe5a44fcf8abd$var$_typeof(o) {
    "@babel/helpers - typeof";

    return $a31b4151d8521703d05fe5a44fcf8abd$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $a31b4151d8521703d05fe5a44fcf8abd$var$_typeof(o);
  }
  function $a31b4151d8521703d05fe5a44fcf8abd$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function $a31b4151d8521703d05fe5a44fcf8abd$var$_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, $a31b4151d8521703d05fe5a44fcf8abd$var$_toPropertyKey(descriptor.key), descriptor);
    }
  }
  function $a31b4151d8521703d05fe5a44fcf8abd$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $a31b4151d8521703d05fe5a44fcf8abd$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $a31b4151d8521703d05fe5a44fcf8abd$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function $a31b4151d8521703d05fe5a44fcf8abd$var$_callSuper(t, o, e) {
    return o = $a31b4151d8521703d05fe5a44fcf8abd$var$_getPrototypeOf(o), $a31b4151d8521703d05fe5a44fcf8abd$var$_possibleConstructorReturn(t, $a31b4151d8521703d05fe5a44fcf8abd$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $a31b4151d8521703d05fe5a44fcf8abd$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function $a31b4151d8521703d05fe5a44fcf8abd$var$_possibleConstructorReturn(self, call) {
    if (call && ($a31b4151d8521703d05fe5a44fcf8abd$var$_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return $a31b4151d8521703d05fe5a44fcf8abd$var$_assertThisInitialized(self);
  }
  function $a31b4151d8521703d05fe5a44fcf8abd$var$_assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function $a31b4151d8521703d05fe5a44fcf8abd$var$_isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return ($a31b4151d8521703d05fe5a44fcf8abd$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return !!t;
    })();
  }
  function $a31b4151d8521703d05fe5a44fcf8abd$var$_getPrototypeOf(o) {
    $a31b4151d8521703d05fe5a44fcf8abd$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $a31b4151d8521703d05fe5a44fcf8abd$var$_getPrototypeOf(o);
  }
  function $a31b4151d8521703d05fe5a44fcf8abd$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) $a31b4151d8521703d05fe5a44fcf8abd$var$_setPrototypeOf(subClass, superClass);
  }
  function $a31b4151d8521703d05fe5a44fcf8abd$var$_setPrototypeOf(o, p) {
    $a31b4151d8521703d05fe5a44fcf8abd$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return $a31b4151d8521703d05fe5a44fcf8abd$var$_setPrototypeOf(o, p);
  }
  function $a31b4151d8521703d05fe5a44fcf8abd$var$_defineProperty(obj, key, value) {
    key = $a31b4151d8521703d05fe5a44fcf8abd$var$_toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function $a31b4151d8521703d05fe5a44fcf8abd$var$_toPropertyKey(t) {
    var i = $a31b4151d8521703d05fe5a44fcf8abd$var$_toPrimitive(t, "string");
    return "symbol" == $a31b4151d8521703d05fe5a44fcf8abd$var$_typeof(i) ? i : i + "";
  }
  function $a31b4151d8521703d05fe5a44fcf8abd$var$_toPrimitive(t, r) {
    if ("object" != $a31b4151d8521703d05fe5a44fcf8abd$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != $a31b4151d8521703d05fe5a44fcf8abd$var$_typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  var $a31b4151d8521703d05fe5a44fcf8abd$var$Bookmarkview = /*#__PURE__*/function (_ParentView) {
    function Bookmarkview() {
      var _this;
      $a31b4151d8521703d05fe5a44fcf8abd$var$_classCallCheck(this, Bookmarkview);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = $a31b4151d8521703d05fe5a44fcf8abd$var$_callSuper(this, Bookmarkview, [].concat(args));
      $a31b4151d8521703d05fe5a44fcf8abd$var$_defineProperty(_this, "errorMessage", 'Please Bookmark any recipe and then see there');
      $a31b4151d8521703d05fe5a44fcf8abd$var$_defineProperty(_this, "parentElement", document.querySelector('.bookmarks__list'));
      return _this;
    }
    $a31b4151d8521703d05fe5a44fcf8abd$var$_inherits(Bookmarkview, _ParentView);
    return $a31b4151d8521703d05fe5a44fcf8abd$var$_createClass(Bookmarkview, [{
      key: "generateMarkup",
      value: function generateMarkup() {
        return this.data.map(function (bk) {
          return $af840bb2d3482e430fadc5305a4b56e$export$default.render(bk, false);
        }).join('');
      }
    }, {
      key: "ControlBookmarks",
      value: function ControlBookmarks(handler) {
        window.addEventListener('load', handler());
      }
    }]);
  }($b99ae1ccf7b7dfd6b49eb2b84e6d6141$export$default);
  var $a31b4151d8521703d05fe5a44fcf8abd$export$default = new $a31b4151d8521703d05fe5a44fcf8abd$var$Bookmarkview();
  function $a51b0a2880dc92f7e85f69a8b25d642d$var$_typeof(o) {
    "@babel/helpers - typeof";

    return $a51b0a2880dc92f7e85f69a8b25d642d$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $a51b0a2880dc92f7e85f69a8b25d642d$var$_typeof(o);
  }
  function $a51b0a2880dc92f7e85f69a8b25d642d$var$_slicedToArray(arr, i) {
    return $a51b0a2880dc92f7e85f69a8b25d642d$var$_arrayWithHoles(arr) || $a51b0a2880dc92f7e85f69a8b25d642d$var$_iterableToArrayLimit(arr, i) || $a51b0a2880dc92f7e85f69a8b25d642d$var$_unsupportedIterableToArray(arr, i) || $a51b0a2880dc92f7e85f69a8b25d642d$var$_nonIterableRest();
  }
  function $a51b0a2880dc92f7e85f69a8b25d642d$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function $a51b0a2880dc92f7e85f69a8b25d642d$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $a51b0a2880dc92f7e85f69a8b25d642d$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $a51b0a2880dc92f7e85f69a8b25d642d$var$_arrayLikeToArray(o, minLen);
  }
  function $a51b0a2880dc92f7e85f69a8b25d642d$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function $a51b0a2880dc92f7e85f69a8b25d642d$var$_iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function $a51b0a2880dc92f7e85f69a8b25d642d$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function $a51b0a2880dc92f7e85f69a8b25d642d$var$_regeneratorRuntime() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    $a51b0a2880dc92f7e85f69a8b25d642d$var$_regeneratorRuntime = function _regeneratorRuntime() {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function define(t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == $a51b0a2880dc92f7e85f69a8b25d642d$var$_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function value(t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError($a51b0a2880dc92f7e85f69a8b25d642d$var$_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function $a51b0a2880dc92f7e85f69a8b25d642d$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function $a51b0a2880dc92f7e85f69a8b25d642d$var$_asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          $a51b0a2880dc92f7e85f69a8b25d642d$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          $a51b0a2880dc92f7e85f69a8b25d642d$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  var $a51b0a2880dc92f7e85f69a8b25d642d$export$state = {
    recipe: {},
    search: {
      quary: '',
      results: [],
      recipeLimit: $ad22e0a18c2bbded425be092f88aba2e$export$PAGE_LIMIT,
      page: 1,
      numPages: 0
    },
    bookmark: []
  };
  var $a51b0a2880dc92f7e85f69a8b25d642d$export$fetchingData = /*#__PURE__*/function () {
    var _ref = $a51b0a2880dc92f7e85f69a8b25d642d$var$_asyncToGenerator( /*#__PURE__*/$a51b0a2880dc92f7e85f69a8b25d642d$var$_regeneratorRuntime().mark(function _callee(id) {
      var data, recipe;
      return $a51b0a2880dc92f7e85f69a8b25d642d$var$_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return $fe40ff4fe3c4c74bdad83178dfb5e92$export$JsonDataEx("".concat($ad22e0a18c2bbded425be092f88aba2e$export$API_URL).concat(id));
          case 3:
            data = _context.sent;
            recipe = data.data.recipe;
            $a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe = {
              id: recipe.id,
              title: recipe.title,
              cookingTime: recipe.cooking_time,
              image: recipe.image_url,
              ingredients: recipe.ingredients,
              publisher: recipe.publisher,
              sourceUrl: recipe.source_url,
              servings: recipe.servings
            };
            if ($a51b0a2880dc92f7e85f69a8b25d642d$export$state.bookmark.some(function (b) {
              return b.id === id;
            })) $a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe.bookmarked = true;else $a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe.bookmarked = false;
            _context.next = 13;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            throw _context.t0;
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }));
    return function fetchingData(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var $a51b0a2880dc92f7e85f69a8b25d642d$export$searchResults = /*#__PURE__*/function () {
    var _ref2 = $a51b0a2880dc92f7e85f69a8b25d642d$var$_asyncToGenerator( /*#__PURE__*/$a51b0a2880dc92f7e85f69a8b25d642d$var$_regeneratorRuntime().mark(function _callee2(quary) {
      var data;
      return $a51b0a2880dc92f7e85f69a8b25d642d$var$_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return $fe40ff4fe3c4c74bdad83178dfb5e92$export$JsonDataEx("".concat($ad22e0a18c2bbded425be092f88aba2e$export$API_URL, "?search=").concat(quary));
          case 3:
            data = _context2.sent;
            $a51b0a2880dc92f7e85f69a8b25d642d$export$state.search.quary = quary;
            $a51b0a2880dc92f7e85f69a8b25d642d$export$state.search.results = data.data.recipes.map(function (re) {
              return {
                id: re.id,
                title: re.title,
                image: re.image_url,
                publisher: re.publisher
              };
            });
            _context2.next = 12;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            throw _context2.t0;
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 8]]);
    }));
    return function searchResults(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var $a51b0a2880dc92f7e85f69a8b25d642d$export$getSearchpage = function getSearchpage() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $a51b0a2880dc92f7e85f69a8b25d642d$export$state.search.page;
    $a51b0a2880dc92f7e85f69a8b25d642d$export$state.search.page = page;
    var start = (page - 1) * $a51b0a2880dc92f7e85f69a8b25d642d$export$state.search.recipeLimit;
    var end = page * $a51b0a2880dc92f7e85f69a8b25d642d$export$state.search.recipeLimit;
    return $a51b0a2880dc92f7e85f69a8b25d642d$export$state.search.results.slice(start, end);
  };
  var $a51b0a2880dc92f7e85f69a8b25d642d$export$updateServings = function updateServings(newServings) {
    $a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe.ingredients.forEach(function (ing) {
      ing.quantity = newServings * ($a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe.servings / 100);
      if (newServings > 0) $a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe.servings = newServings;
    });
  };
  var $a51b0a2880dc92f7e85f69a8b25d642d$var$persistbookmarks = function persistbookmarks() {
    localStorage.setItem('bookmarks', JSON.stringify($a51b0a2880dc92f7e85f69a8b25d642d$export$state.bookmark));
  };
  var $a51b0a2880dc92f7e85f69a8b25d642d$export$bookmark = function bookmark(recipe) {
    $a51b0a2880dc92f7e85f69a8b25d642d$export$state.bookmark.push(recipe);
    if (recipe.id === $a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe.id) $a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe.bookmarked = true;
    $a51b0a2880dc92f7e85f69a8b25d642d$var$persistbookmarks();
  };
  var $a51b0a2880dc92f7e85f69a8b25d642d$export$deletebookmarks = function deletebookmarks(id) {
    var index = $a51b0a2880dc92f7e85f69a8b25d642d$export$state.bookmark.findIndex(function (el) {
      return el.id === id;
    });
    $a51b0a2880dc92f7e85f69a8b25d642d$export$state.bookmark.splice(index, 1);
    if (id === $a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe.id) $a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe.bookmarked = false;
    $a51b0a2880dc92f7e85f69a8b25d642d$var$persistbookmarks();
  };
  var $a51b0a2880dc92f7e85f69a8b25d642d$export$init = function init() {
    var storage = localStorage.getItem('bookmarks');
    if (storage) $a51b0a2880dc92f7e85f69a8b25d642d$export$state.bookmark = JSON.parse(storage);
  };
  var $a51b0a2880dc92f7e85f69a8b25d642d$export$uploadReciple = function uploadReciple(newrecipe) {
    try {
      var ingredients = Object.entries(newrecipe).filter(function (entry) {
        return entry[0].startsWith('ingredient') && entry[1] !== '';
      }).map(function (ing) {
        var ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3) throw new Error('Enter Correct Ingredient');
        var _ingArr = $a51b0a2880dc92f7e85f69a8b25d642d$var$_slicedToArray(ingArr, 3),
          quantity = _ingArr[0],
          unit = _ingArr[1],
          description = _ingArr[2];
        return {
          quantity: quantity ? +quantity : null,
          unit: unit,
          description: description
        };
      });
      var recipe = {
        title: newrecipe.title,
        source_url: newrecipe.sourceUrl,
        image_url: newrecipe.image,
        publisher: newrecipe.publisher,
        cookingTime: +newrecipe.cookingTime,
        servings: +newrecipe.servings,
        ingredients: ingredients
      };
      console.log(recipe);
    } catch (error) {
      throw error;
    }
  };
  $a51b0a2880dc92f7e85f69a8b25d642d$export$init(); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\src\js\views\view.js
  // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\node_modules\fractional\index.js
  /*
  fraction.js
  A Javascript fraction library.
  
  Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  
  */

  /* Fractions */
  /* 
   *
   * Fraction objects are comprised of a numerator and a denomenator.  These
   * values can be accessed at fraction.numerator and fraction.denomenator.
   *
   * Fractions are always returned and stored in lowest-form normalized format.
   * This is accomplished via Fraction.normalize.
   *
   * The following mathematical operations on fractions are supported:
   *
   * Fraction.equals
   * Fraction.add
   * Fraction.subtract
   * Fraction.multiply
   * Fraction.divide
   *
   * These operations accept both numbers and fraction objects.  (Best results
   * are guaranteed when the input is a fraction object.)  They all return a new
   * Fraction object.
   *
   * Usage:
   *
   * TODO
   *
   */

  /*
   * The Fraction constructor takes one of:
   *   an explicit numerator (integer) and denominator (integer),
   *   a string representation of the fraction (string),
   *   or a floating-point number (float)
   *
   * These initialization methods are provided for convenience.  Because of
   * rounding issues the best results will be given when the fraction is
   * constructed from an explicit integer numerator and denomenator, and not a
   * decimal number.
   *
   *
   * e.g. new Fraction(1, 2) --> 1/2
   *      new Fraction('1/2') --> 1/2
   *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
   *
   */
  Fraction = function (numerator, denominator) {
    /* double argument invocation */
    if (typeof numerator !== 'undefined' && denominator) {
      if (typeof numerator === 'number' && typeof denominator === 'number') {
        this.numerator = numerator;
        this.denominator = denominator;
      } else if (typeof numerator === 'string' && typeof denominator === 'string') {
        // what are they?
        // hmm....
        // assume they are ints?
        this.numerator = parseInt(numerator);
        this.denominator = parseInt(denominator);
      }
      /* single-argument invocation */
    } else if (typeof denominator === 'undefined') {
      num = numerator; // swap variable names for legibility
      if (typeof num === 'number') {
        // just a straight number init
        this.numerator = num;
        this.denominator = 1;
      } else if (typeof num === 'string') {
        var a, b; // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
        // or a = '2/3' and b = undefined if we are just passed a single-part number
        var arr = num.split(' ');
        if (arr[0]) a = arr[0];
        if (arr[1]) b = arr[1];
        /* compound fraction e.g. 'A B/C' */
        //  if a is an integer ...
        if (a % 1 === 0 && b && b.match('/')) {
          return new Fraction(a).add(new Fraction(b));
        } else if (a && !b) {
          /* simple fraction e.g. 'A/B' */
          if (typeof a === 'string' && a.match('/')) {
            // it's not a whole number... it's actually a fraction without a whole part written
            var f = a.split('/');
            this.numerator = f[0];
            this.denominator = f[1];
            /* string floating point */
          } else if (typeof a === 'string' && a.match('\.')) {
            return new Fraction(parseFloat(a));
            /* whole number e.g. 'A' */
          } else {
            // just passed a whole number as a string
            this.numerator = parseInt(a);
            this.denominator = 1;
          }
        } else {
          return undefined; // could not parse
        }
      }
    }
    this.normalize();
  };
  Fraction.prototype.clone = function () {
    return new Fraction(this.numerator, this.denominator);
  };

  /* pretty-printer, converts fractions into whole numbers and fractions */
  Fraction.prototype.toString = function () {
    if (this.denominator === 'NaN') return 'NaN';
    var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
    var numerator = this.numerator % this.denominator;
    var denominator = this.denominator;
    var result = [];
    if (wholepart != 0) result.push(wholepart);
    if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + '/' + denominator);
    return result.length > 0 ? result.join(' ') : 0;
  };

  /* destructively rescale the fraction by some integral factor */
  Fraction.prototype.rescale = function (factor) {
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
  };
  Fraction.prototype.add = function (b) {
    var a = this.clone();
    if (b instanceof Fraction) {
      b = b.clone();
    } else {
      b = new Fraction(b);
    }
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator += b.numerator;
    return a.normalize();
  };
  Fraction.prototype.subtract = function (b) {
    var a = this.clone();
    if (b instanceof Fraction) {
      b = b.clone(); // we scale our argument destructively, so clone
    } else {
      b = new Fraction(b);
    }
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator -= b.numerator;
    return a.normalize();
  };
  Fraction.prototype.multiply = function (b) {
    var a = this.clone();
    if (b instanceof Fraction) {
      a.numerator *= b.numerator;
      a.denominator *= b.denominator;
    } else if (typeof b === 'number') {
      a.numerator *= b;
    } else {
      return a.multiply(new Fraction(b));
    }
    return a.normalize();
  };
  Fraction.prototype.divide = function (b) {
    var a = this.clone();
    if (b instanceof Fraction) {
      a.numerator *= b.denominator;
      a.denominator *= b.numerator;
    } else if (typeof b === 'number') {
      a.denominator *= b;
    } else {
      return a.divide(new Fraction(b));
    }
    return a.normalize();
  };
  Fraction.prototype.equals = function (b) {
    if (!(b instanceof Fraction)) {
      b = new Fraction(b);
    }
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return a.numerator === b.numerator && a.denominator === b.denominator;
  };

  /* Utility functions */

  /* Destructively normalize the fraction to its smallest representation. 
   * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
   * This is called after all math ops.
   */
  Fraction.prototype.normalize = function () {
    var isFloat = function (n) {
      return typeof n === 'number' && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
    };
    var roundToPlaces = function (n, places) {
      if (!places) {
        return Math.round(n);
      } else {
        var scalar = Math.pow(10, places);
        return Math.round(n * scalar) / scalar;
      }
    };
    return function () {
      // XXX hackish.  Is there a better way to address this issue?
      //
      /* first check if we have decimals, and if we do eliminate them
       * multiply by the 10 ^ number of decimal places in the number
       * round the number to nine decimal places
       * to avoid js floating point funnies
       */
      if (isFloat(this.denominator)) {
        var rounded = roundToPlaces(this.denominator, 9);
        var scaleup = Math.pow(10, rounded.toString().split('.')[1].length);
        this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
        //this.numerator *= scaleup;
        this.numerator *= scaleup;
      }
      if (isFloat(this.numerator)) {
        var rounded = roundToPlaces(this.numerator, 9);
        var scaleup = Math.pow(10, rounded.toString().split('.')[1].length);
        this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
        //this.numerator *= scaleup;
        this.denominator *= scaleup;
      }
      var gcf = Fraction.gcf(this.numerator, this.denominator);
      this.numerator /= gcf;
      this.denominator /= gcf;
      if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
        this.numerator *= -1;
        this.denominator *= -1;
      }
      return this;
    };
  }();

  /* Takes two numbers and returns their greatest common factor.
   */
  Fraction.gcf = function (a, b) {
    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function (factor) {
      var i = fb.indexOf(factor);
      if (i >= 0) {
        common_factors.push(factor);
        fb.splice(i, 1); // remove from fb
      }
    });
    if (common_factors.length === 0) return 1;
    var gcf = function () {
      var r = common_factors[0];
      var i;
      for (i = 1; i < common_factors.length; i++) {
        r = r * common_factors[i];
      }
      return r;
    }();
    return gcf;
  };

  // Adapted from: 
  // http://www.btinternet.com/~se16/js/factor.htm
  Fraction.primeFactors = function (n) {
    var num = Math.abs(n);
    var factors = [];
    var _factor = 2; // first potential prime factor

    while (_factor * _factor <= num)
    // should we keep looking for factors?
    {
      if (num % _factor === 0)
        // this is a factor
        {
          factors.push(_factor); // so keep it
          num = num / _factor; // and divide our search point by it
        } else {
        _factor++; // and increment
      }
    }
    if (num != 1)
      // If there is anything left at the end...
      {
        // ...this must be the last prime factor
        factors.push(num); //    so it too should be recorded
      }
    return factors; // Return the prime factors
  };
  var $e71d1efa458a44db40d822db6cf5$export$Fraction = Fraction;
  function $bb29992c206071c3dc7b74b69411d96$var$_typeof(o) {
    "@babel/helpers - typeof";

    return $bb29992c206071c3dc7b74b69411d96$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $bb29992c206071c3dc7b74b69411d96$var$_typeof(o);
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, $bb29992c206071c3dc7b74b69411d96$var$_toPropertyKey(descriptor.key), descriptor);
    }
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $bb29992c206071c3dc7b74b69411d96$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $bb29992c206071c3dc7b74b69411d96$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_callSuper(t, o, e) {
    return o = $bb29992c206071c3dc7b74b69411d96$var$_getPrototypeOf(o), $bb29992c206071c3dc7b74b69411d96$var$_possibleConstructorReturn(t, $bb29992c206071c3dc7b74b69411d96$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $bb29992c206071c3dc7b74b69411d96$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_possibleConstructorReturn(self, call) {
    if (call && ($bb29992c206071c3dc7b74b69411d96$var$_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return $bb29992c206071c3dc7b74b69411d96$var$_assertThisInitialized(self);
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return ($bb29992c206071c3dc7b74b69411d96$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return !!t;
    })();
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_getPrototypeOf(o) {
    $bb29992c206071c3dc7b74b69411d96$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $bb29992c206071c3dc7b74b69411d96$var$_getPrototypeOf(o);
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) $bb29992c206071c3dc7b74b69411d96$var$_setPrototypeOf(subClass, superClass);
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_setPrototypeOf(o, p) {
    $bb29992c206071c3dc7b74b69411d96$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return $bb29992c206071c3dc7b74b69411d96$var$_setPrototypeOf(o, p);
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_classPrivateMethodInitSpec(obj, privateSet) {
    $bb29992c206071c3dc7b74b69411d96$var$_checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_defineProperty(obj, key, value) {
    key = $bb29992c206071c3dc7b74b69411d96$var$_toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_toPropertyKey(t) {
    var i = $bb29992c206071c3dc7b74b69411d96$var$_toPrimitive(t, "string");
    return "symbol" == $bb29992c206071c3dc7b74b69411d96$var$_typeof(i) ? i : i + "";
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_toPrimitive(t, r) {
    if ("object" != $bb29992c206071c3dc7b74b69411d96$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != $bb29992c206071c3dc7b74b69411d96$var$_typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function $bb29992c206071c3dc7b74b69411d96$var$_assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  var $bb29992c206071c3dc7b74b69411d96$var$_Recipeview_brand = /*#__PURE__*/new WeakSet();
  var $bb29992c206071c3dc7b74b69411d96$var$Recipeview = /*#__PURE__*/function (_ParentView) {
    function Recipeview() {
      var _this;
      $bb29992c206071c3dc7b74b69411d96$var$_classCallCheck(this, Recipeview);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = $bb29992c206071c3dc7b74b69411d96$var$_callSuper(this, Recipeview, [].concat(args));
      $bb29992c206071c3dc7b74b69411d96$var$_classPrivateMethodInitSpec(_this, $bb29992c206071c3dc7b74b69411d96$var$_Recipeview_brand);
      $bb29992c206071c3dc7b74b69411d96$var$_defineProperty(_this, "parentElement", document.querySelector('.recipe'));
      $bb29992c206071c3dc7b74b69411d96$var$_defineProperty(_this, "errorMessage", 'We Could not find the recipe with your recipe name');
      return _this;
    }
    $bb29992c206071c3dc7b74b69411d96$var$_inherits(Recipeview, _ParentView);
    return $bb29992c206071c3dc7b74b69411d96$var$_createClass(Recipeview, [{
      key: "hashchange",
      value: function hashchange(handler) {
        ['hashchange', 'load'].forEach(function (ev) {
          return window.addEventListener(ev, handler);
        });
      }
    }, {
      key: "UpdateServingsHandler",
      value: function UpdateServingsHandler(hanlder) {
        this.parentElement.addEventListener('click', function (e) {
          var btn = e.target.closest('.btn--update-servings');
          if (!btn) return;
          var updateTo = +btn.dataset.updateTo;
          hanlder(updateTo);
        });
      }
    }, {
      key: "bookmarkHandler",
      value: function bookmarkHandler(handler) {
        this.parentElement.addEventListener('click', function (e) {
          var btn = e.target.closest('.btn--bookmark');
          if (!btn) return;
          handler();
        });
      }
    }, {
      key: "generateMarkup",
      value: function generateMarkup() {
        return "\n    <figure class=\"recipe__fig\">\n          <img src=\"".concat(this.data.image, "\" alt=\"").concat(this.data.title, "\" class=\"recipe__img\" />\n          <h1 class=\"recipe__title\">\n            <span>").concat(this.data.title, "</span>\n          </h1>\n        </figure>\n\n        <div class=\"recipe__details\">\n          <div class=\"recipe__info\">\n            <svg class=\"recipe__info-icon\">\n              <use href=\"").concat($ece14095656b317e1b80bd00028aeec$$interop$default, "#icon-clock\"></use>\n            </svg>\n            <span class=\"recipe__info-data recipe__info-data--minutes\">").concat(this.data.cookingTime, "</span>\n            <span class=\"recipe__info-text\">minutes</span>\n          </div>\n          <div class=\"recipe__info\">\n            <svg class=\"recipe__info-icon\">\n              <use href=\"").concat($ece14095656b317e1b80bd00028aeec$$interop$default, "#icon-users\"></use>\n            </svg>\n            <span class=\"recipe__info-data recipe__info-data--people\">").concat(this.data.servings, "</span>\n            <span class=\"recipe__info-text\">servings</span>\n            <div class=\"recipe__info-buttons\">\n              <button class=\"btn--tiny btn--update-servings\" data-update-to=\"").concat(this.data.servings - 1, "\">\n                <svg>\n                  <use href=\"").concat($ece14095656b317e1b80bd00028aeec$$interop$default, "#icon-minus-circle\"></use>\n                </svg>\n              </button>\n              <button class=\"btn--tiny btn--update-servings\" data-update-to=\"").concat(this.data.servings + 1, "\">\n                <svg>\n                  <use href=\"").concat($ece14095656b317e1b80bd00028aeec$$interop$default, "#icon-plus-circle\"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n\n          <div class=\"recipe__user-generated\">\n            \n          </div>\n          <button class=\"btn--round btn--bookmark\">\n            <svg class=\"\">\n              <use href=\"").concat($ece14095656b317e1b80bd00028aeec$$interop$default, "#icon-bookmark").concat(this.data.bookmarked ? '-fill' : '', "\"></use>\n            </svg>\n          </button>\n        </div>\n\n        <div class=\"recipe__ingredients\">\n          <h2 class=\"heading--2\">Recipe ingredients</h2>\n          <ul class=\"recipe__ingredient-list\">\n          ").concat(this.data.ingredients.map($bb29992c206071c3dc7b74b69411d96$var$_assertClassBrand($bb29992c206071c3dc7b74b69411d96$var$_Recipeview_brand, this, $bb29992c206071c3dc7b74b69411d96$var$_generateIngredient)).join(''), "\n        </div>\n        <div class=\"recipe__directions\">\n          <h2 class=\"heading--2\">How to cook it</h2>\n          <p class=\"recipe__directions-text\">\n            This recipe was carefully designed and tested by\n            <span class=\"recipe__publisher\">").concat(this.data.publisher, "</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class=\"btn--small recipe__btn\"\n            href=\"").concat(this.data.sourceUrl, "\"\n            target=\"_blank\"\n          >\n            <span>Directions</span>\n            <svg class=\"search__icon\">\n              <use href=\"").concat($ece14095656b317e1b80bd00028aeec$$interop$default, "#icon-arrow-right\"></use>\n            </svg>\n          </a>\n        </div>\n    ");
      }
    }]);
  }($b99ae1ccf7b7dfd6b49eb2b84e6d6141$export$default);
  function $bb29992c206071c3dc7b74b69411d96$var$_generateIngredient(ing) {
    var _ing$description;
    return "\n  <li class=\"recipe__ingredient\">\n  <svg class=\"recipe__icon\">\n    <use href=\"".concat($ece14095656b317e1b80bd00028aeec$$interop$default, "#icon-check\"></use>\n  </svg>\n  <div class=\"recipe__quantity\">").concat(ing.quantity ? new $e71d1efa458a44db40d822db6cf5$export$Fraction(ing.quantity).toString() : '', "</div>\n  <div class=\"recipe__description\">\n    <span class=\"recipe__unit\">").concat(ing.unit, "</span>\n    ").concat((_ing$description = ing.description) !== null && _ing$description !== void 0 ? _ing$description : '', "\n  </div>\n</li>");
  }
  var $bb29992c206071c3dc7b74b69411d96$export$default = new $bb29992c206071c3dc7b74b69411d96$var$Recipeview(); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\src\js\views\searchView.js
  function $f91c83782128716ccea27a6a$var$_typeof(o) {
    "@babel/helpers - typeof";

    return $f91c83782128716ccea27a6a$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $f91c83782128716ccea27a6a$var$_typeof(o);
  }
  function $f91c83782128716ccea27a6a$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function $f91c83782128716ccea27a6a$var$_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, $f91c83782128716ccea27a6a$var$_toPropertyKey(descriptor.key), descriptor);
    }
  }
  function $f91c83782128716ccea27a6a$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $f91c83782128716ccea27a6a$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $f91c83782128716ccea27a6a$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function $f91c83782128716ccea27a6a$var$_defineProperty(obj, key, value) {
    key = $f91c83782128716ccea27a6a$var$_toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function $f91c83782128716ccea27a6a$var$_toPropertyKey(t) {
    var i = $f91c83782128716ccea27a6a$var$_toPrimitive(t, "string");
    return "symbol" == $f91c83782128716ccea27a6a$var$_typeof(i) ? i : i + "";
  }
  function $f91c83782128716ccea27a6a$var$_toPrimitive(t, r) {
    if ("object" != $f91c83782128716ccea27a6a$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != $f91c83782128716ccea27a6a$var$_typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  var $f91c83782128716ccea27a6a$var$SearchView = /*#__PURE__*/function () {
    function SearchView() {
      $f91c83782128716ccea27a6a$var$_classCallCheck(this, SearchView);
      $f91c83782128716ccea27a6a$var$_defineProperty(this, "parentElement", document.querySelector('.search'));
    }
    return $f91c83782128716ccea27a6a$var$_createClass(SearchView, [{
      key: "quaryGet",
      value: function quaryGet() {
        var quaryline = document.querySelector('.search__field').value;
        return quaryline;
      }
    }, {
      key: "clear",
      value: function clear() {
        document.querySelector('.search__field').value = '';
      }
    }, {
      key: "handlerFunc",
      value: function handlerFunc(Function) {
        this.parentElement.addEventListener('submit', function (e) {
          e.preventDefault();
          Function();
        });
      }
    }]);
  }();
  var $f91c83782128716ccea27a6a$export$default = new $f91c83782128716ccea27a6a$var$SearchView(); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\src\js\views\Resultsview.js
  function $d9d84b67cef2c3ab04020cf49c714$var$_typeof(o) {
    "@babel/helpers - typeof";

    return $d9d84b67cef2c3ab04020cf49c714$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $d9d84b67cef2c3ab04020cf49c714$var$_typeof(o);
  }
  function $d9d84b67cef2c3ab04020cf49c714$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function $d9d84b67cef2c3ab04020cf49c714$var$_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, $d9d84b67cef2c3ab04020cf49c714$var$_toPropertyKey(descriptor.key), descriptor);
    }
  }
  function $d9d84b67cef2c3ab04020cf49c714$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $d9d84b67cef2c3ab04020cf49c714$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $d9d84b67cef2c3ab04020cf49c714$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function $d9d84b67cef2c3ab04020cf49c714$var$_callSuper(t, o, e) {
    return o = $d9d84b67cef2c3ab04020cf49c714$var$_getPrototypeOf(o), $d9d84b67cef2c3ab04020cf49c714$var$_possibleConstructorReturn(t, $d9d84b67cef2c3ab04020cf49c714$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $d9d84b67cef2c3ab04020cf49c714$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function $d9d84b67cef2c3ab04020cf49c714$var$_possibleConstructorReturn(self, call) {
    if (call && ($d9d84b67cef2c3ab04020cf49c714$var$_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return $d9d84b67cef2c3ab04020cf49c714$var$_assertThisInitialized(self);
  }
  function $d9d84b67cef2c3ab04020cf49c714$var$_assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function $d9d84b67cef2c3ab04020cf49c714$var$_isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return ($d9d84b67cef2c3ab04020cf49c714$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return !!t;
    })();
  }
  function $d9d84b67cef2c3ab04020cf49c714$var$_getPrototypeOf(o) {
    $d9d84b67cef2c3ab04020cf49c714$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $d9d84b67cef2c3ab04020cf49c714$var$_getPrototypeOf(o);
  }
  function $d9d84b67cef2c3ab04020cf49c714$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) $d9d84b67cef2c3ab04020cf49c714$var$_setPrototypeOf(subClass, superClass);
  }
  function $d9d84b67cef2c3ab04020cf49c714$var$_setPrototypeOf(o, p) {
    $d9d84b67cef2c3ab04020cf49c714$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return $d9d84b67cef2c3ab04020cf49c714$var$_setPrototypeOf(o, p);
  }
  function $d9d84b67cef2c3ab04020cf49c714$var$_defineProperty(obj, key, value) {
    key = $d9d84b67cef2c3ab04020cf49c714$var$_toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function $d9d84b67cef2c3ab04020cf49c714$var$_toPropertyKey(t) {
    var i = $d9d84b67cef2c3ab04020cf49c714$var$_toPrimitive(t, "string");
    return "symbol" == $d9d84b67cef2c3ab04020cf49c714$var$_typeof(i) ? i : i + "";
  }
  function $d9d84b67cef2c3ab04020cf49c714$var$_toPrimitive(t, r) {
    if ("object" != $d9d84b67cef2c3ab04020cf49c714$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != $d9d84b67cef2c3ab04020cf49c714$var$_typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  var $d9d84b67cef2c3ab04020cf49c714$var$resultsView = /*#__PURE__*/function (_ParentView) {
    function resultsView() {
      var _this;
      $d9d84b67cef2c3ab04020cf49c714$var$_classCallCheck(this, resultsView);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = $d9d84b67cef2c3ab04020cf49c714$var$_callSuper(this, resultsView, [].concat(args));
      $d9d84b67cef2c3ab04020cf49c714$var$_defineProperty(_this, "errorMessage", 'We do not find the recipe');
      $d9d84b67cef2c3ab04020cf49c714$var$_defineProperty(_this, "parentElement", document.querySelector('.results'));
      return _this;
    }
    $d9d84b67cef2c3ab04020cf49c714$var$_inherits(resultsView, _ParentView);
    return $d9d84b67cef2c3ab04020cf49c714$var$_createClass(resultsView, [{
      key: "generateMarkup",
      value: function generateMarkup() {
        return this.data.map(function (bk) {
          return $af840bb2d3482e430fadc5305a4b56e$export$default.render(bk, false);
        }).join('');
      }
    }]);
  }($b99ae1ccf7b7dfd6b49eb2b84e6d6141$export$default);
  var $d9d84b67cef2c3ab04020cf49c714$export$default = new $d9d84b67cef2c3ab04020cf49c714$var$resultsView(); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\src\js\views\paginationView.js
  function $e8933bce210ba8b06423f8ce64e31ba$var$_typeof(o) {
    "@babel/helpers - typeof";

    return $e8933bce210ba8b06423f8ce64e31ba$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $e8933bce210ba8b06423f8ce64e31ba$var$_typeof(o);
  }
  function $e8933bce210ba8b06423f8ce64e31ba$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function $e8933bce210ba8b06423f8ce64e31ba$var$_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, $e8933bce210ba8b06423f8ce64e31ba$var$_toPropertyKey(descriptor.key), descriptor);
    }
  }
  function $e8933bce210ba8b06423f8ce64e31ba$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $e8933bce210ba8b06423f8ce64e31ba$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $e8933bce210ba8b06423f8ce64e31ba$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function $e8933bce210ba8b06423f8ce64e31ba$var$_callSuper(t, o, e) {
    return o = $e8933bce210ba8b06423f8ce64e31ba$var$_getPrototypeOf(o), $e8933bce210ba8b06423f8ce64e31ba$var$_possibleConstructorReturn(t, $e8933bce210ba8b06423f8ce64e31ba$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $e8933bce210ba8b06423f8ce64e31ba$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function $e8933bce210ba8b06423f8ce64e31ba$var$_possibleConstructorReturn(self, call) {
    if (call && ($e8933bce210ba8b06423f8ce64e31ba$var$_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return $e8933bce210ba8b06423f8ce64e31ba$var$_assertThisInitialized(self);
  }
  function $e8933bce210ba8b06423f8ce64e31ba$var$_assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function $e8933bce210ba8b06423f8ce64e31ba$var$_isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return ($e8933bce210ba8b06423f8ce64e31ba$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return !!t;
    })();
  }
  function $e8933bce210ba8b06423f8ce64e31ba$var$_getPrototypeOf(o) {
    $e8933bce210ba8b06423f8ce64e31ba$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $e8933bce210ba8b06423f8ce64e31ba$var$_getPrototypeOf(o);
  }
  function $e8933bce210ba8b06423f8ce64e31ba$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) $e8933bce210ba8b06423f8ce64e31ba$var$_setPrototypeOf(subClass, superClass);
  }
  function $e8933bce210ba8b06423f8ce64e31ba$var$_setPrototypeOf(o, p) {
    $e8933bce210ba8b06423f8ce64e31ba$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return $e8933bce210ba8b06423f8ce64e31ba$var$_setPrototypeOf(o, p);
  }
  function $e8933bce210ba8b06423f8ce64e31ba$var$_defineProperty(obj, key, value) {
    key = $e8933bce210ba8b06423f8ce64e31ba$var$_toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function $e8933bce210ba8b06423f8ce64e31ba$var$_toPropertyKey(t) {
    var i = $e8933bce210ba8b06423f8ce64e31ba$var$_toPrimitive(t, "string");
    return "symbol" == $e8933bce210ba8b06423f8ce64e31ba$var$_typeof(i) ? i : i + "";
  }
  function $e8933bce210ba8b06423f8ce64e31ba$var$_toPrimitive(t, r) {
    if ("object" != $e8933bce210ba8b06423f8ce64e31ba$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != $e8933bce210ba8b06423f8ce64e31ba$var$_typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  var $e8933bce210ba8b06423f8ce64e31ba$var$paginationView = /*#__PURE__*/function (_ParentView) {
    function paginationView() {
      var _this;
      $e8933bce210ba8b06423f8ce64e31ba$var$_classCallCheck(this, paginationView);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = $e8933bce210ba8b06423f8ce64e31ba$var$_callSuper(this, paginationView, [].concat(args));
      $e8933bce210ba8b06423f8ce64e31ba$var$_defineProperty(_this, "parentElement", document.querySelector('.pagination'));
      return _this;
    }
    $e8933bce210ba8b06423f8ce64e31ba$var$_inherits(paginationView, _ParentView);
    return $e8933bce210ba8b06423f8ce64e31ba$var$_createClass(paginationView, [{
      key: "paginationHander",
      value: function paginationHander(handler) {
        this.parentElement.addEventListener('click', function (e) {
          var btn = e.target.closest('.btn--inline');
          if (!btn) return;
          var pageGoTo = +btn.dataset.goto;
          handler(pageGoTo);
        });
      }
    }, {
      key: "generateMarkup",
      value: function generateMarkup() {
        var currPage = this.data.page;
        var numpages = Math.ceil(this.data.results.length / this.data.recipeLimit);
        if (currPage === 1 && numpages > 1) {
          return "\n      <button data-goto=\"".concat(currPage + 1, "\" class=\"btn--inline pagination__btn--next\">\n            <span>").concat(currPage + 1, "</span>\n            <svg class=\"search__icon\">\n              <use href=\"").concat($ece14095656b317e1b80bd00028aeec$$interop$default, "#icon-arrow-right\"></use>\n            </svg>\n          </button>\n      ");
        }
        if (currPage === numpages && numpages > 1) {
          return "\n        <button data-goto=\"".concat(currPage - 1, "\" class=\"btn--inline pagination__btn--prev\">\n              <svg class=\"search__icon\">\n                <use href=\"").concat($ece14095656b317e1b80bd00028aeec$$interop$default, "#icon-arrow-left\"></use>\n              </svg>\n              <span>").concat(currPage - 1, "</span>\n            </button>\n        ");
        }
        if (currPage < numpages) {
          return "\n        <button data-goto=\"".concat(currPage + 1, "\" class=\"btn--inline pagination__btn--next\">\n              <span>").concat(currPage + 1, "</span>\n              <svg class=\"search__icon\">\n                <use href=\"").concat($ece14095656b317e1b80bd00028aeec$$interop$default, "#icon-arrow-right\"></use>\n              </svg>\n            </button>\n            <button data-goto=\"").concat(currPage - 1, "\" class=\"btn--inline pagination__btn--prev\">\n              <svg class=\"search__icon\">\n                <use href=\"").concat($ece14095656b317e1b80bd00028aeec$$interop$default, "#icon-arrow-left\"></use>\n              </svg>\n              <span>").concat(currPage - 1, "</span>\n            </button>\n        ");
        }
        return '';
      }
    }]);
  }($b99ae1ccf7b7dfd6b49eb2b84e6d6141$export$default);
  var $e8933bce210ba8b06423f8ce64e31ba$export$default = new $e8933bce210ba8b06423f8ce64e31ba$var$paginationView(); // ASSET: D:\Course\part 4\Compressed\complete-javascript-course-master_2\Documents\18-forkify\starter\src\js\views\addrecipe.js
  function $c600d8d26eaf417f9efe50f43c36000$var$_typeof(o) {
    "@babel/helpers - typeof";

    return $c600d8d26eaf417f9efe50f43c36000$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $c600d8d26eaf417f9efe50f43c36000$var$_typeof(o);
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_toConsumableArray(arr) {
    return $c600d8d26eaf417f9efe50f43c36000$var$_arrayWithoutHoles(arr) || $c600d8d26eaf417f9efe50f43c36000$var$_iterableToArray(arr) || $c600d8d26eaf417f9efe50f43c36000$var$_unsupportedIterableToArray(arr) || $c600d8d26eaf417f9efe50f43c36000$var$_nonIterableSpread();
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $c600d8d26eaf417f9efe50f43c36000$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $c600d8d26eaf417f9efe50f43c36000$var$_arrayLikeToArray(o, minLen);
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return $c600d8d26eaf417f9efe50f43c36000$var$_arrayLikeToArray(arr);
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, $c600d8d26eaf417f9efe50f43c36000$var$_toPropertyKey(descriptor.key), descriptor);
    }
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $c600d8d26eaf417f9efe50f43c36000$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $c600d8d26eaf417f9efe50f43c36000$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_callSuper(t, o, e) {
    return o = $c600d8d26eaf417f9efe50f43c36000$var$_getPrototypeOf(o), $c600d8d26eaf417f9efe50f43c36000$var$_possibleConstructorReturn(t, $c600d8d26eaf417f9efe50f43c36000$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $c600d8d26eaf417f9efe50f43c36000$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_possibleConstructorReturn(self, call) {
    if (call && ($c600d8d26eaf417f9efe50f43c36000$var$_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return $c600d8d26eaf417f9efe50f43c36000$var$_assertThisInitialized(self);
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return ($c600d8d26eaf417f9efe50f43c36000$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return !!t;
    })();
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_getPrototypeOf(o) {
    $c600d8d26eaf417f9efe50f43c36000$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $c600d8d26eaf417f9efe50f43c36000$var$_getPrototypeOf(o);
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) $c600d8d26eaf417f9efe50f43c36000$var$_setPrototypeOf(subClass, superClass);
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_setPrototypeOf(o, p) {
    $c600d8d26eaf417f9efe50f43c36000$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return $c600d8d26eaf417f9efe50f43c36000$var$_setPrototypeOf(o, p);
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_defineProperty(obj, key, value) {
    key = $c600d8d26eaf417f9efe50f43c36000$var$_toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_toPropertyKey(t) {
    var i = $c600d8d26eaf417f9efe50f43c36000$var$_toPrimitive(t, "string");
    return "symbol" == $c600d8d26eaf417f9efe50f43c36000$var$_typeof(i) ? i : i + "";
  }
  function $c600d8d26eaf417f9efe50f43c36000$var$_toPrimitive(t, r) {
    if ("object" != $c600d8d26eaf417f9efe50f43c36000$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != $c600d8d26eaf417f9efe50f43c36000$var$_typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  var $c600d8d26eaf417f9efe50f43c36000$var$addRecipeView = /*#__PURE__*/function (_ParentView) {
    function addRecipeView() {
      var _this;
      $c600d8d26eaf417f9efe50f43c36000$var$_classCallCheck(this, addRecipeView);
      _this = $c600d8d26eaf417f9efe50f43c36000$var$_callSuper(this, addRecipeView);
      $c600d8d26eaf417f9efe50f43c36000$var$_defineProperty(_this, "parentElement", document.querySelector('.upload'));
      $c600d8d26eaf417f9efe50f43c36000$var$_defineProperty(_this, "window", document.querySelector('.add-recipe-window'));
      $c600d8d26eaf417f9efe50f43c36000$var$_defineProperty(_this, "overlay", document.querySelector('.overlay'));
      $c600d8d26eaf417f9efe50f43c36000$var$_defineProperty(_this, "btnOpen", document.querySelector('.nav__btn--add-recipe'));
      $c600d8d26eaf417f9efe50f43c36000$var$_defineProperty(_this, "btnClose", document.querySelector('.btn--close-modal'));
      _this.btnOpenHandler();
      _this.btnCloseHandler();
      return _this;
    }
    $c600d8d26eaf417f9efe50f43c36000$var$_inherits(addRecipeView, _ParentView);
    return $c600d8d26eaf417f9efe50f43c36000$var$_createClass(addRecipeView, [{
      key: "btnHremover",
      value: function btnHremover() {
        this.overlay.classList.toggle('hidden');
        this.window.classList.toggle('hidden');
      }
    }, {
      key: "btnOpenHandler",
      value: function btnOpenHandler() {
        this.btnOpen.addEventListener('click', this.btnHremover.bind(this));
      }
    }, {
      key: "btnCloseHandler",
      value: function btnCloseHandler() {
        this.btnClose.addEventListener('click', this.btnHremover.bind(this));
      }
    }, {
      key: "Recipehandler",
      value: function Recipehandler(handler) {
        var _this2 = this;
        this.parentElement.addEventListener('submit', function (e) {
          e.preventDefault();
          var dataArr = $c600d8d26eaf417f9efe50f43c36000$var$_toConsumableArray(new FormData(_this2.parentElement));
          var data = Object.fromEntries(dataArr);
          handler(data);
        });
      }
    }, {
      key: "generateMarkup",
      value: function generateMarkup() {}
    }]);
  }($b99ae1ccf7b7dfd6b49eb2b84e6d6141$export$default);
  var $c600d8d26eaf417f9efe50f43c36000$export$default = new $c600d8d26eaf417f9efe50f43c36000$var$addRecipeView();
  function $dcda24f48c942085b4e752ea505f4e5$var$_typeof(o) {
    "@babel/helpers - typeof";

    return $dcda24f48c942085b4e752ea505f4e5$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $dcda24f48c942085b4e752ea505f4e5$var$_typeof(o);
  }
  function $dcda24f48c942085b4e752ea505f4e5$var$_regeneratorRuntime() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    $dcda24f48c942085b4e752ea505f4e5$var$_regeneratorRuntime = function _regeneratorRuntime() {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function define(t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == $dcda24f48c942085b4e752ea505f4e5$var$_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function value(t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError($dcda24f48c942085b4e752ea505f4e5$var$_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function $dcda24f48c942085b4e752ea505f4e5$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function $dcda24f48c942085b4e752ea505f4e5$var$_asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          $dcda24f48c942085b4e752ea505f4e5$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          $dcda24f48c942085b4e752ea505f4e5$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  var $dcda24f48c942085b4e752ea505f4e5$var$API = /*#__PURE__*/function () {
    var _ref = $dcda24f48c942085b4e752ea505f4e5$var$_asyncToGenerator( /*#__PURE__*/$dcda24f48c942085b4e752ea505f4e5$var$_regeneratorRuntime().mark(function _callee() {
      var id;
      return $dcda24f48c942085b4e752ea505f4e5$var$_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = window.location.hash.slice(1);
            if (id) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return");
          case 4:
            $bb29992c206071c3dc7b74b69411d96$export$default.spinner();
            _context.next = 7;
            return $a51b0a2880dc92f7e85f69a8b25d642d$export$fetchingData(id);
          case 7:
            $bb29992c206071c3dc7b74b69411d96$export$default.render($a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe);
            $dcda24f48c942085b4e752ea505f4e5$var$controlServings();
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            $bb29992c206071c3dc7b74b69411d96$export$default.renderError();
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    return function API() {
      return _ref.apply(this, arguments);
    };
  }();
  var $dcda24f48c942085b4e752ea505f4e5$var$SearchFunc = /*#__PURE__*/function () {
    var _ref2 = $dcda24f48c942085b4e752ea505f4e5$var$_asyncToGenerator( /*#__PURE__*/$dcda24f48c942085b4e752ea505f4e5$var$_regeneratorRuntime().mark(function _callee2() {
      var quary;
      return $dcda24f48c942085b4e752ea505f4e5$var$_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            quary = $f91c83782128716ccea27a6a$export$default.quaryGet();
            if (quary) {
              _context2.next = 4;
              break;
            }
            return _context2.abrupt("return");
          case 4:
            _context2.next = 6;
            return $a51b0a2880dc92f7e85f69a8b25d642d$export$searchResults(quary);
          case 6:
            $d9d84b67cef2c3ab04020cf49c714$export$default.render($a51b0a2880dc92f7e85f69a8b25d642d$export$getSearchpage());
            $a31b4151d8521703d05fe5a44fcf8abd$export$default.render($a51b0a2880dc92f7e85f69a8b25d642d$export$state.bookmark);
            $e8933bce210ba8b06423f8ce64e31ba$export$default.render($a51b0a2880dc92f7e85f69a8b25d642d$export$state.search);
            _context2.next = 14;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 11]]);
    }));
    return function SearchFunc() {
      return _ref2.apply(this, arguments);
    };
  }();
  var $dcda24f48c942085b4e752ea505f4e5$var$paginationbtn = function paginationbtn(pageGoTo) {
    $d9d84b67cef2c3ab04020cf49c714$export$default.render($a51b0a2880dc92f7e85f69a8b25d642d$export$getSearchpage(pageGoTo));
    $e8933bce210ba8b06423f8ce64e31ba$export$default.render($a51b0a2880dc92f7e85f69a8b25d642d$export$state.search);
  };
  var $dcda24f48c942085b4e752ea505f4e5$var$controlServings = function controlServings(newservings) {
    $a51b0a2880dc92f7e85f69a8b25d642d$export$updateServings(newservings);
    $bb29992c206071c3dc7b74b69411d96$export$default.render($a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe);
  };
  var $dcda24f48c942085b4e752ea505f4e5$var$bookmark = function bookmark() {
    if (!$a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe.bookmarked) $a51b0a2880dc92f7e85f69a8b25d642d$export$bookmark($a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe);else $a51b0a2880dc92f7e85f69a8b25d642d$export$deletebookmarks($a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe.id);
    $bb29992c206071c3dc7b74b69411d96$export$default.render($a51b0a2880dc92f7e85f69a8b25d642d$export$state.recipe);
    $a31b4151d8521703d05fe5a44fcf8abd$export$default.render($a51b0a2880dc92f7e85f69a8b25d642d$export$state.bookmark);
  };
  var $dcda24f48c942085b4e752ea505f4e5$var$updatebookmark = function updatebookmark() {
    $a31b4151d8521703d05fe5a44fcf8abd$export$default.render($a51b0a2880dc92f7e85f69a8b25d642d$export$state.bookmark);
  };
  var $dcda24f48c942085b4e752ea505f4e5$var$addRecipeControler = function addRecipeControler(data) {
    try {
      $a51b0a2880dc92f7e85f69a8b25d642d$export$uploadReciple(data);
    } catch (error) {
      console.log(error);
      $c600d8d26eaf417f9efe50f43c36000$export$default.renderError(error.message);
    }
  };
  var $dcda24f48c942085b4e752ea505f4e5$var$init = function init() {
    $a31b4151d8521703d05fe5a44fcf8abd$export$default.ControlBookmarks($dcda24f48c942085b4e752ea505f4e5$var$updatebookmark);
    $bb29992c206071c3dc7b74b69411d96$export$default.hashchange($dcda24f48c942085b4e752ea505f4e5$var$API);
    $f91c83782128716ccea27a6a$export$default.handlerFunc($dcda24f48c942085b4e752ea505f4e5$var$SearchFunc);
    $e8933bce210ba8b06423f8ce64e31ba$export$default.paginationHander($dcda24f48c942085b4e752ea505f4e5$var$paginationbtn);
    $bb29992c206071c3dc7b74b69411d96$export$default.UpdateServingsHandler($dcda24f48c942085b4e752ea505f4e5$var$controlServings);
    $bb29992c206071c3dc7b74b69411d96$export$default.bookmarkHandler($dcda24f48c942085b4e752ea505f4e5$var$bookmark);
    $c600d8d26eaf417f9efe50f43c36000$export$default.Recipehandler($dcda24f48c942085b4e752ea505f4e5$var$addRecipeControler);
  };
  $dcda24f48c942085b4e752ea505f4e5$var$init();
})();
//# sourceMappingURL=controller.8b8da69c.js.map
