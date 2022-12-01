import { Typography, Box, Grid, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/general/Button";
import { getDestinations } from "../utils.js/apicalls";

// setAllDestinations(
//   destinations.map(destination => {
//     return {
//       id: destination.id,
//       image:
//         destination.medias !== undefined && destination.medias.length > 0
//           ? destination.medias[0].url
//           : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
//       title: destination.name,
//       url: destination.website,
//       subtitle: {
//         icon: 'location-outline',
//         text: destination.address.city,
//       },
//     };
//   }),
// );

// const destinations = [
//   {
//     id: 1,
//     title: "Hiking",
//     image:
//       "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     date: "Sun, Nov 13, 2:30 PM",
//     address: "10 rue de la paix, 75000 Paris",
//     price: "Free",
//   },
//   {
//     id: 2,
//     title: "Cycling",
//     image: "https://live.staticflickr.com/4428/36539647014_e6b811acc7_b.jpg",
//     date: "Mon Nov 14, 4:00 PM",
//     address: "25 rue des champs, 75000 Paris",
//     price: "Free",
//   },
//   {
//     id: 3,
//     title: "Sightseeing",
//     image: "https://live.staticflickr.com/65535/49826766686_879ce1be60_b.jpg",
//     date: "Tue Nov 15, 6:00 PM",
//     address: "12 rue d'Amsterdam, 75000 Paris",
//     price: "15 €",
//   },
//   {
//     id: 4,
//     title: "Meuseum Tour",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/8/88/Museum_of_Natural_History%2C_Paris_August_2013_005.jpg",
//     date: "Fri Nov 18, 2:00 PM",
//     address: "13 rue de grenelle, 75000 Paris",
//     price: "20 €",
//   },
// ];

const Destinations = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDestinations = async () => {
    setLoading(true);
    const destinations = await getDestinations();
    setDestinations(destinations);
    setLoading(false);
  };

  useEffect(() => {
    loadDestinations();
  }, []);

  if (loading)
    return (
      <CircularProgress
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        size={100}
      />
    );

  return (
    <Box
      sx={{
        margin: "20px",
        marginLeft: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: "50px",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "bold" }}>
          Destinations
        </Typography>

        <Button onClick={() => navigate("/destinations/create")}>
          New destination
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: destinations?.length >= 3 ? "center" : "flex-start",
        }}
      >
        <Box
          style={{
            maxWidth: "900px",
          }}
        >
          <Grid container spacing={3}>
            {destinations.map((destination, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  minWidth: 260,
                }}
                key={destination.id}
              >
                <Card
                  onClick={() => {
                    console.log("clicked");
                    navigate("//" + index);
                  }}
                  title={destination.name}
                  image={
                    destination.medias !== undefined &&
                    destination.medias.length > 0
                      ? destination.medias[0].url
                      : process.env.REACT_APP_IMAGE_PLACEHOLDER
                  }
                  subtitle1={destination.address?.city}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default Destinations;
