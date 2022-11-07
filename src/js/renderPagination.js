import './pagination';

export function rendernPagination(total, current) {
  $(`#pagination`).pagination({
    total: total,
    current: current,
    length: 20,
    size: 2,
    prev: '&lt;',
    next: '&gt;',
    click: function (e) {},
  });
}
