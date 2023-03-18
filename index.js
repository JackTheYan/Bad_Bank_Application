
const { useState, useEffect } = React;

function Spa() {

  
  
  const defaultUser = [{name:'abel',email:'abel@mit.edu',password:'secreted',balance:100}];

  // const [curUser, setCurUser] = useState('abel')
  const [users, setUser] = useState(defaultUser)
  useEffect(() => {

    const userInfo = window.sessionStorage.getItem('users')
    !userInfo && window.sessionStorage.setItem('users',JSON.stringify(defaultUser) )
}, [])

  function setUserInfo(data) {
    setUser(data)
  }

  
  
  return (
    <HashRouter>
      
      <UserContext.Provider value={{
        users: users,
        login: [],
        // setLogin:
        setUser: (data) => setUserInfo(data)
        }}>
          <NavBar/>
   
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
       
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
