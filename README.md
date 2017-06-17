# novonity-file-replace
# Installation
```bash
$ npm i novonity-file-replace
```
# CLI
replace is a command line utility for replace the javascript object file, the javascript object format is dictionaries,the file is generally system configuration file
**For example:**
```javascript
file-replace -f dist/config.js -p "[{'k':'debug','v':false}]" -r
```
**options include**
- -f which file would be modified
- -p this is array and inner object format is dictionaries，the content of V will be the value of replacing value of k
- -r whether to replace ' into "