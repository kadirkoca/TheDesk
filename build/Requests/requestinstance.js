"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var axios_1 = __importDefault(require("axios"));
var RequestInstance = function (Conf) {
    return axios_1["default"].create({
        baseURL: Conf.BaseURL,
        timeout: Conf.Timeout,
        withCredentials: Conf.WithCredentials,
        headers: Conf.Headers,
        responseType: Conf.ResponseType,
        responseEncoding: Conf.ResponseEncoding,
        xsrfCookieName: Conf.XsrfCookieName,
        xsrfHeaderName: Conf.XsrfHeaderName
    });
};
exports["default"] = RequestInstance;
