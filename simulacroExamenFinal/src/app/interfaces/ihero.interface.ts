import { Ipowerstats } from "./ipowerstats.interface";

export interface Ihero {
    id?: number;          
    heroname: string;
    fullname: string;
    image1: string;
    image2: string;
    image3: string;
    gender: string;
    race: string;
    alignment: string;    // 'good' o 'bad'
    powerstats?: Ipowerstats;
}
