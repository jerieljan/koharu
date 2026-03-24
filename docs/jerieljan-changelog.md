# jerieljan-changelog

It's probably much easier to simply check the [closed pull requests in this repository](https://github.com/jerieljan/koharu/pulls?q=is%3Apr+is%3Aclosed) 
but a separate doc seems sensible as changes pile over time.

## 2026-03-24

- [**#2: fix: initial fix for duplicate font names**](https://github.com/jerieljan/koharu/pull/2)
  - Changed the font display to indicate postScript names so the font families don't simply repeat without telling their variants.

## 2026-03-23

- [**#1: feature: batch actions and Metal fixes**](https://github.com/jerieljan/koharu/pull/1)
  - Added a batch actions submenu under the Process menu.
  - Minor, weakly-tested attempt to address `Metal error Failed to create metal resource: Buffer` errors on *Inpaint*
