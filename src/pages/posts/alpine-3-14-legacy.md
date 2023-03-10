---
layout: "../../layouts/Blog.astro"
id: 3
title: "Alpine 3.14 Legacy"
pubDate: 2023-03-11
description: "We recommend customers using alpine 3.14 image to upgrade to a newer version alpine 3.15 or higher."
author:
  avatar: /authors/zack-siri.jpeg
  name: "Zack Siri"
  position: "Founder / CEO"
tags: ["fyi"]
image:
  url: /posts/alpine-3-14-legacy/cover.jpg
  alt: Cover image for Alpine 3.14 Legacy
---

# Alpine Linux and LXD Image Server

Alpine Linux version 3.14 will continue to be supported by Alpine Linux, but Instellar.app uses images from LXD's image server to host and update images. The availability of Alpine versions on our platform is dependent on what is available on [LXD's image server](https://uk.lxd.images.canonical.com/), which generally keeps four versions available:

    Alpine 3.14 - alpine/3.14
    Alpine 3.15 - alpine/3.15
    Alpine 3.16 - alpine/3.16
    Alpine 3.17 - alpine/3.17

These versions of Alpine are still supported by LXD's image server. However, when Alpine 3.18 is released, Alpine 3.14 may be dropped. It is important to keep this in mind when selecting an Alpine version for your application.

## Recommended Actions

### New Applications

If you are deploying new applications, we recommend using the latest version of Alpine, which is currently alpine/3.17. To update your stack, simply set the `stack: alpine/3.17` in your instellar.yml file.

### Existing Applications

If you are running an existing application, it's important to check if you can upgrade to a newer version of Alpine. Upgrading can provide security and performance improvements, but it's important to ensure that your application is compatible with the new version.

Additionally, check what programming language versions and frameworks are supported on the Alpine image you choose. This will help ensure a smooth upgrade path and avoid any compatibility issues.

## Noteworthy Changes in Alpine >= 3.15

If you are planning to upgrade from Alpine 3.14, it's important to plan enough time to ensure a smooth upgrade path. It's worth noting that some packages have been dropped from Alpine 3.14, specifically any package that depends on qt5-qtwebkit. This may affect some applications that rely on those packages, so it's important to review your dependencies before upgrading.

You can read more about the changes in the [Alpine 3.15 Release Notes](https://alpinelinux.org/posts/Alpine-3.15.0-released.html). We recommend going through your list of dependencies to ensure you don't depend on any package that is not available in Alpine 3.15 or newer versions. If you do, you may need to figure out an alternative way to satisfy those dependencies. If you need assistance or have any questions, please reach out to our [support team](mailto:support@instellar.app).

## Estimated Timeline

```
Alpine 3.14 - 2021-06-15
Alpine 3.15 - 2021-11-24
Alpine 3.16 - 2022-05-23
Alpine 3.17 - 2022-11-22
```

If we take a look at the release dates of the last four versions of alpine. We can anticipate that alpine/3.18 will be released around May / June of 2023.

## Future Plans

We understand the importance of having systems not break because of upgrades. This means we will need to run and manage our own image server. This is something we're planning to do in the future, for now the best we can do is give our customers a heads up.