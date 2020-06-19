/* eslint-disable no-undef */

function playEvents(events) {
  var el = document.querySelector('main');

  new rrwebPlayer({
    target: el, // customizable root element
    data: {
      events,
      autoPlay: false,
    },
  });
}

const sessionId = document.location.pathname.split('/')[2];

fetch(`${window.location.origin}/recordings/${sessionId}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    playEvents(data.events);
  });
