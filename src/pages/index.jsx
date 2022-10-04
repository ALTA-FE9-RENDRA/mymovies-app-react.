import { Component } from "react";
import { faker } from "@faker-js/faker";
import "../styles/App.css";

import Container from "../components/Layout";
import Loading from "../components/Loading";
import Card from "../components/Card";
// import { ButtonPrimary } from "../components/Button";

class App extends Component {
  state = {
    title: "Welcome",
    datas: [],
    skeleton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ loading: true });
    let dataTemp = [];
    for (let i = 0; i < 10; i++) {
      const temp = {
        id: i + 1,
        title: faker.name.fullName(),
        image:
          "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      };
      dataTemp.push(temp);
    }
    setTimeout(() => {
      this.setState({
        loading: false,
        datas: dataTemp,
        title: "WELCOME ",
      });
    }, 3000);
  }

  render() {
    return (
      <Container>
        <div>
          {/* <p>{this.state.title} | CLASS COMPONENT</p> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4">
            {this.state.loading
              ? this.state.skeleton.map((item) => <Loading key={item} />)
              : this.state.datas.map((data) => (
                  <Card key={data.id} image={data.image} title={data.title} />
                ))}
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
