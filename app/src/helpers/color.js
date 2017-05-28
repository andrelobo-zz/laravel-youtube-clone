export const stringToColor = (string) => {
  // Generate a Hash for the String
  const hash = function (word) {
    let h = 0
    for (let i = 0; i < word.length; i++) {
      h = word.charCodeAt(i) + ((h << 5) - h)
    }
    return h
  }

  // Change the darkness or lightness
  const shade = function (color, prc) {
    const num = parseInt(color, 16)
    const amt = Math.round(2.55 * prc)
    const R = (num >> 16) + amt
    const G = (num >> 8 & 0x00FF) + amt
    const B = (num & 0x0000FF) + amt

    return (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255))
    .toString(16)
    .slice(1)
  }

  // Convert init to an RGBA
  const intToRgba = function (i) {
    return ((i >> 24) & 0xFF).toString(16) +
      ((i >> 16) & 0xFF).toString(16) +
      ((i >> 8) & 0xFF).toString(16) +
      (i & 0xFF).toString(16)
  }

  return shade(intToRgba(hash(string)), -10)
}
