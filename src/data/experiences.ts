import BUSINESS_INSIDER_LOGO from '../assets/images/experience/business_insider.png';
import CNBC_LOGO from '../assets/images/experience/cnbc.png';
import GOVSIGHT_LOGO from '../assets/images/experience/govsight.jpeg';
import KZSU_LOGO from '../assets/images/experience/kzsu.png';
import LOWELL_SUN_LOGO from '../assets/images/experience/lowell_sun.png';
import PENINSULA_PRESS_LOGO from '../assets/images/experience/peninsula_press.png';
import SAN_JOSE_MERCURY_NEWS_LOGO from '../assets/images/experience/san_jose_mercury_news.jpeg';
import STANFORD_DAILY_LOGO from '../assets/images/experience/stanford_daily.png';

export type ExperiencesType = {
    name: string;
    logo?: string;
    details?: string;
    url: string;
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
        url: 'https://medium.com/@gbrassil',
        details:
            "Brassil's GovSight Medium page is linked instead.\nThe GovSight website now defunct.",
        role: 'Editor-in-Chief',
        startDate: 'October 2019',
        endDate: 'June 2021',
        logo: GOVSIGHT_LOGO,
    },
    {
        name: 'Business Insider',
        url: 'https://www.businessinsider.com/author/gillian-brassil',
        role: 'Editing Fellow',
        startDate: 'January 2020',
        endDate: 'May 2020',
        logo: BUSINESS_INSIDER_LOGO,
    },
    {
        name: 'The Stanford Daily',
        url: 'https://www.stanforddaily.com/author/gillian-brassil/',
        role: 'Managing Editor and Reporter',
        startDate: 'April 2016',
        endDate: 'December 2019',
        logo: STANFORD_DAILY_LOGO,
    },
    {
        name: 'KZSU 90.1 FM',
        url: 'https://podcasts.apple.com/ca/podcast/kzsu-news/id1457135303',
        role: 'Lead News Correspondent',
        startDate: 'May 2017',
        endDate: 'December 2019',
        logo: KZSU_LOGO,
    },
    {
        name: 'Peninsula Press',
        url: 'http://peninsulapress.com/author/gbrassil/',
        role: 'Multimedia and Data Reporter',
        startDate: 'September 2018',
        endDate: 'December 2019',
        logo: PENINSULA_PRESS_LOGO,
    },
    {
        name: 'CNBC',
        url: 'https://www.cnbc.com/gillian-brassil/',
        role: 'Breaking News Reporter',
        startDate: 'April 2018',
        endDate: 'August 2018',
        logo: CNBC_LOGO,
    },
    {
        name: 'San Jose Mercury News',
        url: 'https://www.mercurynews.com/author/gillian-brassil/',
        role: 'Metro Reporter',
        startDate: 'June 2017',
        endDate: 'September 2017',
        logo: SAN_JOSE_MERCURY_NEWS_LOGO,
    },
    {
        name: 'Lowell Sun',
        url: 'https://www.lowellsun.com/author/gillian-brassil/',
        role: 'Metro Reporter',
        startDate: 'June 2016',
        endDate: 'August 2016',
        logo: LOWELL_SUN_LOGO,
    },
];
