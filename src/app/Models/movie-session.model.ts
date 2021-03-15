import { MotionGraphics } from "./motion-graphics.enum";
import { MovieAudio } from "./movie-audio.enum";

export class MovieSession {
    id: number;
    presentationStart: Date;
    presentationEnd: Date;
    ticketPrice: number;
    motionGraphics: MotionGraphics;
    audio: MovieAudio;
    roomId: number;
    movieId: number;
}
