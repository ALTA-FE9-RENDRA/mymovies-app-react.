import React, { Component } from "react";
import Container from "../components/Layout";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { WithRouter } from "../utils/Navigation";
class ListFavorites extends Component {
  state = {
    datas: [],
    skeleton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      this.setState({ datas: parsedMovies, loading: false });
    }
  }

  handleRemove() {
    // task membuat remove favorite
  }

  render() {
    return (
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4">
          {this.state.loading
            ? this.state.skeleton.map((item) => <Loading key={item} />)
            : this.state.datas.map((data) => (
                <Card
                  key={data.id}
                  image={data.poster_path}
                  title={data.title}
                  onNavigate={() => this.props.navigate(`/detail/${data.id}`)}
                  addFavorite={() => this.handleFav(data)}
                />
              ))}
        </div>
      </Container>
    );
  }
}

export default WithRouter(ListFavorites);
