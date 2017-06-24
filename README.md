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
file-replace -f dist/config.js -p "[{'k':'debug','v':false},{'k':'document_input_dir','v':'d:/court/documents/input'}]" -r

***attension*** 
1. '-p' parameter cannot contain blank charset
2. if 'v' contain '$' charset, need to append '\\' charset  to '$' charset; 
for example:
file-replace -f dist/config.js -p "[{'k':'debug','v':false},{'k':'debug','v':'\\${output_dir}'}]" -r
```
**options include**
- -f which file would be modified
- -p this is array and inner object format is dictionaries，the content of V will be the value of replacing value of k
- -r whether to replace ' into "