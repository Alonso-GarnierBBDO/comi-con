import SoundURL from '../../assets/sound/click.mp3';

const AudioSound = () => {

    const audio : HTMLAudioElement = new Audio(SoundURL);
    audio.play();


}

export default AudioSound;