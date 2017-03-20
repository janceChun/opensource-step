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
 