import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  //const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          UPSC Civil Services,2024 notification
        </Typography>
        <Typography color={medium}>Releasing soon!</Typography>
      </FlexBetween>
      
      
      <Typography color={medium} m="0.5rem 0">
        UPSC mains 2023 exam has concluded in last week of september 2023, the results are expected to be announced within 90 days.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
