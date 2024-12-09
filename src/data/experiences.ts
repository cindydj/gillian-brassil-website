export type ExperiencesType = {
    name: string;
    details?: string;
    url: string;
    role?: string;
    startDate: string;
    endDate: string;
}[];

export const EXPERIENCES: ExperiencesType = [
    {
        name: 'Bloomberg Law',
        url: 'https://news.bloomberglaw.com/author/gillian-r.-brassil-24326208',
        role: 'Securities Litigation Reporter',
        startDate: 'December 2024',
        endDate: 'present',
    },
    {
        name: 'McClatchy',
        url: 'https://www.sacbee.com/profile/252266833/gillian-brassil',
        role: 'National Politics Correspondent',
        startDate: 'July 2021',
        endDate: 'November 2024',
    },
    {
        name: 'The New York Times',
        url: 'https://www.nytimes.com/by/gillian-r--brassil',
        role: 'Sports Reporter Fellow',
        startDate: 'June 2020',
        endDate: 'June 2021',
    },
    {
        name: 'GovSight',
        url: 'https://medium.com/@gbrassil',
        details:
            "Brassil's GovSight Medium page is linked instead.\nThe GovSight website now defunct.",
        role: 'Editor-in-Chief',
        startDate: 'October 2019',
        endDate: 'June 2021',
    },
    {
        name: 'Business Insider',
        url: 'https://www.businessinsider.com/author/gillian-brassil',
        role: 'Editing Fellow',
        startDate: 'January 2020',
        endDate: 'May 2020',
    },
    {
        name: 'The Stanford Daily',
        url: 'https://www.stanforddaily.com/author/gillian-brassil/',
        role: 'Managing Editor and Reporter',
        startDate: 'April 2016',
        endDate: 'December 2019',
    },
    {
        name: 'KZSU 90.1 FM',
        url: 'https://podcasts.apple.com/ca/podcast/kzsu-news/id1457135303',
        role: 'Lead News Correspondent',
        startDate: 'May 2017',
        endDate: 'December 2019',
    },
    {
        name: 'Peninsula Press',
        url: 'http://peninsulapress.com/author/gbrassil/',
        role: 'Multimedia and Data Reporter',
        startDate: 'September 2018',
        endDate: 'December 2019',
    },
    {
        name: 'CNBC',
        url: 'https://www.cnbc.com/gillian-brassil/',
        role: 'Breaking News Reporter',
        startDate: 'April 2018',
        endDate: 'August 2018',
    },
    {
        name: 'San Jose Mercury News',
        url: 'https://www.mercurynews.com/author/gillian-brassil/',
        role: 'Metro Reporter',
        startDate: 'June 2017',
        endDate: 'September 2017',
    },
    {
        name: 'Lowell Sun',
        url: 'https://www.lowellsun.com/author/gillian-brassil/',
        role: 'Metro Reporter',
        startDate: 'June 2016',
        endDate: 'August 2016',
    },
];
