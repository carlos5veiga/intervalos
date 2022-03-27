 // 6 = E
 // 11 = A
 // 12 = Bb
 // 14 = C
 // 16 = D

 const notas = ['A#2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5'];

 const gr1 = tonica;
 const gr2 = tonica + 2;
 const gr3 = tonica + 4;
 const gr4 = tonica + 5;
 const gr4sh = tonica + 6;
 const gr5 = tonica + 7;
 const gr5sh = tonica + 8;
 const gr6 = tonica + 9;
 const gr6sh = tonica + 10;
 const gr7 = tonica + 11;
 const gr8 = tonica + 12;
 const gr5m = tonica - 5;
 const gr6m = tonica - 3;
 const gr7m = tonica - 1;
 const gr7bm = tonica - 2;
 const gr2p = tonica + 14;
 const gr3p = tonica + 16;
 const gr4p = tonica + 17;

 const playmel = (n1, n2) => {
     const synth = new Tone.Synth().toDestination();
     synth.volume.value = 0;
     const now = Tone.now() + 0.2;
     synth.triggerAttackRelease(n1, "2n", now);
     synth.triggerAttackRelease(n2, "2n", now + 1);
 }

 //*********** Consonâncias perfeitas *************
 const imgperf = document.images.namedItem('consperfeita');
 const btn8 = document.getElementById('btn-oitava');
 const btn5 = document.getElementById('btn-quinta');

 btn5.addEventListener('click', () => {
     imgperf.setAttribute('src', 'img/quinta.jpg');
     playmel(notas[gr3], notas[gr7]);
 });
 btn8.addEventListener('click', () => {
     imgperf.setAttribute('src', 'img/oitava.jpg');
     playmel(notas[gr1], notas[gr8]);
 });



 //*********** Consonâncias imperfeitas *************
 const imgimperf = document.images.namedItem('consimperfeita');
 const btn3men = document.getElementById('btn-terca-menor');
 const btn3mai = document.getElementById('btn-terca-maior');
 const btn6men = document.getElementById('btn-sexta-menor');
 const btn6mai = document.getElementById('btn-sexta-maior');

 btn3men.addEventListener('click', () => {
     imgimperf.setAttribute('src', 'img/terca-menor.jpg');
     playmel(notas[gr2], notas[gr4]);
 });
 btn3mai.addEventListener('click', () => {
     imgimperf.setAttribute('src', 'img/terca-maior.jpg');
     playmel(notas[gr5], notas[gr7]);
 });

 btn6men.addEventListener('click', () => {
     imgimperf.setAttribute('src', 'img/sexta-menor.jpg');
     playmel(notas[gr3], notas[gr8]);
 });
 btn6mai.addEventListener('click', () => {
     imgimperf.setAttribute('src', 'img/sexta-maior.jpg');
     playmel(notas[gr2], notas[gr7]);
 });



 //*********** Dissonâncias *************
 const imgdis = document.images.namedItem('dissonancia');
 const btn2men = document.getElementById('btn-segunda-menor');
 const btn2mai = document.getElementById('btn-segunda-maior');
 const btn7men = document.getElementById('btn-setima-menor');
 const btn7mai = document.getElementById('btn-setima-maior');
 const btn4aum = document.getElementById('btn-quarta-aum');
 const btn5dim = document.getElementById('btn-quinta-dim');

 btn2men.addEventListener('click', () => {
     imgdis.setAttribute('src', 'img/segunda-menor.jpg');
     playmel(notas[gr3], notas[gr4]);
 });
 btn2mai.addEventListener('click', () => {
     imgdis.setAttribute('src', 'img/segunda-maior.jpg');
     playmel(notas[gr6], notas[gr7]);
 });

 btn7men.addEventListener('click', () => {
     imgdis.setAttribute('src', 'img/setima-menor.jpg');
     playmel(notas[gr2], notas[gr8]);
 });
 btn7mai.addEventListener('click', () => {
     imgdis.setAttribute('src', 'img/setima-maior.jpg');
     playmel(notas[gr1], notas[gr7]);
 });

 btn4aum.addEventListener('click', () => {
     imgdis.setAttribute('src', 'img/quarta-aum.jpg');
     playmel(notas[gr4], notas[gr7]);
 });
 btn5dim.addEventListener('click', () => {
     imgdis.setAttribute('src', 'img/quinta-dim.jpg');
     playmel(notas[gr7], notas[gr4p]);
 });


 //*********** Dissonâncias *************
 const imgquarta = document.images.namedItem('quarta');
 const btn4 = document.getElementById('btn-quarta');


 btn4.addEventListener('click', () => {
     playmel(notas[gr2], notas[gr5]);
 });