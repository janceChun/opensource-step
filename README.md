# Create First  Open Source JavaScript Library

following by [How to Write an Open Source JavaScript Library](https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-configuring-npm-and-creating-a-package-json)

### configuring npm 

* npm set init-author-name 'janceChun'
* npm set init-author-url 'https://jancechun.github.io/janceChun/'
* npm set init-license 'MIT'
* npm set save-exac true
* cat ~/.npmrc
* npm  adduser
* npm init 
 
### publish git
* git add -A
* git commit -m  'add init'
* git push

### publish npm 
 * npm pubslih 
 * npm info
  
### git tag 
 * git tag 0.0.1
 * git push --tags
 
### publish beta version
 *  git tag 0.1.0-beta.0
 *  git push
 *  git push --tags
 *  npm publish --tag beta
 *  npm info 
 (
  u can run git tag 0.1.0-beta.1
  and then git push --tags && npm publish --tag beta 
  to update the  npm tag packe.
  the  customer can npm install janceDemo@beta to update beta package
 )
 
### setting 
* npm i -D mocha chai
 
### releases with  semantic-release
* npm install -g semantinc-release-cli
* semantic-release-cli setup
* add .travis.yml

```
before_script:
  - npm prune
script:
  - npm run test
after_success:
  - npm run semantic-release
```

### writing conventional commits with commitizen
* npm install -D commitizen cz-conventional-changelog
* add package.json

```
 "scripts": {
    "commit":"git-cz",
    "test": "mocha src/index.test.js -w",
    "semantic-release": "semantic-release pre && npm publish && semantic-release post"
  },
   "czConfig":{
      "path":"node_modules/cz-conventional-changelog"
   }
     
```

* git add -A
* npm run commit

### commiting a new feature width commitizen
* npm run commit

```
? Select the type of change that you're committing: feat:     A new feature
? Denote the scope of this change ($location, $browser, $compile, etc.):
 random
? Write a short, imperative tense description of the change:
 add avility to get an array of names
? Provide a longer description of the change:
 if you pass a number to the random function . you will receive an array with the number of randomw
item
? List any breaking changes:
 close #2
``` 


