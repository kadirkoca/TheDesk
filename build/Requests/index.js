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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Caller = void 0;
var requestinstance_1 = __importDefault(require("./requestinstance"));
var axios_1 = require("axios");
var errors_1 = require("../References/errors");
var registerer_1 = __importDefault(require("../Services/registerer"));
var cacheservice_1 = require("../Services/cacheservice");
var Caller = /** @class */ (function () {
    /**
     * The Caller's constructor
     * construction calls with the `new` operator.
     */
    function Caller(Conf) {
        this.Conf = Conf;
        this.RequestInstance = (0, requestinstance_1["default"])(Conf);
        this.BaseURL = Conf.BaseURL;
        if (Conf.LocalCache) {
            (0, registerer_1["default"])("./cacheservice.js", "insanecache").then(function (r) {
                console.log(r);
            })["catch"](function (e) {
                console.log(e);
            });
        }
    }
    Caller.prototype.getCache = function (URL) {
        return __awaiter(this, void 0, void 0, function () {
            var cacheData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (0, cacheservice_1.getCacheData)(this.BaseURL + URL)];
                    case 1:
                        cacheData = _a.sent();
                        return [2 /*return*/, cacheData];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, error_1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The static method that controls the access to the Caller instance.
     *
     * This implementation let you subclass the Caller class while keeping
     * just one instance of each subclass around.
     */
    // public static getInstance(): Caller {
    // 	if (!Caller.instance) {
    // 		Caller.instance = new Caller(this.instance.Conf)
    // 	}
    // 	return Caller.instance
    // }
    /**
     * GETs the resources from the defined Url. It is used in a Caller class.
     * Example : GET("/resources")
     * @param Url string
     * @param params string [] - Url parameters
     * @param abortcontroller Abortcontroller
     * @param headers Optional headers
     * @returns Promise<IRData>
     */
    Caller.prototype.GET = function (Url, params, abortcontroller, headers) {
        return __awaiter(this, void 0, void 0, function () {
            var response, signal, responseRaw, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = {
                            load: "N/A",
                            status: "Success",
                            statusCode: 0,
                            lastReceived: Date.now(),
                            error: false
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        signal = abortcontroller === null || abortcontroller === void 0 ? void 0 : abortcontroller.signal;
                        return [4 /*yield*/, this.RequestInstance.get(Url, { params: params, signal: signal, headers: headers })];
                    case 2:
                        responseRaw = _a.sent();
                        if (responseRaw) {
                            response.load = responseRaw.data;
                        }
                        else {
                            response.status = responseRaw.statusText;
                            response.error = true;
                        }
                        response.statusCode = responseRaw.status;
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        if (abortcontroller === null || abortcontroller === void 0 ? void 0 : abortcontroller.signal.aborted) {
                            response.status = (0, errors_1.ErrorMessage)("User cancelled the request!");
                        }
                        else if (e_1 instanceof axios_1.AxiosError) {
                            response.status = (0, errors_1.ErrorMessage)("Request timedout ! Set by ".concat(this.Conf.Timeout));
                        }
                        else {
                            response.status = e_1;
                        }
                        response.error = true;
                        response.statusCode = 500;
                        return [3 /*break*/, 4];
                    case 4:
                        response.lastReceived = Date.now();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * POSTs the data to the defined Url. It is used in a Caller class.
     * Example : POST("/resources", { msg: "hello world" })
     * @param Url string
     * @param data Object
     * @param abortcontroller Abortcontroller
     * @param headers Optional headers
     * @returns Promise<IRData>
     */
    Caller.prototype.POST = function (Url, data, abortcontroller, headers) {
        return __awaiter(this, void 0, void 0, function () {
            var response, signal, responseRaw, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = {
                            load: "N/A",
                            status: "Success",
                            statusCode: 0,
                            lastReceived: Date.now(),
                            error: false
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        signal = abortcontroller === null || abortcontroller === void 0 ? void 0 : abortcontroller.signal;
                        return [4 /*yield*/, this.RequestInstance.post(Url, data, { signal: signal, headers: headers })];
                    case 2:
                        responseRaw = _a.sent();
                        if (responseRaw) {
                            response.load = responseRaw.data;
                        }
                        else {
                            response.status = responseRaw.statusText;
                            response.error = true;
                        }
                        response.statusCode = responseRaw.status;
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        if (abortcontroller === null || abortcontroller === void 0 ? void 0 : abortcontroller.signal.aborted) {
                            response.status = (0, errors_1.ErrorMessage)("User cancelled the request!");
                        }
                        else if (e_2 instanceof axios_1.AxiosError) {
                            response.status = (0, errors_1.ErrorMessage)("Request timedout ! Set by ".concat(this.Conf.Timeout));
                        }
                        else {
                            response.status = e_2;
                        }
                        response.error = true;
                        response.statusCode = 500;
                        return [3 /*break*/, 4];
                    case 4:
                        response.lastReceived = Date.now();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return Caller;
}());
exports.Caller = Caller;
