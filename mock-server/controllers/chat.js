const chat_order_list = {
  links: { next: null, previous: null, count: 1 },
  total_objects_count: 7,
  current_data_count: 7,
  results: [
    {
      id: 1,
      profile: 26,
      text: "Привет. Как мой заказ?",
      date_message: "2022-08-02T16:30:44.761972+07:00",
      is_read: false,
      files: [
        {
          title: " document1 document1 document1",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document2",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document1",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document2",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document2",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
      ],
    },
    {
      id: 2,
      profile: 14,
      text: "Нормально",
      date_message: "2022-02-11T16:30:44.761972+07:00",
      is_read: false,
      files: [
        {
          title: " document1 document1 document1",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document2",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document1",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document2",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document2",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
      ],
    },
    {
      id: 3,
      profile: 26,
      text: "Когда будет готов?",
      date_message: "2022-02-11T16:30:44.761972+07:00",
      is_read: false,
      files: [],
    },
    {
      id: 4,
      profile: 26,
      text: "Привет. Как мой заказ?",
      date_message: "2022-08-02T16:30:44.761972+07:00",
      is_read: false,
      files: [
        {
          title: "document1",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document2",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
      ],
    },
    {
      id: 5,
      profile: 14,
      text: "Нормально",
      date_message: "2022-02-11T16:30:44.761972+07:00",
      is_read: false,
      files: [],
    },
    {
      id: 6,
      profile: 26,
      text: "Когда будет готов?",
      date_message: "2022-02-11T16:30:44.761972+07:00",
      is_read: false,
      files: [],
    },
    {
      id: 7,
      profile: 26,
      text: "Привет. Как мой заказ?",
      date_message: "2022-08-02T16:30:44.761972+07:00",
      is_read: false,
      files: [
        {
          title: "document1",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document2",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
      ],
    },
    {
      id: 8,
      profile: 14,
      text: "Нормально",
      date_message: "2022-02-11T16:30:44.761972+07:00",
      is_read: false,
      files: [],
    },
    {
      id: 9,
      profile: 26,
      text: "Когда будет готов?",
      date_message: "2022-02-11T16:30:44.761972+07:00",
      is_read: false,
      files: [],
    },
  ],
};

export const order_chat = (req, res) => {
  res.status(200).json(chat_order_list);
};

export const send_new_message = (req, res) => {
  chat_order_list.results.unshift({
    id: 100,
    profile: 26,
    text: req.body.text,
    date_message: "2022-08-02T16:30:44.761972+07:00",
    is_read: false,
    files: [],
  });
  res.status(200).json(req.body);
};

const chat_project_list = {
  links: { next: null, previous: null, count: 1 },
  total_objects_count: 7,
  current_data_count: 7,
  results: [
    {
      id: 1,
      profile: 26,
      text: "Привет. Как мой проект?",
      date_message: "2022-08-02T16:30:44.761972+07:00",
      is_read: false,
      files: [
        {
          title: " document1 document1 document1",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document2",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document1",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
      ],
    },
    {
      id: 2,
      profile: 14,
      text: "Нормально",
      date_message: "2022-02-11T16:30:44.761972+07:00",
      is_read: false,
      files: [
        {
          title: " document1 document1 document1",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document2",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document1",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document2",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document2",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
      ],
    },
    {
      id: 3,
      profile: 26,
      text: "Когда будет готов?",
      date_message: "2022-02-11T16:30:44.761972+07:00",
      is_read: false,
      files: [],
    },
    {
      id: 4,
      profile: 26,
      text: "Привет. Как мой проект??",
      date_message: "2022-08-02T16:30:44.761972+07:00",
      is_read: false,
      files: [
        {
          title: "document1",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document2",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
      ],
    },
    {
      id: 5,
      profile: 14,
      text: "Нормально",
      date_message: "2022-02-11T16:30:44.761972+07:00",
      is_read: false,
      files: [],
    },
    {
      id: 6,
      profile: 26,
      text: "Когда будет готов?????",
      date_message: "2022-02-11T16:30:44.761972+07:00",
      is_read: false,
      files: [],
    },
    {
      id: 7,
      profile: 26,
      text: "Привет. Как мой проект?",
      date_message: "2022-08-02T16:30:44.761972+07:00",
      is_read: false,
      files: [
        {
          title: "document1",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
        {
          title: "document2",
          url: "https://predlab.s3.eu-central-1.amazonaws.com/media/public/%D0%91%D0%BB%D0%B0%D0%BD%D0%BA.docx",
        },
      ],
    },
    {
      id: 8,
      profile: 14,
      text: "Нормально",
      date_message: "2022-02-11T16:30:44.761972+07:00",
      is_read: false,
      files: [],
    },
    {
      id: 9,
      profile: 26,
      text: "Когда будет готов?",
      date_message: "2022-02-11T16:30:44.761972+07:00",
      is_read: false,
      files: [],
    },
  ],
};

export const project_chat = (req, res) => {
  res.status(200).json(chat_project_list);
};

export const send_new_message_chat_project = (req, res) => {
  chat_project_list.results.unshift({
    id: 100,
    profile: 26,
    text: req.body.text,
    date_message: "2022-08-02T16:30:44.761972+07:00",
    is_read: false,
    files: [],
  });
  res.status(200).json(req.body);
};
