declare type TMode = "cors" | "navigate" | "no-cors" | "same-origin";
declare type TCache = "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";
declare type TCredentials = "include" | "omit" | "same-origin";
declare type TRedirect = "error" | "follow" | "manual";
declare type TReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
declare type THeaders = Record<string, string | number | boolean>;
export interface CallerConf {
    Mode?: TMode;
    Cache?: TCache;
    LocalCache?: boolean;
    Credentials?: TCredentials;
    Redirect?: TRedirect;
    ReferrerPolicy?: TReferrerPolicy;
    BaseURL: string;
    Timeout?: number;
    WithCredentials?: boolean;
    Headers?: THeaders;
    ResponseType?: "json";
    ResponseEncoding?: "utf8";
    XsrfCookieName?: "XSRF-TOKEN";
    XsrfHeaderName?: "X-XSRF-TOKEN";
}
export interface IRData {
    load: any;
    status: string;
    statusCode: number;
    lastReceived: number;
    error: boolean;
}
export {};
