import { Text, View } from "react-native";
import styled from "styled-components/native";

export const StyledDivider = styled(View)`
	margin: 20px 0;
	height: 1px;
	width: 80%;
	background-color: #ccc;
`;

export const StyledContainer = styled(View)`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const StyledTitle = styled(Text)`
	font-size: 20px;
	font-weight: bold;
`;
