import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Logo from '../../assets/logo.png';

import AtomSpinner from '@bit/bondz.react-epic-spinners.atom-spinner';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { OptionLink } from './navbar.styles';

import './navbar.styles.css';

const Navbar = ({ currentUser, hidden }) => {
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
                      Home
                    </OptionLink>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <OptionLink to='/shop' className="nav-link">
                      Shop
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
                      Genre
                    </a>
                    <div className="dropdown-menu">
                      <OptionLink to='/shop/hats' className="dropdown-item">
                        Hats
                      </OptionLink>
                      <OptionLink to='/shop/sneakers' className="dropdown-item">
                        Sneakers
                      </OptionLink>
                      <OptionLink to='/shop/jackets' className="dropdown-item">
                        Jackets
                      </OptionLink>
                      <OptionLink to='/shop/womens' className="dropdown-item">
                        Womens
                      </OptionLink>
                      <OptionLink to='/shop/mens' className="dropdown-item">
                        Mens
                      </OptionLink> 
                    </div>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    {
                      currentUser ? (
                        <OptionLink as='div' className="nav-link" onClick={() => auth.signOut()}>
                          Logout
                        </OptionLink>
                      ) : (
                        <OptionLink className="nav-link" to='/signin'>
                            Signin
                        </OptionLink>
                      )
                    }
                  </li>
                  <CartIcon />
                  <AtomSpinner
                    color='#000000'
                    size='100'
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Navbar);