export class News {
    data?: NewsData[]
}

export class NewsSingle {
    data? : NewsData
}

export class NewsData {
    _id?: string;
    image?: string;
    thumbnail?: string;
    article?: string;
    title?: string;
}
