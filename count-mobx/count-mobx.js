const {
  autorun,
  computed,
  observable,
} = mobx;

// Observableな状態を定義
const state = observable({
  // 意識すべきはこの値のみ
  count: 1,

  // 付随する値は自動で組み上がる
  isPositive: computed(() => { return state.count > 0; }),
  isNegative: computed(() => { return state.count < 0; }),
});

// 一度紐付ければ、以降は自動で処理される
autorun(() => {
  let color = '#000';
  if (state.isPositive) { color = '#00f'; }
  if (state.isNegative) { color = '#f00'; } 
  
  $('#count')
    .text(state.count)
    .css({ color: color });
});

// 必要な値のみを更新する処理になった
const action = {
  up() {
    state.count++;
  },

  down() {
    state.count--;
  }
}

$('#up').on('click', action.up);
$('#down').on('click', action.down);