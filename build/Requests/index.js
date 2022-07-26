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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caller = void 0;
const client_1 = __importDefault(require("./client"));
class Caller {
    /**
     * The Caller's constructor
     * construction calls with the `new` operator.
     */
    constructor(Conf) {
        this.Conf = Conf;
        this.Client = (0, client_1.default)(Conf);
    }
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
     * Example : GET("/resources", []
     * @param Url string
     * @param Params string[]
     * @returns Promise<IRData>
     */
    GET(Url, Params = { params: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = {
                load: "N/A",
                status: "Success",
                status_code: 0,
                last_pulled: Date.now(),
                error: false,
            };
            try {
                const responseRaw = yield this.Client.get(Url, Params);
                if (responseRaw) {
                    response.load = responseRaw.data;
                }
                else {
                    response.status = responseRaw.statusText;
                    response.error = true;
                }
                response.status_code = responseRaw.status;
            }
            catch (e) {
                response.status = e === null || e === void 0 ? void 0 : e.message;
                response.error = true;
                response.status_code = 500;
            }
            response.last_pulled = Date.now();
            return response;
        });
    }
}
exports.Caller = Caller;
