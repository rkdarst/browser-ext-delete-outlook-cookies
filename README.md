# office.com cookie eliminator

This extension deletes all the office.com extensions to solve outlook
login loops.  I don't know how to make extensions, so don't trust
this.  But it's so simple, it probably doesn't do anything wrong.


## Installation

### Firefox

**Release:** Go to
<https://rkdarst.github.io/browser-ext-delete-outlook-cookies/> and
click on the latest version (that has a version number).

Development: Go to <about:debugging#/runtime/this-firefox>, Select
`Load temporary add-on`, and select the `manifest.json` from this
repository.


### Chrome

Not yet tested.  You might be able to change `"scripts":
["background.js"]` to `"service_worker": "background.js"`.  I don't
know how to load it. (todo: can both be in there and it works across
both?)


## Status and to-do

It works for me but isn't well tested.

- Make it work with Chrome also: can it be the same source code or do
  we need a compiling step or separate one?
  - Then change the repo name to not say "Firefox" ?
- Making it installable on normal Firefox needs the extension to be
  signed, which requires an account and approval.


## License

CC-0
