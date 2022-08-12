export class Category {
    data?: CategoryData[]
}

export class CategoryData {
    _id?: string
    metaname?: string
    category_image_file?: string
    category_name?: string
    tier_list?: Tier[]
}

export class Portfolio {
    data?: PortfolioData
}

export class PortfolioData {
    _id?: string
    category_id?: string
    tier_list?: Tier[]
}

export class TierData {
    data?: Tier[]
}

export class Tier {
    _id?: string
    metanames?: string[]
    tier_portofolio_files?: FilesData[]
    portfolio_id?: string
    tier_name?: string
    tier_description?: string
    youtube_url?: string
}

export class FilesData {
    _id?: string
    url?: string
    type?: string

}
