import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import Nav from "../Navigation/Navigation";

function Header({ onSearch, setSearchTerm, handleLogOut, handleSignInClick, isLoggedIn, activeModal, isHomePage
 }) {
  return (
    <header className="header">
      <div className="header__nav">
        <Nav
            onLogOut={handleLogOut}
            handleSignInClick={handleSignInClick}
            isLoggedIn={isLoggedIn}
            activeModal={activeModal}
          />
      </div>
      <div className="header__container">
        <h1 className="header__title">What&apos;s going on in the world?</h1>
        <p className="header__caption">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm onSearch={onSearch} setSearchTerm={setSearchTerm} />
      </div>
    </header>
  );
}

export default Header;
