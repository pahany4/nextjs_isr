const list = {
  links: {
    next: null,
    previous: null,
    count: 1,
  },
  total_objects_count: 5,
  current_data_count: 5,
  results: [
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
