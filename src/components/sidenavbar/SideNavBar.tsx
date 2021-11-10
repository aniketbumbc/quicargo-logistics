import Delivery from '../delivery/Delivery';
import { IMAGE_LOGO } from '../../constant/constant';
import './sidenavbar.scss';

const SideNavBar = () => {
  return (
    <>
      <section className='navbar'>
        <aside className='sidebar'>
          <header>
            <img src={IMAGE_LOGO} alt='Quicargo' className='sidebar-img' />
          </header>

          <nav className='sidebar-nav'>
            <ul>
              <li>
                <a href='#/'>
                  <span>
                    <i className='fas fa-plus'></i> New Delivery
                  </span>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <span>
                    <i className='fas fa-shipping-fast'></i> My Deliveries
                    <span className='badge'>4</span>
                  </span>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <span>
                    <i className='fas fa-history'></i> History
                    <span className='badge'>2</span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <Delivery />
      </section>
    </>
  );
};

export default SideNavBar;
