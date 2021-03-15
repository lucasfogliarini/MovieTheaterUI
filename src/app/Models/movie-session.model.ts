import { MotionGraphics } from "./motion-graphics.enum";
import { MovieAudio } from "./movie-audio.enum";

export class MovieSession {
    id: number;
    movieTitle: string;
    roomName: string;
    roomId: number;
    movieId: number;
    presentationStart: Date;
    presentationEnd: Date;
    ticketPrice: number;
    motionGraphics: MotionGraphics;
    audio: MovieAudio;
}
