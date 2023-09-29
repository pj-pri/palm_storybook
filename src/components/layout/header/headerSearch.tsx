import { Annotation } from '@/components/atoms';
import React, { useEffect } from 'react';

type CHeaderSearchProps = {
	placeholder?: string;
};

function CHeaderSearch(
	{ placeholder = '검색어를 입력해 주세요.' }: CHeaderSearchProps,
	ref: any
) {
	useEffect(() => {
		if (window) {
			const formElement = document.querySelector(
				'#header-search'
			) as HTMLFormElement;
			formElement.onsubmit = () => false;
		}
	}, []);

	return (
		<form id="header-search" className="header-search">
			<Annotation text='실서버 적용시 비동기를 원하면 form tag에 onsubmit="return false"; 넣기 ' />
			<fieldset>
				<legend className="blind">전체 검색</legend>
				<input type="search" name="" id="" placeholder={placeholder} />
				<button title="검색하기" type="button">
					<i className="primary-search"></i>
				</button>
			</fieldset>
		</form>
	);
}

const CHeaderSearchRef = React.forwardRef(CHeaderSearch);
export const HeaderSearch = React.memo(CHeaderSearchRef);
HeaderSearch.displayName = 'HeaderSearch';
