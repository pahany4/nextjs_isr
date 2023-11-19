const result = {
  id: 3,
  title: "Металлы в нефти и нефтепродуктах (железо, марганец, никель, ванадий, цинк)",
  description: "",
  price: "2400.00",
  order: 3,
  executor: { id: 2, first_name: "Павел", last_name: "Гайдуков", patronymic: "Владимирович", role: 40 },
  methods: [
    {
      id: 2,
      title: "Определение Pb, Zn, Ni, Fe, Mn, V в нефти и нефтепродуктах",
      registration_number: "ГОСТ 32508",
      link: "https://docs.cntd.ru/document/1200108178",
    },
  ],
  devices: [
    {
      id: 2,
      title: "весы",
      registration_number: "554499",
    },
  ],
  date_created: "2022-10-28T13:27:12+07:00",
  date_updated: "2022-10-28T17:09:57.604903+07:00",
  sub_results: [
    {
      id: 28,
      title: "Содержание Pb",
      value: "9",
      norm: "5",
      variation: "10",
      parent_result: 3,
      description: "не более",
      unit: "г/л",
      date_updated: "2022-10-28T14:58:10.911868+07:00",
      date_created: "2022-10-28T13:33:49.781606+07:00",
    },
    {
      id: 27,
      title: "Содержание Zn",
      value: "7",
      norm: "-",
      variation: "8",
      parent_result: 3,
      description: "",
      unit: "г/л",
      date_updated: "2022-10-28T14:58:11.009417+07:00",
      date_created: "2022-10-28T13:33:49.772742+07:00",
    },
    {
      id: 26,
      title: "Содержание Ni",
      value: "5",
      norm: "-",
      variation: "6",
      parent_result: 3,
      description: "",
      unit: "г/л",
      date_updated: "2022-10-28T14:58:10.967946+07:00",
      date_created: "2022-10-28T13:33:49.763824+07:00",
    },
    {
      id: 25,
      title: "Содержание Mn",
      value: "3",
      norm: "Отсутствие",
      variation: "4",
      parent_result: 3,
      description: "",
      unit: "г/л",
      date_updated: "2022-10-28T14:58:10.795348+07:00",
      date_created: "2022-10-28T13:33:49.755231+07:00",
    },
    {
      id: 24,
      title: "Содержание Fe",
      value: "1",
      norm: "Отсутствие",
      variation: "2",
      parent_result: 3,
      description: "",
      unit: "г/л",
      date_updated: "2022-10-28T14:58:11.053008+07:00",
      date_created: "2022-10-28T13:33:49.734790+07:00",
    },
  ],
  status: 20,
  product: {
    id: 1,
    profile: {
      id: 7,
      user: {
        id: 3,
        fio: "Гайдуков Иван Петрович",
        email: "test3@gokengu.ru",
        phone: "79796889898",
        date_joined: "2022-10-27T16:37:09+07:00",
        is_blocked: false,
      },
      company: {
        id: 2,
        short_title: "ООО \"ГРУППА 789\"",
        inn: "6164104602",
        is_active: true,
        contact_fio: "Гайдуков Иван Петрович",
        email: "test3@gokengu.ru",
        phone: "79796889898",
        date_created: "2022-10-27T16:44:03.169398+07:00",
      },
      date_created: "2022-10-27T16:44:27.407418+07:00",
    },
    title: "Бензин 95",
    status: 20,
    number_probe: "1",
    date_probe: "2022-10-07",
    description: "Бензин 95",
    quantity: "500.00",
    category: 5,
    producer: null,
    documents: [
      {
        id: 1,
        title: "Акт отбора пробы.pdf",
        document:
          // eslint-disable-next-line max-len
          "https://testhimexp.s3.amazonaws.com/media/private/products/1/documents/%D0%90%D0%BA%D1%82_%D0%BE%D1%82%D0%B1%D0%BE%D1%80%D0%B0_%D0%BF%D1%80%D0%BE%D0%B1%D1%8B_TXeS6DV.pdf",
      },
    ],
    rest: "499.00",
    sticker: "https://testhimexp.s3.amazonaws.com/media/private/products/1/documents/sticker_VsP3WIb.pdf",
  },
};

export const results = (req, res) => {
  res.status(200).json(result);
};
