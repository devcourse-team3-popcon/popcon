import { axiosInstance } from "../../../apis/axiosInstance";

export default function useSendMessage() {
  const sendMessage = async ({
    message,
    userId,
  }: {
    message: string;
    userId: string;
  }) => {
    try {
      const { status, data } = await axiosInstance.post("/messages/create", {
        message: message,
        receiver: userId,
      });

      if (status === 200) {
        console.log(data);
        console.log("Message sent successfully!");

        try {
          const { status } = await axiosInstance.post("/notifications/create", {
            notificationType: "MESSAGE",
            notificationTypeId: data._id,
            userId: data.receiver._id,
            postId: null,
          });

          if (status === 200) {
            console.log("Message alert sent!");
            return "";
          } else {
            console.log("Failed to send message alert");
          }
        } catch (error) {
          console.log("Message alert sending error: ", error);
        }

        // return "";
      } else {
        console.log("Failed to send message");
      }
    } catch (error) {
      console.log("Message sending error: ", error);
    }
  };

  return sendMessage;
}
