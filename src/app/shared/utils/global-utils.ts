import { v4 as uuid } from 'uuid'

import {
	IDevToolsElement,
	IExperienceCard,
	IProjectCard,
} from '@/app/shared/models/global-interface.ts'


import minculturalogo from '@/assets/mincultura_logo.png'
import simus from '@/assets/simus.webp'
import sistemab from '@/assets/sistemab.webp'
import didigital from '@/assets/didigital.webp'
import developerx from '@/assets/developerx.png'
import gie from '@/assets/gie-visas.webp'
import bambas from '@/assets/bambas.webp'
import bwl from '@/assets/bwl.svg'
import x_bg_black from '@/assets/logo_black_bg.png'


export const Projects: IProjectCard[] = [
	{
		id: uuid(),
		project_name: 'Ministerio de Cultura',
		description: 'projects-section.projects.mincultura',
		screenShot: simus,
		demoLink: 'https://simus.mincultura.gov.co/',
		className: 'lg:row-span-3 xl:col-span-4',
		index: 1,
		technologies: ['.NET', 'SQL', 'Angular', 'Bootstrap'],
	},
	{
		id: uuid(),
		project_name: 'GIE Visas',
		description: 'projects-section.projects.gie',
		screenShot: gie,
		demoLink: 'https://demo-landing-agency.vercel.app/',
		isPrivate: true,
		className: 'lg:row-span-2 xl:col-span-4',
		index: 2,
		technologies: ['HTML5', 'CSS3', 'JavaScript'],
	},
	{
		id: uuid(),
		project_name: 'Las Bambas',
		description: 'projects-section.projects.bambas',
		screenShot: bambas,
		demoLink: 'https://demo-landing-miner.vercel.app/',
		className: 'lg:row-span-3 xl:col-span-4',
		index: 3,
		technologies: ['HTML5', 'CSS3', 'JavaScript'],
	},
	{
		id: uuid(),
		project_name: 'Sistema B x Di Digital',
		description: 'projects-section.projects.sistemab',
		screenShot: sistemab,
		demoLink: 'https://sistemabcolombia.org/',
		className: 'lg:row-span-2 xl:col-span-4',
		index: 4,
		technologies: ['WordPress', 'CSS', 'HTML5', 'JavaScript', 'PHP'],
	},
]
export const Experiences: IExperienceCard[] = [
	{
		id: uuid(),
		company_logo: developerx,
		company_name: 'Developer X',
		position_name: 'CEO & Founder',
		dates: 'experience-section.companies.developerx.dates',
		url_site: 'https://developerx.com.co/',
		background_url: x_bg_black,
	},
	{
		id: uuid(),
		company_logo: minculturalogo,
		company_name: 'Ministerio de Cultura',
		position_name: 'FullStack Developer',
		dates: 'experience-section.companies.mincultura.dates',
		url_site: 'https://www.mincultura.gov.co/Paginas/default.aspx',
		background_url: x_bg_black,
	},
	{
		id: uuid(),
		company_logo: didigital,
		company_name: 'Di Digital',
		position_name: 'Full Stack Developer',
		dates: 'experience-section.companies.didigital.dates',
		url_site: 'https://esperanza.mx/',
		background_url: x_bg_black,
	},
	{
		id: uuid(),
		company_logo: bwl,
		company_name: 'BWL',
		position_name: 'Front-end Developer',
		dates: 'experience-section.companies.bwl.dates',
		url_site: 'https://www.bwl.com.mx/',
		background_url: x_bg_black,
	},
]

export const DevTools: IDevToolsElement[] = [
	{
		id: uuid(),
		name: 'HTML5',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
	},
	{
		id: uuid(),
		name: 'CSS3',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
	},
	{
		id: uuid(),
		name: 'JavaScript',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
	},
	{
		id: uuid(),
		name: 'TypeScript',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
	},
	{
		id: uuid(),
		name: 'SASS',
		icon: 'https://www.svgrepo.com/show/374061/sass.svg',
	},
	{
		id: uuid(),
		name: 'React',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
	{
		id: uuid(),
		name: 'Angular',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
	},
	{
		id: uuid(),
		name: 'Next.js',
		icon: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
		className: 'dark:invert opacity-70',
	},
	{
		id: uuid(),
		name: 'Vite',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
	},
	{
		id: uuid(),
		name: 'Tailwind CSS',
		icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg',
	},
	{
		id: uuid(),
		name: '.NET',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg',
	},
	{
		id: uuid(),
		name: 'Laravel',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg',
	},
	{
		id: uuid(),
		name: 'Node.js',
		icon: 'https://www.svgrepo.com/show/355140/node.svg',
	},
	{
		id: uuid(),
		name: 'MongoDB',
		icon: 'https://www.svgrepo.com/show/331488/mongodb.svg',
	},
	{
		id: uuid(),
		name: 'MySQL',
		icon: 'https://www.svgrepo.com/show/306453/mysql.svg',
		className: 'dark:invert opacity-70',
	},
]
