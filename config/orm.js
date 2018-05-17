var connection = require("../config/connection")

const printQuestionMarks = num => {
    let arr = [];
    num.forEach(value => {
        arr.push("?");
    });
    return arr.toString();
};

const objToSql = ob => {
    let arr = [];

    for (let key in ob) {
        const value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: (tableInput, cb) => {
        const queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: (table, cols, vals, cb) => {
        const queryString =
            `INSERT INTO ${table} (${cols.toString()}) VALUES (${pringQuestionMarks(vals.length)})`
        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: (table, objColVals, condition, cb) => {
        const queryString = `UPDATE ${table} SET ${objToSql(objColVals)}`;
        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: (table, condition, cb) => {
        const queryString = `DELETE FROM ${table} WHERE ${CONDTION}`;
        console.log(queryString);
        connection.query(queryString, (err,result) => {
            if(err) throw err;
            cb(result);
        })
        
    }
};

module.exports = orm;