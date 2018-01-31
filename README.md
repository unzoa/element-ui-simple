# element-ui + vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 配置准备

1,api/api.js 获取数据，公用方法

2,vuex
	
	index
	getter
		computed:{
			...mapGetters([''])//获取state
		}
	actions
		method:{
			...mapActions([''])//唤醒事件提交，到mutations改变状态
		}
	mutations

3,测试

### Router

```bash
	|-app
	|-|-home
	|-|-|-pages
	|-|-login
	|-|-welcome
```
### Home 实现sideMenu & TabBar

