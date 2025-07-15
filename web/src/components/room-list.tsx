import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import { dayjs } from "@/lib/format-relative-data";
import { userRooms } from "@/http/use-room";

export function RoomList() {
  const {data, isLoading} = userRooms()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso Rápido para as salas criadas recentimente
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading && (
          <p className="text-muted-foreground text-sm">Carregando salas ....</p>
        )}
        {data?.map((room) => {
          return (
            <Link
              className="flex items-center justify-between border p-3 hover:bg-accent/50 hover:cursor-pointer"
              key={room.id}
              to={`/room/${room.id}`}
            >
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="font-medium">{room.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge variant={"secondary"} className="text-xs">
                    {dayjs(room.createdAt).toNow()}
                  </Badge>
                  <Badge variant={"secondary"} className="text-xs">
                    {room.questionsCount}{" "}
                    {room.questionsCount > 1 ? "Perguntas" : "Pergunta"}
                  </Badge>
                </div>
              </div>
              <span className="flex items-center gap-1 text-sm">
                Entra <ArrowRight className="size-3" />
              </span>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
