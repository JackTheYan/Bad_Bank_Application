
const { useEffect, useState } = React;
function Balance() {
  const [users, setUsers] = useState([]);
  const [cur, setCur] = useState('');
  useEffect(() => {
    const curUser = window.sessionStorage.getItem("curUser");
    const userInfo = JSON.parse(window.sessionStorage.getItem("users"));


    const info = userInfo.find((item) => item.name === curUser);
    setUsers(info)
    setCur(curUser)

  }, [])
  return (
    <div className="card" style={{ width: "18rem", background: '#343a40' , color: '#fff', marginBottom: 10 }}>
      <div className="card-body">
        {/* <h5 className="card-title">user {index}</h5> */}
        <p className="card-text">name: {cur}</p>
        {/* <p className="card-text">email: {item.email}</p> */}
        <p className="card-text">balance: {users.balance}</p>
      </div>
    </div>
  );
}
