const state = {
  count: 1,

  isPositive: true,
  isNegative: false,
}

const render = () => {
  let color = '#000';
  if (state.isPositive) { color = '#00f'; }
  if (state.isNegative) { color = '#f00'; } 
  
  $('#count')
    .text(state.count)
    .css({ color: color });
};

const action = {
  up() {
    state.count++;
    state.isPositive = state.count > 0;
    state.isNegative = state.count < 0;

    render();
  },

  down() {
    state.count--;
    state.isPositive = state.count > 0;
    state.isNegative = state.count < 0;

    render();
  }
}

render();
$('#up').on('click', action.up);
$('#down').on('click', action.down);