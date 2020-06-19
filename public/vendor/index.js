/* eslint-disable no-undef */

fetch(`${window.location.origin}/recordings`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector('#sessions-container');
    data.forEach((session) => {
      container.insertAdjacentHTML(
        'beforeend',
        '<div class="session" data-sessionid="' +
          session._id +
          '">Session ID: ' +
          session._id +
          '</div>',
      );
    });
  })
  .then(() => {
    document.querySelectorAll('.session').forEach((el) => {
      el.addEventListener('click', (event) => {
        window.location.href = `/session/${event.srcElement.dataset.sessionid}`;
      });
    });
  });