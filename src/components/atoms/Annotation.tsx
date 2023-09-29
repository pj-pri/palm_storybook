import React from 'react';

type AnnotationProps = {
	text?: string;
};

/**
 * @description html 주석 작성용. 배포시 필요 없을 경우 지우기!
 *
 * */
function CAnnotation({ text }: AnnotationProps) {
	return (
		<div
			style={{
				display: 'none',
				height: 0,
				width: 0,
				opacity: 0,
			}}
			dangerouslySetInnerHTML={{
				__html: String.raw`<!--${text}-->`,
			}}
		></div>
	);
}

export const Annotation = React.memo(CAnnotation);
