// app/board/[boardId]/page.tsx

import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";

export default async function BoardIdPage({
  params,
}: {
  params: { boardId: string };
}) {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
}
