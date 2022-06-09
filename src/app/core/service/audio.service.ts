import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AudioService {

    // Audio
    audioImg!: string;
    setAudio: HTMLAudioElement = new Audio();
    isAudioPlaying: boolean = false;

    // Retrieve Data
    audioData() {
        this.audioImg = '../../../assets/image/main-navbar/muted_note.png';
        this.setAudio.src = '../../../assets/audio/eternal-anamnesis.mp3';
        this.setAudio.loop === true;
    }

    // Play or Mute
    audioPlay() {
        if (!this.isAudioPlaying) {
            this.setAudio.play();
            this.audioImg = '../../../assets/image/main-navbar/note.png';
            this.isAudioPlaying = !this.isAudioPlaying;
            this.setAudio.muted = false;
        } else {
            this.audioImg = '../../../assets/image/main-navbar/muted_note.png';
            this.setAudio.muted = true;
            this.isAudioPlaying = !this.isAudioPlaying;
        }
    }
}