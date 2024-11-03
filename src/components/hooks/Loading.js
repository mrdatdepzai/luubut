import { Skeleton, Card, CardContent } from "@mui/material";

const Loading = () => {
  return (
    <Card sx={{ mb: 2, borderRadius: "12px" }}>
      <CardContent>
        <Skeleton variant="rectangular" height={200} sx={{ mb: 2 }} />
        <Skeleton variant="text" height={40} sx={{ mb: 1 }} />
        <Skeleton variant="text" height={20} width="60%" />
      </CardContent>
    </Card>
  );
};

export default Loading; 