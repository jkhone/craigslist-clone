import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Subcategories from './Subcategories'
import CreatePost from './CreatePost'
import Post from './Post'
import Main from './Main'

import '../styles/styles.css'

export default props => {
  return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route  exact path="/:slug" component={Subcategories} />
            <Route  exact path="/:slug/post/" component={CreatePost} />
            <Route  exact path="/post/:id/" component={Post} />
          </Switch>
        </div>
      </Router>
  )
}