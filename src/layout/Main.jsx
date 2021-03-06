import Movies from '../components/Movies';
import Filter from '../components/Filter';
import Search from '../components/Search';
import Preloader from '../components/Preloader';

function Main(props) {
  const { films, search, loading, onChangeSearch, onChangeType } = props;
  const conten = loading ? <Preloader /> : <Movies films={films} />;

  return (
    <main className="container content">
      <Search search={search} onChangeSearch={onChangeSearch} />
      <Filter onChangeType={onChangeType} />
      {films.length ? conten : <h4>Nothing found</h4>}
    </main>
  );
}

export default Main;
