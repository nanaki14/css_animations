
const g = {
  isSp:function(){ return ( g.winW() <= g.point )? true : false ; },// SP or PC
  winW:function(){ return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; },
  winH:function(){ return $( window ).height(); },
  winT:function(){ return $( window ).scrollTop(); },
  point: 768
}
