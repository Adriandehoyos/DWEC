import { Istats } from "./istats.interface";

export interface Ininja {
    affiliation: string;
    clan:        string;
    fullname:    string;
    gender:      string;
    id?:          number;
    image1:      string;
    image2:      string;
    level:       string;
    naturetype:  string;
    ninjaname:   string;
    stats?:       Istats;
}
