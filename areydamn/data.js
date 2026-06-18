const ALL_ANIME_DATA = [
  {
    "rank": "1",
    "title": "One Piece",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/6/73245.jpg?s=62db2f23c5a7f0f64e0c2b8a6c92a0f3",
    "episodes": "1100+ eps · 15 movies",
    "year": "1999",
    "genre": "Shounen",
    "studio": "Toei Animation",
    "lead_gender": "Male"
  },
  {
    "rank": "2",
    "title": "Fullmetal Alchemist: Brotherhood",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1208/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a",
    "episodes": "64 eps · 1 movie",
    "year": "2009",
    "genre": "Shounen",
    "studio": "Bones",
    "lead_gender": "Male"
  },
  {
    "rank": "3",
    "title": "Hunter x Hunter",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701",
    "episodes": "148 eps · 2 movies",
    "year": "2011",
    "genre": "Shounen",
    "studio": "Madhouse",
    "lead_gender": "Male"
  },
  {
    "rank": "4",
    "title": "Steins;Gate",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1935/127974.jpg?s=cd8506e6d26bad48a78aa985477a55ca",
    "episodes": "47 eps · 1 movie",
    "year": "2011",
    "genre": "Drama",
    "studio": "White Fox",
    "lead_gender": "Male"
  },
  {
    "rank": "5",
    "title": "Attack on Titan",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98",
    "episodes": "87 eps · 0 movies",
    "year": "2013",
    "genre": "Shounen",
    "studio": "Wit Studio",
    "lead_gender": "Male"
  },
  {
    "rank": "6",
    "title": "Death Note",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1079/138100.jpg?s=3e4bd9dab3fbb90bff74e3240e281d23",
    "episodes": "37 eps · 0 movies",
    "year": "2006",
    "genre": "Shounen",
    "studio": "Madhouse",
    "lead_gender": "Male"
  },
  {
    "rank": "7",
    "title": "Naruto",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1141/142503.jpg?s=72e1fc2ba0d30e1607ab15de24dfc5f4",
    "episodes": "720 eps · 11 movies",
    "year": "2002",
    "genre": "Shounen",
    "studio": "Studio Pierrot",
    "lead_gender": "Male"
  },
  {
    "rank": "8",
    "title": "Neon Genesis Evangelion",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1314/108941.jpg?s=8055a0c1ad69357576fc40b690b63b03",
    "episodes": "26 eps · 4 movies",
    "year": "1995",
    "genre": "Avant Garde",
    "studio": "Gainax",
    "lead_gender": "Male"
  },
  {
    "rank": "9",
    "title": "Code Geass",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1032/135088.jpg?s=b67496ea440a61c0d7ac14173e0bd6e0",
    "episodes": "50 eps · 5 movies",
    "year": "2006",
    "genre": "Shounen",
    "studio": "Sunrise",
    "lead_gender": "Male"
  },
  {
    "rank": "10",
    "title": "Jujutsu Kaisen",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79",
    "episodes": "47 eps · 1 movie",
    "year": "2020",
    "genre": "Shounen",
    "studio": "MAPPA",
    "lead_gender": "Male"
  },
  {
    "rank": "11",
    "title": "A Silent Voice",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1122/96435.jpg?s=56d2750d600af93a5d326daec7748cae",
    "episodes": "1 movie",
    "year": "2016",
    "genre": "Shounen",
    "studio": "Kyoto Animation",
    "lead_gender": "Male"
  },
  {
    "rank": "12",
    "title": "Your Name.",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/5/87048.jpg?s=2bca128fcb9dfd6d0908f3d9986576c6",
    "episodes": "1 movie",
    "year": "2016",
    "genre": "Award Winning",
    "studio": "CoMix Wave Films",
    "lead_gender": "Unknown"
  },
  {
    "rank": "13",
    "title": "Demon Slayer: Kimetsu no Yaiba",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1286/99889.jpg?s=e497d08bef31ae412e314b90a54acfda",
    "episodes": "55 eps · 1 movie",
    "year": "2019",
    "genre": "Shounen",
    "studio": "ufotable",
    "lead_gender": "Male"
  },
  {
    "rank": "14",
    "title": "Your Lie in April",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1405/143284.jpg?s=d41b122af560902ea8409b2854b6196b",
    "episodes": "22 eps · 0 movies",
    "year": "2014",
    "genre": "Shounen",
    "studio": "A-1 Pictures",
    "lead_gender": "Male"
  },
  {
    "rank": "15",
    "title": "Cowboy Bebop",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/4/19644.jpg?s=bb1e96eb0a0224a57aa45443eab92575",
    "episodes": "26 eps · 1 movie",
    "year": "1998",
    "genre": "Action",
    "studio": "Sunrise",
    "lead_gender": "Male"
  },
  {
    "rank": "16",
    "title": "Frieren: Beyond Journey's End",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1015/138006.jpg?s=09c2f2dec5891d8e8fbb9fa3b23c75b4",
    "episodes": "28 eps · 0 movies",
    "year": "2023",
    "genre": "Shounen",
    "studio": "Madhouse",
    "lead_gender": "Female"
  },
  {
    "rank": "17",
    "title": "Gurren Lagann",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/4/5123.jpg?s=15bb64e0c8b13acfa5d0761308b66f59",
    "episodes": "27 eps · 2 movies",
    "year": "2007",
    "genre": "Adventure",
    "studio": "Gainax",
    "lead_gender": "Male"
  },
  {
    "rank": "18",
    "title": "Bleach",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1541/147774.jpg?s=30bdee0ed20655dd80300043efb1da9b",
    "episodes": "416 eps · 2 movies",
    "year": "2004",
    "genre": "Shounen",
    "studio": "Studio Pierrot",
    "lead_gender": "Male"
  },
  {
    "rank": "19",
    "title": "Haikyu!!",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/7/76014.jpg?s=ef5c00cb929dcd690c87f56e6d1b0c8a",
    "episodes": "85 eps · 0 movies",
    "year": "2014",
    "genre": "Shounen",
    "studio": "Production I.G",
    "lead_gender": "Male"
  },
  {
    "rank": "20",
    "title": "Re:ZERO -Starting Life in Another World-",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1522/128039.jpg?s=a0f123db562eb5b8a54e2480ebc53717",
    "episodes": "50 eps · 0 movies",
    "year": "2016",
    "genre": "Drama",
    "studio": "White Fox",
    "lead_gender": "Male"
  },
  {
    "rank": "21",
    "title": "Clannad",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1299/110774.jpg?s=fcd9db2cfd72c10a2278f483173cfff9",
    "episodes": "47 eps · 1 movie",
    "year": "2007",
    "genre": "Drama",
    "studio": "Kyoto Animation",
    "lead_gender": "Male"
  },
  {
    "rank": "22",
    "title": "Sword Art Online",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/11/39717.jpg?s=5908e8051487fb8468d5fca779f8f00d",
    "episodes": "96 eps · 1 movie",
    "year": "2012",
    "genre": "Action",
    "studio": "A-1 Pictures",
    "lead_gender": "Male"
  },
  {
    "rank": "23",
    "title": "Violet Evergarden",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1795/95088.jpg?s=9e24a139603a4e0ea8ea055a230b54d5",
    "episodes": "13 eps · 2 movies",
    "year": "2018",
    "genre": "Drama",
    "studio": "Kyoto Animation",
    "lead_gender": "Female"
  },
  {
    "rank": "24",
    "title": "One-Punch Man",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/12/76049.jpg?s=40b6c7dbbbb94c44675116d301150078",
    "episodes": "24 eps · 0 movies",
    "year": "2015",
    "genre": "Seinen",
    "studio": "Madhouse",
    "lead_gender": "Male"
  },
  {
    "rank": "25",
    "title": "Monster",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/10/18793.jpg?s=08c4f10a101c3835eeb14ca0715512bd",
    "episodes": "74 eps · 0 movies",
    "year": "2004",
    "genre": "Seinen",
    "studio": "Madhouse",
    "lead_gender": "Male"
  },
  {
    "rank": "26",
    "title": "Gintama",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/10/73274.jpg?s=ed42453c10ba12b03b1600d02725a174",
    "episodes": "367 eps · 2 movies",
    "year": "2006",
    "genre": "Shounen",
    "studio": "Sunrise",
    "lead_gender": "Male"
  },
  {
    "rank": "27",
    "title": "Puella Magi Madoka Magica",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/11/55225.jpg?s=cff930c5de079dbeab2107067050e03c",
    "episodes": "12 eps · 3 movies",
    "year": "2011",
    "genre": "Award Winning",
    "studio": "Shaft",
    "lead_gender": "Female"
  },
  {
    "rank": "28",
    "title": "Toradora!",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/13/22128.jpg?s=08c2b1b4a465fc43cbe15aae4a425b78",
    "episodes": "25 eps · 0 movies",
    "year": "2008",
    "genre": "Drama",
    "studio": "J.C.Staff",
    "lead_gender": "Female"
  },
  {
    "rank": "29",
    "title": "Vinland Saga",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1500/103005.jpg?s=b21dbd168612f531ce4eec9bd53e272b",
    "episodes": "48 eps · 0 movies",
    "year": "2019",
    "genre": "Seinen",
    "studio": "Wit Studio",
    "lead_gender": "Male"
  },
  {
    "rank": "30",
    "title": "Chainsaw Man",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1806/126216.jpg?s=8e4d9184579f166e9adff4987b274192",
    "episodes": "12 eps · 1 movie",
    "year": "2022",
    "genre": "Shounen",
    "studio": "MAPPA",
    "lead_gender": "Male"
  },
  {
    "rank": "31",
    "title": "My Hero Academia",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2",
    "episodes": "138 eps · 3 movies",
    "year": "2016",
    "genre": "Shounen",
    "studio": "Bones",
    "lead_gender": "Male"
  },
  {
    "rank": "32",
    "title": "Mob Psycho 100",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/8/80356.jpg?s=1d7f8902c64d166b821e50ea68267c2a",
    "episodes": "37 eps · 0 movies",
    "year": "2016",
    "genre": "Action",
    "studio": "Bones",
    "lead_gender": "Male"
  },
  {
    "rank": "33",
    "title": "Tokyo Ghoul",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1498/134443.jpg?s=b6b415f545ed3a21b995f78dc73acde2",
    "episodes": "48 eps · 0 movies",
    "year": "2014",
    "genre": "Seinen",
    "studio": "Studio Pierrot",
    "lead_gender": "Male"
  },
  {
    "rank": "34",
    "title": "Bakemonogatari",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/11/75274.jpg?s=3bb5c42c0803621dde09c52f5c4d4249",
    "episodes": "88 eps · 0 movies",
    "year": "2009",
    "genre": "Mystery",
    "studio": "Shaft",
    "lead_gender": "Male"
  },
  {
    "rank": "35",
    "title": "Erased",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/10/77957.jpg?s=27f147795f08191cf1a96a2b50e1756c",
    "episodes": "12 eps · 0 movies",
    "year": "2016",
    "genre": "Mystery",
    "studio": "A-1 Pictures",
    "lead_gender": "Male"
  },
  {
    "rank": "36",
    "title": "Rascal Does Not Dream of Bunny Girl Senpai",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1301/93586.jpg?s=f19bb396363ae0caf8f1e1e8c17b49ac",
    "episodes": "13 eps · 1 movie",
    "year": "2018",
    "genre": "Drama",
    "studio": "CloverWorks",
    "lead_gender": "Male"
  },
  {
    "rank": "37",
    "title": "Black Clover",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/2/88336.jpg?s=91adfb36d2c14c84ca2bd10489cdaad8",
    "episodes": "170 eps · 1 movie",
    "year": "2017",
    "genre": "Shounen",
    "studio": "Studio Pierrot",
    "lead_gender": "Male"
  },
  {
    "rank": "38",
    "title": "Angel Beats!",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1244/111115.jpg?s=14607c2ea405539df501e29595daa582",
    "episodes": "13 eps · 0 movies",
    "year": "2010",
    "genre": "Drama",
    "studio": "P.A. Works",
    "lead_gender": "Male"
  },
  {
    "rank": "39",
    "title": "No Game, No Life",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1074/111944.jpg?s=3d63ffec8cd2a7f1e00e8dc15ef534f5",
    "episodes": "12 eps · 1 movie",
    "year": "2014",
    "genre": "Comedy",
    "studio": "Madhouse",
    "lead_gender": "Male"
  },
  {
    "rank": "40",
    "title": "Fairy Tail",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/5/18179.jpg?s=24a281654f63558f3ef001950a9e6539",
    "episodes": "328 eps · 2 movies",
    "year": "2009",
    "genre": "Shounen",
    "studio": "A-1 Pictures",
    "lead_gender": "Male"
  },
  {
    "rank": "41",
    "title": "Made in Abyss",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/6/86733.jpg?s=56ac623880ec87f3a0197e0391bc12c3",
    "episodes": "25 eps · 2 movies",
    "year": "2017",
    "genre": "Adventure",
    "studio": "Kinema Citrus",
    "lead_gender": "Female"
  },
  {
    "rank": "42",
    "title": "KonoSuba",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1895/142748.jpg?s=7105e6e2383b5a4c7228843188dfbc61",
    "episodes": "20 eps · 1 movie",
    "year": "2016",
    "genre": "Adventure",
    "studio": "Studio Deen",
    "lead_gender": "Male"
  },
  {
    "rank": "43",
    "title": "JoJo's Bizarre Adventure",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/3/40409.jpg?s=eade1f76434383f5af5243cc52d50316",
    "episodes": "190 eps · 0 movies",
    "year": "2012",
    "genre": "Shounen",
    "studio": "David Production",
    "lead_gender": "Male"
  },
  {
    "rank": "44",
    "title": "Kaguya-sama: Love is War",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1295/106551.jpg?s=ea15a93e0d25bce3e6c15e2c3ddb66a1",
    "episodes": "37 eps · 1 movie",
    "year": "2019",
    "genre": "Seinen",
    "studio": "A-1 Pictures",
    "lead_gender": "Male"
  },
  {
    "rank": "45",
    "title": "Dragon Ball Z",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1277/142022.jpg?s=4958b98e01bb04b09073541eac32e84e",
    "episodes": "291 eps · 13 movies",
    "year": "1989",
    "genre": "Shounen",
    "studio": "Toei Animation",
    "lead_gender": "Male"
  },
  {
    "rank": "46",
    "title": "Spy x Family",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1441/122795.jpg?s=ba5838dcfffe4a5cd4988e09d8436c79",
    "episodes": "37 eps · 1 movie",
    "year": "2022",
    "genre": "Shounen",
    "studio": "Wit Studio",
    "lead_gender": "Male"
  },
  {
    "rank": "47",
    "title": "Samurai Champloo",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1370/135212.jpg?s=057b95e4f0325310cd6c3747123e7c3b",
    "episodes": "26 eps · 0 movies",
    "year": "2004",
    "genre": "Action",
    "studio": "Manglobe",
    "lead_gender": "Male"
  },
  {
    "rank": "48",
    "title": "Psycho-Pass",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1314/142015.jpg?s=8bd152f6d454617e43056ee60f1b744b",
    "episodes": "41 eps · 1 movie",
    "year": "2012",
    "genre": "Action",
    "studio": "Production I.G",
    "lead_gender": "Female"
  },
  {
    "rank": "49",
    "title": "Horimiya",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1695/111486.jpg?s=cdfd83a4d4cd70e375028082ffc568cb",
    "episodes": "13 eps · 0 movies",
    "year": "2021",
    "genre": "Shounen",
    "studio": "CloverWorks",
    "lead_gender": "Male"
  },
  {
    "rank": "50",
    "title": "Mushoku Tensei: Jobless Reincarnation",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1530/117776.jpg?s=66e9881567062ce45eddd8330bd9cc30",
    "episodes": "23 eps · 0 movies",
    "year": "2021",
    "genre": "Adventure",
    "studio": "Studio Bind",
    "lead_gender": "Male"
  },
  {
    "rank": "51",
    "title": "Kill la Kill",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1464/111943.jpg?s=b350450d3d98aa57f05bb4fbdb9d5209",
    "episodes": "24 eps · 1 movie",
    "year": "2013",
    "genre": "Action",
    "studio": "Trigger",
    "lead_gender": "Female"
  },
  {
    "rank": "52",
    "title": "Ouran High School Host Club",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/2/71992.jpg?s=83447b9f62a31c405dd9cdb456fa394e",
    "episodes": "26 eps · 0 movies",
    "year": "2006",
    "genre": "Shoujo",
    "studio": "Bones",
    "lead_gender": "Female"
  },
  {
    "rank": "53",
    "title": "Parasyte: The Maxim",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/3/73178.jpg?s=aeb28b4778c7bcdfcb0004cbb1a55523",
    "episodes": "24 eps · 0 movies",
    "year": "2014",
    "genre": "Seinen",
    "studio": "Madhouse",
    "lead_gender": "Male"
  },
  {
    "rank": "54",
    "title": "Bocchi the Rock!",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1448/127956.jpg?s=81e0f14a54c27c6d8046fced1a046f28",
    "episodes": "12 eps · 0 movies",
    "year": "2022",
    "genre": "Comedy",
    "studio": "CloverWorks",
    "lead_gender": "Female"
  },
  {
    "rank": "55",
    "title": "Nana",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/2/11232.jpg?s=fdcbc61fd7e6407fe3810192a1684acd",
    "episodes": "47 eps · 0 movies",
    "year": "2006",
    "genre": "Shoujo",
    "studio": "Madhouse",
    "lead_gender": "Female"
  },
  {
    "rank": "56",
    "title": "Spirited Away",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/6/79597.jpg?s=1f170071bc9a54ce2ba3c0d8c7aa6927",
    "episodes": "1 movie",
    "year": "2001",
    "genre": "Adventure",
    "studio": "Studio Ghibli",
    "lead_gender": "Female"
  },
  {
    "rank": "57",
    "title": "Cyberpunk: Edgerunners",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1818/126435.jpg?s=7b294f04000f9e4b59fdae558b4b4936",
    "episodes": "10 eps · 0 movies",
    "year": "2022",
    "genre": "Action",
    "studio": "Trigger",
    "lead_gender": "Male"
  },
  {
    "rank": "58",
    "title": "Noragami",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1886/128266.jpg?s=a74efc6fc8fa714f6edb13c9f6222910",
    "episodes": "25 eps · 0 movies",
    "year": "2014",
    "genre": "Shounen",
    "studio": "Bones",
    "lead_gender": "Male"
  },
  {
    "rank": "59",
    "title": "Fate/Zero",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1887/117644.jpg?s=2d08381c9d71958d6e484f18d3520dbf",
    "episodes": "25 eps · 0 movies",
    "year": "2011",
    "genre": "Action",
    "studio": "ufotable",
    "lead_gender": "Male"
  },
  {
    "rank": "60",
    "title": "DARLING in the FRANXX",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1614/90408.jpg?s=b06206668b10bcea85aa9cc75b5673f3",
    "episodes": "24 eps · 0 movies",
    "year": "2018",
    "genre": "Drama",
    "studio": "A-1 Pictures",
    "lead_gender": "Male"
  },
  {
    "rank": "61",
    "title": "The Disastrous Life of Saiki K.",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1973/142750.jpg?s=6498ee824a90d78c321317bbac080cdf",
    "episodes": "120 eps · 0 movies",
    "year": "2016",
    "genre": "Shounen",
    "studio": "J.C.Staff",
    "lead_gender": "Male"
  },
  {
    "rank": "62",
    "title": "Anohana: The Flower We Saw That Day",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/5/79697.jpg?s=c664a137ce3f854a2343cf39921ae579",
    "episodes": "11 eps · 1 movie",
    "year": "2011",
    "genre": "Drama",
    "studio": "A-1 Pictures",
    "lead_gender": "Female"
  },
  {
    "rank": "63",
    "title": "FLCL",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/7/77356.jpg?s=4c740722edcf938c372197fc31aaa060",
    "episodes": "6 eps · 0 movies",
    "year": "2000",
    "genre": "Avant Garde",
    "studio": "Gainax",
    "lead_gender": "Male"
  },
  {
    "rank": "64",
    "title": "Serial Experiments Lain",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1718/91550.jpg?s=a7345c87c4b2e5632a0562f3204d52bb",
    "episodes": "13 eps · 0 movies",
    "year": "1998",
    "genre": "Avant Garde",
    "studio": "Triangle Staff",
    "lead_gender": "Female"
  },
  {
    "rank": "65",
    "title": "The Promised Neverland",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1830/118780.jpg?s=4e8a1b5b13b15d3c9172d53e3aad887b",
    "episodes": "23 eps · 0 movies",
    "year": "2019",
    "genre": "Shounen",
    "studio": "CloverWorks",
    "lead_gender": "Female"
  },
  {
    "rank": "66",
    "title": "That Time I Got Reincarnated as a Slime",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1069/123309.jpg?s=889bd75b26641f8d1c90aae9e2aa62f9",
    "episodes": "48 eps · 1 movie",
    "year": "2018",
    "genre": "Shounen",
    "studio": "8bit",
    "lead_gender": "Male"
  },
  {
    "rank": "67",
    "title": "Banana Fish",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1190/93472.jpg?s=a44d13e8e51c4c0e8f80f019e142614c",
    "episodes": "24 eps · 0 movies",
    "year": "2018",
    "genre": "Shoujo",
    "studio": "MAPPA",
    "lead_gender": "Male"
  },
  {
    "rank": "68",
    "title": "Howl's Moving Castle",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1470/138723.jpg?s=d13efbbaed502aeb220700a4015f287a",
    "episodes": "1 movie",
    "year": "2004",
    "genre": "Adventure",
    "studio": "Studio Ghibli",
    "lead_gender": "Female"
  },
  {
    "rank": "69",
    "title": "Berserk",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1384/119988.jpg?s=9260c7baa7b55d81d9f6375b55a803e6",
    "episodes": "25 eps · 3 movies",
    "year": "1997",
    "genre": "Seinen",
    "studio": "OLM",
    "lead_gender": "Male"
  },
  {
    "rank": "70",
    "title": "[Oshi No Ko]",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1812/134736.jpg?s=01b78ed332b657214ffb3bae89bdcd31",
    "episodes": "24 eps · 0 movies",
    "year": "2023",
    "genre": "Seinen",
    "studio": "Doga Kobo",
    "lead_gender": "Male"
  },
  {
    "rank": "71",
    "title": "Assassination Classroom",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/5/75639.jpg?s=f30fb4e81d2e9054f27fa76ee1e84a2d",
    "episodes": "47 eps · 2 movies",
    "year": "2015",
    "genre": "Shounen",
    "studio": "Lerche",
    "lead_gender": "Male"
  },
  {
    "rank": "72",
    "title": "Dr. Stone",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1613/102576.jpg?s=44aa2af9cfc2523f9feb07d2b13d4196",
    "episodes": "56 eps · 0 movies",
    "year": "2019",
    "genre": "Shounen",
    "studio": "TMS Entertainment",
    "lead_gender": "Male"
  },
  {
    "rank": "73",
    "title": "The Future Diary",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/13/33465.jpg",
    "episodes": "26 eps · 1 movie",
    "year": "2011",
    "genre": "Shounen",
    "studio": "asread.",
    "lead_gender": "Female"
  },
  {
    "rank": "74",
    "title": "Akame ga Kill!",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1429/95946.jpg?s=c41d2e9d37c7cc36c4b78f84caebce5f",
    "episodes": "24 eps · 0 movies",
    "year": "2014",
    "genre": "Action",
    "studio": "White Fox",
    "lead_gender": "Male"
  },
  {
    "rank": "75",
    "title": "My Teen Romantic Comedy SNAFU",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1786/120117.jpg",
    "episodes": "38 eps · 0 movies",
    "year": "2013",
    "genre": "Drama",
    "studio": "Brain's Base",
    "lead_gender": "Male"
  },
  {
    "rank": "76",
    "title": "Durarara!!",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/10/71772.jpg",
    "episodes": "61 eps · 0 movies",
    "year": "2010",
    "genre": "Action",
    "studio": "Brains Base",
    "lead_gender": "Male"
  },
  {
    "rank": "77",
    "title": "Soul Eater",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/5/22125.jpg?s=36773a95d82c0cd7ae85e6a29756dc62",
    "episodes": "51 eps · 0 movies",
    "year": "2008",
    "genre": "Shounen",
    "studio": "Bones",
    "lead_gender": "Female"
  },
  {
    "rank": "78",
    "title": "Welcome to the N.H.K.",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/6/85548.jpg",
    "episodes": "24 eps · 0 movies",
    "year": "2006",
    "genre": "Drama",
    "studio": "Gonzo",
    "lead_gender": "Male"
  },
  {
    "rank": "79",
    "title": "Death Parade",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/3/67177.jpg?s=b1b8a6d4a6e6fe63ca61bcf5e0e88d8d",
    "episodes": "12 eps · 0 movies",
    "year": "2015",
    "genre": "Mystery",
    "studio": "Madhouse",
    "lead_gender": "Male"
  },
  {
    "rank": "80",
    "title": "Bungo Stray Dogs",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/3/79409.jpg",
    "episodes": "60 eps · 1 movie",
    "year": "2016",
    "genre": "Action",
    "studio": "Bones",
    "lead_gender": "Male"
  },
  {
    "rank": "81",
    "title": "Great Teacher Onizuka",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/13/11460.jpg",
    "episodes": "43 eps · 0 movies",
    "year": "1999",
    "genre": "Shounen",
    "studio": "Studio Pierrot",
    "lead_gender": "Male"
  },
  {
    "rank": "82",
    "title": "Overlord",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1945/136600.jpg",
    "episodes": "52 eps · 2 movies",
    "year": "2015",
    "genre": "Action",
    "studio": "Madhouse",
    "lead_gender": "Male"
  },
  {
    "rank": "83",
    "title": "Mushi-Shi",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/2/73862.jpg",
    "episodes": "46 eps · 0 movies",
    "year": "2005",
    "genre": "Seinen",
    "studio": "Artland",
    "lead_gender": "Male"
  },
  {
    "rank": "84",
    "title": "The Apothecary Diaries",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1708/138033.jpg?s=6e18bef6ddaa2ae15ea5b23a80a49f02",
    "episodes": "24 eps · 0 movies",
    "year": "2023",
    "genre": "Seinen",
    "studio": "Toei Animation",
    "lead_gender": "Female"
  },
  {
    "rank": "85",
    "title": "Hyouka",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/13/50521.jpg?s=a7c1fa7e84c95cb97acb19a0a8e8a524",
    "episodes": "22 eps · 0 movies",
    "year": "2012",
    "genre": "Mystery",
    "studio": "Kyoto Animation",
    "lead_gender": "Male"
  },
  {
    "rank": "86",
    "title": "86 Eighty-Six",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1987/117507.jpg",
    "episodes": "23 eps · 0 movies",
    "year": "2021",
    "genre": "Seinen",
    "studio": "A-1 Pictures",
    "lead_gender": "Female"
  },
  {
    "rank": "87",
    "title": "Fullmetal Alchemist (2003)",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
    "episodes": "51 eps · 1 movie",
    "year": "2003",
    "genre": "Shounen",
    "studio": "Bones",
    "lead_gender": "Male"
  },
  {
    "rank": "88",
    "title": "The Pet Girl of Sakurasou",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/4/43643.jpg",
    "episodes": "24 eps · 0 movies",
    "year": "2012",
    "genre": "Drama",
    "studio": "J.C.Staff",
    "lead_gender": "Male"
  },
  {
    "rank": "89",
    "title": "Devilman: Crybaby",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/2/89973.jpg",
    "episodes": "10 eps · 0 movies",
    "year": "2018",
    "genre": "Avant Garde",
    "studio": "Science SARU",
    "lead_gender": "Male"
  },
  {
    "rank": "90",
    "title": "K-ON!",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/10/76120.jpg",
    "episodes": "39 eps · 1 movie",
    "year": "2009",
    "genre": "Slice of Life",
    "studio": "Kyoto Animation",
    "lead_gender": "Female"
  },
  {
    "rank": "91",
    "title": "Nichijou - My Ordinary Life",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/3/75617.jpg",
    "episodes": "26 eps · 0 movies",
    "year": "2011",
    "genre": "Comedy",
    "studio": "Kyoto Animation",
    "lead_gender": "Female"
  },
  {
    "rank": "92",
    "title": "Tokyo Revengers",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1839/122012.jpg",
    "episodes": "37 eps · 0 movies",
    "year": "2021",
    "genre": "Shounen",
    "studio": "Liden Films",
    "lead_gender": "Male"
  },
  {
    "rank": "93",
    "title": "Hajime no Ippo",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/4/86334.jpg",
    "episodes": "127 eps · 3 movies",
    "year": "2000",
    "genre": "Shounen",
    "studio": "Madhouse",
    "lead_gender": "Male"
  },
  {
    "rank": "94",
    "title": "Elfen Lied",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1780/121555.jpg",
    "episodes": "13 eps · 0 movies",
    "year": "2004",
    "genre": "Seinen",
    "studio": "Arms",
    "lead_gender": "Female"
  },
  {
    "rank": "95",
    "title": "Charlotte",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1826/147276.jpg",
    "episodes": "13 eps · 0 movies",
    "year": "2015",
    "genre": "Drama",
    "studio": "P.A. Works",
    "lead_gender": "Male"
  },
  {
    "rank": "96",
    "title": "Yu Yu Hakusho",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1228/111372.jpg",
    "episodes": "112 eps · 2 movies",
    "year": "1992",
    "genre": "Shounen",
    "studio": "Studio Pierrot",
    "lead_gender": "Male"
  },
  {
    "rank": "97",
    "title": "Princess Mononoke",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/7/75919.jpg?s=86e2d55fc05b2aac33a47c55dee2736a",
    "episodes": "1 movie",
    "year": "1997",
    "genre": "Adventure",
    "studio": "Studio Ghibli",
    "lead_gender": "Male"
  },
  {
    "rank": "98",
    "title": "Maid Sama!",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/4/50361.jpg?s=c9cec4f8bc3f2b7d82eae1d6d7bbb95d",
    "episodes": "26 eps · 0 movies",
    "year": "2010",
    "genre": "Shoujo",
    "studio": "J.C.Staff",
    "lead_gender": "Female"
  },
  {
    "rank": "99",
    "title": "Black Butler",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1467/137783.jpg",
    "episodes": "36 eps · 1 movie",
    "year": "2008",
    "genre": "Shounen",
    "studio": "A-1 Pictures",
    "lead_gender": "Male"
  },
  {
    "rank": "100",
    "title": "Baccano!",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/3/14547.jpg",
    "episodes": "16 eps · 0 movies",
    "year": "2007",
    "genre": "Action",
    "studio": "Brain's Base",
    "lead_gender": "Male"
  },
  {
    "rank": "101",
    "title": "Food Wars! Shokugeki no Soma",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1444/148976.jpg",
    "episodes": "86 eps · 0 movies",
    "year": "2015",
    "genre": "Shounen",
    "studio": "J.C.Staff",
    "lead_gender": "Male"
  },
  {
    "rank": "102",
    "title": "Hellsing Ultimate",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1012/143965.jpg",
    "episodes": "10 eps · 0 movies",
    "year": "2006",
    "genre": "Action",
    "studio": "Madhouse",
    "lead_gender": "Male"
  },
  {
    "rank": "103",
    "title": "My Dress-Up Darling",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1179/119897.jpg",
    "episodes": "12 eps · 0 movies",
    "year": "2022",
    "genre": "Seinen",
    "studio": "CloverWorks",
    "lead_gender": "Male"
  },
  {
    "rank": "104",
    "title": "Zankyou no Terror",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/8/65409.jpg?s=2ded36d7a0d1a6a21e3cb9cc49d6aee3",
    "episodes": "11 eps · 0 movies",
    "year": "2014",
    "genre": "Seinen",
    "studio": "MAPPA",
    "lead_gender": "Male"
  },
  {
    "rank": "105",
    "title": "High School DxD",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1331/111940.jpg",
    "episodes": "48 eps · 0 movies",
    "year": "2012",
    "genre": "Shounen",
    "studio": "TNK",
    "lead_gender": "Male"
  },
  {
    "rank": "106",
    "title": "I Want to Eat Your Pancreas",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1768/93291.jpg",
    "episodes": "1 movie",
    "year": "2018",
    "genre": "Drama",
    "studio": "Studio VOLN",
    "lead_gender": "Male"
  },
  {
    "rank": "107",
    "title": "Dororo",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1879/100467.jpg",
    "episodes": "24 eps · 0 movies",
    "year": "2019",
    "genre": "Seinen",
    "studio": "MAPPA",
    "lead_gender": "Male"
  },
  {
    "rank": "108",
    "title": "Grand Blue Dreaming",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1302/94882.jpg",
    "episodes": "12 eps · 0 movies",
    "year": "2018",
    "genre": "Comedy",
    "studio": "Zero-G",
    "lead_gender": "Male"
  },
  {
    "rank": "109",
    "title": "From the New World",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1549/136389.jpg",
    "episodes": "25 eps · 0 movies",
    "year": "2012",
    "genre": "Seinen",
    "studio": "A-1 Pictures",
    "lead_gender": "Female"
  },
  {
    "rank": "110",
    "title": "Higurashi: When They Cry",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/12/19634.jpg",
    "episodes": "50 eps · 1 movie",
    "year": "2006",
    "genre": "Mystery",
    "studio": "Deen",
    "lead_gender": "Female"
  },
  {
    "rank": "111",
    "title": "Perfect Blue",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1254/134212.jpg",
    "episodes": "1 movie",
    "year": "1997",
    "genre": "Seinen",
    "studio": "Madhouse",
    "lead_gender": "Female"
  },
  {
    "rank": "112",
    "title": "Kuroko's Basketball",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/11/50453.jpg",
    "episodes": "75 eps · 0 movies",
    "year": "2012",
    "genre": "Shounen",
    "studio": "Production I.G",
    "lead_gender": "Male"
  },
  {
    "rank": "113",
    "title": "Yuri!!! on Ice",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/6/81149.jpg",
    "episodes": "12 eps · 0 movies",
    "year": "2016",
    "genre": "Sports",
    "studio": "MAPPA",
    "lead_gender": "Male"
  },
  {
    "rank": "114",
    "title": "Fruits Basket",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1447/99827.jpg?s=a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2",
    "episodes": "63 eps · 0 movies",
    "year": "2019",
    "genre": "Shoujo",
    "studio": "TMS Entertainment",
    "lead_gender": "Female"
  },
  {
    "rank": "115",
    "title": "Black Lagoon",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1906/121592.jpg",
    "episodes": "29 eps · 0 movies",
    "year": "2006",
    "genre": "Action",
    "studio": "Madhouse",
    "lead_gender": "Female"
  },
  {
    "rank": "116",
    "title": "Fate/stay night",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/4/30327.jpg",
    "episodes": "50 eps · 1 movie",
    "year": "2006",
    "genre": "Action",
    "studio": "ufotable",
    "lead_gender": "Male"
  },
  {
    "rank": "117",
    "title": "Classroom of the Elite",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/5/86830.jpg",
    "episodes": "24 eps · 0 movies",
    "year": "2017",
    "genre": "Seinen",
    "studio": "Lerche",
    "lead_gender": "Male"
  },
  {
    "rank": "118",
    "title": "InuYasha",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1589/95329.jpg",
    "episodes": "193 eps · 4 movies",
    "year": "2000",
    "genre": "Shounen",
    "studio": "Sunrise",
    "lead_gender": "Male"
  },
  {
    "rank": "119",
    "title": "Solo Leveling",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1448/147351.jpg?s=bb8df982cc7ca8fd56d744e9f06f0c16",
    "episodes": "25 eps · 0 movies",
    "year": "2024",
    "genre": "Action",
    "studio": "A-1 Pictures",
    "lead_gender": "Male"
  },
  {
    "rank": "120",
    "title": "The Seven Deadly Sins",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/8/65409.jpg",
    "episodes": "96 eps · 1 movie",
    "year": "2014",
    "genre": "Shounen",
    "studio": "A-1 Pictures",
    "lead_gender": "Male"
  },
  {
    "rank": "121",
    "title": "The Tatami Galaxy",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1633/123689.jpg",
    "episodes": "11 eps · 0 movies",
    "year": "2010",
    "genre": "Seinen",
    "studio": "Madhouse",
    "lead_gender": "Male"
  },
  {
    "rank": "122",
    "title": "Love, Chunibyo & Other Delusions!",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1905/142840.jpg",
    "episodes": "24 eps · 2 movies",
    "year": "2012",
    "genre": "Drama",
    "studio": "Kyoto Animation",
    "lead_gender": "Male"
  },
  {
    "rank": "123",
    "title": "Another",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/4/75509.jpg",
    "episodes": "12 eps · 1 movie",
    "year": "2012",
    "genre": "Mystery",
    "studio": "P.A. Works",
    "lead_gender": "Male"
  },
  {
    "rank": "124",
    "title": "Spice and Wolf",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1059/142414.jpg",
    "episodes": "24 eps · 0 movies",
    "year": "2008",
    "genre": "Seinen",
    "studio": "Imagin",
    "lead_gender": "Female"
  },
  {
    "rank": "125",
    "title": "The Eminence in Shadow",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1091/128729.jpg",
    "episodes": "40 eps · 0 movies",
    "year": "2022",
    "genre": "Action",
    "studio": "Nexus",
    "lead_gender": "Male"
  },
  {
    "rank": "126",
    "title": "given",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1666/102238.jpg",
    "episodes": "11 eps · 1 movie",
    "year": "2019",
    "genre": "Drama",
    "studio": "Lerche",
    "lead_gender": "Male"
  },
  {
    "rank": "127",
    "title": "Akatsuki no Yona",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/9/64225.jpg",
    "episodes": "24 eps · 0 movies",
    "year": "2014",
    "genre": "Shoujo",
    "studio": "Pierrot",
    "lead_gender": "Female"
  },
  {
    "rank": "128",
    "title": "Dragon Ball",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1887/92364.jpg",
    "episodes": "153 eps · 4 movies",
    "year": "1986",
    "genre": "Shounen",
    "studio": "Toei Animation",
    "lead_gender": "Male"
  },
  {
    "rank": "129",
    "title": "Legend of the Galactic Heroes",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1976/142016.jpg",
    "episodes": "110 eps · 3 movies",
    "year": "1988",
    "genre": "Seinen",
    "studio": "Artland",
    "lead_gender": "Male"
  },
  {
    "rank": "130",
    "title": "Trigun",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1130/120002.jpg",
    "episodes": "26 eps · 1 movie",
    "year": "1998",
    "genre": "Action",
    "studio": "Madhouse",
    "lead_gender": "Male"
  },
  {
    "rank": "131",
    "title": "Ping Pong the Animation",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1586/146565.jpg",
    "episodes": "11 eps · 0 movies",
    "year": "2014",
    "genre": "Seinen",
    "studio": "Tatsunoko Production",
    "lead_gender": "Male"
  },
  {
    "rank": "132",
    "title": "Blue Exorcist",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/10/75195.jpg",
    "episodes": "51 eps · 1 movie",
    "year": "2011",
    "genre": "Shounen",
    "studio": "A-1 Pictures",
    "lead_gender": "Male"
  },
  {
    "rank": "133",
    "title": "Guilty Crown",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1566/133912.jpg",
    "episodes": "22 eps · 0 movies",
    "year": "2011",
    "genre": "Action",
    "studio": "Production I.G",
    "lead_gender": "Male"
  },
  {
    "rank": "134",
    "title": "Miss Kobayashi's Dragon Maid",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/5/85434.jpg?s=b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1",
    "episodes": "25 eps · 0 movies",
    "year": "2017",
    "genre": "Seinen",
    "studio": "Kyoto Animation",
    "lead_gender": "Female"
  },
  {
    "rank": "135",
    "title": "Darker than Black",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/5/19570.jpg",
    "episodes": "37 eps · 4 OVA eps",
    "year": "2007",
    "genre": "Action",
    "studio": "Bones",
    "lead_gender": "Male"
  },
  {
    "rank": "136",
    "title": "Natsume's Book of Friends",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1681/108439.jpg",
    "episodes": "74 eps · 1 movie",
    "year": "2008",
    "genre": "Seinen",
    "studio": "Brains Base",
    "lead_gender": "Male"
  },
  {
    "rank": "137",
    "title": "March Comes in Like a Lion",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/3/82899.jpg",
    "episodes": "44 eps · 0 movies",
    "year": "2016",
    "genre": "Seinen",
    "studio": "Shaft",
    "lead_gender": "Male"
  },
  {
    "rank": "138",
    "title": "Reborn!",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1531/142751.jpg",
    "episodes": "203 eps · 0 movies",
    "year": "2006",
    "genre": "Shounen",
    "studio": "Artland",
    "lead_gender": "Male"
  },
  {
    "rank": "139",
    "title": "To Your Eternity",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1880/118484.jpg",
    "episodes": "40 eps · 0 movies",
    "year": "2021",
    "genre": "Seinen",
    "studio": "Brain's Base",
    "lead_gender": "Male"
  },
  {
    "rank": "140",
    "title": "The Melancholy of Haruhi Suzumiya",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1248/112352.jpg?s=e62fda44bb62e1b938570096c39f9d05",
    "episodes": "28 eps · 1 movie",
    "year": "2006",
    "genre": "Comedy",
    "studio": "Kyoto Animation",
    "lead_gender": "Female"
  },
  {
    "rank": "141",
    "title": "Dan Da Dan",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1584/143719.jpg",
    "episodes": "13 eps · 0 movies",
    "year": "2024",
    "genre": "Action",
    "studio": "Science SARU",
    "lead_gender": "Male"
  },
  {
    "rank": "142",
    "title": "Kimi ni Todoke: From Me to You",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/4/23413.jpg?s=c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8",
    "episodes": "37 eps · 0 movies",
    "year": "2009",
    "genre": "Shoujo",
    "studio": "Production I.G",
    "lead_gender": "Female"
  },
  {
    "rank": "143",
    "title": "Land of the Lustrous",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/3/88293.jpg",
    "episodes": "12 eps · 0 movies",
    "year": "2017",
    "genre": "Seinen",
    "studio": "Orange",
    "lead_gender": "Unknown"
  },
  {
    "rank": "144",
    "title": "Akira",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1408/114012.jpg",
    "episodes": "1 movie",
    "year": "1988",
    "genre": "Seinen",
    "studio": "Tokyo Movie Shinsha",
    "lead_gender": "Male"
  },
  {
    "rank": "145",
    "title": "Link Click",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1135/114867.jpg",
    "episodes": "24 eps · 0 movies",
    "year": "2021",
    "genre": "Mystery",
    "studio": "FOW Studios",
    "lead_gender": "Male"
  },
  {
    "rank": "146",
    "title": "Daily Lives of High School Boys",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/3/33257.jpg",
    "episodes": "12 eps · 0 movies",
    "year": "2012",
    "genre": "Comedy",
    "studio": "Sunrise",
    "lead_gender": "Male"
  },
  {
    "rank": "147",
    "title": "Ergo Proxy",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1183/136187.jpg",
    "episodes": "23 eps · 0 movies",
    "year": "2006",
    "genre": "Seinen",
    "studio": "Manglobe",
    "lead_gender": "Female"
  },
  {
    "rank": "148",
    "title": "A Place Further Than the Universe",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/6/89879.jpg?s=273f1505d409ac20eed3e0c255a2f903",
    "episodes": "13 eps · 0 movies",
    "year": "2018",
    "genre": "Adventure",
    "studio": "Madhouse",
    "lead_gender": "Female"
  },
  {
    "rank": "149",
    "title": "Cardcaptor Sakura",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/8/60781.jpg?s=ceceafe46ce85611604b1b0e5d2d7dad",
    "episodes": "70 eps · 2 movies",
    "year": "1998",
    "genre": "Shoujo",
    "studio": "Madhouse",
    "lead_gender": "Female"
  },
  {
    "rank": "150",
    "title": "The Quintessential Quintuplets",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1819/97947.jpg?s=63766d471cbb06b0bc8d4c81d5fc98fe",
    "episodes": "24 eps · 1 movie",
    "year": "2019",
    "genre": "Shounen",
    "studio": "Tezuka Productions",
    "lead_gender": "Male"
  },
  {
    "rank": "151",
    "title": "Seraph of the End",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1879/148979.jpg?s=3f0b05d4bbd86a716e0fc8bb23b967e0",
    "episodes": "24 eps · 0 movies",
    "year": "2015",
    "genre": "Shounen",
    "studio": "Wit Studio",
    "lead_gender": "Male"
  },
  {
    "rank": "152",
    "title": "Blue Lock",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1258/126929.jpg?s=a978bcf47a16c7859d20c21e32764a65",
    "episodes": "48 eps · 1 movie",
    "year": "2022",
    "genre": "Shounen",
    "studio": "Eight Bit",
    "lead_gender": "Male"
  },
  {
    "rank": "153",
    "title": "Ghost in the Shell",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/10/82594.jpg?s=077dce74e000ea7dcd77c738bd1cbee0",
    "episodes": "1 movie · 3 series (55 eps)",
    "year": "1995",
    "genre": "Seinen",
    "studio": "Production I.G",
    "lead_gender": "Female"
  },
  {
    "rank": "154",
    "title": "Golden Time",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/12/52091.jpg?s=99c4234ca513f168c965d872c62f7fae",
    "episodes": "24 eps · 0 movies",
    "year": "2013",
    "genre": "Drama",
    "studio": "J.C.Staff",
    "lead_gender": "Male"
  },
  {
    "rank": "155",
    "title": "Initial D",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1384/127972.jpg?s=2b7046bea885b88c9742e0abdb601da6",
    "episodes": "134 eps · 3 movies",
    "year": "1998",
    "genre": "Seinen",
    "studio": "Gallop",
    "lead_gender": "Male"
  },
  {
    "rank": "156",
    "title": "SK8 the Infinity",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1549/119195.jpg?s=26aec1dc363556177f1d6cf93cb86213",
    "episodes": "12 eps · 0 movies",
    "year": "2021",
    "genre": "Sports",
    "studio": "Bones",
    "lead_gender": "Male"
  },
  {
    "rank": "157",
    "title": "Ranking of Kings",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1347/117616.jpg?s=1fc7d9cfcad3dfca1cee2e11b5b74ef4",
    "episodes": "23 eps · 0 movies",
    "year": "2021",
    "genre": "Adventure",
    "studio": "Wit Studio",
    "lead_gender": "Male"
  },
  {
    "rank": "158",
    "title": "Saga of Tanya the Evil",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/5/82890.jpg?s=b8b3b76d7d72c1730859e6e0f7a88dd7",
    "episodes": "12 eps · 1 movie",
    "year": "2017",
    "genre": "Action",
    "studio": "Nut",
    "lead_gender": "Female"
  },
  {
    "rank": "159",
    "title": "Barakamon",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1426/111248.jpg?s=8abf35da87707ea81557e0287f88eb76",
    "episodes": "12 eps · 0 movies",
    "year": "2014",
    "genre": "Slice of Life",
    "studio": "Kinema Citrus",
    "lead_gender": "Male"
  },
  {
    "rank": "160",
    "title": "The Ancient Magus' Bride",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/3/88476.jpg?s=0dcaf8e0720f4a54712da5423b63bd1e",
    "episodes": "36 eps · 0 movies",
    "year": "2017",
    "genre": "Shounen",
    "studio": "Wit Studio",
    "lead_gender": "Female"
  },
  {
    "rank": "161",
    "title": "Lucky☆Star",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1561/115660.jpg?s=79acc51ecc77b35fe5f61096dec935c3",
    "episodes": "24 eps · 0 movies",
    "year": "2007",
    "genre": "Comedy",
    "studio": "Kyoto Animation",
    "lead_gender": "Female"
  },
  {
    "rank": "162",
    "title": "Weathering with You",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1880/101146.jpg?s=9af3404e6d1a762ec2ff5730cf7b2929",
    "episodes": "1 movie",
    "year": "2019",
    "genre": "Award Winning",
    "studio": "CoMix Wave Films",
    "lead_gender": "Male"
  },
  {
    "rank": "163",
    "title": "Plastic Memories",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/4/72750.jpg?s=61d6461811fb65b5ad164b3d69115af8",
    "episodes": "13 eps · 0 movies",
    "year": "2015",
    "genre": "Drama",
    "studio": "Doga Kobo",
    "lead_gender": "Male"
  },
  {
    "rank": "164",
    "title": "Toilet-Bound Hanako-kun",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1050/111687.jpg?s=7b7b9b84ca3645e8a525379422fd39c9",
    "episodes": "12 eps · 0 movies",
    "year": "2020",
    "genre": "Shounen",
    "studio": "Lerche",
    "lead_gender": "Male"
  },
  {
    "rank": "165",
    "title": "Is It Wrong to Try to Pick Up Girls in a Dungeon?",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1172/148981.jpg?s=8808665b6816878c571e40e15bbe7d5e",
    "episodes": "52 eps · 1 movie",
    "year": "2015",
    "genre": "Action",
    "studio": "J.C.Staff",
    "lead_gender": "Male"
  },
  {
    "rank": "166",
    "title": "Delicious in Dungeon",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1711/142478.jpg?s=8c432fe78ec9dd1b3219f3c5faf4308f",
    "episodes": "24 eps · 0 movies",
    "year": "2024",
    "genre": "Seinen",
    "studio": "Trigger",
    "lead_gender": "Male"
  },
  {
    "rank": "167",
    "title": "Wotakoi: Love is Hard for Otaku",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1864/93518.jpg?s=b05fb47d89f6b9ae039a5bce238f630a",
    "episodes": "11 eps · 0 movies",
    "year": "2018",
    "genre": "Comedy",
    "studio": "A-1 Pictures",
    "lead_gender": "Female"
  },
  {
    "rank": "168",
    "title": "Komi Can't Communicate",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1899/117237.jpg?s=0973a9cceca514f0bfe5a8d1c68feafc",
    "episodes": "24 eps · 0 movies",
    "year": "2021",
    "genre": "Shounen",
    "studio": "OLM",
    "lead_gender": "Female"
  },
  {
    "rank": "169",
    "title": "Beyond the Boundary",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/3/85468.jpg?s=4f7cc2a1b3cae7557e6ba71097a0a2ae",
    "episodes": "13 eps · 2 movies",
    "year": "2013",
    "genre": "Action",
    "studio": "Kyoto Animation",
    "lead_gender": "Female"
  },
  {
    "rank": "170",
    "title": "Laid-Back Camp",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/4/89877.jpg?s=8e699d9f6546f445c3810a311be6fbac",
    "episodes": "25 eps · 1 movie",
    "year": "2018",
    "genre": "Slice of Life",
    "studio": "C-Station",
    "lead_gender": "Female"
  },
  {
    "rank": "171",
    "title": "Wolf Children",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/9/35721.jpg?s=3cb7f7062c2ef1c69ab18d7e3c04af2b",
    "episodes": "1 movie",
    "year": "2012",
    "genre": "Award Winning",
    "studio": "Studio Chizu",
    "lead_gender": "Female"
  },
  {
    "rank": "172",
    "title": "Vivy: Fluorite Eye's Song",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1551/128960.jpg?s=67a2a6c975f3e331b6eb37be90e0f7ae",
    "episodes": "13 eps · 0 movies",
    "year": "2021",
    "genre": "Action",
    "studio": "Wit Studio",
    "lead_gender": "Female"
  },
  {
    "rank": "173",
    "title": "Kakegurui",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/3/86578.jpg?s=9bc5e03a533e5f4c1f08115686952c02",
    "episodes": "24 eps · 0 movies",
    "year": "2017",
    "genre": "Seinen",
    "studio": "MAPPA",
    "lead_gender": "Female"
  },
  {
    "rank": "174",
    "title": "5 Centimeters per Second",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1410/112994.jpg?s=1ce5c6dba218d53418a158318af988cf",
    "episodes": "1 movie",
    "year": "2007",
    "genre": "Award Winning",
    "studio": "CoMix Wave Films",
    "lead_gender": "Male"
  },
  {
    "rank": "175",
    "title": "Ao Haru Ride",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/8/64813.jpg?s=9e4c5b58a128fac9cba4ad5b68957c39",
    "episodes": "12 eps · 0 movies",
    "year": "2014",
    "genre": "Shoujo",
    "studio": "Production I.G",
    "lead_gender": "Female"
  },
  {
    "rank": "176",
    "title": "Summertime Rendering",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1120/120796.jpg?s=a52ff27a36d2c027953221d2627c898e",
    "episodes": "25 eps · 0 movies",
    "year": "2022",
    "genre": "Mystery",
    "studio": "OLM",
    "lead_gender": "Male"
  },
  {
    "rank": "177",
    "title": "Dragon Ball Super",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/7/74606.jpg?s=45a02b9bcc08d906381a086129f6a0f5",
    "episodes": "131 eps · 2 movies",
    "year": "2015",
    "genre": "Shounen",
    "studio": "Toei Animation",
    "lead_gender": "Male"
  },
  {
    "rank": "178",
    "title": "Gekkan Shoujo Nozaki-kun",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/5/66083.jpg?s=59ab3e9362a2bbed54ae5420b27032bb",
    "episodes": "12 eps · 0 movies",
    "year": "2014",
    "genre": "Comedy",
    "studio": "Doga Kobo",
    "lead_gender": "Female"
  },
  {
    "rank": "179",
    "title": "Lovely★Complex",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/11/75563.jpg?s=b1fa8caafd5a46b6f1d147d5d5fc7e33",
    "episodes": "24 eps · 0 movies",
    "year": "2007",
    "genre": "Shoujo",
    "studio": "Toei Animation",
    "lead_gender": "Female"
  },
  {
    "rank": "180",
    "title": "Mahouka Koukou no Rettousei",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/11/61039.jpg?s=756212b647e5984657d6868789138b98",
    "episodes": "51 eps · 1 movie",
    "year": "2014",
    "genre": "Action",
    "studio": "Madhouse",
    "lead_gender": "Male"
  },
  {
    "rank": "181",
    "title": "Bishoujo Senshi Sailor Moon",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1440/92258.jpg?s=dc170c736a2b70dda78e68076f582cc2",
    "episodes": "200 eps · 3 movies",
    "year": "1992",
    "genre": "Shoujo",
    "studio": "Toei Animation",
    "lead_gender": "Female"
  },
  {
    "rank": "182",
    "title": "Nisekoi",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/13/75587.jpg?s=62eb23b86cf20c3b322424c96703b742",
    "episodes": "32 eps · 0 movies",
    "year": "2014",
    "genre": "Shounen",
    "studio": "Shaft",
    "lead_gender": "Male"
  },
  {
    "rank": "183",
    "title": "Katanagatari",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1112/119225.jpg?s=8483e6dd4b09a1e78b981c0c4ed407c4",
    "episodes": "12 eps · 0 movies",
    "year": "2010",
    "genre": "Action",
    "studio": "White Fox",
    "lead_gender": "Male"
  },
  {
    "rank": "184",
    "title": "Kaiji",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/12/80032.jpg?s=6ef986d09947548bafdd283a291c3039",
    "episodes": "52 eps · 0 movies",
    "year": "2007",
    "genre": "Seinen",
    "studio": "Madhouse",
    "lead_gender": "Male"
  },
  {
    "rank": "185",
    "title": "ReLIFE",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/3/82149.jpg?s=0eb8569cc7bae097d7c9a03d1efbdc36",
    "episodes": "17 eps · 0 movies",
    "year": "2016",
    "genre": "Drama",
    "studio": "TMS Entertainment",
    "lead_gender": "Male"
  },
  {
    "rank": "186",
    "title": "Hataraku Maou-sama!",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/3/50177.jpg?s=806f9709a27518b8243d0d881f5384ff",
    "episodes": "26 eps · 0 movies",
    "year": "2013",
    "genre": "Comedy",
    "studio": "White Fox",
    "lead_gender": "Male"
  },
  {
    "rank": "187",
    "title": "Highschool of the Dead",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/11/78311.jpg?s=f844b0a0eb565be6f052105c320dbc60",
    "episodes": "12 eps · 0 movies",
    "year": "2010",
    "genre": "Shounen",
    "studio": "Madhouse",
    "lead_gender": "Male"
  },
  {
    "rank": "188",
    "title": "Fire Force",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1664/103275.jpg?s=862177f32b646985d9ad953cdee042f6",
    "episodes": "48 eps · 0 movies",
    "year": "2019",
    "genre": "Shounen",
    "studio": "David Production",
    "lead_gender": "Male"
  },
  {
    "rank": "189",
    "title": "Call of the Night",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1045/123711.jpg?s=219e38cd932e0903e083200cdfea4470",
    "episodes": "13 eps · 0 movies",
    "year": "2022",
    "genre": "Seinen",
    "studio": "Liden Films",
    "lead_gender": "Male"
  },
  {
    "rank": "190",
    "title": "Hotarubi no Mori e",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1599/112267.jpg?s=7e39477791c4d80525b1bed137843e6c",
    "episodes": "1 movie",
    "year": "2011",
    "genre": "Seinen",
    "studio": "Brain's Base",
    "lead_gender": "Female"
  },
  {
    "rank": "191",
    "title": "Tonikaku Kawaii",
    "imageUrl": "https://cdn.myanimelist.net/r/50x70/images/anime/1613/108722.jpg?s=e60b8d838f5083c9f84ebb1ac427c700",
    "episodes": "24 eps · 0 movies",
    "year": "2020",
    "genre": "Seinen",
    "studio": "Doga Kobo",
    "lead_gender": "Male"
  },
  {
    "rank": "192",
    "title": "Rising of the Shield Hero",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1490/101365.jpg",
    "episodes": "38 eps · 0 movies",
    "year": "2019",
    "genre": "Action",
    "studio": "Kinema Citrus",
    "lead_gender": "Male"
  },
  {
    "rank": "193",
    "title": "Case Closed (Detective Conan)",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/7/75199.jpg",
    "episodes": "1100+ eps · 26 movies",
    "year": "1996",
    "genre": "Shounen",
    "studio": "TMS Entertainment",
    "lead_gender": "Male"
  },
  {
    "rank": "194",
    "title": "Ping Pong the Animation",
    "imageUrl": "https://cdn.myanimelist.net/images/anime/1586/146565.jpg",
    "episodes": "11 eps · 0 movies",
    "year": "2014",
    "genre": "Seinen",
    "studio": "Tatsunoko Production",
    "lead_gender": "Male"
  }
];