import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Nav from './../components/Nav';
import Home from './../pages/Home';
import NewPost from './../pages/posts/NewPost';


class App extends React.Component{

  render(){
    return(
      <div>
        <Nav/>
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Home initialData={this.props.initialData} />} />
            <Route path="/post/new" render={() => <NewPost /> } />
            <Route render={() => <h1>Not found</h1>} />
          </Switch>
        </div>

      </div>
    )
  }
}

export default App;