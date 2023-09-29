import LinkButton from '@/components/atoms/LinkButton';
import React from 'react';

function CNavigation() {
	const links = [
		{ text: '생방송', link: '' },
		{ text: '팜티비', link: '' },
		{ text: '팜뮤직', link: '' },
		{ text: '보관함', link: '' },
		{ text: '악보', link: '' },
		{ text: '구매하기', link: '' },
	];
	return (
		<nav className="navigation">
			<ul>
				{links.map((t) => (
					<li key={t.text}>
						<LinkButton data-size="m" link={t.link} text={t.text} />
					</li>
				))}
			</ul>
		</nav>
	);
}

const CNavigationRef = React.forwardRef(CNavigation);
export const Navigation = React.memo(CNavigationRef);
Navigation.displayName = 'Navigation';
