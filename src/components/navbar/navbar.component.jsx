import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Logo from '../../assets/logo.png';

import AtomSpinner from '@bit/bondz.react-epic-spinners.atom-spinner';

// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { signOut } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { OptionLink } from './navbar.styles';

import PropTypes from 'prop-types';

import './navbar.styles.css';

const Navbar = ({ currentUser, hidden }) => {
  // const notify = () => toast('Sign out successful!');
  return (
    <div className="navigation-wrap bg-light start-header start-style">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-md navbar-light">
              <OptionLink to='/' className="navbar-brand">
                <img src={Logo} alt="logo" />
              </OptionLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto py-4 py-md-0">
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <OptionLink to='/' className="nav-link">
                      Trang chủ
                    </OptionLink>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <OptionLink to='/shop' className="nav-link">
                      Shop
                    </OptionLink>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <OptionLink to='/search' className="nav-link">
                      Tìm kiếm
                    </OptionLink>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Thể loại
                    </a>
                    <div className="dropdown-menu">
                      <OptionLink to='/shop/hats' className="dropdown-item">
                        Mũ nam nữ
                      </OptionLink>
                      <OptionLink to='/shop/sneakers' className="dropdown-item">
                        Giày thể thao
                      </OptionLink>
                      <OptionLink to='/shop/jackets' className="dropdown-item">
                        Áo khoác
                      </OptionLink>
                      <OptionLink to='/shop/dress' className="dropdown-item">
                        Váy nữ
                      </OptionLink>
                      <OptionLink to='/shop/mensshirt' className="dropdown-item">
                        Áo nam
                      </OptionLink>
                      <OptionLink to='/shop/jean' className="dropdown-item">
                        Quần jean
                      </OptionLink>
                      <OptionLink to='/shop/balo' className="dropdown-item">
                        Balo nam nữ
                      </OptionLink>
                    </div>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    {
                      currentUser ? (
                        <OptionLink
                          className="nav-link"
                          onClick={signOut}
                          to='#'
                        >
                          Đăng xuất
                        </OptionLink>
                      ) : (
                          <OptionLink
                            className="nav-link"
                            to='/signin'
                          >
                            Đăng nhập
                          </OptionLink>
                        )
                    }
                  </li>
                  <CartIcon />
                  <AtomSpinner
                    color='#000000'
                  />
                </ul>
                {hidden ? null : <CartDropdown />}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Navbar);