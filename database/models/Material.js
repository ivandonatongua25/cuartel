module.exports = (sequelize, dataTypes)=> {
    let alias ='Material';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },

    };
    let config = {

        tableName: 'material',
        timestamps : false,
        underscored: true
    }

const Material = sequelize.define(alias,cols,config);

//Asociacion
/*
Material.associate = function(models){
    Material.hasMany(models.Products,{
        as: 'products',
        foreignKey: 'material_id'

    });
}*/
return Material;
};