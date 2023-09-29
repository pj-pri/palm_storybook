import React, { useEffect, useState } from 'react';
import { NationLang, data } from './data';

type CGlobeLinksProps = {
	// text?: NationLang;
	selected?: NationLang;
};

function CGlobeLinks({ selected = 'ko' }: CGlobeLinksProps, ref: any) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div data-active={isOpen} className="globe-links">
			<button
				onClick={() => {
					setIsOpen((t) => !t);
				}}
				className="globe-links__button"
			>
				{data.find((t) => t.value === selected)?.name}
				<i className="arrow-down"></i>
			</button>

			<ul className="globe-links__list">
				{data.map((t) => (
					<li key={t.value}>
						<a href="/">{t.name}</a>
					</li>
				))}
			</ul>
		</div>
	);
}

const CGlobeLinksRef = React.forwardRef(CGlobeLinks);
export const GlobeLinks = React.memo(CGlobeLinksRef);
