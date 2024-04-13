export type ExperiencesType = {
    name: string;
    logo?: string;
    details?: string;
    url?: string;
    role?: string;
    startDate: string;
    endDate: string;
}[];

export const EXPERIENCES: ExperiencesType = [
    {
        name: 'McClatchy',
        url: 'https://www.sacbee.com/profile/252266833',
        role: 'National Politics Correspondent',
        startDate: 'July 2021',
        endDate: 'present',
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
        details:
            "The GovSight website now defunct. Brassil's GovSight Medium page is linked instead.",
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
