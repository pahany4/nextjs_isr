export const login = (req, res) => {
  res.status(200).json({
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUzNjM3MzM1LCJpYXQiOjE2NTM2MzYzNzUsImp0aSI6IjYyMzQyZTMyOWQ5MTQwZGViMmY0N2Y4NGRkNDM1MWM0IiwidXNlcl9pZCI6OH0.csxN9QJf31ZoMSdEbWDZeX0j_bpx7unZZwq7Xog4kdA",
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1NDI0MTU5NSwiaWF0IjoxNjUzNjM2Nzk1LCJqdGkiOiJmN2ZjNGM5OTg1Y2E0MDFiYTEzNjMyODllMzY3MDI4MSIsInVzZXJfaWQiOjh9.fYm1H7yyR1Kgp_ovgribYXeuOQUyLmwee32Z4LMEgqU",
    "name": "string",
    "role": 0
  })
}
export const refresh = (req, res) => {
  res.status(200).json({
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUzNjM3MzM1LCJpYXQiOjE2NTM2MzYzNzUsImp0aSI6IjYyMzQyZTMyOWQ5MTQwZGViMmY0N2Y4NGRkNDM1MWM0IiwidXNlcl9pZCI6OH0.csxN9QJf31ZoMSdEbWDZeX0j_bpx7unZZwq7Xog4kdA",
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1NDI0MTU5NSwiaWF0IjoxNjUzNjM2Nzk1LCJqdGkiOiJmN2ZjNGM5OTg1Y2E0MDFiYTEzNjMyODllMzY3MDI4MSIsInVzZXJfaWQiOjh9.fYm1H7yyR1Kgp_ovgribYXeuOQUyLmwee32Z4LMEgqU",
  })
}
export const verify = (req, res) => {
  res.status(200).json({})
}
export const getMe = (req, res) => {
  res.status(200).json({
    "id": 8,
    "first_name": "Павел",
    "last_name": "Гайдуков",
    "patronymic": "Тест",
    "email": "test5@gokengu.ru",
    "phone": "71234567891",
    "is_active": true,
    "is_fully_confirmed": true,
    "role": 10,
    "date_joined": "2022-02-08T12:09:54+07:00",
    "is_staff": true,
    "is_project_manager": false,
    "is_blocked": false
  })
}

export const getProfiles = (req, res) => {
  res.status(200).json({
    "links": {"next": null, "previous": null, "count": 1},
    "total_objects_count": 2,
    "current_data_count": 2,
    "results": [{
      "id": 16,
      "user": 8,
      "company": 28,
      "fio": "Гайдуков Павел Тест",
      "company__short_title": "ТСЖ \"ГРАЖДАНСКИЙ 89/71\"",
      "company__is_active": true,
      "company__date_created": "2022-04-27T08:02:42.172041Z",
      "date_created": "2022-04-27T15:02:42.176173+07:00",
      "user__is_blocked": false
    }, {
      "id": 9,
      "user": 8,
      "company": null,
      "fio": "Гайдуков Павел Тест",
      "company__short_title": null,
      "company__is_active": false,
      "company__date_created": null,
      "date_created": "2022-02-08T12:09:55.846276+07:00",
      "user__is_blocked": false
    }]
  })
}
