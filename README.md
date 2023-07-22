# tyhal.com

***

## Run Me

```bash
    script/bootstrap
    script/test
```

Using terraform we can deploy our static website

You will need to go into `deploy/static-website.tf` and change the bucket and key your own bucket to store the terraform config

    terraform {
      backend "s3" {
        bucket =
        key =

```bash
    export AWS_SECRET_ACCESS_KEY=
    export AWS_ACCESS_KEY_ID= 
    export TF_VAR_domain_name=
    
    script/deploy
```

***

## Tech Debt

[![](https://codescene.io/projects/5221/status.svg) Get more details at **codescene.io**.](https://codescene.io/projects/5221/jobs/latest-successful/results)

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ftyhal%2Ftyhal.com.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Ftyhal%2Ftyhal.com?ref=badge_large)
