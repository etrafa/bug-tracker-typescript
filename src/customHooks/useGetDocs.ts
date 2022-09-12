//*READ FIRESTORE DATABASE

//react
import { useEffect, useState } from "react";

//firebase
import { collection, DocumentData, onSnapshot } from "firebase/firestore";
import { db, useAuth } from "../firebase/firebaseConfig";

export function useGetDocs<T>(colName: string) {
  const [dbData, setDbData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const docRef = collection(db, colName);
      if (typeof colName === "string") {
        onSnapshot(docRef, (item: DocumentData) => {
          setDbData(
            item.docs.map((i: DocumentData) => {
              return { ...i.data(), id: i.id };
            })
          );
        });
        setLoading(false);
      }
    };
    fetchData();
  }, [currentUser, colName]);
  return { dbData, loading };
}
