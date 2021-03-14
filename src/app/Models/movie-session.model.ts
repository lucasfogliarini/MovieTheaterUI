import { MotionGraphics } from "./motion-graphics.enum";
import { MovieAudio } from "./movie-audio.enum";

export interface MovieSession {
    id: number;
    presentationStart: Date;
    presentationEnd: Date;
    ticketPrice: number;
    motionGraphics: MotionGraphics;
    audio: MovieAudio;
}
