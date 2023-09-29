import React from 'react';

type CFloatListProps = {
	size?: 's' | 'm' | 'l';
	data?: any;
	selected?: string;
	intent?: 'default';
};

function CFloatList({}: CFloatListProps, ref: any) {
	return (
		<div className="float-list">
			<ul></ul>
		</div>
	);
}

const _data = [];

const CFloatListRef = React.forwardRef(CFloatList);
export const FloatList = React.memo(CFloatListRef);
FloatList.displayName = 'FloatList';
