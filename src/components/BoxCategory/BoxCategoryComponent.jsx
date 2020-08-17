import React from "react";
import * as S from "./styles";

const BoxCategoryComponent = ({ abbr, nameKr, counts, color }) => {
	return (
		<S.Container color={color}>
			<S.Title>{abbr}</S.Title>
			<S.Detail>{nameKr}</S.Detail>
			<S.Count>{counts}개의 매칭</S.Count>
		</S.Container>
	);
};

export default BoxCategoryComponent;
