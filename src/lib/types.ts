export type GetRoomsAPIResponse = Array<{
  id: string
  name: string
  questionsCount: number
  createdAt: string
}>

export type GetRoomsQuestionsResponse = Array<{
  id: string;
  question: string; 
  answer?: string | null;
  createdAt: string;
}>

export type CreateRoomRequest = {
  name: string
  description: string
}

export type CreateQuestionRequest = {
  question: string
}

export type CreateQuestionResponse = {
  questionId: string
  answer: string | null
}

export type CreateRoomResponse = {
  roomId: string
}

export type RoomParams = {
  roomID: string
}

