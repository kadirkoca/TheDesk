"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Client = (Conf) => {
    return axios_1.default.create({
        baseURL: Conf.BaseURL,
        timeout: Conf.Timeout,
        withCredentials: Conf.WithCredentials,
        headers: Conf.Headers,
        responseType: Conf.ResponseType,
        responseEncoding: Conf.ResponseEncoding,
        xsrfCookieName: Conf.XsrfCookieName,
        xsrfHeaderName: Conf.XsrfHeaderName,
    });
};
exports.default = Client;
