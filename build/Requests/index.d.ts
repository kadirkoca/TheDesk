import { CallerConf, IRData } from "../References/conf";
export declare class Caller {
    private Client;
    Conf: CallerConf;
    /**
     * The Caller's constructor
     * construction calls with the `new` operator.
     */
    constructor(Conf: CallerConf);
    /**
     * The static method that controls the access to the Caller instance.
     *
     * This implementation let you subclass the Caller class while keeping
     * just one instance of each subclass around.
     */
    /**
     * GETs the resources from the defined Url. It is used in a Caller class.
     * Example : GET("/resources", []
     * @param Url string
     * @param Params string[]
     * @returns Promise<IRData>
     */
    GET(Url: string, Params?: {}): Promise<IRData>;
}
