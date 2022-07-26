# The Desk
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/kadirkoca/rediselastic)

## GET

GET is a modified version of a native HTTP request method. Example usage is down below;

```
import { Caller, CallerConf, IRData } from "thedesk"

const args: CallerConf = {
	BaseURL: "https://datausa.io",
}

const caller = new Caller(args)

const urlParams = {
	drilldowns: "Nation",
	measures: "Population",
}

caller.GET("/api/data", { params: urlParams })
	.then((response: IRData) => {
		console.log(response.load)
	})
	.catch((e: any) => {
		console.log(e)
	})
```

### CallerConf ( Caller Configration Interface)

```
{
	Mode?: string
	Cache?: TCache
	Credentials?: TCredentials
	Redirect?: TRedirect
	ReferrerPolicy?: TReferrerPolicy
        
	BaseURL: string,
	Timeout?: number,
	WithCredentials?: boolean,
	Headers?: any,
	ResponseType?: "json",
    ResponseEncoding?: "utf8",
    XsrfCookieName?: "XSRF-TOKEN",
    XsrfHeaderName?: "X-XSRF-TOKEN"
}
```

### IRData ( Response Data Interface)

```
{
    load: any,
    status: string,
    status_code: number,
    last_pulled: number,
    error: boolean
}
```


## License

MIT
_Kadir KOCA_ - kadirrkoca@gmail.com for feedback