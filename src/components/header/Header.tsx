import './header.scss';

const Header = () => {
  return (
    <div className='container'>
      <header className='navbar-fixed-top'>
        <nav>
          <ul>
            <li className='user-name'>John</li>
            <li>
              <i className='fas fa-user-circle icon'></i>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
