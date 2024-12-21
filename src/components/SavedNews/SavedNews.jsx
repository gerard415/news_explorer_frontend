import NewsCard from "../NewsCard/NewsCard";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import "./SavedNews.css";
import Nav from "../Navigation/Navigation";

function SavedNews({ savedArticles, onRemoveArticle, keywords, handleLogOut, handleSignInClick, isLoggedIn, activeModal }) {
  return (
    <div className="saved">
      <Nav
          onLogOut={handleLogOut}
          handleSignInClick={handleSignInClick}
          isLoggedIn={isLoggedIn}
          activeModal={activeModal}
        />
      <SavedNewsHeader savedArticles={savedArticles} keywords={keywords} />
      <ul className="saved__news-list">
        {savedArticles.map((item) => (
          <NewsCard
            key={item.url}
            item={item}
            onRemoveArticle={onRemoveArticle}
          />
        ))}
      </ul>
    </div>
  );
}

export default SavedNews;
