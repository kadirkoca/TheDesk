import { CallerConf } from "../References/conf";
declare const RequestInstance: (Conf: CallerConf) => import("axios").AxiosInstance;
export default RequestInstance;
