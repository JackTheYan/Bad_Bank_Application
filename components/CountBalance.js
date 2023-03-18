const { useState, useContext, useEffect } = React;
function CountBalance({ title, type, onSuccess }) {
  const [cur, setCur] = useState("");
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(undefined);

  const [defaultCount, setDefault] = useState(0);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const curUser = window.sessionStorage.getItem("curUser");
    const userInfo = JSON.parse(window.sessionStorage.getItem("users"));

    const info = userInfo.find((item) => item.name === curUser);
    setUsers(userInfo);
    setCur(curUser);
    setDefault(info.balance);
  }, []);

  function handleSubmit() {


    if(Number.isNaN(Number(count))) {
      setStatus(`Error: Not A Number`);
      setTimeout(() => setStatus(""), 3000);
      return;
    }
    if (count <= 0) {
      setStatus(`Error: Input must be greater than 0`);
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    const newBalance =
      type === "add"
        ? Number(count) + Number(defaultCount)
        : Number(defaultCount) - Number(count);

    if (newBalance < 0) {
      setStatus(`Error: Input must be less than balance`);
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    setDefault(newBalance);
    setCount("");

    users.forEach((item) => {
      if (item.name === cur) {
        item.balance = newBalance;
      }
    });

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);

    window.sessionStorage.setItem("users", JSON.stringify(users));

    onSuccess && onSuccess(count);
  }

  return (
    <div>
      <div>Balance: {defaultCount}</div>
      <div>{title}</div>
      <input
        // type="number"
        className="form-control"
        id="name"
        placeholder="Enter number"
        value={count}
        onChange={(e) => {
          setCount(e.currentTarget.value);
        }}
      />
      <br />
      <div>
        <button
          className="btn btn-light"
          disabled={!count}
          onClick={handleSubmit}
        >
          Submit
        </button>
        {status && (
          <div class="alert alert-danger" role="alert">
            {status}
          </div>
        )}

        {success && (
          <div class="alert alert-success" role="alert">
            {type === "add" ? "Success Deposit" : "Success Withdraw"}
          </div>
        )}
      </div>
    </div>
  );
}


