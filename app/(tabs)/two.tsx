import EditScreenInfo from "../../components/EditScreenInfo";
import {
	StyledContainer,
	StyledDivider,
	StyledTitle,
} from "../../components/StyledComponents/StyledComponents";

export default function TabTwoScreen() {
	return (
		<StyledContainer>
			<StyledTitle>Tab Two</StyledTitle>
			<StyledDivider />
			<EditScreenInfo path="app/(tabs)/two.tsx" />
		</StyledContainer>
	);
}
