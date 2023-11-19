const units = {
  links: {
    next: null,
    previous: null,
    count: 1,
  },
  total_objects_count: 19,
  current_data_count: 19,
  results: [
    {
      id: 21,
      title: "килопаскаль",
      short_title: "кПа",
    },
    {
      id: 20,
      title: "Массовый процент",
      short_title: "% масс.",
    },
    {
      id: 19,
      title: "Миллиграмм на 100 см. куб.",
      short_title: "мг/100см³",
    },
    {
      id: 18,
      title: "Объёмный процент",
      short_title: "% об.",
    },
    {
      id: 17,
      title: "процент",
      short_title: "%",
    },
    {
      id: 16,
      title: "Миллионная доля",
      short_title: "ppm",
    },
    {
      id: 15,
      title: "Условная единица",
      short_title: "ед.",
    },
    {
      id: 14,
      title: "Миллиметр в квадрате в секунду",
      short_title: "мм²/с",
    },
    {
      id: 13,
      title: "градус Цельсия",
      short_title: "˚C",
    },
    {
      id: 12,
      title: "Миллиграмм на килограмм",
      short_title: "мг/кг",
    },
    {
      id: 11,
      title: "Плотность",
      short_title: "кг/м³",
    },
    {
      id: 10,
      title: "килограмм",
      short_title: "кг",
    },
    {
      id: 9,
      title: "ампер",
      short_title: "А",
    },
    {
      id: 6,
      title: "Люмен",
      short_title: "Лм",
    },
    {
      id: 5,
      title: "кубический метр",
      short_title: "м³",
    },
    {
      id: 4,
      title: "кубический сантиметр",
      short_title: "см³",
    },
    {
      id: 3,
      title: "миллилитр",
      short_title: "мл",
    },
    {
      id: 2,
      title: "Грамм",
      short_title: "г",
    },
    {
      id: 1,
      title: "Литр",
      short_title: "л",
    },
  ],
};

export const unit = (req, res) => {
  res.status(200).json(units);
};
