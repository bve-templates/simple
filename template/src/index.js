/**
 * 修改index.html页面会重新加载
 * 如果index.html不常修改，即使修改也是手动刷新，则可以去掉这个require
 */
// import { Route, HashRouter, Switch } from 'react-router-dom';
// import Index from './routers/home'
if (process.env.NODE_ENV === 'development') {
  require('./index.html')
}

import './index.scss'
console.log('hello bv!')