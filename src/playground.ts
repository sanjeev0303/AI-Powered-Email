import { db } from "./server/db";


await db.user.create(({
    data: {
        emailAddress: "alice@example.com",
        firstName: "Alice",
        lastName: "Doe",

    }
}))

console.log("done");
