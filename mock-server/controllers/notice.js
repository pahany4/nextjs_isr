import EventEmitter from "events";

const emitter = new EventEmitter();

/*const state = {
  payments_expiring: 0,
  updated_orders: [],
  new_orders: 0,
  new_tasks: 0,
  modify_tasks: 0,
  updated_tasks: [],
  appointed_results: 0,
  updated_results: [],
};*/
const state = {
  object: "",
  id: 1,
  date: "2022-07-18T11:15:46.642323+07:00",
};

export const getAll = (req, res) => {
  res.writeHead(200, {
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
  });

  const listener = (event, data) => {
    res.write(`event: ${event}\n`);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  emitter.addListener("push", listener);

  req.on("close", () => {
    emitter.removeListener("push", listener);
  });
};

/*setInterval(() => {
  state.payments_expiring += 1;
  state.updated_orders.push(Math.round(Math.random() * 100));
  state.new_orders += 2;
  state.new_tasks += 3;
  state.modify_tasks += 4;
  state.updated_tasks.push(Math.round(Math.random() * 10));
  state.updated_results.push(Math.round(Math.random() * 100));
  state.appointed_results += 5;

  /!** event обозначен как 'notification' *!/
  //emitter.emit("push", "notification", {
  emitter.emit("push", "precompany_created", {
    payments_expiring: state.payments_expiring,
    updated_orders: state.updated_orders,
    new_orders: state.new_orders,
    new_tasks: state.new_tasks,
    modify_tasks: state.modify_tasks,
    updated_tasks: state.updated_tasks,
    appointed_results: state.appointed_results,
    updated_results: state.updated_results,
  });
}, 15000);*/
setInterval(() => {
  state.object = "result";
  state.id = Math.round(Math.random() * 10);
  state.date = new Date();

  /** event обозначен как 'updated_object' */
  //emitter.emit("push", "notification", {
  emitter.emit("push", "updated_object", {
    object: state.object,
    id: state.id,
    date: state.date,
  });
}, 20000);

const results = [
  {
    id: 55,
    type: "precompany_created",
    data: 13,
    message: "Создана новая заявка",
    date_created: "2022-07-18T11:15:46.642323+07:00",
    date_updated: "2022-07-18T11:15:46.642673+07:00",
  },
  {
    id: 56,
    type: "precompany_created",
    data: 15,
    message: "Создана новая заявка",
    date_created: "2022-07-18T11:15:46.642323+07:00",
    date_updated: "2022-07-18T11:15:46.642673+07:00",
  },
  {
    id: 57,
    type: "precompany_created",
    data: 13,
    message: "Создана новая заявка",
    date_created: "2022-07-18T11:15:46.642323+07:00",
    date_updated: "2022-07-18T11:15:46.642673+07:00",
  },
  {
    id: 58,
    type: "precompany_created",
    data: 15,
    message: "Создана новая заявка",
    date_created: "2022-07-18T11:15:46.642323+07:00",
    date_updated: "2022-07-18T11:15:46.642673+07:00",
  },
  {
    id: 59,
    type: "precompany_created",
    data: 13,
    message: "Создана новая заявка",
    date_created: "2022-07-18T11:15:46.642323+07:00",
    date_updated: "2022-07-18T11:15:46.642673+07:00",
  },
  {
    id: 60,
    type: "precompany_created",
    data: 15,
    message: "Создана новая заявка",
    date_created: "2022-07-18T11:15:46.642323+07:00",
    date_updated: "2022-07-18T11:15:46.642673+07:00",
  },
  {
    id: 61,
    type: "precompany_created",
    data: 13,
    message: "Создана новая заявка",
    date_created: "2022-07-18T11:15:46.642323+07:00",
    date_updated: "2022-07-18T11:15:46.642673+07:00",
  },
  {
    id: 62,
    type: "precompany_created",
    data: 15,
    message: "Создана новая заявка",
    date_created: "2022-07-18T11:15:46.642323+07:00",
    date_updated: "2022-07-18T11:15:46.642673+07:00",
  },
  {
    id: 63,
    type: "precompany_created",
    data: 13,
    message: "Создана новая заявка",
    date_created: "2022-07-18T11:15:46.642323+07:00",
    date_updated: "2022-07-18T11:15:46.642673+07:00",
  },
  {
    id: 64,
    type: "precompany_created",
    data: 15,
    message: "Создана новая заявка",
    date_created: "2022-07-18T11:15:46.642323+07:00",
    date_updated: "2022-07-18T11:15:46.642673+07:00",
  },
  {
    id: 65,
    type: "precompany_created",
    data: 13,
    message: "Создана новая заявка",
    date_created: "2022-07-18T11:15:46.642323+07:00",
    date_updated: "2022-07-18T11:15:46.642673+07:00",
  },
  {
    id: 66,
    type: "precompany_created",
    data: 15,
    message: "Создана новая заявка",
    date_created: "2022-07-18T11:15:46.642323+07:00",
    date_updated: "2022-07-18T11:15:46.642673+07:00",
  },
];

const notice_list = {
  links: { next: null, previous: null, count: 1 },
  total_objects_count: results.length,
  current_data_count: 1,
  results: results,
};

export const notice = (req, res) => {
  res.status(200).json(notice_list);
};
