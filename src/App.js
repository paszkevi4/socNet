import React from 'react';
import './App.sass';
import {BrowserRouter,
		HashRouter,
		Route,
		withRouter} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux'

import Header from './components/Header/header'
import Sidebar from './components/Sidebar/sidebar'
import DialogsContainer from './components/Dialogs/dialogsContainer'
import UsersPageContainer from './components/UsersPage/usersPageContainer'
import Friends from './components/Friends/friends'
import News from './components/News/news'
import Login from './components/Login/loginPage'
import Music from './components/Music/music.jsx'
import Settings from './components/Settings/settings.jsx'
import store from "./Redux/reduxStore";
import ProfileContainer from "./components/Profile/profileContainer";
import MyProfileContainer from "./components/MyProfile/MyProfileContainer.jsx";
import HeaderContainer from "./components/Header/headerContainer";
import {initializeAppThunk} from "./Redux/appReducer";
import Preloader from './components/common/Preloader/preloader'
import {getUserId,
		getIsAuth} from './Redux/selectors'


class App extends React.Component {
	componentDidMount() {
		this.props.initializeAppThunk();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<HashRouter>
				{ this.props.isAuth || <Login /> }
				{ this.props.isAuth && <div className='main'>
					<HeaderContainer />
					{/*<Sidebar userId={this.props.userId}/>*/}
					<MyProfileContainer />
					<div className='mainContent'>
						<Route path='/profile/:userId' render= { () => <ProfileContainer /> }/>
						<Route path='/dialogs/:userId?' render= { () => <DialogsContainer /> }/>
						<Route path='/userspage' render= { () => <UsersPageContainer /> }/>
						<Route path='/friends' render= { () => <Friends /> }/>
						<Route path='/news' render= { () => <News />} />
						<Route path='/music' render= { () => <Music />} />
						<Route path='/settings' render= { () => <Settings />} />
						<Route path='/login' render= { () => <Login />} />
					</div>
				</div>}
			</HashRouter>
		)
	}

}

let mapStateToProps = (state) => ({
	initialized: state.app.initialized,
	/*userId: getUserId(state),*/
	isAuth: getIsAuth(state),
})

const AppContainer = compose(
	withRouter,
	connect (mapStateToProps, {initializeAppThunk})) (App)

const MainApp = (props) => {
	return <HashRouter>
		<Provider store={store} >
			<AppContainer />
		</Provider>
	</HashRouter>
}

export default MainApp;
