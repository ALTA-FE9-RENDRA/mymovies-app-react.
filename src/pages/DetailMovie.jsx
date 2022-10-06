import React, { Component } from "react";
import axios from "axios";

import { WithRouter } from "../utils/Navigation";

import Container from "../components/Layout";
class DetailMovie extends Component {
  state = {
    data: {},
    videos: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { id_movie } = this.props.params;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_TMBD_KEY}&append_to_response=videos`
      )
      .then((res) => {
        const { data } = res;
        this.setState({ data, videos: data.videos.results });
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Container>
        <div className="w-full h-screen flex flex-col items-center">
          <h1 className="text-4xl text-center m-5 font-bold text-blue-900">
            DETAIL MOVIE
          </h1>
          <div className="grid grid-flow-col max-w-3xl  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src={`https://image.tmdb.org/t/p/w500${this.state.data?.poster_path}`}
              alt={this.state.title}
            ></img>

            <div className="p-5 ">
              <button>
                <h5 className="text-2xl text-start font-bold text-gray-900 dark:text-white">
                  {this.state.data?.title}
                </h5>
                <p className="mb-8 text-gray-500 text-start">
                  {this.state.data?.release_date}
                </p>
              </button>
              <p className="mb-6 justify font-normal text-gray-700 dark:text-gray-400">
                {this.state.data?.overview}
              </p>
              <div className="flex">
                <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  play Now ➤
                </button>
                <button className=" mx-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Add to Favorite ☆
                </button>
              </div>
            </div>
          </div>
          {/* {this.state.videos.map((video) => (
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
  }
}

export default WithRouter(DetailMovie);
