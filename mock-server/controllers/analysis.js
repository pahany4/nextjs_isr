const list = {
  links: {
    next: null,
    previous: null,
    count: 1,
  },
  total_objects_count: 20,
  current_data_count: 20,
  results: [
    {
      id: 22,
      title: "2222Давление насыщенных паров",
      indicator: "Давление насыщенных паров",
      price: "900.00",
      capacity: "0.50000",
      date_interval: 5,
      categories: [2, 3, 4, 5, 6],
    },
    {
      id: 21,
      title: "11111Давление насыщенных паров",
      indicator: "Давление насыщенных паров",
      price: "900.00",
      capacity: "0.50000",
      date_interval: 5,
      categories: [2, 3, 4, 5, 6],
    },
    {
      id: 20,
      title: "Давление насыщенных паров",
      indicator: "Давление насыщенных паров",
      price: "900.00",
      capacity: "0.50000",
      date_interval: 5,
      categories: [2, 3, 4, 5, 6],
    },
    {
      id: 19,
      title: "Вода, массовая доля по ГОСТ 2477",
      indicator: "Массовая доля воды",
      price: "2100.00",
      capacity: "0.50000",
      date_interval: 5,
      categories: [1, 11, 12],
    },
    {
      id: 18,
      title: "Вода, массовая доля по Карлу Фишеру (EN ISO 12937:2000)",
      indicator: "Массовая доля воды",
      price: "2500.00",
      capacity: "0.50000",
      date_interval: 8,
      categories: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      id: 17,
      title: "Температура вспышки в открытом тигле",
      indicator: "Температура вспышки в открытом тигле",
      price: "1100.00",
      capacity: "0.50000",
      date_interval: 3,
      categories: [1, 11, 12],
    },
    {
      id: 16,
      title: "Плотность тёмных НП",
      indicator: "Плотность",
      price: "300.00",
      capacity: "0.10000",
      date_interval: 2,
      categories: [1, 11, 12],
    },
    {
      id: 15,
      title: "Плотность светлых НП",
      indicator: "Плотность",
      price: "250.00",
      capacity: "0.20000",
      date_interval: 1,
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    },
    {
      id: 14,
      title: "Седиментационная устойчивость",
      indicator: "Седиментационная устойчивость",
      price: "3000.00",
      capacity: "1.00000",
      date_interval: 48,
      categories: [8, 9, 10, 7],
    },
    {
      id: 13,
      title: "Температура помутнения",
      indicator: "Температура помутнения",
      price: "900.00",
      capacity: "0.20000",
      date_interval: 3,
      categories: [8, 9, 10, 7],
    },
    {
      id: 12,
      title: "Температура застывания, температура потери текучести тёмных НП",
      indicator: "Температура застывания, температура потери текучести тёмных НП",
      price: "1400.00",
      capacity: "0.20000",
      date_interval: 4,
      categories: [1, 11, 12],
    },
    {
      id: 11,
      title: "Температура застывания, температура потери текучести светлых НП",
      indicator: "Температура застывания, температура потери текучести светлых НП",
      price: "1200.00",
      capacity: "0.20000",
      date_interval: 5,
      categories: [1, 7, 8, 9, 10, 12],
    },
    {
      id: 10,
      title: "Смазывающая способность",
      indicator: "Смазывающая способность: скорректированный диаметр пятна износа (wsd 1,4) при 60°С",
      price: "5500.00",
      capacity: "0.10000",
      date_interval: 4,
      categories: [8, 9, 10, 7],
    },
    {
      id: 9,
      title: "Цетановое число",
      indicator: "Цетановое число",
      price: "6500.00",
      capacity: "1.00000",
      date_interval: 4,
      categories: [7, 8, 9, 10, 12],
    },
    {
      id: 8,
      title: "Цетановый индекс",
      indicator: "Цетановый индекс",
      price: "1200.00",
      capacity: "0.50000",
      date_interval: 3,
      categories: [8, 9, 10, 7],
    },
    {
      id: 7,
      title: "Октановое число по моторному методу",
      indicator: "Октановое число по моторному методу",
      price: "2700.00",
      capacity: "1.00000",
      date_interval: 6,
      categories: [2, 3, 4, 5, 6],
    },
    {
      id: 6,
      title: "Октановое число по исследовательскому методу",
      indicator: "Октановое число по исследовательскому методу",
      price: "2300.00",
      capacity: "1.00000",
      date_interval: 5,
      categories: [2, 3, 4, 5, 6],
    },
    {
      id: 5,
      title: "Фракционный состав",
      indicator: "Фракционный состав",
      price: "1100.00",
      capacity: "0.50000",
      date_interval: 2,
      categories: [2, 3, 4, 5, 6],
    },
    {
      id: 4,
      title: "Сера, массовая доля",
      indicator: "Массовая доля серы",
      price: "1400.00",
      capacity: "0.50000",
      date_interval: 2,
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    },
    {
      id: 3,
      title: "Температура вспышки в закрытом тигле",
      indicator: "Температура вспышки в закрытом тигле",
      price: "900.00",
      capacity: "0.20000",
      date_interval: 2,
      categories: [7, 8, 9, 10],
    },
    {
      id: 2,
      title: "ПТФ (Предельная температура фильтруемости)",
      indicator: "Предельная температура фильтруемости",
      price: "1300.00",
      capacity: "0.50000",
      date_interval: 3,
      categories: [7, 8, 9, 10],
    },
    {
      id: 1,
      title: "Металлы в нефти и нефтепродуктах (железо, марганец, никель, ванадий, цинк)",
      indicator: "Содержание металлов",
      price: "2400.00",
      capacity: "0.20000",
      date_interval: 2,
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    },
  ],
}
export const analysis_list = (req, res) => {
  res.status(200).json(list);
};

const analysis = {
  id: 23,
  title: "Сера",
  indicator: "Концентрация серы",
  description: "",
  price: "10.00",
  capacity: "1.00000",
  categories: [{ id: 1, title: "Нефтепродукт", description: "", code: 1 }],
  date_interval: 1,
  methods: [
    {
      id: 2,
      title:
        "Топлива автомобильные. Метод определения содержания серы рентгенофлуоресцентной спектрометрией с дисперсией по длине волны",
      registration_number: "ГОСТ Р 52660-2006",
      link: "",
    },
    {
      id: 1,
      title: "Нефтепродукты. Методы определения температур вспышки и воспламенения в открытом тигле",
      registration_number: "ГОСТ Р 52660",
      link: "",
    },
  ],
  subanalysis: [
    { id: 1, title: "Концентрация серы", description: "более", norm: "3", unit: 2 },
    { id: 2, title: "Концентрация Zn", description: "не более", norm: "1", unit: 1 },
    { id: 3, title: "Концентрация pb", description: "более", norm: "4", unit: 2 },
    { id: 4, title: "Концентрация Fe", description: "не более", norm: "8", unit: 3 },
  ],
  devices: [
    {
      id: 2,
      title: "Аппарат рентгеновский для спектрального анализа Спектроскан-МАКС-GVM",
      number: "9033",
      last_service_date: "2022-05-02",
      next_service_date: "2023-10-21",
    },
  ],
};

/*export const analysisInfo = (req, res) => {
  res.status(200).json(analysis);
};*/
export const analysisInfo = (req, res) => {
  console.log(req.params.id, typeof req.params.id)
  //console.log(analysis_list.results.find(analysis => analysis.id.toString() === req.params.id.toString()))
  console.log(analysis_list.results)
  const analysis = list.results.find(analysis => analysis.id.toString() === req.params.id.toString())

  if (analysis !== undefined) {
    res.status(200).json(analysis);
  } else {
    res.status(404).json()
  }
};

export const analysisUpdate = (req, res) => {
  res.status(200).json(req.body);
};

export const add_analysis = (req, res) => {
  res.status(200).json({
    id: 5,
    title: "Сера",
    indicator: "Концентрация серы",
    description: "",
    price: "10.00",
    capacity: "1.00000",
    categories: [{ id: 1, title: "Нефтепродукт", description: "", code: 1 }],
    date_interval: 1,
    methods: [
      {
        id: 2,
        title:
          "Топлива автомобильные. Метод определения содержания серы рентгенофлуоресцентной спектрометрией с дисперсией по длине волны",
        registration_number: "ГОСТ Р 52660-2006",
        link: "",
      },
      {
        id: 1,
        title: "Нефтепродукты. Методы определения температур вспышки и воспламенения в открытом тигле",
        registration_number: "ГОСТ Р 52660",
        link: "",
      },
    ],
    subanalysis: [{ id: 64, title: "Концентрация серы", description: "", norm: "не более 10", unit: 2 }],
    devices: [
      {
        id: 2,
        title: "Аппарат рентгеновский для спектрального анализа Спектроскан-МАКС-GVM",
        number: "9033",
        last_service_date: "2022-05-02",
        next_service_date: "2023-10-21",
      },
    ],
  });
};
