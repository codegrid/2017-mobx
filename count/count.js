const state = {
  count: 1,
}

const render = () => {
  $('#count').text(state.count);
};

const action = {
  up() {
    state.count++;
    render();
  },

  down() {
    state.count--;
    render();
  }
}

render();
$('#up').on('click', action.up);
$('#down').on('click', action.down);