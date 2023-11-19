const project_list = {
  links: { next: null, previous: null, count: 1 },
  total_objects_count: 7,
  current_data_count: 7,
  results: [
    {
      id: 5,
      profile: {
        id: 5,
        user: {
          fio: "Гайдуков Павел Владимирович",
        },
        company: {
          id: 1,
          short_title: "ООО \"ГРУППА 789\"",
        },
      },
      title: "Проект №1",
      status: 0,
      date_created: "2022-02-11T16:30:44.761972+07:00",
      date_completion: "2023-02-12T16:30:44.761972+07:00",
    },
    {
      id: 3,
      profile: {
        id: 5,
        user: {
          fio: "Гайдуков Павел Владимирович",
        },
        company: {
          short_title: "ООО \"ГРУППА 789\"",
        },
      },
      title: "Проект №1",
      status: 10,
      date_created: "2022-02-11T16:30:44.761972+07:00",
      date_completion: "2022-02-11T16:30:44.761972+07:00",
    },
    {
      id: 6,
      profile: {
        id: 5,
        user: {
          fio: "Гайдуков Павел Владимирович",
        },
        company: {
          short_title: "ООО \"ГРУППА 789\"",
        },
      },
      title: "Проект №2",
      status: 10,
      date_created: "2022-02-11T16:30:44.761972+07:00",
      date_completion: "2022-02-11T16:30:44.761972+07:00",
    },
    {
      id: 7,
      profile: {
        id: 5,
        user: {
          fio: "Гайдуков Павел Владимирович",
        },
        company: {
          short_title: "ООО \"ГРУППА 789\"",
        },
      },
      title: "Проект №3",
      status: 10,
      date_created: "2022-02-11T16:30:44.761972+07:00",
      date_completion: "2022-02-11T16:30:44.761972+07:00",
    },
    {
      id: 9,
      profile: {
        id: 5,
        user: {
          fio: "Гайдуков Павел Владимирович",
        },
        company: {
          short_title: "ООО \"ГРУППА 789\"",
        },
      },
      title: "Проект №5",
      status: 10,
      date_created: "2022-02-11T16:30:44.761972+07:00",
      date_completion: "2022-02-11T16:30:44.761972+07:00",
    },
  ],
};

const project_info = {
  id: 5,
  profile: {
    id: 5,
    user: {
      fio: "Гайдуков Павел Владимирович",
    },
    company: {
      id: 1,
      short_title: "ООО \"ГРУППА 789\"",
    },
  },
  results: {
    description:
      "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной\n" +
      "            \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую\n" +
      "            коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только\n" +
      "            успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в\n" +
      "            новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее\n" +
      "            время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
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
  title: "Проект №1",
  status: 0,
  date_created: "2022-02-11T16:30:44.761972+07:00",
  date_completion: "2023-02-12T16:30:44.761972+07:00",
  technical_task: "Повысить октановое число.",
};

const results = {
  total_objects_count: 35,
  results: [
    {
      id: 1,
      description:
        "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной\n" +
        "            \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую\n" +
        "            коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.",
      files: [],
    },
    {
      id: 2,
      description: "",
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
      id: 3,
      description:
        "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной\n" +
        "            \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую\n" +
        "            коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.",
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
      id: 4,
      description:
        "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной\n" +
        "            \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую\n" +
        "            коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.",
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
      id: 5,
      description:
        "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной\n" +
        "            \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую\n" +
        "            коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.",
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
  ],
};

export const create_project = (req, res) => {
  res.status(200).json({
    id: 7,
  });
};
export const projects = (req, res) => {
  res.status(200).json(project_list);
};
export const project = (req, res) => {
  res.status(200).json(project_info);
};
export const project_results = (req, res) => {
  res.status(200).json(results);
};

export const add_results = (req, res) => {
  res.status(200).json(req.body);
};
