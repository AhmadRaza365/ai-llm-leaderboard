const getBrowserType = () => {
  const test = (regexp: RegExp) => {
    return regexp.test(navigator.userAgent)
  }

  if (test(/opr\//i)) {
    return "Opera"
  } else if (test(/edg/i)) {
    return "Microsoft Edge"
  } else if (test(/chrome|chromium|crios/i)) {
    return "Google Chrome"
  } else if (test(/firefox|fxios/i)) {
    return "Mozilla Firefox"
  } else if (test(/safari/i)) {
    return "Apple Safari"
  } else if (test(/trident/i)) {
    return "Microsoft Internet Explorer"
  } else if (test(/ucbrowser/i)) {
    return "UC Browser"
  } else if (test(/samsungbrowser/i)) {
    return "Samsung Browser"
  } else {
    return "Unknown browser"
  }
}

const getOsName = () => {
  const test = (regexp: RegExp) => {
    return regexp.test(navigator.userAgent)
  }

  if (test(/windows|win32/i)) {
    return "Windows"
  } else if (test(/macintosh|mac os x/i)) {
    return "MacOS"
  } else if (test(/android/i)) {
    return "Android"
  } else if (test(/iphone/i)) {
    return "iOS"
  } else if (test(/linux/i)) {
    return "Linux"
  } else {
    return "Unknown OS"
  }
}

export { getBrowserType, getOsName }
