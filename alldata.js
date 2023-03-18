
function AllData() {
  const [users, setUsers] = useState([])

  useEffect(() => {
   const info = window.sessionStorage.getItem('users')
   setUsers(info ? JSON.parse(info) : [])
  }, [])


  return (
    <>
      <h5>All Data in Store</h5>
      {users.map((item, index) => (
        <div className="card" style={{ width: "18rem", marginBottom: 10, background: '#343a40', color: '#fff', }}>
          <div className="card-body">
            <h5 className="card-title">user   {index}</h5>
            <p className="card-text">name: {item.name}</p>
            <p className="card-text">email: {item.email}</p>
            <p className="card-text">balance: {item.balance}</p>
          </div>
        </div>
      ))}

      <br />
    </>
  );
}
