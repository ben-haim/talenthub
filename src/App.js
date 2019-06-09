import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlus,
  faUser,
  faBriefcase,
  faUserFriends,
  faChartPie,
  faFileImage,
  faCheck,
  faChevronLeft,
  faRocket,
  faBullhorn,
  faGraduationCap,
  faCode,
  faBicycle,
  faMotorcycle,
  faPlane,
  faSearch,
  faExclamation
} from '@fortawesome/free-solid-svg-icons'

import './App.scss'

import Home from './pages/home'
import PostJob from './pages/post_job'
import Jobs from './pages/jobs'
import Talents from './pages/talents'
import AddTalent from './pages/add_talent'

import Header from './components/header'

library.add(
  faPlus,
  faUser,
  faBriefcase,
  faUserFriends,
  faChartPie,
  faFileImage,
  faCheck,
  faChevronLeft,
  faRocket,
  faBullhorn,
  faGraduationCap,
  faCode,
  faBicycle,
  faMotorcycle,
  faPlane,
  faSearch,
  faExclamation
)

function App() {
  return (
    <Router>
      <Header />

      <Route exact path="/" component={Home} />
      <Route exact path="/post_job" component={PostJob} />
      <Route path="/jobs/:query?" render={props => <Jobs {...props} />} />
      <Route path="/talents/:query?" component={Talents} />
      <Route exact path="/add_talent" component={AddTalent} />
    </Router>
  );
}

export default App
