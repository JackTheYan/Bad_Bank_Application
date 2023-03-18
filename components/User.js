

const { useState, useContext } = React;
function UserForm({ title, onSuccess, type = "add" }) {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useContext(UserContext);
 //  const loginCtx = useContext(LoginContext);

  function checkUser({ name, email, password }) {
    const { users = [] } = ctx;

    const item = users.find((item) => item.name === name);

    if (!item) {
      setStatus(`Error: No existing account, please create new user`);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    if (item.email !== email) {
      setStatus(`Error: Please enter email in correct form`);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    if (item.password !== password) {
      setStatus(`Error: Passcode must be greater than 8 digits`);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

   
    return true;
  }

  function validate(field, key) {
    if (!field) {
      setStatus(`Error: ${key} required`);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    const valid = {
      email: /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/,
      password: /^[\S]{8,}$/,
    };

    if (!field || (valid[key] && !valid[key].test(field))) {
      setStatus(`Error: ${key} wrong`);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    

    return true;
  }

  function handleCreate() {
    (name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    if (type === "check" && !checkUser({ name, email, password })) return;
   

    onSuccess && onSuccess({ name, email, password, balance: 100 });
    // ctx.users.push({ name, email, password, balance: 100 });
    // setShow(false);
  }
  return (
    <>
      Name
      <br />
      <input
        type="input"
        className="form-control"
        id="name"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <br />
      Email address
      <br />
      <input
        type="input"
        className="form-control"
        id="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      Password
      <br />
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <br />
      <div>
        <button disabled={!name && !email && !password} type="submit" className="btn btn-light" onClick={handleCreate}>
          {title}
        </button>
        {status && (
          <div class="alert alert-danger" role="alert">
            {status}
          </div>
        )}
      </div>
    </>
  );
}
