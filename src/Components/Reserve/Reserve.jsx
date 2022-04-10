import React from "react";
import { Nav } from "../../styles/eventStyle";
import { Card } from "../../styles/homeStyle";
import { Grid } from "../../styles/reserveStyle";
import { Cards } from "../Home/Cards";

export const Reserve = () => {
  const dummyData = [
    { name: "Samir", description: "testing" },
    { name: "sarra", description: "123" },
    { name: "mounira", description: "double feuille" },
    { name: "salma", description: "sousou" },
    { name: "Samira", description: "sousou2" },
    { name: "Samir", description: "testing" },
    { name: "sarra", description: "123" },
    { name: "mounira", description: "double feuille" },
    { name: "salma", description: "sousou" },
    { name: "Samira", description: "sousou2" },
  ];
  return (
    <div>
      <Grid>
        <Card>
          {dummyData.map((element) => (
            <Cards
              name={element.name}
              description={element.description}
            ></Cards>
          ))}
        </Card>
      </Grid>
    </div>
  );
};
