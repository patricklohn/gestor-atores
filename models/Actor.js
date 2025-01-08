const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Actor = db.define('Actor',{
    code:{
        type: DataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true, 
        unique:true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    client:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0, 
    },
    supplier:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0, 
    },
    contact:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact_number:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
        validate: {
            len: [10,11]
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
        unique: true, 
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Ativo', 
    },
    uuid:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique:true,
    },
},{
    hooks:{
        beforeSave: (actor) => {
            if (actor.name){
                actor.name = actor.name.toUpperCase();
            }
        },
    },
});

module.exports = Actor; 