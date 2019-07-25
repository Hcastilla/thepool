/* React y React Router */
import React from "react";
import { Route, Switch } from "react-router-dom";

/* Tema  */
import { ThemeProvider } from "@material-ui/styles";

/* Componentes */
const NewPost = Async( import('./../pages/posts/NewPost') );

/* Custom Tema */
import CustomTheme from './../theme/theme';

/* Pages */
import HomePage from './../pages/Home';

import PageResult from './../pages/Results.page';
// const PageResult = Async( import('./../pages/Results.page') );

import Async from './../helpers/asyncComponent';


class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ThemeProvider theme={CustomTheme}>
				<Switch>
					<Route
						exact
						path="/"
						component={HomePage}
					/>

					<Route path="/post/new" component={NewPost} />
					<Route path="/q/:query" component={PageResult} />

					<Route render={() => <h1>Not found</h1>} />
				</Switch>
			</ThemeProvider>
		);
	}
}

export default App;
