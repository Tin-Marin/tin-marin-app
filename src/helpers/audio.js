import Sound from 'react-native-sound';

Sound.setCategory('Ambient', true);

/**
 * Variable que hace referencia al boton "Sitios de Interes"
 */
const wow = new Sound(require('../audio/wow.mp3'), error => {
  if (error) {
    console.log('No se pudo cargar el sonido', error);
    return;
  }
});
/**
 * Reproduce un sonido al presionar el boton de "Sitios de Interes"
 */
export const wowButton = () => {
  wow.play();
}

const playQuiz = new Sound(require('../audio/quiz.mp3'), error => {
  if (error) {
    console.log('No se pudo cargar el sonido', error);
    return;
  }
});
export const quizButton = () => {
  playQuiz.play();
}

const select = new Sound(require('../audio/select.mp3'), error => {
  if (error) {
    console.log('No se pudo cargar el sonido', error);
    return;
  }
});
export const selectButton = () => {
  select.play();
}
/*
const exhibit = new Sound (require('../audio/exhibitSound.mp3'), error => console.log(error))
export const exhibitButton = () => {
  exhibit.play();
}
*/
const congrats = new Sound(require('../audio/congrats.mp3'), error => {
  if (error) {
    console.log('No se pudo cargar el sonido', error);
    return;
  }
});
export const congratsButton = () => {
  congrats.play();
}

const fail = new Sound(require('../audio/fail.mp3'), error => {
  if (error) {
    console.log('No se pudo cargar el sonido', error);
    return;
  }
});
export const failButton = () => {
  fail.play();
}

const lose = new Sound(require('../audio/lose.mp3'), error => {
  if (error) {
    console.log('No se pudo cargar el sonido', error);
    return;
  }
});
export const loseButton = () => {
  fail.setVolume(2);
  lose.play();
}

const win = new Sound(require('../audio/winner.mp3'), error => {
  if (error) {
    console.log('No se pudo cargar el sonido', error);
    return;
  }
});
export const winnerButton = () => {
  win.setVolume(0.7);
  win.play();
}
/*
const prueba = new Sound('https://a.clyp.it/kzbdzfqd.mp3', null, error => {
  if (error) {
    console.log('No se pudo cargar el sonido', error);
    return;
  }
});
export const pruebaButton = () => {
  prueba.play();
}*/