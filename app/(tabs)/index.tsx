import EditScreenInfo from "../../components/EditScreenInfo";
import {
	StyledContainer,
	StyledDivider,
	StyledTitle,
} from "../../components/StyledComponents/StyledComponents";

export default function TabOneScreen() {
	return (
		<StyledContainer>
			<StyledTitle>Tab One</StyledTitle>
			<StyledDivider />
			<EditScreenInfo path="app/(tabs)/index.tsx" />
		</StyledContainer>
	);
}
