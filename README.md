# NiD
## sicial-network!
### Open [site.refit.by](http://site.refit.by/)

Create with react & redux.
________________
API:
- api.js
exp: 
    getUsers(usersOnPage, currentPageUsers) {
        return instance.get(`users?count=${usersOnPage}&page=${currentPageUsers}`).then(respons => {
            return respons.data
        })
    }
________________
Business Logic Layer (BLL, Redux):
- redux -> redux-store.js   :  turnOn applyMiddleware(thunk)
- redux -> xxx-reducer.js   :  dispatch, inicialState, thunk

________________
User Interface (UI, React):
- index.jsx (BrowserRouter, Provider)
- App.jsx (<Route path='/Profile/:userId?' render={() =>
                                <ProfileContainer />} />)
- components -> ...otherFiles

- otherFiles : XXXContainer.jsx (
    1. class, ----
    2. componentDidMount(), -----
    3. render() {JSX ...this.props}, -----
    4. mapStateToProps = state => {
    return {
        usersData: state.usersPage.usersData
    }, -----
    5. compose(connect(mapStateToProps, { setUsersPage, getUsers, follow, unfollow }),withAuthRedirect)(UsersContainer), ------
),
XXX.jsx (
    const Users = (props) => {
    return <SomeComponent />
)
