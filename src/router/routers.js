import Loadable from '../components/loadable/loadable';
import Loading from '../components/loadable/loading';

const Dashboard = Loadable({
  loader:() => import('../container/dashboard'),
  loading:Loading
})

const Article = Loadable({
  loader:() => import('../container/article'),
  loading:Loading
})

const Setting = Loadable({
  loader:() => import('../container/setting'),
  loading:Loading
})

export {
  Dashboard,
  Article,
  Setting
}