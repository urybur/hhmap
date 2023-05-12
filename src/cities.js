const cities = [
  {
    id: 0,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1021",
    city: "Нижний Новгород",
    placemark: {
      geometry: [56.641311, 47.871342],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 1,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1022",
    city: "Йошкар-Ола",
    placemark: {
      geometry: [56.328571, 44.002048],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 2,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1023",
    city: "Норма",
    placemark: {
      geometry: [56.337247, 50.277449],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 3,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1036",
    city: "Улан-Удэ",
    placemark: {
      geometry: [51.834809, 107.584547],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 4,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1034",
    city: "Улан-Удэ",
    placemark: {
      geometry: [56.946845, 24.106075],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 5,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1024",
    city: "Петрозаводск",
    placemark: {
      geometry: [61.791244, 34.391273],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 6,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1025",
    city: "Березовский",
    placemark: {
      geometry: [56.909583, 60.816457],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 7,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1026",
    city: "Уфа",
    placemark: {
      geometry: [54.735152, 55.958736],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 8,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1027",
    city: "Москва. Соколиная гора",
    placemark: {
      geometry: [55.77278, 37.730625],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 9,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1028",
    city: "Москва. Лефортово",
    placemark: {
      geometry: [55.753635, 37.704826],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 10,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1029",
    city: "Челябинск",
    placemark: {
      geometry: [55.159902, 61.402554],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 11,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1030",
    city: "Киров",
    placemark: {
      geometry: [58.603595, 49.668023],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 12,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1031",
    city: "Москва",
    placemark: {
      geometry: [55.755864, 37.617698],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 13,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1032",
    city: "Барнаул",
    placemark: {
      geometry: [53.346785, 83.776856],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 14,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1033",
    city: "Тобольск",
    placemark: {
      geometry: [58.19667, 68.23381],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 15,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1035",
    city: "Новочебоксарск",
    placemark: {
      geometry: [56.108738, 47.476807],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 16,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1037",
    city: "Большая Ижора",
    placemark: {
      geometry: [59.945657, 29.569368],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 17,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1039",
    city: "Чебоксары",
    placemark: {
      geometry: [56.139918, 47.247728],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 18,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1040",
    city: "Тольятти",
    placemark: {
      geometry: [53.507852, 49.420411],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 19,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1041",
    city: "Москва. Коньково",
    placemark: {
      geometry: [55.644348, 37.529654],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 20,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1042",
    city: "Хабаровск",
    placemark: {
      geometry: [48.480229, 135.071917],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 21,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1043",
    city: "Минск",
    placemark: {
      geometry: [53.902284, 27.561831],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 22,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1044",
    city: "Владивосток",
    placemark: {
      geometry: [43.115542, 131.885494],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 23,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1045",
    city: "Краснодар",
    placemark: {
      geometry: [45.03547, 38.975313],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 24,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1046",
    city: "Москва. Савёловский",
    placemark: {
      geometry: [55.799699, 37.570923],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 25,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1047",
    city: "Магнитогорск",
    placemark: {
      geometry: [53.407163, 58.980291],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 26,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1048",
    city: "Сыктывкар",
    placemark: {
      geometry: [61.668797, 50.836497],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 27,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1049",
    city: "Баку",
    placemark: {
      geometry: [40.369546, 49.835073],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 28,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1050",
    city: "Нью-Йорк",
    placemark: {
      geometry: [40.714606, -74.0028],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 29,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1051",
    city: "Бамберг",
    placemark: {
      geometry: [49.89687, 10.894328],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 30,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1052",
    city: "Лондон",
    placemark: {
      geometry: [51.507351, -0.127696],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 31,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1053",
    city: "Ростов-на-Дону",
    placemark: {
      geometry: [47.222078, 39.720358],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 32,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1054",
    city: "Воронеж",
    placemark: {
      geometry: [51.660781, 39.200296],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 33,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1055",
    city: "Новосибирск",
    placemark: {
      geometry: [55.030204, 82.92043],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 34,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1056",
    city: "Санкт-Петербург",
    placemark: {
      geometry: [59.938955, 30.315644],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 35,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1057",
    city: "Вологда",
    placemark: {
      geometry: [59.220501, 39.891523],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 36,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1058",
    city: "Брянск",
    placemark: {
      geometry: [53.2434, 34.363991],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 37,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1059",
    city: "Москва. Марьино",
    placemark: {
      geometry: [55.652669, 37.744774],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 38,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1060",
    city: "Ухта",
    placemark: {
      geometry: [63.566006, 53.663999],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 39,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1061",
    city: "Тюмень",
    placemark: {
      geometry: [57.152985, 65.541227],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 40,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1062",
    city: "Черновцы",
    placemark: {
      geometry: [48.292066, 25.93518],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 41,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1063",
    city: "Киев",
    placemark: {
      geometry: [50.450441, 30.52355],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 42,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1064",
    city: "Москва. Южное Бутово",
    placemark: {
      geometry: [55.542401, 37.531523],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 43,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1065",
    city: "Иркутск",
    placemark: {
      geometry: [52.289588, 104.280606],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 44,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1067",
    city: "Москва. Замоскворечье",
    placemark: {
      geometry: [55.734162, 37.63429],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 45,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1068",
    city: "Москва. Красная Пресня",
    placemark: {
      geometry: [55.761715, 37.570986],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 46,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1069",
    city: "Самара",
    placemark: {
      geometry: [53.195878, 50.100202],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 47,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1070",
    city: "Екатеринбург",
    placemark: {
      geometry: [56.838011, 60.597474],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 48,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1071",
    city: "Бремен",
    placemark: {
      geometry: [53.119951, 8.806778],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 49,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1072",
    city: "Черняховск",
    placemark: {
      geometry: [54.630706, 21.819503],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 50,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1073",
    city: "Кострома",
    placemark: {
      geometry: [57.767918, 40.926894],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 51,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1074",
    city: "Барселона",
    placemark: {
      geometry: [41.386378, 2.18676],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 52,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1075",
    city: "Бишкек",
    placemark: {
      geometry: [42.875969, 74.603701],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 54,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1077",
    city: "Нижневартовск",
    placemark: {
      geometry: [60.938545, 76.558902],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 55,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1078",
    city: "Тучково",
    placemark: {
      geometry: [55.600857, 36.47187],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 56,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1079",
    city: "Москва. Вешняки",
    placemark: {
      geometry: [55.730776, 37.815193],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 57,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1080",
    city: "Пенза",
    placemark: {
      geometry: [53.195042, 45.018316],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 58,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1081",
    city: "Караганда",
    placemark: {
      geometry: [49.80776, 73.088504],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 59,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1082",
    city: "Шушары",
    placemark: {
      geometry: [59.807224, 30.379523],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 60,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1083",
    city: "Алматы",
    placemark: {
      geometry: [43.237163, 76.945627],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 61,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1084",
    city: "Красногорск",
    placemark: {
      geometry: [55.831003, 37.330399],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 62,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1085",
    city: "Кривой Рог",
    placemark: {
      geometry: [47.91042, 33.391789],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 63,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1086",
    city: "Витебск",
    placemark: {
      geometry: [55.184217, 30.202878],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 64,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1087",
    city: "Астана",
    placemark: {
      geometry: [51.128207, 71.43042],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 65,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1088",
    city: "Москва. Новые черемушки",
    placemark: {
      geometry: [55.672793, 37.56326],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 66,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1089",
    city: "Гомель",
    placemark: {
      geometry: [52.42416, 31.014281],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 67,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1090",
    city: "Владикавказ",
    placemark: {
      geometry: [43.024616, 44.681771],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 68,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1091",
    city: "Москва. Кутозовский проспект",
    placemark: {
      geometry: [55.735038, 37.509236],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 69,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1092",
    city: "Санкт-Петербург. Дыбенко",
    placemark: {
      geometry: [59.904356, 30.472364],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 70,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1093",
    city: "Актау",
    placemark: {
      geometry: [43.635588, 51.168245],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 71,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1094",
    city: "Магоча",
    placemark: {
      geometry: [53.736211, 119.766089],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 72,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1095",
    city: "Нальчик",
    placemark: {
      geometry: [43.485259, 43.607081],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 73,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1096",
    city: "Саратов",
    placemark: {
      geometry: [51.533562, 46.034266],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 74,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1097",
    city: "Артёмовский",
    placemark: {
      geometry: [57.337669, 61.895513],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 75,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1098",
    city: "Москва. Чертаново",
    placemark: {
      geometry: [55.61388, 37.604098],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 76,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1099",
    city: "Харьков",
    placemark: {
      geometry: [49.992167, 36.231202],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 77,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1100",
    city: "Лобня",
    placemark: {
      geometry: [56.01242, 37.47492],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 78,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1101",
    city: "Томск",
    placemark: {
      geometry: [56.484645, 84.947649],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 79,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1102",
    city: "Розтоки",
    placemark: {
      geometry: [50.160735, 14.395657],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 80,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1103",
    city: "Калининград",
    placemark: {
      geometry: [54.710162, 20.510137],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 81,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1104",
    city: "Кировград",
    placemark: {
      geometry: [57.431916, 60.062321],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 82,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1105",
    city: "Филадельфия",
    placemark: {
      geometry: [39.948419, -75.150173],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 83,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1106",
    city: "Ротенбург-на-Вюмме",
    placemark: {
      geometry: [53.11426, 9.380568],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 84,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1107",
    city: "Красноярск",
    placemark: {
      geometry: [56.010569, 92.852572],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 85,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1108",
    city: "Могилев",
    placemark: {
      geometry: [53.894548, 30.330654],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 86,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1109",
    city: "Омск",
    placemark: {
      geometry: [54.989347, 73.368221],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 87,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1110",
    city: "Братск",
    placemark: {
      geometry: [56.151682, 101.633505],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 88,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1111",
    city: "Москва. Текстильщики",
    placemark: {
      geometry: [55.70881, 37.737444],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 89,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1112",
    city: "Одесса",
    placemark: {
      geometry: [46.484213, 30.731689],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 90,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1113",
    city: "Казань",
    placemark: {
      geometry: [55.796127, 49.106414],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 91,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1114",
    city: "Алатырь",
    placemark: {
      geometry: [54.840526, 46.591949],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 92,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1122",
    city: "Костанай",
    placemark: {
      geometry: [53.214496, 63.6321],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 93,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1116",
    city: "Москва. Кузьминки",
    placemark: {
      geometry: [55.698645, 37.773556],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 94,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1117",
    city: "Зеленоград",
    placemark: {
      geometry: [55.991893, 37.21439],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 95,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1118",
    city: "Печора",
    placemark: {
      geometry: [65.104875, 57.154304],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 96,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1119",
    city: "Нижний Одес",
    placemark: {
      geometry: [63.638923, 54.84584],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 97,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1121",
    city: "Набережные Челны",
    placemark: {
      geometry: [55.741272, 52.403662],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 98,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1123",
    city: "Москва. Арбат",
    placemark: {
      geometry: [55.751143, 37.590003],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 99,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1124",
    city: "Москва. Братеево",
    placemark: {
      geometry: [55.633434, 37.765067],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 100,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1125",
    city: "Якутск",
    placemark: {
      geometry: [62.027221, 129.732178],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 101,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1038",
    city: "Павлодар",
    placemark: {
      geometry: [52.285577, 76.940722],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 102,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1066",
    city: "Гуково",
    placemark: {
      geometry: [48.061025, 39.934929],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 103,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1129",
    city: "Пермь",
    placemark: {
      geometry: [58.010455, 56.229443],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 104,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1130",
    city: "Ош",
    placemark: {
      geometry: [40.517525, 72.80557],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 105,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1132",
    city: "Астрахань",
    placemark: {
      geometry: [46.347614, 48.030178],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 106,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1133",
    city: "Ижевск",
    placemark: {
      geometry: [56.845081, 53.188062],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 107,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1134",
    city: "Ульяновск",
    placemark: {
      geometry: [54.314192, 48.403132],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 108,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1135",
    city: "Волгоград",
    placemark: {
      geometry: [48.707067, 44.516975],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 109,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1136",
    city: "Рязань",
    placemark: {
      geometry: [54.629565, 39.741917],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 110,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1137",
    city: "Скопин",
    placemark: {
      geometry: [53.82359, 39.54939],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 111,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1138",
    city: "Сочи",
    placemark: {
      geometry: [43.585472, 39.723098],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 112,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1139",
    city: "Ачинск",
    placemark: {
      geometry: [56.269501, 90.49524],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 113,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1141",
    city: "Березники",
    placemark: {
      geometry: [59.391325, 56.714363],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 114,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1142",
    city: "Магадан",
    placemark: {
      geometry: [59.565155, 150.808586],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 115,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1143",
    city: "Севастополь",
    placemark: {
      geometry: [44.556972, 33.526402],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 116,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1144",
    city: "Новороссийск",
    placemark: {
      geometry: [44.723771, 37.768813],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 117,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1146",
    city: "Донецк",
    placemark: {
      geometry: [48.015884, 37.80285],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 118,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1147",
    city: "Кисловодск",
    placemark: {
      geometry: [43.905518, 42.715718],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 119,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1148",
    city: "Владимир",
    placemark: {
      geometry: [56.129057, 40.406635],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 120,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1149",
    city: "Херсон",
    placemark: {
      geometry: [46.640319, 32.614962],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
  {
    id: 121,
    playlistUrl: "https://music.yandex.ru/iframe/#playlist/uryburj/1150",
    city: "Альметьевск",
    placemark: {
      geometry: [54.901171, 52.29723],
      properties: {
        iconContent: "",
      },
      options: {
        preset: "islands#blackStretchyIcon",
        draggable: false,
      },
    },
  },
];

export default cities;
