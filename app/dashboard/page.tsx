import { auth } from "@clerk/nextjs";
import DropZone from "../(components)/DropZone";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import TableWrapper from "../(components)/table/TableWrapper";

async function Dashboard() {
  const { userId } = auth();

  const docsResults = await getDocs(collection(db, "users", userId!, "files"));
  const skeletonFiles: FileType[] = docsResults.docs.map((x) => ({
    id: x.id,
    filename: x.data().filename || x.id,
    timestamp: new Date(x.data().timestamp?.seconds * 1000) || undefined,
    fullName: x.data().fullName,
    downloadURL: x.data().downloadURL,
    type: x.data().type,
    size: x.data().size,
  }));
  return (
    <div className="border-t">
      <DropZone />

      <section className="container space-y-5">
        <h2 className="font-bold">All Files</h2>
        <div>
          <TableWrapper skeletonFiles={skeletonFiles} />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
