export interface ItemData {
    center: string;
    title: string;
    nasa_id: string;
    date_created: string;
    keywords: string[];
    media_type: string;
    description_508: string;
    secondary_creator: string;
    description: string;
}

export interface ItemLinks {
    href: string;
    rel: string;
    render: string;
}

export interface CollectionItem {
    href: string;
    data: ItemData[];
    links: ItemLinks[];
}

export interface ImageCollection {
    version: string;
    href: string;
    items: CollectionItem[];
    metadata: {
        total_hits: number;
    };
    links: { rel: string; prompt: string; href: string }[];
}
export interface SearchImageResponse{
    collection:ImageCollection;
}
