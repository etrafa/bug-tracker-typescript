//*READ FIRESTORE DATABASE

//react
import { useEffect, useState } from "react";

//firebase
import { collection, onSnapshot } from "firebase/firestore";
import { db, useAuth } from "../firebase/firebaseConfig";

//interfaces
import { IProject } from "../Interfaces/Firebase-Interfaces/ProjectInterface";
import { IFirebaseUser } from "../Interfaces/Firebase-Interfaces/UserInterface";

type UseGetDocsTypes = IFirebaseUser[] | IProject[] | null;

export const useGetDocs = (colName: string) => {
  const [dbData, setDbData] = useState<UseGetDocsTypes>(null);
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const docRef = collection(db, colName);
      if (typeof colName === "string") {
        onSnapshot(docRef, (item) => {
          setDbData(
            item.docs.map((i) => {
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
};
