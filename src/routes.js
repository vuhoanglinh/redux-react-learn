import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Course from  './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  <Route path="/" components={App}>
    <IndexRoute components={HomePage}/>
    <Route path="about" components={AboutPage}/>
    <Route path="courses" components={Course}/>
    <Route path="course" components={ManageCoursePage}/>
    <Route path="course/:id" components={ManageCoursePage}/>
  </Route>
);
