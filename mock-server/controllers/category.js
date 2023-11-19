export const Category = (req, res) => {
  res.status(200).json([
    {
      id: 1,
      title: "Нефтепродукт",
      code: 1,
    },
    {
      id: 2,
      title: "Бензин",
      code: 2,
    },
    {
      id: 3,
      title: "Бензин АИ-80",
      code: 2,
    },
    {
      id: 4,
      title: "Бензин АИ-92",
      code: 2,
    },
    {
      id: 5,
      title: "Бензин АИ-95",
      code: 2,
    },
    {
      id: 6,
      title: "Бензин АИ-98",
      code: 2,
    },
    {
      id: 7,
      title: "Дизель",
      code: 3,
    },
    {
      id: 8,
      title: "Дизель Летний",
      code: 3,
    },
    {
      id: 9,
      title: "Дизель Зимний",
      code: 3,
    },
    {
      id: 10,
      title: "Дизель Арктический",
      code: 3,
    },
    {
      id: 11,
      title: "Тёмные НП и масла",
      code: 3,
    },
    {
      id: 12,
      title: "Другое",
      code: 3,
    },
  ]);
};
