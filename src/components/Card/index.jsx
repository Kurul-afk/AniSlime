import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

const cardContentStyle = {
  position: "absolute",
  bottom: 0,
  background: "rgba(0, 0, 0, 0.5)",
  color: "white",
  width: "100%",
};

const cardContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: "16px",
  justifyContent: "center",
  maxWidth: "100%",
  minWidth: "960px",
};
const cardsData = [
  {
    image:
      "https://static.wikia.nocookie.net/a496defe-8a74-41c4-b1b5-92104d2bdb39/scale-to-width/755",
    title: "Атака титанов 1",
  },
  {
    image:
      "https://images-s.kinorium.com/movie/cover/248928/w1500_37658601.jpg",
    title: "крутой учитель онидзука ",
  },
  {
    image: "https://anicult.org/uploads/posters/2020-11/16037120943545.jpg",
    title: "Хвост Фей",
  },
  {
    image:
      "https://media.kg-portal.ru/anime/b/bleach2022/posters/bleach2022_2.jpg",
    title: "Блич",
  },
  {
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/f076a99e-0282-42ee-afc9-a2ae6c5fcee7/600x900",
    title: "девушка на час",
  },
  {
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/8b18c43d-8f55-4ace-89f6-2ec4f7eb1d33/576x",
    title: "игра друзей",
  },
  {
    image: "https://www.kino-teatr.ru/movie/poster/148827/146121.jpg",
    title: "агент времени",
  },
  {
    image:
      "https://cdn.kanobu.ru/editor/images/25/7b8aeedc-6b18-4269-803b-564d2ba4737c.webp",
    title: "боец баки",
  },
  {
    image:
      "https://media.kg-portal.ru/anime/t/tokyorevengers/posters/tokyorevengers_1.jpg",
    title: "токийские мстители",
  },
  {
    image: "https://img.yani.tv/posters/full/1578820529.jpg",
    title: "Этот глупый свин не понимает мечту девочки-зайки",
  },
  {
    image: "https://m.media-amazon.com/images/I/81HAnnghfgL.jpg",
    title: "боруто",
  },
  {
    image: "https://www.kino-teatr.ru/movie/poster/144016/126227.jpg",
    title: "магическая битва",
  },
  {
    image:
      "https://images-s.kinorium.com/movie/poster/1554601/w1500_49827839.jpg",
    title: "паразит",
  },
  {
    image: "https://img.yani.tv/posters/full/1613123549.jpg",
    title: "убийца акаме",
  },
  {
    image:
      "https://anitokyo.org/uploads/posters/2018-03/poster_1519988356820.jpg",
    title: "необъятный океан ",
  },
  {
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/bde3f7e7-fc8f-4cfb-a349-9d699de784a3/576x",
    title: "маг целитель",
  },
  {
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/f11ef252-8519-4de1-a1c1-823608f2d19e/600x900",
    title: "сатана на подработке",
  },
  {
    image:
      "https://desu.shikimori.one/system/user_images/original/1026996/2326020.jpg",
    title: "реинкарнация безработного",
  },
];

export default function MultiActionAreaCard() {
  const navigate = useNavigate();

  return (
    <div style={cardContainerStyle}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          sx={{ maxWidth: 345 }}
          onClick={() => navigate("/animeList")}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={card.image}
              alt="green iguana"
              sx={{ maxHeight: "100%" }}
            />
            <CardContent sx={cardContentStyle}>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Открыть
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
