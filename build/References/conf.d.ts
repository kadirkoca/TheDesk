declare type TCache = "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";
declare type TCredentials = "include" | "omit" | "same-origin";
declare type TRedirect = "error" | "follow" | "manual";
declare type TReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
export interface CallerConf {
    Mode?: string;
    Cache?: TCache;
    Credentials?: TCredentials;
    Redirect?: TRedirect;
    ReferrerPolicy?: TReferrerPolicy;
    BaseURL: string;
    Timeout?: number;
    WithCredentials?: boolean;
    Headers?: any;
    ResponseType?: "json";
    ResponseEncoding?: "utf8";
    XsrfCookieName?: "XSRF-TOKEN";
    XsrfHeaderName?: "X-XSRF-TOKEN";
}
export interface IRData {
    load: any;
    status: string;
    status_code: number;
    last_pulled: number;
    error: boolean;
}
export {};
