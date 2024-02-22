import { useEffect, useState } from "react";
import * as Realm from "realm-web";

export const useTriggerHeart = ({ device }) => {
  const [heartCount, setHeartCount] = useState(0);
  const app = new Realm.App({ id: "data-nluux" });

  const loginEmailPassword = async (email, password) => {
    try {
      // Create an email/password credential
      const credentials = Realm.Credentials.emailPassword(email, password);
      // Authenticate the user
      console.log(credentials);
      const user = await app.logIn(credentials);
      // 'App.currentUser' updates to match the logged in user
      console.log(user);
      return user;
    } catch (error) {
      console.error(error);
    }
  };

  const login = async () => {
    try {
      const user = await loginEmailPassword("12345678", "12345678");
      await getCount();
      return user.accessToken;
    } catch (error) {
      console.error(error);
    }
  };

  const mongo = app?.currentUser?.mongoClient("cars");
  const collection = mongo?.db("portfolio")?.collection("hearts");

  const getCount = async () => {
    try {
      const count = await collection.count();
      setHeartCount(count);
    } catch (error) {
      console.error(error);
    }
  };

  const updateCount = async () => {
    await collection.insertOne({
      count: 1,
      createdAt: new Date().toString(),
      device,
    });
  };

  useEffect(() => {
    login();
  }, []);

  return { heartCount, updateCount };
};
