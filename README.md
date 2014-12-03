jquery.autoapp
==============

功能：
> 手机安装了自己的app就打开 没有安装就跳转到app下载页（如App store） 
> 还可以根据URL scheme进行app内部跳转

使用：
==============

### 场景一：app下载按钮（以安装就打开app）
```html
<a class="app-download" href="javascript:;">下载本站App</a>
```
```javascript
$(function() {
	$(".app-download").autoApp({
		appArgument: "weixin://",			//你的app私有scheme
		iosUrl: "ios版app下载页面",			//一般为app store地址
		androidUrl: "android版app下载页面"	//直接下载地址或者页面都是可以的
	});
});
```

### 场景二：打开app的某个界面（如果没有安装app 就跳转到下载页面）
```html
<a class="app-download" href="javascript:;" data-app-argument="weixin://user/123456">查看此用户</a>
<!-- js代码使用场景一中的即可 -->
<!-- 这里假设weixin://user/123456可以在app中打开用户id为123456的用户界面 -->
```