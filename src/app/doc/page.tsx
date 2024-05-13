import React from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const DocPage = async (params: any) => {
  console.log(params.searchParams);

  const doc = new GoogleSpreadsheet(
    '1KNqlgf-Mmyb_gYnK-_c7GebI2ifgUoAJ_zytg43wUM4',
    { apiKey: process.env.GOOGLE_API_KEY ?? '' }
  );
  await doc.loadInfo(); // Загрузка данных документа
  const sheet = doc.sheetsByIndex[0]; // доступ к первому листу

  const rows = await sheet.getRows(); // чтение данных

  const headerValues = new Map();
  headerValues.set('is_active', 'Активный или нет');
  headerValues.set('brand', 'Бренд');
  headerValues.set('name', 'Название препарата');
  headerValues.set('type', 'Тип');
  headerValues.set('description', 'Описание');
  headerValues.set('suitable', 'Для кого подходит');
  headerValues.set('usage', 'Как использовать');
  headerValues.set('usage_kids', 'Как использовать с первых дней');
  headerValues.set('sk', 'Артикул');
  headerValues.set('goal', 'Цель рекомендации и дальнейшие действия');
  headerValues.set('additional', 'Дополнительное к рекомендации');
  headerValues.set('clinic_situation', 'Прмер клинической ситуации');
  headerValues.set('link', 'Ссылка');
  headerValues.set('must_be', 'Есть ответ');
  headerValues.set('must_not_be', 'Нет ответа');

  const userAnswers = params.searchParams;

  const preparats: any[] = [];

  rows.forEach((row) => {
    if (row.get(headerValues.get('must_be'))) {
      let needed = true;
      const drug_must_be = Array.from(
        new URLSearchParams(row.get(headerValues.get('must_be'))).entries()
      );
      drug_must_be.map((answer) => {
        if (!userAnswers[answer[0]] || userAnswers[answer[0]] != answer[1]) {
          needed = false;
        }
      });

      const drug_must_not_be = Array.from(
        new URLSearchParams(row.get(headerValues.get('must_not_be'))).entries()
      );
      drug_must_not_be.map((answer) => {
        if (userAnswers[answer[0]] == answer[1]) {
          needed = false;
        }
      });

      if (needed) {
        const res: any = {};
        Array.from(headerValues.keys()).map((key) => {
          res[key] = row.get(headerValues.get(key));
        });
        preparats.push(res);
      }
    } // выводит все данные строки как объект; // замените 'ColumnName' на имя колонки для получения специфичных данных
  });

  console.log(preparats);

  return <div>{JSON.stringify(preparats[0])}</div>;
};

export default DocPage;
