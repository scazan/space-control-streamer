const client = new WebSocket('ws://localhost:9999');
const player = new jsmpeg(client, {
  canvas: document.querySelector('#testCanvas')
});
