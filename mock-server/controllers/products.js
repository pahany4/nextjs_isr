export const products = (req, res) => {
  res.status(200).json({
    links: { next: null, previous: null, count: 1 },
    total_objects_count: 7,
    current_data_count: 7,
    results: [
      {
        id: 113,
        number_probe: "1",
        number_act: "1",
        date_probe: "2022-02-03T12:54:40.029034+07:00",
        date_created: "2022-02-03T12:54:40.029034+07:00",
        profile: {
          company: {
            short_title: "OOO 31",
          },
        },
        producer: "ООО Одуванчик",
        title: "Канистра бензина",
        category: "Аи-95",
        capacity: 2,
        quantity: 2,
        status: 10,
        rest: 1.5,
        sticker: "https://testhimexp.s3.amazonaws.com/media/private/products/23/documents/sticker.pdf",
      },
      {
        id: 112,
        number_probe: "2",
        number_act: "2",
        date_probe: "2022-02-03T12:54:40.029034+07:00",
        date_created: "2022-02-03T12:54:40.029034+07:00",
        profile: {
          company: {
            short_title: "Одуванчик",
          },
        },
        quantity: 2,
        producer: "ООО Одуванчик",
        title: "фляга бензина",
        category: "Аи-95",
        capacity: 2,
        status: 20,
        rest: 1.4,
        sticker: "https://testhimexp.s3.amazonaws.com/media/private/products/23/documents/sticker.pdf",
      },
      {
        id: 3,
        number_probe: "3",
        number_act: "3",
        date_probe: "2022-02-03T12:54:40.029034+07:00",
        date_created: "2022-02-03T12:54:40.029034+07:00",
        profile: {
          company: {
            short_title: "OOO 31",
          },
        },
        quantity: 2,
        producer: "ООО Одуванчик",
        title: "Бензин с заправки",
        category: "Аи-92",
        capacity: 2,
        status: 20,
        rest: 1.1,
        sticker: "https://testhimexp.s3.amazonaws.com/media/private/products/23/documents/sticker.pdf",
      },
      {
        id: 4,
        number_probe: "4",
        number_act: "4",
        date_probe: "2022-02-03T12:54:40.029034+07:00",
        date_created: "2022-02-03T12:54:40.029034+07:00",
        profile: {
          company: {
            short_title: "OOO Восход",
          },
        },
        quantity: 2,
        producer: "ООО Одуванчик",
        title: "Канистра бензина Аи-95",
        category: "Аи-95",
        capacity: 2,
        status: 10,
        rest: 1.25,
        sticker: "https://testhimexp.s3.amazonaws.com/media/private/products/23/documents/sticker.pdf",
      },
    ],
  });
};

/*const product = {
  id: 1,
  profile: {
    fio: "Гайдуков Павел Владимирович",
    company__short_title: "ООО 31",
    company__is_active: true,
  },
  producer: "ООО Одуванчик",
  title: "Канистра бензина",
  category: "Аи-95",
  capacity: 2,
  status: 0,
  rest: 1.5,
  number_probe: "1",
  number_act: "1",
  date_probe: "2022-02-03T12:54:40.029034+07:00",
  description: "Образец под номером 1, белый",
  orders: [
    {
      id: 1,
      profile: {
        id: 0,
        user: 0,
        company: 0,
        fio: "string",
        company__short_title: "ООО Одуванчик",
        company__is_active: false,
        company__date_created: "2022-07-04T03:02:55.978Z",
        date_created: "2022-07-04T03:02:55.978Z",
        user__is_blocked: true,
      },
      price: "1500",
      status: 0,
      is_paid: true,
      date_created: "2022-07-04T03:02:55.978Z",
    },
    {
      id: 2,
      profile: {
        id: 0,
        user: 0,
        company: 0,
        fio: "string",
        company__short_title: "ООО Одуванчик",
        company__is_active: false,
        company__date_created: "2022-07-04T03:02:55.978Z",
        date_created: "2022-07-04T03:02:55.978Z",
        user__is_blocked: true,
      },
      price: "2000",
      status: 0,
      is_paid: true,
      date_created: "2022-07-04T03:02:55.978Z",
    },
  ],
  // eslint-disable-next-line max-len
  files: ["https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx"],
}*/
const product = {
  id: 113,
  number_probe: null,
  profile: {
    company: {
      short_title: "OOO 31",
    },
  },
  date_probe: "2022-08-11",
  description: "Керосин",
  quantity: "365.00",
  category: 12,
  rest: 50,
  producer: {
    id: 22,
    full_title: "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"ОДУВАНЧИК\"",
    short_title: "ООО \"ОДУВАНЧИК\"",
    inn: "5406775985",
    address: "г Барнаул, пл им В.Н.Баварина, д 2, офис 910",
    management_name: "Труфанов Антон Юрьевич",
  },
  documents: [
    {
      id: 28,
      title: "Протокол № 135 от 30.12.2021 (1).pdf",
      document:
        // eslint-disable-next-line max-len
        "http://192.168.31.198:8000/media/products/None/documents/%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB__135_%D0%BE%D1%82_30.12.2021_1.pdf",
    },
    {
      id: 11,
      title: "Акт отбора пробы1",
      document:
        // eslint-disable-next-line max-len
        "http://192.168.31.198:8000/media/products/None/documents/%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB__135_%D0%BE%D1%82_30.12.2021_1.pdf",
    },
  ],
  status: 10,
};

/*const product = {
  id: 111,
  number_probe: null,
  date_probe: "2022-07-27",
  description: "Бензин аи-92 канистра",
  quantity: "15.00",
  category: 4,
  producer: null,
  documents: [],
  analysis: [],
  status: 5
};*/

export const productInfo = (req, res) => {
  res.status(200).json(product);
};

export const add_product = (req, res) => {
  res.status(200).json({
    id: 5,
    title: "Канистра бензина",
    quantity: 10,
    rest: 10,
    sticker: "https://testhimexp.s3.amazonaws.com/media/private/products/23/documents/sticker.pdf",
  });
};

export const update_product = (req, res) => {
  product.status = 20;
  if (req.body.rest) {
    product.rest = req.body.rest;
  }
  if (req.body.date_probe) {
    product.date_probe = req.body.date_probe;
  }
  if (req.body.status) {
    product.status = req.body.status;
  }
  res.status(200).json(product);
};

export const delete_product = (req, res) => {
  res.status(200).json({});
};

export const add_act = (req, res) => {
  res.status(200).json({
    id: 32,
    // eslint-disable-next-line max-len
    document: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
    title: "Акт отбора пробы",
  });
};

export const add_doc = (req, res) => {
  res.status(200).json({
    id: 7,
    document: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
    title: "Документ",
  });
};
