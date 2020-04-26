# University of Arizona Libraries Customizations For LibApps

This repository contains customizations for LibApps for the University of Arizona Libraries.
The styles here are intended to match [UA Sites](https://uasites.arizona.edu/home).

# Quickstart

0. Ensure that the "Custom JS/CSS" section under "Look & Feel" in the LibApps Group or Application you're trying
to customize is loading the appropriate files:

```
<link rel="stylesheet" type="text/css" href="https://libapps.cloudsites.arizona.edu/main.css">
<script src="https://libapps.cloudsites.arizona.edu/vendor.js"></script>
<script src="//v2.libanswers.com/load_chat.php?hash=07713bc057f66ebcdccd4dd1b4a2be3e"></script>
```

1. Ensure that the "Customer Header" section matches the contents of `html/header.html` and the footer matches
`html/footer.html`.

2. To make a change to the CSS stylesheet, navigate to `src/css/styles.css` in Github.  Then click the edit icon
and make your changes.  Click the "Commit your changes" button.

3. Wait approximately 30 seconds to a minutes.  Then reload the libapps page you're working on to see the result.  You may
have to clear your browser cache to see the change.

# Technical Overview

This project uses Webpack to build assets and Amazon S3 (provided by [UA CloudOps](https://cloudops.arizona.edu/serverless-website)) to serve them.  Github Actions are used to deploy to production on every commit/push to master (see `.github/workflows/main.yaml` for the full configuration).  Two Github Secrets need to be present for the deployment to work: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`.  These should be set the values specified in [Stache](https://stache.arizona.edu/).

![Node.js CI](https://github.com/simpsonw/ual-libapps/workflows/Node.js%20CI/badge.svg)
