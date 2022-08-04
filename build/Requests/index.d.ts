import { CallerConf, IRData } from "../References/conf";
export declare class Caller {
    private RequestInstance;
    private Conf;
    private BaseURL;
    /**
     * The Caller's constructor
     * construction calls with the `new` operator.
     */
    constructor(Conf: CallerConf);
    getCache(URL: string): Promise<any>;
    /**
     * The static method that controls the access to the Caller instance.
     *
     * This implementation let you subclass the Caller class while keeping
     * just one instance of each subclass around.
     */
    /**
     * GETs the resources from the defined Url. It is used in a Caller class.
     * Example : GET("/resources")
     * @param Url string
     * @param params string [] - Url parameters
     * @param abortcontroller Abortcontroller
     * @param headers Optional headers
     * @returns Promise<IRData>
     */
    GET(Url: string, params?: {}, abortcontroller?: AbortController, headers?: {}): Promise<IRData>;
    /**
     * POSTs the data to the defined Url. It is used in a Caller class.
     * Example : POST("/resources", { msg: "hello world" })
     * @param Url string
     * @param data Object
     * @param abortcontroller Abortcontroller
     * @param headers Optional headers
     * @returns Promise<IRData>
     */
    POST(Url: string, data?: {}, abortcontroller?: AbortController, headers?: {}): Promise<IRData>;
}
