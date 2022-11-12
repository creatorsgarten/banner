# banner

Dynamically generated social banners. This script only ment to generate banners for only YouTube channel for now, for other social channels will be made available in the future.

## Preparing

Clone this repository altogether with [`creatorsgarten.org`](https://github.com/creatorsgarten/creatorsgarten.org) repository within the same root directory. Final project structure should be like this...

```
./
  creatorsgarten.org/
    ...
  banner/
    ...
```

# Capturing

Run puppeteer script to generate the final image with the following command

```
pnpm capture
```

As a result, the final image will be located at `dist/screenshot.png`
