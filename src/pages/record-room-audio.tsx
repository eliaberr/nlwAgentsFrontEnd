import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia == "function" &&
  typeof window.MediaRecorder == "function";

type RoomParams = {
  roomId: string;
};

export function RecordRoomAudio() {
  const params = useParams<RoomParams>();
  const [isRecording, setIsRecording] = useState(false);
  const recoder = useRef<MediaRecorder | null>(null);
  const intervalRaf = useRef<NodeJS.Timeout>(null)

  function stopRecording() {
    setIsRecording(false);
    if (recoder.current && recoder.current.state != "inactive") {
      recoder.current.stop();
    }
    if(intervalRaf.current){
      clearInterval(intervalRaf.current)
    }
  }

  async function uploadAudio(audio: Blob) {
    const formData = new FormData();
    formData.append("file", audio, "audio.webm");
    const response = await fetch(`http://localhost:3333/rooms/${params.roomId}/audio`,{
      method: "POST",
      body: formData
    });
    const result = await response.json()
    console.log(result)
  }

  function createRecorder(audio:MediaStream) {
    recoder.current = new MediaRecorder(audio, {
      mimeType: "audio/webm",
      audioBitsPerSecond: 64_000,
    });
    recoder.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        uploadAudio(event.data);
      }
    };
    recoder.current.onstart = () => {
      console.log("Gravação iniciada");
    };
    recoder.current.onstop = () => {
      console.log("Gravação encerrada/pausada");
    };
    recoder.current.start();
  }
  
  async function startRecording() {
    if (!isRecordingSupported) {
      alert("O seu navegadro não suporta gravação");
      return;
    }
    setIsRecording(true);
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    });
    createRecorder(audio)
    intervalRaf.current = setInterval(() => {
      recoder.current?.stop()
      createRecorder(audio)
    }, 5000)
  }

  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }
  return (
    <div className="flex justify-center items-center h-screen gap-3 flex-col">
      {isRecording ? (
        <Button onClick={stopRecording}>Parar áudio</Button>
      ) : (
        <Button onClick={startRecording}>Gravar áudio</Button>
      )}
      {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
    </div>
  );
}
