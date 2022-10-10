// import React, { useState, useEffect } from "react";

import { useTitle } from "utils/hooks/useTitle";
import { WithRouter } from "utils/Navigation";
import { useFetchGet } from "utils/hooks/useFetchGet";

import Container from "components/Layout";
import { ButtonFavorite, ButtonWatch } from "components/Button";

const DetailMovie = (props) => {
  const { id_movie } = props.params;
  const [data] = useFetchGet(
    `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_TMBD_KEY}&append_to_response=videos`
  );
  // const [videos, setVideos] = useState([]);
  useTitle(data.title);

  // useEffect(() => {
  //   data.videos !== undefined && setVideos(data.videos.results);
  // }, [data]);

  return (
    <Container>
      <div
        style={{
          backgroundImage: `url(
            https://image.tmdb.org/t/p/original${data?.backdrop_path}
          )`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backfaceVisibility: "50%",
        }}
        className="w-full pt-10 h-screen  flex flex-col items-center"
      >
        <div className="grid grid-flow-col  max-w-3xl  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg"
            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            alt={props.title}
          ></img>

          <div className="p-5 ">
            <button>
              <h5 className="text-2xl text-start font-bold text-gray-900 dark:text-white">
                {data?.title}
              </h5>
              <p className="mb-8 text-gray-500 text-start">
                {data?.release_date}
              </p>
            </button>
            <p className="mb-6 justify font-normal text-gray-700 dark:text-gray-400">
              {data?.overview}
            </p>
            <div className="flex gap-5">
              <ButtonWatch label="Watch Now" />
              <ButtonFavorite label="Favorite" />
            </div>
          </div>
        </div>
        {/* {videos.map((video) => (
          <iframe
            id={video.id}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ))} */}
      </div>
    </Container>
  );
};

export default WithRouter(DetailMovie);
