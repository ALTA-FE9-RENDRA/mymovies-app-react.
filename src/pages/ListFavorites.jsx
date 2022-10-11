import { useSelector, useDispatch } from "react-redux";

import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/hooks/useTitle";

import Container from "components/LayoutFav";
import CardFav from "components/CardFav";

// ======== SWEET ALERT ==============
import Swal from "sweetalert2";
import { setFavorites } from "utils/redux/reducers/reducer";
function ListFavorites(props) {
  const favorites = useSelector((state) => state.data.favorites);
  const dispatch = useDispatch();
  useTitle("My Favorites");

  function handleRemove(movie) {
    let newDatas = favorites.filter(({ id }) => {
      return id !== movie.id;
    });
    newDatas.join(" - ");
    const parsed = JSON.stringify(newDatas);
    dispatch(setFavorites(parsed));
    localStorage.setItem("favMovies", parsed);
    Swal.fire(`${movie.title}`, "removed from Favorites", "success");
    dispatch(setFavorites(newDatas));
  }

  return (
    <Container className="bg-white h-full dark:bg-zinc-800 pt-10 overflow-auto ">
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 bg-white dark:bg-zinc-800 pt-10 ">
        {favorites.map((data) => (
          <CardFav
            key={data.id}
            image={data.poster_path}
            title={data.title}
            onNavigate={() => props.navigate(`/detail/${data.id}`)}
            addFavorite={() => handleRemove(data)}
          />
        ))}
      </div>
    </Container>
  );
}

export default WithRouter(ListFavorites);
