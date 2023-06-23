import { executeQuery } from '../Database/connectDatabase';

export const userRegistration = async (req: any, res: any) => {
    return new Promise(async (resolve, reject) => {
        try {

            // let { f_name, l_name, email, password, token } = req.body

            //=========================== INSERT QUERY ===========================
            // const sqlQuery = `insert into user_table (id,f_name,l_name,email,password,token)values(2,'Nidhi', 'rai', 'nidhi@gmail.com', 'nidhi@45', 11223)`


            //=========================== SELECT QUERY ===========================
            // const sqlQuery = `select * from user_table`


            //=========================== UPDATE QUERY ===========================
            // const sqlQuery = `update user_table set f_name='Archana' where token=11223`


            //=========================== UPDATE QUERY ===========================
            // const sqlQuery = `delete from user_table where token=11223`


            //=========================== JOIN TWO TABLES ===========================
            const sqlQuery = `SELECT * FROM user_table as a join user_bankdetail as b on a.email= b.email;`

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