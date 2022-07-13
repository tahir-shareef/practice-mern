import { Box, Avatar, IconButton, Typography, Tooltip } from "@mui/material";

const ChatHeader = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1,
          minHeight: "50px",
          background: "#005286",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Tooltip title="Profile">
            <IconButton size="small" sx={{ mx: 1, mr: 0.5 }}>
              <Avatar>M</Avatar>
            </IconButton>
          </Tooltip>{" "}
          <Box>
            <Typography component={"span"}>Tahir Shareef</Typography>
            <Typography component={"p"} lineHeight="0.5" fontSize="10px">
              online
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ minWidth: 100 }}>menu</Typography>
      </Box>
    </>
  );
};
export default ChatHeader;
