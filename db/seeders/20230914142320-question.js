'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          text: 'Кто был первым участником группы?',
          ansver: 'Лена Кулемина',
          idTheme: 1,
          count: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Откуда была Нюта?',
          ansver: 'Из дет.дома',
          idTheme: 1,
          count: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Лену любит Саша, а кто любит Женю?',
          ansver: 'Игорек',
          idTheme: 1,
          count: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Кому принадлежит цитата: “Когда ты закричала, я сразу понял, что это ты. У меня словно что-то оборвалось...”',
          ansver: 'Виктор Михалыч ',
          idTheme: 1,
          count: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Кто был элитой школы?',
          ansver: 'Полина Зеленова',
          idTheme: 1,
          count: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Новые серии выходили с понедельника по пятницу. В какое время можно было посмотреть новую серию?',
          ansver: '19:00',
          idTheme: 2,
          count: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Сколько серий в сериале Папины дочки?',
          ansver: '410',
          idTheme: 2,
          count: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Какие витамины рекламировали в сериале?',
          ansver: 'Пиковит',
          idTheme: 2,
          count: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Сколько голубцов съел Илья Полежайкин в общей сложности на репетициях и в кадре сериала?',
          ansver: '85',
          idTheme: 2,
          count: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'В каком году закрылся сериал?',
          ansver: '2010',
          idTheme: 2,
          count: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Челябинские мужики настолько суровые, что:',
          ansver: 'Когда рождаются, здороваются с врачом за руку.',
          idTheme: 3,
          count: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Среди высоких гор и широких равнин:',
          ansver: 'Присел на корточки красавец Пятигорск.',
          idTheme: 3,
          count: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'А это Москва:',
          ansver: 'Москва — мать городов русских и отец нерусских.',
          idTheme: 3,
          count: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Что постоянно делает Димон?',
          ansver: 'Очкует',
          idTheme: 3,
          count: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Что кричал Михаил Галустян на отдыхе?!',
          ansver: 'ТАГИЛ!!!',
          idTheme: 3,
          count: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
