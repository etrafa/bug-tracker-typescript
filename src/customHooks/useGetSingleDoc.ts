//* READ FIRESTORE DATABASE

//react
import { useEffect, useState } from "react";

//firebase
import { db, useAuth } from "../firebase/firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";

//interfaces
import { IFirebaseUser } from "../Interfaces/Firebase-Interfaces/UserInterface";

export const useGetSingleDoc = (
  docName: string,
  docURL: string | undefined
) => {
  const [dbData, setDbData] = useState<IFirebaseUser | null>(null);
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        setLoading(true);
        if (typeof docURL === "string") {
          const docRef = doc(db, docName, docURL);
          onSnapshot(docRef, (item) => {
            setDbData({ ...item.data() });
          });
        }

        setLoading(false);
      };
      fetchData();
    }
  }, [currentUser, docURL, docName]);
  return { dbData, loading };
};
