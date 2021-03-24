import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'


export const routes = [
  {
    name: 'Home',
    path: '/',
    fn: Home
  },
  {
    name: 'About',
    path: '/about',
    fn: About
  },
  {
    name: 'Skills',
    path: '/skills',
    fn: Skills
  },
  {
    name: 'Projects',
    path: '/projects',
    fn: Projects
  },
  {
    name: 'Contact',
    path: '/contact',
    fn: Contact
  }
]