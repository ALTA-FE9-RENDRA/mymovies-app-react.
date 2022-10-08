import { Component } from "react";
import "../styles/App.css";

import axios from "axios";

import Container from "components/Layout";
import Loading from "components/Loading";
import Card from "components/Card";
import { ButtonPrimary } from "components/Button";

class App extends Component {
  state = {
    title: "Welcome",
    datas: [],
    skeleton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loading: true,
    page: 1,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMBD_KEY}&page=${this.state.page}`
      )
      .then((res) => {
        const { results } = res.data;
        const newPage = this.state.page + 1;
        const temp = [...this.state.datas];
        temp.push(...results);
        this.setState({ datas: temp, page: newPage });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Container>
        <div className="w-full flex flex-col ">
          <h1 className="text-4xl text-center m-5 font-bold text-blue-900">
            NOW PLAYING
          </h1>
          {/* <p>{this.state.title} | CLASS COMPONENT</p> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4">
            {this.state.loading
              ? this.state.skeleton.map((item) => <Loading key={item} />)
              : this.state.datas.map((data) => (
                  <Card
                    key={data.id}
                    image={data.poster_path}
                    title={data.title}
                    judul={data.title}
                  />
                ))}
          </div>
          <ButtonPrimary
            label="Load more"
            onClick={() => {
              this.fetchData();
            }}
          />
        </div>
      </Container>
    );
  }
}

export default App;
