import React from "react";
import { Box, Grid, Typography, CardMedia, CardContent } from "@mui/material";
import MediaCard from "./MediaCard";
import { Card } from "@mui/material";

function Content() {
  return (
    <>
      <Grid >
        <Box sx={{ marginTop: "80px" }}>
          <Typography variant="h4">Welcome to My Restaurant</Typography>
          <Typography variant="body1" sx={{ margin: "20px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box>
      </Grid>

      <Grid >
        <Grid container spacing={2}>
          <Grid item  xs={12} sm={12} md={6} sx={{ display: "flex", justifyContent: "center" }} >
            <MediaCard
              img={
                "https://www.pacificfoods.com/wp-content/uploads/2022/08/SP_Recipes_0002_Ramen.jpg"
              }
              title={"Ramen"}
              msg={
                "Ramen is a Japanese noodle dish. It consists of Chinese-style wheat noodles served in a broth; common flavors are soy sauce and miso, with typical toppings including sliced pork, nori, menma, and scallions."
              }
            />
          </Grid>

          <Grid item  xs={12} sm={6} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <MediaCard
              img={
                "https://www.myplantifulcooking.com/wp-content/uploads/2022/10/vegan-yakisoba-featured.jpg"
              }
              title={"Yakisoba"}
              msg={"Yakisoba, is a Japanese noodle stir-fried dish. Usually, soba noodles are made from buckwheat flour, but soba in yakisoba are Chinese noodles made from wheat flour, typically flavored with a condiment similar to Worcestershire sauce."}
            />
          </Grid>

          <Grid item  xs={12} sm={6} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <MediaCard
              img={"https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2021-12-spaghetti%2F211208_ApartmentTherapy_Spaghetti_0172"}
              title={"Spaghetti"}
              msg={"Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat, water, and sometimes enriched with vitamins and minerals."}
            />
          </Grid>
        </Grid>
      </Grid> 
    </>
  );
}

export default Content;

// sx={{ display:{xs: 'none', md: 'block'}}}