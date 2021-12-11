export type Job = {
    contents: string;
    name: string;
    type: string;
    publication_date: Date;
    short_name: string;
    model_type: string;
    id: number;
    locations: Location[];
    categories: Category[];
    levels: Level[];
    tags: Tag[];
    refs: Refs;
    company: Company;
}

export type Location = {
    name: string;
}

export type Category = {
    name: string;
}

export type Company = {
    id: number;
    short_name: string;
    name: string;
}

export type Level = {
    name: string;
    short_name: string;
}

export type Tag = {
    name: string;
    short_name: string;
}

export type Refs = {
    landing_page: string;
}
