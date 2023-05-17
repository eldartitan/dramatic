export interface IMovieRating {
    "@type": string;
    id: string;
    title: string;
    titleType: string;
    year: number;
    canRate: boolean;
    otherRanks: OtherRank[];
    rating: number;
    ratingCount: number;
    ratingsHistograms: RatingsHistograms;
}

export interface OtherRank {
    id: string;
    label: string;
    rank: number;
    rankType: string;
}

export interface RatingsHistograms {
    "Females Aged 45+": FemalesAged45;
    "Aged under 18": AgedUnder18;
    Males: Males;
    "Aged 30-44": Aged3044;
    "Males Aged 45+": MalesAged45;
    "Top 1000 voters": Top1000Voters;
    "Aged 18-29": Aged1829;
    "US users": UsUsers;
    "Males Aged 18-29": MalesAged1829;
    "Females Aged 18-29": FemalesAged1829;
    "Females Aged 30-44": FemalesAged3044;
    "Males Aged under 18": MalesAgedUnder18;
    "Aged 45+": Aged45;
    "Females Aged under 18": FemalesAgedUnder18;
    "IMDb Users": ImdbUsers;
    "Males Aged 30-44": MalesAged3044;
    "IMDb Staff": ImdbStaff;
    "Non-US users": NonUsUsers;
    Females: Females;
}

export interface FemalesAged45 {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram;
    totalRatings: number;
}

export interface Histogram {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface AgedUnder18 {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram2;
    totalRatings: number;
}

export interface Histogram2 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface Males {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram3;
    totalRatings: number;
}

export interface Histogram3 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface Aged3044 {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram4;
    totalRatings: number;
}

export interface Histogram4 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface MalesAged45 {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram5;
    totalRatings: number;
}

export interface Histogram5 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface Top1000Voters {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram6;
    totalRatings: number;
}

export interface Histogram6 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface Aged1829 {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram7;
    totalRatings: number;
}

export interface Histogram7 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface UsUsers {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram8;
    totalRatings: number;
}

export interface Histogram8 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface MalesAged1829 {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram9;
    totalRatings: number;
}

export interface Histogram9 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface FemalesAged1829 {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram10;
    totalRatings: number;
}

export interface Histogram10 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface FemalesAged3044 {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram11;
    totalRatings: number;
}

export interface Histogram11 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface MalesAgedUnder18 {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram12;
    totalRatings: number;
}

export interface Histogram12 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface Aged45 {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram13;
    totalRatings: number;
}

export interface Histogram13 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface FemalesAgedUnder18 {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram14;
    totalRatings: number;
}

export interface Histogram14 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface ImdbUsers {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram15;
    totalRatings: number;
}

export interface Histogram15 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface MalesAged3044 {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram16;
    totalRatings: number;
}

export interface Histogram16 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface ImdbStaff {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram17;
    totalRatings: number;
}

export interface Histogram17 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface NonUsUsers {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram18;
    totalRatings: number;
}

export interface Histogram18 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}

export interface Females {
    aggregateRating: number;
    demographic: string;
    histogram: Histogram19;
    totalRatings: number;
}

export interface Histogram19 {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;
    "10": number;
}
