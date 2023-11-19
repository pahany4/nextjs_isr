const tasks_list = {
  links: { next: null, previous: null, count: 1 },
  total_objects_count: 3,
  current_data_count: 3,
  results: [
    {
      id: 35,
      author: { id: 107, first_name: "Павел", last_name: "Гайдуков", patronymic: "Владимирович", role: 40 },
      executor: { id: 120, first_name: "Павел", last_name: "Гайдуков", patronymic: "Тест клиент", role: 20 },
      title: "Тест",
      analysis: null,
      date_created: "2022-05-12T13:01:46.150630+07:00",
      status: 10,
      tags: [],
      period_of_execution: "2022-05-13T00:00:00+07:00",
    },
    {
      id: 34,
      author: { id: 107, first_name: "Павел", last_name: "Гайдуков", patronymic: "Владимирович", role: 40 },
      executor: { id: 115, first_name: "Владимир", last_name: "Байден", patronymic: "Владимирович", role: 10 },
      title: "Связаться с клиентом",
      analysis: null,
      date_created: "2022-01-14T15:01:49+07:00",
      status: 10,
      tags: [],
      period_of_execution: "2022-01-15T00:00:00+07:00",
    },
    {
      id: 31,
      author: { id: 107, first_name: "Павел", last_name: "Гайдуков", patronymic: "Владимирович", role: 40 },
      executor: { id: 95, first_name: "Дмитрий", last_name: "Коханенко", patronymic: "Васильевич", role: 10 },
      title: "Принять образец на испытание",
      analysis: null,
      date_created: "2022-01-10T15:27:29+07:00",
      status: 30,
      tags: [],
      period_of_execution: "2022-01-13T00:00:00+07:00",
    },
  ],
};

export const tasks = (req, res) => {
  res.status(200).json(tasks_list);
};
