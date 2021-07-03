# vue-autoroues-boilerplate
--------
this is our vue boilerplate with vue-cli-plugin-auto-routing to generate routes by files or directories, we also auto generate store module if you create store in \__contexts__/store/index.js

#### see also
- [vue-cli-plugin-auto-routing](https://github.com/ktsn/vue-cli-plugin-auto-routing)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Auto Routing
-----------
##### pages directory
	pages
	 |-- hello
	 |    |-- index.vue
	 |    |-- _helloId.vue
	 |-- test.vue

##### you will get these routes
	 - /hello
	 - /hello/:helloId
	 - /test

##### ignore file or directory

you can create file by start with __ and end ___

*see more* [vue-cli-plugin-auto-routing](https://github.com/ktsn/vue-cli-plugin-auto-routing)

## Auto register store modules
-----------
##### pages directory
	pages
	|-- user
        |-- __contexts__
            |-- store
                |-- index.js
                
##### you will get this module in store
	 - user
