import { MotionGraphics } from "./motion-graphics.enum";
import { MovieAudio } from "./movie-audio.enum";

export class MovieSession {
    Id: number;
    PresentationStart: Date;
    PresentationEnd: Date;
    TicketPrice: number;
    MotionGraphics: MotionGraphics;
    Audio: MovieAudio;
}
