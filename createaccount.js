

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const ctx = React.useContext(UserContext);

  function createSuccess(data) {
     ctx.users.push({...data, balance: 100 });

    const users = JSON.parse(window.sessionStorage.getItem('users') || []);
    users.push({...data, balance: 100 })

    ctx.setUser(users)
    window.sessionStorage.setItem('users', JSON.stringify(users))
    setShow(false);
  }

 

  function clearForm() {
   
    setShow(true);
  }

  return (
    <div>
      <Card
        bgcolor="dark"
        header="Create Account"
        // status={status}
        body={
          show ? (
            <>
            <UserForm title="Create Account" onSuccess={createSuccess}/>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                Add another account
              </button>
            </>
          )
        }
      />
     
    </div>
  );
}
