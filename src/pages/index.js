import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'


export const routes = [
  {
    name: 'Home',
    path: '/',
    fn: Home,
    cy: 'link__home'
  },
  {
    name: 'About',
    path: '/about',
    fn: About,
    cy: 'link__about'
  },
  {
    name: 'Skills',
    path: '/skills',
    fn: Skills,
    cy: 'link__skills'
  },
  {
    name: 'Projects',
    path: '/projects',
    fn: Projects,
    cy: 'link__projects'
  },
  {
    name: 'Contact',
    path: '/contact',
    fn: Contact,
    cy: 'link__contact'
  }
]