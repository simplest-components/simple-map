import { SimpleMap } from "simple-components-map";
import { Box } from "@mui/material";
import mapa from "./mapa.jpg";
import keys from "./key.png";
import cat from "./cat.png";
import wallet from "./wallet.png";
import React, { useState, useEffect } from "react";

function App() {
  const { innerHeight } = window;
  const [objects, setObjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let aux = [];
    aux.push({
      img: keys,
      x: Math.random() * 300,
      y: Math.random() * 300,
    });

    let xCat = Math.random() * (850 - 300) + 300;
    let yMin = xCat < 550 ? 300 : 0;

    aux.push({
      img: cat,
      x: xCat,
      y: Math.random() * (700 - yMin) + yMin,
    });
    aux.push({
      img: wallet,
      x: Math.random() * 300,
      y: Math.random() * (700 - 450) + 450,
    });

    setObjects(aux);
    setIsLoading(false);
  }, []);

  const generateData = () => {
    let aux = [];
    aux.push({
      img: keys,
      x: Math.random() * 300,
      y: Math.random() * 300,
    });

    let xCat = Math.random() * (850 - 300) + 300;
    let yMin = xCat < 550 ? 300 : 0;

    aux.push({
      img: cat,
      x: xCat,
      y: Math.random() * (700 - yMin) + yMin,
    });
    aux.push({
      img: wallet,
      x: Math.random() * 300,
      y: Math.random() * (700 - 450) + 450,
    });
    return aux;
  };

  return (
    <>
      {!isLoading && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            height: innerHeight,
            overflowX: "hidden",
          }}
        >
          <SimpleMap
            img={mapa}
            relation={100}
            objects={objects}
            generateData={generateData}
            refreshFrequence={2}
          />
        </Box>
      )}
    </>
  );
}

export default App;
