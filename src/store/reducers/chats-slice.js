import { createSlice } from "@reduxjs/toolkit";

const chat = createSlice({
  name: "chat",
  initialState: {
    list: [
      {
        name: "Tahir Shareef",
        profileImage:
          "https://1fid.com/wp-content/uploads/2022/02/boy-dp-image-77-1024x1002.jpg",
        lastMsg: "How are you ?",
        seen: true,
      },
      {
        name: "Shahrukh King",
        profileImage:
          "https://1fid.com/wp-content/uploads/2022/02/boy-dp-image-75-1024x1003.jpg",
        lastMsg: "Mein thk tm sunao !",
        tick: true,
      },
      {
        name: "Haseeb Khan",
        profileImage:
          "https://cdn.statusqueen.com/dpimages/thumbnail/Mask_boy_dp_-2599.jpg",
        lastMsg: "Han bolo",
        delivered: true,
      },
      {
        name: "Arsal Malik",
        profileImage:
          "https://ienglishstatus.com/wp-content/uploads/2022/02/Stylish-Standard-Whatsapp-DP-Boy.jpg",
        lastMsg: "Okay",
      },
    ],
  },
});
export default chat.reducer;
