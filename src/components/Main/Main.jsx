import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import Nav from "../Navigation/Navigation";
import Header from "../Header/Header";
import About from "../About/About";

function Main({
  articles,
  onSaveArticle,
  savedArticles,
  onRemoveArticle,
  loading,
  isLoggedIn,
  searchTerm,
  onSignInClick,
  isHomePage,
  handleLogOut,
  handleSignInClick,
  activeModal,
  setSearchTerm,
  handleSearch
}) {
  return (
    <main>
      <div>
        {isHomePage && (
          <Header 
            setSearchTerm={setSearchTerm} 
            onSearch={handleSearch} 
            handleLogOut={handleLogOut}
            handleSignInClick={handleSignInClick}
            isLoggedIn={isLoggedIn}
            activeModal={activeModal}
          />
        )}
      </div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {searchTerm && articles.length === 0 && <NothingFound />}

          {articles.length > 0 && (
            <section className="cards">
              <h2 className="cards__result">Search results</h2>
              <NewsCardList
                articles={articles}
                onSaveArticle={onSaveArticle}
                savedArticles={savedArticles}
                onRemoveArticle={onRemoveArticle}
                isLoggedIn={isLoggedIn}
                onSignInClick={onSignInClick}
              />
            </section>
          )}
        </>
      )}
      {isHomePage && <About />}
    </main>
  );
}

export default Main;
