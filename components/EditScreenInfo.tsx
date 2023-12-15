import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const StyledText = styled(Text)`
	margin-top: 15px;
	font-size: 17px;
	line-height: 24px;
	text-align: center;
`;

export default function EditScreenInfo({ path }: { path: string }) {
	return (
		<View>
			<StyledText>
				Change any of the text, save the file, and your app will
				automatically update.
			</StyledText>
		</View>
	);
}
