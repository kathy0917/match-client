import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
	text-decoration: none;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
