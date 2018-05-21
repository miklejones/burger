const orm = require('../config/orm');

const burger = {
    all: cb => {
        orm.selectAll('burgers', res => {
            cb(res);
        });
    },
    create: (cols, vals, cb) => {
        orm.insertOne('burgers', cols, vals, res => {
            cb(res);
        });
    },
    update: (objColsVals, condition, cb) => {
        orm.updateOne('burgers', objColsVals, condition, res => {
            cb(res);
        });
    },
    delete: (condition, cb) => {
        orm.deleteOne('burgers', condition, res => {
            cb(res);
        });
    }
};

module.exports = burger;