import { useQuery } from "@tanstack/react-query";
import type { GetRoomsQuestionsResponse } from "../lib/types";

export function userRoomsQuestions(roomId: string) {
  return useQuery({
    queryKey: ["getQuestions", roomId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3333/rooms/${roomId}/questions`);
      const result: GetRoomsQuestionsResponse = await response.json();
      return result;
    },
  });
}