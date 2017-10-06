import React from 'react'

exports.onRenderBody = (
  { setHeadComponents },
  {
    android = true,
    appleIcon = true,
    appleStartup = true,
    coast = true,
    favicons = true,
    firefox = true,
    twitter = true,
    yandex = true,
    windows = true,
  } = pluginOptions
) => {
  const prefix = typeof __PATH_PREFIX__ !== 'undefined' ? __PATH_PREFIX__ : ''
  const HeadComponents = []

  if (android) {
    HeadComponents.push(
      <link
        rel="manifest"
        href={`${prefix}/favicons/manifest.json`}
        key={`favicon_${HeadComponents.length + 1}`}
      />
    )
  }
  if (appleIcon) {
    HeadComponents.push(
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={`${prefix}/favicons/apple-touch-icon-57x57.png`}
        key={`favicon_${HeadComponents.length + 1}`}
      />,
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${prefix}/favicons/apple-touch-icon-60x60.png`}
        key={`favicon_${HeadComponents.length + 2}`}
      />,
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`${prefix}/favicons/apple-touch-icon-72x72.png`}
        key={`favicon_${HeadComponents.length + 3}`}
      />,
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${prefix}/favicons/apple-touch-icon-76x76.png`}
        key={`favicon_${HeadComponents.length + 4}`}
      />,
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`${prefix}/favicons/apple-touch-icon-114x114.png`}
        key={`favicon_${HeadComponents.length + 5}`}
      />,
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`${prefix}/favicons/apple-touch-icon-120x120.png`}
        key={`favicon_${HeadComponents.length + 6}`}
      />,
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`${prefix}/favicons/apple-touch-icon-144x144.png`}
        key={`favicon_${HeadComponents.length + 7}`}
      />,
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`${prefix}/favicons/apple-touch-icon-152x152.png`}
        key={`favicon_${HeadComponents.length + 8}`}
      />,
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${prefix}/favicons/apple-touch-icon-180x180.png`}
        key={`favicon_${HeadComponents.length + 9}`}
      />
    )
  }
  if (appleStartup) {
    HeadComponents.push(
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)"
        href={`${prefix}/favicons/apple-touch-startup-image-320x460.png`}
        key={`favicon_${HeadComponents.length + 1}`}
      />,
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)"
        href={`${prefix}/favicons/apple-touch-startup-image-640x920.png`}
        key={`favicon_${HeadComponents.length + 2}`}
      />,
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        href={`${prefix}/favicons/apple-touch-startup-image-640x1096.png`}
        key={`favicon_${HeadComponents.length + 3}`}
      />,
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        href={`${prefix}/favicons/apple-touch-startup-image-750x1294.png`}
        key={`favicon_${HeadComponents.length + 4}`}
      />,
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)"
        href={`${prefix}/favicons/apple-touch-startup-image-1182x2208.png`}
        key={`favicon_${HeadComponents.length + 5}`}
      />,
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)"
        href={`${prefix}/favicons/apple-touch-startup-image-1242x2148.png`}
        key={`favicon_${HeadComponents.length + 6}`}
      />,
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)"
        href={`${prefix}/favicons/apple-touch-startup-image-748x1024.png`}
        key={`favicon_${HeadComponents.length + 7}`}
      />,
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)"
        href={`${prefix}/favicons/apple-touch-startup-image-768x1004.png`}
        key={`favicon_${HeadComponents.length + 8}`}
      />,
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)"
        href={`${prefix}/favicons/apple-touch-startup-image-1496x2048.png`}
        key={`favicon_${HeadComponents.length + 9}`}
      />,
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)"
        href={`${prefix}/favicons/apple-touch-startup-image-1536x2008.png`}
        key={`favicon_${HeadComponents.length + 10}`}
      />
    )
  }
  if (favicons) {
    HeadComponents.push(
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${prefix}/favicons/favicon-32x32.png`}
        key={`favicon_${HeadComponents.length + 1}`}
      />,
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${prefix}/favicons/favicon-16x16.png`}
        key={`favicon_${HeadComponents.length + 2}`}
      />,
      <link
        rel="shortcut icon"
        href={`${prefix}/favicons/favicon.ico`}
        key={`favicon_${HeadComponents.length + 3}`}
      />
    )
  }
  if (coast) {
    HeadComponents.push(
      <link
        rel="icon"
        type="image/png"
        sizes="228x228"
        href={`${prefix}/favicons/coast-228x228.png`}
        key={`favicon_${HeadComponents.length + 1}`}
      />
    )
  }
  if (windows) {
    HeadComponents.push(
      <meta
        name="msapplication-TileImage"
        content={`${prefix}/favicons/mstile-144x144.png`}
        key={`favicon_${HeadComponents.length + 1}`}
      />,
      <meta
        name="msapplication-config"
        content={`${prefix}/favicons/browserconfig.xml`}
        key={`favicon_${HeadComponents.length + 2}`}
      />
    )
  }
  if (yandex) {
    HeadComponents.push(
      <link
        rel="yandex-tableau-widget"
        href={`${prefix}/favicons/yandex-browser-manifest.json`}
        key={`favicon_${HeadComponents.length + 1}`}
      />
    )
  }
  setHeadComponents(HeadComponents)
}
