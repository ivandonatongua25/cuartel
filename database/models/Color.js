module.exports = (sequelize, dataTypes)=> {
    let alias ='Color';
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

        tableName: 'color',
        timestamps : false,
        underscored: true
    }

const Color = sequelize.define(alias,cols,config);

//Asociacion

Color.associate = function(models){
    Color.hasMany(models.Products,{
        as: 'products',
        foreignKey: 'color_id'

    });
}
return Color;
};