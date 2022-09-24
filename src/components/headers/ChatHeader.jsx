import { Box, Avatar, IconButton, Typography, Tooltip } from "@mui/material";

const ChatHeader = ({ user }) => {
  const { name, profileImage, status } = user;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1,
          height: "58px",
          background: "#040046",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Tooltip title="Profile">
            <IconButton size="small" sx={{ mx: 1, mr: 0.5 }}>
              <Avatar xs={{ background: "gray" }} src={profileImage}>
                {name}
              </Avatar>
            </IconButton>
          </Tooltip>{" "}
          <Box>
            <Typography component={"span"}>{name}</Typography>
            <Typography component={"p"} lineHeight="0.5" fontSize="10px">
              {status}
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ minWidth: 100 }}>menu</Typography>
      </Box>
    </>
  );
};
export default ChatHeader;
