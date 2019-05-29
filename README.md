# tyhal.com

A JSON Driven Static Website on AWS

Costs me $0.50 (NZD) a month to host.

* * *

## Run Me

```bash
    script/bootstrap
    script/test
```

Using terraform we can deploy our static website

You will need to go into `terraform/static-website.tf` and change the bucket and key to something your own

```bash
    export AWS_SECRET_ACCESS_KEY=
    export AWS_ACCESS_KEY_ID= 
    
    script/deploy
```
