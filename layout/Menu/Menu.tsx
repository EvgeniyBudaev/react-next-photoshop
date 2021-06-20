import React, { useContext } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import CoursesIcon from './icons/Courses.svg';
import ServicesIcon from './icons/Services.svg';
import BooksIcon from './icons/Books.svg';
import ProductsIcon from './icons/Products.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';
import styles from './Menu.module.css';


const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						<Link href={`/${m.route}`}>
							<a >
								<div className={classNames(styles.firstLevel, {
									[styles.firstLevelActive]: m.id == firstCategory
								})}>
									{m.icon}
									<span >{m.name}</span>
								</div>
							</a>
						</Link>
						{m.id == firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div className={classNames(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened
						})}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<Link key={p._id} href={`/${route}/${p.alias}`}>
					<a className={classNames(styles.thirdLevel, {
						[styles.thirdLevelActive]: false
					})}>
						{p.category}
					</a>
				</Link>
			))
		);
	};

	return (
		<div className={styles.menu}>
			<ul>
				{buildFirstLevel()}
			</ul>
		</div>
	);
};