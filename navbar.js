const Button = ReactBootstrap.Button;
const Tooltip = ReactBootstrap.Tooltip;
const OverlayTrigger = ReactBootstrap.OverlayTrigger;

const { useEffect, useState, useContext } = React;
const { useLocation } = ReactRouterDOM; 

let NavList = [
  {
    name: "CreateAccount",
    path: "CreateAccount",
  },
  {
    name: "Login",
    path: "login",
  },
  {
    name: "Deposit",
    path: "deposit",
  },
  {
    name: "Withdraw",
    path: "withdraw",
  },
  {
    name: "Balance",
    path: "balance",
  },
  {
    name: "AllData",
    path: "alldata",
  },
];

function NavItem({ path, name, key, pathname }) {
  // 是否高亮
  const isHigh = `/${path}/` === pathname;
  
  return (
    <li key={key} className="nav-item">
      <OverlayTrigger
        key={"bottom"}
        placement={"bottom"}
        overlay={<Tooltip id={`tooltip-${"bottom"}`}>{name}</Tooltip>}
      >
        <a  style={{
          color: isHigh ? '#007bff' : 'rgba(0,0,0,.5)'
        }} className="nav-link" href={`#/${path}/`}>
          {name}
        </a>
      </OverlayTrigger>
    </li>
  );
}

function NavBar() {
  const location = useLocation();
  const { pathname = '' } = location;
  const [nav, setNav] = useState([])
  const ctx = useContext(UserContext)


  useEffect(() => {


   const info =  window.sessionStorage.getItem('curUser')
    let list = NavList;

    if(!info) {
      list.splice(2, 3);

    } 
    setNav(list)
  }, [])

  
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          BadBank
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"></li>
            {nav.map((item) => (
              <NavItem pathname={pathname} key={item.path} path={item.path} name={item.name} />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
