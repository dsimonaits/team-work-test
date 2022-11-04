// import { API_KEY, URL } from './js/fetch';
import pagination from './js/pagination';

let query = '';
let currentPage = 1;
let totalResults = 500;
let numberPerPage = null;
let totalPages = null;

$(`#pagination`).pagination({
  total: totalResults,
  current: currentPage,
  length: 20,
  size: 2,
  prev: '&lt;',
  next: '&gt;',

  click: async function (e) {
    currentPage = e.current;

    // clearContent(); // очистка перед отрисовкой новой страницы

    // await fetchMovies(); // пример вызова конкретной функции
  },
});
