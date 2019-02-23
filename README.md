# gcf-cookies

A stupid simple Google Cloud Function that responds to an HTTP request with a cookie from a request's HTTP headers.

## Requirements

* Google Cloud Platform project
* gcloud set up and initialized for a project with the Cloud Functions API enabled.

## Usage

```
git clone https://github.com/agmsb/gcf-cookies.git && cd gcf-cookies && gcloud functions deploy gcf-cookies --runtime nodejs6 --entry-point helloCookie --trigger-http
```

## Testing

Use a client like [Postman](https://www.getpostman.com) to alter your http request and set cookie in your request header. You can also use this lightweight client from [Apigee](https://apigee-rest-client.appspot.com/). See the GIF below for reference.

## Demo

![demo-gif](/gcf-cookies-demo.gif)