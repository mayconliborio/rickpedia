type Episode = {
    id: number;
    name?: string;
    episode?: string;
    air_date?: string;
}
export interface Character {
    id: number;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    origin?: {
        name?: string;
        url?: string;
    };
    location?: {
        name?: string;
        url?: string;
    };
    image?: string;
    episode?: Episode[];
    url?: string;
    created?: string;
}

export interface CharacterCard {
    id: number;
    image?: string;
    name?: string;
    species?: string;
}

export interface Pagination {
    count?: number;
    pages?: number;
    next?: number;
    current?: number;
}

export interface CharactersData {
    characters: {
        info?: Pagination;
        results: Character[];
    };
}

export interface CharacterData {
    character: Character;
}
