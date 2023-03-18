function Login() {
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  

  function loginSuccess(data) {

    ctx.login.push({login: true, name: data.name});

    window.sessionStorage.setItem('curUser', data.name)
    window.location.reload();

  
    setShow(false);
  }

  return (
    <div>
      <Card
        bgcolor="dark"
        header="Login"
        // status={status}
        body={
          show ? (
            <>
            <UserForm title="Login" type="check" onSuccess={loginSuccess}/>
            </>
          ) : (
            <>
              <h5>Success</h5>
              
            </>
          )
        }
      />
    </div>
  );
}
