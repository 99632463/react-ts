import {Dashboard,Article,Setting} from './routers';

export default [
  {
    pathname:'/dashboard',
    component:Dashboard,
    exact:false,
    title:'仪表盘',
    icon:'dashboard'
  },
  {
    pathname:'/article',
    component:Article,
    exact:false,
    title:'文章管理',
    icon:'unordered-list'
  },
  {
    pathname:'/setting',
    component:Setting,
    exact:false,
    title:'设置',
    icon:'setting'
  }
]