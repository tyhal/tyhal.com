# tyhal.com

[![Dependency Status](https://david-dm.org/tyhal/tyhal.com.svg?theme=shields.io)](https://david-dm.org/tyhal/tyhal.com)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/tyhal/tyhal.com.svg)](https://hub.docker.com/r/tyhal/tyhal.com)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ftyhal%2Ftyhal.com.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Ftyhal%2Ftyhal.com?ref=badge_shield)

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

* * *

## Tech Debt

[![](https://codescene.io/projects/5221/status.svg) Get more details at **codescene.io**.](https://codescene.io/projects/5221/jobs/latest-successful/results)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ftyhal%2Ftyhal.com.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Ftyhal%2Ftyhal.com?ref=badge_large)