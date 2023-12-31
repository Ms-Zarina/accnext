function Header(props) {
  

  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={60} height={60} src="/img/logo.jpg" alt="logo"/>
        <div className="headerInfo">
          <h3 className="text-uppercase">AccNext</h3>
          <p className="opacity-5">Магазин аксессуаров</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick = {props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="cart"/>
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="user"/>
        </li>
      </ul>
    </header>
  );
}

export default Header;
