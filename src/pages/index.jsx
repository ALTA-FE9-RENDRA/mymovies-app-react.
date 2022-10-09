import { useState, useEffect } from "react";
import "styles/App.css";
import axios from "axios";

import { WithRouter } from "utils/Navigation";
import { ButtonPrimary } from "components/Button";

import Container from "components/Layout";
import Loading from "components/Loading";
import Card from "components/Card";

// ======== SWEET ALERT ==============
import Swal from "sweetalert2";

function App(props) {
  const [datas, setDatas] = useState([]);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  function handleFav(movie) {
    const getMovies = localStorage.getItem("favMovies");
    const parsedMovies = JSON.parse(getMovies);
    if (getMovies) {
      let res = parsedMovies.find(({ id }) => id === movie.id);
      fetchData();
      // console.log(res.id);
      if (parsedMovies === movie.id) {
        // alert(`${movie.title} sudah ada diFavorites`);
        Swal.fire(`${movie.title}`, "already in Favorites", "warning");
      } else {
        parsedMovies.push(movie);
        const temp = JSON.stringify(parsedMovies);
        localStorage.setItem("favMovies", temp);
      }
    } else {
      // alert("film sudah ada diFavorites ");
      const temp = JSON.stringify([movie]);
      localStorage.setItem("favMovies", temp);
    }
  }

  function fetchData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMBD_KEY}&page=${page}`
      )
      .then((res) => {
        const { results } = res.data;
        const newPage = page + 1;
        const temp = [...datas];
        temp.push(...results);
        setDatas(temp);
        setPage(newPage);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container>
      <div className="w-full flex flex-col ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4">
          {loading
            ? skeleton.map((item) => <Loading key={item} />)
            : datas.map((data) => (
                <Card
                  key={data.id}
                  image={data.poster_path}
                  title={data.title}
                  onNavigate={() => props.navigate(`/detail/${data.id}`)}
                  addFavorite={() => handleFav(data)}
                />
              ))}
        </div>
        <ButtonPrimary
          label="Load more"
          onClick={() => {
            fetchData();
          }}
        />
      </div>
    </Container>
  );
}

export default WithRouter(App);
