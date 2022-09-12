//* READ FIRESTORE DATABASE

//react
import { useEffect, useState } from "react";

//firebase
import { db, useAuth } from "../firebase/firebaseConfig";
import { doc, DocumentData, onSnapshot } from "firebase/firestore";

export function useGetSingleDoc<T>(
  docName: string,
  docURL: string | undefined
) {
  const [dbData, setDbData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        setLoading(true);
        if (typeof docURL === "string") {
          const docRef = doc(db, docName, docURL);
          onSnapshot(docRef, (item: DocumentData) => {
            setDbData({ ...item.data() });
          });
        }

        setLoading(false);
      };
      fetchData();
    }
  }, [currentUser, docURL, docName]);
  return { dbData, loading };
}
