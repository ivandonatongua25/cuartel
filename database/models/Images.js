module.exports = (sequelize, dataTypes)=> {
    let alias ='Images';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        url: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },

    };
    let config = {

        tableName: 'images',
        timestamps : false,
        underscored: true
    }

const Images = sequelize.define(alias,cols,config);

//Asociacion

Images.associate = function(models){
    Images.belongsTo(models.Products,{
        as: 'products',
        foreignKey: 'product_id'

    });
}
return Images;
};