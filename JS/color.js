// var Body = {
//     setColor: function (color) {
//         document.querySelector('body').style.color = color;
//     },
//     setBackgroundColor: function (color) {
//         document.querySelector('body').style.backgroundColor = color;
//     }
// }
// 제이쿼리 버전, 도구 이용
var Body = {
	setColor: function(color) {
 $('body').css('color', color);
  },
  setBackgroundColor: function(color) {
  $('body').css('backgroundColor', color);
  }
 }


var Links = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}

function nightDayHandler(self) {
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('gray')

        self.value = 'day'

        Links.setColor('powderblue')

    } else {
        Body.setBackgroundColor('white')
        Body.setColor('black')

        self.value = 'night'

        Links.setColor('blue')

    }
}



