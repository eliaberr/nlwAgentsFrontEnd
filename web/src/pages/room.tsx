import { Navigate, useParams } from "react-router-dom";
import type { RoomParams } from "types";

export function Room() {
  const params = useParams<RoomParams>();
  {/*if (!params.roomID) {
    return <Navigate replace to="/" />;
  }*/}

  return <div>Room Datails {JSON.stringify(params)}</div>;
}
