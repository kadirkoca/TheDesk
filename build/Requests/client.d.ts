import { CallerConf } from "../References/conf";
declare const Client: (Conf: CallerConf) => import("axios").AxiosInstance;
export default Client;
