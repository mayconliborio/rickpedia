export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface CharacterCard {
    image: string;
    name: string;
    species: string;
}

export interface Pagination {
    count: number;
    pages: number;
    next: number;
}

export interface CharacterData {
    characters: {
        info: Pagination;
        results: Character[];
    };
}