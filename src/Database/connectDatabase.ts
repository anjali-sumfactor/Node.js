import mysql from 'mysql';

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Anjali123@",
    database: "anjalidb"
});

export const connectNodeDatabase = () => {
    return new Promise((resolve, reject) => {
        try {
            connection.connect((error) => {
                if (error) return reject(error);
                return resolve("Database connected successfully");
            });
        } catch (error) {
            console.log("🚀 ~ file: ConnectDatabase.ts:16 ~ returnnewPromise ~ error:", error)
        }
    })
};

export const executeQuery = (sqlQuery: string) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(sqlQuery, (error, response) => {
                console.log("🚀 ~ file: ConnectDatabase.ts:31 ~ connection.query ~ error:", error)
                if (error) return reject(error)
                return resolve(response)
            })
        } catch (error) {
            console.log("🚀 ~ file: ConnectDatabase.ts:32 ~ returnnewPromise ~ error:", error)

        }
    })
}