import React, { Component } from "react";
import Container from "../components/Layout";
export class DetailMovie extends Component {
  render() {
    return (
      <Container>
        <div className="w-full h-screen flex flex-col items-center">
          <h1 className="text-4xl text-center m-5 font-bold text-blue-900">
            DETAIL MOVIE
          </h1>
          <div className="grid grid-flow-col max-w-3xl  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              class="rounded-t-lg"
              src="https://i2.wp.com/aksesjambi.com/wp-content/uploads/2022/07/hero-main_202207.png?resize=640%2C904&ssl=1"
              alt=""
            ></img>

            <div class="p-5 ">
              <button>
                <h5 class="text-2xl font-bold text-gray-900 dark:text-white">
                  HIGH & LOW THE WORST X CROSS
                </h5>
                <p className="mb-8 text-gray-500 text-start">
                  {" "}
                  9 September 2022{" "}
                </p>
              </button>
              <p class="mb-6 justify font-normal text-gray-700 dark:text-gray-400">
                He story revolves around battle between two high school in SWORD
                area, Oya High School and Senomon Technical High School. The
                Head of Senomon Technical High School build a "three-school
                alliance" with two other school,Kamasaka High School and Ebara
                Commercial High School, and expand it's power to aim the neck of
                Oya High School. Men of Oya High suddenly caught and attacked.
                Could Fujio protect them with his own fist?
              </p>
              <div className="flex">
                <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  play Now ➤
                </button>
                <button class=" mx-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Add to Favorite ☆
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default DetailMovie;
