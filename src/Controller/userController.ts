import { executeQuery } from '../Database/connectDatabase';
import bcrypt from 'bcrypt';

export const userRegistration = async (req: any, res: any) => {
    return new Promise(async (resolve, reject) => {
        try {

            let { f_name, l_name, email, password, token } = req.body
            console.log(req.body)

            //=========================== INSERT QUERY ===========================
            // const sqlQuery = `insert into user_table (f_name,l_name,email,password,token)values('${f_name}', '${l_name}', '${email}', '${password}', '${token}')`

            // const sqlQuery = `insert into user_table (f_name,l_name,email,password,token)values("Sakshi", "chaudhary", "sakshi@gmail.com", "sakshi@12345",67432)`


            //=========================== SELECT QUERY ===========================
            // const sqlQuery = `select * from user_table`


            //=========================== UPDATE QUERY ===========================
            // const sqlQuery = `update user_table set f_name='Archana' where token=11223`


            //=========================== DELETE QUERY ===========================
            // const sqlQuery = `delete from user_table where token=67239`


            //=========================== JOIN TWO TABLES ===========================
            // const sqlQuery = `SELECT * FROM user_table as a join user_bankdetail as b on a.email= b.email;`



            //=========================== AVOID DUPLICACY ===========================
            const getRecord = `select * from user_table where email='${email}'`

            let resultset: any = await executeQuery(getRecord);

            if (resultset.length > 0) return res.status(400).send({ message: "User already registered please login" });
            //=======================================================================



            //=========================== BCRYPT THE PASSWORD ===========================
            const salt = await bcrypt.genSalt();

            const hashedPassword = await bcrypt.hash(password, salt);
            //=======================================================================

            const sqlQuery = `insert into user_table (f_name,l_name,email,password,token)values('${f_name}', '${l_name}', '${email}', '${hashedPassword}', '${token}')`

            let response = await executeQuery(sqlQuery)

            console.log("🚀 ~ file: userController.ts:13 ~ returnnewPromise ~ response:", response)

            return resolve(response);


            // return resolve("Hello world");
        } catch (error) {
            console.log("🚀 ~ file: userController.ts:19 ~ returnnewPromise ~ error:", error);
            return reject(error);
        }
    })
}




//=========================== USER LOGIN ===========================
export const userlogin = async (req: any, res: any) => {
    return new Promise(async (resolve, reject) => {
        try {

            let { email, password } = req.body

            const getRecord = `select * from user_table where email='${email}'`

            let resulset: any = await executeQuery(getRecord)

            if (resulset.length == 0) return res.status(404).send({ message: "user Not Found Please Register and try again to login" })

            const match: boolean = await bcrypt.compare(password, resulset[0].password)

            if (match == false) return res.status(400).send("Entered Password is Incorrect")

            return resolve({ message: "User Sucessfully Logged in", data: resulset })

        } catch (error) {
            console.log("🚀 ~ file: userController.ts:44 ~ returnnewPromise ~ error:", error)
        }
    })
}

