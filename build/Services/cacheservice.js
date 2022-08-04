"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getCacheData = void 0;
var cacheTag = "thedeskrequestsw::";
var version = "v0.0.1";
var cacheName = cacheTag + version;
var filesToCache = ["/"];
self.oninstall = function (event) {
    event.waitUntil((function () {
        return __awaiter(this, void 0, void 0, function () {
            var cache;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, caches.open(cacheName)];
                    case 1:
                        cache = _a.sent();
                        return [4 /*yield*/, cache.addAll(filesToCache)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    })());
};
self.onactivate = function (event) {
    event.waitUntil(function () {
        return __awaiter(this, void 0, void 0, function () {
            var promises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, caches.keys()];
                    case 1:
                        promises = (_a.sent()).map(function (CACHE_NAME) {
                            if (cacheName !== CACHE_NAME) {
                                return caches["delete"](CACHE_NAME);
                            }
                        });
                        return [4 /*yield*/, Promise.all(promises)
                            // Alternate - for deleting stale cache
                            // caches.keys().then(function (keys) {
                            //     // Remove caches whose name is no longer valid
                            //     return Promise.all(
                            //         keys
                            //             .filter(function (key) {
                            //                 return key.indexOf(version) !== 0
                            //             })
                            //             .map(function (key) {
                            //                 return caches.delete(key)
                            //             })
                            //     )
                            // })
                        ];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
};
self.onfetch = function (event) {
    var request = event.request;
    if (request.method !== "GET") {
        return;
    }
    event.respondWith((function () {
        return __awaiter(this, void 0, void 0, function () {
            var cachedResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, caches.match(event.request, {
                            ignoreSearch: true
                        })];
                    case 1:
                        cachedResponse = _a.sent();
                        return [2 /*return*/, cachedResponse || fetch(event.request)];
                }
            });
        });
    })());
};
var getCacheData = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var cachedData, cacheStorage, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                return [4 /*yield*/, getCachedData(url)];
            case 1:
                cachedData = _a.sent();
                if (cachedData) {
                    console.log("Retrieved cached data");
                    return [2 /*return*/, cachedData];
                }
                console.log("Fetching fresh data");
                return [4 /*yield*/, caches.open(cacheName)];
            case 2:
                cacheStorage = _a.sent();
                return [4 /*yield*/, cacheStorage.add(url)];
            case 3:
                _a.sent();
                return [4 /*yield*/, getCachedData(url)];
            case 4:
                cachedData = _a.sent();
                return [4 /*yield*/, deleteOldCaches(cacheName)];
            case 5:
                _a.sent();
                return [2 /*return*/, cachedData];
            case 6:
                error_1 = _a.sent();
                return [2 /*return*/, error_1];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getCacheData = getCacheData;
function getCachedData(url) {
    return __awaiter(this, void 0, void 0, function () {
        var cacheStorage, cachedResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, caches.open(cacheName)];
                case 1:
                    cacheStorage = _a.sent();
                    return [4 /*yield*/, cacheStorage.match(url)];
                case 2:
                    cachedResponse = _a.sent();
                    if (!cachedResponse || !cachedResponse.ok) {
                        return [2 /*return*/, false];
                    }
                    return [4 /*yield*/, cachedResponse.json()];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function deleteOldCaches(currentCache) {
    return __awaiter(this, void 0, void 0, function () {
        var keys, _i, keys_1, key, isOurCache;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, caches.keys()];
                case 1:
                    keys = _a.sent();
                    for (_i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                        key = keys_1[_i];
                        isOurCache = key.startsWith(cacheTag);
                        if (currentCache === key || !isOurCache) {
                            continue;
                        }
                        caches["delete"](key);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
