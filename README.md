# office.com cookie deleter extension

This extension deletes all the office.com extensions to solve outlook
login loops.  I don't know how to make extensions, so don't trust
this.  But it's so simple, it probably doesn't do anything wrong.


## Installation

### Firefox

Go to <about:debugging#/runtime/this-firefox>, Select `Load temporary
add-on`, and select the `manifest.json` from this repository.

### Chrome

Change `"scripts": ["background.js"]` to `"service_worker":
"background.js"` (todo: can both be in there and it works across
both?)
